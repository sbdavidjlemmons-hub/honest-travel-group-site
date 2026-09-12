# GHL email send workflow — build spec

Status: **spec only. Nothing built. Nothing sent.**
Cost: $0. Built entirely inside GoHighLevel. No middleware.
Date: 2026-09-12

Today GHL holds three workflows — Hold Music Bridge, Inbound Webhook Intake,
Website Intake. **None of them sends email.** The five cold templates exist and
are wired to nothing. This is the build sheet that closes that gap.

---

## 0 — Pre-send gate (do this before you build anything)

None of the workflows below may be switched on until all six rows pass. Check
them by sending one message to a Gmail seed and opening **Show original**.

| # | Check | Pass value | Where |
|---|---|---|---|
| G1 | SPF | `spf=pass` | Gmail → Show original |
| G2 | DKIM | `dkim=pass` **and** `d=` your sending subdomain | Show original |
| G3 | DMARC | `dmarc=pass` | Show original |
| G4 | Return-Path | `@<your subdomain>` | Show original |
| G5 | **Not** `msgsndr.biz` | If Return-Path is `msgsndr.biz`, **STOP** | Show original |
| G6 | One-click unsubscribe | `List-Unsubscribe-Post: List-Unsubscribe=One-Click` present | Show original |

G5 is the one that fails silently. LC Email defaults to a shared Mailgun
Return-Path until a dedicated sending domain is attached in
**Settings → Email Services → Dedicated Domain and IP**. Shared Return-Path
means you are borrowing a stranger's reputation and you cannot repair it.

### Decision required before G2 passes

Two repo documents name two different sending subdomains:

| Document | Subdomain |
|---|---|
| `docs/cold-stream-setup.md` | `go.honestvacationmarketing.com` |
| `02-EMAIL-CAMPAIGN.md` pre-send gate | `mail.honestvacationmarketing.com` |

Pick one. It is a single value typed into GHL's dedicated-domain field and into
DNS, and it can never be changed afterwards without throwing away the warm-up.
**Recommendation: `mail.`** — it is the one written into the gate that the
campaign doc treats as controlling, and changing the gate is more error-prone
than changing the runbook.

Transactional mail (Zoom links, confirmations, reminders) stays on the root
domain forever and never enters any workflow below.

---

## 1 — Objects to create first

### 1a. Tags

| Tag | Meaning | Set by |
|---|---|---|
| `send-batch-01` | Approved for wave 1 | Import / manual |
| `wu-seed` | Seed inbox or known replier | Manual, ~20-40 contacts |
| `int-cruise` `int-cancun` `int-hawaii` `int-cabo` `int-orlando` | Intent routing | Import / scoring |
| `int-unknown` | No intent resolved | W3 fallback branch |
| `sent-w1` | Has received wave 1 | W2 / W3 |
| `sup-hard` | Permanently suppressed | W1 |
| `seg-senior` | In the ~2,958 senior segment | Import |
| `hold-senior` | Blocked pending Dave's ruling | W3 guard |
| `routed-default` | Got the fallback template | W3 |

### 1b. Custom value

**Settings → Custom Values → New**
Name: `Send Tier`. Value: `0`.
This is the throttle dial. You change one field; every workflow reads it.

### 1c. Smart lists

**Contacts → Filters → Save as Smart List.**

| Smart list | Filter |
|---|---|
| `SL-Wave1-Eligible` | Tag `send-batch-01` AND `email_validation` = `Valid` AND NOT tag `sup-hard` AND NOT tag `seg-senior` AND NOT tag `sent-w1` AND Email DND = false |
| `SL-Seeds` | Tag `wu-seed` |
| `SL-Senior-Held` | Tag `seg-senior` |
| `SL-Suppressed` | Tag `sup-hard` OR Email DND = true |

`SL-Wave1-Eligible` is the only number that matters. Record its count before
you send anything — it is the denominator for every rate in section 5, and it
resolves the A0 discrepancy (4,059 / 4,859 / 4,876 across three sources).
**Until those three reconcile, no tier above 3 may be set.**

### 1d. Absolute exclusions — build these into `SL-Wave1-Eligible` as NOT filters

- Tag `zz-tagwipe-canary`
- Contact IDs `GeqMtHnYNHhzf2FsOShD`, `77FlnayTwNLefosc7rXb`
- Tag `primary-exit`
- Role addresses: email contains `info@`, `admin@`, `sales@`, `support@`,
  `postmaster@`, `abuse@`, `noreply@`
- Any prior bounce, unsubscribe, or complaint
- Anyone who has already replied

---

## 2 — W1 · Suppression Guard

**Build this first and turn it on first.** It is the only workflow that may run
before a single cold email goes out, and nothing else is safe without it.

- **Name:** `HVM — Suppression Guard`
- **Triggers** (add all five to one workflow):
  - Email Events → Event type `Bounce`
  - Email Events → Event type `Complaint`
  - Email Events → Event type `Unsubscribe`
  - Customer Replied → Channel `Email`
  - Contact DND → `Email` set to on
- **Actions, in order:**
  1. Add Tag → `sup-hard`
  2. Update Contact → DND Email = `true`
  3. Remove Tag → `send-batch-01`
  4. Remove Contact from Workflows → `HVM — Cold Batch Sender`, `HVM — Warm-up Seeds`
- **Settings:** Allow Re-Entry **ON** (a contact can bounce then complain).

A reply is a suppression event here, not a win to chase. A human reads the
inbox and answers. Nothing automated ever replies to a replier.

---

## 3 — W2 · Warm-up Seeds (days 1–3)

Days 1–3 send to seeds and known repliers **only**. Zero cold contacts. This is
locked and was already ratified in PR #18.

- **Name:** `HVM — Warm-up Seeds`
- **Trigger:** Contact Tag → tag `wu-seed` added
- **Settings → Drip:** `50` contacts every `24` hours
- **Settings:** Allow Re-Entry OFF · Stop on Response ON (Email replied) ·
  Contact Time Zone ON · Sending window `09:00–16:00` contact local, Mon–Fri
- **Actions:**
  1. Send Email → template `HVM Cold — Cruise`
  2. Add Tag → `sent-w1`

Run it three days. Then read the seed inboxes by hand: Primary or Promotions in
Gmail, Focused or Other in Outlook. If more than one seed lands in Spam, do not
start day 4 — fix authentication or content first.

---

## 4 — W3 · Cold Batch Sender (day 4+)

- **Name:** `HVM — Cold Batch Sender`
- **Trigger:** Contact Tag → tag `send-batch-01` added
- **Settings → Drip:** batch size per section 5 · every `24` hours
- **Settings:** Allow Re-Entry **OFF** · Stop on Response ON (Email replied) ·
  Contact Time Zone ON · Sending window `09:00–16:00` contact local, Mon–Fri

### 4a. Entry guards — run before any send action

| Order | If/Else condition | If true |
|---|---|---|
| 1 | Tag `seg-senior` exists | Add Tag `hold-senior` → **End workflow** |
| 2 | `email_validation` ≠ `Valid` | End workflow |
| 3 | Tag `sup-hard` exists OR DND Email = true | End workflow |
| 4 | Custom value `Send Tier` = `0` | End workflow |

Guard 1 is a legal gate, not a performance gate. The ~2,958-contact senior
segment carries the highest exposure on the list and receives **zero mail**
until Dave rules it mailable in writing. Guard 4 is the kill switch: set
`Send Tier` to `0` and every contact already in the workflow walks out without
sending.

### 4b. Intent routing — one If/Else with five branches plus fallback

| Branch | Condition | Template |
|---|---|---|
| A | Tag `int-cruise` | `HVM Cold — Cruise` |
| B | Tag `int-cancun` | `HVM Cold — Cancun` |
| C | Tag `int-hawaii` | `HVM Cold — Hawaii` |
| D | Tag `int-cabo` | `HVM Cold — Cabo` |
| E | Tag `int-orlando` | `HVM Cold — Orlando` |
| Fallback | none of the above | `HVM Cold — Cruise` + Add Tag `routed-default` + Add Tag `int-unknown` |

The fallback is a decision, not a default: cruise is the broadest-appeal offer
for a timeshare-owner audience and the Florida ports are the deepest inventory.
Tagging it `routed-default` keeps it measurable as its own cohort, so if it
underperforms you find out instead of averaging it away.

### 4c. After the send

1. Add Tag → `sent-w1`
2. Remove Tag → `send-batch-01`
3. Wait → `4 days`
4. If/Else → Custom value `Send Tier` ≥ `3`
   - **true:** Send Email → `HVM Cold — Bump` (short, replies into thread) →
     Add Tag `sent-bump-1`
   - **false:** End workflow

No follow-up below tier 3. A bump doubles daily volume, and doubling volume
during warm-up is the single fastest way to lose a domain.

### 4d. V5 certificate-in-body

The V5 design (`EMAIL_port-canaveral-v5.html`) is approved-pending in the inbox
under subject `[V5 PREVIEW]` and is **not loaded into GHL**. Do not load it mid
wave. Ship wave 1 on the five verified templates, then A/B V5 against the
control at tier 3 or higher — one variable, per section 6.

---

## 5 — The throttle ladder

`Send Tier` drives both the workflow drip batch size and how much you are
allowed to do that day.

| Tier | Days | Daily cap | Audience | Advance when |
|---:|---|---:|---|---|
| 0 | — | 0 | none — kill switch | — |
| 1 | 1–3 | 50 | seeds + repliers only | 3 clean days, seeds in Primary |
| 2 | 4–7 | 200 | cold begins | 4 clean days |
| 3 | 8–14 | 500 → 1,000 | cold | 7 clean days **and** A0 count reconciled |
| 4 | 15–21 | 2,000 → 5,000 | cold | 7 clean days |
| 5 | 22–30 | 10,000 | cold | 9 clean days |
| 6 | 30+ | 25,000+ | cold | steady state |

Advance by editing the custom value and the drip batch size. Two fields. Never
skip a tier, and never advance on a day you did not read the numbers.

---

## 6 — Stop-lines

**GHL will not compute these for you and will not stop itself.** There is no
native rolling bounce-rate halt. This is a 60-second manual read, once a day,
every day, at **Marketing → Emails → Statistics**, filtered to yesterday.

| Metric | Green | **STOP** |
|---|---:|---:|
| Bounce rate | < 1.0% | **≥ 2.0%** |
| Complaint rate | < 0.05% | **≥ 0.10%** |
| Unsubscribe rate | < 0.5% | ≥ 1.0% — investigate |

### Halt procedure

1. Set `Send Tier` to `0` immediately. Sending stops at the next batch.
2. Diagnose the cause: list source, one bad segment, content, or authentication.
3. Resume at **half** the tier you halted on.
4. Require **7 consecutive clean days** before advancing again.

### A/B discipline

One variable at a time. Subject line **or** body **or** send time — never two.
Minimum 500 per arm before reading a result.
`utm_content` is **RESERVED** for `la-*` rep codes and may not be used for test
arms. Use `utm_term` for A/B labels.

---

## 7 — Build order

| # | Step | Done when |
|---|---|---|
| 1 | Pick the sending subdomain, publish DNS | Records resolve |
| 2 | Attach dedicated sending domain in GHL | G5 passes on a seed |
| 3 | Run the section 0 gate | All six rows pass |
| 4 | Create tags, `Send Tier` = `0`, four smart lists | `SL-Wave1-Eligible` count recorded |
| 5 | Build and activate **W1 Suppression Guard** | Test bounce suppresses a test contact |
| 6 | Build **W2 Warm-up Seeds**, tag 20–40 seeds | 50/day flowing |
| 7 | Days 1–3 run. Read seed placement by hand | Seeds in Primary/Focused |
| 8 | Build **W3 Cold Batch Sender** with all four guards | Guard test: a `seg-senior` contact exits without mail |
| 9 | Set `Send Tier` = `2`, drip 200/day | Day 4 begins |
| 10 | Daily stop-line read, advance by the ladder | — |

Step 5 before step 6. Step 8's guard test before step 9. A workflow that can
send before it can suppress is the one configuration that cannot be undone.

---

## 8 — Compliance notes, live now

- **CAN-SPAM, not TCPA.** TCPA governs calls and SMS; this is email only, so
  the controlling rules are CAN-SPAM: accurate From and Reply-To, no deceptive
  subject line, a physical postal address in every message, working
  unsubscribe honored within 10 business days. Section 0 G6 covers the
  one-click header; confirm the postal address is in all five templates.
- **Lead-source provenance.** The 1,000 wave-1 contacts are DataMoon-sourced.
  Keep the acquisition record — source, date, and what the contact was told —
  retrievable per contact. A complaint you cannot answer with provenance is the
  one that becomes a problem.
- **The senior segment.** ~2,958 contacts held at guard 1. This is the highest
  legal exposure on the list. It stays at zero mail until Dave rules in writing.
- **No SMS. No cold calls.** A2P registration is pending and there is no DNC
  scrub. Nothing in this spec touches a phone number, and no workflow above may
  be extended to SMS until both of those are resolved.
- **Certificate claims.** Every template linking to a certificate page inherits
  that page's disclosure: $0 at the presentation, stated reservation and
  booking costs at the time dates are reserved, and the eligibility terms.
  Templates may not state or imply a cash value.

---

## 9 — What this spec does not do

| Gap | Why | Who closes it |
|---|---|---|
| Auto-halt on stop-lines | GHL has no rolling-rate trigger | Manual daily read, section 6 |
| A0 count reconciliation | Three sources disagree | Dave, before tier 3 |
| Senior segment ruling | Legal call, not a config | Dave |
| V5 template load | Approved-pending, not in GHL | Dave, at tier 3+ |
| Subdomain choice | Two docs conflict | Dave, before step 1 |

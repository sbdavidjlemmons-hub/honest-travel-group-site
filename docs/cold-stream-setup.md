# Cold stream — sending setup

Operational runbook for the intent stream that `js/scoring.js` feeds.
Everything here is DNS and sending config. None of it is in the site build.

---

## The one correction to make first

> "we're just killing the subdomain, but we're gonna keep alive the domain
> because the reputation won't be sacrificed"

Mostly right, and it is the correct architecture. But **subdomain isolation is
strong, not absolute**, and the difference matters:

- **Gmail and Microsoft judge the subdomain first, but they also carry an
  organizational-domain reputation.** A brand-new subdomain starts out partly
  inheriting the parent's standing, which is why the root has to stay clean —
  it is the collateral, not just the neighbour.
- **Blocklists list at the domain level.** Spamhaus and friends will list
  `honestvacationmarketing.com`, not just `go.` — so a spamtrap hit or a
  sustained complaint rate on the cold stream *can* reach the root.

What this buys you is real and worth having: it absorbs **ordinary** damage —
a mediocre complaint rate, a bad week, a list segment that underperforms —
completely. It does **not** absorb catastrophic damage.

So the subdomain is not a licence to stop watching. It is what makes the
monitoring *sufficient*: it buys you enough margin that catching a problem at
the weekly check is early enough, instead of needing to catch it same-day.

---

## The split

| | Cold stream | Warm stream |
|---|---|---|
| Who | Strangers, resolved from anonymous traffic | People who gave us an address, toured, or attended |
| Segments | `presentation-seeker`, `certificate-seeker` | `mini-vacation-seeker`, `membership-prospect` |
| Sends from | `go.honestvacationmarketing.com` | `honestvacationmarketing.com` |
| Gate | Tier A and B only | No tier floor — they already raised their hand |
| Carries | Confirmations? **Never.** | Zoom links, reminders, receipts |

`scoring.js` decides this per person and returns it as `sendFrom`. Do not let
a send job override it. `rank(profiles, {stream: 'cold'})` pulls one queue.

**Transactional mail never moves.** Zoom links, booking confirmations and
session reminders stay on the root domain forever. They are the mail whose
delivery the whole business depends on, and they are the reason the split
exists.

---

## DNS — the records to add

Subdomain: **`go.honestvacationmarketing.com`** (any label works; `go`, `mail`,
`travel`. Pick one and never reuse it for anything else.)

Your ESP gives you the exact values. The shape:

```
; SPF — on the subdomain, not the root
go.honestvacationmarketing.com.        TXT   "v=spf1 include:<esp-spf-host> ~all"

; DKIM — usually a CNAME your ESP hands you; there may be two
<selector>._domainkey.go.honestvacationmarketing.com.   CNAME  <esp-value>

; DMARC — on the subdomain. Start at p=none and READ THE REPORTS.
_dmarc.go.honestvacationmarketing.com. TXT   "v=DMARC1; p=none; rua=mailto:dmarc@honestvacationmarketing.com; pct=100"
```

**Three things that trip people up:**

1. **Check the root's DMARC first.** If `_dmarc.honestvacationmarketing.com`
   has an `sp=` tag, that tag governs every subdomain — including this one —
   until the subdomain gets its own record. Add the subdomain record and it
   takes over.
2. **The root needs its own DMARC too**, if it does not have one. A root at
   `p=none` with reporting on is the early-warning system for whether cold-stream
   trouble is reaching it. Do not skip this — it is how you find out the
   firewall leaked.
3. **Move to `p=quarantine` on the subdomain only after two clean weeks** of
   DMARC reports showing your own mail passing. Going straight to enforcement
   with a misconfigured DKIM silently bins your own campaign.

---

## Warm-up ramp

Do not open at volume. This is the schedule, and 50/day is a good place to
start — it is roughly where you said you wanted to begin, and it is right.

| Days | Per day | Notes |
|---|---|---|
| 1–3 | 50 | Highest-scoring tier A only. Best content you have. |
| 4–6 | 100 | Still tier A. |
| 7–10 | 200 | Open to tier B. |
| 11–14 | 400 | |
| 15–21 | 800 | |
| 22+ | 1,500+ | Only if complaints are under 0.10% the whole way. |

**Send inside business hours in the recipient's timezone**, spread across the
hours rather than dumped at the top of one. 50/day sent as 50 at 9:01am looks
different to a filter than 50 across the morning.

**Any day the complaint rate exceeds 0.10%: stop climbing.** Hold at the
current volume for three days. If it does not come down, drop a step. Two
consecutive breaches, pause the cold stream entirely and look at the content —
that is the signal that the mail itself is the problem, not the volume.

---

## Monitoring

Register the sending subdomain **and** the root separately in
[Google Postmaster Tools](https://postmaster.google.com). Watch both. The root's
numbers are how you find out whether the isolation is holding.

Daily, per stream, reported separately:

| Metric | Watch | Act |
|---|---|---|
| Complaint rate | > 0.10% | Stop climbing the ramp |
| | > 0.30% | Pause the cold stream same day — Gmail enforces here |
| Bounce rate | > 2% | The resolved addresses are stale; tighten the gate |
| Root domain reputation | Any drop | The isolation leaked. Pause cold, investigate. |

The daily orchestrator routine is set up to report these. Cold and warm must be
reported as **separate numbers** — a blended rate hides exactly the problem this
whole structure exists to catch.

---

## Every cold send must carry

Not optional, and cheap:

- A working **one-click unsubscribe** (`List-Unsubscribe` and
  `List-Unsubscribe-Post` headers, not only a footer link). Required by Gmail
  and Yahoo for bulk senders.
- The **physical postal address** — Elite Marketing Solutions LLC, 421 N Alisos
  St, Santa Barbara, CA 93103.
- **Honest headers and an honest subject line.** No fake `Re:`, no misleading
  from-name, no obscured sender. This is the single cheapest thing you can do
  and it disarms most of the California §17529.5 exposure, which turns on
  falsified headers and deceptive subject lines.
- **Suppression checked at send time**, not at list build. The gate in
  `scoring.js` does this; do not cache its answer.

---

## Still open

- **The visit beacon is not wired into the site yet.** `js/visit.js` and the
  DataMoon snippet need adding to the 40 certificate pages and the 4 offer
  pages. Until that lands, the scorer has no behaviour to score and the cold
  stream has no queue. Script is written and ready to run.
- **DataMoon must return `hvm_vid`.** `visit.js` publishes it as
  `window.HVM_VID` and as `data-hvm-vid` on `<html>`. Map it to a custom field
  in the DataMoon dashboard, or the worker has behaviour on one side, an
  address on the other, and no way to join them.
- **The worker does not know these buckets.** `bucket:'visit'` and
  `bucket:'partner-confirm'` both need handling in `hvm-lead-intake`.

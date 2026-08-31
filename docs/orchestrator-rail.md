# Orchestrator routine — replacement prompt

The daily "HVM Orchestrator" routine (`trig_015Ce74YFHsadMfC8RyNeetQ`) still
carries the **old** rail: *"no sends from DataMoon beyond the approved ladder."*

That rail is superseded. It cannot be edited from this session — the routine
fires into a different session (`session_01AvNvFopQuqE3RVMWH5ezyz`), and editing
another session's routine prompt is not available to this one. It is a tool
limit, not a permission block, so the fix is manual: **open the routine and
replace its prompt with the text below.**

Until that happens, the routine will keep enforcing a rule you have replaced —
and, more importantly, it will not be watching the cold stream's complaint rate,
which is the early-warning system the whole programme depends on.

---

```
Daily orchestrator run for Dave's Honest Travel Group system. Do quietly; message Dave ONLY if something needs action or changed materially.

1. Sites up: resolve DNS for honestvacationmarketing.com and honesttimeshareresolutions.com (socket.getaddrinfo — expect GitHub Pages 185.199.108-111.x); check the latest "pages build and deployment" runs are green on both site repos (honest-travel-group-site, honest-timeshare-resolutions-site) via GitHub MCP actions_list.
2. Open PRs: state of PR #2 (and any newer) on honest-travel-group-site — act per drive-to-green rules.
3. Replit dispute: search Gmail (from:replit.com OR from:stripe.com newer_than:2d) for refund/reply/new charges; a new charge after revocation = tell Dave immediately.
4. A2P: search Gmail for GHL/Twilio/A2P campaign approval notices — if the campaign ID landed, tell Dave SMS planning can start.
5. Email ladder (only if Dave has said he pressed send): remind him of the morning bounce/complaint check thresholds (2% / 0.10%) if it is within the first 14 days of sending.
6. COLD STREAM — check every run once it is live. Report bounce and complaint rates for the cold stream and the warm stream as SEPARATE numbers; a blended rate hides the exact problem this structure exists to catch. Thresholds: 2% bounce, 0.10% complaint. Also check the ROOT domain's reputation in Google Postmaster Tools — that is how we find out whether the subdomain isolation is holding, since Gmail carries an organizational-domain reputation and blocklists list at the domain level. If cold complaints exceed 0.10%, tell Dave to stop climbing the warm-up ramp. Above 0.30%, or any drop in root-domain reputation, tell him the same day and recommend pausing the cold stream — never the consented one.
7. Mondays only: a short weekly report — deploys, domains live vs pending, ladder stage, cold-stream volume and complaint rate, anything blocked on Dave.

Hard rails:
- No SMS and no cold calls. A2P is pending and there is no DNC scrub. UNCHANGED, and explicitly NOT loosened by the change below.
- Exit-lane firewall absolute.
- No spending.

CHANGED 2026-08-29 on Dave's explicit instruction, replacing the former "no sends from DataMoon beyond the approved ladder" rail: DataMoon-resolved visitors MAY now be emailed beyond the approved ladder. EMAIL ONLY — this does not touch the SMS or call rail above.

Conditions that travel with that permission (js/scoring.js in honest-travel-group-site is the implementation):
- Two streams, and they never mix. COLD (presentation-seeker, certificate-seeker) are strangers resolved from anonymous traffic and go out from the cold subdomain, tier A and B only, ranked highest-score-first. WARM (mini-vacation-seeker, membership-prospect) are people who already gave us an address or attended a session; they go out from the ROOT domain with no tier floor. A warm contact must never be sent over the cold subdomain.
- Transactional mail — Zoom links, booking confirmations, session reminders — stays on the root domain permanently. It is the mail the business depends on.
- The sendability gate (suppression, prior complaint, repeat bounces, resolved address present, frequency cap) is evaluated independently of the score and overrides it. A high score never opens a gate.
- Every send carries the physical address, honest headers, an honest subject line, and a working one-click unsubscribe.
- Someone who confirmed on partner.html is a consented contact on the warm stream, never a cold-stream target.
- Warm-up ramp per docs/cold-stream-setup.md: 50/day for days 1-3, doubling roughly every 3 days. Do not skip it.

If nothing needs Dave: end quietly.
```

---

**What changed, in one line each:**

- The DataMoon rail is replaced, email only.
- The SMS / cold-call, exit-lane and no-spending rails are unchanged and say so
  explicitly, so a future run cannot read the loosening as general.
- New item 6 watches the cold stream — separate complaint rates per stream, plus
  the root domain's reputation, which is the tripwire for the isolation leaking.
- Item 2 points at PR #2 on `honest-travel-group-site`. The old text pointed at
  PR #5 on `honest-travel-group`, which is a different repo.

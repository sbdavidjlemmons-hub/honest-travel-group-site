# SESSION 3 — HANDOFF

**Chain:** `CLAUDE.md` (session 1, rules) → `docs/REPO-MAP.md` (session 2, map) → **this file (session 3)**.

**Scope, as assigned:** follow 1 and 2. Do not overwrite them. Polish and improve
conversions only. **Discrepancies are recorded here, not resolved** — session 1's agent owns
those. Nothing in §A has been changed. Nothing in §B has been built.

**Assumption stated:** "the first and second md" is read as `CLAUDE.md` and
`docs/REPO-MAP.md`. If session 1 and 2 mean different files, only this header is wrong — §A
and §B stand on their own.

**Status of this session's writes:** two files, both additive, neither touching a page:
`docs/REPO-MAP.md` and `docs/SESSION-3-HANDOFF.md`. Zero edits to any generator, worker,
`.html`, or `.js`. Zero deletions.

---

## §A — DISCREPANCY REGISTER (for session 1's agent. Do not act on these here.)

`V` = verified firsthand in the working tree, 2026-08-31. `R` = reported by another doc,
not independently confirmed.

| # | Discrepancy | Where | Src | Cost if left |
|---|---|---|---|---|
| A1 | `START-HERE.md:26` says the lead-intake worker is **"Not deployed yet."** It **is** deployed at `hvm-lead-intake.lead-intake.workers.dev` and the site posts to it. | `START-HERE.md` | V | A session trusts it, rebuilds the endpoint, and splits live traffic. |
| A2 | Page count disagrees **three ways**: `HANDOFF.md:26` says **7**, `START-HERE.md:18` says **11**, `NODES.md:37` says **11**. Site repo root currently holds **20** `.html`. `.claude/agents/README.md` reports the conflict as "9 vs 11" — matching none of them. | 4 files | V | Any completeness check ("did all pages get the tag?") passes or fails on a wrong denominator. |
| A3 | `START-HERE.md:68` — "Safe to delete (45 MB)" lists 6 files. **All 6 are already gone.** Paragraph is stale. | `START-HERE.md` | V | Low. Noise. |
| A4 | The **14 docs** `START-HERE.md:53` calls superseded are **all still in the repo root**, visually identical to current docs. | root | V | A session reads `ARCHITECTURE.md` or `DEPLOY.md` and follows an abandoned path. |
| A5 | ~**49 root markdown files** have no stated status — neither current (4) nor superseded (14) nor the 2 the agents add. | root | V | Same as A4, larger. |
| A6 | `SEATLOCK_ADMIN_SECRET` has never been set, so `/visits/export` and `/touch/dry-run` answer **401 to everyone**, Dave included. | worker | V | **Blocks the intent ranking outright** — see B0. |
| A7 | `thank-you.html` carries ~143 lines of partner hand-off no generator produces; `partner.html` has **no generator at all**. | site repo | V | The next full build deletes both, silently. Precedent: 3 documented reverts. |
| A8 | None of the 4 agents in `.claude/agents/` mentions the repo rules. `contact-enricher` holds `Write`+`Edit`; it and `compliance-checker` hold `Bash`. | `.claude/agents/` | V | An agent hand-edits the output repo exactly as §1 of `CLAUDE.md` forbids. |
| A9 | Agents' README grounding order starts at `START-HERE.md`, not `CLAUDE.md` (which postdates it). | `.claude/agents/README.md` | V | Agents are grounded in the doc that carries A1–A4. |
| A10 | `HANDOFF.md` vs `NODES.md` disagree on whether `a0-senior-ts-qualified-inmarket` may be mailed. | 2 docs | R | A 2,958-contact send with no settled consent basis. **Highest legal exposure in this list.** |
| A11 | A0 counts: table says 4,859 / 2,958; an arithmetic note says 4,876 / 2,968. | `HANDOFF.md` | R | Reconciliation never balances; nobody trusts either. |
| A12 | `HANDOFF.md` self-conflicts on the form bug — fixed at the top, "do not buy traffic" below. | `HANDOFF.md` | R | Spend stays frozen on a bug that may be closed. |
| A13 | Agents cite `build-site.mjs` symbols by name (`A2P_DISCLOSURE`, `TESTIMONIALS[]`, `SOT.cst`) with **nothing asserting them**. | `.claude/agents/` | V | A rename breaks 4 agents silently. |
| A14 | `docs/REPO-MAP.md` references `CLAUDE.md` in the **site** repo root — that file lands only when PR #3 merges. | this repo | V | Two dead references if #3 is closed instead of merged. |

**Ranked for session 1:** A10 (legal) → A6 (blocks all ranking) → A7 (silent data loss) →
A8/A9 (re-opens the collision class) → A1/A2 (wrong facts in the grounding doc) → the rest.

---

## §B — CONVERSION WORK (proposals. Nothing built. Awaiting Dave.)

### B0. The precondition — measurement is off

Every conversion opinion below is currently a **guess**, and will stay a guess until three
things are true in order:

```
PR #12 merges  →  VISITS KV namespace bound  →  SEATLOCK_ADMIN_SECRET set (A6)
                                                        ↓
                                          /visits/export returns data
                                                        ↓
                              scoring.js ranks real intent, not assumptions
```

Beacons have been posting since the beacon went live. Before PR #12 every one of them fell
through to the lead handler, got a 400, and was discarded — **nothing corrupted, nothing
kept.** Until that chain closes, "top three per family by real intent" cannot be answered
by anyone, and any ranking shipped is judgment wearing a number.

**This is the highest-leverage conversion item on the page, and it is three small steps, not a build.**

### B1. Ready to ship — built, tested, unshipped

| Item | State | Where it goes | Cost |
|---|---|---|---|
| Kinetic terms-drop card (55ms staggered rows, `0fr→1fr` grid, no measurement) | prototyped, works | `build-certificates.mjs` | ~half a day |
| Reveal → 2 questions → "You made it" splash (~500ms choreography) | prototyped, retimed once to kill a dead void | new generator path | ~1 day |
| Partner forward-confirm (`partner.html` + `thank-you.html` hand-off) | **live in production, ungenerated** | `build-site.mjs` — see A7 | ~half a day |

**Recommendation:** do the third one first. It is the only item on this page that is
currently *losing* ground rather than waiting — it is one `node scripts/build-site.mjs` from
deletion, and it is the referral loop.

### B2. Measurable the moment B0 closes

Ship the kinetic card to **one family only** (cruise, 12 pages) against the other 28 as
control. The beacon already records the two signals that decide it — `reachedPrice` fires on
a deliberate card flip, not a scroll-past, and `formStarted` is a boolean, never the typed
value. No new instrumentation needed; the comparison is already wired.

### B3. Blocked on Dave — will not proceed on assumption

| Q | Why it blocks | Note |
|---|---|---|
| Retail comparison ranges | 32 new cert pages (cruise +12, all-inc +11, airfare +9) | Numbers on a page must be verifiable — the stamping/certification rule |
| Price on the card face, or behind the form? | Genuine conflict, not a preference | The promise bar says **every cost is printed before you give a name**; "don't put the numbers on it, push for more information" is the opposite. **One has to give — Dave's call, and it is a §A-class discrepancy, so it is recorded, not decided.** |
| The two ask-screen questions | guessed at dates + port | |
| Does "exclusive offer" mean per-segment copy? | changes generator shape | |
| ESP name | real SPF/DKIM values | |

---

## §C — WHAT SESSION 3 DID NOT DO

- Did **not** edit `CLAUDE.md` or `docs/REPO-MAP.md`.
- Did **not** resolve any item in §A.
- Did **not** move, delete, or archive a file, or touch a session.
- Did **not** edit a generator, the worker, or any `.html`/`.js`.
- Did **not** put a number on a page that has not been verified.

Everything above is stored so session 1's agent can work from it. Session 3 stops here.

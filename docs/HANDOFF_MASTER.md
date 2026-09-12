# HVM — master handoff

Date: 2026-09-12
Repo: `sbdavidjlemmons-hub/honest-travel-group-site`
Branch: `claude/hvm-certificate-research-jxl8ih`
Budget: **$0, permanent.** No paid tools, no middleware, no stock purchases.

This is the operational handoff. `research/HANDOFF.md` is the artwork-only packet and is
still current for image work — this file supersedes nothing in it, it sits above it.

---

## 1 — Where the business actually is

| Thing | State |
|---|---|
| 40 certificate pages | **LIVE.** Verified artwork, lifted badges, flip interaction, share copy, Offer JSON-LD |
| Site deploy | **LIVE** on GitHub Pages from `main`. Spot-checked HTTP 200, images md5-identical to build |
| Emails sent to leads | **ZERO.** Not one |
| GHL email send workflow | **Does not exist.** Spec written (PR #12), nothing built |
| Wave-1 list | 1,000 DataMoon timeshare-owner couples, 35–64. Built, **not imported** |
| Revenue to date | $0 from this system |

**The gap is one sentence:** the product is finished and the distribution is not connected.

---

## 2 — Artwork: 32 of 40 verified

All 40 pages carry a real, licensed, non-AI, destination-checked image. Eight of those were
placed from within-family stock rather than a destination-specific verified find.

| Code | Why it is not closed |
|---|---|
| CRU-MEX | "FREEDOM OF THE SEAS" legible; reframe is worse ("CARNIVAL DREAM" ×2) |
| CRU-NOL | **Structurally unsolvable at $0.** 78 candidates. Berths sit under a branded outlet mall; the skyline IS hotel signage. The one clean frame is paywalled |
| CRU-CHA | **Not an artwork problem — see §4** |
| CRU-BAH, CRU-JAX | Never attempted |
| AIR-SJD, AIR-CRI | Never attempted |
| AIN-CUN, AIN-DOM, AIN-MBJ | Never attempted. Highest signage risk of any family |

Method is proven — roughly 1 candidate in 3 survives. This is throughput now, not research.
The five rules that decide it are in `CLAUDE.md`; the full playbook is
`research/IMAGE_BRIEF_V2.md`.

---

## 3 — Email: spec built, nothing wired

`docs/GHL_EMAIL_SEND_WORKFLOW_SPEC.md` (PR #12) is a copy-follow build sheet for four GHL-native
workflows. No middleware. Executable by hand in an afternoon.

Encoded rails: seeds-first days 1–3 · warm-up ladder 50→200→500–1,000→2,000–5,000→10,000→25,000+ ·
stop-lines 2% bounce / 0.10% complaint · intent→template routing across the 5 verified templates ·
senior segment held at zero mail behind a hard guard · single-field kill switch.

**Blocked on three answers only Dave can give.** See §5.

---

## 4 — The one commercial problem — RESOLVED, retired

**CRU-CHA was unfulfillable and has been retired**, per Dave's decision (2026-09-12): "Retire
Charleston, don't re-point." Charleston has no cruise service: Carnival's homeport contract
ended January 2025, Union Pier closed to cruise ships 30 June 2026, and the only Charleston
departures are 8-night voyages at $5,990–$7,835 per person, against a live page that was
advertising an $800–$1,800 comparison for a product that could not be delivered.

The page at `certificates/cruise/charleston-cruise.html` now shows a plain "this certificate
has been retired" notice — no offer schema, no lead-capture form, no booking link, `noindex`.
It was removed from every listing: `certificates/index.html`, `cruise.html`, the three
snapshot landing pages (`snap-a/b/c.html`), and `sitemap.xml`. The SKU is not being reused for
Jacksonville or any other port.

---

## 5 — Decisions waiting on Dave

| # | Decision | Blocks | Cost of delay |
|---|---|---|---|
| D1 | Sending subdomain: `go.` or `mail.` | All email | Nothing ships. Cannot be changed later without discarding the warm-up |
| D2 | Senior segment (~2,958) — mailable or not, in writing | Tier 3+ volume | Highest legal exposure on the list |
| D3 | Wave-1 count: 4,059 / 4,859 / 4,876 — reconcile | Tier 3+ | Every rate in the stop-line table has a wrong denominator until this resolves |
| ~~D4~~ | ~~CRU-CHA: retire or re-point~~ | — | **Resolved 2026-09-12 — retired, not re-pointed.** See §4. |
| D5 | V5 certificate-in-body template — load or hold | A/B at tier 3 | None. Safe to defer |

D1 is the cheapest and unblocks the most. It is a single field in GHL plus two DNS records.

---

## 6 — Standing constraints (do not relitigate)

- **$0 budget, permanent.** No paid tool is ever the answer.
- **No middleware.** Everything runs natively inside GHL, GitHub, and the site.
- **No SMS. No cold calls.** A2P registration pending, no DNC scrub performed.
- **Cold stream never carries confirmations.** Transactional mail stays on the root domain.
- **Never modify `certificates/`, `img/`, or any `.html` without per-task permission.**
- **Never carry a source image's title, filename, or alt text onto the site** — captions name
  properties the certificates do not guarantee.
- Pricing research is **frozen** by owner instruction.
- Deposit treatment (applied / additional / refunded) is **unresolved**. Report savings both ways.

---

## 7 — Repo state

| PR | State | What |
|---:|---|---|
| #12 | **open, draft** | GHL email send workflow spec. Clean, no CI, no review threads |
| #9 | closed (merged into main) | 40 verified images, badge system, share metadata |
| #10, #11 | closed | Flip/lift interaction, from another agent. Preserved byte-identical |
| #1, #3, #4 | **open, stale drafts** | Unrelated older work. Close or finish — they are noise |

Key files:

| Path | What |
|---|---|
| `CLAUDE.md` | Hard rules: response length, $0 budget, the five image rules |
| `docs/GHL_EMAIL_SEND_WORKFLOW_SPEC.md` | The email build sheet |
| `docs/HVM_BOOKING_COST_BASELINE.md` | 4 cost structures, not 40. The savings arithmetic |
| `docs/cold-stream-setup.md` | DNS and sending architecture |
| `research/HANDOFF.md` | Artwork packet — portable, assumes no repo access |
| `research/IMAGE_BRIEF_V2.md` | Full image playbook, rules C1–C8 |
| `research/IMAGE_STATUS.md` | Per-certificate verdict with reasoning |

---

## 8 — What a fresh operator does first

1. Answer **D1**. Publish the DNS records.
2. Attach the dedicated sending domain in GHL. Confirm Return-Path is not `msgsndr.biz`.
3. Run the six-row pre-send gate in §0 of the email spec.
4. Build **W1 Suppression Guard** and turn it on. Nothing else may be built first.
5. Tag 20–40 seeds, build W2, run days 1–3.
6. Answer **D4** while the warm-up runs — it costs nothing and removes live exposure.

Steps 1–4 are under two hours of work and move the business from $0 revenue capability to
day-1 sending. Everything else in this handoff can wait behind them.

# honest-travel-group-site — hard rules

## Session discipline
Every 5 prompts from Dave in a session, update this file with what changed. Non-negotiable.
**"Shipped"/"done" means verified on `main` or the live deployed target — not "committed and
pushed to a branch."** Before saying something is live, check the real deployed state
(`git log origin/main`, the live URL). If a PR is open and unmerged, say that, not "done."
Failure case this rule exists for: 2026-09-12, two rounds of certificate work sat unmerged
on a branch while being reported as shipped. See `docs/VERIFICATION_PROMPT.md`.

## Response style
5 lines max. Tables over prose. No red-team section, no next-action section, no preamble — unless asked.

## Never
- No paid tools. Budget is $0.
- No Zapier.
- Never modify `certificates/`, `img/`, or any `.html` without explicit per-task permission.
- Never carry a source image's title, filename, or alt text into the site. Captions name properties the certificates do not guarantee.

## Image pipeline — proven across ~600 candidates
Full rules: `research/IMAGE_BRIEF_V2.md`. The five that decide everything:
1. **Shoot the place, not the product.** Port not ship. Strip not resort. Destination not aeroplane.
2. **Download it and look at it.** Metadata approval is worthless — 6 of the first 8 failed on sight.
3. **Check at shipped resolution.** Fetch with NO query string; both CDNs silently serve below native. Contrast decides survival, not pixel span.
4. **Reframe before rejecting.** 1600x900 deliverable from a 4000-8000px source — the branded region need not be in frame.
5. **Source selection decides it.** Pexels/Unsplash beat Wikimedia; Wikimedia is spotter photography.

## Certificate facts
- 4 cost structures, not 40. Condo $15/night/traveler + $150. Cruise $157pp + $150. All-inclusive $269pp + $298. Airfare $150pp + $240 + fare above $500.
- Deposit treatment (applied / additional / refunded) is UNRESOLVED. Report savings both ways.
- **CRU-CHA is retired** (2026-09-12) — Charleston has no cruise service. Page now shows a retirement notice, `noindex`, no offer/lead-capture content, removed from all listings and the sitemap. Not re-pointed to another port.

## Site state (2026-09-12)
- All 39 live certificates carry a QR code linking to their own family landing page (`cruise.html`/`condo.html`/`all-inclusive.html`/`resort-air.html`), `utm_source=qr`.
- 12 hero images replaced this session, all eye-verified at shipped 1600x900. 4 condo interiors added (Branson, Cancun, Catskill, Wisconsin Dells).
- Full account structure: **Elite Marketing Solutions LLC** is the master; Honest Vacation Marketing (this repo), Show Up SB, and Honest Vacation Offers (new, unbuilt) are sibling sub-accounts.
- Full detail: `docs/SESSION_SUMMARY_2026-09-12.md`, `docs/HANDOFF_MASTER.md`.

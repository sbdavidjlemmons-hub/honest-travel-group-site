# HVM tactile certificate preview — saved checkpoint

Date: 2026-09-11. This is a review branch, not a production release.

Repository: `sbdavidjlemmons-hub/honest-travel-group-site`

Branch: `codex/tactile-certificate-preview-20260911`

Base: `db9d18b99db66d90e91ff2034bc17725ed6be714`

## Resume here

Read this checkpoint and verify the checked-out branch and commit before changing anything. The user requested saving and independent verification, then a complete stop. Ask before overwriting approved work or publishing. This checkpoint does not authorize outreach or live HighLevel changes.

The original root website, 40 certificate pages, and 40 approved destination JPEGs remain unchanged. New preview source is additive. Run `npm ci`, `npm test`, and `npm run build`. The generated preview is in `dist/`; generated output and dependencies are intentionally ignored by Git and are reproducible from this branch.

For local review, `npm run dev` serves `dist/` through Vite. In ChatGPT Sites, use its managed preview workflow. The existing `.openai/hosting.json` identifies the newly registered review project; it has not been deployed. Do not create a duplicate project or publish it automatically.

## What is implemented

- Whole-certificate flip and flip back, independent links, keyboard handling, reduced-motion CSS, press/drag cancellation, pointer tilt, and shadows beneath the object.
- Bahamas uses the original full-image composition and cost panels, combined with the new interaction, as the user specifically selected.
- All 40 approved image files are reused. Detailed certificate sections are copied from the original pages. The approximate $290–$314 cruise summary remains.
- A staged qualification and booking demonstration retains answers and one selected appointment. Confirmation requires a matching response, slot, timezone, and appointment ID.
- The booking demonstration uses in-memory simulated responses. It does not reserve a HighLevel seat, send messages, or prove server-side idempotency.
- HTTP preview compatibility uses `crypto.getRandomValues`; `crypto.randomUUID` previously stopped the booking script on the managed HTTP preview and was corrected.

## Files

| Purpose | Path |
|---|---|
| Preview generation | `scripts/build-tactile-preview.mjs` |
| Existing canonical offer data | `review-data/certificates.json` |
| Interaction and gesture handling | `tactile/interaction.mjs` |
| Booking state and confirmation checks | `tactile/booking-state.mjs` |
| Rendered qualification/demo flow | `tactile/app.mjs` |
| Layout and Bahamas composition | `tactile/style.css` |
| Focused regression tests | `tests/tactile.test.mjs` |
| Adapted-code attribution | `THIRD_PARTY_NOTICES.md` |
| Generated comparison page | `dist/review.html` |

## Verification and remaining work

At the save checkpoint, 5/5 focused tests and the 40-page preview build pass. Original artwork and controlling terms must remain unchanged in any continuation. Saving this branch is not a declaration that the whole funnel is production-ready.

Known unfinished items: `/research.html` is linked but its content has not been authored; the final research comparison, complete recording, Claude handoff archive, and end-to-end live booking/follow-through verification remain unfinished. This save-only task deliberately does not continue those tasks.

The connected HighLevel calendar read identified HVM calendar `B2QxN25XAnB9MaD4KukW` as active, with rescheduling and cancellation enabled. Workflow graphs, live booking writes, contact-field readback, delivery, and reminder deduplication were not verified. The static demonstration dates are a September 11 snapshot, not live availability.

The separately inspected backend belongs to `sbdavidjlemmons-hub/honest-travel-group`, main last observed at `75c0cfc50386fdb7bc89da5fd5e0aaabd14bbdd9`. The local recovered source folder was not a Git checkout; verify the repository directly before treating recovered source as current production code.

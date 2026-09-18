# Golden Certificate Tracking Specification

The approved Golden Cruise Certificate visuals, embedded artwork, PDFs, offer copy,
pricing, disclosures, destinations, and booking calendar must remain byte-for-byte
unchanged.

Add the same HVM measurement stack used by the 39 complete certificate funnels:

- Meta Pixel `1284937561029384`
- Google Analytics `G-8XR4QN2LMP`
- DataMoon client `honest-vacation-marketing`
- HVM first-touch attribution in `localStorage.hvm_attr`
- HVM first-party visitor beacon to `hvm-lead-intake.lead-intake.workers.dev`

Record these Golden-certificate journey events without claiming a booking occurred:

- `certificate_viewed`
- `certificate_flipped`
- `offer_clicked`
- `booking_page_reached`

`booking_completed`, confirmation, attendance, no-show, and revenue remain
server/CRM facts and must never be inferred from a browser click.

The repair may add scripts only. It must not alter the visible certificate or the
calendar destination.


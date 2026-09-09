# Agent queue — 40 certificates

Platform cap: **20 concurrent subagents** (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`).
Assignment requires 40. Running a persistent queue: launch to the cap, refill as slots free.
No certificate is combined, dropped, or shared between agents.

## Wave 1 — LAUNCHED (20/20 slots)

| # | Code | Slug | Family | Status |
|---:|---|---|---|---|
| 1 | CRU-BAH | bahamas-cruise-region | Cruise | RUNNING |
| 2 | CRU-CHA | charleston-cruise | Cruise | **DONE - BLOCKED** |
| 3 | CRU-FTL | fort-lauderdale-cruise | Cruise | **DONE** |
| 4 | CRU-GAL | galveston-cruise | Cruise | RUNNING |
| 5 | CRU-JAX | jacksonville-cruise | Cruise | RUNNING |
| 6 | CRU-LAX | los-angeles-cruise | Cruise | RUNNING |
| 7 | CRU-MEX | mexico-cruise-region | Cruise | **DONE** |
| 8 | CRU-MIA | miami-cruise | Cruise | **DONE** |
| 9 | CRU-NOL | new-orleans-cruise | Cruise | RUNNING |
| 10 | CRU-PCV | port-canaveral-cruise | Cruise | **DONE** |
| 11 | CRU-TPA | tampa-cruise | Cruise | RUNNING |
| 12 | CRU-WCB | western-caribbean-cruise-region | Cruise | RUNNING |
| 13 | AIN-CUN | cancun-all-inclusive | All-inclusive | RUNNING |
| 14 | AIN-DOM | dominican-republic-all-inclusive | All-inclusive | RUNNING |
| 15 | AIN-MBJ | montego-bay-all-inclusive | All-inclusive | RUNNING |
| 16 | AIR-SJD | cabo-san-lucas-airfare-credit | Airfare | RUNNING |
| 17 | AIR-CUN | cancun-airfare-credit | Airfare | RUNNING |
| 18 | AIR-CRI | costa-rica-airfare-credit | Airfare | RUNNING |
| 19 | AIR-HNL | honolulu-airfare-credit | Airfare | RUNNING |
| 20 | AIR-SJU | san-juan-airfare-credit | Airfare | RUNNING |

## Wave 2 — QUEUED (launch as slots free)

| # | Code | Slug | Family | Destination note for the agent |
|---:|---|---|---|---|
| 21 | CON-ARU (LAUNCHED) | aruba-condo | Condo | Aruba |
| 22 | CON-BRA (LAUNCHED) | branson-condo | Condo | Branson MO |
| 23 | CON-BRE (LAUNCHED) | breckenridge-condo | Condo | **Peak ski season in window — report peak + shoulder** |
| 24 | CON-CUN (LAUNCHED) | cancun-condo | Condo | Cancun — **condo/room-only, NOT all-inclusive** |
| 25 | CON-CAT (LAUNCHED) | catskill-condo | Condo | Catskills NY |
| 26 | CON-KTH | kitty-hawk-condo | Condo | Outer Banks NC — **deep off-season, thin inventory** |
| 27 | CON-LOZ | lake-ozark-condo | Condo | Lake of the Ozarks MO — **off-season** |
| 28 | CON-MYR | myrtle-beach-condo | Condo | Myrtle Beach SC — **off-season** |
| 29 | CON-ORL | orlando-condo | Condo | Orlando/Kissimmee — **no theme-park brands or landmarks** |
| 30 | CON-PKC | park-city-condo | Condo | **Peak ski season in window — report peak + shoulder** |
| 31 | CON-PFG | pigeon-forge-condo | Condo | Pigeon Forge TN |
| 32 | CON-SCO | scottsdale-condo | Condo | Scottsdale AZ — **peak season in window** |
| 33 | CON-SED | sedona-condo | Condo | Sedona AZ |
| 34 | CON-SEV | sevierville-condo | Condo | Sevierville TN |
| 35 | CON-SLT | south-lake-tahoe-condo | Condo | **Peak ski season in window** |
| 36 | CON-STM | st-maarten-condo | Condo | St. Maarten — **peak Caribbean season in window** |
| 37 | CON-VAB | virginia-beach-condo | Condo | Virginia Beach VA — **off-season** |
| 38 | CON-WHI | whitefish-condo | Condo | Whitefish MT — **ski season** |
| 39 | CON-WBG | williamsburg-condo | Condo | Williamsburg VA |
| 40 | CON-WID | wisconsin-dells-condo | Condo | Wisconsin Dells WI — **indoor-waterpark season** |

All 20 wave-2 certificates share one term set: 7 nights, resort condominium, up to 4 travelers,
no named resort (assigned at confirmation), resort fees may be additional, $15/night/traveler
+ $150 deposit. Only the destination comparable set and imagery differ.

## Reconciliation
12 cruise + 20 condo + 3 all-inclusive + 5 airfare = 40. Each code appears exactly once.

## Coordinator QA rules added mid-run (from agent findings)

1. **Verify the product exists before pricing it.** CRU-CHA had no bookable product at all.
   Every agent must confirm live inventory in the certificate's own window first.
2. **Beware stale SEO pages.** Third-party marketing pages describe inventory their own
   booking engines no longer carry. Verify against a live search.
3. **Source diversity.** At least 3 independent sources; document blocked sellers so other
   agents do not re-walk dead ends; cap confidence at Medium on single-engine evidence.
4. **License preference.** Plain CC BY / CC0 / public domain over CC BY-SA; share-alike
   obligations attach to any crop.
5. **OPEN — cruise trip-length basis.** Cruise certificates cover 3, 4, OR 5 nights. Verified
   3-night comparables run far below 4-5 night ones (Mexico: $884-$954 vs $1,432-$1,464).
   If certificates are routinely fulfilled at 3 nights, any 4-5 night comparison overstates.
   **Needs the actual fulfillment mix from CSNG before any cruise display price is final.**
6. **OPEN — cruise logo tension.** "Real ship at a real port" and "no visible third-party
   logos" are in direct conflict: every ship at a real berth wears its operator's livery.
   Current resolution is a high-resolution source cropped so branding is sub-legible.
   Needs owner sign-off, or one of the two rules relaxes.

# CRU-BAH — Bahamas Cruise Region

Researched 2026-09-09. All fetch timestamps are UTC on 2026-09-09.
Slug: `bahamas-cruise-region` · Family: Cruise · Certificate ID printed on card: `40817CW.C`

## Controlling certificate facts

- **Source page:** `certificates/cruise/bahamas-cruise-region.html`
- **Duration / Occupancy / Product:** "3, 4, or 5 nights for 2 adults in a lower-deck outside
  stateroom, subject to actual availability." (FAQ JSON-LD, Q2; identical text on card front and
  in the "Availability" panel.)
- **Included:** cruise accommodation only, in a lower-deck outside (oceanview) stateroom, 2 adults.
- **Excluded (visible terms list):** "Gratuities, transportation, excursions, beverages, upgrades,
  and optional purchases are additional." Also: "Never promise a particular ship, cruise line,
  sailing, itinerary, or port of call." and "Line, ship, itinerary, ports, duration, and departure
  date are not guaranteed."
- **Travel-window and blackout terms:** "Subject to actual availability. 45+ days' notice;
  June-August and listed holiday sailings excluded." Region only — "Covered destination region;
  exact island and port are not guaranteed." Explicit copy instruction on the page: "Destination
  region only; do not promise Nassau, CocoCay, Great Stirrup Cay, or Celebration Key."
- **HVM charges (from baseline):** **$314** (Cruise family; documented maximum $157 pp × 2, the
  5-night top of the documented $145/$151/$157 range) | **Deposit: $150**
  (Deposit is described on-page as paid to the reservation agency at date selection, applied to the
  trip when travel is completed, refundable inside the agency's cancellation window.)
- **Conflicts or missing facts:**
  - **No departure port is assigned.** The brief's cruise rule says "departing the assigned port";
    this certificate assigns a *region*, not a port. Priced against the Florida homeports that
    actually operate the 3-5 night Bahamas market (Miami, Port Canaveral, Fort Lauderdale,
    Jacksonville, Tampa). Not a terms conflict — a missing fact, recorded.
  - **Image-standard tension (not a price conflict).** The assignment requires a ship *visibly in
    or at a Bahamas port*, while the certificate copy forbids promising Nassau / CocoCay / Great
    Stirrup Cay / Celebration Key. The card already carries the mitigating art-note
    ("Representative real passenger-ship photography. Line, ship, itinerary, ports and departure
    date are not guaranteed."). Keep that note and keep the port out of the alt text and caption.
  - **On-page retail band is unsupported at the top.** The card currently states "$700-$1,800 for a
    comparable 3-5 night cruise for 2" (researched August 24, 2026). This refresh finds no
    mainstream-line verified comparable above **$1,350**; the only figure near $1,800 is Disney
    ($2,254), a luxury family line that is not a like-for-like product. See Risk notes.
  - No internal contradiction in the charge or deposit language. **No `TERMS CONFLICT` call.**

## Comparable pricing evidence

Product match standard for every row: **2 adults, double occupancy, lowest published OUTSIDE /
OCEANVIEW category (not interior, not balcony), 3-5 nights, Bahamas itinerary, sailing inside the
certificate's allowed windows (Oct-Nov 2026 or Jan-May 2027), no holiday sailing.**

Taxes/fees: since July 1, 2024 the major US lines display taxes, fees and port expenses **inside**
the advertised fare (California hidden-fee statute). iCruise sailing pages state "*Prices are per
person based on double occupancy — Includes taxes & fees*"; Carnival's own search service returns
`taxesAndFees: 0.00` with `taxesIncludedUSEnabled: true`. Independent confirmation below: Carnival
Elation 11/5/2026 oceanview returns **$416 pp on both** carnival.com and iCruise. Gratuities are
**not** included on either side of the comparison (the certificate excludes them too).

| # | Provider | Direct URL | Checked (UTC) | Dates | Occupancy | Product match | Base | Taxes/fees | Total | Rate type | Match notes |
|---|---|---|---|---|---|---:|---:|---:|---|---|---|
| 1 | iCruise.com (Carnival Conquest) | https://www.icruise.com/itineraries/3-night-the-bahamas-from-miami-cruise_carnival-conquest_11-13-2026.html | 2026-09-09 01:55 | Fri Nov 13 – Mon Nov 16, 2026 (3n) | 2 adults | Oceanview, Miami → Celebration Key (Grand Bahama) → sea → Miami | $303 pp | included in fare | **$606** | Public online retail, cruise #14252132 | Lowest verified row. Cross-checks to carnival.com OV $303 pp for the same sailing (row 2 source query). |
| 2 | Carnival.com (Carnival Glory) | https://www.carnival.com/booking?embkCode=PCV&itinCode=BAV&durDays=3&shipCode=GL&subRegionCode=BH&sailingID=21802&sailDate=11062026&numGuests=2 | 2026-09-09 01:56 | Fri Nov 6 – Mon Nov 9, 2026 (3n) | 2 adults | Oceanview, Port Canaveral → sea → Celebration Key → Port Canaveral | $337 pp | included (US display rule) | **$674** | Cruise line direct, public fare | Retrieved from carnival.com's own search service: `https://www.carnival.com/cruisesearch/api/search?dest=BH&numadults=2&durDays=3&datFrom=102026&datTo=112026` |
| 3 | iCruise.com (Carnival Elation) | https://www.icruise.com/itineraries/4-night-the-bahamas-from-jacksonville-cruise_carnival-elation_11-5-2026.html | 2026-09-09 01:55 | Thu Nov 5 – Mon Nov 9, 2026 (4n) | 2 adults | Oceanview, Jacksonville → Celebration Key → Nassau → sea → Jacksonville | $416 pp | included in fare | **$832** | Public online retail, cruise #14277075 | **Independently cross-verified**: carnival.com returns the identical $416 pp oceanview for sailingID 21478 (https://www.carnival.com/booking?embkCode=JAX&itinCode=BME&durDays=4&shipCode=EL&subRegionCode=BH&sailingID=21478&sailDate=11052026&numGuests=2, checked 01:57). |
| 4 | Carnival.com (Carnival Freedom) | https://www.carnival.com/booking?embkCode=PCV&itinCode=BME&durDays=5&shipCode=FD&subRegionCode=BH&sailingID=21730&sailDate=02082027&numGuests=2 | 2026-09-09 02:01 | Mon Feb 8 – Sat Feb 13, 2027 (5n) | 2 adults | Oceanview, Port Canaveral → Celebration Key → Nassau → Half Moon Cay → sea → Port Canaveral | $442 pp | included (US display rule) | **$884** | Cruise line direct, public fare | Only 5-night length in the table; matters because the HVM baseline uses the 5-night charge ($157 pp). |
| 5 | iCruise.com (MSC Seashore) | https://www.icruise.com/itineraries/3-night-port-canaveral-to-port-canaveral-cruise_msc-seashore_4-15-2027.html | 2026-09-09 01:57 | Thu Apr 15 – Sun Apr 18, 2027 (3n) | 2 adults | Oceanview, Port Canaveral → Nassau → Ocean Cay MSC Marine Reserve → Port Canaveral | $428 pp | included in fare | **$856** | Public online retail, cruise #14195590 | 100% Bahamas ports. MSC files this itinerary under "Caribbean"; iCruise titles it "MSC Cruises Bahamas Cruise". |
| 6 | iCruise.com (MSC Seashore) | https://www.icruise.com/itineraries/4-night-port-canaveral-to-port-canaveral-cruise_msc-seashore_4-11-2027.html | 2026-09-09 01:56 | Sun Apr 11 – Thu Apr 15, 2027 (4n) | 2 adults | Oceanview, Port Canaveral → Nassau → Ocean Cay (overnight) → Port Canaveral | $463 pp | included in fare | **$926** | Public online retail, cruise #14195671 | Oceanview and balcony priced the same ($463) on this sailing; the oceanview figure is used. |
| 7 | iCruise.com (RC Wonder of the Seas) | https://www.icruise.com/itineraries/3-night-perfect-day-at-cococay-and-bahamas-cruise_wonder-of-the-seas_2-26-2027.html | 2026-09-09 01:55 | Fri Feb 26 – Mon Mar 1, 2027 (3n) | 2 adults | Oceanview, Miami → Nassau → private Bahamas island → Miami | $518 pp | included in fare | **$1,036** | Public online retail, cruise #14241164 | Median row. |
| 8 | iCruise.com (RC Jewel of the Seas) | https://www.icruise.com/itineraries/4-night-perfect-day-at-cococay-and-bahamas-cruise_jewel-of-the-seas_5-24-2027.html | 2026-09-09 01:54 | Mon May 24 – Fri May 28, 2027 (4n) | 2 adults | Oceanview, Fort Lauderdale → Nassau → private Bahamas island → sea → Fort Lauderdale | $532 pp | included in fare | **$1,064** | Public online retail (discounted from published retail $718 pp / $1,436), cruise #14241161 | Published cruise-line retail on the same page is **$1,436** for 2. Pre-Memorial-Day, not a holiday sailing. |
| 9 | iCruise.com (RC Allure of the Seas) | https://www.icruise.com/itineraries/4-night-bahamas-and-perfect-day-cruise_allure-of-the-seas_1-14-2027.html | 2026-09-09 01:57 | Thu Jan 14 – Mon Jan 18, 2027 (4n) | 2 adults | Oceanview, Miami → Nassau → private Bahamas island → sea → Miami | $533 pp | included in fare | **$1,066** | Public online retail (published retail $643 pp / $1,286), cruise #14264484 | Published cruise-line retail on the same page is **$1,286** for 2. |
| 10 | iCruise.com (Celebrity Reflection) | https://www.icruise.com/itineraries/4-night-key-west-and-bahamas-cruise_celebrity-reflection_1-11-2027.html | 2026-09-09 01:55 | Mon Jan 11 – Fri Jan 15, 2027 (4n) | 2 adults | Oceanview, Fort Lauderdale → Key West → Nassau → sea → Fort Lauderdale | $542 pp | included in fare | **$1,084** | Public online retail, cruise #14249540 | Premium-mainstream line. **This row is the upper-quartile value.** One of four days is a US port (Key West) — noted as a partial match. |
| 11 | iCruise.com (RC Harmony of the Seas) | https://www.icruise.com/itineraries/4-night-bahamas-and-perfect-day-cruise_harmony-of-the-seas_3-2-2027.html | 2026-09-09 01:57 | Tue Mar 2 – Sat Mar 6, 2027 (4n) | 2 adults | Oceanview, Port Canaveral → Nassau → private Bahamas island → sea → Port Canaveral | $588 pp | included in fare | **$1,176** | Public online retail, cruise #14241733 | No discount shown on oceanview; interior on the same page shows retail $469 → $390. |
| 12 | iCruise.com (RC Utopia of the Seas) | https://www.icruise.com/itineraries/3-night-perfect-day-at-cococay-and-bahamas-cruise_utopia-of-the-seas_3-5-2027.html | 2026-09-09 01:55 | Fri Mar 5 – Mon Mar 8, 2027 (3n) | 2 adults | Oceanview, Port Canaveral → Nassau → private Bahamas island → Port Canaveral | $675 pp | included in fare | **$1,350** | Public online retail (published retail $974 pp / $1,948), cruise #14241208 | Highest verified **mainstream** row. Newest/most in-demand ship in the short-Bahamas market. |
| 13 | iCruise.com (Disney Wish) | https://www.icruise.com/itineraries/3-night-bahamas-cruise_disney-wish_2-5-2027.html | 2026-09-09 01:55 | Fri Feb 5 – Mon Feb 8, 2027 (3n) | 2 adults | Oceanview, Port Canaveral → Nassau → Disney Castaway Cay → Port Canaveral | $1,127 pp | included in fare | **$2,254** | Public online retail, cruise #14188161 | **Recorded, not used.** Luxury family line; not a like-for-like product for a certificate that assigns no line. Kept only to bound the top of the market. |
| 14 | iCruise.com (Norwegian Sky) | https://www.icruise.com/itineraries/5-night-bahamas-great-stirrup-cay-and-nassau-cruise_norwegian-sky_3-19-2027.html | 2026-09-09 01:56 | Fri Mar 19 – Wed Mar 24, 2027 (5n) | 2 adults | Oceanview, Tampa → Nassau → Great Stirrup Cay → sea ×2 → Tampa | **UNVERIFIED** | **UNVERIFIED** | **UNVERIFIED** | — | **UNVERIFIED — no public price.** Page renders "Call to Book 1-800-427-8473" for every cabin grade. Same result on the 2/11/2027 and 11/5/2026 Norwegian Sky sailings (checked 01:57). NCL short-Bahamas pricing is not publicly displayed on this retailer; no price is estimated. |

Sources actually fetched, for audit: iCruise sailing pages (server-rendered HTML, retrieved directly);
Carnival's own cruise-search service `https://www.carnival.com/cruisesearch/api/search` with
`dest=BH&numadults=2` and `durDays=3|4|5`, `datFrom/datTo` of `102026–112026` and `012027–052027`
(returns per-sailing oceanview fares and the `/booking?...sailingID=` deep links above).
Royal Caribbean's own site was **not** usable as a primary source — royalcaribbean.com renders fares
client-side and its fare API returns `403 Missing Authentication Token`; RC fares here therefore come
from a retailer that publishes them server-side.

## Price conclusion

Basis: 13 verified totals for 2 adults, oceanview, taxes and fees included, all inside the
certificate's allowed sailing windows.
Sorted: 606, 674, 832, 856, 884, 926, 1036, 1064, 1066, 1084, 1176, 1350, 2254

- **Low verified comparable:** **$606** (row 1 — Carnival Conquest, 3n, Miami, Nov 13 2026)
- **Median verified comparable:** **$1,036** (row 7 — Wonder of the Seas, 3n, Miami, Feb 26 2027)
- **Defensible premium comparable:** **$1,084** — upper quartile (Q3) of the 13 verified totals,
  which lands exactly on row 10 (Celebrity Reflection, 4n, Fort Lauderdale, Jan 11 2027).
  Mainstream-only Q3 (Disney excluded) is $1,071, so $1,084 is not sensitive to that exclusion.
- **Highest verified comparable:** **$2,254** (row 13, Disney Wish — recorded, excluded from use).
  Highest verified **mainstream** comparable: **$1,350** (row 12, Utopia of the Seas).
- **Recommended comparison amount:** **$1,084**
- **Why it is defensible (cite rows):** $1,084 is the upper quartile of thirteen currently-bookable,
  independently fetched oceanview fares for exactly the certificate's product (rows 1-13), so it sits
  at the premium end of the real market without being the top of it — nine verified rows price below
  it and three price above (rows 11, 12, 13). It is a flexible public online retail fare on a
  like-for-like 4-night Bahamas oceanview sailing (row 10), not a flash sale, loyalty, resident,
  military or past-guest rate, and it is materially *below* the published cruise-line retail that
  appears on the same pages for comparable product (row 12 shows $1,948 published retail, row 8
  shows $1,436).
- **HVM charges:** **$314** | **+ deposit: $464**
- **Savings (charges only):** **$770** ($1,084 − $314)
- **Savings (charges + deposit):** **$620** ($1,084 − $464)
- **Confidence:** **High.** Thirteen verified rows across five cruise lines and five homeports,
  every one from a page fetched directly in this session; one row (Carnival Elation 11/5/2026)
  returns the identical $416 pp oceanview fare from two independent sources. The single unverified
  row is disclosed and unused.
- **Refresh by:** **2026-12-08** (90 days). Refresh sooner if the certificate's displayed band is
  changed, since short-Bahamas oceanview fares move weekly and every row above is a live inventory
  price, not a published tariff.

## Image evidence

Both nominations are **Unsplash License**: "All images can be downloaded and used for free /
Commercial and non-commercial purposes / No permission needed (though attribution is appreciated!)"
— no attribution obligation and no share-alike obligation, which is the cleanest fit for a
commercial certificate card. Per the assignment I did **not** download either file; all fields below
come from the photo pages and from the image service's metadata endpoint (`?fm=json`), which returns
stored EXIF without transferring the picture.

| Candidate | Source URL | Creator | License | Destination/port proof | Dimensions | Logo risk | AI ruled out how | Approval |
|---|---|---|---|---|---|---|---|---|
| **PRIMARY** — cruise ships docked in Nassau harbour, aerial | https://unsplash.com/photos/cruise-ships-docked-in-nassau-harbor-OVKNPTapySI (asset: `https://images.unsplash.com/photo-1787259295427-1d1ccf22ec0d`) | Steve Matthews (@ste7end) | Unsplash License — commercial use permitted, no permission required, attribution optional, no copyleft | **EXIF GPS 25.0781° N, 77.3403° W, altitude 53.85 m** — that is Prince George Wharf / Nassau Cruise Port, New Providence, Bahamas. Page location tag "Nassau, The Bahamas"; title and alt text both read "cruise ships docked in Nassau harbor". Ships are alongside the berth, not at sea. | **4000 × 2250** (native 16:9 — crops to the 1600×900 production spec with no reframing) | **Medium — visual confirm required before release.** Aerial from ~54 m; funnel liveries are present in frame but small. I did not open the pixels (no-download rule), so line identifiability is documentary-only and must be eyeballed at 1600×900 before publish. Crop or soften any legible funnel mark. | Full internally-consistent capture chain returned by the metadata endpoint: **Make DJI, Model FC3682** (Mini 4 Pro), firmware **v01.64.0152**, DateTimeOriginal **2026:08:10 13:36:22**, f/1.7, 1/4000 s, ISO 100, 6.72 mm, plus on-site GPS at the actual berth and a plausible drone altitude. A generative image does not carry a coherent make + model + firmware + exposure triplet + geotag that resolves to the depicted location. | **APPROVED for use**, conditional on the one-time visual logo check noted at left. |
| **ALTERNATE** — aerial, white and blue cruise ships, Nassau | https://unsplash.com/photos/aerial-photography-of-white-and-blue-cruise-ships-during-daytime-rMaWin9-9Gk (asset: `https://images.unsplash.com/photo-1548574505-5e239809ee19`) | Fernando Jorge (@fx24) | Unsplash License — same terms as above | **EXIF GPS 25.0806° N, 77.3355° W, altitude 140.6 m** — Nassau Harbour, Bahamas, over the wharf channel. Page location tag "443 E Bay St, Nassau, The Bahamas"; caption "Cruise ships in the Bahamas." Ships are in the harbour at the port, not open ocean. | **3000 × 1805** (needs a small crop to reach 16:9 / 1600×900) | **Low-medium.** Shot from ~141 m, so liveries are smaller than in the primary. Same one-time visual check applies. | **Strongest ruling-out of the set: capture date predates photorealistic text-to-image generation.** DateTimeOriginal **2018:11:30 12:50:37**, camera **DJI FC2204** (Mavic 2 Pro), f/3.8, 1/800 s, ISO 100, 8.6 mm; edit stamp "Adobe Photoshop CC 2019 (Macintosh)" 2018:12:30; published on Unsplash **2019-01-27**. No public model could have produced this in 2018. | **APPROVED for use** as the alternate. |
| *Rejected candidate, recorded so it is not re-nominated* — "Nassau-Harbour-Cruise-Ships-Aerial-Bahamas.jpg" | https://commons.wikimedia.org/wiki/File:Nassau-Harbour-Cruise-Ships-Aerial-Bahamas.jpg | "Jcofilms" (own work claim), uploaded 2026-03-09 | CC BY 4.0 (attribution only, no share-alike) — license itself is fine | Description states aerial drone view of Nassau Cruise Port with Paradise Island and the Atlantis bridge behind | 4096 × 2304 | Names a third-party resort landmark (Atlantis) in the description | **Cannot be ruled out.** EXIF carries **no camera make, no model, no lens, no exposure values and no GPS** — only ExifVersion, ColorSpace, OriginalDocumentID and a 300 dpi flag, on an exactly-4096×2304 frame. That is the signature of a stripped or synthesised file, and the assignment requires a positive ruling-out. | **RESEARCH REFERENCE ONLY — NOT APPROVED** |
| *Secondary fallback if a non-aerial, ship-alongside frame is ever wanted* | https://commons.wikimedia.org/wiki/File:Anthem_of_the_Seas,_docked_at_Nassau_Cruise_Port,_Bahamas_(March_14,_2024)_16-9.jpg | Kiran891 (own work) | **CC BY-SA 4.0 — attribution AND share-alike.** Copyleft attaches to derivatives; commercial use is permitted but the crop would have to be released CC BY-SA. | Title and description: taken at Nassau Cruise Port, Bahamas, 2024-03-14 10:15 | 4032 × 1816 | **High** — the ship is named in the file title and the livery is close and frontal. Conflicts with "never promise a particular ship or cruise line". | Native 4032-px phone-camera frame with a real capture timestamp; weaker than the primary (no make/model returned in the queried fields). | **NOT RECOMMENDED** — copyleft plus named-ship identifiability. Listed only to close the loop on the Wikimedia option. |

## Display output A — compliant reference framing

Comparable public rates for a similar trip researched September 9, 2026: $1,084.
Research context only — not the certificate charge, cash value, or guaranteed savings.
Your certificate charges: $314 plus a $150 reservation deposit.
All terms, conditions, availability, taxes, and applicable fees apply.

## Display output B — requested savings framing

~~Comparable Trip Cost: $1,084~~

**ROUGHLY, A SAVINGS OF $600**

**For just 45–60 minutes of your time, together with your spouse, while we show you the benefits of travel.**

**You pay the stated reservation and booking costs only when you are ready to select your travel dates.**

*All terms, conditions, availability, taxes, and applicable fees apply.*

> Basis note for whoever publishes this: the $600 figure is the **conservative** reading — comparable
> $1,084 minus charges **and** deposit ($464), rounded down from $620. If the deposit question is
> resolved as "credited back / not an incremental cost", the charges-only figure is $770, and the
> consumer-facing line would round to **$750**. Do not publish the larger figure until the deposit
> treatment is settled (baseline Finding 3 is still OPEN).

## Risk notes

1. **The card's current "$700-$1,800" band overstates the top.** Nothing in this refresh supports
   $1,800 for a 3-5 night Bahamas oceanview for two. The verified mainstream ceiling is $1,350 (row
   12) and the verified published-retail ceiling on a comparable product is $1,948 (row 12's
   pre-discount retail). Recommend restating the band as **$600-$1,350** or replacing it with the
   single $1,084 figure. Leaving $1,800 up is the most legally fragile item on the page.
2. **Fares are live inventory, not a tariff.** Every row is a specific sailing on a specific date.
   Any of them can move materially in a week. The displayed figure must stay attached to a research
   date, and the page already does this correctly.
3. **No port, ship, line or date is guaranteed by the certificate**, so the comparison is to a
   *category* of trip. Keep the existing disclaimers; do not let any comparable's ship name, line
   name or port reach the marketing copy.
4. **The 3-night vs 5-night spread is wide** ($606 to $1,350 across the same product family). The
   traveler-paid charge also varies by length ($145/$151/$157 pp). Using the 5-night charge ($314)
   against a blended comparable is the conservative pairing and is what is done above; do not pair
   the 3-night charge ($290) with a 5-night comparable.
5. **Gratuities are excluded on both sides.** Short Bahamas sailings currently run roughly
   $16-$20 per person per night in auto-gratuities on the mainstream lines; that is a real traveler
   cost on both the certificate and the comparable, so excluding it from both keeps the comparison
   honest — but do not describe either side as "all-in".
6. **One row is unpriced.** Norwegian's short-Bahamas oceanview fare is not publicly displayed by
   the retailer used (row 14). NCL is therefore absent from the distribution. This slightly narrows
   the line mix but does not change the quartile, which is set by rows 9-11.
7. **Image port-proof vs. certificate copy.** The approved images are unmistakably Nassau. The
   certificate forbids promising Nassau. Publish only with the existing representative-photography
   note, and keep "Nassau" out of the alt text, filename and caption.

## Blockers

- None for pricing. All figures are sourced and fetched.
- One open decision inherited from the baseline, not created here: **deposit treatment is
  unresolved** (docs/HVM_BOOKING_COST_BASELINE.md, Finding 3). Both savings figures are given.
- One action required before the image ships: **a human visual check of cruise-line funnel
  liveries at 1600×900** on the primary candidate. The no-download rule prevented me from
  inspecting the pixels.

# Cruise hero replacement V3 — CRU-BAH, CRU-FTL, CRU-JAX, CRU-MEX, CRU-NOL

Date: 2026-09-12. Standard: `research/IMAGE_BRIEF_V2.md`. Budget: $0 (held).
Scope: image only. No file under `img/`, `certificates/` or any `.html` was touched.
Every verdict below is on pixels opened with the Read tool — the rendered 1600x900 file and
native-resolution tiles of every suspect region. Metadata was used only to find candidates.

## Verdicts

| Code | Verdict | Source | Native | Crop box (l,t,r,b) → scale | Rendered crop |
| --- | --- | --- | --- | --- | --- |
| **CRU-MEX** | **APPROVED** | Pexels 17415444 — Israel Torres | 4000x3000 | (0,300,4000,2550) → 0.400x | `research/crops/CRU-MEX_1600x900_cabo_anchored.jpg` |
| **CRU-BAH** | **APPROVED** | Pexels 27011618 — Simon Hurry | 3862x2461 | (0,150,3862,2322) → 0.414x | `research/crops/CRU-BAH_1600x900_hogisland_light.jpg` |
| CRU-BAH alt | APPROVED (reserve, rust disclosed) | Pexels 843643 — Diego F. Parra | 7360x4912 | (0,400,7360,4540) → 0.217x | `research/crops/CRU-BAH_1600x900_light_tug.jpg` |
| **CRU-JAX** | **APPROVED — reframe rescue** | Pexels 10788521 — Mike Jones | 5464x3640 | (1400,280,5464,2566) → 0.394x | `research/crops/CRU-JAX_1600x900_pinksunset_reframe.jpg` |
| **CRU-FTL** | **APPROVED — resolution upgrade** | Pexels 9867744 — Blue Arauz | 5173x3449 | (0,300,5173,3210) → 0.309x | `research/crops/CRU-FTL_1600x900_bridge_sunset.jpg` |
| CRU-FTL alt | APPROVED (reserve, soft) | Pexels 7688210 — Taryn Elliott | 2898x3867 | (0,800,2898,2430) → 0.552x | `research/crops/CRU-FTL_1600x900_intracoastal_dusk.jpg` |
| **CRU-NOL** | **UNRESOLVED** | — | — | — | evidence only: `research/crops/CRU-NOL_1600x900_jacksonsq_sunset_NOSHIP.jpg` |

All four approvals are **Pexels License** (free commercial use, no attribution, no share-alike).
All four are pure downscales — no upscaling anywhere in this set. Every native was fetched with
**no query string** and its byte size and pixel geometry checked before opening.

Native checksums (md5) for re-verification: MEX `351e1a04…5534f17`, BAH `3fc72f4a…af55f66`,
JAX `5194c1e5…522197`, FTL `9c3924bb…17f2ab`, BAH-alt `840f6f05…8b842`, FTL-alt `54a4d4e2…591f5b`.

---

## CRU-MEX — APPROVED. Ship in frame, at anchor off Cabo San Lucas.

**Source:** https://www.pexels.com/photo/17415444/ — "Stunning aerial view of a cruise ship sailing
off the coast of Cabo San Lucas, Mexico", Israel Torres (@israwmx). Pexels location field:
"Cabo San Lucas, B.C.S., México". Pexels License. Native 4000x3000.
**Crop:** (0,300,4000,2550) → 1600x900 at 0.400x.

**What I saw at 100%.** Aerial from over the bay: the resort strip and beach run along the top-left,
desert hillside above, a single white cruise ship at anchor top-right, and deep blue water across
the bottom two-thirds with jet-ski wakes, a sailboat and a parasail. The ship measures **218 px
(894–1112) = 13.6% of frame width** on the rendered file (luminance threshold >200 in the ship
band). At 3x native the hull is a Grand-class Princess profile; the funnel wears a blue emblem and
the bow carries a name, both of which are already smears at 3x native. On the **delivered pixels
magnified 4x**: the funnel emblem is a ~5 px blue dot; the hull-side text band is a faint grey smudge
~15 px long; **no letterform resolves anywhere on the ship.** The resort strip was tiled at 1.5x
native and 3x delivered: terracotta multi-storey resorts left, a large white U-plan hotel centre,
low-rise development right — **no rooftop wordmark or facade sign at either scale.** Hillside
housing top-right: nothing. No third-party signage in frame.

**Why this passes where Cozumel failed.** Cabo San Lucas is a tender port: ships anchor off the
beach, so there is no pier, no Punta Langosta retail, and the ship is a mile from the lens — the
exact geometry that passed CRU-WCB at Grand Cayman. No berth infrastructure, accepted on the same
basis as WCB: this is a REGION certificate. The ship is unmistakably a cruise ship, which is what
the owner asked for, and it is small enough that its identity collapses.

**AI screen (reasoned — Pexels strips EXIF).** 4000x3000 is a native 12 MP 4:3 sensor frame
(DJI Phantom/Mavic-class or handset), not a power-of-two multiple. Optical haze gradient with
altitude, JPEG noise in the water, multiple independent wakes, and a coherent same-shooter Cabo
aerial series (17908151 yachts in the bay) all argue for a real capture.

**Caption rule.** Never caption or alt-tag as Cabo — the certificate promises a region, not a port.

**No alternate exists.** Stated plainly rather than padded — see the rejection log. The Mexico
free-licence pool is Carnival, Costa and Princess hulls at berth; only the tender geometry works.

## CRU-BAH — APPROVED. Harbour-entrance lighthouse, cruise ship incidental on the horizon.

**Source:** https://www.pexels.com/photo/27011618/ — "Tiny Light", Simon Hurry. Pexels location
field: "Nassau, New Providence, The Bahamas". Pexels License. Native 3862x2461.
**Crop:** (0,150,3862,2322) → 1600x900 at 0.414x.

**What I saw at 100%.** Paradise Island (Hog Island) lighthouse on its limestone spit at the mouth
of Nassau harbour, a sweeping cirrus sky filling the top 60%, dark-blue open sea, turquoise shallows
in the foreground, a green channel buoy, casuarina trees at right, and a cruise ship on the left
horizon. The ship is **~55 px long (~3.4% of width)** measured by eye on a 4x tile of the delivered
file (a luminance threshold could not isolate it from the bright horizon band). At **4x native** the
horizon ship is a Celebrity-class hull with a dark funnel; the funnel mark reads as a dark speck and
no hull letterforms exist even at that magnification. At **4x of the delivered pixels** it is a
two-tone shape with nothing on it. The right-hand third at 2x native: rocks, trees, a small cave —
no structure, no sign. The lighthouse carries no text. **Zero third-party signage in frame.**

This is the "shoot the port, not the ship" formula in its cleanest form: the harbour entrance
supplies the destination, the ship supplies the category, and neither is large enough to brand.
Top 60% is clean sky for overlay; bottom-left is clean water.

**AI screen (reasoned).** 3862x2461 is a non-round 1.569:1 crop from a ~24 MP 3:2 sensor. The
photographer has a coherent same-day Nassau set (27013517 is the same lighthouse on a longer lens).
Real cirrus structure and sensor noise.

**Caption rule.** Never write "Nassau" into caption or alt — the certificate copy forbids promising
Nassau / CocoCay / Great Stirrup Cay / Celebration Key.

**Alternate — Pexels 843643, Diego F. Parra, 7360x4912, crop (0,400,7360,4540) at 0.217x.**
Same lighthouse from a ship-deck vantage, turquoise channel, a tug mid-channel, a distant ship far
left. At 2x native the tug's wheelhouse and hull carry **no name or mark**. Disclosed weakness: the
tug is visibly rusted along its whole hull — the C5 "not premium" objection applies at 1600x900,
where the rust reads clearly. Reserve only.

## CRU-JAX — APPROVED by reframe. No ship, as instructed.

**Source:** https://www.pexels.com/photo/10788521/ — "Pink Sunset Over Jacksonville Florida",
Mike Jones (@jacksonvillepixels). Pexels location: "Jacksonville, FL, United States". Pexels
License. Native 5464x3640.
**Crop:** (1400,280,5464,2566) → 1600x900 at 0.394x.

**The full frame FAILS and the reframe rescues it.** Rendered full-width first: **"WELLS FARGO" is
legible at delivered scale** on the crown of the left tower (delivered x≈300–380) and a SunTrust-
style mark sits on the tower beside it. Both live at native x < 1330. Starting the crop at
**x = 1400** drops both towers entirely and keeps the St. Johns River, the Main Street Bridge, the
Southbank marina, the Northbank riverfront and the whole pink-violet sky. **No vessel of any kind
beyond small marina craft — no ship in frame.**

**What remains, measured.** (a) "HYATT REGENCY" on the two roof crowns of the riverfront hotel:
legible at 2x native (letters ~33 px wide at native); at delivered scale **~13 px wide, ~2 px cap
height**; on a 4x tile of the delivered pixels it is a pale teal rectangle with no letterforms.
(b) A magenta neon glyph on a building at delivered (700,540): **~8 px**, saturated so it survives
as a coloured dot (C3c-bis), but it is an abstract shape, not a wordmark, and is unidentifiable at
1:1. (c) A lit box on the distant stadium ("TIAA Bank Field" at native, ~40 px) → ~16 px delivered,
no letterforms at 4x. (d) A lit circular emblem on the right-edge tower, ~6 px. No retail signage.
Same standard as the approved Tampa alternate (SunTrust at 37 px delivered) with three times the
margin.

**AI screen (reasoned).** 5464x3640 is the Hasselblad L1D-20c / DJI Mavic 2 Pro frame (5472x3648)
less an 8 px trim — real drone geometry. Coherent Jacksonville series from the same account.

**Lead, not approved:** Unsplash `photo-1709606704009-417ea8d06a5a` (Lance Asper, Hasselblad
L2D-20c per the photo page, 4702x8360, published 2024-03-05, free licence) — skyline across the
river from a bridge deck. Flat grey light; not rendered because the primary is stronger.

## CRU-FTL — APPROVED. 2.5x the incumbent's resolution, brand-clean.

**Source:** https://www.pexels.com/photo/9867744/ — "Picturesque sunrise over Las Olas Bridge in
Fort Lauderdale, capturing the marina and skyline", Blue Arauz (@blue). Pexels location:
"Fort Lauderdale, USA". Pexels License. Native 5173x3449.
**Crop:** (0,300,5173,3210) → 1600x900 at 0.309x. A 2x retina hero (3200x1800) would still be a
0.619x downscale — this fixes the incumbent's only defect.

**What I saw at 100%.** Las Olas Boulevard bascule bridge over the Intracoastal from an elevated
vantage, marina finger piers and sailboats in the foreground, canal-front houses, the beach-side
condo skyline with the sun bursting between two towers, scattered cumulus. Checked at native:
(a) the **yellow water taxi** passing under the bridge — at 3x native its name band is a
motion-blurred smear; at 4x of the delivered pixels it is a yellow rectangle with a dark streak,
**no wordmark at any scale** (disclosed: the yellow hull is the local water-taxi operator's trade
dress, recognisable only as "a yellow boat"); (b) the **sailfish mural** on the bridge pier — public
artwork, no text at 2x native; (c) three yachts at 1.5–2x native — no transom names, one red mast
sticker with no letterforms; (d) the skyline band at 1x native — bare condo towers, no signage;
(e) marina piers and bridge deck — no signs. **No hotel, retail or cruise-line branding.**

**Disclosed deviation.** This is the Intracoastal at Las Olas, not Port Everglades, and there is no
cruise ship — accepted under the owner's explicit list ("Port Everglades, the inlet, the jetty,
Las Olas beachfront all qualify"). A higher-resolution Port Everglades frame does not exist free:
Unsplash "port-everglades" returns **4 results, all Unsplash+/Getty**, and Pexels "port everglades"
returns Miami and Port Canaveral frames only. The incumbent `CRU-FTL_1600x900_porteverglades.jpg`
is untouched and remains the only verified frame that shows the actual port.

**AI screen (reasoned).** 5173x3449 is a non-round 3:2 crop; coherent Fort Lauderdale set from
the same account; real sun-star diffraction and cloud structure.

**Alternate — Pexels 7688210, Taryn Elliott, 2898x3867 portrait, crop (0,800,2898,2430) at
0.552x.** Hazy dusk aerial up the Intracoastal toward downtown: canals, mansions, yachts, skyline
on the horizon. No signage found at native. Disclosed weaknesses: heavy grain and haze, soft
detail, the source is only 1.8x delivery width, and the subject is a residential canal (C4 tension,
mitigated because no single house is the subject). Reserve only.

## CRU-NOL — UNRESOLVED. Now 88 candidates opened across three sweeps; zero pass as written.

**What was tried this time — new angles only, nothing from V2/V3 re-opened.** Four fresh Pexels
queries (`algiers point new orleans`, `mississippi river new orleans`, `new orleans ferry`,
`new orleans riverfront`) enumerated 24 unique New Orleans river frames; 10 not previously opened
were downloaded at native and opened. The rule as written — a real ocean passenger ship at or near
the New Orleans berth with no legible third-party branding — is met by **none**.

| Candidate | Native | What resolves at native |
| --- | --- | --- |
| 22430898 — Kelly, golden-hour CBD from over Woldenberg Park | 5156x2897 | At 0.8x native: **"Hilton", "Harrah's", "Loews", "Regions", "WESTIN", "Sheraton", "Marriott", "Capital One"** all legible on the skyline; **"NATCHEZ"** on the steamboat at 1x. No cruise ship (berths are upriver of frame). The best-lit frame in the sweep, and it is the structural finding in one image. |
| 39004108 — river bend from Algiers Point, upriver | 8640x5760 | **"OUTLET COLLECTION RIVERWALK" legible twice** at 1x native on the far bank; Algiers ferry landing and a purple ferry left; barges; no cruise ship. Rendered and rejected. |
| 39004136 — Crescent City Connection from across the river | 7310x4873 | Text-clean (only a green "…BRIDGE…" sign fragment at 2x native, right edge) but a tarped barge left, an industrial wharf with a blue tug and crane right, flat grey light, **no ship**. Reads as freight. Rendered and rejected. |
| 39001318 — twin bridges from below, sunset | 5504x8256 | Compositionally strong, but the only 16:9 band with river in it is wharf pilings and a container yard; no ship. |
| 34561871 — hotel-window CCC panorama | 4000x3000 | "RIVERWALK" and "OUTLET COLLECTION" legible, rooftop plant, car park. |
| 32744125 — CBD from the Algiers bank | 5000x3333 | Chain-link fence and dead weeds across the bottom third; hotel towers behind. The Upper Algiers failure again. |
| 32000913 — Riverwalk / Aquarium aerial | 4000x3000 | Mall roof, car parks, streetcar tracks, a freighter. |
| 39026420 — sunset with riverboat | 8256x5504 | Market Street power-plant stacks, a hopper barge. Industrial. |
| 22430903 — bird's-eye CBD | 5272x2962 | Festival crowds and rooftops. |
| 25003118 — Jackson Square from the river at sunset | 6368x4247 | **The only premium frame.** St Louis Cathedral in silhouette, Woldenberg Park, sun-lit sky, river in the foreground. At native: no legible signage anywhere. Left third has a festival stage and a semi-trailer; right edge has parked cars, a striped awning and a wheelie bin. **No cruise ship — by construction: this vantage faces landward.** |

**The structural reason, sharpened by this sweep.** V2/V3 established four reasons (berths under
the Riverwalk mall; elevated viewpoints are hotels and the skyline is hotel signage; a freight
channel; Carnival's red funnel survives silhouetting). This sweep adds the fifth: **the only
riverfront vantage that is free of both hotel signage and the Riverwalk sign is Jackson Square /
Woldenberg looking landward — with your back to the river — which by construction contains no
ship.** Every frame that turns toward the berth re-admits the mall or the hotels.

**Decision evidence, not an approval.** `research/crops/CRU-NOL_1600x900_jacksonsq_sunset_NOSHIP.jpg`
is Pexels 25003118 (Fernando B M, Pexels License) reframed to (1400,900,6368,3694) at 0.322x,
which drops the stage and trailer; the cars and awning at the right edge remain and are visible at
1600x900. It contains no ship and is **usable only if the owner extends the Jacksonville no-ship
waiver to New Orleans.** It is rendered so that decision can be made on pixels rather than
description. No paid asset is proposed.

---

## Rejection log — every candidate opened, with the native-crop reason

**CRU-MEX (12 opened at native).** 13881563 Ensenada sunset silhouette: the funnel is the Carnival
whale-tail, unmistakable at 3x native **and still identifiable as a shape on the 1600x900 render** —
the mark that "survives every silhouetting technique"; same refusal as Tampa's Paradise. 32609062
Costa-livery ship at sunset: **"Carnival Firenze"** legible on the superstructure at 1.5x native,
yellow funnel with a "C" at 2x. 32628569 top-down at the Ensenada pier: ship fills the frame,
"ENSENADA MEXICO" painted on the pier apron, readable at contact-sheet scale. 22912024 and 22912092
Cabo two-ship frames: Princess ship at ~45% of width with a second ship at right wearing the red
whale-tail visible at contact scale; a reframe dropping the Carnival ship pushes the Princess hull
past 55% and its bow name into legibility — rejected on arithmetic, not rendered. 33126088 and
33126084 Ensenada twilight aerials: "COSCO SHIPPING" on the container gantries beside the cruise
berth, readable at contact scale — the port is a box terminal. 33126086 town aerial: ship a speck at
the pier, cathedral is the subject. 32599584 breakwater and gantries, no cruise ship. 20233238: a
passenger ferry under a storm sky, not a cruise ship. 35192391: own-ship bow from on deck — the
cabin-window analogue. **35569686 not fetched** — its Pexels title reads "Carnival Panorama … Choose
Fun branding". Cozumel's Pexels pool (24 results) contains **zero vessels**.

**CRU-BAH (10 opened at native).** 20054196 (PNG original, 3024x4032): Atlantis Royal Towers sit on
the horizon beside the lighthouse — an identifiable named resort, the Orlando/C8 ownership failure.
1062021 (7952x5304): a single resort's pier and palapa at twilight — implies a property. 36898096:
Bay Street harbour walk, "FIRE" cabinet legible, retail awnings — the Rolex/DI zone. 15306293:
**"VIKING SEA"** legible on the bow at contact scale, plus US Coast Guard cutters. 27597490: night,
Bay Street retail lit. 20070244: grey overcast, the horizon vessel is a freighter — rendered and
rejected on vibe. 27013517 and 36968514: same lighthouse, flatter light, portrait, weaker than the
primary — not brand-failed. **Rejected unopened on title (named resort as subject):** 13015419,
2666281, 2666282, 28443535, 9400821, 9400832, 26665108, 9400986, 9400912, 9400822.

**CRU-JAX (6 opened).** 10788521 full frame: "WELLS FARGO" legible at delivered scale — recovered by
crop, above. 34948489: "VYSTAR" and a bridge-clearance sign legible at contact scale. 34935299:
"Water Taxi" sign and "EverBank" legible at contact scale. 34948492: "EverBank" on the tower at
contact scale; reframe not attempted because the primary is stronger. 34472741: Jax Beach pier
under a storm, near-monochrome — not vacation-selling. Unsplash Asper skyline: grey, not rendered.
**Not fetched on title:** 34935295 ("Royal Princess yacht" — a ship), 33434662 ("EverBank Tower").

**CRU-FTL (6 opened).** 17893559: night, underexposed. 6746794: downtown aerial with no water.
Unsplash `photo-1484199383121-dfa3c30608cd` (Lance Asper, DJI FC330, 2017, 3511x1975): top-down
beach and A1A — cars and red awnings dominate the top edge, no waterfront skyline; not rendered.
Unsplash `photo-1538016298852-e69a243f7ee2` (Luiz Cent, DJI FC220, 2018, 3992x2992): top-down
Tarpon River canals — private homes are the subject (C4). **Not fetched on title:** 28599652 and
29142412 (Jungle Queen / tour boat — named operators), 34645105 (named boat), 15334539 / 15334541 /
34764376 / 15368395 (single private residences). Unsplash Getty/+ items skipped: `WA5tGM2RRaw`,
`UMGAlD64qek`, `EfYRs0k0IPY`, `8X7g_qcz4t4`, `XQF5qb7sbw0`, and all four `port-everglades` results.

**CRU-NOL (10 opened)** — see the table above. Known-dead from V2/V3 and not re-opened: 39004104,
32744123, 32744124, 34150166, 34183380, 38720292, 39004126.

## Coverage

16 search pages harvested via WebFetch (Pexels 12, Unsplash 4) plus 5 Pexels photo pages and 3
Unsplash photo pages for attribution, location and camera. **44 candidates downloaded at native
and opened**; 12 rendered to 1600x900 and opened; ~60 native and delivered-scale brand tiles
opened. 7 renders retained under `research/crops/`; 5 rejected renders moved to the session
scratchpad so the crops folder holds only nominations and the one NOL decision exhibit.

## Mechanics learned this sweep

- A 27-byte "jpeg" from `images.pexels.com` means the original is a **PNG**:
  `pexels-photo-<ID>.png` served 20054196 at 3024x4032 RGBA, 13 MB.
- **Pexels photo pages render through WebFetch** and expose title, photographer display name and a
  stated Location field — the C6b pre-check now works on Pexels as well as Unsplash.
- Luminance-threshold width measurement fails when the object sits on a bright horizon (BAH);
  measure on a 4x tile of the delivered file and say so.
- Unsplash "port-everglades" is entirely paywalled (4/4). Fort Lauderdale free inventory is
  Intracoastal and beach; the port itself is not photographed free at more than 2048 px.

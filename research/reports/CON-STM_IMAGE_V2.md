# CON-STM — St. Maarten Condo — Image Report V2

**Certificate:** CON-STM / `st-maarten-condo` / St. Maarten Condo
**Destination:** St. Maarten / Sint Maarten (Dutch side) and Saint-Martin (French side) — one island
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no Unsplash+, no `premium_photo-`, no retouching.
**Candidates opened with the Read tool:** **34** (12 required)

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1636903756822-11b3176e28f3` | Unsplash — Tomasz Tomal | Unsplash License (free tier confirmed) | 3968 x 2976 | **YES — visually verified.** 100% rule run at native 1:1, 3x, 4x, 5x, 6x, 8x; plus delivered-pixel re-check at 4x and 8x |
| **ALTERNATE** | Pexels photo `34335874` | Pexels — Matteo Sassola | Pexels License | 4536 x 5670 | **YES — visually verified.** 100% rule run at native 1.6x, 4x, 4.5x, 8x; plus delivered-pixel re-check at 4x |

Both are **elevated / aerial many-property frames** in which **no single building is the subject** —
the governing rule of the condo family, applied exactly. Both are unmistakably this island.
Neither contains a legible wordmark of any kind at any magnification tested.

**Fetch URLs — no query string. This is the file that was brand-checked and the file that ships:**

```
https://images.unsplash.com/photo-1636903756822-11b3176e28f3        # PRIMARY  (3968 x 2976)
https://images.pexels.com/photos/34335874/pexels-photo-34335874.jpeg # ALTERNATE (4536 x 5670)
```

Provenance pages (for the record only — see C1 below, none of this metadata may ship):

```
https://unsplash.com/photos/a-beach-with-a-lot-of-people-on-it-948zYke541Q   (@tomaltomasz)
https://www.pexels.com/photo/34335874/                                       (@matteo-sassola-2156165555)
```

Re-fetched to an independent filename and byte-compared against the earlier download before
approval — both matched (`md5 eb171644a4650b9fae99c6804dfe9afb` and `4d547980006b5dcc4f80c891e9e3b3ef`).

---

## 2. C1 — source titles, recorded so they can be stripped

The certificate names no property and assigns the unit at confirmation. Neither of these captions
names a property, but **both name a place and one names a photographer**, and neither may be carried
through to the site as title, filename, or alt text.

| Slot | Source title / alt, verbatim | Ships as |
| --- | --- | --- |
| PRIMARY | "a beach with a lot of people on it" — Tomasz Tomal, Unsplash | `st-maarten-condo-hero.jpg`, alt: "Caribbean bay and hillside town above turquoise water" |
| ALTERNATE | "Scenic Aerial View of Saint Martin Coastline" / "A stunning aerial photograph of Saint Martin's turquoise waters, islands, and boats, showcasing the serene coastal beauty" — Matteo Sassola, Pexels | `st-maarten-condo-alt.jpg`, alt: "Aerial view of a Caribbean resort hillside above a turquoise reef" |

Neither CDN filename is descriptive, so no property is implied by the URL either. Good.

---

## 3. Delivery crops — rendered with PIL, opened, inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(400, 120) → (3968, 2127)` | 3568 x 2007 | 1600 x 900 | **0.4484x (downscale)** | **none** |
| ALTERNATE | `(0, 1250) → (4536, 3801)` | 4536 x 2551 | 1600 x 900 | **0.3527x (downscale)** | **none** |

**No upscaling anywhere. Both deliverables are downscales of ≥2.2x linear.**

Reproduce exactly:

```python
from PIL import Image
im = Image.open("photo-1636903756822-11b3176e28f3.jpg")          # PRIMARY, 3968x2976
im.crop((400, 120, 3968, 2127)).resize((1600, 900), Image.LANCZOS).save("con-stm-primary.jpg", quality=92)

im = Image.open("pexels-photo-34335874.jpeg")                    # ALTERNATE, 4536x5670
im.crop((0, 1250, 4536, 3801)).resize((1600, 900), Image.LANCZOS).save("con-stm-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/stm/CON-STM_primary_1600x900.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/stm/CON-STM_alternate_1600x900.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows

A drone frame over Great Bay, Philipsburg, looking east-north-east. The whole sweep of Great Bay
Beach curves from lower-left to centre, with the **entire Philipsburg waterfront strip** — forty-plus
low- and mid-rise buildings in coral, yellow, green, pink and white, one pale-coral balconied
condominium block anchoring the strip — running along it. Behind: the green ridgeline of Sentry Hill
and Cole Bay Hill, then Pointe Blanche. In front: brilliant graduated turquoise-to-sapphire water
with the Great Bay pier, a small ferry under way, moored sailing yachts far right.
**No cruise ship in this frame.** Beach umbrellas and loungers line the sand.

**Overlay space:** the top **~45% of the frame is unbroken deep-blue sky** with a few cumulus at the
right edge, and the centre-right is unbroken water. Two very large low-detail regions for a
translucent hero or header. Excellent — the best overlay geometry of anything opened in this sweep.

### What the ALTERNATE frame shows

An aerial over the Orient Bay / Caye Verte reef lagoon on the French side. Across the top:
a **hillside resort village of well over a hundred separate properties** — rows of identical
white-and-green pitched-roof resort units on the left, a blue-roofed beach-club terrace row,
terracotta and grey villa clusters climbing the ridge, and a beach-club lounger line at the right
edge. Below: a rocky islet in a turquoise-and-jade patch reef with three catamarans and a sloop
at anchor. Mountains and a salt pond at the top-left corner.

**Overlay space:** the lower two-thirds is reef water — textured but very low contrast, so a
translucent panel reads cleanly. The lower-right quadrant is the calmest region.

**Honest caveat:** the light is flat and slightly overcast. It is attractive and clearly premium
Caribbean, but it is a step below the primary on pure saleability. It is the alternate for exactly
that reason.

---

## 4. The 100% rule — what was actually magnified

Fetched with **no query string** in both cases. Unsplash served 3968 x 2976 (2.0 MB);
Pexels served 4536 x 5670 (4.2 MB). Every crop below was taken from the **native** file and opened
with the Read tool. Then, per **C3c**, every flagged item was re-measured in the **shipped 1600x900
file**, because the 100% rule catches false negatives from over-magnification as well as false
positives from downscaled looks.

### PRIMARY (`photo-1636903756822-11b3176e28f3`)

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Whole town strip, west half | (0, 1400, 1750, 2100) | **1:1** | Clean. ~60 building facades and roofs. No wordmark, no logo, no sign-shaped object with glyphs. |
| Beach furniture row, jet skis, kayaks | (1250, 1900, 1800, 2400) | 3x | Clean. Folded umbrellas, loungers, jet skis, kayaks — all unbranded. |
| Foreground house, red roof (SW corner) | (0, 2250, 760, 2800) | 2.5x | Identifiable **private residence** with laundry on the balcony. **Cropped out of the delivery entirely** — see C4 below. |
| Great Bay pier | (1580, 1620, 2200, 1830) | 4x | Clean. Concrete pier, three mooring posts, swimmers, a float. No signage. |
| Mid-town, coral condo block | (700, 1430, 1500, 1800) | 4x | Clean. Balcony stacks, market stalls under blue awnings. No facade lettering. |
| **Philipsburg boardwalk — the Front Street risk** | (1700, 1400, 2900, 1800) | 4x | Clean. Red-roofed boardwalk pavilions, restaurant terraces. **No legible retail signage.** |
| Boardwalk, densest retail band | (1750, 1430, 2350, 1650) | **8x** | Clean. One dark rectangle reads as a blank sign *panel* — **no glyphs at 8x**. |
| Hillside facades, west (the low buildings) | (100, 1550, 700, 1780) | **8x** | Clean. A blue geometric "H"-like shape on a blue building (architectural, ~35 native px) and a satellite dish. Smeared marks on one yellow band do **not** resolve into type at 8x. |
| Central beach + stalls | (1350, 1500, 1900, 1800) | **6x** | Clean. Crowd, umbrellas, stalls. Nothing readable. |
| Far east — Pointe Blanche | (2850, 1380, 3968, 1660) | **5x** | Clean. Waterfront sheds, boats, a headland. No marks. |
| Far east skyline | (2400, 1400, 3100, 1620) | **5x** | Clean. Hillside buildings only. |
| One red/maroon mark, west strip | (509, 1580, 1009, 1880) | **6x** | **False alarm.** Resolves as a **burgundy shop awning** over a pink building plus red canopies. No lettering. |

**Delivered-pixel re-check (C3c).** The same maroon awning region and the whole west strip were
re-cropped **out of the shipped 1600x900 file** and magnified 4x and 8x. At 8x of the delivered
pixels the awning and every adjacent facade are coloured mush with **zero glyph structure**. At 1:1
— the size anyone will actually see — nothing in the frame reads as a sign at all. The blue "H"
shape measures **≈16 px in the delivered file** and is a shape, not a wordmark.

**Result: PASS at every magnification, native and delivered. No third-party mark of any kind.**

### ALTERNATE (Pexels `34335874`)

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Full village band | (700, 1450, 2400, 2150) | 1.6x | Clean. Resort unit rows, villas, salt pond behind. No signage. |
| West low-rise resort block | (650, 1500, 1700, 1900) | 4x | Clean. Rows of identical white pitched-roof units — a resort village, not one hotel. No nameplate. |
| East villa cluster + beach club | (3500, 1500, 4536, 1950) | 4.5x | Clean. Blue-roofed terrace row, hillside villas, and a long pale row along the beach. **No signage.** |
| Villa cluster, centre | (2300, 1500, 3200, 1850) | **8x** | Clean. ~40 villa roofs at 8x with **nothing readable anywhere**. |

**Delivered-pixel re-check (C3c).** The pale row along the beach at the east end looked like a
line of **parked cars** at 4.5x native — the exact C5 failure that killed Upper Algiers. Re-cropped
from the shipped 1600x900 file at 4x: it resolves as the **beach-club lounger and parasol line**
plus a few small boats at the shoreline, not a car park. Either reading is unbranded and neither is
the subject of the frame.

**Result: PASS at every magnification, native and delivered.**

---

## 5. Reframing — what it recovered and what it discarded

Step 4a was run before any rejection on region.

- **PRIMARY, five crops tested.** `(0,0)` top-anchored, `(0,300)`, `(0,600)`, and two right-shifted
  narrower crops. `(0,600)` was discarded because it pulls the **identifiable private residence**
  (red roof, laundry on the balcony) into frame — C4. The winning crop `(400,120,3968,2127)` was
  chosen because it drops that residence **and** the scruffiest service yard, parked-car cluster and
  tarpaulin structures on the west edge, while keeping the whole bay, the whole strip, the ridgeline
  and the full sky. Reframing converted a good frame into a compliant one at zero cost.
- **ALTERNATE, three crops tested** at y-offsets 900 / 1250 / 1600. `900` includes the mountains but
  also a dull grey overcast sky band; `1600` cuts the village down to a thin strip. `1250` was taken:
  no grey sky, village band across the top fifth, reef and islet filling the frame.
- **`photo-1680317423379-c2d47607b8e6` (Marigot rooftops) was reframe-tested and still rejected.**
  The bottom edge carries a row of legible restaurant and bar signage; an upper-band crop does drop
  it, but what remains is a rooftop view of an ordinary town with almost no water and no resort
  content — C5, not premium, not vacation-selling. Reframing fixed the branding and could not fix
  the saleability. Documented because "reframe first" does not mean "reframe always wins".

---

## 6. Full candidate ledger — 34 opened

Every row below was **downloaded and opened with the Read tool**. No row is metadata-only.

### Approved

| # | Asset | Source / title | Verdict |
| --- | --- | --- | --- |
| 1 | `photo-1636903756822-11b3176e28f3` | Unsplash, Tomasz Tomal — "a beach with a lot of people on it" | **PRIMARY — visually verified** |
| 2 | Pexels `34335874` | Pexels, Matteo Sassola — "Scenic Aerial View of Saint Martin Coastline" | **ALTERNATE — visually verified** |

### Rejected — wrong destination (7)

The single biggest source of noise in this sweep. Both platforms' St Maarten queries leak heavily.

| # | Asset | What it actually is | Reason |
| --- | --- | --- | --- |
| 3 | `photo-1571174215966-b271b37b6a97` | **Trunk Bay, St John, USVI** — the snorkel-trail cay is unmistakable | Wrong island |
| 4 | `photo-1617280325974-f9c5721a4862` | **Marigot Bay, St Lucia** — palm spit, Capella marina | Wrong island. The *Marigot* name collision is what pulled it in |
| 5 | Pexels `5769600` | Reef-fringed shore, orange-tile condo clusters, golf green — **reads as Frigate Bay, St Kitts** | Cannot confirm St Maarten; same photographer's cruise-itinerary set |
| 6 | Pexels `12448303` | Southwest **Puerto Rico** coast | Wrong island |
| 7 | Pexels `33315208` | **Tombolo de Sainte-Marie, Martinique** with sargassum | Wrong island |
| 8 | Pexels `33405686` | Same Martinique causeway, different angle | Wrong island |
| 9 | Pexels `33349639` | Guadeloupe-style beach village | Wrong island |
| 10 | `photo-1677727716758-1bb0189242b1` | **Snow, dead grass, power lines** — temperate latitude | Wrong hemisphere, frankly |

### Rejected — legible third-party branding (6)

| # | Asset | What was legible | Where |
| --- | --- | --- | --- |
| 11 | `photo-1680317423379-c2d47607b8e6` | Restaurant/bar fascias along the bottom edge: "WINNIE", "LIVE LOBSTER", "LE SOLEIL" and others | Marigot street level — **C3b exactly**: the low buildings, not the towers |
| 12 | `photo-1680363409694-0ebe55209f17` | A surfboard-shaped **"LIFE IS GOOD"** sign on a palm — a registered apparel brand | Beach, right third |
| 13 | `photo-1573518900766-5ddc9c1c2abc` | A large hand-painted **"WELCOME"** sign, plus a cruise ship with a legible funnel mark | Great Bay beach |
| 14 | Pexels `13231052` | **"ATRIUM"** legible on a resort facade behind the yachts — a named property | Simpson Bay |
| 15 | Pexels `13249406` | **"NO DIVING" / "ATTENTION"** warning signage on the pool house | Resort pool |
| 16 | Pexels `13240762` | Vessel name and red-awning fascia signage in a marina | Marigot marina |

### Rejected — C3 violation: a single building is the subject (3)

| # | Asset | Reason |
| --- | --- | --- |
| 17 | Pexels `13874207` | A grand porte-cochère resort entrance **is** the frame. Ground level, one property, nameplate-shaped surfaces. Fails the governing rule outright |
| 18 | `photo-1680911775655-17ecfad3a32c` | Resort garden walkway and one balconied block. Also proves no destination — could be any Caribbean resort |
| 19 | `photo-1680317423393-2fca178a2fe3` | Genuinely beautiful turquoise cove with a clifftop resort. One property; **also carries a provenance flag — see §7** |

### Rejected — C5, not premium / not vacation-selling (6)

The dominant rejection cause in the Sedona and Myrtle Beach probes, and the dominant cause here too.

| # | Asset | Reason |
| --- | --- | --- |
| 20 | Pexels `15471702` | Waterfront salvage yard: corrugated metal, junk, scrub |
| 21 | `photo-1707074180898-3fe0fd1c33ee` | Cracked hillside asphalt, **utility poles and overhead wires**, windscreen glare. The Upper Algiers failure |
| 22 | `photo-1759340875613-abc3a10a70f2` | Beachfront houses with peeling paint, a plastic chair, a seaweed line. C4 as well |
| 23 | `photo-1680386435940-03cd5d42dab5` | Restaurant deck with a foreground beer bottle. Brand risk and wrong product |
| 24 | `photo-1759340875592-3b269056578a` | Over-water restaurant table with cutlery. Reads as a restaurant review, not a condo |
| 25 | `photo-1655993711158-2099be6ec6e5` | Marina tour boat with legible hull name and passengers' faces. Not a condo |

### Rejected — no destination proof and/or no property content (7)

Handsome frames that cannot do the condo family's job: they prove nothing about where you are staying.

| # | Asset | Reason |
| --- | --- | --- |
| 26 | `photo-1642046358221-65a4243779cc` | Mullet Bay bluff. Lovely, **zero buildings** — no condo content |
| 27 | `photo-1677252368287-7796ef96f387` | Rocky headland beach, zero buildings |
| 28 | `photo-1514480605825-a4804160b313` | Top-down beach aerial, zero buildings, could be anywhere |
| 29 | `photo-1497632689487-5ff95ff86b7a` | Top-down pier and turquoise water, no destination cue |
| 30 | `photo-1551960052-feacdb5db157` | Island from a departing aircraft; buildings sub-resolution; reads as Anguilla |
| 31 | `photo-1707074437923-245dd9551692` | Green hills from the water; the town is a thin distant band |
| 32 | `photo-1707074536350-f12461a1d275` | Dark archway framing the sea. Portrait, no overlay space |

### Considered and passed over (2)

| # | Asset | Why it lost |
| --- | --- | --- |
| 33 | `photo-1707074240579-e5cca897afdd` | The same Great Bay panorama as the primary, and closer in — but it carries a **heavy baked-in tilt-shift blur** across the top and bottom thirds, which cannot be removed at zero budget and reads as dated. It also contains a cruise ship, which is the wrong product for a condo certificate. **Rejected on aesthetics, not compliance** |
| 34 | `photo-1614602891726-31cf3a973b02` | A real 6240 x 3510 aerial of the French side — Orient Bay, the salt ponds, Green Cay, with a genuine multi-property village strip. Compliant. Lost to the alternate on light: the mountains are in heavy shadow and it reads as a geography plate rather than a vacation frame |
| — | Pexels `5769701` | Philipsburg from a cruise deck. Piers dominate the lower half — reads as a **cruise** certificate, not a condo. Tested and set aside |
| — | `photo-1678445100397-7dab093d588b` | Little Bay cove with one terracotta-roofed block. Single property, rubble foreground. Set aside |

### Never opened — deliberately avoided

| Asset | Reason |
| --- | --- |
| `photo-1551963837-2a42d66d39d8`, `photo-1551960051-39f23da5ed22`, `photo-1591070801219-95bf3ebdc4af`, Pexels `34700478`, `5769706`, `585004`, `5785699` | **Maho Beach trap.** Aircraft-over-sunbathers frames exist to show the airline; every one carries a legible carrier wordmark, and it is the wrong product for a condo certificate. Avoided entirely per the brief |
| `premium_photo-1669050695617-...`, `premium_photo-1733259774864-...`, `premium_photo-1754211633416-...`, `premium_photo-1697729911993-...`, `premium_photo-1669029181733-...`, `premium_photo-1732834277960-...`, `premium_photo-1677788875872-...` | **Unsplash+ / Getty.** Paid licence. Zero budget — not fetched, not proposed |
| Pexels `30070291`, `38059196` | Cruise ships at a Caribbean pier — wrong product, funnel-mark risk |

---

## 7. AI / provenance screen

**PRIMARY — passes on both available tests.**
- Unsplash strips EXIF (confirmed: `getexif()` returns nothing), so the camera-metadata half is
  unavailable. The brief's zero-cost substitute applies: the numeric prefix of `photo-<n>-<hash>` is
  a Unix upload timestamp. **`1636903756` → 2021-11-14** — comfortably pre-generative for
  photorealistic landscape imagery.
- Pixel geometry is **3968 x 2976**, a real 11.8 MP 4:3 sensor readout, not a round generator size
  and not a power-of-two multiple of anything. Consistent with the visible evidence in the file:
  handset-style oversharpening halos, chromatic fringing on high-contrast roof edges, and real
  optical haze on the far headland. Reasoned pass.

**ALTERNATE — passes on the geometry test; document the reasoning, per the brief's Pexels exception.**
- Pexels strips camera EXIF from everything it serves. This file returns only
  `Orientation / XResolution / YResolution / ResolutionUnit` — no make, no model, no exposure.
  The camera-metadata half of the screen **cannot be run**, exactly as the brief anticipates.
- Geometry test instead: **4536 x 5670** is not a generator output size. It is a plausible portrait
  crop from a 48 MP quad-Bayer drone/phone frame (8064 x 6048 rotated), and the file carries real
  optical signatures — atmospheric haze gradient over distance, motion-consistent catamaran wakes,
  and reef caustics that follow bathymetry rather than texture noise. **Reasoned pass, not an
  unexamined one.**

**A provenance flag worth recording for future sweeps.** Six files in the James Thomas St Maarten set
(`photo-1680317423379`, `photo-1680317423393`, `photo-1680363409694`, `photo-1680386435940`) report
**exactly 16320 x 12240**, and two others (`photo-1677727716758`, `photo-1680911775655`) report
**exactly 13056 x 9792**. Those are precise **4x multiples** of 4080 x 3060 and 3264 x 2448 —
handset frames run through an upscaler — and they carry **no EXIF at all**. Under the brief's rule
("no camera data on a suspiciously round pixel dimension: AI cannot be positively ruled out") these
are a caution, and the mush visible at 4x confirms the resolution is synthetic rather than optical.
`photo-1680317423393` was the prettiest single frame in the whole sweep and this is the second reason
it is not nominated. **Check for exact power-of-two multiples of handset geometry before trusting a
very large Unsplash file.**

---

## 8. Licence

| Slot | Licence | Attribution required | Share-alike | Notes |
| --- | --- | --- | --- | --- |
| PRIMARY | **Unsplash License** (free tier confirmed on the photo page; no `premium_photo-` prefix) | No | No | Crops and commercial use permitted |
| ALTERNATE | **Pexels License** ("Free to use") | No | No | Crops and commercial use permitted |

No CC BY-SA anywhere in this nomination, so no share-alike attaches to the published crop.
No retouching was performed on either file — only cropping and downscaling, both licence-permitted.

---

## 9. What this sweep adds to the family rules

**C3 held again, and held harder than on Myrtle Beach.** Every ground-level or single-property frame
opened here failed — six of them on branding, three on the single-subject rule, six on saleability.
Both approvals are elevated many-property frames. The rule is now **100% predictive across 49
candidates** over three probes.

**C3b fired precisely as written.** The only legible property-adjacent signage found in this entire
sweep was **street-level retail along the bottom edge** of a rooftop view — bars and restaurants, not
resorts. Nothing on any tower, at any magnification, in any frame. An agent who magnified the
condo blocks in the primary would have found nothing and learned nothing; the risk was always the
low buildings.

**Two traps confirmed, one new one found.**
1. **Maho Beach** dominates the island's search results — 7 of the ~60 results harvested. Avoided.
2. **Philipsburg Front Street** retail was the live risk in the primary and was cleared only by
   altitude: the drone is high enough that shop fascias face the street, not the camera, and nothing
   resolves at 8x native or 8x delivered.
3. **NEW — place-name collisions are a destination solvent as strong as amenity words.** Eight of
   34 opened candidates were the wrong island. `philipsburg` on Unsplash returns **Philipsburg,
   Montana/Pennsylvania** almost exclusively — 14 of 16 results were a mainland US small town.
   `sint maarten` pulled in **Marigot Bay, St Lucia** on the shared "Marigot" name and **Trunk Bay,
   USVI** on nothing at all. C6 should be extended: *verify the geography visually before judging
   anything else — on a small island the platform's place tagging is unreliable in both directions.*

**C6's two-source split was right, and both halves earned their keep.** `st maarten hotel` on Pexels
surfaced the alternate with a human-written title that confirmed the island. Bare `sint maarten` on
Unsplash surfaced the primary, which the plain `st maarten` query did **not** return. **Run the
destination in both spellings on Unsplash** — "st maarten" and "sint maarten" returned materially
different result sets, and the winner appeared only under the Dutch spelling. Add that to C6.

**C2 is disproved for this destination.** Supply here is neither singular nor scarce: roughly 60
distinct candidates across five searches, of which two are usable. St Maarten behaves like Cancun
(abundance plus high signage risk), not like Sedona.

**Reframing did the decisive work again, in both directions.** It converted the primary from
"good but carries a private residence and a service yard" to fully compliant at zero cost, and it
**failed to save** the Marigot rooftop frame, which proves the test is real rather than a formality.

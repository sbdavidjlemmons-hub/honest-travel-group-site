# CON-SCO — Scottsdale Condo — Image Report V2

**Certificate:** CON-SCO / `scottsdale-condo` / Scottsdale Condo
**Destination:** Scottsdale, Arizona (Sonoran Desert / Camelback–McDowell resort corridor)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch. Condo rules C1–C7 applied.
**Date:** 2026-09-12
**Budget:** zero. No Unsplash+, no Getty, no `premium_photo-`, no retouching, no purchase proposed.
**Candidates opened with the Read tool:** 15 (target was 12).

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1706403222567-06fe8d8dc93e` (page slug `akE66HU-_Kg`) | Unsplash — Matthew Hamilton (@thatsmrbio) | Unsplash License (free, **not** Unsplash+) | 4862 x 3241 | **YES — visually verified.** 100% rule run at native (3x/4x/5x) **and** re-run on the shipped 1600x900 file at 6x/8x |
| **ALTERNATE** | Pexels photo `39480846` | Pexels — Tom Jackson (@themrjaxon) | Pexels License (free, no attribution required) | 6329 x 4220 | **YES — visually verified.** 100% rule run at native (4x/8x) **and** re-run on the shipped 1600x900 file at 8x |

Fetch URLs — **no query string**, these are the exact bytes that were brand-checked and the exact
bytes that should ship:

```
https://images.unsplash.com/photo-1706403222567-06fe8d8dc93e          # PRIMARY  -> 4862x3241
https://images.pexels.com/photos/39480846/pexels-photo-39480846.jpeg  # ALTERNATE -> 6329x4220
```

Source pages (for the record only — do **not** carry any of this text to the site, see §6):

```
https://unsplash.com/photos/an-aerial-view-of-a-city-with-mountains-in-the-background-akE66HU-_Kg
https://www.pexels.com/photo/39480846/
```

**Neither frame contains a single legible character of text, a logo, a nameplate, a flag,
a banner or a storefront sign — at any magnification tested, in the native file or the
delivered file.** That is a clean result, and it is a direct consequence of obeying C3.

---

## 2. How the governing rule decided this

> **Shoot the strip, not the resort. Elevate until no single building is the subject.**

The rule was 15-for-15 predictive again on this destination.

- Every frame I opened where **one building was the subject** failed — either on signage risk,
  on C4 (identifiable private residence), or on C5 (not premium / not vacation-selling).
  That is 3 of 3 ground-level single-building frames (`px_2961944`, `px_36486483`,
  `us_1617407866960`) plus the two strongest-looking single-property frames
  (`px_9290787`, `us_1617407867245`), both of which carried a brand find at high zoom.
- Every frame where **no single building was the subject** survived the branding test.
  The two nominations are the two that also survived C5.

**C3b confirmed again — magnify the LOW buildings.** The two brand finds in this sweep were
(a) a red sign band under a poolside snack awning and (b) a branded amenity box on a pool-deck
side table. Both are at ground level, both are tiny, and both would have been missed by an agent
magnifying rooflines. Meanwhile not one resort nameplate turned up anywhere in 15 candidates.

**C3c cut both ways again.** The two brand finds were *found* at 10x native and then *dismissed*
by measuring them in the delivered file (see §5) — but the frames they sit in were rejected for
other reasons, so no 100%-rule false negative was shipped.

**Scottsdale-specific caution, tested.** The brief warned that Old Town retail and golf branding
are the local hazards. Both fired:
- `us_1638398415609` — the Scottsdale Quarter–style palm promenade, easily the best sky in the
  whole set, is a **retail district**. Rejected on subject before signage even mattered.
- `px_39480846` — the golf frame carried a **club pennant with a colour emblem** on the green.
  Recovered by reframing (§4), not by argument.

**Sedona collision avoided.** `us_1638398417467` is a beautiful Camelback sunset — of **red
sandstone**, which is exactly the Sedona look this certificate must not duplicate. Rejected on
that ground alone. Both nominations are brown-granite / saguaro-and-palm Sonoran, not red rock.

---

## 3. Delivery crops — rendered with PIL and inspected at 1:1

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 300) → (4862, 3035)` | 4862 x 2735 | 1600 x 900 | **0.3291x (downscale)** | **none** |
| PRIMARY — alt crop, more overlay sky | `(0, 0) → (4862, 2735)` | 4862 x 2735 | 1600 x 900 | **0.3291x (downscale)** | **none** |
| ALTERNATE | `(1150, 500) → (6329, 3413)` | 5179 x 2913 | 1600 x 900 | **0.3089x (downscale)** | **none** |

**No upscaling anywhere. Both deliverables are ~3x downsamples of the native file.**
Crop aspect ratios are 1.7777 and 1.7778 against a target 1.7778 — no distortion.

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("photo-1706403222567-06fe8d8dc93e.jpg")          # 4862x3241
im.crop((0, 300, 4862, 3035)).resize((1600, 900), Image.LANCZOS)\
  .save("con-sco-primary.jpg", quality=92)

# PRIMARY — variant with a larger clean-sky band for a heavier overlay
im.crop((0, 0, 4862, 2735)).resize((1600, 900), Image.LANCZOS)\
  .save("con-sco-primary-moresky.jpg", quality=92)

# ALTERNATE — x starts at 1150 to drop the branded golf pennant, see §4
im = Image.open("pexels-photo-39480846.jpeg")                    # 6329x4220
im.crop((1150, 500, 6329, 3413)).resize((1600, 900), Image.LANCZOS)\
  .save("con-sco-alternate.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/sco/CON-SCO_PRIMARY_1600x900.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/sco/CON-SCO_PRIMARY_altcrop_moresky_1600x900.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/sco/CON-SCO_ALTERNATE_1600x900.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
A golden-hour elevated telephoto across the whole Camelback–Paradise Valley–Scottsdale basin.
**Camelback Mountain** fills the left-centre, lit copper by the setting sun, with Mummy Mountain
stepping away to its right and the **McDowell Mountains** ranged along the right horizon. Below
and in front of it: several kilometres of low desert resort architecture — long white guest-room
wings with balcony runs, courtyard complexes, casita clusters, date palms, manicured golf greens
and a small resort lake. Upper third is an unbroken blue-to-peach sky gradient.

This is the exact "many properties, no guarantee implied" composition C3 asks for: **dozens of
resorts and condominium complexes are in frame and not one of them is the subject.** The subject
is Camelback Mountain, which belongs to no one.

**Overlay space:** the top ~35% is a clean sky gradient with zero detail; the alt crop raises that
to ~48%. Either is excellent for a translucent hero or header.

### What the ALTERNATE frame shows
Ground-level golden hour on a Scottsdale resort golf course. A backlit stand of Washingtonia palms
splits the frame, the sun flaring through the right-hand cluster. Behind them a **low three-storey
balcony-run resort/condominium block and a single-storey clubhouse wing** sit small in the
mid-ground with blue umbrellas and a string of bunting, and behind that the Camelback/Phoenix
Mountains run as a clean blue silhouette. Bottom 35% is an even, low-detail fairway.

The buildings occupy roughly **8% of frame height and ~40% of frame width at a great distance** —
the condo analogue of the cruise family's "ship under 40% of frame width" test. No single building
is the subject; the palms and the sunset are.

**Overlay space:** the upper-left quadrant is clean sky, and the bottom third is an even green.
Two large low-detail regions. Excellent.

---

## 4. Reframing — the move that produced the alternate

Per step 4a, `px_39480846` was **not** rejected on its brand find.

At 8x native, the golf flag on the left of the frame resolves as a **navy pennant carrying a
multi-colour emblem** — a club or tournament mark, sitting at native `(940–1080, 2680–2720)`.
That is a third-party commercial mark and it is not dismissible by size argument alone.

It did not need to be. The mark lives in the leftmost 17% of a 6329 px frame. Cropping
`x` from **1150** removes the flag and the flagstick entirely while keeping the palm stand, the
resort band, the mountain silhouette, the sunburst and the green. **The licence already covers
the crop and it cost nothing.** A second variant starting at `y=500` rather than `y=900` was
rendered and compared side by side; the higher variant is better balanced and was chosen.

The whole frame was then re-swept at native from `x=1150` to `x=6329` — resort facade centre (4x),
resort facade right (4x), far right hillside and arbour (4x), fairway (3x) — and is **completely
clean**. The delivered file was then magnified at 8x across the resort band twice more: nothing
reads.

Reframing was also attempted and **failed** on `us_1617407867245` — see §7, item 9. The mark there
is central and the frame is portrait, so no 16:9 crop holds both the sky and the resort.

---

## 5. The 100% rule — what was actually magnified

Everything below was fetched with **no query string** and cropped from the **native** file.
Every crop listed was opened with the Read tool.

### PRIMARY — `photo-1706403222567-06fe8d8dc93e`, native 4862 x 3241

| Region | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Large white resort complex, mid-frame | (1850, 2020, 2800, 2280) | **5x** | Clean. Long guest-room wings with balcony runs, courtyards, pool decks, porte-cochère. **No rooftop sign, no nameplate, no logo.** |
| Mid-ground low buildings + golf | (1800, 2280, 3200, 2800) | 4x | Clean. Desert homes, hedges, fairways, streetlights, parked cars. Nothing readable. |
| Bottom-left low buildings | (200, 2500, 1700, 3140) | 3x | Clean. Low casitas and desert homes under palo verde. No signage of any kind. |
| Left third, town band | (0, 1900, 1500, 2460) | 4x | Clean. Golf, palms, tile-roof low-rise. Nothing readable. |
| Right third, town + golf | (3200, 2000, 4862, 2620) | 4x | Clean. Hedged fairways, a red golf cart, low homes. Nothing readable. |

**Delivered-file re-check (C3c) — 1600 x 900 file, magnified again:**

| Region in shipped file | Zoom | Result |
| --- | --- | --- |
| Large resort complex | **8x** | Pure texture. No sign-shaped object survives the downsample. |
| Low buildings, left of centre | 6x | Pure texture. |
| Low buildings, right of centre | 6x | Pure texture. |

**Result: PASS at every magnification, native and delivered. Zero marks of any kind.**

### ALTERNATE — Pexels `39480846`, native 6329 x 4220

| Region | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Golf pennant on the green | (880, 2680, 1080, 3060) | **8x** | **MARK FOUND.** Navy pennant with a multi-colour emblem. **Removed by the crop** — see §4. Not in the delivered file. |
| Resort facade, centre-left | (1200, 2700, 2600, 3000) | 4x | Clean. Three-storey balcony runs, plain stucco. No name band, no logo. Bunting is plain multicolour pennant string, unprinted. |
| Resort facade, right wing | (2600, 2700, 4100, 3010) | 4x | Clean. Single-storey glazed bays, pergola, blue umbrellas. No lettering. |
| Far right — hedge line, arbour, bunker | (4100, 2650, 6329, 3200) | 4x | Clean. A plain white wedding arbour, string lights, palms. **No second flag, no tee marker, no course sign.** |
| Fairway foreground | (1150, 3200, 4200, 3813) | 3x | Clean. Grass and palm shadow only. |

**Delivered-file re-check (C3c) — 1600 x 900 file:**

| Region in shipped file | Zoom | Result |
| --- | --- | --- |
| Resort band, left half | **8x** | Clean. Balcony openings, bunting, umbrellas. Nothing resolves as type. |
| Resort band, right half | **8x** | Clean. Glazed bays, pergola, arbour. Nothing resolves as type. |
| Whole frame scanned for flags | 1:1 | **No pennant anywhere.** Crop confirmed effective. |

**Result: PASS. The one mark in this file is outside the delivered frame.**

---

## 6. C1 — source metadata that must be stripped

Neither nomination names a property, but per C1 **no source metadata travels to the site.**

| Slot | Source title / alt text | Source filename | Photographer | Source location string |
| --- | --- | --- | --- | --- |
| PRIMARY | "an aerial view of a city with mountains in the background" | `photo-1706403222567-06fe8d8dc93e` | Matthew Hamilton (@thatsmrbio) | **"Phoenix, AZ, USA"** |
| ALTERNATE | "Scenic Arizona Golf Course at Sunset" | `pexels-photo-39480846.jpeg` | Tom Jackson (@themrjaxon) | **"Scottsdale, Arizona, United States"** |

- **No resort or condominium name appears in either record.** C1's worst case (the Sedona
  "Villas of Arroyo Roble" title) does not arise here.
- The PRIMARY's stated location is **"Phoenix, AZ"**, which contradicts the certificate. That
  string must not reach alt text, filename or caption. See §8 for the honest read on this.
- Recommended shipped filenames, carrying no source identity:
  `scottsdale-condo-hero.jpg` (primary), `scottsdale-condo-hero-alt.jpg` (alternate).
- Recommended alt text, property-free and guarantee-free:
  *"Sonoran desert valley below Camelback Mountain at sunset, Scottsdale area"* (primary);
  *"Palms and a desert resort fairway at sunset near Scottsdale"* (alternate).

Neither caption names, implies or guarantees a property. Neither says "your resort".

---

## 7. Full candidate ledger — 15 opened, every one downloaded and looked at

Search vocabulary used, per C6: **`scottsdale hotel` on Pexels** and **`scottsdale` alone on
Unsplash**, plus one supporting `paradise-valley-arizona` Unsplash page used only to resolve a
photo slug. No "villa", no "condo", no "vacation rental", no state name appended to a query,
no interiors. Paywalled `premium_photo-` / Getty items (5 of 20 on the Unsplash page) were
excluded on sight per the zero-budget standing constraint and never fetched.

| # | Asset | Source / creator | Native | Opened | Verdict and reason |
| --- | --- | --- | --- | --- | --- |
| 1 | `photo-1706403222567-06fe8d8dc93e` | Unsplash / Matthew Hamilton | 4862x3241 | YES | **APPROVE — PRIMARY.** Elevated, many properties, Camelback, golden hour, zero marks. |
| 2 | Pexels `39480846` | Pexels / Tom Jackson | 6329x4220 | YES | **APPROVE — ALTERNATE.** Reframed to drop a club pennant; otherwise clean. Source location states Scottsdale. |
| 3 | Pexels `9290787` | Pexels / Jordan Wollman | 6784x4527 | YES | **REJECT (rule tension), documented.** The single most saleable image in the set — mid-century resort wings framing a turquoise pool with Camelback dead centre. Pavilion glass and breeze-block screen are **immaculate at 4x**. Fails the governing rule: one property, ground level, pool deck is the subject — the exact shape that can imply a guarantee. Also carries a **branded amenity box** on a deck side table: a rust-orange carton with a cream logotype and ring emblem, legible at 10x, native ≈66x75 px, **≈16x18 px delivered** (dismissible under C3c, but it exists). Recoverable if the coordinator ever decides a single-property hero is acceptable. |
| 4 | `photo-1617407867245-f1315ab14d98` | Unsplash / Colin Lloyd | 3663x5494 | YES | **REJECT, documented.** Superb elevated golden-hour resort-over-valley frame; casitas at 3x are textbook condo product and totally clean. Two finds at 10x: a **red sign band** under a poolside awning (native ≈49x18 → ≈21x8 delivered, **no glyph resolves even at 10x**) and a **stylized bird pool-floor mosaic** (native ≈66x22 → ≈29x10 delivered). Both survivable. What kills it is composition: **portrait 2:3, so no 16:9 crop can hold both the sky and the resort** — 2900 px of vertical span would need 5160 px of width and the file has 3663. The skyless lower crop abuts a large back-of-house rooftop of mechanical plant and satellite dishes (C5). Reframe attempted, reframe failed. |
| 5 | `photo-1594618765855-8be8116a739d` | Unsplash / Tyrel Johnson | 4000x6000 | YES | **REJECT — C5.** Perfect C3 compliance (high aerial of a lakes-and-golf community with literal condominium clusters, unbrandable at that altitude) but flat top-down light, no sky, no low-detail overlay region anywhere, and commercial big-box plus a raw dirt lot along the top edge. Reads as a survey, not a holiday. |
| 6 | `photo-1617407866960-b09fc50af3cb` | Unsplash / Colin Lloyd | 3393x5089 | YES | **REJECT — C4 + C5.** Lovely golden-hour view to the McDowells, but the foreground is dominated by a distinctive Spanish-colonial **private estate compound** (C4: identifiable private residence) and the mid-ground at 3x is 1960s ranch suburbia with power lines and street lights. A sky-and-ridge-only crop survives but then contains no resort at all. |
| 7 | `photo-1640585364166-cee701a73ab5` | Unsplash / Kody Goodson | 4928x3264 | YES | **REJECT — C5 + C4.** Paradise Valley from the Phoenix Mountains. Flat mid-day light, dull brown foreground ridge, and the only built content is private tile-roof homes. No resort, no premium cue. |
| 8 | `photo-1638398415609-14d9b0fee25e` | Unsplash / Tyrel Johnson | 4000x6000 | YES | **REJECT — wrong subject + C3b.** Sunset over a palm-lined **retail promenade** (Scottsdale Quarter character). The best sky in the entire sweep. But the subject is a shopping district, storefront bays run down both edges, and C3b says street-level retail is the number-one signage failure mode. Not a resort. |
| 9 | `photo-1638398417467-cb47fd47f716` | Unsplash / Tyrel Johnson | 4000x6000 | YES | **REJECT — Sedona collision.** Camelback's **red sandstone** at sunset. Beautiful, and precisely the look this certificate must not share with CON-SED. Foreground boulder also occupies ~40% of frame, bottom-left is out of focus, no resort present. |
| 10 | `photo-1617407867182-2c3730f7fe29` | Unsplash / Colin Lloyd | 3712x5568 | YES | **REJECT.** Phoenix downtown silhouette with **Sky Harbor** terminals, control tower and parking decks in the foreground. Not Scottsdale, not a resort, and structurally an airfare-family frame. |
| 11 | Pexels `36486483` | Pexels / brentsingletonphoto | 8038x5361 | YES | **REJECT — C3.** "Infinity pool overlooking Arizona mountains at a modern Scottsdale hotel". A single building's cantilevered canopy is the subject and occupies the right 40%; the horizon is a generic pale desert range with no saguaro and no Camelback, so the frame proves no destination. Largest file in the set and still unusable. |
| 12 | Pexels `863802` | Pexels / coralbellestudios | 5762x3994 | YES | **REJECT — destination unproven (C6).** Elevated multi-structure resort pool, genuinely good composition. But the range profile is **Pusch Ridge / Santa Catalina** and the planting is weeping willow — this is Tucson, not Scottsdale. Title states no location. Also a gravel service ramp in the bottom-right. Classic "destination solvent" result: surfaced on a Scottsdale query, is not Scottsdale. |
| 13 | Pexels `7571494` | Pexels / geladelrosario | 6000x4000 | YES | **REJECT — C5 + C3b.** Hazy flat-light aerial of urban sprawl. Big-box retail with coloured signage along the bottom edge, car parks, a freeway. Same failure as the Port Canaveral panorama. |
| 14 | Pexels `2961944` | Pexels / athena | 3648x5472 | YES | **REJECT — C3 outright.** A single hotel facade shot upward from the ground. One building, is the subject, portrait, no destination content whatsoever. |
| 15 | Pexels `19304483` | Pexels / thecreativewrangler | 5611x3507 | YES | **REJECT for this family, documented.** Genuinely lovely golden-hour saguaro foreground over the Valley. But the only built content is a **tract-housing subdivision**, so it fails the family rule's "resort or condominium exterior/grounds" requirement and brushes C4. Held as a pure-landscape fallback if the coordinator ever wants one. |

Rejection causes, tallied against C5's prediction:

| Cause | Count |
| --- | --- |
| **Not premium / not vacation-selling / wrong subject (C5)** | **6** |
| Single building is the subject (C3) | 3 |
| Identifiable private residence (C4) | 2 |
| Destination unproven or wrong destination (C6) | 1 |
| Sedona visual collision | 1 |
| **Legible property name found** | **0** |

**C5 confirmed for a third destination: branding is not the dominant failure mode — saleability
is.** Zero resort nameplates across 15 candidates. The only two marks found in the entire sweep
were a golf club pennant and a product carton, both at ground level, both catchable only by
following C3b.

---

## 8. Honest caveats — read these before shipping

**1. The PRIMARY's source location string says "Phoenix, AZ", not Scottsdale.**
It surfaced on the Unsplash `scottsdale` query, and the topography in frame is unambiguous:
Camelback Mountain foreground-left, Mummy Mountain behind it, the **McDowell Mountains** — which
are Scottsdale's own range — along the right horizon, and the Paradise Valley / Scottsdale resort
corridor filling the basin between them. Scottsdale is physically inside this frame. But the
photographer tagged the shot from where he stood, and the tag says Phoenix. If the coordinator
wants a nomination whose *source record* says Scottsdale in plain text, **the ALTERNATE is that
frame** — Pexels states "Scottsdale, Arizona, United States" on the photo page. The two
nominations are deliberately complementary on this point: the primary is stronger on rule
compliance and cleanliness, the alternate is stronger on documentary destination proof.

**2. The most beautiful image found is not nominated.** `px_9290787` (item 3) would almost
certainly outperform both nominations on click-through. It is excluded on the governing rule,
not on a defect. That is a judgement call and the coordinator can overturn it in one line; the
full brand check is already done and recorded above, and its only find measures ≈16x18 px in a
delivered file.

**3. C3-compliant framing costs intimacy.** Both nominations show the destination rather than a
unit. Neither contains a balcony you could imagine standing on. That is the direct, intended
price of a frame that "cannot imply a guarantee". If the certificate page needs a closer amenity
cue, it should come from a second, clearly-secondary image slot, not from replacing the hero.

---

## 9. Provenance / AI screen

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Licence | Unsplash License — free, no attribution required, **not** Unsplash+ (verified on the photo page) | Pexels License — free, no attribution required |
| Published | **2024-01-28** (photo page) | Not stated on the page |
| Unix-prefix cross-check | `1706403222` → **2024-01-28T00:53:42Z**. **Exact match** to the stated publish date. | n/a (Pexels IDs are not timestamps) |
| File EXIF | Stripped — 0 tags | **6 tags present**: `Copyright: © JaxonLabs`, Orientation, XResolution, YResolution, ResolutionUnit, ExifOffset. **No camera make, model or exposure.** |
| Camera | **Canon EOS 6D — published on the Unsplash photo page** even though the file EXIF is stripped | Not available |
| Geometry check | 4862 x 3241 = **1.5002**, a true 3:2 frame. A Canon 6D is 5472 x 3648; this is a modest crop of that, ratio preserved. Consistent with the published body. | 6329 x 4220 = **1.4998**, a true 3:2 frame at ~26.7 MP — a mild crop of a 6720 x 4480 / 6960 x 4640 class sensor. **Not** a round generator dimension (no 512/768/1024 multiple, not square, not 16:9-native). |
| Verdict | **Pre-generative provenance positively established**, not merely inferred: a named, real camera body whose native geometry matches the delivered geometry. | **Reasoned pass, documented as a reasoned call.** Camera metadata is unavailable, so the second half of the screen was run: the native geometry corresponds to a real 3:2 sensor crop, and the photographer asserts copyright in EXIF under a studio name. Backlit palm fronds show per-frond chromatic fringing and real sun-flare geometry through the crown. |

### Two corrections to `IMAGE_BRIEF_V2.md`, from this sweep

1. **"Pexels strips EXIF from everything it serves" is not quite right.** Both Pexels natives
   fetched here retained a **`Copyright`** tag (`© JaxonLabs`, `© Jordan Wollman`) plus
   resolution and orientation fields. What Pexels strips is the **camera make, model and
   exposure block**. The brief's conclusion still holds — the camera-metadata half of the AI
   screen cannot be run on Pexels — but agents should expect a copyright string and should not
   read its presence as a full EXIF record, nor its content as a property name.

2. **Unsplash gives a better provenance check than the timestamp trick: the photo page publishes
   the camera model.** The brief recommends decoding the `photo-<n>-` Unix prefix as a
   pre-generative check. That worked here (exact date match) but only proves *2024*, which no
   longer clears the generative window on its own. The **photo page** carried `Canon EOS 6D`,
   which the stripped file does not. **Fetch the photo page, not just the CDN file, whenever an
   Unsplash candidate reaches the shortlist** — it costs one WebFetch and upgrades a weak
   inference into a named camera body. It also returns the licence tier and the location string
   (which is how the "Phoenix, AZ" caveat in §8 was caught rather than shipped).

---

## 10. Compliance checklist

| Requirement | Status |
| --- | --- |
| Brief read in full before any fetch | Yes |
| ≥12 candidates opened with the Read tool | **15** |
| Every candidate downloaded and looked at | Yes — no candidate judged on metadata |
| 100% rule at native, **no query string** | Yes — both nominations and every high-zoom crop |
| 100% rule re-run on the **delivered** 1600x900 file (C3c) | Yes — both nominations |
| Reframe attempted before rejecting | Yes — succeeded on the alternate (§4), attempted and failed on item 4 |
| C1 source metadata recorded so it can be stripped | Yes (§6) |
| C6 vocabulary obeyed (`<dest> hotel` Pexels / `<dest>` alone Unsplash; no villa / condo / vacation rental / state name / interiors) | Yes |
| Zero budget — no Unsplash+, Getty, `premium_photo-`, no purchase proposed | Yes — 5 paywalled items excluded on sight, never fetched |
| No retouching | Yes — crop and Lanczos downsample only |
| 1600x900 rendered with PIL, scale factor stated | Yes — 0.3291x and 0.3089x |
| Upscales above 1.0x flagged | **None occurred** |
| Primary and alternate both visually verified | Yes |
| Visually distinct from CON-SED (Sedona) | Yes — saguaro/palm Sonoran and brown granite; the one red-sandstone candidate was rejected for exactly this |
| Repo files modified | **This report only** |

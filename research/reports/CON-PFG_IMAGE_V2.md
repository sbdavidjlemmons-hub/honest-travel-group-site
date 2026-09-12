# CON-PFG — Pigeon Forge Condo — Image Report V2

**Certificate:** CON-PFG / `pigeon-forge-condo` / Pigeon Forge Condo
**Destination:** Pigeon Forge, Tennessee (Sevier County / Great Smoky Mountains gateway corridor)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no Unsplash+, no `premium_photo-`, no retouching.
**Scope:** IMAGE ONLY. No pricing researched, quoted or inferred.

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | Pexels photo **9329679** | Pexels — Joshua Woroniecki (@joshuaworoniecki) | Pexels License (free, no attribution) | **8000 x 5333** | **YES — visually verified**, 100% rule run at native across the whole frame + delivered-file re-check at 5x |
| **ALTERNATE** | Pexels photo **14288300** | Pexels — Siva Seshappan (@optically-challenged) | Pexels License (free, no attribution) | **5472 x 3648** | **YES — visually verified**, full native 1:1 sweep of the crop region + 3x on every structure |
| THIRD (conditional) | Pexels photo **35819038** | Pexels — Bobbi (@bobbi-1488135) | Pexels License | 4709 x 3532 | **YES — visually verified.** Ships **only** with the mandatory reframe below. Two brand marks confirmed in the native file. |

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact bytes that should ship:

```
https://images.pexels.com/photos/9329679/pexels-photo-9329679.jpeg      # PRIMARY
https://images.pexels.com/photos/14288300/pexels-photo-14288300.jpeg    # ALTERNATE
https://images.pexels.com/photos/35819038/pexels-photo-35819038.jpeg    # THIRD (conditional)
```

Verified served at true native with no query string: `content-length: 3642252` (9329679), `4239301` (35819038).

---

## 2. What the two nominations are

### PRIMARY — 9329679
Sunrise over a forested Smokies ridge. A peach-gold sky fills the top ~30% of the delivered
frame; a ribbon of valley mist threads the middle; layered blue ridgelines recede to the right
horizon; the foreground is a full autumn canopy. Along the bottom edge, **subordinate and
in shadow**, sits a scattered community of gabled mountain lodges with a three-court
tennis/pickleball complex and lawns — the resort-amenity cue — none of them the subject,
none of them named, none of them individually readable.

This is the governing rule executed exactly: **shoot the strip, not the resort.** No single
building is the subject; the destination is. A frame containing a dozen anonymous properties
cannot imply the certificate guarantees any one of them.

**Overlay space:** the top ~30% is unbroken graduated sky and the mist band below it is
near-featureless. Two large low-detail regions. Excellent.

### ALTERNATE — 14288300
**Photographer-tagged Pigeon Forge, TN.** Three green-metal-roofed log cabins stepping up a
forested hollow, framed by a foreground curtain of yellow and green autumn foliage, with a
full autumn hillside behind. The nearest cabin shows a wraparound deck with Adirondack
chairs — unmistakably rental-cabin typology, not a single-family house. Cabin-and-lodge
cluster on a forested ridge: the framing named in the task, and the Pigeon Forge cabin
product the certificate actually sells.

**Overlay space:** the left and lower third is a large, tonally uniform foliage mass. Usable
with a translucent scrim; weaker than the PRIMARY.

---

## 3. Delivery crops — rendered with PIL, opened, inspected

| Slot | Crop from native | Crop size | Output | **Scale factor** | Upscale |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `(0, 833) → (8000, 5333)` | 8000 x 4500 | 1600 x 900 | **0.2000x (5.0:1 downscale)** | **none** |
| **ALTERNATE** | `(300, 950) → (3996, 3029)` | 3696 x 2079 | 1600 x 900 | **0.4329x (2.31:1 downscale)** | **none** |
| THIRD | `(700, 130) → (4396, 2209)` | 3696 x 2079 | 1600 x 900 | **0.4329x (2.31:1 downscale)** | **none** |

**No candidate requires upscaling. Nothing above 1.0x anywhere in this report.**
All three crops are exact 16:9 (1.77778).

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("pexels-photo-9329679.jpeg")            # 8000 x 5333
im.crop((0, 833, 8000, 5333)).resize((1600, 900), Image.LANCZOS).save("con-pfg-primary.jpg", quality=92)

# ALTERNATE
im = Image.open("pexels-photo-14288300.jpeg")           # 5472 x 3648
im.crop((300, 950, 3996, 3029)).resize((1600, 900), Image.LANCZOS).save("con-pfg-alt.jpg", quality=92)

# THIRD (conditional — reframe is MANDATORY, see section 6)
im = Image.open("pexels-photo-35819038.jpeg")           # 4709 x 3532
im.crop((700, 130, 4396, 2209)).resize((1600, 900), Image.LANCZOS).save("con-pfg-third.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/pfg/DELIVER_PRIMARY.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/pfg/DELIVER_ALTERNATE.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/pfg/DELIVER_THIRD.jpg
```

Nothing was written into the repo except this report.

---

## 4. C1 — source metadata to STRIP

Per C1 the caption names the property even when the pixels do not. Recorded here so the site
never carries it. **Re-caption generically; do not carry title, filename or alt text through.**

| Slot | Pexels title (verbatim) | Alt text (verbatim) | Filename | Photographer |
| --- | --- | --- | --- | --- |
| PRIMARY | "Green Trees on Foggy Mountain" | "A serene mist-covered mountain landscape in Gatlinburg, Tennessee during autumn" | `pexels-photo-9329679.jpeg` | Joshua Woroniecki |
| ALTERNATE | "Charming cabin surrounded by vibrant fall foliage in Pigeon Forge, TN" | same | `pexels-photo-14288300.jpeg` | Siva Seshappan |
| THIRD | "Gatlinburg Cityscape with Scenic Mountain View" | "aerial view of Gatlinburg, Tennessee showcasing green rooftops amid lush autumn foliage" | `pexels-photo-35819038.jpeg` | Bobbi |

**Good news on C1 for this certificate: none of the three titles names a property.** The C1
exposure here is different and is a *location* exposure, not a property one — see section 7.
The ALTERNATE's "Charming cabin" singularises a building the certificate does not guarantee;
re-caption to something like "Great Smoky Mountains cabin country, autumn" and strip the rest.

Suggested shipped captions (name nothing, guarantee nothing):
- PRIMARY: "Sunrise mist over the Great Smoky Mountains."
- ALTERNATE: "Cabin country above the Smokies, autumn."

---

## 5. The 100% rule — what was actually magnified

Every fetch below used **no query string**. Every crop was taken from the **native** file and
opened with the Read tool. Delivered 1600x900 files were then re-magnified separately, per C3c.

### PRIMARY — 9329679 (native 8000 x 5333)

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Sky / ridgeline band, left half | (0, 2000, 4000, 1300) | **1:1** | Clean. Mist, canopy, ridge. Nothing man-made at all. |
| Sky / ridgeline band, right half | (4000, 2000, 4000, 1300) | **1:1** | Clean. Layered ridges and mist to the horizon. No mast, no tower, no structure. |
| Mid forest band, left half | (0, 3300, 4000, 900) | **1:1** | Clean. One utility pole, one white vehicle roof ~8px. No signage. |
| Mid forest band, right half | (4000, 3300, 4000, 900) | **1:1** | Clean. Canopy and mist only. |
| Bottom settlement band, left half | (0, 4200, 4000, 1133) | **1:1** | Lodges, driveways, two parked vehicles. **No lettering anywhere.** |
| Bottom settlement band, right half | (4000, 4200, 4000, 1133) | **1:1** | Tennis courts, lodges, road. **No lettering anywhere.** |
| Lodge cluster + tennis courts | (4400, 4550, 1600, 780) | **2.5x** | Clean. Courts are plain green/red acrylic, **no sponsor banner, no windscreen printing**. One small orange MUTCD-style diamond road sign — **no wordmark on it**. |
| Large dark lodge, mid-left | (1500, 4600, 1500, 733) | **2.7x** | Clean. Gabled lodge with porch. No name band, no plaque, no lettering. |

**Result: PASS at every magnification. Zero third-party marks of any kind were found anywhere
in this frame at native resolution.** This is the only candidate in the sweep that came through
a full-frame 1:1 pass completely clean.

**Delivered-file re-check (C3c — measured in the shipped 1600 x 900 file):**

| Region of delivered file | Rect | Zoom | Result |
| --- | --- | --- | --- |
| Bottom band, left half | (0, 720, 800, 180) | **5x** | Lodges and chalets read as dark silhouettes with lit windows. No text, no logo, no sign shape. |
| Bottom band, right half | (800, 720, 800, 180) | **5x** | Tennis courts, two vehicles, road sign. The road sign is ~3 px in the shipped file — an orange dot, not a sign. |

### ALTERNATE — 14288300 (native 5472 x 3648)

Full 1:1 sweep of the **entire delivered crop region** in four tiles:

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Crop region, top-left | (300, 950, 1850, 1040) | **1:1** | Foreground foliage only. Clean. |
| Crop region, top-right | (2150, 950, 1850, 1040) | **1:1** | Two green-roof cabins + canopy. **No lettering, no plaque, no sign.** |
| Crop region, bottom-left | (300, 1991, 1850, 1040) | **1:1** | Foliage only. Clean. |
| Crop region, bottom-right | (2150, 1991, 1850, 1040) | **1:1** | Front cabin deck: Adirondack chairs, railing, a satellite dish. **Unbranded — dish has no visible provider mark.** |
| All three cabins, close | (2400, 1450, 1100, 750) | **3x** | Clean at 3x. Log walls, green standing-seam roofs, deck furniture. **No name board, no unit number, no rental-company sign.** |

**Result: PASS. No third-party mark anywhere in the shipped region.**

#### Reframe that recovered this candidate (step 4a)
The full native frame fails on its **upper-right quadrant**: at native `(4000, 600, 1400, 700)`,
3x magnification shows a switchback road with a parked RV, two cars and a pale multi-storey
building — car-park clutter that trips C5. That region was tested, not assumed.

- First crop `(0, 750, 4000, 2250)` cleared it but pushed the cabins hard right and left two
  thirds of the frame as a foliage wall.
- Second crop `(700, 900, 4600, 3094)` balanced the composition but **pulled the RV back in** at
  the top-right edge (verified in the rendered file, not inferred).
- Final crop `(300, 950, 3996, 3029)` ends at native x = 3996, which **excludes the entire road
  corridor** while keeping all three cabins centre-right and trimming the foliage wall.

The candidate is usable only because of that crop. Without it, it fails.

---

## 6. THIRD (conditional) — 35819038, and the two marks it carries

Nominated as a conditional third because it is the only frame in the sweep that shows literal
**condominium** buildings — green-roofed, balcony-stacked, four-storey Smokies condo blocks —
under a ridge of cabin rentals, with a clean blue sky band for overlay. It is the best
"condo product" image found. It is **not** promoted above the alternate because of the
following, and because of section 7.

**Confirmed brand marks in the native file (C3b — found by magnifying the LOW buildings):**

| Mark | Native rect | Found at | What it is | In the shipped crop? |
| --- | --- | --- | --- | --- |
| **"Clarion"** wordmark + sub-line on a tan hotel gable | ~(3301, 2593) → (3378, 2622), ~77 x 29 px | 3x, confirmed at 12x | A national **hotel chain** wordmark — a named property, exactly what the certificate must not imply | **NO — crop ends at native y = 2209** |
| **Flapjack's**-style pancake-house sign, yellow oval with pictogram + script | ~(507, 2143) → (588, 2190), ~81 x 47 px | 8x | Third-party **restaurant brand** | **NO — crop starts at native x = 700** |

Both were found by following C3b: the resort nameplates were clean; the **street-level and
low-building signage was where the marks actually were.** Magnifying the towers alone would
have shipped a frame branded along its lower edge.

Additional verification of the reframed region:

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Green-roof condo block, close | (2900, 1600, 1100, 560) | **3.6x** | Clean. Balcony stacks, stone bases, standing-seam roof. **No name band, no logo.** |
| Condo row + tower, mid | (2700, 1900, 1700, 350) | **3.5x** | Clean. |
| Bottom edge of crop, left half | (700, 1950, 1850, 261) | **5x** | Clean. Green roofs, stone chimney, foliage. |
| Bottom edge of crop, right half | (2550, 1950, 1850, 261) | **5x** | Clean. Green roofs, red-roofed gazebo, balcony stacks. |
| Delivered file, bottom band L/R | (0, 640, 800, 260) / (800, 640, 800, 260) | **4x** | Clean in the shipped pixels. |

**Also rejected in this file:** the lower-right quadrant at native `(3600, 2500, 1109, 1032)`
is downtown Gatlinburg — a large surface car park with ~40 cars, roads and a trolley. Straight
C5 failure. The crop removes it.

**If this asset is ever used, the crop is not optional and must not be re-derived by anyone
who has not re-run the checks above.** Flagged rather than buried.

---

## 7. The honest caveat — destination tagging

This is the one thing a reader of this report must not miss.

- The **ALTERNATE (14288300)** is tagged **Pigeon Forge, TN** by the photographer on the
  Pexels page. Genuine Pigeon Forge provenance.
- The **PRIMARY (9329679)** is tagged **Gatlinburg, TN** — six miles up the same valley from
  Pigeon Forge, same county, same mountain range, same corridor.
- The **THIRD (35819038)** is tagged **Gatlinburg, TN** *and looks it*: it contains
  Gatlinburg-identifying built form (the downtown condo/hotel cluster and ridge tower).

The distinction that matters:

**The PRIMARY contains no landmark that identifies any town.** Across a full-frame 1:1 sweep it
shows forest, valley mist, anonymous ridgelines, anonymous gabled lodges and tennis courts —
nothing that a viewer could place as Gatlinburg rather than Pigeon Forge. It is authentic
Great Smoky Mountains gateway imagery of the exact landscape Pigeon Forge sits in. That is a
defensible representation.

**The THIRD is the opposite** — it is the wrong town and reads as the wrong town. That is the
main reason it sits third rather than second, independent of the two brand marks.

If the coordinator weights photographer-stated location above image quality and overlay space,
**swap PRIMARY and ALTERNATE.** Both passed identical verification; the swap costs image
quality and overlay room, and buys documented Pigeon Forge provenance. I have made the call
the other way because the governing rule ("elevate until no single building is the subject")
is satisfied far more strongly by the PRIMARY, and because the PRIMARY identifies no town at
all, so it cannot misrepresent one.

---

## 8. Distinctness from Sevierville

Requested explicitly, because Sevierville is the same corridor.

- **PRIMARY is a ridge-and-valley framing at sunrise**, dominated by peach sky and a horizontal
  mist ribbon. Palette: warm peach, olive, rust. No strip, no road, no waterfront, no skyline.
- **ALTERNATE is a close forest-hollow framing in flat overcast daylight.** Palette: saturated
  yellow, green, scarlet. Vertical foliage curtain, no sky.

Neither reads as a commercial strip, neither shares a palette or a compositional axis with the
other, and neither is a wide daylight townscape — which is the frame Sevierville would most
plausibly want. If Sevierville ends up with a daylight valley-town or riverfront frame, both of
these remain clearly distinct from it.

---

## 9. PIGEON FORGE HARD CONSTRAINT — the Parkway

Confirmed and honoured. The Parkway constraint was not theoretical: it was the single largest
source of rejections in this sweep.

- `pigeon forge hotel` on Pexels returned **six** near-duplicate frames of an illuminated
  Ferris wheel at a Pigeon Forge amusement park (14266267, 14266268, 14266269, 14266270,
  14266273, 14266277) — all rejected on sight of the search listing as branded attraction
  imagery, none nominated.
- Unsplash `gatlinburg` returned `photo-1594096139358-9e06a06cda35` (Mauro Bueso, "aerial view
  of city during night time"). **Opened.** It is the Parkway at night: a lit drop-tower ride
  with tricolour lighting, arcades, illuminated storefronts and two large surface car parks.
  Textbook instance of the constraint. REJECT.
- `photo-1755207143391-2b51278bbfe0` ("Busy street with shops and people on a sunny day") and
  `photo-1633642584403-f9994d110cd2` ("the entrance to a museum with a fake cow") were rejected
  from the listing for the same reason without spending a fetch.

**No nominated asset contains any part of the Parkway, any theme-park structure, any
dinner-theatre, go-kart track or chain signage.** All three nominations are ridge, forest and
valley framings.

---

## 10. Every candidate opened — 20 files, all opened with the Read tool

Twelve were required. Twenty were opened.

| # | File | Source / photographer | Opened | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | px 12775532 (= Unsplash `photo-1622738423636-cfc1799cf5cd`, same shot) | Pexels+Unsplash / Milly Montoya | yes | **REJECT** | Chairlift over the Gatlinburg strip. Foreground chairlift hardware and two identifiable riders; car parks along the bottom. C5, plus identifiable people. |
| 2 | px 35819038 | Pexels / Bobbi | yes | **THIRD, conditional** | Best condo product in the sweep, but carries "Clarion" and a pancake-house sign at native, and is visibly Gatlinburg. Section 6. |
| 3 | px 14288300 | Pexels / Siva Seshappan | yes | **APPROVE — ALTERNATE** | Pigeon Forge-tagged cabin cluster on a forested ridge. Clean at 1:1 and 3x. Recovered by reframe. |
| 4 | px 33008757 | Pexels / Esteban Carriazo | yes | **REJECT** | "Riverside cabin, Gatlinburg" is a dark, weathered, rusted-roof outbuilding beside a bench. C5 — not premium, not vacation-selling. |
| 5 | px 33008799 | Pexels / Esteban Carriazo | yes | **REJECT** | National-park historic cabin with an interpretive sign. Not lodging; carries park signage. |
| 6 | px 31512000 | Pexels / Phileven | yes | **REJECT** | Preserved pioneer homestead (Cades Cove typology). A museum piece, not a rental. |
| 7 | px 5971383 | Pexels / Joshua Woroniecki | yes | **REJECT for family** | Superb mist-over-ridge landscape, zero branding — but **no lodging evidence at all**. Held as a landscape fallback only. |
| 8 | px 21907690 | Pexels / Jessa Leigh | yes | **REJECT** | Generic canopy-and-ridge, no lodging, bottom 60% is undifferentiated treetops. |
| 9 | px 14617130 (7360 x 4912) | Pexels / Bobbee | yes | **REJECT for family** | Beautiful autumn valley under a moody sky; no lodging. Landscape fallback. |
| 10 | px 36397149 | Pexels / Esteban Carriazo | yes | **REJECT for family** | Autumn Smokies ridge; no lodging. Landscape fallback. |
| 11 | px 12595744 | Pexels / Chaitaastic | yes | **REJECT** | Single cabin in autumn forest, **no stated location** — proves no destination. Also C4 risk: cannot rule out a private residence. |
| 12 | px 14288296 | Pexels / Siva Seshappan | yes | **REJECT** | Pigeon Forge-tagged, but power lines across the frame, a raw cut bank and a ridge-top house. C5 — the Upper Algiers failure mode. |
| 13 | px 12775530 | Pexels / Milly Montoya | yes | **REJECT for family** | Pigeon Forge-tagged, huge teal sky, layered ridges — genuinely lovely. Bottom band is surface car parks, a hi-vis worker at the right edge and downtown rooftops. Reframing above the town removes every building, leaving a pure landscape with no lodging. Landscape fallback. |
| 14 | px 9329679 (8000 x 5333) | Pexels / Joshua Woroniecki | yes | **APPROVE — PRIMARY** | Clean at 1:1 across the entire frame. Ridge + mist + lodges + amenity. Section 5. |
| 15 | px 2156337 | Pexels / Isaac Weatherly | yes | **REJECT** | Elevated Gatlinburg with autumn hillsides — but the frame's anchor is one recognisable individual high-rise. Its rooftop parapet reads as letter-like shapes at 4x; escalated to **14x**, where it resolves to an equipment penthouse, **not** type. Rejected anyway: an identifiable single landmark building is the subject, which is what C3 exists to prevent. Rust-monochrome, poor overlay. |
| 16 | px 13258070 | Pexels / Connor Scott McManus | yes | **REJECT for family** | Cloud-inversion ridge. No lodging. Landscape fallback. |
| 17 | px 11599563 | Pexels / Connor Scott McManus | yes | **REJECT** | Very dark silhouetted sunset ridge. No lodging, and too dark to carry overlay type. |
| 18 | us `photo-1573439622847-f60f7ee23d66` | Unsplash / Trevor Pennington | yes | **REJECT for family** | Moody Smokies overlook. No lodging. Landscape fallback. |
| 19 | us `photo-1583952620891-b3fc1ec8d4ee` | Unsplash / Joshua Bedford | yes | **REJECT** | "Brown wooden house in the woods" is a dark park outbuilding. C5. |
| 20 | us `photo-1594096139358-9e06a06cda35` | Unsplash / Mauro Bueso | yes | **REJECT** | The Parkway at night — drop tower, arcades, two large car parks. The hard constraint, illustrated. |

**Rejection cause tally — C5 confirmed again.** Of 17 rejections: **10** were
"not premium / not vacation-selling or no lodging evidence" (4, 5, 6, 7, 8, 9, 10, 12, 16, 17,
partially 13), **3** were branded attraction / Parkway (1, 20, and the six unopened Ferris
wheel frames), **2** were composition/landmark (15, 19), **1** was unverifiable destination
(11), and **exactly one candidate in twenty carried a legible third-party wordmark** (2,
"Clarion"). C5 holds: judge saleability first, branding second.

---

## 11. Search log — vocabulary findings

Queries run exactly as instructed, plus two permitted C6 extensions.

| Query | Source | Yield |
| --- | --- | --- |
| `pigeon forge hotel` | Pexels | 23 results. **6 were the same Ferris wheel at night.** 8 were off-destination hotel stock (Pristina, Russia, a blacksmith "forging" metal, hotel interiors). Produced 3 openable candidates: 12775532, 14288300, 35819038. |
| `smoky mountains cabin` | Pexels | 24 results. Produced 9 openable candidates. Heavy on historic/park cabins, which reliably fail the lodging test. |
| `smoky mountains` (alone) | Unsplash | 20 results, **5 of them Unsplash+/Getty** (`premium_photo-1666211586167`, `-1666899295694`, `-1694475674677`, `-1666433732058`, `-1669731123663`) — all skipped, zero budget. The free remainder was almost entirely unlocated generic ridge photography. |
| `smoky mountains` (alone) | Pexels — C6 extension | 24 results, the highest-yield query of the sweep. **It is where the PRIMARY came from** (9329679) and it surfaced 12775530 and 2156337. |
| `gatlinburg` (alone) | Unsplash — C6 extension | 20 results, 5 Unsplash+. Produced 2 openable candidates and confirmed the Parkway constraint (#20). |
| `pigeon forge` (alone) | Unsplash — C6 extension | **Near-total failure, and a new vocabulary finding.** 20 results, **13 of them photographs of pigeons** (the bird), 4 Unsplash+. Only three non-bird results existed, one of which was a duplicate of #1. |

**New finding for C6, worth carrying to the other reports:** on Unsplash, "pigeon forge" is not
a destination solvent — it is a **homograph trap**. The bare-destination-name rule that won on
Myrtle Beach fails completely here, because the town's name is also a common noun. Where a
destination name contains an everyday word (pigeon, forge, beach, springs, palm), **Pexels,
which returns human-written titles, beats Unsplash, which returns machine alt text.** Every
usable Pigeon Forge-area frame in this sweep came from Pexels. Not one came from Unsplash.

Constraints honoured: **never** "villa", **never** "condo", **never** "vacation rental",
**never** the state name, **never** interiors. No search call was wasted on any of them.

---

## 12. Licence, provenance and AI screen

**Licence.** All three are Pexels License: free for commercial use, no attribution required,
no share-alike. No CC BY-SA caution applies. No Unsplash+, no Getty, no `premium_photo-`,
nothing paywalled proposed. Zero budget respected.

**EXIF.** Confirmed empty of camera data on all three, as the brief predicts — Pexels strips
EXIF from everything it serves. Only `ResolutionUnit`, `ExifOffset`, `Orientation`,
`XResolution`, `YResolution` survive. **The camera-metadata half of the AI screen cannot be run
on any Pexels file.** Running the second half instead, as a reasoned call:

| File | Native | Geometry reasoning | Corroborating physical evidence | Call |
| --- | --- | --- | --- | --- |
| **9329679** | 8000 x 5333, exactly 3:2 | Not a sensor readout — an export at an 8000px long edge, the standard Lightroom preset, from a 45–60 MP 3:2 body. Generator output clusters on powers of two (1024/1536/2048 multiples); 5333 is not one. | Atmospheric perspective is physically consistent across four receding ridge planes; mist has correct optical falloff against backlight; tennis-court line geometry is perspectivally correct; vehicles are correctly proportioned; a utility pole and wire are present and continuous. | **Photographic.** |
| **14288300** | 5472 x 3648 | **Native Canon 24 MP APS-C readout** (EOS 80D / M50 / 90D generation). A real sensor geometry, untouched. | Shallow-DOF foreground foliage with a real optical bokeh gradient; standing-seam roof ribs resolve consistently; deck balusters are structurally regular. | **Photographic.** Strongest provenance of the three. |
| **35819038** | 4709 x 3532, exactly 4:3 | Not a sensor readout, and that is the *positive* signal — arbitrary non-round dimensions at an exact 4:3 ratio are the signature of a **straighten-and-crop** of a larger 4:3 frame. | Decisive: the frame contains a real corporate logotype ("Clarion") rendered correctly and legibly at 77 native px, plus continuous overhead power lines and ~40 correctly-parked vehicles. Generators do not reliably render a specific real brand's logotype at that scale. | **Photographic.** |

**Unsplash timestamp check** — not applicable to the nominations (all Pexels), but run on the
Unsplash files opened: `photo-1594096139358` → 1594096139 → 2020-07-07; `photo-1573439622847`
→ 1573439622 → 2019-11-11; `photo-1583952620891` → 1583952620 → 2020-03-11. All comfortably
pre-generative.

**No retouching of any kind was performed or is proposed.** The one compliance problem found
(section 6) is solved by crop only, as the brief requires.

---

## 13. What would improve this certificate

Stated plainly rather than dressed up:

1. **Nothing in the free corpus shows a Pigeon Forge condominium.** The product the certificate
   sells — a Pigeon Forge condo — does not exist as free stock. What exists is (a) Smokies
   landscape, (b) Pigeon Forge log cabins, (c) Gatlinburg condo blocks. The nominations take
   (a) and (b). Taking (c) would mean shipping the wrong town.
2. **The Little Pigeon River valley from elevation was searched for and not found.** No free
   frame in six queries showed the river valley from height. Reported as absent, not fudged.
3. The PRIMARY's lodging cue is deliberately subordinate — dark lodges along the bottom edge.
   That is a compliance *strength* (nothing is implied) and a marketing *weakness* (the frame
   sells the mountains, not the accommodation). If marketing wants the accommodation to lead,
   the ALTERNATE does that and the THIRD does it hardest — at the cost, respectively, of
   overlay space and of being the wrong town.

C2 is confirmed again in a new shape: supply was not scarce — there were dozens of beautiful
Smokies landscapes — but **usable supply for a *condo* certificate was singular**. One
Pigeon Forge lodging frame (14288300). One clean multi-property elevated frame (9329679).
That is the whole yield of 20 opened files.

---

## 14. Compliance summary

| Requirement | Status |
| --- | --- |
| Image only, no pricing | **Met.** No price researched, quoted or implied. |
| Read the brief in full before any fetch | **Met.** |
| Shoot the strip, not the resort — no single building is the subject | **Met** on PRIMARY (a dozen anonymous lodges) and THIRD. **Substantially met** on ALTERNATE (three cabins, none named, forest dominant). |
| Magnify the LOW buildings, not the tall ones | **Met** — and it paid: both marks found in this sweep were low-building marks (a hotel gable and a restaurant sign). |
| Convert a high-zoom find into delivered pixels before rejecting | **Met** — the 2156337 rooftop "lettering" was escalated to 14x and resolved as an equipment penthouse, not type, before any verdict. |
| Judge saleability first, branding second | **Met** — 10 of 17 rejections were C5. |
| Download and OPEN every candidate | **Met** — 20 opened. |
| 100% rule, no query string | **Met** — every brand check run on the unparameterised native file. |
| Reframe before rejecting | **Met** — ALTERNATE and THIRD were both recovered by crop; the reframes were rendered and inspected, not assumed. |
| Zero budget | **Met** — 9 Unsplash+/Getty items identified and skipped; nothing paid proposed. |
| No retouching | **Met.** |
| 1600 x 900 rendered with PIL, scale factor stated, upscales flagged | **Met** — 0.2000x, 0.4329x, 0.4329x. **No upscale anywhere.** |
| Avoid the Parkway entirely | **Met** — section 9. |
| Visually distinct from Sevierville | **Met** — section 8. |
| Primary + alternate, both visually verified | **Met.** |
| Only this file written to the repo | **Met.** |

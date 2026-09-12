# CON-BRE — Breckenridge Condo — Image Report V2

**Certificate:** CON-BRE / `breckenridge-condo` / Breckenridge Condo
**Destination:** Breckenridge, Colorado (Summit County / Tenmile Range)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no Unsplash+ / `premium_photo-`, no retouching.
**Repo files modified:** this report only.

---

## 1. Verdict

| Slot | Asset | Source / creator | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | Pexels photo `11300677` | Pexels — Trae Collins | Pexels License (free, no attribution required) | 4000 x 2250 | **YES — visually verified**, 100% rule run at native + 3x/4x/10x/12x/16x, plus a 14x check in the delivered file |
| **ALTERNATE** | Pexels photo `7292390` | Pexels — Chris F | Pexels License | 5611 x 3400 | **YES — visually verified**, 100% rule run at native + 2x/3x, plus a 3x sweep of the delivered file |
| **RESERVE** | Pexels photo `11300707` | Pexels — Trae Collins | Pexels License | 4000 x 2250 | **YES — visually verified**, 100% rule run at native + 4x |

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact
bytes that should ship:

```
https://images.pexels.com/photos/11300677/pexels-photo-11300677.jpeg   # PRIMARY
https://images.pexels.com/photos/7292390/pexels-photo-7292390.jpeg     # ALTERNATE
https://images.pexels.com/photos/11300707/pexels-photo-11300707.jpeg   # RESERVE
```

### C1 — source titles, recorded so they can be STRIPPED

The certificate names no property and assigns the unit at confirmation. **None of the strings below
may reach the site** — not as filename, not as alt text, not as caption, not in EXIF.

| Asset | Verbatim Pexels title | Verbatim Pexels description |
| --- | --- | --- |
| PRIMARY `11300677` | "Buildings and Trees Near Snow Covered Mountains" | "A stunning aerial view of Breckenridge, Colorado, showcasing snow-covered mountains and a winter landscape." |
| ALTERNATE `7292390` | "Scenic winter view of homes against snow-capped mountains and blue sky." | — |
| RESERVE `11300707` | "Aerial View of Snow Covered Road Near Trees and Mountains" | "A breathtaking aerial view of a snow-covered mountain road winding through evergreen forests in winter." |

None of these names a property, so C1 exposure here is low — but the alternate's title says
**"homes"**, which would be an actively wrong caption for a condominium certificate. Re-caption all
three generically, e.g. *"Slopeside condominium buildings beneath the Tenmile Range, Breckenridge."*

---

## 2. Delivery crops — rendered with PIL and inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale? |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 0) → (4000, 2250)` (full frame; already exactly 16:9) | 4000 x 2250 | 1600 x 900 | **0.4000x (downscale)** | **none** |
| ALTERNATE | `(0, 0) → (5611, 3156)` (bottom 244 px trimmed to reach 16:9) | 5611 x 3156 | 1600 x 900 | **0.2852x (downscale)** | **none** |
| RESERVE | `(0, 0) → (4000, 2250)` (full frame; already exactly 16:9) | 4000 x 2250 | 1600 x 900 | **0.4000x (downscale)** | **none** |

**No upscale anywhere. Every delivered file is a downscale of native pixels.** Nothing is above 1.0x.

Reproduce exactly:

```python
from PIL import Image

im = Image.open("pexels-photo-11300677.jpeg")          # PRIMARY
im.crop((0, 0, 4000, 2250)).resize((1600, 900), Image.LANCZOS).save("con-bre-primary.jpg", quality=92)

im = Image.open("pexels-photo-7292390.jpeg")           # ALTERNATE
im.crop((0, 0, 5611, 3156)).resize((1600, 900), Image.LANCZOS).save("con-bre-alt.jpg", quality=92)

im = Image.open("pexels-photo-11300707.jpeg")          # RESERVE
im.crop((0, 0, 4000, 2250)).resize((1600, 900), Image.LANCZOS).save("con-bre-reserve.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conbre/DELIVER_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conbre/DELIVER_alternate.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conbre/DELIVER_reserve.jpg
```

### What the PRIMARY frame shows
A drone frame looking west across Breckenridge from above the valley floor. Top third: the
**Tenmile Range with the Peak 8 / Peak 9 ski trail network** carved across it under a cloud bank —
unmistakably this destination and nothing else. Middle: a **continuous strip of lodge and
condominium buildings** running left to right across the base area — a red-brown mid-rise complex,
then perhaps thirty further roofs of every shape and colour receding to the right edge. Bottom:
dark conifer forest with more condo clusters embedded in it, and a groomed run with skiers.

This is the governing rule executed literally: **no single building is the subject.** There are
dozens of properties in frame and no one of them can be read as the thing being sold — which is
exactly why a certificate that assigns the unit at confirmation cannot be accused of implying one.

**Overlay space:** the honest assessment is *adequate, not generous*. The top ~10% is cloud and sky;
the large usable region is the **dark conifer band across the centre-left** (roughly x 0–900,
y 400–700 in the delivered file), which is low-detail and will carry white type well. If the design
needs a big clean sky, the RESERVE is the better frame for that specific job.

### What the ALTERNATE frame shows
A row of **condominium gables — four to six distinct buildings**, brown stucco with shingle roofs
and a green standing-seam roof at the right — sitting under a huge sunlit snow peak of the Tenmile
Range, deep blue sky, sculpted cloud. Spruce tops break the roofline. This is the second framing
the Breckenridge caution named: *the Tenmile Range behind a roofline*.

It is the most **saleable** frame in the whole sweep — the light is superb and it reads instantly as
"mountain condo holiday". **Overlay space: excellent** — the upper-left third is clean gradient sky.

### What the RESERVE frame shows
A wide valley aerial: forested slopes, a scenic mountain road curving through, condo and townhome
clusters on the right, a long condominium block at the lower-right, distant snow peaks, and a very
large bright sky. **Overlay space: the best of the three** — the top ~35% is open sky and cloud.

---

## 3. The 100% rule — what was actually magnified

Every file was fetched **with no query string at all**. Pexels served true native in every case
(2.0–3.2 MB). All crops were taken from those native files, written to disk, and opened with the
Read tool. No judgement below was made on a downscaled copy.

### PRIMARY `11300677` (4000 x 2250)

Per **C3b**, the low/near buildings were magnified first; the tall mid-ground complex second.

| Region checked | Native rect (x, y, w, h) | Zoom | Result |
| --- | --- | --- | --- |
| Nearest lodges, bottom centre | (900, 1790, 1500, 460) | 3x | Clean. Gables, balcony stacks, garage doors, a parked car. No nameplate, no lettering, no sign-shaped object. |
| Nearest condo cluster, bottom right | (2400, 1700, 1600, 550) | 3x | Clean. Stepped condo blocks, car park, lift queue on the slope above. One suspect red mark escalated below. |
| Mid-ground lodge complex (the largest buildings in frame) | (1600, 1020, 1300, 400) | 4x | No wordmark. Two suspect marks escalated below. |
| Right-side condo row | (2850, 1150, 1150, 400) | 4x | Clean across ~30 buildings. No facade lettering anywhere. |
| Suspect red mark at lift base | (3330, 1660, 290, 120) | **10x** | **False alarm.** Resolves as a **line of skiers in a lift maze** plus one magenta jacket. No banner, no type. |
| Ski-base / lift maze strip | (3100, 1620, 900, 200) | 5x | Clean. Lift towers, cable, queue. No trail-map board, no resort mark. |
| Mid-ground complex lower facade | (1740, 1210, 520, 120) | **12x** | One green-and-white **sign-shaped object** found. See disclosure below. No letterforms resolve. |
| Low-left buildings behind trees | (1600, 1250, 220, 90) | **16x** | Unresolvable at 16x — pine canopy and a red roof edge. Nothing readable. |
| Bottom-left corner condos | (0, 1850, 950, 400) | 4x | Clean. Balcony rails, snow-loaded roofs, a ski trail. No signage. |
| Far-right edge, densest building area | (3450, 1050, 550, 550) | 4x | Clean across dozens of roofs. **This is the "many properties" evidence.** |

**Result: PASS.** No legible third-party mark, no resort nameplate, no retail signage, no vehicle
livery anywhere in the frame at any magnification tested.

#### Disclosure — the one high-zoom find, converted to delivered pixels (C3c)

At **12x** on the native file, a small **green-and-white rectangle** sits on the red pier of the
mid-ground complex's glazed conference wing, at native ≈ (2044, 1287). Measured size: **≈18 x 6
native px.** It is shaped like a signboard.

Per **C3c** this was converted into delivered pixels before any rejection was considered.
In the shipped 1600 x 900 file it lands at ≈ **(818, 515)** and measures **≈7 x 2.4 px**. That
region of the *delivered* file was re-cropped and magnified **14x**: it renders as an
indistinct green smear on a red column — **no letterforms, no logo shape, no colour identity,
and at 1:1 it is not perceptible as a sign at all.**

This is the Myrtle Beach SkyWheel lesson applied in the other direction: the 100% rule catches
false positives from downscaled looks *and* false negatives from over-magnified ones. **Measured in
the shipped file, this is a non-issue.** Not a defect; disclosed for the record.

### ALTERNATE `7292390` (5611 x 3400)

Buildings are foreground here, so facades are the whole risk. The building band was swept
end to end with no gaps.

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Left facade block | (0, 1800, 1900, 1600) | 2x | Clean. Stucco, timber brackets, shingle, sash windows. **No nameplate, no unit number, no address plate, no plaque.** |
| Gap between left and centre sweeps | (1750, 1900, 700, 1256) | 3x | Clean. Roof, window, spruce. Nothing readable. |
| Centre facade block | (2200, 1900, 1900, 1500) | 2x | Clean. Gable, entry recess, decorative timber X-brace over the door — **decoration, not lettering.** |
| Right roofs + orange building edge | (4000, 2500, 1611, 900) | 3x | Clean. Green standing-seam roof, shingle, stucco. No signage. |
| **Delivered file**, full bottom third (where every building sits) | delivered (0, 600, 1600, 300) | 3x | **Clean.** Final confirmation in shipped pixels. |

**Result: PASS. Zero legible marks of any kind — this frame is cleaner than the primary**, which had
one sub-perceptual find. No pool signage, no balcony banners, no vehicles, no street furniture.

### RESERVE `11300707` (4000 x 2250)

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Lower-right condominium block (largest building in frame) | (2900, 1600, 1100, 650) | 4x | Clean. Long balcony stacks, snow roofs, parked vans. No wordmark. |
| Mid-ground townhome / condo cluster | (2150, 1450, 1100, 450) | 4x | Clean. Multiple buildings, car park, roadside marker post ≈5 native px (≈2 px delivered, sub-perceptual). |

**Result: PASS.**

---

## 4. Provenance / AI screen

**Pexels strips EXIF from everything it serves** — confirmed directly here. `Image.getexif()` on both
native files returns **5 tags only**: `ResolutionUnit`, `ExifOffset`, `Orientation`, `XResolution`,
`YResolution`. **No camera make, no model, no exposure data.** As the brief states, the
camera-metadata half of the AI screen cannot be run on any Pexels file. The geometry half was run
instead, as a reasoned call — not an unexamined pass:

- **`11300677` and `11300707`: 4000 x 2250.** This is the **native 16:9 stills mode of a DJI
  consumer drone** (the same sensors that shoot 4000 x 3000 in 4:3). Both frames came from the same
  photographer and are **consecutive-range upload IDs from one flight** — 11300677 and 11300707 are
  the same aircraft, same light, same day, looking in two directions over the same valley. A
  generator does not produce a coherent multi-frame aerial survey of a real, checkable town where
  the ski-trail network matches the actual Peak 8 / Peak 9 layout. Both also carry a Pexels
  **location stamp of "Breckenridge, United States."**
- **`7292390`: 5611 x 3400.** Deliberately **irregular** — not a power of two, not a sensor-native
  size, not any standard generator output. It is a **hand-trimmed crop from a larger frame**
  (consistent with a ~6000 x 4000 full-frame original). Irregular, non-round geometry of this kind
  is positive evidence of human post-processing. The same photographer's adjacent upload `7292400`
  is 5999 x 3594 — likewise irregular, likewise hand-cropped, same session.

Neither photo page is flagged AI-generated by Pexels. **Conclusion: real photography, reasoned on
geometry and cross-frame coherence because the metadata path is unavailable.**

**Licence:** all three are **Pexels License** ("Free to use") — no attribution obligation, no
share-alike, commercial use permitted, modification permitted. This is the cleanest licence tier in
the brief's preference list. **No CC BY-SA caution applies.**

---

## 5. Full candidate ledger — 18 candidates downloaded and opened, plus 2 reframe renders

Every row below was **downloaded at native with no query string and opened with the Read tool.**
Nothing in this table was judged from metadata.

| # | Candidate | Source / query | On sight | Verdict |
| --- | --- | --- | --- | --- |
| 1 | `11300677` Trae Collins | Pexels `breckenridge hotel` | Elevated aerial; condo strip below the ski runs; Tenmile Range behind; no single building the subject | **APPROVE — PRIMARY** |
| 2 | `7292390` Chris F | Pexels `breckenridge hotel` p2 | Condo gable row under a sunlit snow peak; superb light; zero marks | **APPROVE — ALTERNATE** |
| 3 | `11300707` Trae Collins | Pexels `breckenridge hotel` | Wide valley aerial; condo clusters; big sky | **APPROVE — RESERVE** |
| 4 | `30161250` Quang Vuong | Pexels `breckenridge hotel` | Foreground is a **corrugated industrial roof with vent stacks and overhead wires**; nice hillside above it | REJECT — **C5 not premium** |
| 5 | `30161232` Quang Vuong | Pexels `breckenridge hotel` | Bottom half is a **warehouse yard: shuttle-van fleet with door lettering, shipping container, parked cars, power poles** | REJECT — **C5 + C3b retail/vehicle branding** |
| 6 | `7292400` Chris F | Pexels `breckenridge hotel` | One large lodge **is** the subject; red signage at the road | REJECT — **C3 single-building** |
| 7 | `34160776` PoopfishSocks | Pexels `breckenridge hotel` | Forest overlook; **no lodging at all**; orange gravel/dirt foreground | REJECT — wrong subject + **C5** |
| 8 | `35158130` Lindsey Mateo | Pexels `breckenridge hotel` | **"Meeting Place" sign legible**; lift terminal with wayfinding signage; empty summer lawn | REJECT — **C7 signage** |
| 9 | `11616144` Chris F | Pexels `breckenridge hotel` p2 | Beautiful light but one lodge **is** the subject; red sign bottom-left | REJECT — **C3 single-building** |
| 10 | `11616146` Chris F | Pexels `breckenridge hotel` p2 | Road down the centre; **speed-limit "20" sign and directional posts** at bottom; huge empty sky | REJECT — **C5 + C7** |
| 11 | `31752351` Chris F | Pexels `breckenridge hotel` p2 | Aerial; top half lovely, bottom half is a **4-lane highway with cars, flat-roof retail and car parks** | REJECT after reframe — see §6 |
| 12 | `30161241` Quang Vuong | Pexels `breckenridge hotel` p2 | **"Fraser Ave" / "Railroad Ave" street signs — this is Fraser, Colorado, not Breckenridge.** Also "ROAD WORK AHEAD" sign, power lines, parked cars | REJECT — **wrong destination** (an "every amenity word is a destination solvent" miss, in reverse: the *query* was right, the *result* was not) |
| 13 | `photo-1547066325` Kevin Bree | Unsplash `breckenridge` | Superb drone frame, but **one resort complex is unambiguously the subject**, plus a car park mid-frame | REJECT after reframe — see §6 |
| 14 | `photo-1713410580243` M. Kettelkamp | Unsplash `breckenridge` | Town from elevation, but flat hazy light, **two sign posts and a board in the foreground**, snow car-park foreground | REJECT — **C5 not premium** |
| 15 | `photo-1705104708451` Nick Rickert | Unsplash `breckenridge` | **"HIGH FIVE" slope banners, the resort "B" mark repeated, "SLOW" banners, lift terminal and shop signage** | REJECT — **C7, multiple resort marks** |
| 16 | `photo-1698788261518` EcoNaturalist.com | Unsplash `breckenridge` | **Six-plus legible brands: "TOWNE SQUARE MALL", "RAITMAN ART GALLERIES" x3, "niggles ice cream", a mountain-outfitter sign** | REJECT — **exactly the Main Street hazard the brief warned about** |
| 17 | `photo-1698788260447` EcoNaturalist.com | Unsplash `breckenridge` | Illuminated red **"C" business logo**, plaque signage, snowy street; not lodging | REJECT — **C7 + wrong subject** |
| 18 | `photo-1612839630428` Ethan Walsweer | Unsplash `breckenridge` | Chairlift and skiers against sky; **no lodging in frame** | REJECT — wrong subject for the condo family |

### Triaged out without download — stated as triage, NOT verification

- **9 Unsplash results contained no building content at all** by their own alt text (helicopter
  mountain views, pine trees on snow, a grass field, tree bark, a snowfield fence):
  `photo-1684187083402`, `photo-1613488243084`, `photo-1610733254972`, `photo-1610566187316`,
  `photo-1526414469227`, `photo-1589853427337`, `photo-1610861493595`, `photo-1700251226478`,
  `photo-1698323208807`. These fail the condo subject rule on their face. **They were not opened
  and are recorded as NOT VISUALLY VERIFIED.**
- **5 Unsplash results are Unsplash+ / paywalled** and were never fetched, per the zero-budget
  standing constraint: `premium_photo-1666116634482` (Hans), `premium_photo-1689197383153`
  (Andres Molina), `premium_photo-1669842336815` (Annie Spratt), `premium_photo-1711984565912`
  (Gabrielle Maurer), `premium_photo-1700315132665` (Polina Kuzovkova). **None of them was needed** —
  the free tier resolved this certificate, so there is no purchasable-answer gap to report.
- Pexels results that were fashion portraits, wildlife, flowers, a camper van, waterfalls, a lake,
  or plainly the **wrong country/region** (`14036612` Lake Louise, Canada; `5764228` Waterton,
  Canada) were triaged on title. Not opened, not verified.

---

## 6. Reframes attempted before rejecting (step 4a)

**Both deferred rejections were reframed and re-tested before the verdict was written.** Both
renders were produced with PIL and opened.

**`31752351` — reframe to `(0, 0, 4032, 2268)`, scale 0.3968x.**
The reframe genuinely *improves* the frame: the Tenmile Range, a deep blue sky with cumulus, and
the town nestled in conifer now dominate, and the highway shrinks to a thin line. **But it does not
clear the problem.** The bottom quarter still carries flat-roofed retail blocks, several car parks
and a divided highway with visible traffic — and by **C3b** those low retail roofs are precisely
where legible signage lives. It is a *saleable-ish* frame, not a premium one. Recovered but not
nominated; available if the coordinator wants a fourth option and is willing to fund the
magnification sweep of that retail strip.

**`photo-1547066325` — reframe to `(700, 0, 3260, 1440)`, scale 0.6250x.**
Cropping above the resort complex's roofline is the only way to stop that one building being the
subject. It works — and in working it **deletes the lodging content entirely**: what remains is a
ski-mountain landscape with a sliver of village at the bottom-left corner, which no longer serves a
*condo* certificate. This is the brief's own warning that reframing fails when the mark (here, the
single-subject building) is central. Tested, not assumed. **Reframe rejected.**

---

## 7. How the brief's rules performed on this destination

- **C3 "shoot the strip, not the resort" held at 100% again — 18 for 18.** Every elevated,
  many-building frame passed (`11300677`, `11300707`); every single-building frame failed
  (`7292400`, `11616144`, `photo-1547066325`, `photo-1705104708451`). The rule's predictive record
  is now unbroken across three probes.
- **C3b was decisive and would have been missed by an agent magnifying the towers.** The two
  worst-branded candidates in the sweep were **street-level**: a Main Street arcade carrying six
  wordmarks at once, and a warehouse yard whose **shuttle vans** carried door lettering. Neither
  frame had a single resort nameplate in it. Resort nameplates fired **zero times in 18** here.
- **C5 was again the number-one cause of rejection — 7 of 15 rejections** (`30161250`, `30161232`,
  `34160776`, `11616146`, `31752351`, `photo-1713410580243`, and the car-park content in
  `photo-1547066325`): industrial roofs, warehouse yards, gravel, highways, car parks, flat light.
  Branding proper caused 5. **Judging saleability first was the correct order on this destination.**
- **C6 vocabulary:** the task's prescribed pairing was right and its warnings were load-bearing.
  `breckenridge hotel` on Pexels produced **all three approvals** — and, as in Sedona, the
  human-written Pexels titles and location stamps are what made destination attribution possible at
  all. Bare `breckenridge` on Unsplash produced **zero approvals**: its 20 results are 9 pure
  landscapes, 5 paywalled, 4 branded street scenes, 1 chairlift and 1 single-subject resort.
  **Unsplash page 2 returned byte-identical results to page 1 — the source is exhausted at 20.**
- **C2 revisited — supply is scarce but NOT singular here.** Sedona had exactly one usable frame.
  Breckenridge yielded **three**, all from Pexels, all from two photographers. The pattern that
  predicts supply is not town size but **whether drone photographers have worked the valley**: one
  drone operator's single flight (Trae Collins) supplied two of the three approvals outright.
- **The Breckenridge caution was accurate on all three counts.** Main Street *is* a wall of
  storefront signage (candidate 16 carried six brands). Lift towers and base areas *do* carry resort
  marks (candidates 15 and 8). And the three framings the caution named — **condo clusters below the
  ski runs seen from elevation** (PRIMARY), **the Tenmile Range behind a roofline** (ALTERNATE), and
  **a wide valley view** (RESERVE) — are exactly the three that produced the three approvals. One
  caution, three targets, three hits.
- **Snow was correct and on-season**, as the task stated. All three approvals are winter frames. This
  is the opposite of the Sedona/Myrtle finding where snow was a rejection cause — worth recording
  for the remaining mountain certificates in the family.

---

## 8. Honest caveats

1. **Destination attribution is strong for the PRIMARY and RESERVE, and *inferred* for the
   ALTERNATE.** `11300677` carries a Pexels description naming "Breckenridge, Colorado" and
   `11300707` carries a Pexels location stamp of "Breckenridge, United States" — both are
   photographer-asserted. `7292390` is tagged only **"Colorado"** by its photographer. Its
   Breckenridge attribution rests on three converging signals — it surfaced in the
   `breckenridge hotel` query; it is an adjacent upload to `7292400`, a frame from the same session
   that is unambiguously the Breckenridge Peak 8 base; and the peak profile and condo architecture
   match the Breckenridge valley. That is a **reasoned call, not a stated fact.** If a
   destination-asserted alternate is required, **swap the ALTERNATE and the RESERVE** — the reserve
   is location-stamped and equally clean, at the cost of flatter light.
2. **C4 (identifiable private residences) — examined, not waved through.** The ALTERNATE's source
   title says "homes". The pixels say otherwise: three-plus storeys, repeated identical gable units,
   continuous shared stucco elevations and multiple entries — **multi-unit condominium/townhome
   buildings, not single-family houses.** They carry no address, no house number, no name plate and
   no distinguishing feature, so nothing in frame identifies anyone's residence. C4 is satisfied.
   The misleading word is in the *caption*, which C1 requires be stripped regardless.
3. **The PRIMARY's overlay space is adequate, not generous** (see §2). If the hero design needs a
   large clean sky, the RESERVE is the better frame for that job and is already rendered.
4. **The PRIMARY's one sub-perceptual find is disclosed in full** in §3 rather than quietly passed.
   It is ≈7 x 2.4 px in the shipped file and carries no letterforms at 14x.
5. **Pexels EXIF is stripped**, so the AI screen rests on pixel geometry and cross-frame coherence.
   That reasoning is set out explicitly in §4 and should be read as a judgement, not a certificate.

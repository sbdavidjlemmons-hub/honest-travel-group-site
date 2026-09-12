# CON-ORL — Orlando Condo — Image Report V2

**Certificate:** CON-ORL / `orlando-condo` / Orlando Condo
**Destination:** Orlando / Kissimmee, Florida
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no Unsplash+, no `premium_photo-`, no retouching.
**Candidates downloaded and opened with the Read tool:** **31** (target was 12)

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1609184889233-eff6dd93def4` (page slug `Tyn3-Cljx-A`) | Unsplash — Mick Haupt | Unsplash License | 6720 x 4480 | **YES — visually verified.** 100% rule run at native, plus 1.4x / 3x scans and a 6x check on the delivered file. **Recovered by reframe.** Location stated at source as *Lake Eola, Orlando, FL*; camera on the photo page is a Canon EOS 5D Mark IV. |
| **ALTERNATE** | Pexels photo **261101** | Pexels — Pixabay | Pexels License | 7205 x 4038 | **YES — visually verified.** 100% rule run at native, plus 2x / 2.4x scans across every facade, fence and deck marking. |

Fetch URLs — **no query string**. These are the exact files that were brand-checked and the exact
files that should ship:

```
https://images.unsplash.com/photo-1609184889233-eff6dd93def4      # PRIMARY
https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg  # ALTERNATE
```

### What they are

**PRIMARY** — Lake Eola, Orlando, at blue hour. A continuous row of **residential
condominium towers** along the far shore, the Linton E. Allen Memorial Fountain lit on the water,
and a mirror-calm lake filling the bottom half of the frame under a clean cyan-to-gold gradient sky.
Many separate buildings, no single building is the subject. Zero theme-park content of any kind.

**ALTERNATE** — A Florida condo-resort amenity deck: free-form zero-entry pool, paver deck, a
tile-roofed open pavilion, date and cabbage palms on every side, water jets, loungers. This frame
exists to carry the *vacation* signal that the primary trades away for destination proof. It is the
single most "sells a condo holiday" frame produced by the whole sweep.

---

## 2. Delivery crops — rendered with PIL, opened, and inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 620) → (5060, 3466)` | 5060 x 2846 | 1600 x 900 | **0.3162x (downscale)** | **none** |
| ALTERNATE | `(13, 0) → (7191, 4038)` | 7178 x 4038 | 1600 x 900 | **0.2229x (downscale)** | **none** |

Neither deliverable requires any upscale. Both are heavy downscales, which is the favourable
direction: it pushes residual detail further below resolution rather than inventing it.

Reproduce exactly:

```python
from PIL import Image

# PRIMARY — the right-hand crop boundary at x=5060 is the compliance move, see §4
im = Image.open("photo-1609184889233-eff6dd93def4.jpg")          # 6720 x 4480
im.crop((0, 620, 5060, 3466)).resize((1600, 900), Image.LANCZOS).save("con-orl-primary.jpg", quality=92)

# ALTERNATE — near-native 16:9, only 27px of width trimmed to square the ratio
im = Image.open("pexels-photo-261101.jpeg")                      # 7205 x 4038
im.crop((13, 0, 7191, 4038)).resize((1600, 900), Image.LANCZOS).save("con-orl-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conorl/CON-ORL_PRIMARY_1600x900.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conorl/CON-ORL_ALTERNATE_1600x900.jpg
```

Nothing was written into the repo except this report.

### Overlay space

- **PRIMARY:** the top ~28% is unbroken graduated sky and the bottom ~38% is unbroken reflective
  water. Two very large low-detail regions. Best overlay canvas in the entire sweep.
- **ALTERNATE:** the top ~33% is sky and palm crowns — softer, busier than the primary, but the
  pool surface in the lower centre-right is a usable second region. Good, not excellent.

---

## 3. C1 — SOURCE TITLES TO STRIP

Recorded so they can be removed, per rule C1. **Neither string may travel to the site — not as
filename, not as alt text, not as caption.**

| Slot | Source title / alt text as published | Filename as served |
| --- | --- | --- |
| PRIMARY | *"city skyline across body of water during daytime"* — Mick Haupt | `photo-1609184889233-eff6dd93def4` |
| ALTERNATE | *"Relaxing tropical poolside scene with palm trees, gazebo, and clear blue water"* (also indexed as *"Idyllic tropical resort featuring palm trees, tranquil poolside setting…"*) — Pixabay via Pexels | `pexels-photo-261101.jpeg` |

Neither title names a property, which is unusually clean — contrast the Sedona probe, where the
title named the resort. But **the primary's `photo-<n>-<hash>` filename and the alternate's
`pexels-photo-<ID>` filename are still source metadata and still get replaced.**

Suggested generic re-captions (name no property, promise no specific unit):

- PRIMARY: *"Lakefront condominium towers at dusk, Orlando"*
- ALTERNATE: *"Resort pool deck and palms, Central Florida"*

---

## 4. The 100% rule — what was actually magnified

Every file below was fetched **with no query string at all**. Unsplash served true native
6720 x 4480 (5.5 MB); Pexels served true native 7205 x 4038 (4.6 MB). Every crop was taken from the
native file and opened with the Read tool.

### PRIMARY `photo-1609184889233` — and the reframe that recovered it

The full frame **FAILS**. The reframe **PASSES**.

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Glass tower, far right of full frame | (5300, 950, 6720, 2150) | **1.4x** | **FAIL — "TD Bank" fully legible**, green box logo plus white wordmark, illuminated, roughly 300 x 90 native px. A major third-party brand, high on the facade, unambiguous. |
| Shoreline, centre-right | (3400, 1900, 5400, 2500) | 1.9x | Large illuminated holiday display (an orange lit cube) at native x ≈ 5160–5360. Not branded, but it anchors the eye and sits next to the TD Bank tower. |
| Left-edge towers | (0, 1400, 1600, 2500) | 2x | Clean. Two residential condominium slabs, balcony stacks, a dock. No wordmark, no logo, no sign-shaped object. |
| Mid-block rooflines and facades | (2400, 1250, 4100, 1900) | **3x** | Clean. Twelve-plus bays of condominium facade at 3x with **nothing readable anywhere**. |
| Right-of-centre round towers (retained) | (4100, 1150, 5060, 2000) | **3x** | Clean. Glass and balcony curtain wall, no name band, no crown signage. Some HDR halo fringing on the roof edges — invisible at delivery scale. |
| **Delivered 1600x900 file**, shoreline strip | (560, 440, 1560, 560) of the render | **6x** | Clean. Fountain, street lamps, condo facades, a small lit star ornament, a small lit gift-box ornament, a ring sculpture. **No lettering of any kind is present or recoverable.** |

**The reframe.** The failure was confined to one region: the TD Bank tower occupies native
x ≈ 5300–6500. Cropping the right-hand 25% of the frame at **x = 5060** removes the entire tower
*and* the orange holiday cube, and still leaves 5060 px of width — an eight-building condominium
skyline, the fountain, and the whole lake. This is the Port Canaveral manoeuvre from the brief
applied verbatim: the licence already covers the crop, it costs nothing, and it converts a hard
reject into the best frame in the sweep. **Test, do not assume — the test passed.**

Residual disclosures, both measured in the **delivered** file per C3c:

- A gold **holiday wreath ornament** on the shore at delivered ≈ (1465, 512), about **35 px wide**.
  Public seasonal decoration, no wordmark, no brand.
- A lit **star ornament** at the fountain base, delivered ≈ (650, 522), about **18 px**.
- The Lake Eola fountain is lit **red at the base with teal jets** — its December colour
  programme. The frame therefore reads as a cool-season evening. Not a compliance issue; flagged
  because it constrains seasonal reuse.

### ALTERNATE — Pexels 261101

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Pavilion, columns, roof, seating | (2300, 1500, 4600, 2800) | **2x** | Clean. Tile roof, stucco arch, stone column bases, sling chairs. **No nameplate, no valance printing, no plaque.** A blue object visible through the perimeter fence is an unbranded tarp/cover. |
| Left deck, fence line, people | (300, 1900, 2300, 2700) | **2x** | Clean. Unbranded white life ring on the fence. Depth marker `3 FT` cast in the coping. Two adults walking, one child's head in the water — see disclosure below. |
| Right deck, second building, hedge | (5200, 1600, 7191, 2700) | **2x** | Clean. A second tile-roofed structure behind the hedge, loungers, water jets, depth marker `3 FT 6 IN`. No facade lettering. |
| **Delivered 1600x900 file**, deck band | (300, 330, 1000, 560) of the render | **6x** | Clean. Nothing readable. |

Disclosures:

- **Depth markers** (`3 FT`, `3 FT 6 IN`, `4 FT`) are cast into the pool coping. These are safety
  markings, not brands or property names; at the 0.2229x delivery scale each is ~14 px.
- **Three people are present** — two adults mid-stride in the left third, and a child's head in the
  pool. At delivery scale each head is **≈ 15 px**; none is identifiable, none is the subject, none
  is facing camera square-on. The Pexels License permits this, but flagged so it is a **decision
  taken, not a detail missed**. If a zero-people frame is required, see the runner-up in §7.

---

## 5. The governing rule, applied honestly

> **Shoot the strip, not the resort.** Elevate until no single building is the subject.

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| No single building is the subject | **Yes.** Eight-plus separate condominium towers, none dominant. | **Partly.** The subject is the *pool*, not a building; the pavilion is one element among palms, deck and water, and a second building sits behind the hedge. |
| Cannot imply a guaranteed property | **Yes — strongest possible.** A many-property city skyline cannot be read as "this is your unit". | **Weaker.** It is one resort's amenity deck. It carries no name, but it is one place. |
| Signage pushed below resolution | Yes, by distance and by the reframe. | Yes, by downscale — but only because there was no signage to begin with. |

The primary is the **compliance-strongest** frame available for this destination. The alternate is
the **sales-strongest**. Nominating both, in that order, is the honest split.

### C4b — lodging is in frame, checked deliberately

The brief's new rule warns that optimising hard for "no branding" drifts into pure landscape:
attractive, unbranded, correctly-located frames with **no lodging in them at all**. Checked
explicitly, before the logo pass rather than after:

- **PRIMARY: lodging is the entire subject.** Eight-plus residential condominium towers fill the
  middle band of the frame — balcony stacks, curtain wall, a round glass tower. Not a landscape
  with buildings incidentally in it; the buildings *are* the horizon.
- **ALTERNATE: lodging is present but secondary.** The subject is an amenity deck; the tile-roofed
  pavilion is in frame and a second resort building sits behind the hedge on the right. This is the
  weaker of the two on C4b — it proves a *resort*, not a *unit*. Acceptable for a condo certificate,
  where the amenity is a large part of what is being sold, but it is the reason this frame is the
  alternate and not the primary.

The drift C4b describes was real here and was caught: candidates **#32** (Florida wetland with
cabbage palms) and **#33** (palm crowns against sky) are both attractive, entirely unbranded and
plausibly Floridian — and both were rejected precisely because **no lodging appears in either**.
They would have passed every compliance test and failed the product.

---

## 6. The Orlando hard constraint — the failure mode, confirmed

> No theme-park branding, characters, or recognisable park landmarks.

This was by far the dominant rejection cause here, and it behaved differently from every prior
probe. On this destination, **theme-park content is not a contaminant at the edges of the frame — it
is the frame.** Of 31 candidates opened, **11 were theme-park-owned or theme-park-adjacent.**

The trap to name explicitly for the next agent: **Orlando's best-photographed "resorts" are all
park-owned hotels, and Pexels captions them inconsistently.** The same file was captioned
*"Aerial view of a scenic resort in Lake Buena Vista, Florida"* under one query and
*"Aerial shot of a Disney's Caribbean Beach Resort in Florida"* under another. A compliance read
based on one caption would have shipped a Disney resort.

**Run every shortlisted Orlando candidate through more than one search query and compare the
captions.** It cost one extra WebFetch and caught the single most dangerous near-miss in the sweep.

### The near-miss, documented in full

**Pexels 12765169** — Adam Somogye, 4032 x 3024. Visually this is the best resort aerial the sweep
found: an elevated view over a lake onto a multi-building Caribbean-village resort with coral and
blue roofs, palms, a sand beach and a towering cumulus sky. It passes C3, C5 and C7 on their face.

It is **Disney's Caribbean Beach Resort**, and it was rejected:

1. **The source names it.** The `orlando aerial` query returns the caption *"Aerial shot of a
   Disney's Caribbean Beach Resort in Florida"*. C1's whole point is that the caption names the
   property even when the pixels do not — here the caption names the *park operator*.
2. **Disney Skyliner is in frame.** At 3x on the native file, native x ≈ 3150–4032 carries two
   gondola towers and at least seven suspended gondola cabins in Disney's livery colours. That is
   recognisable Walt Disney World transport infrastructure.
3. The reframe **works mechanically** — cropping at native x = 3100 removes every Skyliner element,
   and the remaining crop (checked at 3x and 4x: coral roofs, blue gables, sunburst medallions,
   palms, beach, path) contains **no lettering, no logo and no character silhouette**. A
   construction crane in the top-left corner also crops away.
4. **It was still rejected.** The reframe fixes the *landmark* problem and not the *identity*
   problem. Caribbean Beach Resort's architecture is recognisable to the exact audience this
   certificate is sold to, and an Orlando condo certificate illustrated with a Disney resort implies
   a Disney stay the certificate does not guarantee. That is the C1 compliance logic — a frame that
   implies a property the certificate cannot deliver — arriving by a different route.

Recorded here rather than buried, because a future agent will find this file again, will see that it
passes the mechanical checklist, and needs to know it was considered and declined on purpose.

---

## 7. Every candidate opened — 31 files, all downloaded and viewed

All fetched at native with no query string. "Opened" means the file was rendered and looked at with
the Read tool. Nothing in this table was judged on metadata.

| # | Asset | Source / photographer | Native | Opened | Verdict and reason |
| --- | --- | --- | --- | --- | --- |
| 1 | `photo-1609184889233-eff6dd93def4` | Unsplash / Mick Haupt | 6720x4480 | yes | **PRIMARY** — after reframe drops TD Bank. |
| 2 | px 261101 | Pexels / Pixabay | 7205x4038 | yes | **ALTERNATE** — zero branding at 2x across every surface. |
| 3 | px 261105 | Pexels / Pixabay | 7166x5107 | yes | **Runner-up, close third.** Same resort as #2, better light on the palms. Rejected only for a large white `SWIMMING POOL POLICIES & PROCEDURES` / `NO DIVING IS ALLOWED` board on the clubhouse wall and more people in frame. Checked at **8x**: faint grey text at the board's top-left is ~50 native px and **does not resolve into letters even at 8x** — no property name is recoverable. Usable if #2 is rejected. |
| 4 | px 12765169 | Pexels / Adam Somogye | 4032x3024 | yes | **REJECT — Disney's Caribbean Beach Resort.** Skyliner gondolas at 3x; source caption names Disney. See §6. |
| 5 | px 9400916 | Pexels / Mikhail Nilov | 5464x3640 | yes | **REJECT.** Universal Orlando's Hard Rock Hotel is the sole subject (C3 fail), Universal soundstages upper-left, Portofino Bay harbour upper-right. Three park-owned properties in one frame. |
| 6 | px 39438246 | Pexels / This Is Jooh | 4160x6240 | yes | **REJECT.** Universal's Portofino Bay Hotel; legible retail signage along the quay (`MARKET`); shot through a window with black vignette bars top and bottom. |
| 7 | px 34074685 | Pexels / Katie Brittle | 6654x4436 | yes | **REJECT.** Disney's Port Orleans Riverside. Single building, recognisable park-owned property. |
| 8 | `photo-1676347440665-8682a11f7db7` | Unsplash / Brandon Schmidt | 5211x3474 | yes | **REJECT.** Disney's Grand Floridian. One of the most recognisable hotel silhouettes in America. |
| 9 | px 261429 | Pexels / Pixabay | 5067x2850 | yes | **REJECT, narrowly.** Genuine Central Florida condo-resort pool with waterslide; slide tower checked at 2.2x and is **completely unsigned**. Killed by a flat white overcast sky (no overlay contrast) and a foreground family whose faces are large enough to matter. |
| 10 | px 15212008 | Pexels / Connor Scott McManus | 7728x5152 | yes | **REJECT.** `PARAMOUNT` legible vertically down the building. Palm trunk and a dark sign board obstruct the composition. Not reframeable — the mark is central. |
| 11 | px 7453854 | Pexels / M DesignZ LLC | 6000x4000 | yes | **REJECT.** `FIFTH THIRD BANK` legible mid-frame. Reframe possible but the surviving crop keeps a Christmas tree and a rainbow art installation. |
| 12 | `photo-1609184889514-656548112551` | Unsplash / Mick Haupt | 6720x4480 | yes | **REJECT — instructive.** Same photographer and minute as the primary, golden hour. A red wordmark on the gold building checked at **6x is an unresolvable smudge** (~90x40 native, ~22x10 delivered) — so by C3c it is *not* a fail. Rejected instead for candy-cane decorations and fairy-lit tree trunks along the right shore, parked cars, and an autumnal orange-cypress palette that reads "November", not "vacation". |
| 13 | px 34936498 | Pexels / Simon Steiner | 10413x5857 | yes | **REJECT.** Lake Eola through heavy cypress framing; the skyline is office towers, the grade is desaturated teal. Reads "city park", not "condo". |
| 14 | px 31361485 | Pexels / Gryziu | 6016x4016 | yes | **REJECT.** Night, palm wrapped in multicoloured Christmas lights. Heavily seasonal. |
| 15 | px 11669048 | Pexels / AirAmdPhoto | 2927x3903 | yes | **REJECT.** Lake Eola sunset silhouette. Attractive, but portrait source, buildings reduced to silhouette, and a bin/pole intrudes into the water at right. |
| 16 | px 10770519 | Pexels / M DesignZ LLC | 6000x4000 | yes | **REJECT.** Third Lake Eola dusk variant; nothing the primary does not do better. |
| 17 | px 20486251 | Pexels / Sid Dalal | 2331x2289 | yes | **REJECT.** Near-square, only 2331 px wide — a 16:9 crop leaves too little height. |
| 18 | px 10682504 | Pexels / Duren Williams | 6000x4000 | yes | **REJECT — C4.** Identifiable private residences on a retention pond, parked pickups, a street sign. Dark stormy grade. Not vacation-selling. |
| 19 | px 32270936 | Pexels / Chris The Island | 4000x2250 | yes | **REJECT — C4 + C5.** Aerial over single-family homes with screened lanais, solar panels and wheelie bins. Reads retirement subdivision. |
| 20 | px 32270934 | Pexels / Chris The Island | 4000x2250 | yes | **REJECT — C5.** Golf fairway with bare sand lots and scrubby vacant parcels. Reads land development. |
| 21 | px 38880997 | Pexels / Chris The Island | 3000x1688 | yes | **REJECT — C5.** Terracotta-roofed condos around a lake in the top-left corner, but the frame is dominated by a six-lane arterial, power lines, full car parks and a semi-trailer. The good corner is too small to crop without a >1.0x upscale. |
| 22 | px 38880972 | Pexels / Chris The Island | 1688x3000 | yes | **REJECT — C5.** A road intersection, lane arrows, crosswalks and overhead cabling. Condos in the top-right corner only, and the file is too small to reframe onto them. |
| 23 | px 14458536 | Pexels / Thomas Haney | 4608x3456 | yes | **REJECT — C5.** A drainage control structure, strip mall, parking lots, semi-trailers and a red commercial building with signage. |
| 24 | px 36759932 | Pexels / MFitzArt | 4000x2250 | yes | **REJECT — C5.** Flat grey overcast, bare trees, industrial metal roofing, parking. Desaturated. |
| 25 | px 4402362 | Pexels / Josh Sorenson | 9680x6581 | yes | **REJECT.** Wrong destination — an open Gulf-coast bay, not Orlando. Big-box roofs and car parks in the foreground. |
| 26 | px 33554196 | Pexels / user | 3933x2383 | yes | **REJECT.** Wrong destination — temperate deciduous forest and Lombardy poplars. Not Florida. |
| 27 | `photo-1605723517503-3cadb5818a0c` | Unsplash / Denys Kostyuchenko | 5467x3645 | yes | **REJECT.** Mis-tagged "orlando" — it is downtown Miami across Biscayne Bay. |
| 28 | px 36360796 | Pexels / GoJuanca | 3024x4032 | yes | **REJECT.** Kissimmee golf course at ground level. Condo/townhome row confined to the right ~25%; the rest is an empty lawn. Ground-level, C3 fail, and weak as a sales image. |
| 29 | px 11400444 | Pexels / An Flamand | 5184x3456 | yes | **REJECT — C3 + C4 + C5.** A screened lanai pool at a single private vacation home. The screen cage is authentically Kissimmee, but it is one residence, with a BBQ grill, dated striped loungers and neighbouring houses. |
| 30 | px 15268095 | Pexels / Point of Ju | 4480x6720 | yes | **REJECT — C3.** Single hotel shot straight up. No destination proof; could be any city. |
| 31 | px 31479908 | Pexels / Connor Gagnon | 4160x6240 | yes | **REJECT — C3.** Pink Mediterranean condo facade with turquoise balconies. Handsome and genuinely condo-flavoured, but one building, portrait, and no destination proof whatsoever. Generic-fallback only. |
| 32 | px 17376055 | Pexels / Jeffrey Eisen | 6000x4000 | yes | **REJECT.** Florida wetland and cabbage palms. No property in frame at all — cannot carry a condo certificate. |
| 33 | `photo-1556894546-d227c2d4df3b` | Unsplash / Brian Erickson | 2234x3973 | yes | **REJECT.** Palm crowns against sky, with car-park light poles. No property, no destination. |

Rejected on sight from search listings without download (theme-park content stated in the caption,
so no pixel check could rescue them): the Hollywood Tower Hotel set (8183689, 14243455, 28772225,
34158672, 20451443), Icon Park's ferris wheel (8186852), Universal Studios aerial (9400905),
Universal Orlando entrance (34064365, 34064364), Epcot pavilions (34146259, 34074666, 34074669),
Disney's All-Star Sports helmet (17493271), Disney's Boardwalk (26800600), the Swan Hotel
(20806165), Cinderella Castle (`photo-1597466599360`), and the Disney/coaster set on Unsplash
(`photo-1539886075737`, `photo-1621445944472`, `photo-1588882929086`, `photo-1661231134432`).

---

## 8. Search log — what each query was worth

Vocabulary discipline per C6 was observed throughout: **no "villa", no "condo", no "vacation
rental", no state name, no interiors.**

| Query | Source | Yield |
| --- | --- | --- |
| `orlando hotel` | Pexels | 24 results. 6 theme-park hotels, 6 downtown skylines, 2 aerials. Produced #5. |
| `orlando hotel` p.2 | Pexels | 24 results, mostly out-of-state (Antalya, South Korea, Indiana, St Augustine, Russia). Nothing new. |
| `kissimmee resort` | Pexels | 24 results. **The single most productive query.** Produced #2, #3 and #9 — the entire pool-deck cluster. |
| `kissimmee` | Pexels | 24 results. Produced the Chris The Island aerials (#19–22), all rejected on C5. |
| `orlando resort` | Pexels | 24 results, 11 of them Disney or Universal. Produced #6. |
| `orlando aerial` | Pexels | 24 results. **Low yield, high value:** it returned #4 with a *different caption* that named Disney. Worth running for the caption cross-check alone. |
| `lake buena vista` | Pexels | 24 results. Confirms Lake Buena Vista on Pexels is effectively a Disney tag. |
| `orlando` | Unsplash | 16 results, 6 of them overtly theme-park. Produced the **PRIMARY** and #12. 1 Unsplash+ item correctly skipped. |
| `kissimmee` | Unsplash | 20 results and **essentially a dead query** — one photographer's classic-car series accounts for half of it. 2 Unsplash+ items skipped. |

**C2 revisited for a dense destination.** The brief predicted "abundance plus high signage risk" for
Orlando. Half of that held: abundance is real. But the risk turned out **not** to be signage —
signage fired only twice in 31 files (TD Bank, Fifth Third Bank, both on downtown office towers,
both croppable). The real risk is **ownership**: roughly a third of everything captioned
"Orlando resort" belongs to Disney or Universal.

**C3b revisited.** The rule says magnify the low buildings, not the tall ones. On Orlando it
inverted: **both brand hits were on tall towers**, and the low buildings were clean every time. The
reason is that Orlando's low buildings are resort amenity structures and suburban houses, neither of
which carries retail signage, while Orlando's tall buildings are downtown office towers that carry
crown branding by definition. Magnify **both**; on this destination the towers were where the marks
actually were.

**C5 confirmed emphatically.** "Not premium / not vacation-selling" was again the number-one
rejection cause: **9 of 31** (car parks, arterial roads, drainage works, strip malls, overcast
industrial, bare lots, wheelie bins). Branding proper accounted for only 2. Ownership/theme-park
accounted for 8. Wrong destination for 3.

---

## 9. Licence and provenance

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Licence | **Unsplash License** — free commercial use, no attribution required, no share-alike | **Pexels License** — free commercial use, no attribution required, no share-alike |
| Paywall check | Filename has **no `premium_photo-` prefix**; not tagged Unsplash+ in the listing. **Free tier confirmed.** | Pexels has no paid tier on this asset. |
| Attribution obligation | None. Crediting Mick Haupt is optional courtesy. | None. |
| Share-alike risk | None — not CC BY-SA. The crop carries no obligation. | None. |

### AI / pre-generative screen

**PRIMARY — passes on three independent signals.**

The served file carries no EXIF (confirmed: `getexif()` returns 0 keys). But per the brief's
amended rule, **Unsplash strips EXIF from the file and publishes the camera on the photo page.**
Read the page, not the file:

```
https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-Tyn3-Cljx-A

Camera:    Canon, EOS 5D Mark IV
Published: December 28, 2020 (UTC)
Location:  Lake Eola, Orlando, FL, USA
Licence:   Free to use under the Unsplash License   (not Unsplash+)
```

1. **Camera recovered.** A Canon EOS 5D Mark IV is a real 2016 full-frame DSLR. The camera half of
   the AI screen is satisfied on positive evidence, not on absence.
2. **Timestamp method cross-validates.** The filename prefix decodes as
   `1609184889 → 2020-12-28 19:48:09 UTC`, which matches the page's stated publish date of
   **December 28, 2020** exactly. The two methods agree independently.
3. **The frame's own content agrees.** Holiday ornaments on the shore, the fountain in its December
   colours, bare cypress on the bank — a late-December scene, consistent with both dates.

December 2020 is **comfortably pre-generative**. The sibling file #12 carries the same filename
timestamp to the second, consistent with two frames from one shoot uploaded together.

**Bonus — destination proof is now documentary, not inferential.** The photo page states the
location as **"Lake Eola, Orlando, FL, USA"** in the photographer's own metadata. The primary is
not merely *identifiable* as Orlando from the fountain; it is *stated* as Orlando at source. That
removes the last soft spot in the primary's case.

**C1 note:** this location string is source metadata like any other. It names a **public park**,
not a lodging property, so it implies no guarantee and is benign — but it still must not be carried
through as alt text or a filename. Use the generic re-caption in §3.

**ALTERNATE.** Per the brief's Pexels exception, the camera-metadata half of the screen cannot be
run — Pexels strips EXIF from everything, and what survives here is only orientation, resolution
units and a 90-byte stub. The second half is run instead, as a reasoned call:

- Native geometry is **7205 x 4038**, aspect 1.7844 — not 3:2, not 4:3, not 16:9, and not a round
  number in either axis. Generator output clusters on round, power-of-two-friendly dimensions;
  this is the signature of a **multi-frame HDR merge or panoramic stitch** that has been trimmed,
  which is exactly what the image looks like (halo-free but tone-mapped, deep shadow detail under
  the pavilion, blown-free sky).
- The sibling frames 261105 (7166 x 5107) and 261429 (5067 x 2850) share the resort, the paver
  pattern, the stone retaining walls and the fence, and each has a *different* irregular native
  geometry. A generator does not produce three consistent views of one physical location with three
  inconsistent odd aspect ratios.
- **Pexels IDs are sequential.** ID `261101` sits in a block issued around **2014** — years before
  any generative image model existed. This is the strongest single signal available on a
  Pexels file and it is decisive here.

**Neither file is flagged.** Both pass the screen on positive evidence rather than absence of
evidence.

---

## 10. Honest weaknesses — read before shipping

1. **The primary reads "city", not "beach".** It is a downtown lakefront skyline. The buildings in
   it are genuinely residential condominium towers, and Orlando is genuinely an inland city, so the
   frame is *truthful* — but a buyer who pictures a palm-fringed pool will not see one. This is the
   deliberate trade: destination proof and compliance strength, bought with sales warmth. **If the
   page has room for two images, run both nominations together and the tension resolves.**

2. **The alternate cannot be proved to be Orlando.** It surfaced under `kissimmee resort` and its
   architecture, planting, paver work and screened-in Florida idiom are all consistent with a
   Kissimmee/Davenport condo-resort — but the title states no location and **nothing in the pixels
   proves the city.** It is honest as "Central Florida resort"; it would be dishonest to caption it
   "Kissimmee". Caption it generically, as §3 proposes.

3. **The primary is seasonal.** December light, holiday ornaments on the shore, the fountain in its
   winter colours, bare cypress on the bank. Nothing is branded and nothing is prominent, but the
   frame will read slightly off in a July campaign.

4. **The alternate contains three unreleased people**, all at ~15 px in the delivered file. Legal
   under the Pexels License; flagged as a decision rather than an oversight. Candidate #3
   (px 261105) is *not* an escape — it has more people, not fewer. There is **no zero-people
   Orlando-area resort pool frame** in this sweep.

5. **No aerial "condo strip" frame exists for this destination.** The brief's highest-yield framing
   — elevated, many properties, signature landscape behind the roofline — worked on Myrtle Beach
   because the Grand Strand *is* a linear wall of condominium towers. Orlando has no such wall. Its
   condo stock is low-rise, dispersed among lakes and golf courses, and indistinguishable from
   ordinary suburban housing from the air — which is precisely why aerials #19–#22 all failed C5.
   The one genuine elevated multi-building resort aerial available (#4) is Disney-owned. **This is a
   structural property of the destination, not a gap in the search.** An agent re-running this
   certificate should not expect a Myrtle Beach-style aerial to turn up with more effort.

6. **`kissimmee` is a dead query on Unsplash.** 20 results, half of them one photographer's
   classic-car series. Do not spend calls there. `orlando` alone on Unsplash and `kissimmee resort`
   on Pexels carried this entire sweep.

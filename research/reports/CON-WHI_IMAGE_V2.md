# CON-WHI — Whitefish Condo — Image acquisition V2

**Certificate:** CON-WHI / whitefish-condo / Whitefish Condo
**Destination:** Whitefish, Montana
**Product:** condo stay, unit assigned at confirmation, **no resort named**
**Scope:** images only. No pricing work.
**Procedure:** IMAGE_BRIEF_V2.md followed in full, condo rules C1–C7. Every candidate below was
downloaded and **opened with the Read tool**. All brand checks were run on the **native-resolution**
file fetched with **no query string**. All delivery crops rendered with PIL at 1600x900.

---

## VERDICT

| Slot | Asset | Status |
| --- | --- | --- |
| **PRIMARY** | Pexels 5728410 — Shaylone Lmore — 4096x2730 — Whitefish Lake | **APPROVE — visually verified at 100%** |
| **ALTERNATE** | Unsplash `photo-1708640576952-a3852d32cc5c` — Lily Miller — 6564x4376 — Flathead Valley lakeshore | **APPROVE — visually verified at 100%** |
| THIRD / fallback | Pexels 8327281 — Favorable Light Studios — 4000x3000 — Whitefish River | APPROVE on compliance, weak on saleability |
| **REJECTED — the best composition in the sweep** | Unsplash `photo-1708640577684-bfaf1bfde512` — Lily Miller — 4480x6720 — Whitefish Mountain Resort village | **REJECT on brand after 5 reframes** |

Zero budget respected. No retouching performed or required. **Neither nomination is upscaled** —
both are downscales (0.39x and 0.24x). No Unsplash+, no Getty, no `premium_photo-` asset is proposed.

**Glacier National Park was not used**, so no "25 miles east" disclosure is needed. See §5.

---

## 1. PRIMARY — Pexels 5728410

- **URL (native, no query string):** `https://images.pexels.com/photos/5728410/pexels-photo-5728410.jpeg`
- **Fetch:** HTTP 200, 3,300,679 bytes, plain curl, no query string. True native.
- **Photographer:** Shaylone Lmore
- **Licence:** Pexels License — free commercial use, no attribution, no share-alike
- **Native:** 4096 x 2730 (1.5004 — a 3:2 sensor frame)
- **C1 — SOURCE TITLE TO BE STRIPPED:**
  `"Enjoy leisure boating on serene Whitefish Lake with lush mountain views"`
  Do not carry this title, the Pexels filename, or the photographer string into site alt text,
  filenames, or captions. Re-caption generically, e.g. *"Northwest Montana lake and mountains."*

### What is actually in the frame

Whitefish Lake at midday in high summer. Turquoise open water fills the lower half. Across the
water runs a **continuous lakeshore of a dozen-plus separate lodges, cabins and timber beach
houses**, each small in frame, with a shoreline of moored pontoon boats, runabouts, docks, kayak
racks and beach chairs in front of them. Behind that rises a fully forested ridge of the Whitefish
Range with clear-cut scars and rock outcrops near the summit; above it, unbroken blue sky. A
mahogany-hulled classic runabout under a black bimini runs right-of-centre in the foreground, an
American flag on its stern, one person at the helm seen from behind.

### Why it passes the governing rule

**C3 — shoot the strip, not the resort:** satisfied by the strongest available reading. No single
building is the subject, or even identifiable as a subject; the built environment is a *row of
many properties* seen at distance across water. A frame containing a dozen lodgings, none of them
resolvable, cannot imply that the certificate guarantees any one of them.

**C3d — shoot the destination, not the building:** the destination's signature landscape (the lake,
the Whitefish Range) is the subject and the lodging sits inside it, exactly the framing the rule asks for.

**C5 — saleability judged first:** this is the most vacation-selling frame in the entire sweep.
Saturated turquoise water, clean sky, a wooden boat, a swimming-and-boating shoreline. No car park,
no utility poles, no refuse bins, no snow, no gravel.

**C4 — identifiable private residences:** the shoreline houses are numerous and none is presented
as a subject; at delivery each is 40–90 px wide. No single dwelling is identifiable in the shipped file.

### 100% brand check — what I actually did

Four native-resolution tiles cut from the 4096 px file with no query string and opened:

| Tile | Native region | What I saw |
| --- | --- | --- |
| `nzW_boat` | 2450,1620 → 3600,2250 | Outboard cowling carries **"90"** (a horsepower number, not a brand), a small **"GT"**, and an unreadable white cursive badge. Transom carries a gold script boat name, partially occluded, reading only "…ssa". A small dark script on the hull side. **No manufacturer wordmark is legible even at native.** |
| `nzW_shoreL` | 0,1280 → 1500,1620 | Timber lodges, a red-roofed lodge, canoe racks, beach chairs. **Zero signage.** |
| `nzW_shoreM` | 1400,1280 → 2800,1620 | Treeline, cabins, small craft. **Zero signage.** |
| `nzW_shoreR` | 2700,1280 → 4096,1620 | Log lodge, blue-roofed boathouse, a line of moored pontoon boats, a water-toy rack. **Zero signage.** |

**C3b — magnified the LOW buildings, not the tall ones.** There are no tall buildings in this
frame; every tile above targets the single-storey shoreline structures and the boats in front of
them, which is where the Myrtle Beach probe found 5 of its 15 failures. Nothing was found.

**C3c — converted the high-zoom finds into DELIVERED pixels before rejecting on them.** Measured
in the shipped 1600x900 file, not at native:

| Mark | Native size | **Delivered size** | Readable at 1:1? | Readable at 3x? |
| --- | --- | --- | --- | --- |
| Outboard cursive badge | ~160 x 60 | **62 x 23 px** | No | No — still unreadable cursive |
| Hull-side script | ~100 x 40 | **39 x 16 px** | No | No |
| Transom boat name | ~130 x 60 | **51 x 23 px** | No | No — resolves only as "…ssa" |

The whole boat is 420 x 220 px in the delivered file. I rendered a 3x view of that region and
opened it: the "90" and "GT" resolve as characters, and nothing else does. A horsepower number and
an unreadable private vessel name are not third-party commercial branding. **Pass.**

### Delivery crop

- **Crop:** `(0, 0, 4096, 2304)` of the native file — the full frame width, top-aligned, bottom 426 px
  of empty foreground water dropped.
- **Render:** 4096x2304 → **1600x900**
- **SCALE FACTOR: 0.3906x — a downscale. NO UPSCALE.**
- **Overlay space:** the lower ~45% of the frame is uninterrupted turquoise water; the upper-left
  quadrant is clean blue sky. Both take a translucent hero/header panel cleanly.
- No reframing was needed to pass. The crop exists only to convert 3:2 to 16:9.

### AI / provenance screen

Pexels strips EXIF from everything it serves, including un-resized originals; confirmed — the file
returns **no** Make, Model, DateTime or exposure block. Per the brief's stated exception I ran the
geometry half instead. Native is **4096 x 2730 = 1.5004:1**, i.e. a 3:2 sensor frame exported at
4096 px on the long edge — an ordinary DSLR/mirrorless aspect and an ordinary export width, not a
generator's round power-of-two square or a 1024/1536 multiple in both axes. The content also carries
physically consistent optical evidence a generator tends to break: the boat's wake, the flag's
wind direction, the bimini shadow and the hull reflection all agree, the shoreline boats are
individually distinct rather than repeated, and the clear-cut scars on the ridge match real
logging geometry. **Reasoned call: real photography.** Recorded explicitly as a reasoned call,
not an unexamined pass.

---

## 2. ALTERNATE — Unsplash `photo-1708640576952-a3852d32cc5c`

- **URL (native, no query string):** `https://images.unsplash.com/photo-1708640576952-a3852d32cc5c`
- **Fetch:** HTTP 200, 5,236,907 bytes, plain curl, **no query string**. True native.
- **Page:** `https://unsplash.com/photos/HxD55zR_GQ4`
- **Photographer:** Lily Miller (@lilyycamillephoto)
- **Licence:** Unsplash License — free commercial use, no attribution required. **Not Unsplash+.**
  Verified: no `premium_photo-` prefix, and the photo page offers a free download.
- **Native:** 6564 x 4376 (exactly 1.5000 — 3:2)
- **C1 — SOURCE TITLE TO BE STRIPPED:** `"a body of water surrounded by trees and clouds"`
  (Unsplash alt text). Location tag on the page: **"Kalispell, MT, USA."** See the honesty note below.

### What is in the frame

A Flathead Valley lake in early summer under a towering cumulus build-up. Glassy blue-green water
across the bottom third; a low forested ridge on the far left; a stand of tall firs on the right;
and along the shoreline a **scatter of separate lakeside lodges and cabins** — a green-metal-roofed
timber lodge with a covered porch, a shingled lodge behind it, a low cabin row further left — with
docks, a small boat and a swim platform. Big, dramatic, high-contrast sky occupying the upper half.

### Why it passes

- **C3:** multiple discrete lodgings, none the subject; the subject is the lake and the sky.
- **C5:** premium. The cumulus tower is the best sky in the whole sweep, and the frame is clean —
  no cars, no poles, no wires, no signage.
- **Overlay:** the upper-left third is open cloud and sky; the bottom third is open water. Excellent.

### 100% brand check

Four native tiles cut from the 6564 px file and opened:

| Tile | Native region | What I saw |
| --- | --- | --- |
| `nzL_L1` | 1600,2800 → 3400,3300 | A low ranch-style lodge, a covered dock, a pontoon boat and a runabout. **No signage.** |
| `nzL_L2` | 3300,2740 → 4900,3260 | Green-metal-roofed timber lodge with a porch and railing, a swing set, picnic tables, a birdhouse post. **No signage.** |
| `nzL_L3` | 4900,2740 → 6564,3260 | A shingled house with an attached garage, a boat on a trailer, deep shade. **No signage.** |
| `nzL_L4` | 0,2850 → 1800,3300 | Far shore, forested ridge, a distant dock and swim platform. **No signage.** |

**C3b:** every tile targets low single-storey shoreline structures — there are no tall buildings to
mis-magnify. **Zero legible text anywhere in the frame at native resolution.** This is the cleanest
candidate in the sweep on branding.

**C4 — identifiable private residences.** Honest flag: tiles L2 and L3 show, at native, features
that read as private domestic rather than commercial lodging — a children's swing set, a picnic
table, an attached garage with a boat on a trailer. At 0.2438x those details are **gone**: in the
delivered file the largest of these buildings is ~73 px wide and reads only as a lakeside cabin
roofline among several. No dwelling is identifiable in the shipped file and none is the subject.
Approved on that basis, with the flag recorded.

### Delivery crop

- **Crop:** `(0, 300, 6564, 3992)` of the native file — full width, shifted down 300 px to trim
  a thin band of flat upper sky and centre the cumulus.
- **Render:** 6564x3692 → **1600x900**
- **SCALE FACTOR: 0.2438x — a downscale. NO UPSCALE.**

### Destination honesty — read this before shipping

The photographer tagged this frame **Kalispell, MT**, not Whitefish. Kalispell is ~15 miles south
of Whitefish in the same valley. The file belongs to a single upload batch (Unix prefixes
`1708640576`, `1708640577`) whose other frames are tagged **Whitefish, MT** — the same photographer,
the same day, the same trip — so the frame is certainly **Flathead Valley, northwest Montana**, but
**I could not confirm the specific lake is Whitefish Lake.** Caption it to the region, not the town:
*"A lake in Montana's Flathead Valley."* Do not caption it "Whitefish Lake."

The primary (§1) has no such ambiguity — its Pexels title names Whitefish Lake explicitly and the
shoreline and ridge match.

### AI / provenance screen

Unsplash strips EXIF; confirmed — no Make/Model/exposure block on the downloaded file. The brief's
free substitute, the Unix timestamp in the filename prefix, gives `1708640576` → **2024-02-22**,
which matches the photo page's stated publish date of 22 February 2024. Honest limitation: a 2024
upload date is **not** a pre-generative provenance proof the way a 2018 date is, so that check
returns nothing useful here and I did not lean on it. Geometry instead: **6564 x 4376 = exactly
3:2**, an odd non-round long edge (6564) characteristic of a real sensor readout or a lens-correction
crop rather than generator output, which favours round dimensions. Content evidence: the cumulus
tower's internal shadowing is physically coherent, the water reflections invert the treeline
correctly, and the fir needles hold consistent high-frequency detail at 1:1 across the full 6564 px.
**Reasoned call: real photography.**

---

## 3. THIRD OPTION (documented, not nominated) — Pexels 8327281

- **URL (native, no query string):** `https://images.pexels.com/photos/8327281/pexels-photo-8327281.jpeg`
- **Fetch:** HTTP 200, 1,200,206 bytes. Native **4000 x 3000** (4:3).
- **Photographer:** Favorable Light Studios. Pexels License.
- **C1 — title to strip:** `"Peaceful view of Whitefish River with snow-capped mountains and autumn forest in Whitefish, Montana"`
- **Crop:** `(0, 500, 4000, 2750)` → 1600x900. **Scale 0.40x, downscale, no upscale.**

Opened and verified. The **most explicitly destination-named** asset found — the title places it in
Whitefish and the fresh-snow ridgeline behind is the Whitefish/Swan Range. Compliance is perfect:
zero buildings, zero signage, zero brand risk.

**Not nominated** because it fails the C5 saleability test that the brief puts first: overcast
flat light, a grey-white sky with no colour, a driftwood snag and a tangle of dead brush in the
foreground, and — decisively for a *condo* certificate — **no lodging of any kind in the frame.**
Hold it as a seasonal/secondary art asset, not as the hero.

---

## 4. THE REJECTION THAT MATTERS — Unsplash `photo-1708640577684-bfaf1bfde512`

**This was the best composition in the entire sweep and I am rejecting it.** Documented in full so
nobody re-finds it and ships it.

- **URL (native, no query string):** `https://images.unsplash.com/photo-1708640577684-bfaf1bfde512`
- **Page:** `https://unsplash.com/photos/pgdiEHFEgeg` — Lily Miller — location tag **"Whitefish, MT, USA"**
- **Native:** 4480 x 6720 (portrait). Unsplash License, not Unsplash+. Fetch 200, 6,592,259 bytes.
- **Source title:** `"a scenic view of a town surrounded by trees"`

**What it is.** An elevated summer view straight down onto the **Whitefish Mountain Resort village**
on Big Mountain: a full ski-village cluster of multi-storey condominium lodges with dormers,
balconies and gabled green roofs, chalets scattered up through the larches, mown ski runs, a
chairlift line, and the Flathead Range on the horizon. It is textbook C3/C3b/C3d — elevated, many
properties, no single building the subject, the destination's landscape behind the roofline. On
composition and saleability it beats both nominations.

**C3b fired exactly as the brief predicted: the LOW building carried the brand.** Five native tiles
were cut and opened. The tall lodges (tiles B, C) are clean — no nameplates. The findings were on
the low buildings and the mid-rise condo block:

| Native tile | Finding |
| --- | --- |
| `nz_A_baserow` (1900,4750 → 3100,5650) | **"ED & MULLYS / BAR • GRILL"** in large legible type across the fascia of the single-storey base-area building, plus a second **"ED & MULLYS"** post sign to its left. Third-party commercial retail signage. |
| `nz_B_goldlodge` (1400,4150 → 3050,4900) | Clean. No nameplate on the main lodge. |
| `nz_C_leftlodges` (0,3950 → 1550,5150) | Clean of text, but a **large car park full of vehicles** — the C5 failure mode. |
| `nz_D_midwhite` (1380,3300 → 2750,4000) | **"BITTERROOT"** in tall vertical type down the gable end of a condominium block. A **property nameplate** — the 1-in-15 case. |
| `nz_E_right` (3100,3250 → 4480,3900) | Two small unreadable post signs. Not a problem. |

**C3c — I converted the finds into DELIVERED pixels before rejecting, and reframed five times first.**

| Reframe | Crop (native) | Scale | ED & MULLYS | BITTERROOT | Verdict |
| --- | --- | --- | --- | --- | --- |
| a | 0,2450 → 4480,4970 | 0.357x | out of frame | in frame | see e |
| b | 0,1450 → 4480,3970 | 0.357x | out | in, plus village is cut in half | composition fails |
| c | 0,2050 → 4480,4570 | 0.357x | out | in | 75% trees, lodge cut at the bottom edge — C5 fail |
| d | 0,2900 → 4480,5420 | 0.357x | **in — "ED & MULLYS" readable at 1:1** | in | **fail** |
| **e (best)** | 0,2600 → 4480,5120 | 0.357x | **out of frame** | **53 x 107 delivered px** | **fail — see below** |
| f | 0,3950 → 4480,6470 | 0.357x | **in — 54 x 29 px, readable at 1:1, plainly readable at 6x** | out | **fail**, and dominated by a car park |
| g | 1900,2380 → 4480,3831 | 0.620x | out | out (excluded by x) | clean, but 70% dark forest with scattered houses, no sky, no lake, no ridgeline — **C5 saleability fail** |

**The measurement that decided it.** In reframe (e) — the only crop that is both clean of
ED & MULLYS and compositionally good — "BITTERROOT" occupies **53 x 107 px in the delivered
1600x900 file**, roughly 10 px per letter. I rendered that region from the delivered file at 1:1,
2x and 3x and opened all three. At 1:1 it reads as a dark gable with a faint vertical mark. **At 2x
it reads clearly as "BITTERROOT."** The brief's accepted precedent (Port Canaveral) was a mark that
"resolves at 3x"; this one resolves at 2x, and it is worse in kind — it is a **named condominium
building in a condominium certificate that guarantees no named property.** That is precisely the
implication C1 exists to prevent.

**Why no further reframe rescues it.** BITTERROOT sits at native x 1700–1850, geometrically
*between* the upper condo cluster and the main lodge. Any crop wide enough to keep the lodge cluster
must include x 1700; any crop that excludes x 1700 by starting further right necessarily includes
ED & MULLYS at x 2020 **at a larger scale factor**, because narrowing the crop raises the scale
(reframe f at 0.357x already renders the sign readable; a 0.60x crop renders it at ~89 px wide).
The two marks cannot both be excluded while keeping a saleable frame. Tested, not assumed.

**REJECT — visually verified.** Do not revisit.

---

## 5. Everything else opened — 16 candidates, all downloaded and opened with the Read tool

| # | Asset | Source / native | Opened | Verdict and reason |
| --- | --- | --- | --- | --- |
| 1 | Pexels 5728410 — Whitefish Lake boating | Pexels, 4096x2730 | yes | **PRIMARY — APPROVE** |
| 2 | Unsplash `…576952-a3852d32cc5c` — lakeshore + cumulus | Unsplash, 6564x4376 | yes | **ALTERNATE — APPROVE** |
| 3 | Pexels 8327281 — Whitefish River | Pexels, 4000x3000 | yes | APPROVE on compliance; **not nominated** — flat overcast, dead brush, no lodging (C5) |
| 4 | Unsplash `…577684-bfaf1bfde512` — WMR village | Unsplash, 4480x6720 | yes | **REJECT** — "BITTERROOT" nameplate 2x-readable in delivered file; "ED & MULLYS" retail signage in every alternative crop. Five reframes tested. |
| 5 | Unsplash `…566187-28a222d126a8` — summit over valley fog to Glacier peaks | Unsplash, 4032x3024 | yes | REJECT for this certificate — spectacular and brand-clean, but **zero lodging**; a pure summit landscape does not read as a condo stay. Genuine iPhone 12 MP geometry. Hold as art. |
| 6 | Unsplash `…212140-b8c68bbea166` — gondola over Whitefish town and lake | Unsplash, 5555x3888 | yes | REJECT. Native check was worth running and **cleared the gondola** — the cabin carries only the car number "11" and a plain white/orange livery, **no resort wordmark**. Rejected on C5 instead: heavily underexposed, hazy, murky; the town below is soft and low-contrast; a lift cable crosses the frame. Not premium. |
| 7 | Unsplash `…577898-0ceb92227f8a` — river, forest, hazy ridge | Unsplash, 4480x6720 | yes | REJECT — generic, hazy, no lodging, no destination proof |
| 8 | Unsplash `…078407-279ab7198356` — sunset through autumn leaves | Unsplash, 4000x1800 | yes | REJECT — pretty but could be anywhere; proves no destination, shows no lodging |
| 9 | Pexels 145465 — "waterfront resort with buildings by the lake" | Pexels, 6864x1744 | yes | REJECT on three counts: **a single named resort complex is the subject** (C3 fail), heavy lens flare with the left building in deep shade (C5), and **the location is unconfirmed** — the title says only "waterfront resort", the far shore and marina do not match Whitefish Lake with confidence |
| 10 | Pexels 19739305 — "snow-covered town, stream, mountains" | Pexels, 4082x5377 | yes | REJECT — **not Montana.** Red-brick clock-tower architecture, not Flathead Valley. Also power lines across the frame and drab winter light. Search-result noise. |
| 11 | Pexels 37948107 — aerial, lake and range | Pexels, 3840x2160 | yes | REJECT — beautiful, but **no lodging** and the title says only "Montana, USA"; the water body is not confirmed as Whitefish. Reads as Hungry Horse Reservoir. |
| 12 | Pexels 37948105 — same shoot | Pexels, 3551x1997 | yes | REJECT — same reasons as 11 |
| 13 | Pexels 37948106 — same shoot | Pexels, 3389x1905 | yes | REJECT — same reasons as 11 |
| 14 | Pexels 37948108 — peaks through birch | Pexels, 8160x4590 | yes | REJECT — foreground foliage clutter, no lodging, location unconfirmed |
| 15 | Pexels 38411877 — river, forest, hazy range | Pexels, 4288x2848 | yes | REJECT — washed-out sky, beetle-killed grey snags across the treeline, no lodging |
| 16 | Pexels 6133960 — calm lake and far range | Pexels, 4032x1908 (PNG) | yes | REJECT — pleasant but empty: no lodging, no destination marker, 2.11:1 native forces a side crop |

---

## 6. Searches run, and what supply actually looks like

Exactly the queries the brief specifies, no others of the forbidden kind:

| Query | Source | Results | Yield |
| --- | --- | --- | --- |
| `whitefish montana` | Pexels | 23 | 10 opened; **1 nomination**. Heavy "destination solvent" contamination — 4 of 23 results were **Priest River, Idaho**, 2 were **British Columbia**, 1 was **Rogla, Slovenia**, 1 was Missoula, 1 was a cabin interior. |
| `glacier national park lodge` | Pexels | 24 | **0 usable.** The query is poisoned: ~20 of 24 results are **Glacier National Park, British Columbia / Banff / Yoho / Moraine Lake / Emerald Lake**, i.e. the Canadian park of the same name. The remainder are named properties — "Prince of Wales Hotel", "Old Faithful Inn", Mount Rainier lodges — which fail the no-named-resort rule outright. |
| `whitefish montana` | Unsplash | 20, and **page 2 returns the identical 20** | 6 opened; **1 nomination**. The pool is exhausted at 20 items. |

**C2 confirmed, and sharpened.** Supply for Whitefish is singular, as predicted. The Unsplash pool
is literally 20 images and does not page. **4 of those 20 are Unsplash+** (Hans `EX3Mo3kFivc`,
Davey Gravy `U7KR0PbxmTY`, Kirsten Frank `Srrk-i15mv8`, Annie Spratt `XW5TVDNBxFE` and
`a34XW0ojQPw`) — paywalled and excluded under the zero-budget constraint, and they include the
lake-and-mountain frames most likely to have been strong. Named for the record; no purchase proposed.

**C6 confirmed.** `whitefish montana` on Pexels returned the human-written title that identifies the
primary as Whitefish Lake — the same mechanism that identified the Sedona primary. Bare
`whitefish montana` on Unsplash returned the two best compositions in the sweep (the village and
the lakeshore). Neither "villa", "condo", "vacation rental" nor any interior query was run.

**Central Avenue was avoided** per instruction — no candidate in this report contains Whitefish's
downtown storefronts.

**Glacier National Park was not used.** Every Glacier-adjacent result was either the wrong Glacier
(British Columbia) or a named historic hotel. Because no Glacier imagery is nominated, **no
"Glacier is 25+ miles east of Whitefish" disclosure is required** on the shipped assets. If a
Glacier frame is ever substituted in, that disclosure becomes mandatory.

---

## 7. Fetch mechanics — confirmations for the next agent

- **Pexels and Unsplash search pages via WebFetch: worked on the first call, both sources.** Plain
  curl was never attempted against a search page.
- **Native CDN fetch with NO query string: worked on the first call, every file, both CDNs.**
  10 Pexels natives and 7 Unsplash natives, all HTTP 200, no rate limiting, no User-Agent needed.
- **Unsplash photo pages via WebFetch** reliably return the `photo-<unix>-<hash>` filename, the
  location tag, the publish date and the Unsplash+ status. This is the cheapest way to resolve a
  gallery ID to a CDN filename and to screen out paywalled items before downloading.
- **Wikimedia / Commons / Openverse were not needed** and were not called. Pexels and Unsplash
  carried the whole sweep, as the brief predicts for this family.
- **Unsplash `?page=2` on a thin destination returns page 1 again.** Treat a repeated result set as
  proof the pool is exhausted rather than as a fetch failure.

---

## 8. Handoff checklist

1. Ship **Pexels 5728410**, crop `(0,0,4096,2304)` → 1600x900 at **0.3906x downscale**.
2. Alternate: **Unsplash `photo-1708640576952-a3852d32cc5c`**, crop `(0,300,6564,3992)` → 1600x900
   at **0.2438x downscale**.
3. **C1 — strip all source metadata.** Rename both files to neutral certificate-scoped names
   (e.g. `con-whi-hero.jpg`, `con-whi-alt.jpg`). Do not carry the Pexels title, the Unsplash alt
   text, the photographer name, or the `photo-<hash>` filename into the site.
4. Caption the primary to the town (Whitefish Lake is confirmed). Caption the alternate to the
   **region** only — "Montana's Flathead Valley" — because its location tag says Kalispell.
5. No attribution is legally required by either licence. No share-alike attaches. No retouching
   was performed and none is authorised.
6. Do **not** substitute `photo-1708640577684-bfaf1bfde512` (the Whitefish Mountain Resort village)
   however good it looks in a thumbnail. See §4.

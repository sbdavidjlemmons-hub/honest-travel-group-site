# Condo heroes + landing-page heroes — Image Report V3

**Date:** 2026-09-12
**Brief followed:** `research/IMAGE_BRIEF_V2.md` (condo rules C1–C8), `research/ART_DIRECTION_V3.md`
**Budget:** zero. No Unsplash+, no `premium_photo-`, no Getty, no paid stock proposed, no retouching.
**Scope:** rendered crops into `research/crops/` and this report. **Nothing in `img/`, `img/verified-certificates/` or any `.html` was touched.**
**Candidates downloaded at true native and opened with the Read tool:** 22, plus 14 magnified sub-crops.

---

## 0. READ THIS FIRST — the four landing heroes are NOT 16:9

The task specified rendering Part B at 1600x900. **The live files are four different aspect
ratios, none of them 16:9.** Judging them at 16:9 would have judged a crop that never ships.
Measured from the files on disk:

| Subject | Base `.jpg` | webp ladder | Aspect | Min. source crop region needed |
| --- | --- | --- | --- | --- |
| `hawaii-waikiki-sunset` | **1800x2700** | 480x720 / 800x1200 / 1200x1800 / 1600x2400 | **2:3 PORTRAIT** | ≥1800 x 2700 |
| `hawaii-condo-resort` | **1800x1350** | 480x360 / 800x600 / 1200x900 / 1600x1200 | **4:3** | ≥1800 x 1350 |
| `cabo-bluehour` | **1800x2400** | 480x640 / 800x1067 / 1200x1600 / 1600x2133 | **3:4 PORTRAIT** | ≥1800 x 2400 |
| `cruise-sunset` | **1600x1069** | 480x320 / 800x535 / 1200x802 / 1600x1069 | **~3:2** | ≥1600 x 1069 |

There is also a `-1200.jpg` in each set (the `<img>` fallback and the `og:image`). Markup is
`<picture><source type="image/webp" srcset="…480w,800w,1200w,1600w" sizes="100vw"><img …>`.

**Consequence for sourcing:** "3000px wide or better" is the wrong test for the two portrait
subjects. A 3000x2000 landscape source yields only a 1333x2000 portrait slice — an upscale.
Every crop below is stated as a region and a scale factor, and **every one is a downscale.**

**Two further facts found on disk, both relevant:**

1. `.hero .photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}` — the hero
   box re-crops the file at render time, and `.hero.shot::after` lays a navy gradient over it at
   **90% opacity on the left falling to 14% on the right**. The right-hand third of the frame is
   what a visitor actually sees. All five recommendations below carry their subject right of centre.
2. **The CURRENT `cruise-sunset` is already non-compliant and is live on cruise.html.** At the
   shipped 1200px fallback, **"REGAL PRIN…"** and the port of registry **"HAMILT…"** are legible
   across the stern. This is the exact failure that killed Carnival Glory and Celebrity Equinox.
   It is the strongest single reason to ship a replacement.

---

## 1. Verdict table

| # | Subject | Verdict | Source | Licence | Native | Rendered crop |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **CON-KTH** Kitty Hawk | **APPROVED** | Pexels 5345349 | Pexels License | 5884x3922 | `research/crops/V3_CON-KTH_1600x900.jpg` |
| 2 | **CON-SEV** Sevierville | **APPROVED — with a stated seasonal caveat** | Unsplash `photo-1708290178777-55f92dea1355` | Unsplash License | 8192x5464 | `research/crops/V3_CON-SEV_1600x900.jpg` |
| 3 | `hawaii-waikiki-sunset` | **APPROVED** | Pexels 5006981 | Pexels License | 9000x5996 | `research/crops/V3_hawaii-waikiki-sunset_1800x2700.jpg` |
| 4 | `hawaii-condo-resort` | **APPROVED** | Pexels 27135336 | Pexels License | 4000x2250 | `research/crops/V3_hawaii-condo-resort_1800x1350.jpg` |
| 5 | `cabo-bluehour` | **UNRESOLVED** | — | — | — | — |
| 6 | `cruise-sunset` | **APPROVED — subject deviation disclosed** | Pexels 19203595 | Pexels License | 3456x2304 | `research/crops/V3_cruise-sunset_1600x1069.jpg` |

Fetch URLs — **no query string**, these are the exact files brand-checked:

```
https://images.pexels.com/photos/5345349/pexels-photo-5345349.jpeg        # CON-KTH
https://images.unsplash.com/photo-1708290178777-55f92dea1355              # CON-SEV
https://images.pexels.com/photos/5006981/pexels-photo-5006981.jpeg        # waikiki-sunset
https://images.pexels.com/photos/27135336/pexels-photo-27135336.jpeg      # condo-resort
https://images.pexels.com/photos/19203595/pexels-photo-19203595.jpeg      # cruise-sunset
```

Reproduce every crop exactly:

```python
from PIL import Image
def cut(src,out,W,H,box):
    Image.open(src).convert("RGB").crop(box).resize((W,H),Image.LANCZOS).save(out,quality=93)

cut("pexels-photo-5345349.jpeg",   "V3_CON-KTH_1600x900.jpg",              1600, 900,  (0,1150,3300,3006))
cut("photo-1708290178777.jpg",     "V3_CON-SEV_1600x900.jpg",              1600, 900,  (900,1900,7236,5464))
cut("pexels-photo-5006981.jpeg",   "V3_hawaii-waikiki-sunset_1800x2700.jpg",1800,2700, (3100,0,7097,5996))
cut("pexels-photo-27135336.jpeg",  "V3_hawaii-condo-resort_1800x1350.jpg", 1800,1350, (900,0,3900,2250))
cut("pexels-photo-19203595.jpeg",  "V3_cruise-sunset_1600x1069.jpg",       1600,1069, (0,0,3448,2304))
```

| Crop | Region | Region size | Output | Scale | Upscale? |
| --- | --- | --- | --- | --- | --- |
| CON-KTH | (0,1150,3300,3006) | 3300x1856 | 1600x900 | **0.4848x** | none |
| CON-SEV | (900,1900,7236,5464) | 6336x3564 | 1600x900 | **0.2525x** | none |
| waikiki | (3100,0,7097,5996) | 3997x5996 | 1800x2700 | **0.4503x** | none |
| condo-resort | (900,0,3900,2250) | 3000x2250 | 1800x1350 | **0.6000x** | none |
| cruise | (0,0,3448,2304) | 3448x2304 | 1600x1069 | **0.4640x** | none |

---

## 2. PART A — the two condo certificate heroes

### 2.1 CON-KTH — Kitty Hawk / Outer Banks — **APPROVED**

**Photographer:** Tangie Bodden · **Licence:** Pexels License (free commercial, no attribution, no share-alike)
**Native:** 5884x3922 · **Crop:** `(0, 1150, 3300, 3006)` → 1600x900 at 0.4848x

**Why the current one was wrong, precisely.** The shipped `kitty-hawk-condo.jpg` is the Corolla
aerial from the V2 sweep. Opened at delivery size it is a dense grid of roofs shot **looking
inland** — Currituck Sound is on the horizon and **the ocean is behind the camera. There is no
water in the frame at all.** Dave's note ("Condos are okay, but closer to the water") is an exact
description of that defect, not a vague aesthetic complaint.

**What I actually saw at 100%.** A row of seven oceanfront cottages on the Nags Head dune line,
shot from the beach side with a long lens. The Atlantic fills an unbroken turquoise band directly
behind the roofs — wind-driven whitecaps running the full width — with clean blue sky across the
top ~25% and a sea-oats dune and maritime scrub across the bottom ~40%. The houses sit *between*
the camera and the water, which is the literal reading of "closer to the water". Cedar-shake and
pastel siding, white balcony rails, screened porches, exterior stairs. Seven-plus separate
properties, none dominant — **C3 satisfied; a many-property frame cannot imply a guaranteed unit.**

**Every piece of text or signage in frame, and whether it resolves.** I swept the whole facade row
at 2x native in two tiles (0,1700,1700,2350) and (1700,1700,3300,2350), then re-magnified the
**delivered** 1600x900 file at 5x on the busiest region. **There is no text anywhere in the frame** —
no nameplates, no house numbers, no rental-company boards, no retail. There is no commercial
frontage of any kind: this is a residential dune road, and the Myrtle Beach failure mode
(storefront signage along the bottom edge, 5 of 15 rejections) simply cannot fire here.

**The one honest blemish, disclosed.** The crop carries **one utility pole with a crossarm and a
transformer can** at roughly x=930 in the delivered file (≈4px wide, ≈60px tall), a second pole at
x≈1390, and **two overhead wires crossing the sky** at about y=95 and y=250 (≈1px each). They are
visible on close inspection, invisible at a glance, and invisible under the navy hero overlay.
I tested three alternative framings to remove them:
- `(3600,1450,5884,2735)` — drops the centre pole but reduces the frame to three houses, one
  dominant, with no sky. Reads as **private residences (C4 fail)**. Rejected.
- `(2400,1400,5884,3359)` — keeps a pole *and* loses the dune foreground. Worse.
- `(0,306,5884,3616)` (full width) — puts the heaviest pole dead centre. Worse.

The recommended crop is the best available trade. Retouching is not authorised and was not done.

**AI / provenance screen.** Pexels strips the camera block from everything it serves, so the
metadata half cannot be run — stated, not waved through. Geometry: **5884x3922 = 1.50038**, i.e. a
24MP full-frame 3:2 frame (6000x4000) less 116x78px — the asymmetric trim a straighten produces,
not a generator's round number. Optically, the depth-of-field falloff from near dune to cottage row
to horizon is continuous and the overhead wires are correctly catenary and unbroken. **Reasoned pass.**

**C1 — strip this metadata.** Pexels title: *"Charming beach houses overlooking sandy dunes and
ocean in **Nags Head**, North Carolina"*; filename `pexels-photo-5345349.jpeg`. Nags Head is ~10
road miles south of Kitty Hawk. Ship as `kitty-hawk-condo.jpg`, alt text
**"Outer Banks oceanfront beach-cottage community"** — region, never the town, never the source title.

---

### 2.2 CON-SEV — Sevierville, Tennessee — **APPROVED, with a stated seasonal caveat**

**Photographer:** Daniely Wright (@danielywright) · **Licence:** Unsplash License (free, no attribution, no share-alike)
**Native:** 8192x5464 · **Crop:** `(900, 1900, 7236, 5464)` → 1600x900 at 0.2525x
**Location stated by the photographer on the Unsplash page:** *Sevierville, TN, USA* · **Camera published:** Canon EOS R5

**Why the current one was wrong.** The shipped `sevierville-condo.jpg` is the V2 primary, and at
delivery size it is **pure landscape** — a green forested ridge with a single timber lodge reduced
to roughly 0.1% of frame area. It fails C4b (*check for lodging before checking for logos*): it is
attractive, unbranded, correctly located, and shows **nowhere to stay**. "I prefer something
better" is that gap.

**What I actually saw at 100%.** A long-lens compression of a **cabin cluster strung along a
wooded ridge** — I count nine to twelve large timber vacation lodges with metal and shingle roofs,
gables, stilts and wrap-around decks, staggered down the hillside — with **three ranges of the
Great Smokies stacked behind under fresh snow on the high tops** and a pale flat sky across the
top third. This is the purest condo-family frame available for the destination: many rental
properties, no single subject, the destination's signature landscape behind the roofline (C3/C3d).
It puts real lodging back in the frame, which is exactly what the current image lacks.

**Every piece of text or signage in frame.** Native tiles across the cabin band
(2000,3200,5600,4300) at 1:1, plus the earlier V2 sweep's four native tiles, show **no nameplates,
no entrance signs, no lettering of any kind on any structure.** Thin overhead utility spans run
between two of the cabins; at the delivered 0.2525x they are sub-pixel and invisible at 1:1. No
attraction landmark, no Parkway frontage, no Gatlinburg Space Needle, no SkyLift — the corridor
exclusions all hold.

**The caveat, stated plainly.** It is a **winter frame**: bare deciduous trees, snow on the high
ridges, a cool desaturated palette, and the bottom ~40% is a dark forested slope. It reads as a
premium winter mountain getaway rather than a summer one. That is on-message for the Smokies but
narrower than a green frame would be, and it is the reason this is "approved with a caveat" and
not an unqualified approval.

**What I tried instead, and why it failed.** Dave's note asks for the Little Pigeon River valley.
I ran `sevierville` bare on Pexels and opened the two valley candidates:
- **33938842** (8064x4536, "aerial view of lush green town") — **REJECT, C5.** It is Sevierville's
  commercial strip: metal warehouses, car parks, a fast-food unit with orange signage, a water
  tower, a highway. Technically compliant, completely unsellable.
- **4170455** (5464x3070, "outpost district") — **REJECT, C5 + destination doubt.** A four-lane
  highway junction with a gas station, power lines, brick apartment blocks and overcast sky. Not
  resort country and probably not Sevierville.
- `gatlinburg cabin` on Pexels returned single-cabin-in-the-woods compositions (**C3 fail by
  construction**) plus Gatlinburg townscapes excluded by the corridor rule.

**The valley-with-river frame the note asks for does not exist free-licensed.** The river
candidates are creek-bed close-ups that prove no destination and contain no lodging.

**AI / provenance screen.** Filename prefix `1708290178` decodes to **2024-02-18**, matching the
page's stated publish date. **8192x5464 is the exact native frame of the Canon EOS R5**, the camera
the page names. Long-lens atmospheric haze compresses correctly across three ranges and low-sun
shadow direction is consistent on every roof. **Pass.**

**C1 — strip this metadata.** Unsplash alt: *"a view of a mountain range with houses on it"*;
filename `photo-1708290178777-55f92dea1355`. Neither names a property. Ship as
`sevierville-condo.jpg`, alt **"Mountain cabins above the Great Smoky Mountains, Sevierville, Tennessee"**.

---

## 3. PART B — the four landing-page heroes

### 3.1 `hawaii-waikiki-sunset` — **APPROVED** (live on 12 pages)

**Photographer:** credited on Pexels as the uploader of 5006981 · **Licence:** Pexels License
**Native:** 9000x5996 · **Crop:** `(3100, 0, 7097, 5996)` → **1800x2700** at 0.4503x

**What I actually saw at 100%.** An elevated Waikiki sunset looking down the beach toward Ewa.
The sun is a low white disc roughly a third up the left edge, laying a hard specular column across
the water; the sky is a full pink-and-gold cumulus field filling the top half. Across the bottom
third, a **canopy of coconut palms** in warm silhouette. Between them, the curve of Waikiki beach,
a scattered line of surfers and swimmers, and the **Waikiki tower line** on the right — a large
balconied high-rise, the pink Spanish-Moorish mass of a historic beachfront hotel below it, and
further towers receding. Warm, premium, aspirational; unmistakably Waikiki. It matches the existing
alt text ("Palm trees and resort pool at sunset in Hawaii") on palms and sunset; there is no pool
in frame — the resort read comes from the tower line instead.

**Every piece of text or signage in frame, and whether it resolves.** The tower line is the only
brand risk and I checked it twice. At **2x native** on (5000,2200,6250,2800) the roofline is bare —
**no wordmark, no rooftop sign, no logo, no lettering on any facade or parapet.** Re-checked at
**3x on the delivered 1800x2700 file** across the whole tower band: still nothing. The lower-right
beach margin (6300,3400,7100,3900 at 3x native) resolves as sand, shorebreak and a palm crown —
no kiosk board, no banner. **Zero legible text anywhere in the delivered frame.**

**One disclosure.** The pink hotel is architecturally recognisable to anyone who knows Waikiki,
though it carries no legible name. That is the same class of judgement as the Carnival-funnel
question — but unlike a funnel mark it is a building, not trade dress, and **the frame contains
five-plus separate properties**, so no single one is implied. Comfortable.

**Portrait geometry.** The 2:3 crop is the binding constraint and this file clears it with room:
a 3997x5996 region downscales 0.4503x to 1800x2700. The 1600x2400 and 1200x1800 rungs follow.

**C1 — strip.** Pexels title: *"Vibrant tropical beachfront with palm trees and a resort
overlooking a warm sunset"*. Generic, names no property. Keep the existing alt text or use
**"Palm trees above Waikiki Beach at sunset, Oahu, Hawaii"**.

---

### 3.2 `hawaii-condo-resort` — **APPROVED** (live on condo.html, partners.html)

**Licence:** Pexels License · **Native:** 4000x2250 · **Crop:** `(900, 0, 3900, 2250)` → **1800x1350** at 0.6000x

**Why the current one was wrong.** The shipped `hawaii-condo-resort.jpg` is a drone frame of a
resort **under construction** — bare structural decking, scaffolding, a blue tarp, stacked building
materials, a skip and site workers occupy the right third. It is also a single contiguous property,
and despite alt text reading "Oceanfront condo resort" **there is no ocean in the frame at all.**
Three independent failures: C5, C3, and a factual mismatch with its own alt text.

**What I actually saw at 100%.** A golden-hour aerial down the Kaanapali coast on Maui. Four
separate resort buildings step along the shoreline — the nearest a white balconied block, then a
tile-roofed tower whose stacked lanai read clearly as **multi-room residential units**, then two
further blocks — each fronted by lawns, mature coconut palms and green terraces. A wide tan beach
curves the full width with surf breaking along it and a handful of walkers at the waterline; open
Pacific fills the right quarter. Behind, the **West Maui Mountains** rise through low cloud with
golden pasture on the lower slopes. Oceanfront, many-property, balconied — it reads as condominium
accommodation far more than the current frame does, and it is a textbook **C3 "shoot the strip,
not the resort"** composition.

**Every piece of text or signage in frame, and the reframe that was required.** The **full frame
fails.** At 3x native the westernmost tower carries a **large stylised monstera-leaf logo** on its
lift-core face — roughly 66x181 native px, high-contrast cream-on-white, and unmistakably a
property identity mark. That is branding under rule 8 even though it is a glyph rather than text.
**The recommended crop starts at x=900 and the logo sits at x≈527, so it is excluded entirely** —
a clean step-4a reframe recovery at zero cost. Everything remaining was swept at 2x native
(1800,880,3400,1500) and at 1:1 across the beach and terrace margins: **no nameplates, no
wordmarks, no retail signage, no vehicle lettering.** The people on the beach are 3–8px in the
delivered file and unidentifiable.

**Do not crop left of x=900 on this file.** That is the whole result, and it is the same discipline
as the Galveston "never crop past x=4980" rule.

**Resolution note, disclosed.** 4000x2250 is the smallest native in this report. The 4:3 crop is
3000x2250 → 1800x1350 at 0.6000x, a genuine downscale, so every shipped rung is clean. There is no
headroom for a larger hero than the existing 1800px base, but none is required.

**C1 — strip.** Pexels title: *"Aerial view of modern resorts on the Maui island in Hawaii"*.
Names no property. Alt: **"Oceanfront resort buildings and palms above a Maui beach"** — note the
current alt says "condo resort"; the honest description is "resort buildings".

---

### 3.3 `cabo-bluehour` — **UNRESOLVED**

**No compliant free-licence frame exists for this slot at the required geometry. I am reporting
that rather than shipping something worse than what is live.**

The slot needs four things at once: **beachfront resort pools**, **dusk/blue hour**, **Mexico**,
and a **3:4 portrait crop of at least 1800x2400**. Every free candidate found satisfies at most three.

| Query | What came back | Why it fails |
| --- | --- | --- |
| Pexels `cabo san lucas hotel` (24 results) | Pools and resorts — 4023389, 2373201, 1549121, 4023348, 4023393, 4023346, 4023383 | **All daytime.** The three aerials are 2223–2250px tall, so a 3:4 crop maxes at 1678x2238 — **an upscale to 1800x2400.** Two name properties in the caption (**Riu**, **Vidanta**) and are excluded on C8/C1 regardless. |
| Unsplash `cabo-san-lucas` (20 results) | El Arco, rock formations, beaches, aerials | **Zero resort-pool frames and zero dusk frames.** 5 of 20 are Unsplash+ (`premium_photo-`) and were not fetched. |
| Pexels `puerto vallarta hotel` (23 results) | 16487688 golden-hour beachfront (6000x4000) | Opened it: warm hillside condo blocks and palms, but **no pools**, a crowded public beach with many identifiable bathers in the foreground, and it is a sunset not a blue hour. |
| Pexels `cancun hotel sunset` (24 results) | 6 dusk frames | All are **beach-and-sea sunsets with no resort pools**. One names **Live Aqua**, one **Grand Oasis** — excluded on C1. |

**The structural reason.** Blue-hour resort photography is overwhelmingly commissioned property
marketing, which does not reach the free tiers; what free libraries hold for Mexico is daytime
aerials and natural-landmark sunsets. This is a gap in what exists free, not merely what is cheap.

**Worth saying: the image currently live is good.** `cabo-bluehour.jpg` is a genuinely premium
blue-hour frame — lit pools, beach, headland, a deep blue-to-pink sky. Its one real defect against
the brief is that **a single resort tower dominates the right third**, which is a C3 failure and a
soft C1 implication. But it is far better than any free replacement I found, and swapping it for a
daytime Cancun aerial or an upscaled Cabo frame would make the page worse.

**Recommendation: leave `cabo-bluehour` in place for now** and treat the single-tower composition
as a disclosed, accepted deviation, or re-point the slot to a *dusk beachfront* brief without the
pool requirement — which `16487688` could satisfy after a people-avoiding reframe. I did not
render that, because it changes the slot's brief rather than filling it, and that is a call for
the owner, not for me.

---

### 3.4 `cruise-sunset` — **APPROVED, with a disclosed subject deviation** (live on cruise.html)

**Licence:** Pexels License · **Native:** 3456x2304 · **Crop:** `(0, 0, 3448, 2304)` → **1600x1069** at 0.4640x

**Why replacing the current one is urgent.** As recorded in §0, the live file shows
**"REGAL PRIN…"** and **"HAMILT…"** legible on the stern at the shipped 1200px size. That is a
legible ship name and port of registry on a page that sells cruise certificates — the precise
failure the project rejected Carnival Glory, Celebrity Equinox and Norwegian Dawn for.

**What I actually saw at 100%.** A clean golden maritime sunset. The sun sits high-right as a
bright disc in an unbroken amber gradient that fills the top two-thirds; its reflection runs down
the centre-right to the bottom edge across gently rippled water. A **passenger vessel in complete
backlit silhouette** crosses left of centre at about 26% of frame width, with passengers visible as
a dark serrated line along the open upper deck and a small flag at the stern. **There is no text
anywhere in the frame and there cannot be** — the vessel is a flat black shape with zero tonal
separation. I magnified the hull at 4x native (700,1250,1750,1700): no name, no funnel mark, no
registration, no livery break, no colour. This is the structurally safest framing in the whole
project, the same logic that approved the AIR-SJU sunset silhouette.

**Overlay quality.** Outstanding — roughly 65% of the frame is a smooth amber gradient with no
detail, and the hero's navy gradient will sit over it cleanly. Better than the current file, whose
ship occupies the entire right half.

**The deviation, stated plainly and not buried.** The vessel is a **twin-deck day-excursion /
tour boat, not an ocean cruise ship.** It satisfies the task's "cruise **or maritime** scene at
sunset" and it satisfies the no-legible-name rule with more margin than anything else tested, but
it does not depict an ocean liner. The current alt text *"Cruise ship at sea during sunset"* would
be inaccurate over it and **must be changed** — suggest **"Passenger vessel at sea during sunset"**
or **"Sunset over open water"**.

**What I rejected to get here — every large free cruise-at-sunset frame is branded:**

| Candidate | Native | Verdict |
| --- | --- | --- |
| Pexels **11820070** (Grenada sunset, broadside) | 5184x3456 | **REJECT.** Beautiful pink-gold sky, but **"GRANDEUR OF THE SEAS"** is legible on the bow at 3x native. Ship is ~82% of frame width, so no crop both keeps the ship and drops the name. |
| Pexels **15131404** (crepuscular rays, ship on horizon) | 7294x4868 | **REJECT.** Norwegian Joy. The **saturated multi-colour hull artwork** (red/teal/gold swirls) is ~286px wide in the delivered file. Per C3c-bis saturated colour survives resampling where grey does not — this resolves as NCL trade dress. |
| Pexels **32609062** (aerial, open sea) | 3817x2545 | **REJECT.** Carnival Firenze — **"Carnival Fire…"** legible on the hull plus the yellow-and-blue funnel. The whale-tail rule. |
| Pexels 39467441 / 39467424 | — | Not fetched: captions name **Norwegian Jewel**. |

**AI / provenance screen.** Pexels strips the camera block. Geometry **3456x2304 = exactly 3:2**,
a native APS-C/full-frame 8MP-class frame, not a generator dimension. The sun's specular column is
optically continuous into the foreground ripple and the silhouette edge carries correct atmospheric
flare. **Reasoned pass.**

---

## 4. Everything opened, and why each failed

22 candidates downloaded at true native (no query string) and opened with the Read tool.

| # | Candidate | Subject | Native | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Pexels 5345349 | CON-KTH | 5884x3922 | **APPROVED** |
| 2 | Unsplash photo-1628814707477 | CON-KTH | 3089x2048 | REJECT — dune/sea only, no lodging (C4b) |
| 3 | Unsplash photo-1708290178777 | CON-SEV | 8192x5464 | **APPROVED (caveat)** |
| 4 | Pexels 33938842 | CON-SEV | 8064x4536 | REJECT — C5, commercial strip, warehouses, car parks |
| 5 | Pexels 4170455 | CON-SEV | 5464x3070 | REJECT — C5, highway junction, gas station, overcast |
| 6 | Pexels 5006981 | waikiki | 9000x5996 | **APPROVED** |
| 7 | Pexels 26763125 | waikiki | 8217x5478 | REJECT — C5, heavily underexposed; lit commercial stand at right edge |
| 8 | Pexels 16043741 | waikiki | 6000x4000 | Not advanced — 2:3 crop maxes 2666x4000, works, but composition duplicates #6 with less sky |
| 9 | Pexels 4321940 | waikiki | 2702x3377 | REJECT — portrait 2251x3377 max is an upscale to 1800x2700 |
| 10 | Pexels 5007279 | waikiki | 9000x7200 | Not advanced — top-down beach aerial, no sunset sky |
| 11 | Unsplash photo-1687960506414 | waikiki | 4441x7896 | REJECT — top-down beach aerial: no pool, no sunset, crowd of identifiable bathers |
| 12 | Unsplash photo-1507876466758 | waikiki | 5970x2865 | REJECT — 2.08:1 panorama; 2:3 crop maxes 1910x2865, marginal, and no sunset |
| 13 | Pexels 27135336 | condo-resort | 4000x2250 | **APPROVED** after logo-excluding reframe |
| 14 | Pexels 13893946 | condo-resort | 5616x3744 | **REJECT — branding.** Three legible boards at the pool: **"FREE SNUBA POOL DEMO 11AM HERE"** with a SNUBA logo, an "ALOHA" chalkboard, a four-star plaque. Dead centre; no 4:3 crop keeps the pool and drops them. |
| 15 | Pexels 12597258 | condo-resort | 2160x3234 | Not advanced — 4:3 max 2160x1620, tight; superseded |
| 16 | Pexels 15262833 | condo-resort | 4608x3456 | Not advanced — superseded by #13 |
| 17 | Pexels 12991666 | cabo | 4000x6000 | REJECT — clear blue sky, daytime; not blue hour |
| 18 | Pexels 18907101 | cabo | 3934x3934 | REJECT — rocky coast, no resort, no pools |
| 19 | Pexels 16541176 | cabo | 3979x2238 | REJECT — **3:4 crop maxes 1678x2238 = upscale**; also sunset not dusk |
| 20 | Pexels 16487688 | cabo | 6000x4000 | REJECT — no pools; crowded beach with identifiable bathers |
| 21 | Pexels 30991413 | cabo | 6000x4000 | REJECT — "blue skies", daytime |
| 22 | Pexels 19203595 | cruise | 3456x2304 | **APPROVED (deviation disclosed)** |
| 23 | Pexels 11820070 | cruise | 5184x3456 | REJECT — "GRANDEUR OF THE SEAS" legible at 3x |
| 24 | Pexels 15131404 | cruise | 7294x4868 | REJECT — Norwegian Joy saturated hull artwork |
| 25 | Pexels 32609062 | cruise | 3817x2545 | REJECT — Carnival Firenze wordmark + funnel |

### Rejection causes, tallied

| Cause | Count |
| --- | --- |
| **Not premium / not vacation-selling, or no lodging (C5 / C4b)** | **7** |
| **Legible third-party branding** | **4** |
| Geometry — source too small for the required portrait crop | 3 |
| Wrong subject (no pools / no dusk / no sunset) | 5 |

**C5 led again, but branding fired far harder than in the condo sweeps** — 4 of 19 rejections,
all four in the cruise and resort-pool families. That is consistent with the brief: branding is a
formality on inland condo destinations and the dominant risk on ships and resort pool decks.

---

## 5. Search vocabulary — measured this sweep, worth adding to the brief

1. **`nags head` on Unsplash is the strongest homograph trap found to date.** 15 results, of which
   **eight are sculptural head busts** ("head bust form", "gray concrete face bust", "man's head
   bust", "grey ceramic woman's face bust figurine") plus a clothes iron and two desert portraits.
   Two are plausibly Outer Banks. This is worse than `pigeon forge` → pigeons and worse than
   `hunter` → eagle hunters, because *both* words are common nouns. On the Outer Banks, go to
   **Pexels `outer banks hotel`**, which returned the approved file at position 4 with an accurate
   human-written title naming the town.
2. **`outer banks` on Unsplash is 5 of 20 Unsplash+.** The paywalled items are exactly the aerial
   beach frames the brief wants, which is the pattern the V2 notes predicted.
3. **`sevierville` bare on Pexels behaves nothing like `sevierville` bare on Unsplash.** Unsplash
   returns the drone landscape work that produced both V2 nominations; Pexels returns the town's
   commercial strip plus **four Chattanooga frames** (a 150-mile destination solvent) and several
   Gatlinburg frames excluded by the corridor rule.
4. **`<destination> hotel` on Pexels remains the best caption source** — it was decisive twice
   here. `waikiki hotel` returned titles explicitly naming **Hilton Hawaiian Village**, **Royal
   Hawaiian** and **Grand Oasis**, letting me exclude C8 ownership traps *before* fetching. The
   human-written title is the cheapest compliance filter available.
5. **The word "sunset" is a reliable, non-solvent modifier** — `waikiki sunset` and
   `cruise ship sunset` both returned 24 on-subject results with no destination drift. Unlike
   "hotel", "villa" or a state name, a light-condition word does not dissolve the place.

---

## 6. Compliance summary

| Requirement | KTH | SEV | waikiki | condo-resort | cabo | cruise |
| --- | --- | --- | --- | --- | --- | --- |
| Downloaded at true native, **no query string** | Yes | Yes | Yes | Yes | n/a | Yes |
| Opened with the Read tool | Yes | Yes | Yes | Yes | Yes (5) | Yes |
| 100% rule run at native | Yes, 2 tiles @2x | Yes, 1:1 + V2 tiles | Yes @2x | Yes @3x/2x | n/a | Yes @4x |
| C3c re-check in the **delivered** file | Yes @5x | Yes | Yes @3x | Yes | n/a | Yes |
| No legible property name | Confirmed | Confirmed | Confirmed | Confirmed after reframe | — | Confirmed |
| No third-party commercial signage | Confirmed | Confirmed | Confirmed | Confirmed after reframe | — | Confirmed |
| C3 — no single building is the subject | Yes, 7+ | Yes, 9–12 | Yes, 5+ | Yes, 4 | — | n/a |
| C4 — no identifiable private residence as subject | Yes | Yes | n/a | n/a | — | n/a |
| C5 — premium, vacation-selling | Yes | Yes, seasonal caveat | Yes | Yes | — | Yes |
| Correct delivered aspect ratio | 16:9 | 16:9 | **2:3** | **4:3** | — | **~3:2** |
| Upscale | **None, 0.4848x** | **None, 0.2525x** | **None, 0.4503x** | **None, 0.6000x** | — | **None, 0.4640x** |
| Licence | Pexels | Unsplash | Pexels | Pexels | — | Pexels |
| Zero budget held | Yes | Yes | Yes | Yes | Yes | Yes |
| Retouching | None | None | None | None | — | None |
| Source caption recorded for stripping (C1) | Yes | Yes | Yes | Yes | — | Yes |

---

## 7. Notes for whoever ships these

1. **Nothing in `img/` was touched.** Rendering the production ladder (`-480/-800/-1200/-1600`
   webp plus `-1200.jpg` and the base `.jpg`) from these five crops is a separate, permissioned job.
2. **Re-check the alt text, not just the picture.** Two slots ship with alt text that will be wrong
   after the swap: `cruise-sunset` ("Cruise ship…" over a tour boat) and `hawaii-condo-resort`
   ("Oceanfront condo resort…" over resort buildings). The current `hawaii-condo-resort` alt is
   *already* wrong — it says "oceanfront" over a frame with no ocean.
3. **`cabo-bluehour` is the honest gap.** Do not let a later pass quietly fill it with a daytime
   Cancun aerial. If the slot must change, change its brief deliberately.
4. **The logo exclusion on `hawaii-condo-resort` is load-bearing.** Never crop left of x=900.
5. **The four landing subjects are four different aspect ratios.** Any future sweep that renders
   them all at 16:9 is judging a frame that never ships. This is now written down.

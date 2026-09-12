# CON-VAB — Virginia Beach Condo — Image Report V2

**Certificate:** CON-VAB / `virginia-beach-condo` / Virginia Beach Condo
**Destination:** Virginia Beach, Virginia
**Family:** Condo (20)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch. Condo rules C1–C7 applied.
**Date:** 2026-09-12
**Budget:** zero. No Unsplash+, no Getty, no `premium_photo-`, no retouching.
**Scope:** IMAGE ONLY. No pricing work in this report.

---

## 1. Verdict

| Slot | Asset | Source / creator | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1573510460136-8a26ce45ed2c` (page `unsplash.com/photos/z2S3nhDwWZ8`) | Unsplash — **Daniel Halseth** | Unsplash License (free, **not** Unsplash+) | 3992 x 2242 | **YES — visually verified**, 100% rule run at native + 3x/4x/10x/12x, and re-run on the delivered file |
| **ALTERNATE** | `photo-1550381131-750d7f8a683d` (page `unsplash.com/photos/awc6nE7cAoY`) | Unsplash — **Marshall Williams** | Unsplash License (free, **not** Unsplash+) | 5635 x 3747 | **YES — visually verified**, 100% rule run at native + 2x/3x/4x/6x, and re-run on the delivered file |

Both photo pages state the location as **Virginia Beach, VA**. Both show **many properties, not one**,
so neither can imply the guaranteed resort the certificate does not promise.

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact bytes that should ship:

```
https://images.unsplash.com/photo-1573510460136-8a26ce45ed2c      # PRIMARY
https://images.unsplash.com/photo-1550381131-750d7f8a683d         # ALTERNATE
```

**The Virginia Beach caution in the commission was correct.** The destination is the structural twin of
Myrtle Beach and it resolved the same way: a **drone frame of the oceanfront tower line at dusk**.
The governing rule held again — see §5.

**One disclosure on the PRIMARY, and a one-step swap if the coordinator disagrees.** The primary
carries a **Marriott griffin that measures 12 x 10 px in the delivered 1600x900 file** (§3.2). The
alternate carries **no third-party mark at any magnification tested**. If the coordinator takes a
stricter line than C3c allows, **swap the two** — the alternate is independently APPROVED, needs no
disclosure, and is rendered and inspected in this report. Nothing else changes.

---

## 2. Delivery crops — rendered with PIL, opened, and inspected

| Slot | Crop from native | Crop size | Output | **Scale factor** | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(700, 0) → (3992, 1852)` | 3292 x 1852 | 1600 x 900 | **0.4860x (downscale)** | **none — no upscale** |
| ALTERNATE | `(0, 577) → (5635, 3747)` | 5635 x 3170 | 1600 x 900 | **0.2839x (downscale)** | **none — no upscale** |

Both are pure downscales. **No candidate in this run required an upscale above 1.0x.**

Reproduce exactly:

```python
from PIL import Image

im = Image.open("photo-1573510460136-8a26ce45ed2c.jpg")          # PRIMARY
im.crop((700, 0, 3992, 1852)).resize((1600, 900), Image.LANCZOS).save("con-vab-primary.jpg", quality=92)

im = Image.open("photo-1550381131-750d7f8a683d.jpg")             # ALTERNATE
im.crop((0, 577, 5635, 3747)).resize((1600, 900), Image.LANCZOS).save("con-vab-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/vab/DELIVER_A.jpg   # PRIMARY
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/vab/DELIVER_B.jpg   # ALTERNATE
```

Nothing was written into the repository except this report.

### What the PRIMARY frame shows
A drone frame at dusk looking south down the Virginia Beach oceanfront. The high-rise strip runs
down the left edge and recedes for several kilometres to a vanishing point at centre-left; the
Boardwalk, the dune line and a very wide pale beach run beside it; the Atlantic fills the right half
with a small cargo vessel on the horizon. The sky is a clean blue-to-pink dusk gradient.
**Overlay space:** the top ~45% is unbroken graduated sky and the right ~50% is unbroken ocean.
Two very large low-detail regions. Excellent.

### What the ALTERNATE frame shows
Golden hour from the Boardwalk at beach level. The oceanfront hotel and condominium line runs down
the left edge in receding perspective — roughly a dozen distinct buildings — with the Boardwalk, its
fluted lamp standards and coloured pennants along their base; a very wide raked beach across the
bottom; the Atlantic and a ship on the horizon at right. The sky is a pastel lilac-to-apricot wash.
**Overlay space:** roughly the top 65% of the frame is clean sky. Outstanding.

### Reframing that was performed (step 4a)
**The PRIMARY was recovered by reframe, not accepted as shot.** The full native frame carries a
**fully legible green "Holiday Inn Express" logo and wordmark** on a rooftop parapet at native
`(450–580, 1995–2035)` — readable at **1:1**, not merely at high zoom. The published crop starts at
native `x = 700` and stops at native `y = 1852`, which drops that sign on both axes. The same cut
also removes a second small green sign at native `(≈30, ≈2070)`, several surface car parks and the
Pacific Avenue retail block — the C3b failure region. The crop is strictly better than the original
on both compliance and saleability, and the licence already covers it. Cost: zero.

---

## 3. The 100% rule — what was actually magnified

Every file was fetched **with no query string**. Unsplash served true native in both cases
(1.50 MB / 2.30 MB). All crops were taken from the **native** file unless the row says "delivered".

### 3.1 PRIMARY — `photo-1573510460136-8a26ce45ed2c`

| Region checked | Rect | Zoom | Result |
| --- | --- | --- | --- |
| Bottom-left city block (original frame) | native (0, 1450, 1200, 792) | **1:1** | **FAIL — "Holiday Inn Express" logo + wordmark legible at 1:1.** Reframed out (§2). |
| Same block re-check | native (250, 1600, 650, 450) | 3x | Confirms the above; also surface car parks and a blue street sign. All reframed out. |
| Teal tower + near strip (inside the crop) | native (700, 1400, 700, 500) | 4x | **Clean.** Tower carries a plain green LED crown band, **no nameplate, no logo**. |
| Mid-distance strip (inside the crop) | native (1150, 1050, 750, 500) | 4x | **Marriott griffin found.** See 3.2. No other mark resolves. |
| Marriott mark, native | native (1700, 1100, 120, 100) | 10x | Red griffin on a white board, unmistakable at native. **≈26 x 17 native px.** |
| Suspect pink sign, parking garage | native (1060, 1430, 140, 70) | **12x** | **False alarm.** Two lines of pink/maroon type; **no letterform resolves even at 12x**. Not legible at any magnification. |
| **Delivered file — bottom-left quadrant** | delivered (0, 620, 560, 280) | 4x | Clean. Facades are texture. Green LED band renders as a plain green line. |
| **Delivered file — bottom-left** | delivered (0, 540, 400, 360) | **1:1** | **Clean. Nothing legible anywhere.** |
| **Delivered file — Marriott region** | delivered (470, 520, 110, 90) | 10x | Red griffin still identifiable *at 10x*; see measurement below. |

### 3.2 Disclosure — Marriott griffin in the PRIMARY

A red Marriott griffin on a white rooftop board sits on a mid-distance tower at native
`(≈1746–1772, ≈1145–1162)`, about **26 x 17 native px**.

**Measured in the shipped 1600 x 900 file** (C3c — the rule cuts both ways): centre ≈ `(514, 561)`,
size **≈12 x 10 px**. Re-cropped that region of the **delivered** file and magnified it 10x: the
griffin is still identifiable *under 10x magnification of the shipped file*, but at **1:1 it is a
red dot** roughly the size of a full stop — no griffin silhouette, no wordmark, no "Marriott" text
anywhere in the frame at any size. It sits in a dusk cityscape that will additionally carry a
translucent hero overlay.

**Comparison to the accepted precedent:** the Myrtle Beach alternate shipped with a **14 px** SkyWheel.
This is **12 px** and, like that one, unresolvable at 1:1.

**Reframe was attempted and rejected on merit, not skipped.** The griffin is on the *mid-distance*
part of the strip. Excluding it requires either `x > 1772` (which discards the entire near strip —
the strip is on the left) or `y < 1145` (which is above the coastline entirely). A third option, a
tight near-strip window at `(700, 1200, 2552, 2242)`, needs a **0.864x** crop that throws away the
receding vista and 80% of the sky, and pulls the street-level retail block back into frame. **Every
reframe that removes the griffin is worse on both composition and branding.** Disclosed instead.

**Honest statement of the trade-off:** this is the one judgement call in the run. The griffin is a
real third-party hotel mark, and it is below resolution in the shipped file. C3c says to measure in
the delivered pixels, and the delivered pixels say "not legible". If the coordinator's standard is
"no third-party mark present at any magnification of the source," the primary fails that standard
and the alternate passes it — **swap them; the alternate is fully approved and rendered below.**

### 3.3 ALTERNATE — `photo-1550381131-750d7f8a683d`

| Region checked | Rect | Zoom | Result |
| --- | --- | --- | --- |
| Foreground tower upper facade + clock tower | native (0, 1900, 1400, 1000) | **1:1** | **Clean.** Green tile roof, cupola clock, balcony stacks. **No name band, no logo.** |
| Foreground tower mid facade | native (0, 2600, 800, 550) | 4x | **Clean.** Plain rendered facade and balcony rails. Nothing. |
| Boardwalk-level retail band, west section | native (100, 3120, 800, 300) | **4x** | **Clean.** Navy/gold awnings, blue/green awnings, lit shopfronts. **No wordmark resolves.** |
| Boardwalk-level retail band, east section | native (900, 3120, 800, 300) | **4x** | **Clean.** Tiki thatch, pennants, a blue backlit panel. **Nothing legible.** |
| Full base band | native (0, 3050, 1600, 450) | 2x | Clean. |
| Mid-distance strip | native (1400, 2900, 600, 300) | **6x** | **Clean.** Rooflines, balconies, a blue gable. No lettering. |
| Farthest towers | native (1900, 3000, 600, 250) | **6x** | **Clean.** Distant towers and a construction crane. No lettering. |
| Beach furniture and bins | native (2400, 3050, 1200, 450) | 3x | **Clean.** Lifeguard stand, umbrellas, blue/white bins — all unbranded. |
| **Delivered file — base retail band** | delivered (0, 600, 700, 300) | 4x | **Clean.** Retail is a soft band of lit awnings and flags. Nothing legible. |

**Result: no legible third-party mark found anywhere in the ALTERNATE at any magnification tested,
on the native file or the delivered file.** This is the cleanest frame in the run.

**C3b was obeyed on both finalists.** The low buildings and the street-level retail — not the towers —
were the regions magnified hardest (4x–12x). That is where the only real hit came from: the primary's
Holiday Inn Express sign is on a *low* rooftop parapet, and it was legible at **1:1**. An agent who
had magnified the towers would have found nothing and shipped that sign.

### 3.4 AI screen

Neither Unsplash CDN file carries EXIF — `getexif()` returns **0 keys** on both. Unsplash strips EXIF
exactly as Pexels does, so the camera-metadata half of the screen cannot be run **on the file**.
Three independent substitutes were run instead, and all three pass:

1. **Camera stated on the photo page.** PRIMARY: **DJI FC220** (the Mavic Pro camera). ALTERNATE:
   **NIKON D3200**. Unsplash publishes the EXIF it strips from the CDN copy; both are real,
   period-correct bodies.
2. **Unix upload timestamp in the filename.** `1573510460` → **2019-11-11T22:14:20Z**;
   `1550381131` → **2019-02-17T05:25:31Z**. **Both cross-check exactly against the publish dates
   stated on their own photo pages** (November 11, 2019 and February 17, 2019). Both predate
   photorealistic generative imagery by years.
3. **Sensor geometry.** 3992 x 2242 is a 12 MP DJI FC220 frame (4000 x 3000) cropped to 16:9
   (4000 x 2250) with a few pixels trimmed — a real drone readout. 5635 x 3747 is a Nikon D3200
   24 MP frame (6016 x 4000) cropped ~6%. Neither lands on a generator dimension (diffusion output
   sits on multiples of 64/128 — 1024, 1536, 2048, 4096).

**Reasoned pass, documented as a reasoned call.** Not an unexamined pass.

### 3.5 C1 — source titles recorded so they can be stripped

| Slot | Unsplash title / alt text | Filename | Location field |
| --- | --- | --- | --- |
| PRIMARY | **"seashore skyline scenery"** | `photo-1573510460136-8a26ce45ed2c` | "Virginia Beach, VA, USA" |
| ALTERNATE | **"seashore during golden hour"** | `photo-1550381131-750d7f8a683d` | "Virginia Beach, VA, United States" |

**Neither title names a property** — a materially lower C1 risk than Sedona's "Villas of Arroyo Roble
resort". But the rule is unconditional: **re-caption generically, rename the file, and carry no source
metadata — title, filename or alt text — through to the site.**

Suggested captions and filenames:

- PRIMARY — `con-vab-oceanfront-dusk.jpg`, alt: *"The oceanfront high-rise strip at dusk, Virginia Beach, Virginia."*
- ALTERNATE — `con-vab-boardwalk-sunset.jpg`, alt: *"The oceanfront and boardwalk at sunset, Virginia Beach, Virginia."*

Attribution is not required by the Unsplash License, but crediting Daniel Halseth / Marshall Williams
is courteous and carries no compliance cost.

---

## 4. Every candidate opened

**16 distinct source images were downloaded at native resolution and opened with the Read tool**
(requirement: 12), plus **20 derived crops and delivery renders** opened. No candidate was judged on
metadata alone.

| # | Asset | Source / creator | Source title (recorded per C1) | Native | Opened | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `photo-1573510460136-8a26ce45ed2c` | Unsplash / Daniel Halseth | "seashore skyline scenery" | 3992x2242 | yes | **APPROVE — PRIMARY, visually verified.** Reframed to drop a 1:1-legible Holiday Inn Express sign. 12px Marriott griffin disclosed. |
| 2 | `photo-1550381131-750d7f8a683d` | Unsplash / Marshall Williams | "seashore during golden hour" | 5635x3747 | yes | **APPROVE — ALTERNATE, visually verified.** No mark found at any magnification. |
| 3 | `photo-1724346986196-f4f44c479a55` | Unsplash / Sherebyah Tisbi | "A group of people walking down a sidewalk next to a beach" | 2748x1835 | yes | **HOLD — 3rd place.** Genuine VB Boardwalk (same fluted railing and pennant standards as #2, which corroborates #2's location). Unbranded. Killed by **C5**: flat grey overcast sky, ~20% sky area, and the right edge is dominated by one tower. Not premium, not vacation-selling. Smallest native in the set. |
| 4 | `photo-1656599752769-4b2db877ddf9` | Unsplash / Kristinah Archer | "a beach with houses and trees" | 4000x2250 | yes | **REJECT — C4 plus C5.** North End aerial: the foreground is a block of **identifiable private residences** with visible pools and driveways. Reads as a residential real-estate aerial. Flat overcast sky; the resort strip is a distant haze. |
| 5 | `photo-1617930760677-0b99aeac1100` | Unsplash / Adria Parham | "white and blue concrete building during night time" | 3000x4000 | yes | **REJECT — worst branding seen this run.** A large illuminated **"Hilton Garden Inn"** sign fills the left foreground, plus **"GUSTO ITALIAN"**, a second **"Hilton"**, and **"FISH BOYS"**, all legible. Car parks fill a third of the frame. Portrait. Uncroppable — the named building *is* the foreground. |
| 6 | `photo-1695609768244-399cface4b17` | Unsplash / Jeff McLain | "a statue of a man holding a fish near the ocean" | 5184x3456 | yes | **REJECT on subject.** The King Neptune statue fills the frame as **the subject**. The commission permits King Neptune as a destination cue only *if it appears small*; here it is the entire photograph and there is no resort or condominium in frame at all. Condo family requires a resort/condominium exterior. |
| 7 | `photo-1766848377814-a89c782e1d6c` | Unsplash / Marshall Williams | "Wooden path leads to people on a sunny beach" | 5810x3863 | yes | **REJECT on subject.** Beach mat, sand, sun glitter. Beautiful, completely unbranded, and contains **no building whatsoever** — proves no destination and sells no condominium. |
| 8 | `photo-1573510460542-b08e8f9deb8a` | Unsplash / Daniel Halseth | "aerial photograph of beach" | 3992x2242 | yes | **REJECT on subject.** Sibling frame from the primary's flight (upload timestamps 82 seconds apart). Straight-down surf and dune; no buildings. |
| 9 | Pexels **29500107** | Pexels / Dumitru B | "People enjoying a sunny day at a busy beach near waterfront hotels and buildings" | 3216x2136 | yes | **REJECT on destination — this is Ocean City, Maryland, not Virginia Beach.** Identified by the blue-cupola resort block and the low pastel skyline. Also carries a **large green Holiday Inn logo** mid-frame. |
| 10 | Pexels **12843137** | Pexels / Prathsnap | "A vibrant cityscape along the coast with blue sky and lively beach crowds" | 6240x4160 | yes | **REJECT on destination — Ocean City, Maryland.** Same blue-cupola block as #9. |
| 11 | Pexels **12843136** | Pexels / Prathsnap | "Peaceful beach scene with city buildings and a vast ocean under a serene sky" | 6240x4160 | yes | **REJECT on destination — Ocean City, Maryland.** Same set. |
| 12 | Pexels **12843135** | Pexels / Prathsnap | "Scenic view of a beachfront with buildings and a colorful water tower" | 6240x4160 | yes | **REJECT — Ocean City, Maryland, plus C3b retail.** "CANDY KITCHEN", "OCEAN WAVES", "SUNS" and more legible along the base; the Ocean City water tower is unmistakable. |
| 13 | Pexels **12843138** | Pexels / Prathsnap | "Coastal scene featuring a beach resort and colorful water tower" | 6240x4160 | yes | **REJECT — Ocean City, Maryland, plus C3b retail.** Same six-brand base band plus "ARM BEACHWEAR". |
| 14 | Pexels **10341517** | Pexels / Amit Shubinsky | "Beautiful aerial view of a sandy beach in Virginia with waves lapping at the shore" | 8000x6000 | yes | **REJECT on subject.** Straight-down aerial of sand, riprap and marsh grass. No buildings; not identifiably Virginia Beach. Largest native in the run and useless for this family. |
| 15 | Pexels **36674155** | Pexels / Deuspix | "Serene ocean view with a distant coastal city skyline at dusk" | 5240x3493 | yes | **REJECT on destination — this is Warnemünde, Germany.** Identified by the Teepott, the Warnemünde lighthouse and the kite-surfers. Carries **"HOTEL NEPTUN"** legible across the tower. A textbook destination-solvent result. |
| 16 | Pexels **5524453** | Pexels / Tnarg | "A vibrant city skyline with high rises under a dramatic sunset sky" | 6720x4480 | yes | **REJECT — wrong destination and heavy branding.** Downtown **Richmond**, Virginia. **"BB&T"**, **"WELLS FARGO"** and **"Bank of America"** all legible. Foreground is warehouse roofs and power lines. |

Derived crops opened (all listed in §3, all from native or delivered files): `A_z1_bl`, `A_z3_3x`,
`A_z4_tealtower_4x`, `A_z5_midstrip_4x`, `A_marriott_native_10x`, `A_parkgarage_12x`,
`DA_check_bl_4x`, `DA_marriott_10x`, `DA_bl_1to1`, `B_z1_fg_1x`, `B_z2_baseretail_2x`,
`B_z5_retailA_4x`, `B_z6_retailB_4x`, `B_z7_fgbase_4x`, `B_z8_far_6x`, `B_z9_farthest_6x`,
`B_z10_beach_3x`, `DB_check_base_4x`, plus both 1600x900 delivery renders.

### Paywalled items — named, not purchased (zero budget)

Six Unsplash results for this destination are **Unsplash+ / Getty**, i.e. a paid licence this brief
does not permit. They were **not fetched and are not nominated**. Named for the record, as the brief
requires:

| Asset | Creator | Description |
| --- | --- | --- |
| `photo-1786647355851-ab639afe012a` | Getty Images | "Virginia Beach Boardwalk on the Oceanfront in downtown Virginia Beach, Virginia, USA" — the single most on-brief description returned by any query |
| `photo-1700566982166-b68382168778` | Gabrielle Maurer | "a sandy beach next to the ocean under a cloudy sky" |
| `photo-1664302363999-258074e83e0d` | Getty Images | "Aerial view of a sandy beach with shallow tidal pools and blue ocean" |
| `photo-1695609708365-19d71c390844` | Jeff McLain | "a statue of a man holding a fish on a beach" |
| `photo-1701143626768-282ec584ffe8` | Jordan González | "a sandy beach with a blue ocean in the background" |
| `photo-1664635401818-3a171967ab89` | Unsplash+ Community | "an aerial view of a beach and trees" |

**No purchase is proposed.** The free supply resolved the certificate without them.

---

## 5. Findings for the family

### 5.1 The governing rule held for a third destination — now 3 for 3

**Shoot the strip, not the resort** was decisive again. Every frame in this run where a single
building was the subject failed:

- `photo-1617930760677` — one building as subject → **"Hilton Garden Inn"** in lights.
- Pexels 12843135 / 12843138 — one resort block as subject → six legible retail brands along its base.
- Pexels 29500107 — one blue-cupola resort as the visual anchor → a green Holiday Inn logo.

And both frames that passed are strip frames showing a dozen-plus properties. **Elevation is what
kills signage**, and the Virginia Beach twin-of-Myrtle-Beach prediction in the commission was right:
the answer was a **dusk drone frame of the oceanfront tower line**, the same shape as the Myrtle Beach
solution, found by the same query.

### 5.2 C3b was the rule that actually earned its keep

The primary's only 1:1-legible mark was on a **low rooftop parapet**, not a tower. The towers in both
finalists are clean at 4x–6x. Magnifying the tall buildings would have returned "clean" and shipped a
frame with a legible Holiday Inn Express sign in the corner. **C3b is not a refinement; it is the rule
that catches the failure.**

### 5.3 C3c cut in both directions in a single run — as the brief predicted

- **False positive caught:** the Holiday Inn Express, legible at **1:1** on the native file. Rejected
  and reframed out.
- **False negative avoided twice:** the pink parking-garage sign, still unreadable at **12x** — an
  agent could have rejected the whole frame on a "suspicious rectangle"; and the Marriott griffin,
  **26px at native but 12px delivered**, which is a disclosure, not a rejection.

Same frame, same run, both directions. **Always convert to delivered pixels before deciding.**

### 5.4 C5 was confirmed but did not dominate here

C5 predicts "not premium / not vacation-selling" as the number-one rejection cause. In this run it
fired **twice** (#3 flat overcast, #4 residential aerial). The dominant cause was instead
**wrong destination — 5 of 14 rejections** (three Ocean City MD, one Richmond VA, one Warnemünde
Germany). See 5.5. Branding fired 4 times and subject 3 times.

### 5.5 New finding — **"Virginia Beach" is itself a destination solvent on Pexels**

This is the sharpest result of the run and it should go into the brief.

C6 warns that *amenity words* dissolve a destination. Here **the destination name itself did**.
`virginia beach hotel` and `virginia beach` on Pexels returned, as top-ranked results,
**Ocean City Maryland (5 frames), Richmond Virginia, Warnemünde Germany, Daytona Beach, Miami Beach,
Chincoteague and Williamsburg** — and **not one usable Virginia Beach oceanfront frame in 24 results
across two queries**. Zero Pexels candidates survived.

The mechanism: **"beach" is a generic noun inside the place name.** Pexels' matcher treats
`virginia beach` as `virginia` + `beach` and returns anything in Virginia plus any beach anywhere.
This will recur on every destination whose name contains a generic geographic noun — **Myrtle Beach,
Panama City Beach, Ocean City, Palm Springs, Long Beach, Gulf Shores**.

**Practical rule to add to C6:**

> **C6b. When the destination name contains a generic geographic noun (Beach, City, Springs, Shores,
> Island), Pexels will dissolve it. Verify the destination visually on every Pexels result before
> spending any effort on branding — and expect Unsplash, whose photo pages carry a human-entered
> location field, to be the deciding source.**

**Unsplash won this destination outright: both finalists came from Unsplash, and its per-photo
`Location` field is what let the destination be confirmed positively rather than inferred.** Pexels'
human-written titles — the thing that made Pexels best for Sedona — actively misled here: three
Ocean City frames are titled "Virginia Beach" or surfaced under it.

### 5.6 Supply shape — abundant, unlike Sedona

C2 says expect one-or-none inland and abundance on dense strips. Virginia Beach is a dense strip and
behaved accordingly: **two approvals plus one genuine hold from 16 opened — a 2-in-16 hit rate**, in
the same band as Myrtle Beach's 2-in-15. Both winners again came from `<destination>` alone on
Unsplash, confirming C6's dense-strip half. Budget the same hour per certificate.

### 5.7 Destination cues, and the King Neptune note

The commission suggested King Neptune as a destination cue if small. **It does not appear in either
finalist**, and the frames do not need it: the VB oceanfront tower line, the very wide raked beach and
the distinctive Boardwalk railing are the destination signature, corroborated by the Unsplash location
field on both photo pages. The one King Neptune frame that is free (#6) makes the statue the subject
with no resort in frame, and the better-composed McLain Neptune frame is Unsplash+. **No Neptune frame
is needed or nominated.**

---

## 6. Compliance summary

| Check | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Authentic destination-specific resort/condominium exterior | **Pass** — VB oceanfront strip, location stated on the photo page | **Pass** — VB Boardwalk and oceanfront line, location stated on the photo page |
| No named resort implied (C1) | **Pass** — a dozen-plus properties; title names none; re-caption mandated | **Pass** — a dozen-plus properties; title names none; re-caption mandated |
| Shoot the strip, not the resort (C3) | **Pass** — aerial; no single building is the subject | **Pass** — receding multi-property line; the subject is the beach at dusk |
| Low buildings magnified (C3b) | **Pass** — 4x–12x on the low blocks; one find, reframed out | **Pass** — 4x on both retail sections; clean |
| Delivered-pixel measurement (C3c) | **Pass with disclosure** — Marriott griffin 12 x 10 px, unresolvable at 1:1 | **Pass** — nothing to measure |
| No identifiable private residences (C4) | **Pass** | **Pass** |
| Premium / vacation-selling (C5) | **Pass** — dusk drone vista | **Pass** — golden-hour pastel sky |
| No third-party signage (C7) | **Disclosed** — see 3.2 | **Pass** — nothing legible at 1:1 through 6x |
| Licence | Unsplash License, free | Unsplash License, free |
| Budget | zero | zero |
| Retouching | none | none |
| Upscale | none (0.4860x downscale) | none (0.2839x downscale) |

**Both slots are filled and both were visually verified.** This is not an honest-empty result.

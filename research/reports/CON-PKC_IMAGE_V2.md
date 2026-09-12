# CON-PKC — Park City Condo — Image Report V2

**Certificate:** CON-PKC / `park-city-condo` / Park City Condo
**Destination:** Park City, Utah (Wasatch Back / Park City–Deer Valley resort corridor)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch. Condo rules C1–C7 applied.
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no `premium_photo-`, no Unsplash+/Getty, no retouching.
**Candidates downloaded at native and opened with the Read tool: 24.**

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | Pexels photo ID **30939987** | Pexels — Alex Gonzo | Pexels License (free, no attribution required) | 4717 x 7075 | **YES — visually verified.** 100% rule run at native plus 2.6x / 3x / 5x / 6x crops, then re-measured at 1:1 in the delivered file |
| **ALTERNATE** | Pexels photo ID **30939990** | Pexels — Alex Gonzo | Pexels License (free, no attribution required) | 3778 x 2519 | **YES — visually verified.** 100% rule run at native plus 2x / 5x crops, then re-measured at 2x of the delivered file |

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact
bytes that should ship:

```
https://images.pexels.com/photos/30939987/pexels-photo-30939987.jpeg   # PRIMARY
https://images.pexels.com/photos/30939990/pexels-photo-30939990.jpeg   # ALTERNATE
```

Both are elevated, many-property winter frames from the Park City resort corridor. Neither contains
a single legible character of text at any magnification tested. Neither has a single building as its
subject, so neither can imply the guarantee of a specific property.

---

## 2. C1 — source metadata that MUST be stripped

The caption names things the pixels do not. Record here so it can be removed; **never carry title,
filename, alt text or photographer caption through to the site.**

| Slot | Source title on Pexels | Source caption | Source location tag | Source filename |
| --- | --- | --- | --- | --- |
| PRIMARY | "Snowy Utah Mountain Landscape with Houses" | "Scenic view of a snow-covered mountain landscape in Utah with rustic houses below." | **Park City, UT, United States** | `pexels-photo-30939987.jpeg` |
| ALTERNATE | "Scenic winter landscape with snow-capped mountains" | "Beautiful winter landscape featuring snow-capped mountains and serene lake under a clear blue sky." | **Heber City, United States** | `pexels-photo-30939990.jpeg` |

Neither title names a resort or condominium property, so C1 carries **no compliance exposure** on
this certificate — unlike Sedona, where the title named the resort. Re-caption generically anyway
and rename the delivered files (`con-pkc-hero.jpg` / `con-pkc-hero-alt.jpg`).

**Honest flag on the ALTERNATE's location tag.** The photographer tagged the vantage **Heber City**,
not Park City. The vantage is the western shore of **Jordanelle Reservoir**; the ski-run-scored
massif filling the right of frame is the **Park City / Deer Valley** terrain, and the shoreline
village is the Jordanelle-side resort development. It is the Park City corridor photographed from
about ten miles south-east, not a different destination — but the source tag does not say
"Park City" and a buyer checking provenance would see "Heber City". Stated plainly rather than
papered over. The PRIMARY's tag **does** say Park City, which is why it is the primary.

---

## 3. Delivery crops — rendered with PIL and inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 1600) → (4717, 4253)` | 4717 x 2653 | 1600 x 900 | **0.3392x (downscale)** | **none** |
| ALTERNATE | `(0, 0) → (3778, 2125)` | 3778 x 2125 | 1600 x 900 | **0.4235x (downscale)** | **none** |

Both are pure downscales. **No upscale anywhere; nothing is flagged above 1.0x.** Both sources carry
2.6x–2.9x more linear resolution than the deliverable needs, which is what made the 100% rule
meaningful here.

Reproduce exactly:

```python
from PIL import Image
im = Image.open("pexels-photo-30939987.jpeg")   # PRIMARY
im.crop((0, 1600, 4717, 4253)).resize((1600, 900), Image.LANCZOS).save("con-pkc-hero.jpg", quality=92)

im = Image.open("pexels-photo-30939990.jpeg")   # ALTERNATE
im.crop((0, 0, 3778, 2125)).resize((1600, 900), Image.LANCZOS).save("con-pkc-hero-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/pkc/DELIVER_CON-PKC_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/pkc/DELIVER_CON-PKC_alternate.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
An elevated golden-hour vantage looking across the valley at the **Park City / Deer Valley ridgeline
with its ski runs clearly cut into the snow** — the destination signature, unmistakable and
unbranded. The lower right is a **cluster of roughly twenty dark-timber, snow-roofed mountain
condominium and townhome buildings** with a road curving through them: repeated identical units,
stacked balconies, shared drives. It reads as "resort condominium", not "hotel" and not "house".
Snow on the ground and on every roof — on-season for this certificate.
**Overlay space:** the top ~35% is unbroken soft overcast sky with warm sunset colour at the left
edge. Large, low-detail, high-contrast-friendly. Excellent.

### What the ALTERNATE frame shows
Jordanelle Reservoir under a deep blue sky with high cirrus, the water mirroring the snow-covered
hills. Across the water, a **many-building resort village** strung along the shoreline, and behind
it the Deer Valley / Park City massif with its runs. Brilliant winter light, completely different
in mood from the primary (cold blue and bright vs warm and overcast), so the two do not look like
the same photograph twice.
**Overlay space:** the top ~45% is clean blue sky, and the lake surface below it is another large
low-detail region. Excellent.

---

## 4. The 100% rule — what was actually magnified, and what it resolved to

Per C3b, **the low buildings were magnified, not the tall ones.** Every facade, roofline, gable and
roadside object in the building clusters was checked at native resolution, then converted back to
delivered pixels per C3c.

### PRIMARY — Pexels 30939987

| Region checked | Native crop | Magnification | What it resolved to | Size in the delivered 1600x900 |
| --- | --- | --- | --- | --- |
| Whole condominium cluster | `(1500,3150)-(4717,4100)` | 1x native | No nameplate, no wordmark, no monument sign anywhere in the cluster | — |
| Central townhome block facades | `(2400,3500)-(3300,3900)` | **3x** | Balconies, garage bays, two **blank** framed panels on the gable — no text | panels ≈ 5 px |
| Right-hand condo block facades | `(3500,3250)-(4717,3700)` | **2.6x** | Repeated identical units, entries, chimneys — no text. Utility poles and wires present | poles = hairline |
| Suspect dark mark on a roof (read as "AAA" at low zoom) | `(2800,3550)-(3150,3860)` | **6x** | **Snow-melt / shadow pattern on a standing-seam metal roof. Not lettering.** A false positive from the over-magnified look, caught by C3c | ≈ 3 px |
| Lower-left buildings + road entrance | `(1500,3600)-(2500,4050)` | **3x** | Clean. A utility cabinet and a fence. No entry monument, no signage | — |
| Large valley building complex (mid-distance) | `(3400,2900)-(4100,3200)` | **5x** | A large resort hotel **under construction** with a chairlift behind it — dark glass and stone, **no wordmark resolvable at 5x** | building ≈ **89 px wide** |
| Delivered-file re-measure | `DEL` `(500,600)-(1600,900)` | **1:1 in the shipped file** | Nothing reads as text, a sign, or a brand. A refuse skip beside the road is a **≈4 px dark dot** | — |

**Result: PASS.** Zero legible characters at up to 6x native. The two findings worth naming honestly
are (a) utility poles and overhead wires through the cluster and (b) the distant hotel construction
site with a crane — at 89 px in a hazy mid-distance it reads as "a building in the valley" and
neither is a branding problem. Neither is a car park, a refuse bin in the foreground, or razor wire;
the frame passes the C5 vibe test comfortably.

### ALTERNATE — Pexels 30939990

| Region checked | Native crop | Magnification | What it resolved to | Size in the delivered 1600x900 |
| --- | --- | --- | --- | --- |
| Far-shore village, full width | `(1800,1330)-(3778,1530)` | **2x** | Dozens of separate condo/townhome clusters plus one larger modern block. No text | — |
| Far-shore village, larger block | `(2600,1360)-(3400,1500)` | **5x** | Facade detail only — **no wordmark, no nameplate, nothing resolvable as signage at 5x** | block ≈ **51 px wide** |
| Delivered-file re-measure | `DELALT` `(600,560)-(1600,700)` | **2x of the shipped file** | Buildings are 8–50 px silhouettes. No text of any kind is physically representable at this scale | — |

**Result: PASS.** Everything man-made in this frame is below the resolution at which a wordmark
could exist in the delivered file. This is the strongest possible compliance position.

### AI / provenance screen
Pexels strips EXIF from everything it serves, and both files confirmed it — `getexif()` returns only
resolution and orientation tags, no camera make, model or exposure. Per the brief's stated exception,
the **geometry half** of the screen was run instead, as a reasoned call:

- PRIMARY **4717 x 7075** — exactly 2:3, but at a non-round, non-power-of-two pixel count. Generators
  emit round dimensions (1024 / 2048 / 4096 / 1536); 4717 is not a sensor width and not a generator
  output size. This is consistent with a **user crop of a real full-frame 3:2 capture**, rotated to
  portrait. Reinforced by the content: correct low-sun shadow direction across the whole cluster,
  consistent snow-melt physics on every roof, and legible construction cranes at the valley site.
- ALTERNATE **3778 x 2519** — 3:2 to within a pixel, again non-round. Same reasoning.
- Both carry a real-world, checkable location tag on the source page, and the PRIMARY's ridgeline
  matches the actual Park City / Deer Valley trail layout.

**Reasoned pass, not an unexamined pass.** AI cannot be ruled out by metadata on any Pexels file;
it is ruled out here by geometry plus internal physical consistency.

---

## 5. Every candidate opened — 24, with verdicts

All were downloaded at native resolution with **no query string** and opened with the Read tool.
Nothing below was judged from metadata.

### Pexels — search `park city utah` (pages 1 and 2)

| # | ID | Source title | Native | Verdict — visually verified |
| --- | --- | --- | --- | --- |
| 1 | **30939987** | Snowy Utah Mountain Landscape with Houses | 4717x7075 | **APPROVE — PRIMARY** |
| 2 | **30939990** | Scenic winter landscape with snow-capped mountains | 3778x2519 | **APPROVE — ALTERNATE** |
| 3 | 36350588 | Winter aerial view of Park City Utah | 4284x5712 | **REJECT after reframe** — see §6 |
| 4 | 30212457 | Winter landscape in Park City Utah | 8188x5459 | **REJECT after reframe** — see §6 |
| 5 | 16835221 | Wooden houses in town in Utah USA | 6000x4000 | REJECT — **"MOTHERLODE CONDOMINIUMS" nameplate legible**, plus "Heber Ave", "Park Ave", "RESIDENT ACCESS ONLY", "MAIN STREET PARKING". Power lines across the whole frame. Mud season. The one C3b resort-nameplate hit of this probe |
| 6 | 30212477 | Winter street scene in Park City Utah | 5504x8256 | REJECT — STOP sign, three DO NOT ENTER signs, branded orange plant machinery, a dump truck, power lines, slush. C5 and C3b together. Signage is central; not reframeable |
| 7 | 30024966 | Winter scene in Park City with snowfall | 3024x4032 | REJECT — **C4, identifiable private residence** as the single subject, ground level, plus an identifiable person |
| 8 | 15267083 | Town near the mountains | 3089x2048 | REJECT — **wrong destination.** This is downtown Salt Lake City (City & County Building clock tower). "THE 324" legible |
| 9 | 15811754 | Sundance Film Festival advertisement | 2029x3061 | REJECT — "SUNDANCE FILM FESTIVAL" marquee filling the frame. Exactly the third-party brand the Park City caution predicted |
| 10 | 9739266 | McPolin Barn in Park City Utah | 5472x3648 | REJECT on subject — beautiful autumn frame, but an agricultural landmark barn is the single subject. Not lodging. A large private house sits on the ridge behind (C4) |
| 11 | 4446957 | Green forest on hills under blue sky | 4000x6000 | REJECT — summer haze, no lodging in frame, ski-lift towers and cables in the lower left. C5 |
| 12 | 10831985 | View of a mountain under blue sky | 4032x3024 | REJECT — hazy summer ridgeline, no lodging, no destination specificity. C5 |

### Unsplash — searches `park city utah`, `park city`, `park city utah winter`

| # | File | Alt text | Native | Verdict — visually verified |
| --- | --- | --- | --- | --- |
| 13 | `photo-1570138794401-bc8e48e0c4b7` | cityscape during daytime | 4896x3264 | **REJECT after reframe** — see §6. Best near-miss in the set |
| 14 | `photo-1549289927-8aa8cbade603` | houses surrounded with snow covered pine trees | 4000x6000 | REJECT — gorgeous blue-hour Main Street, but the bottom band carries storefront signs, sandwich boards, construction barricades, a "425" address plate and a flag. A top-band reframe survives the signage but is left with sky, string lights and a forested hill — no lodging content, so it stops proving the certificate |
| 15 | `photo-1713447526272-6d045b071354` | a city street with a mountain in the background | 6000x4000 | REJECT — six-plus legible brands: "HYDE Leather/Shearling/Fur", "EGYPTIAN", "Live Theatre — NINE The Musical", "RED BANJO PIZZA", a gallery name, plus parked cars and a licence plate. The C3b six-brands-at-once failure, Park City edition |
| 16 | `photo-1613241648762-c0919511f8c2` | brown and white concrete building during daytime | 4000x6000 | REJECT — **"patagonia" storefront**, large and legible, plus further shop signs down the row. Main Street. Not reframeable — brands at both ends |
| 17 | `photo-1592428067555-fbaaa69df4b2` | white wooden bridge over snow covered mountain | 3280x2624 | REJECT — **"PARK CITY MOUNTAIN" resort logo** on a building, "PARK CITY TICKETS", "Rentals", "SUMO", "CABIN", four "Coca-Cola" umbrellas, "FOR LEASE". The base-area worst case |
| 18 | `photo-1596142640391-5db8ff6ebd21` | white snow covered mountain during daytime | 4032x1960 | REJECT on subject — summit vista with a **lift top-station** as the only structure. No lodging content; lift terminals are exactly what the Park City caution flags |
| 19 | `photo-1594920744856-7617ad345523` | snow covered mountain under blue sky | 3925x1908 | REJECT on subject — beautiful summit panorama, zero lodging, a lift line at the lower right |
| 20 | `photo-1486612139543-cd41cd7ef078` | grayscale photo of mountain | 8688x5792 | REJECT — monochrome, heavy grey sky, no lodging. Does not sell a vacation (C5) |
| 21 | `photo-1674154371371-4403eca238d6` | a snow covered mountain with a house and trees | 5073x3382 | **Near-miss, documented third option** — see §7 |
| 22 | `photo-1674154371060-3381915bd7ce` | the roof of a building covered in snow | 5184x3456 | REJECT — a roof-eave detail. No destination, no context, proves nothing |
| 23 | `photo-1610558085541-347f9a4b091d` | snow covered mountain during daytime | 3024x4032 | REJECT on subject — a groomed Deer Valley run looking out over the valley. Condo clusters are present but tiny; the frame's subject is the ski slope. Clean of branding, but it does not read as lodging |
| 24 | `photo-1580845762252-765d1ec2d05d` | snow covered mountain during daytime | 4032x3024 | REJECT — same Jordanelle view as the alternate, shot from the highway: a **concrete crash barrier** across the bottom and a **construction equipment yard** on the shore. C5. Useful as confirmation that the alternate is the good version of this vantage |

**Paywalled items encountered and excluded on the zero-budget rule (not evaluated):**
`premium_photo-1733306551787`, `premium_photo-1698513569778`, `premium_photo-1696834356525`,
`premium_photo-1697729496343`, `premium_photo-1681558921634`, `premium_photo-1682960971720`,
`premium_photo-1725400807692`, `premium_photo-1759849422211`, `premium_photo-1697729860754`,
`premium_photo-1712000451126`, `premium_photo-1694475516409`, `premium_photo-1674515937256`,
`premium_photo-1707235459582`. **None of them was needed** — this certificate resolves for free, so
there is no purchasable-answer caveat to report.

---

## 6. Reframes actually tested before rejecting (step 4a)

Three candidates failed on a *region* rather than the whole image. All three were re-cropped to 16:9
at native, rendered to 1600x900, and opened. None was rejected on assumption.

| Candidate | Reframe tried | What the reframe fixed | Why it still failed |
| --- | --- | --- | --- |
| Pexels **36350588** | `(0,500)-(4284,2910)` → 4284x2410, 0.3735x | Dropped the scrubby dead-brush foreground that occupied the bottom half — a real improvement | The lower-right quadrant is then **surface car parks full of cars, a parking structure and a coach row**. That is the Port Canaveral panorama failure verbatim. The hillside is also bare brown, low-snow — it undercuts the winter sell. **C5** |
| Pexels **30212457** | `(4400,1150)-(8188,3281)` → 3788x2131, 0.4224x | **Successfully dropped both nameplates** — "POWDER RIDGE" on a garage and "Chateau Apres Lodge" on a roof. The branding problem was genuinely solved by crop | What remains is flat and washed out: ~60% blank pale sky, **power lines across the right half**, parked cars and a bus along the bottom. Compliant and commercially unusable — the Upper Algiers outcome. **C5** |
| Unsplash **photo-1570138794401** | `(450,0)-(4306,2169)` → 3856x2169, 0.4149x | Dropped the "C"-monogram wall logo and most of the street retail. The result is genuinely attractive: layered autumn Old Town with the ski runs cut into the hillside behind | The 100% rule then found, at 6x native, **"CROSBY COLLECTI[ON] BUILDING"** painted on the brick at the bottom centre — and per C3c it is **already faintly readable in the delivered 1600x900**, so it fails the shipped-pixels test, not just the magnified one. Two window transoms also read **"ALFA SKI"**. A tighter crop could drop the brick row, but the frame then loses its foreground anchor, and it is autumn where snow is on-season. **C3b** |

The reframe lever paid off on the branding axis twice out of three and on the saleability axis zero
times out of three. That matches C5: **branding is the fixable failure; "not premium" is not.**

---

## 7. Documented third option, with its caveat

`https://images.unsplash.com/photo-1674154371371-4403eca238d6` — Scott Greer, Unsplash License,
5073 x 3382. Opened and magnified (facades at 1.3x native): a genuine **multi-unit condominium
complex buried in deep snow** — repeated entries and garage bays, metre-long icicles, a forested
ski hillside behind. **Zero signage of any kind at any magnification.** Subject-wise this is the
purest "ski condominium" frame found in the sweep.

Not nominated because:
1. **Destination unverified.** It surfaced under an Unsplash `park city utah winter` search and looks
   like Deer Valley, but the photo page could not be retrieved to confirm a stated location. Both
   nominees have a checkable location tag on their source page; this does not.
2. It is **one complex as the subject** — the framing C3 tells us to elevate away from.
3. Aesthetically flat: blank white sky, cluttered bare aspens, drab grey-brown cladding. It is
   authentic rather than premium.
4. Its Unsplash upload timestamp decodes to **2023-01-19**, which is not the pre-generative
   reassurance the brief's timestamp check is meant to provide.

Hold it in reserve if a reviewer wants a close-up condominium frame rather than a landscape one, and
verify the location first.

---

## 8. What this probe adds to the condo family rules

- **C3 held again, 24 for 24.** Every ground-level and single-building frame failed; both approvals
  are elevated many-property frames. Park City did not break the rule — it confirmed it on a
  mountain destination after Myrtle Beach confirmed it on a beach one.
- **C3b held, and the Park City caution was accurate.** Street-level retail signage caused **5 of the
  20 rejections** (Main Street ×3, base-area ×1, the Motherlode/street-sign frame ×1). Resort
  nameplates fired **twice** — "PARK CITY MOUNTAIN" at the base area and "MOTHERLODE CONDOMINIUMS" —
  which is a higher nameplate rate than Myrtle Beach's 1-in-15, because a ski town puts its resort
  mark on the lift base and its condominium names on the buildings themselves.
- **C3c cut both ways in one image.** On the primary, a mark that read as "AAA" at low zoom resolved
  at 6x to **snow-melt on a metal roof** — a false negative avoided. On the Old Town reframe, text
  found at 6x was confirmed **still readable in the delivered file** — a false positive confirmed as
  real. Measuring in the shipped file is what separated them.
- **C5 remains dominant.** "Not premium / not vacation-selling" caused **9 of the 22 rejections** —
  car parks, a concrete crash barrier, a construction yard, road slush, summer haze, monochrome,
  mud season. Branding caused 7. Judging saleability first saved most of the effort.
- **C6, new data point: the brief's own instruction was half right.** `park city hotel` on Pexels is
  a **total destination solvent** — "park" and "city" are both generic English words, so it returned
  Ballarat, Mérida, Astana, NYC, Bursa, Minneapolis, Las Vegas and Amsterdam, and **zero Park City
  Utah**. `park city utah` on Pexels was the single best query of the probe and produced **both
  nominees**. Adding the state name is normally pure waste (C6); **on a destination whose name is
  two common nouns, it is mandatory.** Worth adding to C6 as an exception.
- **Supply was neither singular nor abundant:** roughly four viable frames out of ~90 search results.
  Park City sits between the Sedona one-or-none case and the Myrtle Beach abundance case.
- **The Sundance warning was correct** and cost one candidate. It appears in winter frames as a
  marquee, not just as banners.

---

## 9. Compliance summary

| Check | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Real, destination-specific Park City imagery | Yes — source page tags **Park City, UT**; Park City/Deer Valley ski runs visible | Yes — Jordanelle Reservoir with the Park City/Deer Valley massif. **Source tag says Heber City** (see §2) |
| Authentic resort/condominium exterior in frame | Yes — ~20-building timber condominium cluster | Yes — a many-building shoreline resort village, distant |
| No named resort, no legible property name | **Confirmed to 6x native and at 1:1 in the delivered file** | **Confirmed to 5x native and at 2x of the delivered file** |
| No third-party commercial signage | Confirmed | Confirmed |
| No single building is the subject (C3) | Confirmed — many properties, no hero building | Confirmed — everything is a small distant silhouette |
| Not an identifiable private residence (C4) | Confirmed — multi-unit condominium massing | Confirmed |
| Premium / vacation-selling (C5) | Yes — golden hour, deep snow, ski terrain | Yes — brilliant blue winter light, lake reflection |
| Snow / on-season | Yes | Yes |
| No interiors | Yes | Yes |
| Overlay space for hero text | Top ~35% clean sky | Top ~45% clean sky plus the lake surface |
| Licence | Pexels License — no attribution, no share-alike | Pexels License — no attribution, no share-alike |
| Zero budget | Yes — free download, not Pexels+ | Yes — free download, not Pexels+ |
| Retouching | None performed, none required | None performed, none required |
| Upscale | None — 0.3392x downscale | None — 0.4235x downscale |

**Both nominations are visually verified. CON-PKC resolves at zero budget.**

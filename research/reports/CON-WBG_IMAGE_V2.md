# CON-WBG — Williamsburg Condo — Image Report V2

**Certificate:** CON-WBG / `williamsburg-condo` / Williamsburg Condo
**Destination:** Williamsburg, Virginia
**Family:** Condo (20 certificates) — rules C1–C7 from `research/IMAGE_BRIEF_V2.md` applied as written
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No Unsplash+, no `premium_photo-`, no Getty, no retouching. Nothing purchasable proposed.
**Pricing:** none anywhere in this report. Image-only run.

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1590129695669-1a7b42fc9c3c` (page slug `SlsggtvFPRU`) | Unsplash — Eric Foster (@thepreppyeric) | Unsplash License (free, **not** Unsplash+) | 5318 x 3543 | **YES — visually verified**, 100% rule run at native + 2x region crops + 5x on the delivered file |
| **ALTERNATE** | Pexels photo `13005864` | Pexels — Brian Magill | Pexels License | 6000 x 4000 | **YES — visually verified**, 100% rule run at native + 3x facade crops + 10x on the delivered file |

Both are Colonial Williamsburg historic-area frames containing **many buildings and no single building
as the subject**, **zero legible signage of any kind in the delivered pixels**, **no costumed
interpreters**, **no foundation signage or ticketing**, and **no Busch Gardens**.

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact
bytes that should ship:

```
https://images.unsplash.com/photo-1590129695669-1a7b42fc9c3c      # PRIMARY   (5318x3543)
https://images.pexels.com/photos/13005864/pexels-photo-13005864.jpeg   # ALTERNATE (6000x4000)
```

---

## 2. C1 — source titles, recorded so they can be STRIPPED

Neither of these strings may reach the site as filename, alt text, title, or caption.

| Slot | Source title / metadata as published | Why it must go |
| --- | --- | --- |
| PRIMARY | Unsplash alt: **"aerial view of green trees and houses during daytime"**; Unsplash location field: **"Williamsburg, VA, USA"**; tags include `campus`, `williamsburg` | Benign, but the location field and tags are source metadata; carry nothing through. |
| ALTERNATE | Pexels title: **"Historic colonial architecture nestled amid lush greenery in Williamsburg, VA"**; download filename `pexels-brian-magill-157994702-13005864.jpg` | The download filename carries the photographer's name and Pexels' ID. Re-caption generically. |

Neither title names a resort or a property — the C1 risk that bit Sedona ("Villas of Arroyo Roble")
does not fire here. Recommended shipped captions: *"Williamsburg, Virginia"* and nothing more.
Recommended filenames: `con-wbg-hero.jpg` / `con-wbg-alt.jpg`.

---

## 3. Delivery crops — rendered with PIL, opened, and inspected

| Slot | Crop from native | Crop size | Output | **Scale factor** | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 0) → (5318, 2991)` | 5318 x 2991 | 1600 x 900 | **0.3009x (downscale)** | **none** |
| ALTERNATE | `(0, 0) → (6000, 3375)` | 6000 x 3375 | 1600 x 900 | **0.2667x (downscale)** | **none** |

**No upscaling anywhere. Neither scale factor is above 1.0x.**

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("photo-1590129695669-1a7b42fc9c3c.jpg")            # 5318 x 3543
im.crop((0, 0, 5318, 2991)).resize((1600, 900), Image.LANCZOS).save("con-wbg-hero.jpg", quality=92)

# ALTERNATE
im = Image.open("pexels-photo-13005864.jpeg")                      # 6000 x 4000
im.crop((0, 0, 6000, 3375)).resize((1600, 900), Image.LANCZOS).save("con-wbg-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conwbg/DELIVER_CON-WBG_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conwbg/DELIVER_CON-WBG_alternate.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
A drone frame over the Colonial Williamsburg historic area. Top ~14%: a cloud band and a flat
horizon. Below it, **unbroken hardwood forest to the horizon in every direction** — the Tidewater
signature. Centre: the Georgian brick Governor's Palace with its cupola, set in its walled formal
gardens, canal walk and orchard terraces. Around and below it, **eight to ten further colonial
buildings** — white clapboard houses, brick outbuildings, a shingled kitchen block, split-rail and
picket fences, brick garden walls, a gravel forecourt with a turning circle, and the Palace Green
lawn running out of the bottom of the frame.

**Overlay space:** the top band of cloud plus the soft, low-detail forest canopy beneath it gives a
continuous low-contrast strip across the full width of the upper third. Good for a translucent hero
or header. The green of the lawn at bottom-centre is a second quiet region.

### What the ALTERNATE frame shows
A late-afternoon glimpse across garden fences into a Colonial Williamsburg residential block:
a two-storey white clapboard house with maroon shutters, a cream portico wing beside it, a brick
house with chimney stacks behind, and a dark cedar-shingled roof filling the right. Lush summer
foliage frames all four corners; a patch of blue sky with one white cloud sits upper-centre-right.
Red-brown and whitewashed picket fences layer across the foreground. **No people. No vehicles.**

**Overlay space:** weaker than the primary — the frame is busy. The sky patch upper-centre and the
soft dark foliage of the left and right margins are the only quiet areas. This is why it is the
alternate rather than the primary.

---

## 4. The GOVERNING RULE — shoot the strip, not the resort

The rule was applied literally and it did all the work. **Every single-building frame in this sweep
failed; both survivors are many-building frames.** That is 100% again, now across a 23-candidate
Williamsburg set — consistent with the 15-candidate Myrtle Beach result.

| Test | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Is any one building the subject? | **No.** Largest building (Palace main block) measures **~135 px of 1600 = 8.4% of delivered frame width.** | **No.** The white clapboard house is the largest element but reads as one of four rooflines in a row. |
| Elevated / no ground-level retail edge? | **Yes — drone altitude.** Nothing at street level is in frame at all. | Partially — eye level, but shot **across garden fences into a residential block**, not down a commercial street. No storefronts. |
| Can this imply a guaranteed property? | **No.** It is visibly a whole historic district. | **No.** Four separate dwellings, none foregrounded. |

**C3b — magnify the LOW buildings, not the tall ones.** Followed. On the primary the tall subject
(the Palace) was checked last; the low outbuildings, the forecourt, the fence lines and both bottom
corners were checked first. On the alternate, the one mark found in the whole sweep was exactly
where C3b says to look — a low clapboard wall, not a rooftop. Street-level retail was the cause of
**four of the nine rejections below** (Wm PITT Merchant, Merchants Square, the Governor's Palace
interpretive panel, AN ARCHER HOUSE), reproducing the Myrtle Beach 5-of-15 finding.

---

## 5. The 100% rule — what was actually magnified, and in which file

### PRIMARY — a burned-in photographer signature, recovered by reframing (step 4a)

The full native frame carries a **white script signature "Eric Foster" burned into the bottom-right
corner.** Found at 2x on the native file; measured at native **x ≈ 4988–5296, y ≈ 3423–3495**
(~308 x 72 px). This is a hard reject in the full frame — it is third-party text on the delivered
image, not removable without retouching, which is not authorised.

**Reframe, not reject.** A top-anchored full-width 16:9 crop `(0, 0, 5318, 2991)` ends **432 px
above the top of the signature.** The signature is entirely outside the shipped file. Confirmed by
cropping the delivered 1600x900 file's bottom-right quadrant at 5x nearest-neighbour: rooftops,
chimneys, fence and lawn only — no text, no stroke, nothing.

The reframe is also the better picture: cropping from the top keeps the cloud band and horizon
(overlay space) that the bottom-anchored alternative crop `(0, 400, 5318, 3391)` threw away.

Regions magnified on the native file at 2x, all clean:

| Region (native) | What was checked | Result |
| --- | --- | --- |
| `(2200,1000)-(3400,1900)` | Palace facade, gardens, outbuildings, garden walls | No text. Ornamental gate carries a royal arms device, **no lettering.** Event chairs set out on the ballroom terrace — no branding. |
| `(4200,400)-(5318,1100)` | Top-right — road/car-park glimpse in the treeline | Forest canopy and horizon only. |
| `(2100,1900)-(3500,2700)` | Forecourt circle, benches, fence rails, path | No signage. **Three visitors in modern dress**, ~32 px tall at native. |
| `(0,2200)-(1200,2991)` | Bottom-left corner — second watermark check | Lawn, path, blossom trees, a bench. Clean. |
| `(4200,2300)-(5318,2991)` | Bottom-right inside the crop, adjacent to the signature zone | Rooftops and fences. Clean. |
| **Delivered file** `(1250,700)-(1600,900)` at 5x | The corner nearest the removed signature | **Clean — signature fully excluded.** |
| **Delivered file** `(600,400)-(1000,620)` at 5x | The Palace at delivered resolution | No plaque, no lettering, no nameplate. |

**C3c applied to the visitors.** Three people walk the forecourt path. At native they are 32 px
tall; in the delivered 1600 x 900 file they are **~10 px** — unresolvable as faces, clothing or
posture. They are not identifiable and are not costumed interpreters (modern casual dress, one
adult carrying a child). Pass.

### ALTERNATE — a trade-shop nameplate, converted to delivered pixels before judging (C3c)

At 3x on the native file a **small dark plaque with two lines of text** appears on the cream
clapboard wall right of the portico — a Colonial Williamsburg trade-shop nameplate (reads as a
generic trade description, not a commercial brand). Measured at native **x ≈ 2893–2953,
y ≈ 2279–2309 — about 60 x 30 px.**

**C3c says measure in the shipped file.** At the delivery scale of 0.2667x that plaque is
**~16 x 8 px**. The delivered 1600 x 900 file was cropped around it and magnified **10x at nearest
neighbour**: it resolves as a **featureless grey-brown rectangle with two faint darker smudges. No
letterforms. No colour. No wordmark.** It is not legible, not identifiable, and does not name a
property. This is the Myrtle Beach SkyWheel finding repeating exactly — a high-zoom find that does
not survive into the deliverable. **Does not reject.**

Other regions magnified on the native alternate:

| Region (native) | Result |
| --- | --- |
| `(1000,900)-(2400,2000)` at 3x — white house gable, cornice, shutters | Clean. No plaque, no number, no text. |
| `(3400,1000)-(5200,2400)` at 2x — shingled roof and brick chimneys, right third | Clean. |
| `(1200,2300)-(3600,3375)` at 2x — fence line and the yellow/cream wall | Only the 60x30 plaque above. Fence, gate, garden furniture otherwise. |

---

## 6. C5 — saleability judged first, branding second

Consistent with C5, **branding was not the dominant rejection cause here either.** Of nine
substantive rejections, **five failed on "not premium / not vacation-selling"** before branding was
ever assessed: bare winter trees and dead grass (x3), flat blown-out white sky (x2), an overcast
snapshot with a road across the foreground, a dirt vegetable plot. Signage fired four times, all of
it street-level or interpretive, never a resort nameplate — again matching C3b and C5.

Both nominees pass the vibe test on their own terms: the primary is a genuinely handsome
golden-green drone frame of a historic district in full leaf; the alternate is warm afternoon light
on a colonial streetscape in high summer.

---

## 7. Every candidate opened — 23 files, all inspected with the Read tool

Nothing below was judged on metadata. Every row was downloaded and looked at.

| # | Candidate | Source title (recorded per C1) | Verdict | Reason |
| --- | --- | --- | --- | --- |
| 1 | U `photo-1590129695669-1a7b42fc9c3c` | "aerial view of green trees and houses during daytime" — Eric Foster | **APPROVE — PRIMARY, visually verified** | Elevated, many buildings, no subject building, no signage. Burned-in signature reframed out. |
| 2 | P `13005864` | "Historic colonial architecture nestled amid lush greenery in Williamsburg, VA" — Brian Magill | **APPROVE — ALTERNATE, visually verified** | Four rooflines, warm light, no people, only mark is 16x8 px in delivery. |
| 3 | P `13005861` | "Beautiful colonial architecture and lush gardens at the Governors Palace…" — Brian Magill | REJECT | **C3** — single building is the subject. Handsome, but one property fills the frame. |
| 4 | P `29112159` | "Historic Governor's Palace in Colonial Williamsburg surrounded by autumn foliage" — VividVoyage | REJECT | **C3** — single building, dead-centre and symmetrical. Best-looking single-building frame in the set; still fails the governing rule. |
| 5 | P `577791` | "Charming colonial architecture of historic buildings in Williamsburg" — C. Spencer Van Gulick | REJECT | **C3b + interpreter.** "Wᴹ PITT" and "Merchant" legible twice (hanging sign and shopfront); a costumed interpreter in the doorway. Both buildings carry the mark, so reframing cannot save it. |
| 6 | P `36655999` | "Historic Williamsburg Governor's Palace in autumn" — Ian Caballero | REJECT | **C5** — bare winter trees, brown grass, a maintenance golf cart, two crowds of visitors. Caption says autumn; the pixels say February. |
| 7 | P `38209995` | "Scenic garden path leading to river view" — Danilo D. Gonzalez | REJECT | **C5 + C4** — bare trees, dead lawn, and a single identifiable man standing dead centre at the gate. |
| 8 | P `38210001` | "Historic colonial mansion with brick pathway" — Danilo D. Gonzalez | REJECT | **C5 + wrong place.** Winter, brown grass, bare trees. Architecture does not read as Williamsburg; same photographer/session as #7. |
| 9 | P `5823091` | "View of a park in autumn" / "…leaf-lined path…in a peaceful park" — Isaac Swartz | REJECT | Destination unproven — the caption names no place and the weathered dark outbuildings could be any mid-Atlantic living-history site. Family with stroller mid-frame. |
| 10 | P `33296938` | "Colonial-style building with lush green lawn and picket fence under a cloudy sky" — Rola Al Homsi | REJECT | **C3b + C5** — Merchants Square: three legible retail signs, a menu board, a parking deck top-right, a wheelie bin. Grey overcast. |
| 11 | P `33296953` | "Charming historic house with red door and picket fence…" — Rola Al Homsi | REJECT | Interpretive panel **"AN ARCHER HOUSE"** fully legible with a paragraph of body text; grey sky; road across the bottom. Also Yorktown, not Williamsburg. |
| 12 | P `31214761` | "Charming colonial brick house in historic setting" — Michael S. | REJECT | **C3** — single small house; a barrel parked centre-frame. Pretty sky, no destination breadth. |
| 13 | P `13005859` | "Elegant brick colonial house with lush greenery in Williamsburg, Virginia" — Brian Magill | REJECT | **C3** — single building. Heavy dark leaf vignette on all four sides leaves no overlay space. Genuinely attractive; still one property. |
| 14 | U `photo-1645319639077-0834f959fafc` | "a large brick building with a clock tower" — Andy Henderson | REJECT | **C3 + C5** — the Capitol alone, heavy teal/orange grade, winter brown. |
| 15 | U `photo-1572466920113-5c75b857c4dd` | "brown bricked building" — Christian Alvarez | REJECT | **C3 + C5** — Palace alone; phone snapshot; tourists in bright modern dress across the lower third, one pushing a stroller. |
| 16 | U `photo-1608036631626-7611f6a30de4` | "brown brick building under blue sky during daytime" — Gregory Wood | REJECT | **Foundation signage.** An interpretive panel ("The Governor's P…") bottom-right and an **"ENTRANCE"** sign on the gate rail — exactly what the Williamsburg caution excludes. Single building. |
| 17 | U `photo-1611697841730-4792c00b08ff` | "white and brown concrete church under blue sky during daytime" — Anthony DeWitt | REJECT | **C3 + costumed interpreter** seated on the Courthouse steps. Grey gravel fills the bottom third. |
| 18 | U `photo-1652234822456-c332e920f29a` | "a building with a tower and a tree in the background" — Michaela Murphy | REJECT | **C3 + C5** — Palace roof through redbud; the sky is blown to flat paper white across 60% of the frame. |
| 19 | U `photo-1652234622183-5c5acb80f269` | "a brick building with a tree in the front" — Michaela Murphy | REJECT | **C3** — one flat facade, frontally lit, no depth, no destination. |
| 20 | U `photo-1754571292823-6b93b145e285` | "Vegetable garden with a fence and trees in background" — Alisa Gingerich | REJECT | **C5** — dirt rows and cabbages under flat overcast. Not vacation-selling by any reading. |
| 21 | U `photo-1632858499728-b6f5c0cf56cf` | "a building with a clock tower and fireworks in the sky" — Kedar Gadge | REJECT | **C3 + C5** — Wren Building alone, at night, in silhouette. Striking, but a university landmark at midnight does not sell a condo stay and gives no overlay space. |
| 22 | U `photo-1702952058920-55843951cda7` | "a tall building with a clock on the top of it" — Mayer Tawfik | REJECT | **C3 + C5** — Wren cupola from below, blown white sky, weathervane reads "1693". |
| 23 | U `photo-1753799515911-33facb1f8a75` | "A brick church steeple reaches towards the sky" — Anthony Roberts | REJECT | **C3** — Bruton Parish steeple alone, low angle. |

`U` = Unsplash, `P` = Pexels.

### Excluded on sight from the search listings, never downloaded
- **Costumed interpreters / reenactors** (Williamsburg caution): P `29187830` fife and drum corps,
  P `29187831` carriage driver in period attire, P `13005858` interpreter scraping a plank,
  P `29111932` military band, P `18326141` / `18326202` / `18326486` / `18326487` / `18326502`
  (all Clement Proust, Québec reenactment), P `19642418`.
- **Busch Gardens** (avoid entirely): U `photo-1651503774460-…`, `…774467-…`, `…774304-…`,
  `…774449-…`, `…774462-…`, `…773636-…` (Drew Hastings, six roller-coaster and park frames).
- **Unsplash+ / paywalled — zero budget** (named, not proposed): `photo-1689974467887-fd222b592a42`,
  `photo-1715118690405-572ddfa837ff`, `photo-1734543942913-4e6014e6dc34` (horse-drawn carriage),
  `photo-1694475011140-1c4db558aeb9`, `photo-1694475184263-3e03f11c7ff8` (Getty),
  `photo-1697461934382-3579ef58ad50` (**"an aerial view of a town surrounded by trees"**, Lerone
  Pieters — the single closest paywalled match to the governing rule; it is Unsplash+ and therefore
  out of scope), `photo-1696273223781-…`, `photo-1728613098929-…`, `photo-1676481691994-…`,
  `photo-1697762692100-…`, plus five `premium_photo-` results on the Duke of Gloucester query.
- **People as subject:** P `4714502`, `2413025`, `1391465`, `1482413`, `2381634`, `1432387`,
  `1432397`, `1566736`, `4714497`, and the whole Tnarg portrait series on Pexels page 2.

---

## 8. Searches run — and the four that were pure waste (C6)

| Query | Platform | Outcome |
| --- | --- | --- |
| `williamsburg virginia` | Pexels | **Productive** — 24 results, yielded the ALTERNATE. Confirms the "always qualify with virginia/colonial" note: plain "williamsburg" is Brooklyn. |
| `colonial williamsburg` | Unsplash | **Productive** — 20 results, yielded the PRIMARY. |
| `williamsburg virginia` | Unsplash | Partly productive — surfaced two new free candidates and the paywalled aerial. |
| `colonial williamsburg` | Pexels | Almost fully redundant with query 1; added only reenactor frames. |
| `williamsburg virginia` page 2 | Pexels | **Exhausted.** 24 results, of which ~18 are portrait sessions and the rest are Alexandria, Lexington and Cape May. Supply is one page deep. |
| `williamsburg virginia golf` | Pexels | **WASTE — destination solvent.** Returned Crozet VA, Hilton Head SC, Kiawah Island SC, Eustis FL, and the Washington Monument. The four Williamsburg hits were all already known from query 1. |
| `williamsburg virginia aerial` | Pexels | **WASTE — destination solvent.** "aerial" dissolved the place: 10 of 24 results were Richmond, plus Hampton VA, Fort Mill SC and High Point NC. Two Williamsburg hits, both already known. |
| `duke of gloucester street` | Unsplash | **WASTE — destination solvent.** Without a place qualifier the phrase returns English and European market streets; zero Williamsburg results, and five of the twenty were `premium_photo-`. |

**Finding for the next condo agent:** on Williamsburg, the amenity/feature word is as corrosive as
C6 warns, and the effect is worse than on a coastal strip. `golf` and `aerial` — the two words most
likely to reach the governing rule's framing — are precisely the two that destroyed the
destination. **The productive move was the opposite: bare `colonial williamsburg` on Unsplash, and
letting the drone frame surface on its own.** That is C6's "dense-strip" prescription applied to a
dense *historic* district, and it worked identically.

`condo`, `villa`, `vacation rental`, `resort`, `hotel pool` and all interior vocabulary were never
searched, per C6. The state name was used only on Pexels `williamsburg virginia`, which the task
explicitly designates as this destination's sanctioned exception.

---

## 9. C2 — supply shape on this destination

Williamsburg behaves like Sedona, not like Myrtle Beach. Across eight queries and roughly 150
distinct results, the historic area produced **two** frames that clear the governing rule, and both
surfaced in the very first query on their respective platform. Everything else is one of four
things: a single-building portrait of the Governor's Palace, the Capitol or the Wren Building
(there are at least nine of those); a reenactor photograph; a Busch Gardens ride; or a portrait
session that happens to be tagged Williamsburg.

**There is no condominium or resort imagery of Williamsburg in free stock at all.** Not one frame
in the sweep showed lodging. The James River waterfront returned nothing usable (the only
candidate, P `38209995`, is a winter shot with an identifiable man in it), and golf grounds among
pines returned nothing in Williamsburg whatsoever — the query dissolved to other states. The two
nominations are therefore the destination's *landscape and architecture*, per C3d ("shoot the
destination, not the building"), which is the correct fallback and is what the task instruction
directed.

---

## 10. Licence and AI provenance

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Licence | **Unsplash License** — no attribution required, no share-alike. Confirmed free on the photo page, **not** Unsplash+. | **Pexels License** — no attribution required, no share-alike. |
| CC BY-SA caution | N/A | N/A |
| EXIF in the served file | **None** — Unsplash strips it. | **Camera fields stripped** — only container tags survive (`Orientation`, `X/YResolution`, `ExifImageWidth/Height=6000/4000`). This is the Pexels exception in the brief, confirmed on an un-resized original. |
| Substitute provenance check | **Two independent positives.** (a) The `photo-<n>-<hash>` prefix `1590129695` decodes to **2020-05-22T06:41:35Z** — comfortably pre-generative. (b) The Unsplash photo page *publishes* the camera it stripped from the file: **Hasselblad L1D-20c**, which is the camera of the DJI Mavic 2 Pro — a real drone body, and exactly what the frame looks like. | **Sensor-geometry check, as a reasoned call.** Native **6000 x 4000** is exact 3:2 at 24.0 MP — the standard full-frame/APS-C 24 MP readout (Sony A7 III, Nikon Z6, Canon R6 class). It is not a generator geometry (no 1024-multiple, not square, not a 16:9 or 4:3 synthetic output), and the frame contains consistent lens-specific sagittal blur in the corner foliage and a genuine shallow depth-of-field falloff across the fence planes. Reasoned pass, not an unexamined one. |
| Suspicious round dimensions? | 5318 x 3543 is a slight crop off the Mavic 2 Pro's native 5472 x 3648 — the opposite of a round generator dimension. | 6000 x 4000 *is* round, which is why the geometry argument above is stated explicitly rather than waved through. It is round because 24 MP sensors are round, and the camera-side evidence in the pixels is consistent. |

---

## 11. Compliance summary against the condo rules

| Rule | PRIMARY | ALTERNATE |
| --- | --- | --- |
| **C1** caption/filename never carries source metadata | Recorded in §2 for stripping. Neither title names a property. | Recorded in §2. Download filename carries the photographer's name — must not ship. |
| **C2** expect one-or-none | Confirmed: exactly two usable frames on the whole destination. | — |
| **C3** no single building is the subject | Largest building = **8.4% of frame width**. | Four rooflines, none foregrounded. |
| **C3b** low buildings magnified first | Done. Forecourt, fences, outbuildings, both bottom corners checked before the Palace. | Done — the only mark in the sweep was on a low clapboard wall, found because C3b said to look there. |
| **C3c** high-zoom find converted to delivered pixels | The signature was converted and **reframed out entirely**. | The nameplate was converted: **16 x 8 px, no letterforms at 10x on the shipped file.** Does not reject. |
| **C3d** shoot the destination, not the building | Drone frame; the destination's forest and historic district *are* the subject. | Streetscape glimpse, not a building portrait. |
| **C4** no identifiable private residence | These are museum-operated exhibition buildings in a public historic district, not private homes. | Same. |
| **C5** saleability judged first | Passes — lush, warm, wide. | Passes — warm afternoon light, full summer foliage. |
| **C6** search vocabulary | Complied; four wasted queries documented in §8 so the next agent does not repeat them. | — |
| **C7** every facade checked for signage | Done at 2x native and 5x delivered. **Nothing.** | Done at 3x native and 10x delivered. **One 16x8 px unresolvable plaque.** |
| **Williamsburg caution** — no costumed interpreters | **None in frame.** Three modern-dressed visitors at ~10 px. | **No people at all.** |
| **Williamsburg caution** — no foundation signage or ticketing | **None.** (This rejected candidate #16, which carried both an interpretive panel and an "ENTRANCE" sign.) | **None legible.** |
| **Williamsburg caution** — no Busch Gardens | Six Busch Gardens frames excluded on sight from the listings. | Same. |
| Zero budget | Free Unsplash License. | Free Pexels License. |
| No retouching | None performed. The signature was **cropped around**, not removed. | None performed. |

---

## 12. Honest caveats

1. **The primary's subject is a foundation-operated museum district.** The task's Williamsburg
   caution permits this — "historic buildings and streetscapes are widely photographed and generally
   fine as a destination cue" — and the frame carries no foundation signage, ticketing or
   interpreters. But it should be understood for what it is: Williamsburg's *destination* imagery,
   not lodging imagery. **There is no free-stock condominium or resort exterior for this destination
   at all**, and the sweep is the evidence for that claim, not an assumption.
2. **The alternate's overlay space is limited.** It is a busy frame. If the design needs a large
   clean field for type, the primary is the only one of the two that supplies it, and a second
   alternate does not exist in free stock on this destination.
3. **The closest paywalled match is named, not proposed.** `photo-1697461934382-3579ef58ad50`
   ("an aerial view of a town surrounded by trees", Lerone Pieters, Unsplash+) is the one asset that
   might beat the primary on the governing rule. It is behind a paid licence and is therefore out of
   scope under the standing zero-budget constraint. **No purchase is recommended** — the free
   primary already satisfies every rule, so this is a note for completeness, not an unresolved gap.
4. **The primary's signature is a live risk if anyone re-crops.** The delivered crop is safe, but
   the source file is not. If the crop is ever changed, `(0, 0, 5318, 2991)` is the hard ceiling:
   any crop reaching below **y = 3390** at the right edge reintroduces burned-in third-party text.
   This should be recorded wherever the asset is stored.

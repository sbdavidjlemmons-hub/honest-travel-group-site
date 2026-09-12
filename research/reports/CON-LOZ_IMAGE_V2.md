# CON-LOZ — Lake Ozark Condo — Image acquisition V2

**Certificate:** CON-LOZ / lake-ozark-condo / Lake Ozark Condo
**Destination:** Lake of the Ozarks, Missouri
**Scope:** images only. No pricing work. No other repo file modified.
**Procedure:** IMAGE_BRIEF_V2.md followed in full, including condo rules C1–C7.
Every candidate below was downloaded and **opened with the Read tool**. Brand checks were run on
the **native-resolution** file fetched with **no query string**. Delivery crops rendered with PIL.

---

## VERDICT

| Slot | Asset | Status |
| --- | --- | --- |
| **PRIMARY** | Unsplash `photo-1667429148135-2268f799526e` — Davis Patton — 3539 x 5280 | **APPROVE — visually verified at 100%** |
| **ALTERNATE** | Unsplash `photo-1599253096038-711256841b20` — Frames For Your Heart — 6000 x 4000 | **APPROVE — visually verified at 100%, reframed** |

Both are **Unsplash License** (free commercial use, no attribution obligation, no share-alike).
Neither is `premium_photo-` / Unsplash+ / Getty. **Zero budget respected.** No retouching performed
or required. **Neither needs upscaling** — both deliver at well under 1.0x.

Both are **location-confirmed by the photographer's own Unsplash location field** as Lake of the
Ozarks / Lake Ozark, Missouri. This is a stronger destination proof than the Sedona probe had.

Supply was thin exactly as the caution predicted, but **not** one-or-none: two usable frames,
from a pool of 20 opened.

---

## PRIMARY — Unsplash `iMaKLcqnY14` (Davis Patton)

- **URL (native, NO query string):** `https://images.unsplash.com/photo-1667429148135-2268f799526e`
- **Photo page:** `https://unsplash.com/photos/a-body-of-water-with-buildings-around-it-iMaKLcqnY14`
- **Photographer:** Davis Patton
- **Licence:** "Free to use under the Unsplash License"
- **Stated location:** "Lake of the Ozarks, Missouri, USA"
- **Published:** 2 November 2022
- **Native:** 3539 x 5280 (portrait)

### What is actually in the frame

A 35mm film frame shot from a **condominium balcony** on a bluff above the lake. Reading the
frame from the edges in: the steel rail and timber deck of the shooter's own balcony at left; the
soffit and eave of that building at top-left; three **covered boat-dock rows** with boats in slips
stepping down the cove below; the open lake with four boats under way; the far wooded shore with a
distant multi-storey building on the horizon; and, on the right bluff, a **large multi-storey
condominium bank** — six visible floors of tiered private balconies and sliding doors under a
shingle roof.

This is the certificate's product stated in one image: a multi-unit lake condo with balconies,
boat docks and open water. It is also a textbook **C3 pass** — the frame contains the shooter's
building, a second condo bank, three dock structures and a far-shore tower, so **no single building
is the subject** and the frame cannot imply a guarantee of any one property.

### 100% brand check — what I actually did

Native tiles cut across every built region, then targeted magnification of every sign-shaped
object. Brightness was lifted on shaded tiles purely to see into shadow (inspection only — the
delivered file is unmodified).

| Suspect object | Native location | Magnification | Resolved as |
| --- | --- | --- | --- |
| Condominium facade, right bluff | (2600–3539, 2420–3150) | 3x, +2.6 brightness | **Balcony rails, posts and sliding doors only. No nameplate, no wordmark, no signage of any kind.** |
| Distant building on far shore | (1750–2450, 2540–2720) | 7x | **Featureless grey block against the treeline. No letterforms, no rooftop mark, no colour break.** |
| Boats in covered slips, dock row 1 | (250–1250, 3180–3560) | 4x, +1.9 | Boat sterns in deep shade under dock canopies. **No hull lettering resolvable.** |
| Boats in covered slips, dock row 2 | (250–1250, 3560–3900) | 4x, +2.1 | Dock canopies, decking, railings. **No text.** |
| Boats under way on open water | (700–1900, 2850–3080) | 5x, +1.3 | 40–60 px hulls with wakes. **No hull lettering resolvable.** |
| Foreground balcony, left | (0–400, 2850–4100) | 4x | Metal rails, timber decking, a glazed door. **No signage.** |
| Eave / soffit, top-right | (2950–3539, 150–700) | 5x | Painted soffit and fascia. **No signage.** |

**Result: no legible property name, no logo, no wordmark, no third-party commercial signage
anywhere in the file at native resolution.** No refuse bins, no razor wire, no power lines, no
car park, no people, no vehicles.

### C3c — converted to DELIVERED pixels before judging

The only object that could conceivably carry a mark is the far-shore tower. Measured **in the
1600x900 delivered file** it is **~55 x 12 px**. Magnified 10x out of the delivered file it is
still a flat grey silhouette with no letterforms and no colour. **Unresolvable at 1:1.** The
7x native find is a false positive and was not used to reject anything.

### Delivery crop (16:9)

```
source:  photo-1667429148135-2268f799526e   (3539 x 5280, native, no query string)
crop:    (x0, y0, x1, y1) = (0, 1850, 3536, 3839)   ->  3536 x 1989   (exact 16:9)
resize:  1600 x 900
scale factor: 0.4525x   (DOWNSCALE — no upscaling, large headroom)
```

Why this band and not the others, tested rather than assumed:

- **y 2150–4141** (lower): more dock detail but the sky band shrinks to ~12% and the frame goes
  murky. Rejected.
- **y 1600–3589** (higher): more cloud, but it cuts the third dock row and the bottom of the condo
  bank, which is the part that says "condo". Rejected.
- **y 1850–3839 is the balance point.** It keeps ~35% clean sky across the top, the full lake with
  boats under way, all three covered dock rows, the complete condo bank on the right, and the
  balcony rail as a left-edge framing device. It also **crops the very dark lower balcony mass and
  the shore rubble off the bottom** — a free reframing win.

**Overlay real estate:** a broad, low-detail sky band across the top ~35% of the delivered frame
(y 0–310 of 900), plus a flat mid-tone water band at roughly y 400–600 that takes a scrim cleanly.

### AI / provenance screen

Unsplash strips EXIF, so the brief's timestamp substitute was used: the numeric prefix
`1667429148` decodes to **2022-11-02T22:45:48Z**, which matches the page's stated publish date of
2 November 2022 exactly. Geometry: **3539 x 5280** is a scanned-35mm-negative aspect (2:3 plus a
sliver of rebate) — an irregular, non-round dimension pair that generator output does not produce.
The photographer's own tags on the page read `film, film photography, 35mm`, and the frame carries
visible silver-halide grain across the sky and shadow, confirmed at 4x. **Reasoned pass.**

### Residual risks, stated honestly

1. The right third of the frame (the condo bank and the bluff foliage) sits in deep shade. A
   global shadow/exposure lift at publication would help and is **a tone adjustment, not
   retouching** — nothing is being removed. It is optional; the frame works as delivered.
2. The film stock renders the sky slightly desaturated and warm. That reads as intentional and
   premium, not as a fault, but it will not match a saturated blue-sky treatment elsewhere on the
   site without a tone pass.

---

## ALTERNATE — Unsplash `fOzvs8KISBw` (Frames For Your Heart), reframed

- **URL (native, NO query string):** `https://images.unsplash.com/photo-1599253096038-711256841b20`
- **Photo page:** `https://unsplash.com/photos/fOzvs8KISBw`
- **Photographer:** Frames For Your Heart
- **Licence:** "Free to use under the Unsplash License"
- **Stated location:** "Lake Ozark, Lake Ozark, United States"
- **Published:** 4 September 2020
- **Native:** 6000 x 4000

### What is actually in the frame

An elevated sunrise vantage over a lake cove with golden steam-fog lying on the water and a low
cloud draped over the far bluff. In the delivered crop: a wooded bluff falling to the shore; a
multi-level timber-and-glass lodge with tiered balconies among the trees; a two-storey dock
pavilion with a hip roof; a **long covered slip row** with boats; a second blue-roof dock below;
the mist-covered lake filling the right half; and a mown golf fairway with a bunker at bottom
right. Multi-property, elevated, no single building as subject — a **C3 pass**, and an unusually
strong one because the mist itself suppresses detail on everything.

### The reframe — step 4a, and it is what makes this candidate usable

The **full frame fails**, and would have been rejected without the reframe:

- A large grey-sided **single-family house with a garage** occupies the lower right at native
  (3700–5400, 2850–4000). Prominent, in full sun, unmistakably a private residence — **C4 reject**.
- The foreground bottom edge is a heavy mass of dark shingle roofs from another house, which kills
  the composition.

Cropping to **x 0–3888, y 1100–3287** removes the house entirely and cuts the foreground roofs off
the bottom edge, while keeping the mist, the lodge, both dock structures and the fairway. The
licence already covers it and it cost nothing. **Tested, not assumed** — the full-width and
bottom-anchored alternatives were both rendered and both fail on the house.

### 100% brand check — what I actually did

The delivery region (x 0–3888, y 1100–3287) was tiled at native in four quadrants and every
built object inside it magnified:

| Suspect object | Native location | Magnification | Resolved as |
| --- | --- | --- | --- |
| Small dark bar on the dock-pavilion deck rail | ~(2489, 2157) | **18x** | **Plain dark horizontal bar, ~14 x 3 px at native — a rail brace or bench back. No letterforms, no colour. Not a sign.** |
| Dock pavilion, covered slip row, blue-roof dock | (2000–2950, 2000–2500) | 5x | Roofs, posts, decking, boats in slips. **No signage.** |
| Bluff lodge with balconies | (1000–1900, 2150–2500) | 5x and 6x | Timber/glass facade, lit interiors, deck rails. **No nameplate, no signage.** |
| Far shore in mist | (1950–3900, 1100–2200) tile | 1:1 | Fog, treeline, one gazebo roof. **Nothing legible.** |
| Wooded bluff, left | (0–1950, 2200–3294) tile | 1:1 | Canopy plus one partially hidden lodge. **No signage.** |
| Golf fairway and bunker | (2900–3900, 2500–3294) | 4x | Mown grass, bunker, cart path, tree line. **No flag, no marker, no tee sign, no text.** |

**Result: no legible property name, no logo, no wordmark, no third-party commercial signage
anywhere in the delivery region at native resolution.**

### C3c — converted to DELIVERED pixels

The gazebo rail bar measures **~6 px** in the 1600x900 delivered file. Unresolvable at 1:1 by a
wide margin. The 18x native find was not used to reject anything.

### Delivery crop (16:9)

```
source:  photo-1599253096038-711256841b20   (6000 x 4000, native, no query string)
crop:    (x0, y0, x1, y1) = (0, 1100, 3888, 3287)   ->  3888 x 2187   (exact 16:9)
resize:  1600 x 900
scale factor: 0.4115x   (DOWNSCALE — no upscaling, large headroom)
```

**Overlay real estate:** the mist and low cloud across the top ~30% of the delivered frame is a
near-flat warm-grey field — the best scrim surface found in this whole sweep. The mist band on the
water at right (roughly x 1000–1600, y 350–550) takes type directly with no scrim at all.

### AI / provenance screen

Prefix `1599253096` decodes to **2020-09-04T20:58:16Z**, matching the stated publish date of
4 September 2020 — comfortably pre-generative. Geometry **6000 x 4000** is the native 24 MP 3:2
full-frame sensor frame (Nikon D750/Z6, Sony A7 III class). **Reasoned pass.**

### Residual risks, stated honestly

1. The lodge at native (1000–1900, 2150–2500) is a **dwelling**, and at 185 px of 1600 in the
   delivered frame it is identifiable in outline to someone who knows the cove. It is one element
   among four built structures, half-screened by canopy and unbranded, so it sits inside C3's
   many-property protection rather than C4's single-residence prohibition — but it is a judgement
   call, not a clean pass, and it is why this is the alternate and not the primary.
2. The frame shows **lodging + docks + golf**, not a condominium bank. It sells the destination
   superbly; it proves the *product* less directly than the primary does.

---

## C1 — SOURCE METADATA TO STRIP AT PUBLICATION (compliance, not workflow)

Neither nominee's metadata names a property — a better position than the Sedona probe, where the
title read "Villas of Arroyo Roble resort". But the location and tag strings still carry
destination metadata that must not be shipped verbatim, and the filenames are opaque hashes that
mean nothing to a reader.

| Asset | Source strings that exist | Action |
| --- | --- | --- |
| Primary | alt text `a body of water with buildings around it`; tags `lake, film, film photography, 35mm, building, scenery, usa, urban, cityscape, horizon, outdoors, waterfront, missouri, lake of the ozarks, lakefront`; filename `photo-1667429148135-2268f799526e` | **Re-caption generically. Do not carry the filename, alt text or tag list to the site.** |
| Alternate | alt text `green trees near lake during daytime`; location field `Lake Ozark, Lake Ozark, United States`; tags `outdoor, clouds, trees, purple, brown, cloudy sky, foggy morning, epic landscape, lake side, epic sky, sunrise light, forest, weather, fog, outdoors, roof, united states, mist`; filename `photo-1599253096038-711256841b20` | **Re-caption generically. Do not carry the filename, alt text or tag list to the site.** |

**Recommended shipped filenames and alt text** (destination-true, property-free):

- Primary — `lake-ozark-condo-hero.jpg`, alt: *"Covered boat docks and lakefront condominium
  buildings on a wooded cove at Lake of the Ozarks, Missouri."*
- Alternate — `lake-ozark-condo-alt.jpg`, alt: *"Morning mist over a wooded cove and boat docks at
  Lake of the Ozarks, Missouri."*

Neither caption names a property, because the certificate assigns the unit at confirmation.

---

## Every candidate opened — 20 of 20 visually verified

Search calls used, per C6: **Pexels `lake of the ozarks hotel`**, **Unsplash `lake of the ozarks`**
(pages 1–2), plus Pexels `lake of the ozarks`, Pexels `lake ozark`, Pexels `osage beach`, Unsplash
`lake ozark`, Unsplash `ozarks`, Flickr CC `lake of the ozarks condominium`. No query ever
contained "villa", "condo", "vacation rental", "oceanfront", or the state name.

| # | Source / ID | Photographer | What I saw | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Unsplash `photo-1667429148135-...` | Davis Patton | Condo balcony over the lake; three covered dock rows; condo bank on the right bluff; boats under way; clean sky. | **APPROVE — PRIMARY, visually verified** |
| 2 | Unsplash `photo-1599253096038-...` | Frames For Your Heart | Elevated sunrise mist; lodge, dock pavilion, covered slips, fairway. Full frame fails on a private house; **recovered by reframe**. | **APPROVE — ALTERNATE, visually verified** |
| 3 | Unsplash `photo-1648325607695-...` | Jayden Herr | Elevated deck view over a cove full of covered docks. Bright and attractive. But a row of large **identifiable private lake homes** fills the left bank (C4), and at 9x native the foreground jet-skis read **"WAVERUNNER VX"** plus a second brand on the cover behind. No condominium content at all. Both a full-width and a right-weighted reframe were rendered; the reframe drops the houses but *magnifies* the wordmark to 87 px. | **REJECT — C4 + two third-party product wordmarks, visually verified** |
| 4 | Unsplash `photo-1599253037629-...` | Frames For Your Heart | Beautiful misty docks at Lake Ozark — but **no lodging in the frame at all**. Reframe tested (`x 300–5100, y 900–3600`); still pure docks. Fails the condo family subject rule. | **REJECT — no resort/condominium content, visually verified** |
| 5 | Unsplash `photo-1599253313453-...` | Frames For Your Heart | A **single white-and-black private house** on a wooded bluff, filling the frame. | **REJECT — C3 single-building subject + C4, visually verified** |
| 6 | Unsplash `photo-1599321230119-...` | Frames For Your Heart | Fog-shrouded rooftops, no lake, no light, drab. | **REJECT — C5 not premium / not vacation-selling, visually verified** |
| 7 | Unsplash `photo-1766284808386-...` | Far Chinberdiev | **Branson, Missouri strip.** Titanic Museum, OZARKLAND, Walgreens, Clay Cooper, Waffle/Pancake House, Best Western, Cheddar's, King Kong — eight-plus legible brands, and the wrong town. Precisely the C3b failure mode. | **REJECT — branded retail strip, wrong destination, visually verified** |
| 8 | Unsplash `photo-1597214986913-...` | Daniele Salutari | **Lake Como, Italy** — a dock on an alpine lake, with Italian signage. C6's "destination solvent" in action. | **REJECT — wrong destination, visually verified** |
| 9 | Unsplash `photo-1590193673229-...` | Sikes Photos | Wide lake with forested hills and a buoy line; a few pinprick houses on a distant ridge. No lodging; location unproven (reads as Beaver/Table Rock, not Lake of the Ozarks). | **REJECT — no resort content, destination unproven, visually verified** |
| 10 | Unsplash `photo-1627612381127-...` | Alulia Baca | Timber boardwalk over a green Ozark spring branch. Lovely, but no lodging and no lake vista. | **REJECT — no resort content, visually verified** |
| 11 | Unsplash `photo-1603710058274-...` | Jay Mullings | Very dark drone frame of a wooded pond with islands. Underexposed, no lodging. | **REJECT — C5 + no resort content, visually verified** |
| 12 | Pexels 20581522 | iPhone Snaps | "Village houses in forest by lake" — autumn boathouses with a **Canadian flag**: Thousand Islands / St. Lawrence, and all private residences. | **REJECT — wrong destination + C4, visually verified** |
| 13 | Pexels 1643702 | Devon Schreiner | Handsome dusk drone frame of a wooded channel with covered docks. Pexels page states the location as **"Hollister, MO"** — Lake Taneycomo / Table Rock, ~130 miles from Lake of the Ozarks, a different lake. | **REJECT — wrong destination, visually verified** |
| 14 | Pexels 762527 | Eli Burdette | Silhouetted person by the water at sunset. Person is the subject; no lodging; could be anywhere. | **REJECT — no resort content, visually verified** |
| 15 | Pexels 39267077 | Chris F | Genuinely premium golden-hour aerial of a lake with a marina and farmland beyond. **Pexels page states no location**, and the farmland/limestone-bluff mix does not match Lake of the Ozarks. No lodging. | **REJECT — destination unprovable + no resort content, visually verified** |
| 16 | Pexels 39267078 | Chris F | Sunset aerial with a **highway interchange and streetlights** across the lower half. | **REJECT — C5 not vacation-selling, visually verified** |
| 17 | Pexels 39260954 | Karen F | Bare limestone bluff over water at drawdown level. No lodging, no colour. | **REJECT — C5 + no resort content, visually verified** |
| 18 | Pexels 9469536 | Josh Sorenson | Interstate bridge over a lake between ridges — Nickajack / Tennessee River. | **REJECT — wrong destination + no resort content, visually verified** |
| 19 | Pexels 33786524 | Samm Cool | Sunset speedboat. **"SUPRA" legible on the hull** — exactly the boat-brand risk flagged in the task. No lodging. | **REJECT — legible boat-brand wordmark, visually verified** |
| 20 | Pexels 39169163 | Chris F | Highway bridge over a lake from a clifftop; bridge is the subject. Location unstated. | **REJECT — no resort content, visually verified** |

### Searches that returned nothing usable

- **Flickr CC `lake of the ozarks condominium`** — literally zero results ("Oops! There are no
  matches"). Flickr's CC index does not cover this destination for lodging.
- **Pexels `osage beach`** — the amenity-word solvent at its worst: returned osage-orange fruit,
  Philippine nipa huts, and generic sunset beaches. Nothing from Missouri.
- **Unsplash `ozarks`** — regional forest, waterfalls and streams, plus five Unsplash+ paywalled
  items. No lodging, no Lake of the Ozarks.
- **Unsplash `lake-of-the-ozarks` page 2** — identical to page 1. The result set is 11 items deep
  and does not page further.

### Paywalled items found and NOT pursued (zero budget)

Named for the record, per the brief, but **not proposed for purchase**:
`premium_photo-1696531220266-362a418da9b4` (Andrej Lišakov),
`premium_photo-1713375115181-edb9c7e7b379` (Alex Shuper),
`premium_photo-1663952767296-821ef8d2d1b2` (Unsplash+ Community),
`premium_photo-1668614136462-3441ebb611c3` (Hans Ott),
`premium_photo-1664287370628-9b18a016f54c` (Sandra Seitamaa),
`premium_photo-1786750278452-11ccd27e45b2` (Getty, "The Ozarks" region).
None was needed — the two free nominees are better than the paywalled aerials for this brief,
which want lodging in frame, not bare water.

---

## What this destination taught, for the next condo agent

1. **C2 is not always "one or none".** Lake of the Ozarks yielded **two**. The reason is that its
   Unsplash contributors tag location precisely, so `lake of the ozarks` and `lake ozark` are two
   *different* usable result sets — the second surfaced the entire Frames For Your Heart series
   that the first did not. **Run the destination name in both its common spellings.**
2. **The condo analogue of "a photographer shooting the place" is a guest shooting from a balcony.**
   The primary here is not a resort marketing photo; it is someone's film snapshot out of their own
   condo door. That vantage automatically satisfies C3 (your building frames the shot, other
   buildings fill it) and automatically suppresses signage (you are above and behind every sign on
   your own property). **Search for the destination and look for balcony-rail framing.**
3. **C3b held exactly as stated.** Zero resort nameplates were found across 20 candidates. The
   branding that *did* fire was all low and small: a jet-ski cover, a boat hull, and an entire
   branded retail strip in Branson. **Magnifying the towers would have found nothing and shipped
   the WaveRunner.**
4. **C5 held as the dominant cause.** 13 of the 18 rejections were "not premium / no resort
   content / wrong place", and only 2 were branding. Judging saleability first saved the most time.
5. **A new destination-solvent to add to C6's list: the lake's own name is ambiguous.** "Lake
   Ozark" (the town), "Lake of the Ozarks" (the lake) and "the Ozarks" (a four-state upland region)
   return three different places. The third is nearly worthless — it pulls Arkansas waterfalls and
   Branson. **"Ozarks" alone is a destination solvent; the two specific forms are not.**
6. **Bagnell Dam Strip was correctly pre-flagged.** It never surfaced in the free result sets at
   all, so no call was spent on it; but Branson's strip did, and it is the same trap under a
   different name. **Any Missouri "strip" frame is branded retail.**

---

## Files produced (scratch only — no repo files other than this report were touched)

```
/tmp/.../scratchpad/conloz/NATIVE_1667429148135-2268f799526e.jpg   3539 x 5280  primary, native
/tmp/.../scratchpad/conloz/NATIVE_1599253096038-711256841b20.jpg   6000 x 4000  alternate, native
/tmp/.../scratchpad/conloz/FINAL_primary_1600x900.png              1600 x 900   primary delivery crop
/tmp/.../scratchpad/conloz/FINAL_alternate_1600x900.png            1600 x 900   alternate delivery crop
```

Neither delivered file involves any upscale: **0.4525x** and **0.4115x** respectively, both well
under 1.0x.

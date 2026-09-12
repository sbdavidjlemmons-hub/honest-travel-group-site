# CON-BRA — Branson Condo — Image acquisition V2

**Certificate:** CON-BRA / branson-condo / Branson Condo
**Destination:** Branson, Missouri (Ozarks — Table Rock Lake / Lake Taneycomo)
**Product:** condo stay, unit assigned at confirmation, no resort named
**Scope:** images only. No pricing work. No repo file modified except this report.
**Procedure:** IMAGE_BRIEF_V2.md followed in full, including condo rules C1–C7. Every candidate below
was downloaded and opened with the Read tool. Brand checks were run on the **native-resolution** file
fetched with **no query string**. Delivery crops rendered with PIL and re-inspected as *delivered
pixels*, per C3c.

---

## VERDICT

| Slot | Asset | Status |
| --- | --- | --- |
| **PRIMARY** | Commons `Table Rock Branson Missouri.jpg` — Tony Webster — 7717x5057 | **APPROVE — visually verified at 100%** |
| **ALTERNATE** | Pexels 1643702 — Devon Schreiner — 3992x2992 | **APPROVE — visually verified at 100%** |

Zero budget respected — no Unsplash+, no Getty, no `premium_photo-`, nothing purchasable.
No retouching performed or required. Neither crop upscales.

**The primary is CC BY-SA 2.0.** Share-alike attaches to the published crop. That is a real
deployment obligation, not a formality — see *Licence warning* below. The alternate is Pexels
License with no attribution and no share-alike, and is the correct pick if the client will not
accept a copyleft asset.

---

## The governing rule did the work

**Shoot the strip, not the resort.** The two frames that passed are the only two in the set where
*no single building is the subject*. Every ground-level and single-property frame failed, 15 for 15,
exactly as the brief predicts. The Branson caution also held perfectly: the one frame that showed the
Highway 76 Strip carried **eight** legible third-party brands in a single image and was unsalvageable.

---

## PRIMARY — Commons `Table Rock Branson Missouri.jpg`

- **File page:** `https://commons.wikimedia.org/wiki/File:Table_Rock_Branson_Missouri.jpg`
- **Direct (native, no query string):** `https://upload.wikimedia.org/wikipedia/commons/8/80/Table_Rock_Branson_Missouri.jpg`
- **Photographer:** Tony Webster (Flickr user 87296837@N00)
- **Licence:** **CC BY-SA 2.0** — attribution **and** share-alike
- **Native:** 7717 x 5057
- **Source title (C1 — record so it can be stripped):** Commons filename `Table Rock Branson
  Missouri.jpg`; Flickr description *"Table Rock near Branson, Missouri, in spring."*
  No property is named in the title, but the filename must still not ship — see C1 handling below.

**What is in the frame.** An elevated vantage across Branson's lakeside condominium district: a large
red-tile-roofed condominium village of five- and six-storey blocks with private balconies runs across
the lower-left and centre; a teal-roofed condo cluster sits at far left; further multi-unit lodging,
a tennis court and a swimming pool sit below; the wooded Ozark ridgeline crosses the middle with
Inspiration Tower visible as a small silhouette at right; and a broad, clean blue sky with soft
cumulus fills the top ~45% of the delivered frame. **Dozens of separate properties are in shot and
none is the subject** — the C3 compliance test is satisfied structurally, not by luck.

### 100% brand check — what I actually did

Native tiles and 5x magnifications across the entire built band, then every find re-measured in the
**delivered 1600x900 file** per C3c:

| Suspect object | Native location | Resolved at 5x native | **Size in the DELIVERED file** |
| --- | --- | --- | --- |
| Roadside billboard | ~(2850–3250, 1950–2250) | **Legible: "HUNGRY?"** plus three food photos | 20 x 11 px — **colour blocks, zero letterforms** |
| Pylon sign below it | ~(2950, 2080–2300) | White panels, a "D" monogram, sub-legible body text | 8 x 22 px — **white smear, no text** |
| Second billboard | ~(5080–5480, 2050–2290) | Multi-panel advert, several product logos, none readable | 26 x 28 px — **colour speck** |
| **Fuel-brand pecten on a pole** | ~(2600, 1990) | Yellow rounded shield on a post | **~8 x 8 px — no letterforms** |
| Filling-station canopy | ~(2450–2800, 2060–2110) | Yellow forecourt canopy, no wordmark visible even at 5x | 70 x 13 px — **generic yellow band** |
| Marquee sign, mid-right | ~(5300, 2000) | Colour panels, unreadable | speck |
| All condo facades, roofs, balconies | every tile | **No nameplate, no signage of any kind** | — |

**Result: no legible third-party wordmark anywhere in the delivered file.** Resort nameplates: none —
consistent with C3b (nameplates failed only 1 of 15; retail signage is the real risk, and here it is
sub-resolution).

**Residual risk, stated honestly.** The yellow pecten is ~8 px in the shipped file with no
letterforms, but its *colour and silhouette* are those of a well-known fuel brand and a viewer who
magnifies the delivered file 4x could guess it. Per C3c this is a false-negative trap, not a failure
— the Myrtle Beach precedent shipped a 14 px SkyWheel on the same reasoning. It cannot be cropped
out: it sits on the same highway band as the condo village, and any 16:9 frame containing both sky
and condos must cross that band. **Flagged, not hidden.**

### Reframes tested

| Crop | Result |
| --- | --- |
| Full frame | **Reject.** Bare foreground branches across the bottom third, brown dormant fairway. |
| `(0,250,7717,4590)` full-width | **Reject.** Retains the bare-branch foreground. |
| `(1800,0,7133,3000)` right-weighted | **Reject.** Condo village pushed to the corner; hazy, empty middle. |
| `(900,0,6233,3000)` centred | Good, but carries the right-side car parks, gravel yard and a blue shipping container. |
| `(0,300,4800,3000)` left-weighted | Better; bottom edge cuts too close to the condo roofline. |
| **`(0,150,5248,3102)`** | **ADOPTED.** See below. |

**Delivery crop (16:9) — ADOPTED.**

```
source:  Table_Rock_Branson_Missouri.jpg  (7717 x 5057, native, direct Commons URL)
crop:    (x0, y0, x1, y1) = (0, 150, 5248, 3102)   ->  5248 x 2952
resize:  1600 x 900
scale factor: 0.3049x  (DOWNSCALE — no upscaling, large headroom)
```

Why this crop:
- **Left-weighted**, so the red-roof condominium village — the most premium, most on-product content
  in the file — becomes the dominant built mass instead of a corner detail.
- **Right edge pulled in to x=5248**, which drops a billboard that sat on the frame line at x≈5283.
  A free reframing win, exactly the step-4a move.
- **Top at y=150** keeps a full clean sky band for a translucent hero/header overlay.
- **Bottom at y=3102** cuts the bare-branch foreground and the brown dormant fairway that make the
  full frame fail the C5 saleability test.

**Overlay real estate:** excellent — the top ~45% of the delivered frame is open sky, with only two
small clouds; the ridgeline band below it is low-detail and takes a scrim cleanly.

**AI screen — full camera metadata present, the strongest form of the test.**
`Make: SONY`, `Model: ILCE-7RM3`, `DateTime: 2025:01:07` (Lightroom export), 70 mm, f/7.1, 1/250 s,
ISO 125, `Artist/Copyright: Tony Webster`, `Software: Adobe Photoshop Lightroom Classic 14.1`.
7717x5057 is a straightened/cropped α7R III 42 MP frame. Capture date 26 March 2019.
**Generative origin positively ruled out** — not a reasoned inference, actual camera EXIF.

**Why the bare trees are acceptable.** The photograph is dated 26 March and the photographer's own
description says *"in spring."* Magnolias are in pink bloom in the mid-ground and the turf is
green-brown, not snow-covered or derelict. This is early spring, not the snow/dereliction failure
mode that C5 warns about. It is still the primary's main aesthetic weakness and is stated as such.

### Licence warning — read before publishing

**CC BY-SA 2.0.** Both obligations attach to the *cropped* file you publish:
1. **Attribute** — "Tony Webster, CC BY-SA 2.0" with a link to the licence.
2. **Share-alike** — the published crop must itself be offered under CC BY-SA 2.0 (or a compatible
   licence). This does **not** infect the rest of the site, but it does mean the hero image cannot be
   claimed as proprietary Honest Travel Group artwork.

The brief flags BY-SA as a caution, not a prohibition. If the client will not accept share-alike on a
hero image, **promote the alternate to primary** — it is Pexels License, obligation-free.

---

## ALTERNATE — Pexels 1643702

- **URL (native, no query string):** `https://images.pexels.com/photos/1643702/pexels-photo-1643702.jpeg`
- **Photographer:** Devon Schreiner
- **Licence:** Pexels License — free commercial use, **no attribution, no share-alike**
- **Native:** 3992 x 2992
- **Source titles (C1 — record so they can be stripped):** *"Aerial view of a serene river with lush
  trees at sunrise, capturing nature's tranquility in Hollister, Missouri"* and *"Aerial photography
  of body of water."* Hollister sits directly across Lake Taneycomo from Branson.

**What is in the frame.** A low aerial looking down Lake Taneycomo at dusk: a pink-and-gold sky over
a soft Ozark ridgeline, mirror-calm water running to the vanishing point with a single small boat
wake, dense green summer forest on both banks, a run of covered boat docks and boathouses on the left
shore, and a **cluster of multi-unit hillside lodging on the right bluff** — long gabled roofs and a
wing with stacked balconies, caught in the last light. Warm, calm, unmistakably an Ozark lake in
summer.

**100% brand check.** Three 3x native magnifications across every built region:

| Suspect object | Native location | Resolved as |
| --- | --- | --- |
| Bluff lodging cluster, top right | (3400–3992, 700–1060) | Multi-unit lodging: gabled roofs, a balconied wing. **No signage, no nameplate.** |
| Boat docks, left shore | (1100–1800, 1150–1520) | Covered slips and boathouses, metal roofs. **No signage, no lettering.** |
| Red object, left bank foreground | (800–1250, 1850–2150) | A small rust-red floating dock with a moored covered boat. No text. |

**No legible resort name, no logo, no wordmark, no third-party commercial signage anywhere at native
resolution.** No people. No vehicles. No power lines.

**Delivery crop (16:9).**

```
source:  pexels-photo-1643702.jpeg  (3992 x 2992, native, no query string)
crop:    (x0, y0, x1, y1) = (0, 150, 3992, 2396)   ->  3992 x 2246
resize:  1600 x 900
scale factor: 0.4008x  (DOWNSCALE — no upscaling)
```

The crop drops the bottom 596 px, which was near-black water carrying the darkest bank clutter, and
trims 150 px of empty upper sky so the colour band sits higher in the frame. Both the bluff lodging
and the dock run survive.

**Overlay real estate:** very good — the top ~30% is graded sunset sky, and the lower 45% is smooth,
low-detail water. Either band takes a scrim.

**AI screen (Pexels strips EXIF — geometry half of the test, per the brief's exception).**
3992 x 2992 is a 4:3 12 MP frame, the native still geometry of the DJI 1/2.3" and 1" drone camera
generation — consistent with the aerial vantage, and not a generator's round number (a generator
would produce 4096x3072 or 4000x3000, not 3992x2992; the 8 px shortfall is characteristic of real
sensor readout). The motion blur on the boat wake and the sensor noise visible in the shadow regions
at 3x are both real-capture artefacts. **Reasoned pass, explicitly examined, not an unexamined one.**

**Honest weakness.** The lodging is small, dark and at the frame edge, and at 5x in the delivered file
it is ambiguous between condominium blocks and large hillside houses. This is the same weakness the
Sedona probe accepted in its alternate: a superb destination frame with a loose lodging read. It is
the alternate for that reason — and the better choice if share-alike is unacceptable.

---

## C1 handling — mandatory at publication, both assets

Neither file's **pixels** name a property. Both files' **metadata** carry place and source strings
that must not reach the site.

> **Do not carry the Commons filename, the Flickr description, the Pexels title, alt text, or any
> source metadata into the site.** Re-caption generically.
>
> - Primary: *"Condominium residences above the Ozark hills, Branson, Missouri."*
> - Alternate: *"Sunset over Lake Taneycomo, Branson, Missouri."*
>
> Do not credit or caption by property name. The primary's attribution string names the
> **photographer**, not any property, and is safe.

---

## Full candidate log — 18 distinct images downloaded and opened

| # | Asset | Native px | Opened | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | Commons `Table Rock Branson Missouri` | 7717x5057 | yes | **APPROVE — visually verified** | **PRIMARY.** Many-property elevated frame, all signage sub-resolution in delivery. |
| 2 | Pexels 1643702 — Taneycomo dusk aerial | 3992x2992 | yes | **APPROVE — visually verified** | **ALTERNATE.** Clean at 100%; bluff lodging + dock run, no signage. |
| 3 | Unsplash `photo-1602707274750` — Daryl David | 8000x6000 | yes | REJECT (closest near-miss) | Genuine Table Rock condo village, but **power lines and two utility poles cross the whole frame**, a burned-in "2020/01/01" timestamp, a raw excavation scar with an excavator, survey flags and dry dead grass. Four reframes tested — the lines are unavoidable, and the Upper Algiers precedent kills it on vibe. |
| 4 | Commons `Sunset at Table Rock Lake` — Drew de F Fawkes, CC BY-SA 4.0 | 6000x4000 | yes | REJECT (held as third option) | Spectacular fire sunset with silhouetted boat docks, huge overlay space, real Canon EOS 2000D EXIF. **No lodging at all** — docks only. Weaker on-product than the alternate and carries BY-SA 4.0. |
| 5 | Unsplash `photo-1766284808386` — Hwy 76 Strip | 5378x3585 | yes | REJECT | **Eight legible brands at once** — OZARKLAND, Walgreens, TITANIC, Best Western, Clay Cooper, Waffle/Pancake, BOARDWALK, Cheddar's — plus a replica ship hull and a car park. Textbook C3b failure; the Branson caution confirmed exactly. |
| 6 | Pexels 13593973 — Branson Scenic Railway | 3552x2664 | yes | REJECT | "…ON SCENIC RAILWAY" and a large "Hilton" wordmark both fully legible, plus DODGE on a truck and two notice signs. Ground-level, uncroppable, identifiable children in frame. |
| 7 | Commons `Table Rock State Park Marina` — CC BY | 7952x5304 | yes | REJECT | **"STATE PARK MARINA" sign legible**, "SPIRIT O…" on a boat. Single building is the subject — C3 failure. |
| 8 | Unsplash `photo-1610152066235` — Chapel of the Ozarks | 3072x4096 | yes | REJECT | Portrait. A chapel, not lodging; recognisable single property; Civil War cannons and a golf green in frame. |
| 9 | Unsplash `photo-1637780852106` — Ethan Howard aerial | 3128x2540 | yes | REJECT | **Two identifiable private mansions** with pool and circular drive, top-down, no sky (C4). |
| 10 | Unsplash `photo-1638499467360` — Ethan Howard aerial | 3968x2976 | yes | REJECT | **Snow.** Contradicts the vacation promise; no lodging in frame. |
| 11 | Unsplash `photo-1766284808526` — Branson water tower | 5777x3851 | yes | REJECT | A water tower with power lines, a parked pickup and a signed metal shed. Not lodging, not premium. |
| 12 | Unsplash `photo-1567672585861` — K. Mitch Hodge | 3319x1867 | yes | REJECT | Hazy hilltop view; the only built subject is a **single gabled private house** (C4). Heavily over-processed — mush at 2x. |
| 13 | Unsplash `photo-1596552185171` — K. Mitch Hodge | 3302x2064 | yes | REJECT | Beautiful Ozark sunrise over the lake, **zero lodging in frame**. Pure landscape. |
| 14 | Commons `Storm Over Table Rock Lake` — CC BY | 12000x9000 | yes | REJECT | Utility pole with transformer and power lines right of centre; storm mood; no lodging. |
| 15 | Pexels 34462412 — lake with distant homes | 6000x4000 | yes | REJECT | **Wrong destination** — rolling Tennessee farmland, not Ozark. Built content is identifiable private housing (C4). |
| 16 | Pexels 17957642 — "Thousand hills lake" | 5776x3851 | yes | REJECT | Trees and water only. No lodging, no sky interest. Title refers to a state park, not Branson. |
| 17 | Pexels 39267064 — Chris F aerial | 2938x3917 | yes | REJECT | Portrait; Tennessee lake; no lodging. |
| 18 | Pexels 5587621 — lake and hills | 3024x4032 | yes | REJECT | Portrait; pure landscape; no built element at all. |

**Reframes tested and rejected:** `photo-1602707274750` at (300,1500,4900,4087), (200,1950,3800,3975)
and (500,1750,4500,4000) — power lines and poles retained in all three, and the tighter crops
magnify them. `c_trbm` at full frame, (0,250,7717,4590), (1800,0,7133,3000), (900,0,6233,3000) and
(0,300,4800,3000) — all rejected for the reasons tabulated above.
**Reframes that succeeded:** `c_trbm` (0,150,5248,3102) and `1643702` (0,150,3992,2396).

---

## Search log — what the vocabulary rules actually returned

| Source | Query | Outcome |
| --- | --- | --- |
| Pexels | `branson hotel` (C6 prescribed) | **23 of 24 results were not Branson** — Las Vegas, Wabasha MN, Austin, Baku, Manchester, Asturias. One Branson result: the Scenic Railway, branded. |
| Pexels | `branson` | Heavily solvent — **12 of 24 results were Chattanooga, Tennessee**. One genuine hit (1643702, Hollister MO) which became the alternate. |
| Unsplash | `branson` (C6 prescribed) | 20 results, 4 genuinely Branson, 3 of those paywalled Unsplash+. Surfaced the Highway 76 Strip frame and the water tower. |
| Unsplash | `ozarks` | 20 results, 6 Unsplash+. Surfaced the Strip frame again and two usable landscapes. |
| Unsplash | `branson-lake` | 10 results only. Surfaced the K. Mitch Hodge pair. |
| Unsplash | `table-rock-lake` | Solvent — generic lakes worldwide, 5 of 20 paywalled. |
| Unsplash | `table-rock` | **Total solvent** — desert rock formations, a dinner table, a guitar. Zero usable. |
| Pexels | `table rock lake` | Solvent — Tennessee River, Lake Travis, Kansas, Croatia. |
| Pexels | `lake taneycomo` | Solvent — Plitvice, Italy, Minnesota. Re-surfaced 1643702. |
| Pexels | `ozark mountains` | **Total solvent** — 14 of 24 results were Minnesota (Tom Fisk), plus Arkansas, Istanbul, Hungary, New York. |
| Openverse | `branson missouri`, `table rock lake`, `lake taneycomo` | 65 / 193 / 3 results. **The most productive source for this destination** — it found the primary. |
| Wikimedia Commons | `Category:Branson, Missouri` | 53 files, almost all attractions and branded theatres. Confirmed the Commons shelf is thin. |

**Not searched, per the brief:** `villa`, `condo`, `vacation rental`, any interior, and the state name
appended to a photo-site query. `hotel` was run on Pexels only, as C6 prescribes.

---

## Findings for the remaining condo certificates

**1. C2 confirmed again, and sharpened.** Branson behaved exactly like Sedona: a small inland
destination yields **one or two** usable frames, not a shelf. Eighteen opened, two approved. Neither
approval came from the two C6-prescribed photo-site queries — **both came from sources the brief
treats as secondary** (Openverse for the primary, a solvent-polluted bare-name Pexels query for the
alternate). On a small inland destination, run Openverse and the Commons category **first**, not last.

**2. C3 is now 17 for 17.** Every ground-level or single-building frame in this sweep failed; both
approvals are elevated multi-property frames. The rule is holding without exception.

**3. C3b confirmed, with a new sub-case.** The frame that failed hardest carried eight legible brands
along its retail band — none of them a resort. But note the *new* residual: a **fuel-brand pecten**,
which is a logo with no text. Wordmark-hunting misses it. Add shape-and-colour logos to the
magnification checklist.

**4. C3c did real work in both directions here.** It rescued the primary — "HUNGRY?" is fully legible
at 5x native and completely unresolvable in the shipped file — and it is the only reason the primary
exists. Agents who reject on a native-resolution find without re-measuring will ship nothing on
inland destinations.

**5. C5 confirmed as the dominant cause.** Of 16 rejections: **9 failed on "not premium / not
vacation-selling"** (power lines, utility poles, snow, car parks, construction scars, a water tower,
storm mood, dead grass, portrait landscapes with no lodging). Only **3 failed on legible branding**.
Branding remains the third-ranked cause, behind saleability and wrong-subject.

**6. New: "no lodging at all" is a distinct and large failure class.** Five rejections were
*attractive, unbranded, correctly-located* landscapes with no built lodging in frame. On a
scenery-led destination the search returns scenery, and an agent optimising for "no branding" will
drift into pure landscape and satisfy every compliance test while failing the product. **Check for
lodging before checking for logos.**

**7. Licence quality degrades as destination size shrinks.** On a thin shelf the best frame is likely
to be CC BY-SA. Budget for that: nominate a share-alike primary *and* an obligation-free alternate,
and say plainly which one survives a client who refuses copyleft. That is what this report does.

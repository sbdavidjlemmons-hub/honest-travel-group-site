# CON-SEV — Sevierville Condo — Image Report V2

**Certificate:** CON-SEV / `sevierville-condo` / Sevierville Condo
**Destination:** Sevierville, Tennessee (Great Smoky Mountains foothills, Sevier County)
**Family:** Condo (20 certificates) — condo rules C1–C7 applied as written
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no `premium_photo-`, no Unsplash+, no retouching.
**Scope:** IMAGE ONLY. No pricing research performed or reported.

---

## 1. Verdict

Sevierville did **not** behave like a thin-supply inland destination. It produced **two**
independent, destination-confirmed, fully compliant frames — and both are confirmed to be
Sevierville by the photographer's own location metadata on the Unsplash photo page, which is a
harder destination proof than the Sedona probe was able to obtain.

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1492402411495-6dd799a71db7` (slug `GRwC8jbVLIM`) | Unsplash — Nathan Anderson (@nathananderson) | **Unsplash License** (free) | 5464 x 3640 | **YES — visually verified**, 100% rule run at native + delivered-file 5x/6x |
| **ALTERNATE** | `photo-1708290178777-55f92dea1355` (slug `EZ5QvZMpeHo`) | Unsplash — Daniely Wright (@danielywright) | **Unsplash License** (free) | 8192 x 5464 | **YES — visually verified**, 100% rule run at native + delivered-file 5x |

Fetch URLs — **no query string**. These are the files that were brand-checked and the files that
should ship:

```
https://images.unsplash.com/photo-1492402411495-6dd799a71db7      # PRIMARY
https://images.unsplash.com/photo-1708290178777-55f92dea1355      # ALTERNATE
```

Destination confirmation (from the Unsplash photo pages, not inferred):

| Asset | Location stated by photographer | Camera published | Publish date |
| --- | --- | --- | --- |
| PRIMARY | **Sevierville, Tennessee, United States** | DJI FC6310 (Phantom 4 Pro) | 2017-04-17 |
| ALTERNATE | **Sevierville, TN, USA** | Canon EOS R5 | 2024-02-18 |

Neither is Unsplash+ / Getty. Neither filename carries the `premium_photo-` prefix. Zero budget held.

---

## 2. Delivery crops — rendered with PIL and inspected

Both delivered files were produced with PIL, opened with the Read tool, and re-inspected at
5x and 6x on every flagged region **in the shipped file** (C3c).

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 420) → (4000, 2670)` | 4000 x 2250 | 1600 x 900 | **0.4000x (downscale)** | **none** |
| ALTERNATE | `(0, 430) → (8192, 5038)` | 8192 x 4608 | 1600 x 900 | **0.1953x (downscale)** | **none** |

**No upscaling anywhere. Both are heavy downscales, which is the safe direction.**

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("photo-1492402411495-6dd799a71db7.jpg")           # 5464 x 3640
im.crop((0, 420, 4000, 2670)).resize((1600, 900), Image.LANCZOS).save("con-sev-primary.jpg", quality=92)

# ALTERNATE
im = Image.open("photo-1708290178777-55f92dea1355.jpg")           # 8192 x 5464
im.crop((0, 430, 8192, 5038)).resize((1600, 900), Image.LANCZOS).save("con-sev-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/consev/DELIVER_CON-SEV_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/consev/DELIVER_CON-SEV_alternate.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/consev/DELIVER_CON-SEV_alt3_landscape.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows

A golden-hour drone frame looking across the Sevierville foothills into a backlit sun. A single
forested peak anchors the left two-thirds; behind it the Smokies recede in four hazy blue ranges
to the horizon. Mid-frame, a **timber lodge with a broad deck sits alone on a wooded ridge**.
Bottom-centre, a **private lake with two lakeside cabins and a mown lawn**. Bottom-right, pasture,
a working **equestrian centre** (round pen, sand arena, barns) and a scatter of farms. Spring
foliage is in fresh yellow-green and the low sun rakes across every ridge.

**Why it satisfies C3 (shoot the strip, not the resort):** no single building is the subject. The
frame contains at minimum a ridge lodge, two lake cabins, four farmsteads, a stable complex and a
dozen distant roofs. A many-property frame cannot imply a guaranteed property.

**Overlay space:** the bright hazy sky and distant-ridge band across the top-right (roughly
x 850–1600, y 0–210) is near-uniform and very light; the smooth shaded flank of the foreground
mountain (x 0–700, y 380–900) is near-uniform and dark. Two large low-detail regions, one light
and one dark, for a translucent hero or header. Good.

### What the ALTERNATE frame shows

A long-lens frame of a **cabin cluster strung along a wooded hillside** — nine to twelve
large timber vacation lodges with metal roofs and wrap-around decks, staggered down a ridge —
with **three ranges of the Great Smokies stacked behind under a light dusting of snow on the high
tops**. Pale cream-grey sky fills the upper third.

This is the purest condo-family frame in the set: it is literally "many rental cabins, no single
subject, destination behind the roofline" (C3d). Its weakness, stated honestly, is season — bare
deciduous trees and a cool desaturated palette. It reads as a premium winter mountain getaway
rather than a summer one, which is on-message for the Smokies but narrower than the primary.

**Overlay space:** the top ~35% is unbroken flat sky. Excellent.

---

## 3. The 100% rule — what was actually magnified

Every file was fetched from `images.unsplash.com` with **no query string at all**. Unsplash served
true native in both cases (5464 x 3640 and 8192 x 5464, 3.1 MB and 6.4 MB). All brand crops were
taken from the **native** file; all C3c re-checks were taken from the **delivered 1600 x 900** file.

Per **C3b**, magnification was aimed at the **low** buildings — farms, stables, lakeside cabins,
roadside structures — not at the ridge lodge. That is where the Myrtle Beach probe found its
signage, and it is where this frame's only real risk lay.

### PRIMARY (`1492402411495`) — native checks

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Bottom-right developed strip | (3300, 2650, 2164, 990) | 1:1 | **Clean of text.** Resolves as a rural **school/church campus + farms**: soccer goals, a baseball backstop, a sport court, yellow buses, pole barns, a pole-barn arena. No legible lettering, no logo, no sign face anywhere. Aesthetically a drag — **cropped out entirely**, see §4. |
| Mid-valley buildings + arena | (3300, 1900, 1800, 800) | 1.6x | Clean. Equestrian arena with round pen, farmhouses, a red barn, a long shed. The pale shape in the arena dirt resolves as a **drag/turn pattern, not a logo**. No lettering. |
| Lake, lakeside cabins, pavilion | (1600, 2350, 1500, 800) | 1.6x | Clean. A green-roofed timber lodge, a second cabin, an open-sided pavilion, a dock post, a mown lawn. **No nameplate, no entrance sign, no lettering.** |
| Right-edge rural sprawl | (4400, 1450, 1064, 900) | **2x** | **Clean of text** at 2x — farmhouses, travel trailers, a mobile home, pole barns. Zero signage. But visually it is rural sprawl: **cropped out**, see §4. |

### PRIMARY — C3c re-check **in the delivered 1600 x 900 file**

| Region | Delivered rect | Zoom on delivered | Result |
| --- | --- | --- | --- |
| Farm / stable corner | (1250, 600, 350, 300) | **5x** | Round pen, sand arena, covered arena, barns, red barn, farmhouses. **Zero text, zero logo, zero signage.** Reads as a horseback-riding stable — an authentic Sevierville amenity, not a liability. |
| Lake cabins | (600, 700, 600, 200) | **5x** | Green-roofed timber lodge, second cabin, dock post, lawn. **Nothing readable.** |
| Ridge lodge | (540, 340, 300, 160) | **6x** | Warm-roofed timber lodge, deck, driveway. **No nameplate, no lettering.** Occupies ~55 x 25 px of the delivered frame — roughly **0.1% of frame area**. Not the subject. |
| Distant valley, top-right | (1150, 180, 450, 260) | **5x** | Hazy backlit forest ridges, two or three roofs at the limit of resolution. **Nothing readable.** |

**Result: PASS at every magnification. No third-party mark of any kind in the delivered frame.**

### ALTERNATE (`1708290178777`) — native checks

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Cabin cluster, left | (1400, 3250, 2400, 1250) | 1:1 | Clean. Five lodges with green/silver metal roofs, decks, stilts. No nameplates, no lettering. Thin overhead utility spans visible. |
| Cabin cluster, centre | (3600, 3050, 2400, 1250) | 1:1 | Clean. Four large timber lodges incl. one glass-gabled lodge. **No signage of any kind.** |
| Right-edge lodge | (6600, 3700, 1592, 1100) | **1.3x** | Clean. One sunlit lodge, shingle roof, deck, a parked vehicle. No lettering. |
| Bottom-left — road + structures | (0, 4550, 2400, 914) | 1:1 | Clean. A switchback road, guard posts, two cabins in shadow, utility poles. **No signage.** Very dark — crop starts above most of it. |

### ALTERNATE — C3c re-check **in the delivered file**

| Region | Delivered rect | Zoom on delivered | Result |
| --- | --- | --- | --- |
| Whole cabin band | (330, 540, 900, 300) | **5x** | Nine to twelve lodges resolve as roofs, gables and decks. **No text, no nameplate, no logo.** Utility lines are faint threads at 5x and **invisible at 1:1 in the shipped file**. |

**Result: PASS. No third-party mark in the delivered frame.**

### C3c cuts both ways — nothing was rejected on an over-magnified find

No candidate here was rejected on a high-zoom discovery. The two features that *could* have been
treated as findings — the school-campus soccer goal and yellow buses in the primary's source frame,
and the utility spans in the alternate — were handled correctly rather than assumed:
the school campus was **removed by reframing** (it is not in the shipped file at all, §4), and the
utility lines were **measured in the shipped file** and are sub-resolution at 1:1.

---

## 4. Reframing — the move that made the primary

**The primary would have failed on C5 in its full frame, and was recovered by crop at zero cost.**

The full 5464 x 3640 frame carries, along its right-hand third and bottom-right corner, a rural
**school campus** (soccer goals, baseball diamond, a row of yellow buses, a flat-roofed school
block) and a band of **rural sprawl** (mobile home, travel trailers, pole barns). None of it
carries legible branding — so the *brand* check passed — but it is the classic C5 failure:
technically compliant, not vacation-selling. Shipping the full frame would have put a school bus
lot in the corner of a vacation hero.

Two reframes were rendered and opened before choosing:

| Crop tested | Size | Scale | Outcome |
| --- | --- | --- | --- |
| `(0, 350, 4600, 2588)` | 4600 x 2588 | 0.348x | Good. More sky. **School campus still present** as a small band in the bottom-right corner; at 6x on the delivered file the soccer goal and the yellow buses are still identifiable. |
| **`(0, 420, 4000, 2250)`** | 4000 x 2250 | **0.400x** | **CHOSEN.** The y-bound at native 2670 sits just above the campus, which begins at native y ≈ 2700 — **the school is excluded entirely**, while the lake (native y 2412–2631) is fully retained and the peak (native y ≈ 468) stays inside the top edge. Trades some sky for a cleaner, more dramatic frame. |

A third framing from the same shoot, `photo-1492402468614-8fa0b2591e13` (5294 x 2696, same
photographer, same evening, same Sevierville location), was also cropped and opened: beautiful,
but a more distant and more generic valley panorama that reads as "rural Tennessee" rather than
"Smokies resort country". Kept as a documented fallback, not nominated.

---

## 5. AI / provenance screen

**Unsplash strips EXIF from the served file** — confirmed: `getexif()` returned **NONE** on all
three finalists. The brief's two substitutes were both run, and in this case a third, stronger
check was available.

| Check | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Filename Unix timestamp | `1492402411` → **2017-04-17** | `1708290178` → **2024-02-18** |
| Cross-check vs stated publish date on the photo page | **2017-04-17 — matches** | **2024-02-18 — matches** |
| Camera published on the photo page | **DJI FC6310** | **Canon EOS R5** |
| Native geometry vs that sensor | 5464 x 3640. DJI FC6310 (Phantom 4 Pro) native is **5472 x 3648**; this is that frame less 8 px per side, exactly consistent with lens-distortion correction. **Real-sensor match.** | 8192 x 5464 is the **exact native frame of the Canon EOS R5**. **Exact real-sensor match.** |
| Verdict | Pre-generative by seven years, and the geometry corresponds to the camera the page names. **Real photograph.** | Post-generative era, so judged on evidence rather than date: published camera model, exact matching sensor geometry, correct long-lens atmospheric haze compression across four ranges, and consistent low-sun shadow direction on every roof. **Reasoned call: real photograph.** |

This is a stronger screen than the brief anticipated: Unsplash strips EXIF from the *file* but
**publishes the camera model on the photo page**, so the camera-metadata half of the AI screen is
recoverable at zero cost for Unsplash assets. Worth carrying forward to other sweeps.

---

## 6. C1 — source captions to be stripped

Recorded so they can be removed. **Do not carry any of this into the site** — not title, not
filename, not alt text.

| Slot | Source title / alt text as published | Source filename |
| --- | --- | --- |
| PRIMARY | "buildings on grass field near forest and mountains during day" | `photo-1492402411495-6dd799a71db7` |
| ALTERNATE | "a view of a mountain range with houses on it" | `photo-1708290178777-55f92dea1355` |

**C1 risk on this certificate is low but not zero.** Unlike Sedona — whose approved file was titled
"Villas of Arroyo Roble resort", naming a specific property — **neither Sevierville caption names
any property.** They are generic machine-style descriptions. The residual issue is the *location*
field ("Sevierville, Tennessee"), which is accurate and harmless, and the PRIMARY photographer's
own page description, which mentions an Easter family gathering. None of that implies a
guaranteed resort.

Suggested generic re-captions:
- PRIMARY: "Sunset over the Smoky Mountain foothills near Sevierville, Tennessee"
- ALTERNATE: "Mountain cabins above the Great Smoky Mountains, Sevierville, Tennessee"

Ship as `con-sev-hero.jpg` / `con-sev-hero-alt.jpg`. Never as the source hash.

---

## 7. Sevierville vs Pigeon Forge — visual distinctness

The caution was that Sevierville must not collide with the Pigeon Forge frame being researched in
parallel on the same corridor. Both nominations are structurally distinct from the two framings
most likely to be chosen for Pigeon Forge (a river-valley town shot, or a Newfound Gap–style ridge
overlook):

- **PRIMARY** is a *backlit aerial of a single foothill peak with a private lake and pasture*. It
  is agricultural-pastoral, not a townscape; there is no river, no strip, no overlook viewpoint.
- **ALTERNATE** is a *long-lens compression of cabins on a hillside with snow-dusted ranges behind*.
  It is a winter telephoto, not a wide valley.

Neither contains Parkway frontage, outlet-mall or attraction signage, the Old Mill, the SkyWheel,
a Ferris wheel, an observation tower, or a go-kart track. **Attraction-corridor frames were
excluded on sight, by rule, before any brand check** — see the P_12478583 and P_35819038 entries
in §8.

---

## 8. Candidate ledger — 24 opened, every one downloaded and viewed

Requirement was 12. **24 were downloaded at native resolution and opened with the Read tool.**
No candidate in this table was judged on metadata.

### Unsplash — query `sevierville` (destination alone; the C6 move that broke this certificate open)

| # | Asset | Caption | Native | Verdict |
| --- | --- | --- | --- | --- |
| 1 | `photo-1492402411495-6dd799a71db7` | buildings on grass field near forest and mountains | 5464x3640 | **PRIMARY — visually verified.** Recovered by reframe, §4. |
| 2 | `photo-1708290178777-55f92dea1355` | a view of a mountain range with houses on it | 8192x5464 | **ALTERNATE — visually verified.** Textbook C3/C3d frame. |
| 3 | `photo-1492402468614-8fa0b2591e13` | birds eye photography of mountain | 5294x2696 | **HOLD (verified, not nominated).** Same shoot, same evening, same location, clean. More distant and more generic — reads "rural Tennessee" not "Smokies resort". Documented fallback. |
| 4 | `photo-1492402188701-928b252fb858` | aerial photo of green field | 7559x2740 | **HOLD (verified).** Same shoot, 2.76:1 panorama. Clean and lovely; a 16:9 cut duplicates #1 with less foreground interest. |
| 5 | `photo-1494645068517-133103baddd5` | birds eye photography of green mountain | 9444x2756 | **HOLD (verified).** 3.43:1 ultrawide of the same valley with a red-roofed ridge lodge. Aspect too extreme; a 16:9 cut discards 48% of the frame. |
| 6 | `photo-1591050172770-5f0a8758ed6e` | green grass field under blue sky | 4032x3024 | **REJECT — C5 not premium.** Handset frame; foreground crown-vetch weeds eat the bottom 45%. Snapshot, not vacation photography. |
| 7 | `photo-1591050121177-3f11ac7627b0` | green trees on mountain under blue sky | 3024x4032 | **REJECT — C5 not premium.** Same photographer, portrait phone frame, foreground scrub, no subject. |
| 8 | `photo-1626892527026-2f4265f9d008` | green grass field under blue sky | 3992x2992 | **REJECT — C5 not premium.** Dusk aerial; bottom 30% near-black, no readable subject. Two ridge cabins present but unusable. |
| 9 | `photo-1600793753831-bc5d969e9023` | green mountains under white clouds | 4032x3024 | **REJECT — C5 not premium.** 80% washed-out empty sky over a thin strip of hills. No subject. |
| 10 | `photo-1651773992600-794f3e226682` | a landscape with trees and mountains | 5166x3305 | **REJECT — distinctness + subject.** Handsome, but it is the classic Oconaluftee-style ridge overlook: exactly the Pigeon-Forge-collision framing the brief warned against, and no lodging. |

### Unsplash — query `great smoky mountains` (destination alone, per instruction)

| # | Asset | Caption | Native | Verdict |
| --- | --- | --- | --- | --- |
| 11 | `photo-1656858441246-28f1c5275aca` | horses grazing in a field | 5401x3598 | **HOLD — visually verified, third option.** Superb autumn foothill pasture, two horses, Smokies behind. Zero compliance risk. **Not nominated:** no lodging at all, and its page location was not confirmable — it surfaced only under the generic "great smoky mountains" query, so it is not provably Sevierville. Delivered crop rendered anyway: `(0, 400, 5401, 3038)` → 1600x900 at **0.2962x**, no upscale. |
| 12 | `photo-1587479281396-a369ac624104` | green grass field near green mountains | 3264x2448 | **REJECT — C5 not premium.** Cades-Cove split-rail fence shot, compact-camera, soft and oversaturated. |
| 13 | `photo-1634662626305-44f7f243eb09` | mountain range covered in fall foliage | 4016x5020 | **REJECT — subject + distinctness.** Spectacular cloud-inversion autumn frame, but pure wilderness with no lodging, and a ridge/valley composition that collides with Pigeon Forge. |
| 14 | `photo-1634524019173-c17823856277` | a scenic view of a valley in the mountains | 3024x3024 | **REJECT — distinctness.** Newfound Gap / Morton Overlook with the road. Phone-grade sharpness; the single most-collided Smokies composition there is. |

Also visible on these pages and **not downloaded, by rule**: `premium_photo-1666211586167`,
`premium_photo-1666899295694`, `premium_photo-1694475674677` (Getty), `premium_photo-1729776366034`,
`premium_photo-1666116634832`. All Unsplash+ / paid. **Zero budget held — none fetched, none proposed.**

### Pexels — query `sevierville hotel` (the C6 small-inland move)

| # | Asset | Caption | Native | Verdict |
| --- | --- | --- | --- | --- |
| 15 | `12478583` | charming houses with twinkling lights in a scenic hill landscape | 3202x4404 | **REJECT — C5 + signage + corridor.** Old-Mill-style commercial building at dusk: a car park with parked cars fills the foreground, four power lines cross the frame, an illuminated sign is legible bottom-right. Reframe tested and fails — the only 16:9 region without the car park contains no lodging at all, just a dark hillside. This is Parkway attraction frontage, excluded by rule. |
| 16 | `17824928` | elegant black horse roaming in a lush green pasture, Sevierville TN | 2364x3625 | **REJECT — C5 not premium.** Roadside verge: highway, guardrail, white fence, rocky weed bank. Harsh midday light, no mountains. |
| 17 | `12780608` | drone shot of an isolated building surrounded by lush green forest | 3992x2992 | **REJECT — C3 fail, the governing rule.** One four-storey block alone in dark forest. The single building **is** the subject. Also gloomy and institutional. |
| 18 | `12193266` | aerial of a well-lit residential area with a swimming pool at night | 3614x3614 | **REJECT — C5 not premium.** Night aerial dominated by a car park full of cars; reads as student housing. |
| 19 | `14479797` | peaceful rocky creek, Sevierville TN | 4160x6240 | **REJECT — C5 not premium.** Dark creek bed, cut logs and dead stumps, people cropped at both edges. Proves no destination. |

### Pexels — query `smoky mountains resort` (per instruction)

| # | Asset | Caption | Native | Verdict |
| --- | --- | --- | --- | --- |
| 20 | `35819038` | aerial of Gatlinburg showing green rooftops amid autumn foliage | 4709x3532 | **REJECT — corridor + distinctness.** The best C3 "shoot the strip" archetype found on Pexels: many mid-rise condo blocks, autumn hills, blue sky, no single subject. Rejected anyway because it is **downtown Gatlinburg with the Space Needle tower and the Sky Lift at the left edge** — recognisable attraction landmarks — a commercial strip with car parks and high signage density along the bottom edge, and it is the frame most likely to collide with Pigeon Forge. Wrong town, wrong risk profile. |
| 21 | `29056563` | aerial of the Appalachians in fall, vast greenery and rustic homes | 8064x4536 | **REJECT — C4 + C5 + wrong destination.** Gorgeous golden-hour valley, but one **identifiable private residence** with cars and a blue tarp in the drive is a primary subject (C4), power lines cross the centre, and a raw dirt scar cuts the bottom-right. Photographer is NC Farm Bureau and the caption says Appalachians, not Tennessee — almost certainly North Carolina. |
| 22 | `36677734` | snow-covered mountains, countryside homes, dry grass, early winter | 6000x4000 | **REJECT — C5 not premium.** Snow-capped LeConte range and hillside cabins behind a foreground of **dead brown grass tussocks, dirty melting snow, a bare stick and a utility pole**. Reframe tested: the dry-grass band runs the full width of the bottom 35%, so no 16:9 region excludes it while keeping the cabins. |
| 23 | `11204013` | drone shot of a mountainous countryside with clear blue sky | 4000x3000 | **REJECT — C5 not premium.** Flat, drab, bare-winter brown forest under 60% washed pale sky; a cut-off roof intrudes at the bottom-left corner. |
| 24 | `36397149` | autumn landscape of the Great Smoky Mountains with vibrant foliage | 6240x4160 | **REJECT — subject.** Genuinely beautiful autumn ridge, clean of branding, but pure wilderness: no lodging, no condo read, and a flat blown-white sky. A landscape stock frame, not a condominium hero. |

### Also enumerated, not downloaded

`smoky mountains cabin` on Pexels was run as a fourth query and returned 24 results, of which the
Tennessee-relevant ones were **single-cabin-in-the-woods** compositions (`31512000`, `33008799`,
`33008757`, `28920388`, `3722918`, `12595744`, `8908455`) — every one a **C3 fail by construction**:
one building, one subject. `14288300` is captioned Pigeon Forge and was excluded by corridor rule.
The rest are Mexico, Russia, Virginia, North Carolina and generic — the "destination solvent"
effect C6 describes, firing exactly as predicted on the word "cabin".

---

## 9. Rejection causes — this sweep vs the C5 prediction

| Cause | Count | Share |
| --- | --- | --- |
| **C5 — not premium / not vacation-selling** | **8** | 53% |
| Corridor / distinctness (Pigeon Forge collision, attraction landmark) | 3 | 20% |
| Subject (no lodging — pure landscape) | 2 | 13% |
| **C3 — single building is the subject** | 1 | 7% |
| C4 — identifiable private residence | 1 | 7% |
| **Legible third-party branding as the sole cause** | **0** | **0%** |

**C5 is confirmed again, and harder than before.** Not one candidate in twenty-four was rejected
because a name or logo was legible. The one frame that did carry legible signage (`12478583`) was
already failing on car park, power lines and dusk gloom before the sign was found. Judge
saleability first; the branding check is a formality on this destination.

**C3 is confirmed again and remains 100% predictive.** Both nominations are elevated multi-property
frames. The one ground-level/single-building frame tested (`12780608`) failed, as did every
single-cabin composition in the fourth query.

**C6 is confirmed, with one correction worth recording.** The brief predicts `<destination> hotel`
on Pexels is best for a small inland destination and `<destination>` alone on Unsplash is best for a
dense strip. On Sevierville that is **backwards**: `sevierville hotel` on Pexels produced nothing
usable (five candidates, five rejections) because its top results were generic hotel-sign stock
from Spain, Germany and elsewhere — the word "hotel" acted as a destination solvent in its own
right. **`sevierville` alone on Unsplash produced both nominations and all three holds.** The
generalisable rule is not "small inland → Pexels + hotel"; it is **"try the bare destination name
on Unsplash first, on every destination, because every amenity word is a solvent — including
'hotel'."**

---

## 10. Compliance summary

| Requirement | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Downloaded and opened with the Read tool | Yes | Yes |
| 100% rule run at true native, **no query string** | Yes — 5464x3640 | Yes — 8192x5464 |
| C3c re-check in the **delivered** 1600x900 file | Yes — 4 regions at 5x/6x | Yes — cabin band at 5x |
| No legible property name | **Confirmed at 6x on the shipped file** | **Confirmed at 5x on the shipped file** |
| No third-party commercial signage | **Confirmed — none at any magnification** | **Confirmed — none at any magnification** |
| No theme-park / attraction branding or landmark | Confirmed — none | Confirmed — none |
| C3 — no single building is the subject | Yes — 20+ structures, largest ≈ 0.1% of frame | Yes — 9–12 lodges, none dominant |
| C4 — no identifiable private residence as subject | Yes | Yes |
| C5 — premium, vacation-selling | Yes — golden hour, lake, spring green | Yes, with a stated seasonal caveat (bare trees, cool palette) |
| Destination-specific to Sevierville | **Yes — stated by the photographer on the source page** | **Yes — stated by the photographer on the source page** |
| Not an interior | Yes | Yes |
| Licence | Unsplash License, free, no attribution required | Unsplash License, free, no attribution required |
| Zero budget | Yes — no Unsplash+, no Getty, no `premium_photo-` | Yes |
| No retouching | Yes — crop and downscale only | Yes — crop and downscale only |
| Upscale | **None — 0.400x downscale** | **None — 0.1953x downscale** |
| Source caption recorded for stripping (C1) | Yes, §6 | Yes, §6 |

**Both nominations are APPROVED — visually verified.**

---

## 11. Notes for the next agent

1. **Sevierville is not a thin-supply destination after all.** The brief predicted one-or-none for a
   small inland town. It returned two nominations and three holds — but only through **one query**:
   the bare destination name on Unsplash. The three prescribed queries between them produced one
   nomination; the unprescribed fourth produced the other. Run the bare destination name first,
   always.
2. **Unsplash publishes the camera model on the photo page even though it strips EXIF from the
   file.** This recovers the camera-metadata half of the AI screen at zero cost for every Unsplash
   asset, and it also confirms a photographer-stated **location**, which is a far harder destination
   proof than reading a caption. The brief currently treats Unsplash EXIF loss as unrecoverable and
   offers only the filename-timestamp substitute. It is recoverable. Worth adding to the brief.
3. **The word "hotel" is itself a destination solvent.** C6 lists "villa", "condo", "vacation rental"
   and the state name as solvents and recommends "hotel". On this destination "hotel" behaved
   exactly like the others, pulling in Spain, Germany and generic neon signage. The safe rule is
   the bare place name.
4. **The primary's saleability was created by the crop, not found.** In its full frame it carries a
   school bus lot. Three framings were rendered and opened before one was chosen. Reframing remains
   the highest-value zero-budget move in the brief and it was decisive here.

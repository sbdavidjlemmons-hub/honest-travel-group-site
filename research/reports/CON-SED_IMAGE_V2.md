# CON-SED — Sedona Condo — Image acquisition V2 (PROBE for the 20-certificate condo family)

**Certificate:** CON-SED / sedona-condo / Sedona Condo
**Destination:** Sedona, Arizona
**Product:** 7 nights, up to 4 travellers, unit assigned at confirmation, no resort named
**Scope:** images only. No pricing work.
**Procedure:** IMAGE_BRIEF_V2.md, followed in full. Every candidate below was downloaded and opened
with the Read tool. Brand checks were run on the **native-resolution** file fetched with **no query
string**. Delivery crops rendered with PIL.

---

## VERDICT

| Slot | Asset | Status |
| --- | --- | --- |
| **PRIMARY** | Pexels 6604588 — Quintin Gellar — 6016x4016 | **APPROVE — visually verified at 100%** |
| **ALTERNATE** | Pexels 26867471 — Allen Boguslavsky — 4032x3024 | **APPROVE — visually verified at 100%** |

Both are Pexels License (free commercial use, no attribution required, no share-alike). Zero budget
respected. No retouching performed or required. Neither needs upscaling.

---

## PRIMARY — Pexels 6604588

- **URL (native, no query string):** `https://images.pexels.com/photos/6604588/pexels-photo-6604588.jpeg`
- **Photographer:** Quintin Gellar
- **Licence:** Pexels License
- **Native:** 6016 x 4016 (3:2)
- **EXIF:** Artist / Copyright = "QUINTIN GELLAR". No Make/Model (Pexels strips the camera block).

**What is in the frame.** A hillside view down over a terrace of two-storey condominium villas —
sand-coloured brick, deep-red barrel-tile roofs, timber balconies with patio chairs, lawns, walkways,
Italian cypress and willow — with the Sedona red rock escarpment (Wilson Mountain / Steamboat Rock
ridgeline and a lit butte at right) rising behind, and blue sky with light cirrus above. Golden light,
late afternoon. Multi-unit, multi-room, private balconies: it reads as exactly the 7-night, 4-traveller
condo product, not as a hotel room.

**100% brand check — what I actually did.** Nine native-resolution tiles cut across every built
region (0–1500, 1500–3000, 3000–4500, 4500–6016 across y 2700–3600 and y 3400–4016, plus 4200–6016
at y 2200–3100), then four targeted magnifications at 2x–7x on every sign-shaped object:

| Suspect object | Native location | Resolved at magnification as |
| --- | --- | --- |
| Small brass square on a unit door | ~(1090, 3570) | **Unit-number plaque, ~15 px, no letterforms resolvable at 6x.** Not a brand. |
| Pale rectangle on a wall, bottom-left | ~(1870, 3900) | **Electrical/utility box above an HVAC condenser.** No text. **Cropped out of the delivery frame.** |
| Structures on the far ridge | (5100–6016, 1250–1900) | **Two private hillside houses.** No signage. |
| All roofs, facades, balconies, chimneys | every tile | **No signage of any kind.** |

**Result: no legible resort name, no logo, no wordmark, no third-party commercial signage anywhere
in the file at native resolution.** No people. No vehicles. No refuse bins in the delivery frame.

**Delivery crop (16:9).**

```
source:  p6604588.jpeg  (6016 x 4016, native, no query string)
crop:    (x0, y0, x1, y1) = (0, 300, 6016, 3684)   ->  6016 x 3384
resize:  1600 x 900
scale factor: 0.266x  (DOWNSCALE — no upscaling anywhere, large headroom)
```

Why this crop and not the obvious ones:
- Anchoring to the bottom (0, 632, 6016, 4016) keeps every villa but **destroys the sky band**. Rejected.
- Anchoring to the top (0, 0, 6016, 3384) keeps all the sky but **cuts the front row of balconies**,
  which is the part that says "condo". Rejected.
- **(0, 300, 6016, 3684) is the balance point**: it keeps a genuine band of blue sky across the top for
  a translucent hero overlay, the full red rock skyline, the green canopy, and the complete front row
  of villas with balconies. **It also happens to crop the HVAC condenser and utility box off the bottom
  edge** — a free reframing win, exactly the step-4a move.

**Overlay real estate:** blue sky band across the top ~13% of the delivered frame, plus a broad,
low-detail red-rock-and-scrub middle band at roughly y 280–460 of 900 that takes a scrim cleanly.

**AI screen (Pexels strips EXIF — geometry half of the test, per brief).** 6016 x 4016 is the exact
native raw frame of the Nikon D610 / D750 / D7100 / D7200 generation. That is a real sensor geometry,
not generator output. The file also carries an embedded photographer copyright string. Pexels ID
6604588 places the upload in early 2021. **Reasoned pass, not an unexamined one.**

### One caveat that must be handled at publication time

Pexels' own caption for this file on one search surface reads **"Villas of Arroyo Roble resort in
Sedona, Arizona."** The **pixels** name nothing — verified above at native — but the **metadata**
names a real property. Since the certificate assigns the unit at confirmation and guarantees no
property, the fix is trivial and mandatory:

> **Do not carry Pexels' caption, alt text, filename, or title into the site.** Caption it
> generically: *"Red rock views over Sedona, Arizona."* Do not credit by property name.

This is a family-wide rule, not a Sedona quirk — see PROBE SUMMARY §5.

---

## ALTERNATE — Pexels 26867471

- **URL (native, no query string):** `https://images.pexels.com/photos/26867471/pexels-photo-26867471.jpeg`
- **Photographer:** Allen Boguslavsky
- **Licence:** Pexels License
- **Native:** 4032 x 3024 (4:3)
- **EXIF:** none (Pexels strip).

**What is in the frame.** Sedona at sunset seen from a hillside above town: a dramatic sky of dark
cloud shelves over peach and gold, the full red rock skyline (Capitol Butte / Thunder Mountain, Coffee
Pot Rock, the Mogollon rim to the right) lit warm, and the town spread below in trees — low
southwestern buildings with terracotta and tile roofs. Unmistakably Sedona, no single property
dominant, no branding.

**100% brand check.** Three native tiles at 2x across the whole built band (y 1780–2268, x 0–1350 /
1350–2700 / 2700–4032). All buildings are small, dark and unlettered. **One sign-shaped smudge** near
native (3270, 2245) survived to a 7x brightness-boosted magnification and resolved to **JPEG noise over
a hedge line — no letterforms**. It was a false positive. I still cropped it out of the delivery frame
rather than rely on that reading.

**Delivery crop (16:9).**

```
source:  p26867471.jpeg  (4032 x 3024, native, no query string)
crop:    (x0, y0, x1, y1) = (0, 0, 3796, 2136)   ->  3796 x 2136
resize:  1600 x 900
scale factor: 0.4215x  (DOWNSCALE — no upscaling)
```

The crop drops the bottom 888 px — which contained a residential gravel driveway, a parked SUV and a
white trailer, the "Upper Algiers" failure mode — and trims 236 px off the right to remove an intruding
pine branch and the ambiguous smudge. What remains is sky, skyline, and lodging-in-landscape.

**Overlay real estate:** outstanding. Roughly the top 60% of the delivered frame is sky.

**AI screen.** 4032 x 3024 is the exact native 12 MP 4:3 frame of a phone main camera. Real sensor
geometry. Reasoned pass.

**Honest weakness.** The built element is the town of Sedona, not a resort. It satisfies "resort-in-
landscape" only loosely. It is the alternate, not the primary, for that reason — and given what the
probe found about supply (below), it is the best honest second that exists at zero budget.

---

## Full candidate log — 14 distinct images downloaded and opened

| # | Asset | Native px | Opened | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | Pexels 6604588 — Sedona condo villas | 6016x4016 | yes | **APPROVE — visually verified** | **PRIMARY.** Clean at 100% across 9 tiles + 4 zooms. |
| 2 | Pexels 26867471 — Sedona sunset vista | 4032x3024 | yes | **APPROVE — visually verified** | **ALTERNATE.** Clean at 100%; smudge resolved as noise and cropped anyway. |
| 3 | Pexels 6604589 — Sedona from same vantage | 5501x3672 | yes | REJECT | Foreground is a **car park** — three rows of parked cars, a signboard, kerbing. Vibe test failure, same class as the rejected Port Canaveral panorama. |
| 4 | Pexels 863802 — resort pool, mountains | 5762x3994 | yes | REJECT | **Wrong destination.** Grey-brown Santa Catalina Mountains (Tucson foothills), not red rock. Beautiful, unusable for Sedona. |
| 5 | Unsplash photo-1581355655067 — "Sedona resort" | 2893x3613 | yes | REJECT | Genuinely Sedona (Boynton Canyon) but it is a **tennis court**, carries a **"PLAYMATE" wordmark** on the ball machine, and has a person in frame. Wrong subject + third-party brand. |
| 6 | Pexels 12626127 — cliffside terrace, red rock | 5838x3890 | yes | REJECT | Unbranded and unmistakably Sedona with a huge sky, but the terrace is a **derelict stone ruin** — cracked slab, weeds, rubble coping. Fails "premium". Closest near-miss in the set. |
| 7 | Pexels 12626052 — desert house | 5472x3648 | yes | REJECT | **Abandoned teal-green house**, peeling, boarded. Not premium. |
| 8 | Pexels 12626126 — rock structure | 4850x3233 | yes | REJECT | Abandoned sandstone ruin. Not lodging. |
| 9 | Pexels 29322281 — Sedona building with urn | 4640x6960 | yes | REJECT | Dark, moody, **portrait**, weathered stucco courtyard (reads as Tlaquepaque). Not condo, no sky, wrong aspect. |
| 10 | Pexels 29322280 — Sedona building with ivy | 4640x6960 | yes | REJECT | Same shoot, same problems. |
| 11 | Pexels 19509118 — Sedona aerial in snow | 4000x3000 | yes | REJECT | **Snow** contradicts the vacation promise; frame is tract housing, a highway and a **strip mall** (live signage risk). |
| 12 | Pexels 33265604 — cabin doorway | 3024x4032 | yes | REJECT | Portrait; a barn interior looking out at a ranch shed and gravel yard. Not lodging, not premium. |
| 13 | Pexels 34292094 — Sedona aerial, Cathedral Rock | 5568x3712 | yes | REJECT (held as third option) | Superb sky and Cathedral Rock, but a **large, distinctive private mansion sits centre-bottom** — an identifiable private residence. Reframe tested at (2600,1420,5568,3089): mansion still intrudes bottom-left and a road with parked cars enters at right. Not clean enough. |
| 14 | Pexels 17946503 / 32560149 — Sedona sunset vista pair | 2975x3967 / 2985x3980 | yes | REJECT | Same vantage as the alternate but **portrait**, and the crop that keeps enough sky leaves the landscaped gravel path and driveway in frame. The alternate (26867471, landscape) is the better member of this family. |
| 15 | Commons: `Courtyard by Marriott Sedona - Resort Hotel.jpg` | — | not downloaded | REJECT on title | **Named brand in the subject.** Uncroppable — the brand is the property. |

Reframes tested and rejected: 6604588 bottom-anchored (kills sky), 6604588 top-anchored (kills
balconies), 34292094 full-width top (mansion retained), 34292094 right-third (mansion + road).
Reframes that succeeded: 6604588 (0,300,6016,3684) and 26867471 (0,0,3796,2136) — both documented above.

---

# PROBE SUMMARY — read this before running the other 19 condo certificates

## 1. Is destination-specific unbranded resort imagery abundant, scarce, or absent?

**Scarce to the point of being singular, for an inland US destination like Sedona.** Quantify it:

| Source | Query | Usable destination-specific resort/condo exteriors found |
| --- | --- | --- |
| Pexels | 8 separate queries (resort, hotel, pool, villa, house, lodge, terrace, patio) | **exactly 1** — photo 6604588, which surfaced in *every single one* of the eight |
| Unsplash | sedona-resort | 1 result total, and it is a tennis court with a brand on the ball machine |
| Unsplash | sedona-hotel | **0 results. Literal empty state.** |
| Unsplash | sedona-pool | 1 result, a natural rock pool — not lodging |
| Openverse (CC BY / CC0 / PDM, size=large) | "sedona resort" | **1 result: a branded Courtyard by Marriott** |
| Openverse | "sedona condominium" / "sedona villas" / "sedona hotel pool" | **0 / 0 / 0** |
| Wikimedia Commons | Sedona resort / hotel / condominium | 2 files, both the same branded Marriott property |

So the entire free-licence corpus for lodging in Sedona is: **one usable image, plus one branded
Marriott.** The certificate is resolved, but it is resolved by a single asset with no spare.

**Generalisation for the other 19:** expect supply to track destination scale and beach-ness.
Cancun, Orlando, Punta Cana, Cabo, Maui, Las Vegas and the like will have dozens of resort exteriors
(and correspondingly high signage risk — that is where LIVE AQUA and Occidental came from). Inland,
small, or scenery-led destinations — Sedona, Branson, Gatlinburg, Park City, Williamsburg, Napa —
will have **one or zero**. Agents assigned those should budget their time for the *fallback* path
(§4 below) from the start rather than burning ten searches discovering the shelf is empty.

## 2. What is the dominant rejection cause for the condo family?

**Not legible property names.** That was the pre-registered risk and it fired **once in fourteen**
(the PLAYMATE ball machine — and note that was a *third-party product* brand, not a resort name).

The actual ranking, from this probe:

1. **Not premium / not vacation-selling — 6 of 13 rejections.** Car parks, abandoned houses, stone
   ruins, snow-covered tract housing, gravel driveways with parked SUVs, barn interiors. This is the
   *same* failure that killed Upper Algiers and Port Canaveral in the cruise sweep. It is the number
   one cause and it is not what the brief currently warns about most loudly.
2. **Wrong destination — the "resort pool" trap.** Search "resort pool" and you get gorgeous,
   perfectly unbranded resort photography from Tucson, Scottsdale, Bodrum, Muğla, Cairo and Bali.
   Every one of them is compliant and every one is useless. Non-Sedona results outnumbered Sedona
   results roughly 3:1 in "sedona villa" and "sedona pool" — the search engines fall back to the
   generic noun the moment the place name has no inventory.
3. **Wrong aspect ratio / portrait.** Four rejections. Phone-shot travel content is heavily portrait;
   a 4640x6960 file cannot make a 16:9 hero without throwing away the subject.
4. **Identifiable private residences.** A distinct and under-briefed hazard: an aerial of a
   residential destination puts someone's actual house at the centre of the frame. Not a trademark
   problem, but not something to publish either. This killed the otherwise-best-sky candidate (34292094).
5. **Legible property or product branding — last.** Once.

**Interiors "that could be anywhere" never even came up**, because the destination requirement makes
interiors non-starters: a condo living room has no red rock in it. Agents should not search interiors
at all for this family.

## 3. Which search phrasings worked, and which wasted time

**Worked:**
- `sedona hotel` on **Pexels** — the only query that returned Pexels' *own* internal title
  ("Villas of Arroyo Roble resort in Sedona, Arizona") rather than the AI-generated alt text. That
  richer title is what identified the file as a genuine resort rather than generic houses.
  **Run the destination + "hotel" on Pexels specifically, for the titles.**
- `sedona arizona house` — surfaced the destination-specific building set (the derelicts, the aerial)
  that "resort" and "villa" both missed.
- Openverse API as a **census tool**, not a sourcing tool. Four queries, ten seconds, and it proved
  the CC corpus is empty. That is a cheap, decisive negative result and every agent on a small
  destination should run it early to know whether to keep digging.

**Wasted time:**
- `sedona villa` — worst query in the set. 15 results, **11 of them not in Arizona** (Türkiye, Egypt,
  Mediterranean generic). "Villa" is a Mediterranean-real-estate keyword on stock sites.
- `sedona pool` — same failure. Half the page was generic resort-pool stock from anywhere.
- `arizona resort red rock` — returned exactly one resort image, the same 6604588, plus 40 pure landscapes.
- `unsplash.com/s/photos/sedona-hotel` — literal zero results. **Unsplash is not a lodging source
  for secondary US destinations.** Do not spend more than one query on it.
- Flickr CC search via WebFetch — returned `live.staticflickr.com` URLs but **stripped of titles and
  usernames**, so the thumbnails could not be triaged or attributed. Unusable for enumeration here,
  contrary to the brief's note; the note may hold for other queries but did not hold for this one.

## 4. Should the other 19 search "resort", "condo", "villa", "vacation rental", or the destination alone?

**Ranked, and the answer is not "resort".**

1. **`<destination> hotel` on Pexels — run this first.** Counter-intuitive, but "hotel" is the word
   stock photographers actually caption lodging with, and on Pexels it pulls the human-written title
   instead of the machine alt text.
2. **`<destination> resort`** — second. Reliable on beach destinations, thin inland.
3. **`<destination> aerial` and `<destination> arizona/florida/mexico house`** — third. This is how
   you find the **resort-in-landscape** frame, which is the fallback that actually rescues thin
   destinations. Aerials put lodging in the frame at a scale too small to carry legible signage —
   the exact structural analogue of "shoot the port, not the ship" and "shoot the destination, not
   the aeroplane." **For the condo family the rule is: shoot the destination, not the building.**
4. **`<destination>` alone, then scan for rooflines.** Genuinely productive. The alternate here came
   from a plain destination-sunset search.
5. **`<destination> terrace` / `patio` / `balcony`** — low yield but occasionally finds the
   view-from-the-unit framing, which sells the product well when it exists.
6. **Never search `villa`.** It returns Mediterranean real estate regardless of the place name.
7. **Never search `vacation rental` or `condo`.** Both are listing-site vocabulary, not stock-photo
   vocabulary; "condo" in particular returns Miami high-rises and floor plans.
8. **Never search interiors.** Destination-specificity is impossible indoors.

## 5. Family-wide rules I would add to the brief

**Rule C1 — The caption is part of the compliance surface.**
The primary here shows no signage at native resolution, but Pexels' own title names the property
("Villas of Arroyo Roble resort"). Pixel-clean is not the whole test when the certificate guarantees
no property. **Never carry a source caption, alt text, title or filename into the site. Re-caption
every condo image generically to the destination.** This costs nothing and closes the gap. It applies
to every one of the 20.

**Rule C2 — The dominant failure is the vibe test, not the wordmark.**
Six of thirteen rejections here were "technically compliant, commercially unusable." Promote the vibe
test to the top of the condo checklist and make it concrete for this family: **reject parked cars in
the foreground, gravel/utility yards, snow, peeling paint, boarded windows, visible HVAC condensers,
refuse bins, and any building that looks abandoned.** Several of those are croppable — check before
rejecting — but they must be actively looked for.

**Rule C3 — Shoot the destination, not the building.**
The cruise family solved this with "shoot the port, not the ship"; airfare with "shoot the destination,
not the aeroplane." The condo family needs the same sentence. A resort filling the frame carries
signage, entrance monuments, pool-towel logos and menu boards. A resort *in* its landscape — from a
hillside, from a drone, from across a valley — carries none of them and is more saleable anyway,
because it sells the destination the traveller is buying. **Aerials and elevated vantage points are
the highest-yield framing in this family.**

**Rule C4 — Add "identifiable private residence" to the reject list.**
Condo destinations are residential. Aerials and vistas routinely place a specific, distinctive private
house at the centre of the frame. It is not a trademark problem, so the existing checklist waves it
through — but a large recognisable private home as the hero of a vacation certificate is a different
kind of misrepresentation, and it also looks like a mansion rather than the condo being sold. Reject
or reframe it. It cost me the best sky in the set.

**Rule C5 — Run the Openverse census early on any small or inland destination.**
Four API calls, no rate limit, no auth. If `<destination> resort` returns 0–1 CC results, the free
corpus is empty and the agent should switch immediately to Pexels + the resort-in-landscape fallback
instead of grinding through Commons categories and Flickr. It converted a potential hour into ten seconds here.

**Rule C6 — Portrait is a hard reject for a 16:9 hero, state it up front.**
Four rejections here were aspect-ratio failures on otherwise fine images. Phone-native travel content
skews portrait. Agents should check dimensions **before** downloading and skip anything taller than
about 1:1 unless the subject sits in a horizontal band.

**Rule C7 — The 100% rule cuts both ways, and false positives cost time too.**
The brief rightly warns that a smudge at 1600px can be a 300px sign at native. The converse also
happened here: a convincing "sign-shaped wordmark" in the alternate resolved, at 7x with a brightness
boost, into JPEG noise over a hedge. **Magnify with brightness and contrast applied, not just scale** —
and when a suspect region is ambiguous even at 7x, crop it out rather than adjudicate it. Cropping is free.

---

## Reproduction

Working files are in the session scratchpad at
`/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/consed/`
(`PRIMARY_final.jpg`, `ALT_final.jpg`, the native downloads, all tiles and zooms). To regenerate from
scratch:

```python
from PIL import Image
# PRIMARY — fetch with NO query string
# https://images.pexels.com/photos/6604588/pexels-photo-6604588.jpeg
Image.open('p6604588.jpg').crop((0, 300, 6016, 3684)).resize((1600, 900), Image.LANCZOS).save('CON-SED-primary.jpg', quality=93)
# ALTERNATE
# https://images.pexels.com/photos/26867471/pexels-photo-26867471.jpeg
Image.open('p26867471.jpg').crop((0, 0, 3796, 2136)).resize((1600, 900), Image.LANCZOS).save('CON-SED-alt.jpg', quality=93)
```

No repo file other than this report was modified.

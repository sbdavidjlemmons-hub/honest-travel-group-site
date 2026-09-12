# CON-KTH — Kitty Hawk Condo — Image Report V2

**Certificate:** CON-KTH / `kitty-hawk-condo` / Kitty Hawk Condo
**Destination:** Kitty Hawk / Outer Banks, North Carolina
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch. Condo rules C1–C7 applied.
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no Unsplash+, no `premium_photo-`, no retouching.
**Candidates opened with the Read tool:** 15 (plus 10 magnified sub-crops)

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1637784243876-b88a78ce242e` (page slug `M9lkM4SVHEA`) | Unsplash — Ethan Howard | Unsplash License | 3968 x 2976 | **YES — visually verified**, 100% rule run at native (3x/4x/6x/7x) **and** in the delivered 1600x900 file (5x/6x) |
| **ALTERNATE** | Pexels photo `5345349` | Pexels — Tangie Bodden | Pexels License | 5884 x 3922 | **YES — visually verified**, 100% rule run at native (2x facade sweep) **and** in the delivered 1600x900 file (5x) |

Fetch URLs — **no query string**. These are the files that were brand-checked and the files that should ship:

```
https://images.unsplash.com/photo-1637784243876-b88a78ce242e     # PRIMARY   (3968x2976)
https://images.pexels.com/photos/5345349/pexels-photo-5345349.jpeg  # ALTERNATE (5884x3922)
```

**Primary** is a drone frame over the Outer Banks beach-cottage village at **Corolla, NC** — roughly 200 separate
properties, private pools, dune line and boardwalk in the foreground, the maritime forest and Currituck Sound on
the horizon. **Zero legible text of any kind anywhere in the frame**, verified at 7x. No single building is the
subject, so the frame cannot imply a guaranteed property (C3).

**Alternate** is a dune-line frame at **Nags Head, NC** — a row of seven oceanfront cottages against a
wind-whipped turquoise Atlantic, maritime scrub foreground, half the frame clean blue sky. Zero legible text,
verified at 2x across every facade. Carries one visible utility pole and two overhead wires — disclosed in §4.

Both are unmistakably Outer Banks barrier-island lodging. Neither is Kitty Hawk town proper; see §6.

---

## 2. Delivery crops — rendered with PIL and inspected

Both delivered files were produced, opened with the Read tool at 1:1, and then re-magnified on every
signage-risk region **in the shipped pixels** (C3c).

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `(900, 150) → (3968, 1876)` | 3068 x 1726 | 1600 x 900 | **0.5215x (downscale)** | **none** |
| PRIMARY (2nd valid crop) | `(0, 0) → (3968, 2232)` | 3968 x 2232 | 1600 x 900 | **0.4032x (downscale)** | **none** |
| **ALTERNATE** | `(0, 700) → (2800, 2275)` | 2800 x 1575 | 1600 x 900 | **0.5714x (downscale)** | **none** |

**No upscaling anywhere. Every recommended crop is a downscale.**

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("photo-1637784243876-b88a78ce242e.jpg")            # 3968x2976
im.crop((900, 150, 3968, 1876)).resize((1600, 900), Image.LANCZOS).save("con-kth-primary.jpg", quality=93)

# PRIMARY — alternative crop, wider, keeps more dune line, big house slightly larger
im.crop((0, 0, 3968, 2232)).resize((1600, 900), Image.LANCZOS).save("con-kth-primary-wide.jpg", quality=93)

# ALTERNATE
im = Image.open("pexels-photo-5345349.jpeg")                       # 5884x3922
im.crop((0, 700, 2800, 2275)).resize((1600, 900), Image.LANCZOS).save("con-kth-alternate.jpg", quality=93)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/konkth/DELIVER_CON-KTH_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/konkth/DELIVER_CON-KTH_alternate.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/konkth/DELIVER_CON-KTH_primary_altcrop.jpg
```

### Why this crop on the primary

The uncropped native has one large white cottage anchoring the bottom-left at roughly 30% of frame width —
close enough to reading as *the* subject to be worth removing. The `(900, 150)` crop pushes it into the
bottom-left corner at under 20% width and cut by the frame edge, so the village is unambiguously the subject.
It also drops the town water tower (see §4) entirely. This is exactly the step-4a reframe the brief demands:
the candidate was not rejected on the foreground house, it was recropped past it at zero cost.

---

## 3. C1 — source metadata to strip

**Record and strip. None of this may reach the site** — title, filename, or alt text.

| Slot | Source title / alt text | Source filename | Why it must be stripped |
| --- | --- | --- | --- |
| PRIMARY | "an aerial view of a beach town with a lot of houses" — location field reads **"Corolla, NC, USA"** | `photo-1637784243876-b88a78ce242e.jpg` | The location field names **Corolla**, a different Outer Banks town from the one on the certificate. Carrying it through contradicts the certificate. |
| ALTERNATE | Pexels full title: **"Charming beach houses overlooking sandy dunes and ocean in Nags Head, North Carolina"** (short form: "Houses Near the Beach Under the Blue Sky") | `pexels-photo-5345349.jpeg` | Names **Nags Head**, again a different town. |

Neither caption names a *property*, so the Sedona failure mode (a filename implying a guaranteed resort) does not
fire here. The variant that does fire is the same rule one step out: **a caption naming the wrong town is as bad
as a caption naming a property the certificate does not guarantee.** Re-caption generically, e.g.
`kitty-hawk-condo-hero.jpg`, alt text "Outer Banks oceanfront beach-cottage community".

---

## 4. What is actually in the frames — written after looking

### PRIMARY — `photo-1637784243876-b88a78ce242e`

| Check | Finding |
| --- | --- |
| Property names / nameplates | **None.** The large foreground cottage inspected at 3x: no plaque, no house number, no rental-company sign. |
| Street-level retail signage (C3b — the real killer) | **None. There is no retail in the frame at all** — it is purely residential lanes. This is the single biggest reason this frame wins: the Myrtle Beach probe's five signage failures were all storefronts, and there are no storefronts here. |
| Vehicle branding | Checked at 6x: a Ford Transit van, a Honda SUV, a white pickup with a utility trailer, assorted parked cars. **No commercial lettering on any of them.** In the delivered file these are 8–20px objects. |
| Town water tower | Present in the *native* upper-left at ~20px tall. Magnified to 7x: a teal/white sphere with an unreadable dark blob; **no letterform resolves even at 7x**. Moot regardless — **the recommended crop excludes it entirely.** |
| Wheelie bins / clutter | Two bins and a trailer exist in the bottom-left lane. Found only at 5x magnification of the delivered file; at 1:1 they are 2–3px and unresolvable. C3c applies — measured in the shipped file, not the zoom. |
| People | A handful of distant figures on the dune path. Unidentifiable — 3–6px in the delivered file, backs turned or facing away. |
| Overlay real estate | Clean sky band across the top ~28% of the delivered frame, plus a low-detail dune/scrub band bottom-right. Good for a translucent hero. |
| Vibe test (C5 — judged first) | **Premium. Passes.** Bright summer light, blue-green pools, pastel cottages, dune access path. Reads as "the place you rent for a week", which is the product. |

### ALTERNATE — Pexels `5345349`

| Check | Finding |
| --- | --- |
| Property names / nameplates | **None.** All seven facades swept at 2x native (6000x1200 strip): no plaques, no numbers, no text. |
| Retail signage | None — no commercial frontage in the frame. |
| **Utility pole and overhead wires** | **Present and disclosed.** The native frame has a heavy utility pole dead centre; the recommended crop **removes it**. What remains after the crop: one thinner pole with a crossarm at approximately x=1090 in the delivered file (≈4px wide, 55px tall, dark against pale siding), plus two overhead wires crossing the sky at roughly y=225 and y=380 (≈1px each). Visible on close inspection; not visible at a glance; invisible under a hero overlay. **This is the one honest blemish on the alternate.** |
| Reframe attempts to remove the wires | Three tested. `(0,1350,3200,3150)` drops the sky wires but also drops the sky, leaving a bottom-heavy frame with the inter-house wires still present — **worse**. `(0,700,3200,2500)` keeps the wires *and* a second pole — worse. `(0,700,2800,2275)` is the best available trade and is what is recommended. The wires cannot be removed by crop without destroying the composition, and retouching is not authorised. |
| Overlay real estate | Excellent — the top 45% is unbroken blue sky. |
| Vibe test (C5) | **Passes.** Vivid turquoise water, saturated pastel cottages, clean dune scrub. Slightly more "postcard" and less "aspirational" than the primary, and the pole costs it the top slot. |

---

## 5. Everything opened, and why each failed

Fifteen candidates downloaded and opened with the Read tool. Ordered by how close they came.

| # | Candidate | Source | Native | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | `photo-1637784243876` — Corolla aerial village | Unsplash, Ethan Howard | 3968x2976 | **APPROVE — PRIMARY, visually verified** | Many-property elevated frame, zero signage, premium light. |
| 2 | Pexels `5345349` — Nags Head dune-line cottage row | Pexels, Tangie Bodden | 5884x3922 | **APPROVE — ALTERNATE, visually verified** | As above; costs itself the top slot on one pole + two wires. |
| 3 | Pexels `19227299` — "Aerial photo of a coastal town" | Pexels, Curtis Adams | 4000x2247 | REJECT — **wrong destination** | Technically the best-composed strip aerial found: golden hour, houses to the horizon, marsh behind. But the Pexels page states the location as **"Hol, NC"** (Holden Beach — southern Brunswick County, ~250 miles from Kitty Hawk). Textbook C6 destination solvent: the query said "outer banks", the result was the wrong coastline. Also carries a commercial retail strip along the lower-left road, which would have needed a C3b sweep had the destination held. |
| 4 | `photo-1657074293425` — barrier island + inlet aerial | Unsplash, Samuel Cruz | 8064x6048 | REJECT — **wrong destination** | Stunning 48MP drone frame, but it is Wrightsville Beach / Masonboro Inlet (jetty and a mid-rise condo both visible), not the Outer Banks. Same failure mode as #3. |
| 5 | `photo-1642775955792` — Corolla aerial, row of houses | Unsplash, Matt Hardison | 3058x2256 | REJECT — C3 / C4 | Right destination, wrong altitude. One large white residence dominates the foreground as the clear subject. Reframe tested to the upper band: yields a flat mid-frame strip of asphalt road and parked cars — C5 fail. Not recoverable. |
| 6 | `photo-1658439949861` — Buxton, blue house + pool | Unsplash, Gene Gallin | 4000x2250 | REJECT — C3 / C4 | A single identifiable private residence is the entire subject, with a sign board on the pool fence. The exact frame the governing rule exists to exclude. |
| 7 | `photo-1638498886211` — storm over a row of houses | Unsplash, Ethan Howard | 3983x2655 | REJECT — C5 | Corolla, multi-property, no signage — and completely unsellable. A black squall line over the rooftops is the literal opposite of the pitch. |
| 8 | `photo-1612404336841` — Rodanthe stilt house | Unsplash, Raymond Kotewicz | 4032x3024 | REJECT — C3 / C4 / C5 | Single house on the beach as sole subject, grey overcast, a red sign on the deck. This house type is also the subject of well-publicised collapse-into-the-sea coverage — bad association for a travel certificate. |
| 9 | `photo-1701849055225` — Outer Banks sunset over the sound | Unsplash, Ulrike R. Donohue | 3008x2000 | REJECT — no lodging content | Genuinely beautiful vivid sunset, silhouetted building, stated OBX. But a single silhouetted structure over 45% dead black marsh. No condominium or resort content — fails the condo family subject rule. Smallest native in the set. |
| 10 | Pexels `29289406` — "Serene sunset beach at Kitty Hawk NC" | Pexels, Pixel | 4200x2816 | REJECT — C5, no lodging | The only frame in the sweep whose caption says **Kitty Hawk**. It is a bare grey-overcast beach at dusk with a few unreadable buildings at the far-left edge. No lodging, soft and noisy, moody rather than premium. Destination-exact and still not usable — a clean illustration of C5 outranking destination. |
| 11 | Pexels `5129879` — Nags Head beach, distant pier | Pexels, William Lucord | 6720x4480 | REJECT — C5 | Fog and flat grey sky. Cottage row present but distant and washed out. Reads as a raw off-season day. |
| 12 | Pexels `35675250` — Nags Head dune stairway, blue hour | Pexels, Lamont L. Johnson | 6720x4480 | REJECT — C5, no lodging | Heavy blue cast, dark, no lodging, no destination cue. |
| 13 | Pexels `29273129` — Avalon Pier deck | Pexels, James Mirakian | 5000x7500 | REJECT — C5, no lodging | Portrait. Deck-level view down a fishing pier: blue trash barrels, a golf cart, identifiable people mid-frame. Not lodging, not premium. |
| 14 | Pexels `34984149` — Hatteras beach, clear skies | Pexels, Mahabub1144 | 4032x3024 | REJECT — C5, no lodging | Empty beach, tiny distant houses, power poles along the right dune. Handset frame, flat. |
| 15 | Pexels `28721769` — Wright Brothers Memorial | Pexels, dudubangbang | 3085x4096 | REJECT — C5, wrong family | See §7. |
| — | `photo-1580501454232` — Outer Banks pier at sunrise | Unsplash, Clay Banks | 3592x5000 | REJECT — no lodging | Opened and worth naming: a superb golden pier silhouette, stated "Outer Banks, Kinnakeet, NC" (Avon). Portrait, and it contains no lodging whatsoever, so it fails the condo subject rule outright. **Flagged for the operator: this is a strong free asset if any non-condo Outer Banks slot ever needs one.** |

### Rejection causes, tallied

| Cause | Count |
| --- | --- |
| **Not premium / not vacation-selling, or no lodging content at all (C5)** | **7** |
| Single building is the subject (C3 / C4) | 3 |
| Wrong destination (C6 solvent) | 2 |
| Legible third-party branding | **0** |

**C5 held, and held hard.** Not one candidate in this sweep was rejected for branding. Seven were rejected for
being grey, empty, stormy, cluttered, or simply not showing anywhere to stay. Judging saleability first was
the correct order of operations and saved a large amount of zoom work on frames that were never going to ship.

---

## 6. Destination honesty — read this before publishing

**Neither nomination was photographed in Kitty Hawk town limits.** The primary is **Corolla** (≈22 road miles
north); the alternate is **Nags Head** (≈10 road miles south). Both are on the same Outer Banks barrier-island
chain, both are the same architectural product — pastel and cedar-shake stilt cottages on a dune line — and the
certificate's own destination line reads "Kitty Hawk / **Outer Banks**, North Carolina", which both satisfy.

The brief's caution was correct and is confirmed: **there is no high-rise condominium strip on the Outer Banks.**
Nothing resembling the Myrtle Beach tower line exists here. The honest visual analogue of "the strip" on a
barrier island is the *dune-line cottage village*, and that is what both nominations show.

What this rules out: a caption, alt text, or filename asserting a specific town. Caption to the region
("Outer Banks, North Carolina"), never to Corolla, Nags Head, or — on this evidence — Kitty Hawk specifically.

### Kitty Hawk specifically: searched, and it is thin

`kitty hawk` on Pexels is a near-total destination solvent — 24 results, of which roughly 16 are **birds of
prey** (Cooper's hawks, ospreys, red-tailed hawks) and 4 are **military aircraft** (the carrier USS Kitty Hawk,
an F-14, an F-16). Two results were genuinely Kitty Hawk NC. `kitty-hawk` on Unsplash returns 7 results, none of
them lodging. This is C2 in its sharpest form: on this destination the usable supply of condominium exteriors is
**zero**, not scarce, and the surrounding Outer Banks towns are the only place to source from.

---

## 7. The Wright Brothers option, assessed as instructed

The brief asked whether the Wright Brothers National Memorial is worth using as a Kitty Hawk-specific
destination cue. **Assessed and declined**, on saleability, not on rights.

The one usable frame found is Pexels `28721769` (dudubangbang), opened and inspected. It is a black-and-white
low-angle portrait of the pylon with **"WILBUR WRIGHT ORVILLE WRIGHT"** and **"IN COMMEMORATION OF THE CONQUEST
OF THE AIR"** cut into the granite in very large legible letters.

- **Rights:** no problem. It is a federal monument on National Park Service land; the incised lettering is not
  third-party commercial trade dress, so the brand rule does not fire on it.
- **Why it still fails:** C5. A stark monochrome monument against a black sky does not sell a beach week. It is
  portrait, forcing a severe crop; it contains no lodging; it has no usable sky or water for a hero overlay; and
  the legible inscription would dominate any 1600x900 frame it survived into.

Cape Hatteras Lighthouse frames (Pexels `32882360`, `9296980`; Unsplash `H_hIPk8K6IE`, `U-UvoPi6g8o`) surfaced
repeatedly and are similarly rights-clean. **Say it plainly if one is ever used: Cape Hatteras is roughly 70 road
miles south of Kitty Hawk, at the far end of the Outer Banks** — a two-hour drive, not a local landmark. It also
carries the same no-lodging problem. Not nominated.

---

## 8. Licence and provenance

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Licence | **Unsplash License** — free, no attribution required, no share-alike | **Pexels License** — free, no attribution required, no share-alike |
| Paywall check | **Not** Unsplash+. No `premium_photo-` prefix. Page shows the free download path. | Pexels has no paid tier on this file. |
| Cost | **$0** | **$0** |
| Attribution obligation | None. Credit to Ethan Howard is courteous, not required. | None. Credit to Tangie Bodden is courteous, not required. |
| Retouching | None performed. Crop and LANCZOS downscale only. | None performed. Crop and LANCZOS downscale only. |

### AI / pre-generative screen

**PRIMARY.** Unsplash strips EXIF, so the brief's timestamp substitute was used: the filename prefix
`1637784243` decodes to **2021-11-24**, which matches the stated publish date of 24 November 2021 exactly —
comfortably pre-generative for photographic imagery of this kind. The photo page independently states the camera
as **DJI, FC1102**. Geometry is **3968x2976**, i.e. a native 4000x3000 12MP drone frame less 32x24px, the
signature of a small straighten/level crop. Three independent signals agree. **Pass.**

**ALTERNATE.** Pexels strips EXIF from everything it serves, including un-resized originals, so the
camera-metadata half of the screen **cannot be run** — stated explicitly, not waved through. The geometry half:
**5884x3922** is an aspect ratio of 1.50038, i.e. 3:2. A native 24MP full-frame DSLR file is 6000x4000; this is
that frame less 116x78px, exactly the asymmetric trim a straighten produces. Generator output lands on round
powers-of-two or round megapixel counts; this does neither, and the ratio is a camera ratio rather than a
generator ratio. Supporting evidence: the depth-of-field falloff between the near dune, the mid cottage row and
the horizon is optically consistent throughout, and the overhead wires are continuous and correctly catenary —
both hard for a 2019-era generator, and the frame long predates capable ones. **Reasoned pass, on geometry and
optics rather than on metadata.**

---

## 9. Method notes for the next condo agent

1. **The governing rule held at 15 for 15 again, including in its inverse.** Every elevated many-property frame
   passed on composition; every frame with a single building as subject failed (#5, #6, #8). No exceptions.
2. **On a barrier island, "the strip" is the dune-line village, not a tower line.** Translate the rule to the
   local built form before concluding a destination has no usable frame. Kitty Hawk has no towers and still has
   two good assets.
3. **Check the stated location field on every aerial before you fall in love with it.** The two best-composed
   strip aerials in the entire sweep (#3, #4) were both the wrong coastline, and both surfaced from queries that
   named the Outer Banks. Cost: two downloads, one of them 13.4MB. Reading the location field first would have
   cost one WebFetch.
4. **The destination's own name can be a solvent.** `kitty hawk` on Pexels returns mostly *hawks* and *warships*.
   When a place name is also a common noun or a famous vessel, go straight to the region name.
5. **C3c cut a false negative here.** Wheelie bins and a utility trailer are visible in the primary at 5x — and
   are 2–3px in the shipped file. An agent who rejected on the 5x view would have thrown away the best Outer
   Banks asset available at zero budget. Measure in the delivered pixels.
6. **Reframing recovered the primary and improved the alternate.** Neither file shipped as shot. The primary's
   crop demotes a dominant foreground house and deletes a town water tower; the alternate's crop deletes a heavy
   centre-frame utility pole. Three crops were tested per candidate and the losing ones are recorded in §4 so
   nobody re-tests them.

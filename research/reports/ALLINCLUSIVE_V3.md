# All-inclusive family — AIN-CUN / AIN-DOM / AIN-MBJ — Image Report V3

**Brief followed:** `research/IMAGE_BRIEF_V2.md` + `research/ART_DIRECTION_V3.md` S4 ("all-inclusive must show
all-inclusive amenities — pools, swim-up bar, loungers, buffet terrace — not just a beach").
**Coordinator scope for MBJ:** Montego Bay's own strip counts (Rose Hall, Ironshore, Freeport, Doctor's Cave);
Negril and Ocho Rios do not.
**Date:** 2026-09-12. **Budget:** zero — no Unsplash+, no `premium_photo-`, no Getty, no purchase named.
**Method:** every candidate below marked "visually verified" was downloaded, opened with the Read tool, and —
for the nominations — re-fetched at true native with **no query string**, tiled at 1:1 across every low
structure, rendered to the real 1600x900 file, and re-swept from the delivered file at 2x–4x.

---

## 1. Verdicts

| Cert | Status | Source | Photographer | Licence | Native | Crop box (native px) | Scale | Rendered crop |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **AIN-CUN** | **APPROVED** | Pexels `20210509` | israwmx | Pexels License | 8064 x 6048 | `(0, 1512, 8064, 6048)` | 0.1984x | `research/crops/AIN-CUN_1600x900_poolstrip.jpg` |
| **AIN-DOM** | **APPROVED** (reframe) | Pexels `11227594` | Antonio Florentini (@stergerz) | Pexels License | 5280 x 2970 | `(0, 0, 3700, 2081)` | 0.4324x | `research/crops/AIN-DOM_1600x900_bavaro_topdown.jpg` |
| AIN-DOM alt | APPROVED (alternate, one caveat) | Pexels `20091466` | Vitalii Rabinovych | Pexels License | 6375 x 8500 | `(0, 2300, 6375, 5886)` | 0.2510x | `research/crops/AIN-DOM_1600x900_bavaro_strip_ALT.jpg` |
| **AIN-MBJ** | **APPROVED — with two disclosed deviations** (see §4) | Commons `File:Panorama_Montego_Bay.jpg` ← Flickr `26048812@N04/5463579121` | Trevor Cameron | **CC BY 2.0** (attribution required) | 3447 x 1516 | `(60, 0, 2755, 1516)` | 0.5937x | `research/crops/AIN-MBJ_1600x900_poolpanorama.jpg` |

No upscale anywhere. All four crops are exact 16:9 (1.7777–1.7778) and were rendered with PIL LANCZOS at q=93.

Fetch URLs — **no query string**, these are the bytes that were brand-checked:

```
https://images.pexels.com/photos/20210509/pexels-photo-20210509.jpeg        # AIN-CUN   md5 cd0ecf0f2371…  8,466,051 B
https://images.pexels.com/photos/11227594/pexels-photo-11227594.jpeg        # AIN-DOM   md5 31db69636cdf…  3,778,981 B
https://images.pexels.com/photos/20091466/pexels-photo-20091466.jpeg        # AIN-DOM alt  md5 1ff4e9455a0f…  7,669,215 B
https://upload.wikimedia.org/wikipedia/commons/9/99/Panorama_Montego_Bay.jpg  # AIN-MBJ  md5 f114cc6b801c…  1,207,935 B
```

Reproduce:

```python
from PIL import Image
Image.open("pexels-photo-20210509.jpeg").crop((0,1512,8064,6048)).resize((1600,900),Image.LANCZOS).save("ain-cun.jpg",quality=93)
Image.open("pexels-photo-11227594.jpeg").crop((0,0,3700,2081)).resize((1600,900),Image.LANCZOS).save("ain-dom.jpg",quality=93)
Image.open("pexels-photo-20091466.jpeg").crop((0,2300,6375,5886)).resize((1600,900),Image.LANCZOS).save("ain-dom-alt.jpg",quality=93)
Image.open("Panorama_Montego_Bay.jpg").crop((60,0,2755,1516)).resize((1600,900),Image.LANCZOS).save("ain-mbj.jpg",quality=93)
```

---

## 2. AIN-CUN — Pexels 20210509 — what I saw at 100%

**The frame.** A near-vertical drone frame over the central Hotel Zone beach. Turquoise Caribbean fills the top-left
~40%, a wide white beach runs diagonally, and along the landward edge sit **four separate pool complexes belonging to
at least three different properties**: a small rectangular pool with loungers top-right, a long lap pool with slatted
cabanas and a second square pool mid-frame, a beach club of blue umbrellas and green-roofed cabanas with a large palapa
restaurant, and a big infinity-edge pool with a round pool, a hot tub and a children's pool bottom-centre. A white
hotel block anchors the bottom-right. This is the S4 brief literally — pools, umbrellas, loungers, palapa bar, pool
decks — and it satisfies the multi-property rule because no single building is the subject and the pools are visibly
different properties' pools. Sea, sand and sky-free composition: the top-left water is a clean overlay zone
(x 0–700, y 0–500 delivered).

**Text and signage — everything found, and whether it resolves.**

| Region (native) | Zoom | What is there | Resolves in delivered file? |
| --- | --- | --- | --- |
| Beach cabanas + club umbrellas `(3600,3700,5600,4700)` | 1:1 | Green-slat cabanas, plain blue umbrellas, one small palapa, a beach shack | **No text at native.** Nothing to resolve |
| White hotel roof `(6200,3400,8064,5300)` | 1:1 | Plain grey membrane roof, plant, a few white paint marks at the top edge | Paint marks are ~3 px delivered — not letterforms even at native |
| Main pool complex `(3300,4700,5300,6048)` | 1:1 | Infinity pool, round pool, hot tub, children's pool, blue umbrellas, teal loungers | **No pool-floor logo, no deck lettering** |
| Mid pools `(5000,2500,7000,3900)` | 1:1 | Two rectangular pools, slatted cabanas, loungers, a service hut | None |
| Top-right pool `(6300,1512,8064,2600)` | 1:1 | Rectangular pool, loungers, a plunge pool with a slat roof, a dark wood terrace | None |
| Whole delivered file | 2x (four quadrants) | Re-swept end to end | **Zero text anywhere** |

At 0.198x this is the deepest downscale in the family; anything that had survived native would still need ~5 px
cap height to read, and nothing was there to begin with. **Visually verified, passes the 100% rule with margin.**

**Why this frame and not the CON-CUN frames.** The condo certificate already uses israwmx `20210506` (reserve),
zachtheshoota `4306936` (primary) and Unsplash `1510097467424` (alternate) — all elevated strip aerials with a
horizon. `20210509` was rejected for the *condo* on exactly the ground that makes it right here: it is a top-down
amenity frame with no horizon, so it reads as "what all-inclusive buys" rather than "where the condo is", and the
two certificates stay visually distinct on the same page.

**AI screen (Pexels — EXIF stripped, reasoned call).** 8064 x 6048 is the DJI 48 MP full-resolution still geometry
(Mavic Air 2 / Mini 3 Pro class) — a real sensor frame, not generator output. The file sits inside a coherent
same-flight series (`20210498`–`20210512`, all 8064 x 6048, same light and sea state) and carries continuous wave
refraction, boat wake, shadow direction and lounger detail at 1:1. Recorded as a reasoned pass, not an unexamined one.

**C1 — source caption to strip.** Pexels title: *"Summer resort on sea shore in Cancun"* / alt *"Birds-eye view of a
summer resort on the seashore in Cancun"*. Names no property. Ship as `cancun-all-inclusive-hero.jpg`; alt along the
lines of *"Pools and beach clubs along the Cancún Hotel Zone, Quintana Roo, Mexico."* No resort, no operator.

---

## 3. AIN-DOM — Pexels 11227594 — what I saw at 100%, and the reframe that made it

**The full frame FAILS.** At native `(3600,100,4600,600)` magnified 2x, the right-hand resort's pool carries a large
**"Royalton"** script wordmark tiled into the pool floor — cleanly legible, high-contrast pale-blue on navy, and it is
the exact class of mark (saturated, on a flat deck) that survives downscaling. It sits at native **x ≈ 3875–4125**.

**Reframe (step 4a).** Moving the crop's right edge to **x = 3700** drops the Royalton pool, its white cabanas and its
red-umbrella beach club entirely and keeps everything the brief asks for. The delivery crop `(0,0,3700,2081)` was
verified at the boundary: a 1:1 tile of native x 3400–3900 shows the crop edge falling on a lawn-and-path strip with the
first Royalton cabana still ~100 px to the right of it, and the delivered file's right edge re-magnified at 4x shows
only the neighbouring property's grey roof blocks. **175 px of native margin.**

**The frame as delivered.** True top-down over the Bávaro strip: three distinct pool complexes across the top
(a twin-lobe lagoon pool with a **swim-up palapa bar in the water**, a free-form pool with an island and a hot tub, and a
lap pool between red-tile villa blocks), a large thatched palapa restaurant cluster, a dense belt of beach palapas
and loungers running the full width, then the beach, surf and a wide band of turquoise reef water across the bottom
~40% — the overlay zone. Different roof types (thatch, red tile, flat grey) and different pool designs make it
unmistakably several properties. Amenity density is the highest in the family.

**Text and signage — everything found.**

| Region (native) | Zoom | What is there | Resolves? |
| --- | --- | --- | --- |
| Right block `(2200,0,3700,1100)` | 1:1 | Free-form pool, white tent canopy, large palapa, restaurant roofs with plant, neighbouring hotel's grey blocks and a green-roofed service building | **No lettering** |
| Centre `(1100,0,2300,1000)` | 1:1 | Red-tile villas with rooftop lanterns, a lap pool, a grey building with roof plant, two white minibuses on a service road | None |
| Left pools `(0,400,1300,1400)` | 1:1 | Lagoon pools, in-pool palapa bar, thatched cluster, loungers, palapa belt | None |
| Palapa belt `(0,1000,3700,1600)` | 0.55x overview + 2x delivered | Hundreds of palapas and loungers, a small red-roofed gazebo, a red beach flag | Gazebo is a shape, flag is a dot — no text |
| Whole delivered file | 2x (four quadrants) | Re-swept | **Zero text** |

**Visually verified, passes.** Note the frame is oriented with the sea at the bottom (the Royalton mark was mirrored at
native, i.e. south-up); it reads naturally as a drone shot and must **not** be flipped.

**AI screen (Pexels, reasoned call).** 5280 x 2970 is the DJI Mavic 3 (Hasselblad L2D-20c) native 16:9 still geometry
— a real sensor frame. Coherent with the photographer's same-day set (`11227671`, `11227879`, `11227586`). Real
JPEG detail at 1:1 (individual loungers, wake, palapa thatch texture).

**C1 — source captions to strip.** Pexels title *"Aerial view of buildings near body of water"* / alt *"Stunning aerial
view of a resort by turquoise waters and sandy beach"*. Names no property. Ship as
`dominican-republic-all-inclusive-hero.jpg`; alt *"Resort pools and palapa-lined beach at Bávaro, Punta Cana."*

### Alternate — Pexels 20091466 (crop `(0,2300,6375,5886)`, 0.251x) — approved with one caveat

High oblique of the whole Bávaro strip: dozens of orange-roofed resort blocks, blue pools, a palapa belt, the beach and
reef water on the left, the strip curving to the horizon. The strongest *multi-property* frame found and a very safe
compliance frame. **Caveat, disclosed:** a thin brown **sargassum wrack line** runs along the tide line on the left of the
crop. It is far lighter than the shore-length bands that killed two Cancún condo candidates and reads at 1600 px as a
tide line, but it is there. No text found on any roof or deck at 1:1; the delivered file re-swept at 2x is clean.
Use where a horizon and "the whole destination" matter more than amenity close-up.

---

## 4. AIN-MBJ — Commons "Panorama Montego Bay" — approved, weakest of the set, two deviations disclosed

**What exists for Montego Bay proper, honestly.** Pexels holds ten `montego bay hotel` results, one of which is
Acapulco; `montego bay resort` pulls Honduras, Puerto Rico, Belize and Samaná. Unsplash `montego-bay` is beach,
mountain and boat landscapes plus a literal "I love Montego Bay" sign; `ironshore` returns nothing; `rose-hall` returns
roses and cathedrals. Every aerial resort lead on Pexels checked out to the wrong parish — Lucea (`7227901`), Ocho Rios
(`16181426`), Negril (`19565413`, titled "Rockhouse Hotel in Montego Bay" — the title is wrong). Commons' Don Ramey Logan
aircraft aerials are of the bay and the airport, not the resort strip. **There is no free, elevated, multi-property
resort-strip frame of Montego Bay.** That is a gap in the record, and the paid tier was not checked as a remedy because
budget is zero.

**What does exist.** One frame, Commons `Panorama_Montego_Bay.jpg` — Trevor Cameron, Flickr, 16 Feb 2011, Nikon D40X
(18 mm, f/10, 1/400, ISO 200 — **full EXIF present**, pre-dating generative imagery by years), CC BY 2.0, used as the
lead image on the Montego Bay Wikipedia article. Same photographer and upload day as the Commons file titled
"Iberostar Rose Hall Beach, Montego Bay", so the property is the Iberostar Rose Hall complex — inside the Rose Hall
strip the coordinator ruled in-scope. The Flickr page carries no title, description or tag naming it.

**The frame as delivered** `(60,0,2755,1516)`: shot from an upper balcony over a very large free-form pool with a
**swim-up bar** (dark curved roof, stools in the water), a row of thatched palapas with loungers, a lagoon water-feature
garden with fountains and palms in the foreground, a footbridge with a single figure, the resort's left wing at the
frame edge, a pier gazebo, two Hobie cats on the reef, and a clean blue sky across the top ~45% — the best overlay
canvas in the family. Amenities are unambiguous.

**Text and signage — everything found.**

| Region (native) | Zoom | What is there | Resolves? |
| --- | --- | --- | --- |
| Left wing `(0,0,900,800)` | 1:1 | Cream façade, balustrades, rooftop pergola | **No nameplate** |
| Right wing `(2800,200,3447,1000)` | 1.5x | Same architecture, pier gazebo below | No nameplate — and outside the crop anyway |
| Swim-up bar + palapas `(1700,650,3447,1300)` | 1:1 | Bar roof is plain dark-green; palapas plain; loungers plain white | **No lettering** |
| Lower-left gardens `(60,700,1940,1516)` | 1:1 | Fountains, palms, a white lamp post, a towel cart | None |
| Sails `(1800,760,2100,900)` | 3x | Rainbow Hobie cat cloth | No mark |
| **Beach vehicle `(2700,900,2900,1020)`** | 4x | **A white pickup parked on the sand** — a C5 blemish | **Cropped out**: the crop ends at x = 2755, the truck begins at x ≈ 2780 |

**Visually verified, no legible branding anywhere in the delivered file.**

**The two deviations, stated plainly so the call is reversible:**

1. **Single property.** Both wings in the full panorama belong to one resort. The multi-property framing the brief
   prefers does not exist for this destination at zero budget. Compliance rests instead on C1 — the pixels name
   nothing, and the caption, filename and alt must not either — which is the same footing on which CON-SED
   (a single named resort, re-captioned) was approved.
2. **2011 DSLR source at 0.59x.** Sharp enough for a 1600x900 hero; it will not carry a 2x retina full-bleed. The other
   two nominations are 2020s drone frames at 0.2–0.4x and are visibly crisper.

If either deviation is unacceptable to the owner, **AIN-MBJ reverts to UNRESOLVED** and no other free frame is
available; the report is written so that decision needs no re-search.

**C1 — source caption to strip.** Commons title *"Panorama Montego Bay"*, Flickr title *"Panorama1"*. Names no property,
but the sibling file's title does, so **never** carry "Iberostar" or "Rose Hall" into the site. Ship as
`montego-bay-all-inclusive-hero.jpg`; alt *"Resort pool, swim-up bar and palapas on the Montego Bay coast, Jamaica."*
**Attribution obligation (CC BY 2.0):** credit "Trevor Cameron, CC BY 2.0" on the credits/terms page — the only
nomination in this family that carries one.

---

## 5. Candidate ledger — 71 opened, all visually verified on contact sheets; 12 taken to native

**S4-versus-multi-property, resolved as predicted:** the only geometry that satisfies both is an elevated frame over a
resort *strip* where pools and palapa rows are legible as amenities and no single building is the subject. Both
Pexels approvals are exactly that. Ground-level pool shots — abundant on Punta Cana — all failed C3.

### AIN-CUN — Pexels `cancun hotel`, `punta cancun`, `zona hotelera cancun`; Unsplash `cancun`

| ID | Native | Verdict | Why |
| --- | --- | --- | --- |
| **20210509** | 8064x6048 | **APPROVE — PRIMARY** | Above |
| 20210498 | 8064x6048 | REJECT (reserve only) | Punta Cancún cluster — big-brand towers, sign masts, a mall and the Cancún Wheel; usable only by a crop that loses the sky |
| 20210512 | 8064x6048 | REJECT | Same district, same masts |
| 20210508 | 8064x6048 | REJECT | Mall, multi-storey car park and boulevard fill the left half (C5) |
| 20210505 | — | REJECT | Near-duplicate of the CON-CUN reserve `20210506` — would make the two certificates look alike |
| 4306931 / 4306937 | 4000x2250 / 3963x2229 | REJECT | Hazy hotel-zone aerials; pools small; `4306937` carries a car park and boulevard in the right third |
| 36653093 | — | REJECT | Woman in a hammock — single property, ground level |
| 31562293 | portrait | REJECT | Ground-level beach |
| 20210501 / 20210503 | — | **Never fetched** | "Live Aqua" in the title and legible at 4x on prior record |
| Unsplash `cancun` | — | No new supply | Identical 15-item pool the CON-CUN sweep adjudicated; 6 `premium_photo-` items logged, none fetched |

### AIN-DOM — Pexels `punta cana hotel`; Unsplash `punta-cana`

| ID | Native | Verdict | Why |
| --- | --- | --- | --- |
| **11227594** | 5280x2970 | **APPROVE — PRIMARY (reframe)** | Above; full frame rejected on "Royalton" |
| **20091466** | 6375x8500 | **APPROVE — ALTERNATE** | Above; sargassum line disclosed |
| 33836954 | 4000x3000 | REJECT — reserve | Superb oblique of pool, palapa bar, beach and boats — but a coloured **"BÁVARO BEACH"** letter sign at native `(1000–1300, 1550–1700)` is text that would survive 0.4x; every crop that keeps the pool keeps the sign |
| 11556613 | 4000x2250 | REJECT | One red-tile resort campus and its pool are the subject (C3) |
| 33836959 | 4000x3000 | REJECT | One resort's giant orange roofs are identifying |
| 11351841 | — | REJECT | Castle-themed resort — brand architecture |
| 37131299 | portrait | REJECT | Marina and one white hotel; not amenity-led |
| 11227671 | portrait | REJECT | One orange-roof resort village (C3) |
| 28201204, 33191049, 27868502, 27868409, 2646070, 14597480 | — | REJECT | Ground-level or top-down single-property pools, balconies and beach clubs (C3) |
| 11227879, 11227586 | portrait | REJECT | Palapa rows only — no pools, no buildings |
| Unsplash `punta-cana` | — | No usable frame | Beach/palm landscapes; 6 `premium_photo-` items logged, none fetched |

### AIN-MBJ — Pexels `montego bay hotel`, `montego bay`, `montego bay resort`, `jamaica hotel`, `rose hall jamaica`, `doctors cave beach`; Unsplash `montego-bay`, `montego-bay-jamaica`, `jamaica`, `ironshore`, `rose-hall`; Openverse `montego bay` (2 pages); Commons categories Montego Bay / Views / Beaches / Buildings / Rose Hall; Flickr CC

| Candidate | Verdict | Why |
| --- | --- | --- |
| **Commons Panorama Montego Bay** (3447x1516, CC BY 2.0) | **APPROVE — with deviations** | Above |
| Pexels 5475836 (MoBay, verified) | REJECT | One villa's pool terrace — private-residence feel (C4) |
| Pexels 7227901 | REJECT | Stated location **Lucea, Hanover** — out of scope |
| Pexels 16181426 | REJECT | Stated location **Ocho Rios** — out of scope |
| Pexels 19565413 "Rockhouse Hotel in Montego Bay" | REJECT | Stated location **Negril**; title names a property |
| Pexels 20900582 | REJECT | Titled "Bahia Principe Grand Jamaica" — named property, Runaway Bay |
| Pexels 28709878 | REJECT | East Asia (tags) |
| Pexels 29266561, 4226146 | REJECT | Location unverifiable / not Jamaica |
| Pexels 30680736 (MoBay, verified) | REJECT | A floating barge with pink tarps (C5) |
| Pexels 16314764, 18030354, 4093370, 27222664 | REJECT | Beach/cove scenes, no amenities |
| Unsplash 1542356670 | REJECT | Heart-shaped over-water bungalows — Sandals South Coast, brand-identifying, wrong parish |
| Unsplash 1589960592070, 1530225029356, 1700807307349, 1661532732965 | REJECT | Ground-level beach / single tower / silhouetted pool |
| Unsplash 1596377940590, 1621635688910 | REJECT | Not Jamaica (Mediterranean cove; USVI bay) |
| Commons "Hotels in Montego Bay" (CC0) | REJECT | Airport apron and buses in the foreground (C5) |
| Commons "Iberostar Rose Hall Beach" | REJECT | Ground-level beach; title names the property |
| Commons "Montego Bay Jamaica - panoramio" | REJECT | Date stamp burned into the frame |
| Commons 2024-01-31 set (10 files) | REJECT | Cruise-ship decks and open sea |
| Commons Logan aerials (East, MoBay, Rose Hall x2), Westgate hills | REJECT | Bay, town, great house, hillside housing — no resort amenities |
| Flickr CC `montego bay resort` | Unusable | Thumbnails returned without titles or owners; no aerial visible |

---

## 6. Search vocabulary — what held, what broke

- **`<destination> hotel` on Pexels was the right query for all three**, and Punta Cana's human-written titles did
  the triage ("resort pool", "resort-lined shoreline") before a byte was fetched.
- **C6b (verify stated location before downloading) paid for itself four times on Montego Bay** — Lucea, Ocho Rios,
  Negril and Runaway Bay all surfaced under "montego bay" queries, one with "Montego Bay" in the title.
- `montego bay resort` was the destination solvent the brief predicts — six countries in 24 results.
- `ironshore` and `rose hall` are homograph traps (nothing / roses). `zona hotelera cancun` and `punta cancun` worked
  as landmark-inside-destination queries and surfaced three Cancún frames the bare query had not.
- **Commons beat both commercial libraries for Montego Bay**, as it did for Tampa — because the only usable frame is a
  2011 tourist panorama, not stock.

## 7. What this run adds to the brief

1. **S4 and the multi-property rule are reconcilable, but only from above.** Ground-level amenity frames fail C3
   every time; top-down and high-oblique strip frames pass S4 and C3 together. Aim there first.
2. **Pool floors are signage.** The one branding failure in the family was a wordmark tiled into a pool, not on a
   building. Add pool floors and deck mosaics to the C3b "magnify the low things" list.
3. **Destination-name signs are text.** "BÁVARO BEACH" is not a trademark, but it is legible lettering in a hero
   and it cost the best-lit Punta Cana frame. Treat selfie-signs like any other mark.
4. **Montego Bay is the family's supply gap**, not a signage problem. The one compliant frame is single-property
   and 2011-vintage. If the owner wants a strip aerial, it does not exist free, and this sweep did not find it in
   the paid tier either.

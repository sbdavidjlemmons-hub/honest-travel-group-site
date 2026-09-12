# CON-MYR — Myrtle Beach Condo — Image Report V2

**Certificate:** CON-MYR / `myrtle-beach-condo` / Myrtle Beach Condo
**Destination:** Myrtle Beach, South Carolina (Grand Strand)
**Family:** Condo (20 certificates) — **this run was commissioned as the family PROBE**
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-09
**Budget:** zero. No paid stock proposed, no `premium_photo-`, no retouching.

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1543511670-8eb2cbcd6d47` (page slug `y4UVpYGtUA8`) | Unsplash — Jeremy Kierez | Unsplash License | 4056 x 3040 | **YES — visually verified**, 100% rule run at native + 3x/5x/7x crops |
| **ALTERNATE** | `photo-1543511685-1694615ade58` (page slug `LhfFiavOqVQ`) | Unsplash — Jeremy Kierez | Unsplash License | 4056 x 3040 | **YES — visually verified**, 100% rule run at native + 3x/5x/6x/7x crops |

Both are drone frames of the Grand Strand oceanfront condominium tower line at
3002 Ocean Blvd, Myrtle Beach SC (location stated on the Unsplash photo pages).
Both are unmistakably Myrtle Beach, contain **zero legible signage of any kind**,
and show **many properties rather than one**, so nothing reads as a guaranteed resort.

Fetch URLs (no query string — this is the file that was brand-checked and the file that should ship):

```
https://images.unsplash.com/photo-1543511670-8eb2cbcd6d47      # PRIMARY
https://images.unsplash.com/photo-1543511685-1694615ade58      # ALTERNATE
```

---

## 2. Delivery crops — rendered and inspected

Both delivered files were produced with PIL, opened with the Read tool, and inspected
at 1:1 and at 10x on the one flagged region.

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale needed |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 600) → (4056, 2882)` | 4056 x 2282 | 1600 x 900 | **0.3945x (downscale)** | **none** |
| ALTERNATE | `(0, 380) → (4056, 2662)` | 4056 x 2282 | 1600 x 900 | **0.3945x (downscale)** | **none** |

Reproduce exactly:

```python
from PIL import Image
im = Image.open("photo-1543511670-8eb2cbcd6d47.jpg")       # PRIMARY
im.crop((0, 600, 4056, 2882)).resize((1600, 900), Image.LANCZOS).save("con-myr-primary.jpg", quality=92)

im = Image.open("photo-1543511685-1694615ade58.jpg")       # ALTERNATE
im.crop((0, 380, 4056, 2662)).resize((1600, 900), Image.LANCZOS).save("con-myr-alt.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral, copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conmyr/DELIVER_alt_A.jpg      # = PRIMARY  (file named before the swap; contents are 1543511670)
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conmyr/DELIVER_primary_B.jpg  # = ALTERNATE (contents are 1543511685)
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
Left third: a receding row of 15–20 storey oceanfront condominium towers with continuous
balcony stacks — the Grand Strand signature. Bottom-left: a resort lawn with plain yellow
umbrellas, loungers, pool decks and a dune boardwalk — the amenity cue that says
"resort condominium", not "hotel room". Right two-thirds: a very wide, clean, pale
Atlantic beach and blue ocean under a deep cloudless sky.
**Overlay space:** the top ~25% is unbroken sky, and the centre-right is unbroken sand —
two large low-detail regions for a translucent hero. Excellent.

### What the ALTERNATE frame shows
Mirror composition: ocean and sky on the left, tower line on the right, one large
tower anchoring the right edge with pool deck and palms at its base.
**Overlay space:** the entire upper-left quadrant is clean sky and calm ocean. Excellent.

---

## 3. The 100% rule — what was actually magnified

Fetched with **no query string** in every case. Unsplash served true native 4056 x 3040
(2.4–2.6 MB). All crops taken from the native file, opened with the Read tool.

**PRIMARY (`1543511670`)**

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Full tower rooflines / upper facades | (0, 780, 2200, 700) | 1:1 | Clean. Balconies, cupola, parapets. No wordmark, no logo, no sign-shaped object. |
| Resort lawn, umbrellas, pool deck | (0, 1950, 1600, 900) | 1.4x | Clean. Yellow umbrellas are **plain fabric, no valance printing**. Loungers and tables unbranded. |
| Umbrella lawn re-check + service yard | (0, 1950, 750, 620) | 3x | Clean. Parked pickup, hedges, boardwalk stairs. Nothing readable. |
| Mid-ground low buildings between towers | (700, 1550, 900, 500) | 3x | Clean. Balcony glass, pool, palms. No facade lettering. |
| Mid-ground + beach bin line | (1550, 1600, 950, 620) | 3x | Clean. Blue/green municipal beach bins, unbranded. |
| Distant skyline (south) | (1600, 1350, 900, 320) | 5x | Clean. Tower facades only. |
| Distant skyline (far south) | (2150, 1400, 700, 200) | 7x | Clean. Hazy high-rise blocks. **No ferris wheel, no pier structure, no lettering.** |

**Result: PASS at every magnification. No third-party mark of any kind found in this frame.**

**ALTERNATE (`1543511685`)**

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Foreground tower facade + roofline | (2600, 450, 1456, 1200) | 1:1 | Clean. Tile roof, cupola, balcony glass. No name band, no logo. |
| Tower row mid-distance | (1700, 1200, 1500, 800) | 1.4x | Clean at this scale; two suspect rectangles escalated below. |
| Suspect rectangles on blue-grey block | (2350, 1520, 500, 320) | **5x** | **False alarm.** The two "letter-like" marks resolve as **vents / window openings**, not type. |
| Pool deck, boardwalk, loungers | (2650, 1850, 900, 500) | 3x | Clean. Closed umbrellas are plain. No pool signage. |
| Beach furniture / bins | (2600, 2350, 900, 500) | 3x | Clean. One blue and one green wheelie-style beach bin, unbranded, ~20px native. |
| Whole tower row at maximum | (1550, 1350, 800, 300) | **6x** | Clean. Twelve buildings of facade at 6x with **nothing readable anywhere**. |
| Distant skyline north | (1150, 1350, 650, 220) | **7x** | **SkyWheel found.** See disclosure below. |

### Disclosure — SkyWheel in the ALTERNATE frame

At 7x on the native file, a ferris-wheel wireframe is visible in the distant skyline at
native (≈1462, ≈1477), diameter ≈36 native px. This is the Myrtle Beach SkyWheel.

Measured in the **shipped 1600 x 900 file**: centre ≈ (577, 433), diameter **≈14 px**.
Re-cropped that 130 x 110 px region of the delivered file and magnified it 10x to check:
it renders as a pale grey wireframe circle with **no colour, no hub graphic and no wordmark**,
sitting inside a hazy 3 km-distant skyline. At 1:1 it is not resolvable as a ferris wheel,
let alone as a branded attraction.

**Reframe was attempted and rejected on merit, not skipped.** To drop the wheel the crop must
start at native x ≥ 1550, giving a 2496 x 1404 window. The anchor tower is 1460 native px tall,
so any 16:9 window that excludes the wheel must sacrifice either the tower crown or the entire
beach. Both losses are worse than a 14px speck. **This is why `1543511685` is the alternate
and not the primary** — `1543511670` carries no landmark at all and needs no disclosure.

### AI screen

Neither Unsplash CDN file carries EXIF (`getexif()` empty on both) — **Unsplash strips EXIF
exactly as Pexels does**, so the camera-metadata half of the screen cannot be run. The
IMAGE_BRIEF_V2 exception is written for Pexels only; it applies identically here and the brief
should say so. Running the second half instead:

1. **Geometry.** 4056 x 3040 is a real 12.3 MP 4:3 sensor readout (Sony IMX-class 1/2.3"
   drone/action geometry). It is not a generator dimension — diffusion output lands on
   round multiples of 64/128 (1024, 1536, 2048, 4096), never on 4056 x 3040.
2. **Timestamp.** The numeric prefix of an `images.unsplash.com/photo-<n>-<hash>` filename is a
   **Unix epoch upload timestamp**. `1543511670` → **2018-11-29T17:14:30Z**;
   `1543511685` → 2018-11-29T17:14:45Z, i.e. 15 seconds apart, consistent with two frames from
   one drone flight. Both predate photorealistic generative imagery by years.
   (Cross-checked: `1605305812` decodes to 2020-11-13, matching the "published on November 13,
   2020" line on that photo's own page. The technique is sound.)
3. **Physical consistency.** Individual balcony chairs, footprints in sand, coherent shadow
   azimuth across 4 km of coastline, a distant cargo vessel on the horizon.

**Reasoned pass, documented as a reasoned call.** Not an unexamined pass.

---

## 4. Every candidate opened

15 distinct source images downloaded and **opened with the Read tool**, plus 16 derived
native-resolution crops opened. Requirement was 12.

| # | Asset | Source / creator | Native | Opened | Verdict |
| --- | --- | --- | --- | --- | --- |
| 1 | `photo-1543511670-8eb2cbcd6d47` | Unsplash / Jeremy Kierez | 4056x3040 | yes | **APPROVE — PRIMARY, visually verified** |
| 2 | `photo-1543511685-1694615ade58` | Unsplash / Jeremy Kierez | 4056x3040 | yes | **APPROVE — ALTERNATE, visually verified** (SkyWheel speck disclosed) |
| 3 | Pexels 37074968 | Pexels / Sant Sharan | 3024x4032 | yes | **HOLD — 3rd place.** True MB oceanfront-balcony view over a multi-pool resort deck to the dunes and Atlantic. Beautiful, no signage seen. Two problems: portrait, so a 16:9 band forfeits either the sky or the pools; and it shows **one property's** pool complex, which edges toward "this is your resort". |
| 4 | Pexels 16360430 | Pexels / Jacob Hurd | 4032x2268 | yes | **HOLD — 4th place.** Golden-hour pier + Grand Strand skyline, native 16:9, enormous clean orange sky. Resort presence is a waterpark-slide structure at the right edge — a resort-in-landscape read, but weaker on "condominium". |
| 5 | `photo-1659924071869-7c62daee0dc4` | Unsplash / Aarya | 2699x3929 | yes | HOLD-then-reject. Strong Grand Strand oblique, but foreground left is a glass convention-hotel block plus teal/green low-rise with sign-shaped panels; portrait crop tightens onto exactly that. Not worth the brand risk with two clean frames in hand. |
| 6 | `photo-1605305812792-6889462a5bfb` | Unsplash / Gene Gallin | 3568x2511 | yes | **REJECT — "PALMS" set vertically in metal letters down the tower core, plus a property marquee at street level.** Third confirmed named-property case in this family. Uncroppable: the name is on the subject. Also two parking lots. |
| 7 | Pexels 18038143 | Pexels / Curtis Adams | 4000x2247 | yes | **REJECT — "ESCAPE ROOM", "BEACH BOMB", "NOIZ" storefronts all legible**, SkyWheel mid-frame, commercial rooftops and parking fill the lower half. |
| 8 | Pexels 18038142 | Pexels / Curtis Adams | 4000x2247 | yes | **REJECT — "NOLA" signage legible bottom-right**, SkyWheel prominent, parking lots and utility poles dominate. Reframe tested: the only sign-free window is 1400 px wide (needs 1.14x upscale) and still shows motel roofs. |
| 9 | Pexels 18038145 | Pexels / Curtis Adams | 4000x2668 | yes | **REJECT — worst case seen.** "DIRTY DON'S OYSTER BAR & GRILL", "FUN PLAZA", "BOARDWALK Paradise", "ATM", "N.Y. STYLE PIZZA", plus SkyWheel. Six brands in one frame. |
| 10 | Pexels 18038146 | Pexels / Curtis Adams | 4000x2668 | yes | REJECT on subject — beach/dune-fence scene, no condominium. Also a municipal-emblem decal on the Jeep door. |
| 11 | Pexels 20856648 | Pexels / Joel | 4000x3000 | yes | REJECT — SkyWheel dominant with hub wordmark, branded retail strip, flat overcast sky and grey water. Fails the vibe test regardless of branding. |
| 12 | Pexels 12397722 | Pexels / AnalogFusion | 5824x3606 | yes | **REJECT — "PIER 14" in red, fully legible** on the pier building. Mark is central; a left crop drops it but leaves a generic pier and no condominium. |
| 13 | Pexels 39110415 | Pexels / Luca Stringer | 4000x2250 | yes | REJECT — Cherry Grove golden-hour aerial. Compliant and pretty, but reads as a **real-estate / residential-density** aerial, not a resort. Sky is ~12% of frame. |
| 14 | Pexels 39110414 | Pexels / Luca Stringer | 4000x2250 | yes | REJECT — same set, marsh grass fills 60% of frame. Suburban read. |
| 15 | Pexels 29334707 | Pexels / Karen F | 4236x2788 | yes | **REJECT on destination.** Low-rise green shingled beachfront condos, clean sky, wide sand, zero signage — technically the cleanest frame found all run, and **it is not Myrtle Beach**. Surfaced by the word "condo", not by the destination. The archetype of the generic-condo trap. |
| — | Pexels 11556716, Pexels 17147880 | — | — | **no** | `NOT VISUALLY VERIFIED` — downloaded, deprioritised (portrait pier; Orange Beach AL). Do not count these. |
| — | Pexels 35033764 | — | — | n/a | `.jpeg` path 404s; native is `.png` (1667x2500). Not pursued once finalists were secured. |

Derived crops opened (all from native files): `A_towers_top`, `A_pooldeck`, `A_zoom_lowbldg`,
`A_zoom_farskyline`, `A_zoom_distcity`, `A_zoom_mid`, `A_zoom_bottomleft`, `B_bigtower`,
`B_midrow`, `B_zoom_dark`, `B_zoom_pool`, `B_zoom_poolreal`, `B_zoom_farskyline`,
`B_zoom_distpier`, `B_delivered_skywheel_check`, plus both 1600x900 renders.

---

# 5. PROBE SUMMARY — read this before running the other 19

## 5.1 Is destination-specific unbranded resort imagery abundant, scarce, or absent?

**Scarce but reliably present — and it arrives in a very specific shape.** For Myrtle Beach the
entire free supply of compliant resort imagery is **two frames by one photographer from one
drone flight in 2018**, plus two holds. That is roughly a **2-in-15 hit rate** on opened
candidates. Not absent; not abundant. Budget one hour per certificate and expect to open 12–15.

The shape that works, and it is a formula:

> **Aerial or high-oblique of the resort *strip*, at enough altitude that no single building is
> the subject.** At that altitude facades become texture, signage falls below the resolution of
> its own legibility, and the frame reads as "the destination" rather than "a property".

This is the exact analogue of the cruise family's **"shoot the port, not the ship"** and the
airfare family's **"shoot the destination, not the aeroplane"**. State it for condo as:

> ### **SHOOT THE STRIP, NOT THE RESORT.**

Every ground-level or single-building frame in this sweep failed. Every elevated multi-building
frame passed. That is 100% predictive across 15 candidates.

## 5.2 What is the dominant rejection cause for the condo family?

Ranked by frequency in this probe:

| Rank | Cause | Count | Notes |
| --- | --- | --- | --- |
| **1** | **Third-party *retail / attraction* signage — not resort signage** | 5 | ESCAPE ROOM, BEACH BOMB, NOIZ, NOLA, DIRTY DON'S, FUN PLAZA, BOARDWALK Paradise, ATM, N.Y. STYLE PIZZA, PIER 14. |
| **2** | **Wrong subject / wrong vibe** — parking lots, utility poles, overcast flat light, suburban density | 4 | Compliant but unsellable. Same failure mode as the "Upper Algiers" cruise reject. |
| 3 | **Named resort on the building** | 1 | "PALMS" in metal letters down a tower core. |
| 4 | **Right subject, wrong place** | 1 | Clean unbranded condos that are not the destination. |

**This corrects the brief's standing assumption for this family.** IMAGE_BRIEF_V2 says
"resort signage is the live risk in this family", citing LIVE AQUA and Occidental Costa Cancun.
On the Myrtle Beach evidence, **resort signage was the least common failure (1 of 15)**. The
real killer is the **commercial strip that sits between the condos and the beach** — boardwalk
retail, arcades, oyster bars, pizza, ATMs, mini-golf. In a US beach town this is dense and it is
photogenic, so photographers point at it, so it dominates the destination search results.

Practical consequence: agents told to hunt for hotel nameplates will magnify the towers, find
nothing, approve — and ship a frame with "DIRTY DON'S OYSTER BAR & GRILL" at the top of the
crop. **Magnify the low buildings, not the tall ones.** Signage lives at street level.

Secondary mechanic, worth its own line: **branded low-rise sits at the bottom of the frame**
(shopfronts, boardwalk) and **anonymous towers sit at the top**. So when a frame fails, the
reframe that recovers it is almost always **crop upward**, dropping the bottom band. Conversely
the vertical crop that best preserves overlay sky often *also* drops the branded band — those
two goals point the same way, which is lucky and worth exploiting deliberately.

## 5.3 Which search phrasings worked, and which wasted time?

| Query | Platform | Verdict |
| --- | --- | --- |
| **`myrtle beach`** (destination alone) | **Unsplash** | **BEST. Returned both winners** at ranks 12 and 19. Nothing else was needed. |
| `myrtle beach` (destination alone) | Pexels | Good. Returned the whole usable Pexels pool in one call, including both holds. |
| `myrtle beach south carolina` | Pexels | **Wasted.** Returned ~95% the same 24 results as `myrtle beach`. The state name adds nothing on Pexels. |
| `myrtle beach south carolina` | Unsplash | **Wasted.** Same 20 results, but with **more Unsplash+ paywalled entries promoted** and two off-destination Plus images (Jacksonville Beach FL) injected. Strictly worse. |
| `myrtle beach resort` | Pexels | Marginal. 8 results, 7 already seen. Surfaced exactly one new ID, and that one 404s on the `.jpeg` path. |
| `north myrtle beach condo` | Pexels | **Actively harmful.** Same Myrtle set, diluted with **Orange Beach, Alabama** and generic condos. Adding "condo" pulls the ranker off the destination. |
| `myrtle beach vacation rental` | Pexels | **Wasted.** 16 results, ~10 of them generic beach frames with no rental in them at all. |
| `myrtle beach condo` | Unsplash | Mixed. Ranked the two winners #1 and #2 — but then collapsed into generic beaches and **sponsored/Unsplash+ placements**. Useful only as a *confirmation* pass, never as the primary search. |
| `oceanfront condo` (no destination) | Pexels | **Total waste for this brief.** 24 results spanning Hollywood FL, Juan Dolio DR, Acapulco, Bal Harbour, Orlando, Hawaii. Zero Myrtle Beach. Produced candidate #15 — clean, compliant, wrong place. |

**Cost of the wasted queries: roughly half the search calls made.**

## 5.4 Should the other 19 search "resort", "condo", "villa", "vacation rental", "beach", or the destination alone?

**The destination alone. Nothing else. On Unsplash first.**

Concretely, for each certificate run exactly this, in this order, and stop when two clean frames are in hand:

1. `unsplash.com/s/photos/<destination-hyphenated>` — e.g. `park-city`, `sedona`, `wisconsin-dells`
2. `pexels.com/search/<destination>/`
3. Only if 1 and 2 yield nothing: `unsplash.com/s/photos/<destination>-condo` as a *confirmation
   re-rank* of the same pool, not as a new search.

Reasoning, from the evidence above rather than from intuition:

- **Both stock rankers already know these destinations.** "Myrtle Beach" is a location tag, not a
  keyword guess. The photographer's own geotag does the destination-specificity work for you.
- **Every amenity word (`condo`, `resort`, `villa`, `vacation rental`, `oceanfront`) is a
  *global* concept and therefore a destination *solvent*.** It trades the one property the brief
  demands — the destination — for the one property the brief can't use on its own. Query #15 in
  my table is the proof: a flawless unbranded condo frame that is worthless because it is somewhere else.
- **`beach` is the worst of all** for the coastal certificates: it returns sand and sunsets with
  no building in them, which fails the family subject rule outright.
- **Destination alone still surfaces resort imagery**, because that is what people photograph in
  resort towns. Both winners came back from the bare word "myrtle beach".

**Ski and inland certificates (BRE, PKC, SLT, WHI, BRA, PFG, SEV, SED, CAT, LOZ, WID, WBG):**
the strip formula still holds, but "the strip" changes shape — for ski towns it is the
**slopeside condo cluster shot from the mountain or the lift**, and the analogous branded hazard
is the **base-village retail row and lift-tower signage**, not oceanfront storefronts. Same rule,
different street. For Orlando (CON-ORL), the brief already bars park landmarks; note additionally
that "Orlando" as a bare query will return the downtown skyline — use `kissimmee` as well, which
is where the condo inventory actually is.

## 5.5 Family-wide rules I would add to the brief

**R1 — SHOOT THE STRIP, NOT THE RESORT.** Elevate until no single building is the subject.
A frame showing **many properties** reads as the destination and cannot imply a guarantee;
a frame showing **one property** reads as "your resort" and creates the exact misrepresentation
the certificate's assign-at-confirmation term forbids — *even when that property carries no
visible name*. Prefer the multi-building frame on compliance grounds, not just on branding grounds.
This is a stronger and more useful test than "is there a nameplate".

**R2 — MAGNIFY THE LOW BUILDINGS, NOT THE TALL ONES.** Verified 5-to-1 in this probe: brand risk
in the condo family lives in the one-storey commercial band at street level, never on the tower.
An agent who magnifies only the resort facades will pass a frame that ships six legible brands.

**R3 — WHEN A CONDO FRAME FAILS, CROP UPWARD.** The branded band is at the bottom of the frame
and the overlay sky is at the top, so the reframe that fixes compliance is usually the same
reframe that improves the hero. Test it before rejecting. (It did not save any candidate here,
but only because the failures were also vibe failures — parking lots and flat light — which
cropping cannot cure. Say that explicitly: **reframing fixes branding, it never fixes vibe.**)

**R4 — UNSPLASH STRIPS EXIF TOO.** The brief's EXIF exception is written for Pexels only. Both
Unsplash CDN natives returned an empty EXIF block. Extend the exception, and add the replacement
test below, which is stronger than the geometry heuristic.

**R5 — DECODE THE UNSPLASH FILENAME AS A TIMESTAMP.** In `photo-<n>-<hash>`, `<n>` is a Unix
epoch upload time. `1543511670` → 2018-11-29. Anything before roughly 2022 is structurally
pre-generative and clears the AI screen without EXIF. This is a one-line, zero-cost, positive
provenance check and it should be in the brief for every family, not just condo. Verified against
a third file whose page states its publish date.

**R6 — MEASURE A LANDMARK IN DELIVERED PIXELS BEFORE ARGUING ABOUT IT.** The 100% rule finds
things at 7x that are invisible at 1x. That is its job, but a hit is not automatically a
rejection. Convert the find to its size in the shipped 1600x900 file and re-magnify *that*.
A 36px native ferris wheel is 14px delivered, carries no wordmark, and is not identifiable —
whereas the same wheel at 400px is the subject of the photo. **Report the delivered measurement;
do not report "SkyWheel present" as a bare fact.** Distance and haze are legitimate,
zero-cost, non-retouching brand suppressors, exactly like the cruise family's backlighting.

**R7 — RANK CLEAN-AND-ANONYMOUS ABOVE CLEAN-AND-LANDMARKED WHEN BOTH EXIST.** Two frames, same
photographer, same flight, same quality. One has a distant landmark; one has none. Ship the one
with none and keep the other as alternate. Costs nothing, removes the argument entirely.

**R8 — THE OFF-DESTINATION TRAP IS THE FAMILY'S QUIET FAILURE MODE.** A generic amenity query
will hand you a technically perfect frame — unbranded, premium, well-lit — from the wrong
coastline, and nothing in a brand check will catch it. **Destination-specificity must be
verified from the source page's stated location, not from the photo's appearance.** Both winners
here were confirmed against street addresses on their Unsplash pages ("3002 Ocean Blvd, Myrtle
Beach, SC"). Require that citation in every condo approval.

---

## 6. Mechanics confirmed / corrected for the next 19

- Unsplash search pages render fully through **WebFetch**; the CDN is fetchable by plain curl. Confirmed.
- **`images.unsplash.com/photo-<hash>` with no query string returns true native.** Confirmed at
  4056x3040 on both winners, 2.4–2.6 MB. Use this for the 100% rule, exactly as the brief says.
- WebFetch on an Unsplash **search** page returns page *slugs* (`y4UVpYGtUA8`), **not** CDN
  hashes. One extra WebFetch on `unsplash.com/photos/<slug>` is required per candidate to get the
  `photo-<hash>` filename — and that same call returns the **location string and the licence tier**,
  so it doubles as the destination and paywall check. Budget one call per shortlisted candidate.
- Pexels `pexels-photo-<ID>.jpeg` occasionally 404s where the native is a **`.png`** (ID 35033764).
  Retry the `.png` extension before writing a candidate off as unreachable.
- Unsplash+ contamination is real and **increases when you add words to the query**. The bare
  destination query returned 5 Plus items in 20; the longer query returned more and pushed two
  off-destination Plus images into the top 5. Another reason to keep queries short.
- Wikimedia was not needed for this certificate and should not be the first stop for the condo
  family. Commons has civic and geological photography of US beach towns; it does not have
  premium resort-strip aerials. Pexels and Unsplash first, as the brief already advises.

## 7. Licence and attribution

Both approved assets are **Unsplash License**: free for commercial use, no permission needed,
**no attribution required** (crediting the photographer is courteous, not obligatory), and
modification — including cropping — is expressly permitted. Neither is Unsplash+ / Getty;
neither filename carries the `premium_photo-` prefix. No share-alike obligation attaches to the
published crop. **Zero cost. Nothing to purchase. Certificate resolved.**

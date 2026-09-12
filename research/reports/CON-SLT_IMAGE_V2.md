# CON-SLT — South Lake Tahoe Condo — image sweep (V2 protocol)

- **Certificate:** CON-SLT / `south-lake-tahoe-condo` / "South Lake Tahoe Condo"
- **Destination:** South Lake Tahoe, California
- **Family:** Condo (20). Rules C1–C7 of `IMAGE_BRIEF_V2.md` applied in full.
- **Governing rule applied:** *shoot the strip, not the resort* (C3/C3d) — elevate until no single building is the subject.
- **Date:** 2026-09-12
- **Budget:** zero. No Unsplash+, no Getty, no `premium_photo-`, no retouching.
- **Candidates opened with the Read tool:** 22 full frames + 11 native-resolution zoom crops + 6 rendered 1600x900 delivered crops. Every verdict below is **visually verified**.

---

## Result

| | Asset | Source | Licence | Native | Delivered crop | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1552083375-1447ce886485` | Unsplash — Fabian Quintero | Unsplash License | 5857x3905 | `(0,0)-(5857,3295)` | **0.273x** (downscale) |
| **ALTERNATE** | `photo-1647285471436-9d1b1e9d6e47` | Unsplash — Peter Hulce | Unsplash License | 6763x4509 | `(0,120)-(5200,3045)` | **0.308x** (downscale) |

**No upscales.** Both deliver 1600x900 from a downscale; neither approaches 1.0x.

Both are free Unsplash License: neither carries the `premium_photo-` filename prefix, and neither appeared in the Unsplash+/Getty block that the search page rendered separately (five paywalled Tahoe items were enumerated there and are listed under *Paywalled — not pursued* below).

---

## PRIMARY — Emerald Bay from the Sierra rim

`https://images.unsplash.com/photo-1552083375-1447ce886485` (fetched **with no query string**, 5857x3905)

**C1 — source metadata to strip.** Unsplash alt text: *"An aerial view of Emerald Bay State Park with boats on blue water."* Credit: Fabian Quintero. The caption names a **state park**, not a property, so there is no implied-guarantee problem — but per C1 the title, filename and alt text must still be replaced with generic copy on the site (e.g. *"Alpine lake and pine shoreline, South Lake Tahoe"*) and the file renamed off `photo-1552083375-…`.

**What is actually in the frame (visually verified, full frame + 2 native zooms + delivered crop):**
Elevated vantage above Emerald Bay looking north-east up the lake. Fannette Island centred and small. Forested granite ridges frame left and right. Thirty-odd pleasure boats scattered across the bay, each a white speck. Cumulus over a clean sky occupying the top ~45% of the delivered frame.

**Governing-rule test — passes at the strongest setting.** There is **not one building in the frame**. This is past "no single building is the subject": there is no property at all, so the image cannot imply a guarantee of any specific unit. Highest possible score on the compliance half of C3.

**Brand check at 100% (native crops opened, not a downscaled look):**
- `(2108,1249)-(3631,1952)` far shore + sky — forest, ridgeline, haze. Nothing.
- `(292,1171)-(2049,1874)` left ridge — pines, granite, and a horizontal cut that is the SR-89 roadbed. No sign, no wordmark, no vehicle legible.
- Fannette Island at native (checked on the companion Emerald Bay file at `(4930,3182)-(7554,4508)`, 7952px source): the summit structure is the **stone Tea House ruin**, a historic landmark, ~40px native. In a 1600x900 delivery it is ~8px. Not commercial signage.
- Boats: largest hull is ~22px native, ~6px delivered. No name, no operator mark, no colour break resolvable.

**C5 — saleability, judged first.** Premium. Reads immediately as an alpine-lake vacation. The file carries a deliberate teal/editorial grade (cyan-leaning sky, lifted blacks); at 1600x900 this reads as a contemporary travel-magazine look rather than a fault, but it is the one aesthetic reservation and is noted honestly — see *Calling the order* below.

**C4 — private residences.** None present.

**Overlay field.** Upper-left quadrant is unbroken sky; the bay's flat water gives a second clean band. Excellent for a translucent hero/header.

**Destination-specificity.** Emerald Bay with Fannette Island is *the* signature South Lake Tahoe view — SR-89 on the south-west shore, El Dorado County, California. Unambiguously the assigned destination, with no reliance on the caption to prove it.

**Stateline hard constraint.** Satisfied by construction: the casino towers are 12 km east and not in frame, nor is any ski lift, tower or base-area banner.

**Provenance / AI screen.** Unsplash strips EXIF (0 tags confirmed with PIL), so the brief's substitute was run: the filename prefix `1552083375` is a Unix upload timestamp = **2019-03-08**, comfortably pre-generative. Geometry 5857x3905 is an odd-numbered 3:2 frame consistent with a straightened real camera capture, not generator output.

---

## ALTERNATE — turquoise shallows against the snowy Sierra

`https://images.unsplash.com/photo-1647285471436-9d1b1e9d6e47` (fetched **with no query string**, 6763x4509)

**C1 — source metadata to strip.** Unsplash alt text: *"a rocky shore with clear blue water and mountains in the background."* Credit: Peter Hulce. Names no property; still re-caption and rename per C1.

**What is in the frame.** Sapphire water grading to clear turquoise shallows over pale sand, granite boulders anchoring the right third, a long snow-covered Sierra ridgeline across the middle distance, pine shoreline, clean blue sky across the top third. This is precisely the "turquoise shallows against the Sierra" framing the assignment named, and snow is on-season for this certificate.

**Brand check at 100% — and this one needed a reframe.**
Two marks were found at native in the right portion of the full frame:
1. `(5550,1150)-(6100,1500)` at 3x — a **highway regulatory sign** on a post (white plate, red device). Not commercial branding, but a road sign in a resort hero is a saleability distraction.
2. `(5250,1280)-(5650,1560)` at 3x — a small **blue trail/road marker panel** on the hillside, ~35px native, no legible text.

**Reframe applied before rejecting (step 4a).** The delivered crop is taken at width **5200**, which puts the highway sign (x≈5822) and the blue marker (x≈5450) **entirely outside the shipped frame**. Verified by construction and by opening the rendered 1600x900 file. Nothing else in the crop carries a mark: `(0,1172)-(3043,1623)` across the far shore shows only snow, forest and a few unresolvable brown specks at the waterline.

**C3c honoured in both directions.** Neither mark was rejected on a magnified look alone — each was located at native, measured, and then either excluded by crop or shown to fall below delivered resolution. Had the crop retained the blue marker it would have been ~3px in the shipped file and unresolvable.

**C5 — saleability.** The strongest single frame in the sweep on pure appeal: bright, saturated, high-contrast, the water gradient does the selling. No grade reservation.

**Governing rule.** Zero buildings in frame. Passes at the same maximal setting as the primary.

**Provenance.** 0 EXIF tags. Filename prefix `1647285471` = **2022-03-14** — predates the photorealistic generative wave; geometry 6763x4509 is an odd-numbered 3:2 real-sensor crop.

**Geographic honesty.** The ridgeline and granite read as the Tahoe basin and the caption says Lake Tahoe, but this specific cove is most consistent with the **east shore** rather than the California south shore. It is the lake that is the destination and nothing in the frame contradicts "South Lake Tahoe", but it is weaker destination-proof than Emerald Bay. That is the reason it is alternate rather than primary.

---

## Calling the order — stated plainly

On raw saleability the alternate (C) probably edges the primary (A): brighter, unfaded, no grade reservation. The primary wins on the two criteria that matter more here:

1. **Destination-proof.** Emerald Bay/Fannette Island is unmistakably South Lake Tahoe; the alternate is a generic-if-lovely Tahoe cove whose exact shore is uncertain.
2. **Robustness.** The primary carries **no mark anywhere in the full frame**, so its compliance does not depend on a crop holding. The alternate is clean only because the 5200px crop excludes two markers; re-crop it wider and the road sign comes back.

If the coordinator weights hero appeal above destination-proof, flipping them is defensible. It should be a deliberate decision, not a default.

---

## Every candidate opened

Sources searched exactly as instructed: **`lake tahoe hotel` on Pexels** and **`lake tahoe` alone on Unsplash**, widened with the bare destination name `south lake tahoe` on both. No "villa", no "condo", no "vacation rental", no state name, no interiors.

| # | Asset | Source title (C1 — strip before use) | Native | Verdict |
| --- | --- | --- | --- | --- |
| 1 | us `photo-1552083375-1447ce886485` | "aerial view of Emerald Bay State Park with boats on blue water" | 5857x3905 | **APPROVE — PRIMARY.** Visually verified. No building in frame, no mark at native. |
| 2 | us `photo-1647285471436-9d1b1e9d6e47` | "a rocky shore with clear blue water and mountains in the background" | 6763x4509 | **APPROVE — ALTERNATE.** Visually verified. Two markers excluded by 5200px reframe. |
| 3 | us `photo-1633823214436-b458d60e49ed` | "a large body of water surrounded by trees" (Emerald Bay) | 7952x5304 | **Runner-up, held.** Visually verified; clean at native (Tea House ruin only, ~8px delivered). Biggest sky field of the set and the largest source. Rejected for nomination only on tone: hazy, flat contrast, less punch than 1–2. Recoverable with no further work if either finalist is vetoed. |
| 4 | px 30302144 | "Aerial view of Lake Tahoe's forested shoreline and boats during summer" | 3992x2992 | **REJECT (C4).** Visually verified; zero branding at native across two zooms — the cleanest Pexels file found. Rejected because the structures are **private lakefront boathouses and piers**, i.e. private property, and the frame sells private ownership rather than lodging. Also no sky (nadir aerial). Closest thing in the sweep to a "cluster seen small", and the strongest fallback if a frame containing lodging is later required. |
| 5 | px 17000900 | "Stunning landscape of South Lake Tahoe with snow-capped mountains and serene lake" | 6007x4005 | **REJECT, narrowly.** Visually verified incl. delivered crop. Textbook "shoot the strip": elevated, whole lake, snowy ridge, dramatic cloud, scattered lodging tiny and nameless (`(3950,2480)-(4700,2830)` at 3x shows no signage). Rejected on C5 tone — muted desaturated grade, and the shadowed basin is heavily noise-lifted at native. Third fallback. |
| 6 | px 20763009 | "Lake Tahoe in USA at sunset" | 7203x4804 | **REJECT (destination).** Visually verified. Beautiful golden-hour long exposure over granite boulders. No branding. Not nominated: it is the Nevada east shore and contains no lodging cue at all. |
| 7 | px 35914365 | "Scenic Lake Tahoe with snow-capped mountains" | 4032x2268 | **REJECT (thin).** Visually verified. Native 16:9 already, clean, big sky, snowy south-shore range with a lone sailboat. Handsome but sparse — no shoreline, no lodging, nothing but ridge/water/sky. Usable filler, not a hero. |
| 8 | px 38528157 | "Beautiful view of Emerald Bay's blue waters and surrounding pine forests" | 4284x5712 | **REJECT (C5).** Visually verified. Portrait; ~55% empty sky and a dull grey granite slab foreground. Reframe would keep the slab or lose the bay. |
| 9 | px 19991285 | "Peaceful summer landscape of South Lake Tahoe with coniferous island and mountains" | 6000x4000 | **REJECT (C5).** Visually verified. Correct subject (Fannette Island) but flat, hazy, a buoy line across the foreground. Ordinary. |
| 10 | px 30258185 | "Tranquil view of snow-capped mountains and Lake Tahoe in peaceful winter setting" | 5760x3840 | **REJECT (C5 + C3).** Visually verified incl. `(650,1650)-(1250,2050)` at 3x. Fallen Leaf Lake: a genuine lodge/cabin cluster below a snowy ridge — exactly the target shape — but a large dark boathouse dominates the left third (single building too close to being the subject), and at native the file is underexposed, noisy, and shows heavy green/magenta fringing on every roofline. Cold and gloomy, not vacation-selling. The suspected nameplate resolved as a window reflection and a satellite dish — no lettering. |
| 11 | px 30258184 | "Charming rustic lodge with Adirondack chairs" | 5696x3780 | **REJECT (C3, flat).** Visually verified. One named-looking lodge building filling the frame as the subject, with a plaque on a plinth and a placard by the door. Bare dirt "beach", leafless trees. Exactly the failure mode C3 exists to prevent. |
| 12 | px 30396466 | "Aerial view of Lake Tahoe shoreline" | 3294x2875 | **REJECT (C5).** Visually verified. A **car park of roughly sixty vehicles** occupies the left third. The Upper Algiers / Port Canaveral failure verbatim. |
| 13 | px 30396465 | "Aerial view of pier and boats on Lake Tahoe" | 3840x2876 | **REJECT (C5) after reframe.** Visually verified; reframe rendered at `(0,716)` 3840 wide. Lovely turquoise and piers, but the top-right car park and building row survive any 16:9 crop that keeps the piers. |
| 14 | px 30302173 | "Stunning aerial view of Lake Tahoe's sandy beach and clear blue waters" | 3915x2938 | **REJECT (destination) — but the reframe worked.** Visually verified in three states. Full frame is spoiled by a large car park; a first reframe at `x0=1000` failed (car park still central-left); a **second reframe at `(1400,0)` 2515 wide, 0.636x, genuinely rescued it** — the car park drops to a sliver, leaving sapphire water, a boulder point, pines and sand. Not nominated because it is Sand Harbor on the **Nevada** shore and a car row plus an amphitheatre remain at the left edge. Logged because it is a clean demonstration that step 4a pays. |
| 15 | px 33489711 | "Beautiful summer day at South Lake Tahoe beach with clear waters, trees, and mountains" | 3264x2448 | **REJECT (C5).** Visually verified. Packed public beach — towels, crowds, an event tent, a white placard. Phone-grade, lowest resolution in the set. |
| 16 | px 18833023 | "Aerial view of people swimming in clear waters surrounded by rocks and summer greenery" | 6000x4000 | **REJECT (thin).** Visually verified. Gorgeous turquoise-over-boulders, no branding, but no sky, no horizon, no mountains — proves no destination and gives no overlay field. |
| 17 | px 12863109 | "Enjoy a sunny day at Lake Tahoe with mountains and a bustling boardwalk" | 7952x5304 | **REJECT (C5) after reframe.** Visually verified; reframe rendered at `(0,0)` full width, 0.201x. The top band is genuinely good (snowy Tallac range, brilliant sky, South Lake Tahoe shoreline), but **rusted steel sheet piling** fills the bottom quarter of any 16:9 crop at full width and reads industrial, plus bins and clutter at left. Reframe improved it and did not save it. |
| 18 | us `photo-1709744800386-29a1e304776d` | "a scenic view of a lake surrounded by mountains" | 5877x3918 | **REJECT (C5).** Visually verified. Attractive Sand Harbor boardwalk scene but heavy-handed HDR with visible halos — reads as cheap stock, and the Nevada shore again. |
| 19 | us `photo-1554777922-5211a9b94b8a` | "a large body of water surrounded by trees" (Emerald Bay, winter) | 6000x3809 | **REJECT (C5).** Visually verified. Correct subject, washed-out flat light, no colour. |
| 20 | us `photo-1606944474833-53ac012fde2a` | "aerial view of body of water" | 3648x5472 | **REJECT (thin).** Visually verified. Striking portrait drone abstract over turquoise boulders. Beautiful, but no sky, no ridgeline, no lodging — unplaceable. |
| 21 | us `photo-1577416026704-0fe2d48a0f20` | "rock formations viewing lake surrounded with green trees under white and blue sky" | 6000x4000 | **REJECT (C5).** Visually verified. The bottom half is an undifferentiated grey granite slab. |
| 22 | us `photo-1642487712111-fd396b6f6a50` | "a body of water surrounded by snow covered mountains" | 4032x3024 | **REJECT (C5).** Visually verified. Phone snapshot, flat light, a hard shadow band across the snow foreground. |

**Rejection causes, tallied:** not premium / not vacation-selling **11 of 20** — again the dominant cause, as C5 predicts. Composition too thin to prove a destination: 4. Wrong or unprovable destination: 3. Private property (C4): 1. Single building as subject (C3): 1. **Legible third-party branding: zero.** Consistent with C5 and C7 — on a natural-landscape destination the branding risk is near nil and the whole battle is saleability.

---

## Notes for the next sweep

- **C3 scores higher on a landscape destination than the rule anticipates.** In Myrtle Beach the passing frames were many-property strips. Here the best frames contain **no property at all**, which is a strictly stronger form of the same compliance test. Worth folding into the rule: *elevate until no single building is the subject — and on a natural destination, zero buildings is better still.*
- **The condo family and the landscape answer are in tension.** Both nominations sell South Lake Tahoe and neither shows lodging. If the certificate's design needs a lodging cue in the hero, the honest options are candidate 4 (private boathouse shoreline, C4 problem) or candidate 5 (elevated basin with tiny scattered lodging, tone problem). Neither is clean. Say so rather than forcing one.
- **C6 confirmed on both halves.** `lake tahoe hotel` on Pexels returned human-written titles that let lodging be identified from the caption (candidates 10, 11); bare `lake tahoe` on Unsplash returned both winners. Adding the bare destination name `south lake tahoe` was worthwhile — it surfaced candidates 5, 9 and 14 — and, unlike a state name, did not act as a destination solvent: results stayed in the Tahoe basin.
- **C2 is wrong for this destination.** Supply is neither singular nor scarce: 39 distinct Tahoe frames enumerated across four searches, with several genuinely premium. Tahoe belongs with Cancun/Orlando in the abundance column, not with Sedona — but the abundance is *landscape*, not resort exterior, so the signage risk that usually accompanies abundance never materialised.
- **Stateline was never a live risk.** No search surfaced a casino tower. The constraint cost nothing.

## Paywalled — not pursued (zero budget)

Named for completeness per the brief; **do not purchase**. Unsplash+/Getty Tahoe items rendered in the search pages: two Getty frames ("A landscape of lake Tahoe surrounded by greenery and snow in the USA"; "A breathtaking view of the sunrise over Lake Tahoe, Sierra, Nevada, United States"), plus `premium_photo-` items by Ales Krivec, Casey Horner and Hans; on the `south lake tahoe` page, a further Getty sunset frame and premium items by Josh Hild and Guillaume Issaly. None was needed — the certificate resolves free.

## Reproducing the deliverables

Fetch each URL **with no query string**, then crop and resize with PIL:

```
photo-1552083375-1447ce886485  ->  crop (0,0,5857,3295)   -> resize 1600x900   (0.273x)
photo-1647285471436-9d1b1e9d6e47 -> crop (0,120,5200,3045) -> resize 1600x900  (0.308x)
```

No retouching of any kind was performed or is authorised. Per C1, strip the Unsplash title, alt text and `photo-…` filename before publication and re-caption generically; the certificate names no property and assigns the unit at confirmation.

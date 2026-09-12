# CON-ARU — Aruba Condo — Image Report V2

**Certificate:** CON-ARU / `aruba-condo` / Aruba Condo
**Destination:** Aruba (west-coast resort strip — Eagle Beach / Palm Beach / Druif Beach)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no `premium_photo-`, no Unsplash+/Getty, no retouching.
**Candidates opened with the Read tool:** 18

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `pexels-photo-4710783` | Pexels — Leonardo Zunino | Pexels License | 3968 x 2976 | **YES — visually verified**, 100% rule run at native (3x/4x) **and** in the delivered 1600x900 file (4x/7x/10x) |
| **ALTERNATE** | `photo-1609769542735-3cfa075d9b70` (page slug `J4ahbqQN618`) | Unsplash — Shandell Venegas | Unsplash License | 3024 x 4032 | **YES — visually verified**, 100% rule run at native (4x/5x) **and** in the delivered 1600x900 file (5x) |
| _second alternate_ | `pexels-photo-27865066` | Pexels — Chuck Henjes | Pexels License | 5616 x 3744 | **YES — visually verified**; clean but held back (see §6) |

Both nominations are **multi-property frames of the Aruban resort strip** in which no single
building is the subject, and both carry **zero legible signage of any kind in the delivered file**.

Fetch URLs — **no query string**; these are the exact files that were brand-checked and the exact
files that should ship:

```
https://images.pexels.com/photos/4710783/pexels-photo-4710783.jpeg     # PRIMARY
https://images.unsplash.com/photo-1609769542735-3cfa075d9b70           # ALTERNATE
https://images.pexels.com/photos/27865066/pexels-photo-27865066.png    # second alternate (serves .png, not .jpeg)
```

---

## 2. C1 — source titles, recorded so they can be STRIPPED

Per C1, the caption names the property even when the pixels do not. **None of these titles,
filenames, or alt strings may reach the site.** Re-caption generically.

| Asset | Source title / alt as published | Why it must not ship |
| --- | --- | --- |
| PRIMARY | "Aerial Footage of Seaside" (Pexels page states location **Aruba**) | Names no property, but the filename `pexels-photo-4710783` and the source alt must still be replaced with a generic caption. |
| ALTERNATE | "palm trees on beach during daytime" / Unsplash alt "…free HD photo of blue and aruba in Aruba by Shandell Venegas" | Carries the photographer's name in the alt string. Strip. |
| second alternate | Pexels page heading reads **"Divi Beach - Aruba"**; listed title "Relaxing view of a tropical beachfront in Oranjestad, Aruba with palm trees and clear blue waters" | **"Divi Beach" is one character away from the Divi Resorts brand.** This is the C1 failure mode exactly — the pixels are anonymous, the caption is not. Hard strip. |

Recommended shipped captions (generic, guarantee-free):
- PRIMARY: "Aruba's west-coast beach and resort strip from the air"
- ALTERNATE: "Low-rise resort buildings behind the palms on Aruba's west coast"

---

## 3. Delivery crops — rendered with PIL and inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale needed |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 300) → (3968, 2532)` | 3968 x 2232 | 1600 x 900 | **0.4032x (downscale)** | **none** |
| ALTERNATE | `(0, 1300) → (3024, 3001)` | 3024 x 1701 | 1600 x 900 | **0.5291x (downscale)** | **none** |
| second alternate | `(0, 0) → (5616, 3159)` | 5616 x 3159 | 1600 x 900 | **0.2849x (downscale)** | **none** |

**Nothing in this report requires upscaling above 1.0x.** All three are comfortable downscales.

Reproduce exactly:

```python
from PIL import Image

im = Image.open("pexels-photo-4710783.jpeg")                     # PRIMARY
im.crop((0, 300, 3968, 2532)).resize((1600, 900), Image.LANCZOS).save("con-aru-primary.jpg", quality=92)

im = Image.open("photo-1609769542735-3cfa075d9b70.jpg")          # ALTERNATE
im.crop((0, 1300, 3024, 3001)).resize((1600, 900), Image.LANCZOS).save("con-aru-alt.jpg", quality=92)

im = Image.open("pexels-photo-27865066.png")                     # second alternate
im.convert("RGB").crop((0, 0, 5616, 3159)).resize((1600, 900), Image.LANCZOS).save("con-aru-alt2.jpg", quality=92)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/aruba/A_DELIVERED.jpg   # PRIMARY
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/aruba/D_DELIVERED.jpg   # ALTERNATE
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/aruba/C_DELIVERED.jpg   # second alternate
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
A drone frame down the Aruban west coast. Left half: deep ocean grading through turquoise to a
pale shallow shelf. Centre: a very wide, brilliant white beach with scattered swimmers and
loungers. Right: a receding line of **low-rise red-tile-roof resort/condominium blocks** behind a
band of trees, and — on the horizon at the top right — the **Palm Beach high-rise hotel line**.
Two distinct building groups plus a distant skyline: three properties minimum, none of them the
subject. Elevation is high enough that the roofline sits behind the destination's signature
landscape, exactly as C3d prescribes.
**Overlay space:** the entire left half is unbroken ocean and the top quarter is unbroken sky —
two very large low-detail regions. Excellent for a translucent hero or header.

### What the ALTERNATE frame shows
A water-level frame looking back at Druif/Divi Beach. Bottom third: clear turquoise shallows.
Middle: white sand with thatched palapas and loungers. Behind them, a **row of three or four
separate cream and white low-rise blocks with continuous balcony stacks** — unmistakably
condominium architecture, not a single hotel — screened by a tall colonnade of coconut palms.
Top: deep blue sky with light cloud.
**Overlay space:** the upper-left third is clean sky, the bottom third is clean water. Good.

---

## 4. The 100% rule — what was actually magnified, and in which file

Per C3b, the **low** buildings and the **beach-level** structures were magnified, not the towers.
Per C3c, every high-zoom find was converted into **delivered pixels** before any rejection.

### PRIMARY — `pexels-photo-4710783`

| Region | Found at | What it is | Measured in the DELIVERED 1600x900 file | Verdict |
| --- | --- | --- | --- | --- |
| Beach vendor cluster, two banners | 4x native | Two hand-painted activity banners reading approximately "JET SKI" and "TUBING" | banner pair occupies **162 x 53 px**; inspected at **10x** — **no letterforms resolve at all**, pure colour smudges | PASS. Generic activity words, not a brand, and unreadable in the shipped file. Textbook C3c. |
| Low-rise resort complex, right edge | 4x native, then 7x on the delivered file | Red/orange tile-roof blocks, a green-roofed building, yellow blocks | pale mark on the green roof is an **unresolvable smudge**; no letterforms anywhere | PASS |
| Whole built-up right edge | 4x sweep across the delivered file | Entire strip, trees, service road | **no legible signage of any kind** | PASS |
| Palm Beach high-rise skyline | 3x native | Mid-rise condo blocks, a large dark high-rise, a white Moorish twin-tower | **no names, no wordmarks, no rooftop signs** at 3x | PASS |
| Palapa cluster and gazebo | 4x native | Thatched umbrellas, wooden gazebo | clean | PASS |

Minor note, disclosed rather than hidden: a small service road with parked cars sits under the
trees at the right edge. At 7x it is identifiable; at 1:1 in the delivered file it is an
indistinct dark band in shade. The subject of the frame is a pristine beach, so this is not the
C5 "car park as subject" failure that killed the Port Canaveral panorama.

### ALTERNATE — `photo-1609769542735-3cfa075d9b70`

| Region | Found at | What it is | Measured in the DELIVERED file | Verdict |
| --- | --- | --- | --- | --- |
| Low-rise resort block, centre | 4x native, 5x delivered | Cream/white balcony blocks, red-tile roof caps | **no nameplate, no wordmark, no facade lettering** | PASS |
| Far-left buildings | 5x native, 5x delivered | A yellow block and a white balcony block | clean; a small yellow beach kiosk is **unreadable even at 5x** | PASS |
| Palapa / lounger row, right | 3x native, 5x delivered | Thatched umbrellas, loungers, sunbathers | clean | PASS |

### Second alternate — `pexels-photo-27865066`

| Region | Found at | What it is | Verdict |
| --- | --- | --- | --- |
| Beach bar pavilion | 3x native | Large timber gazebo bar, seated guests | **no name board** | PASS |
| Low-rise strip behind palms | 4x native | Yellow and red-tile resort blocks | **no nameplate** | PASS |
| Beach restaurant deck, right edge | 4x native | Pavilion, rope fence, planters | clean | PASS |

---

## 5. Rejections — all opened, all reasons stated

Eighteen candidates were downloaded and opened. Fifteen were rejected.

| # | Candidate | Source | What it actually is | Reason |
| --- | --- | --- | --- | --- |
| 1 | `photo-1633421332483-1aa89f0c6b9a` | Unsplash — Kiril Georgiev, 7296x5472 | Palm Beach from the pier: white Moorish tower, modern white high-rise, pink block, palapa row, spectacular turquoise water | **REJECT — legible third-party hotel brand.** See §5a. The single most attractive frame in the sweep, and it fails. |
| 2 | `pexels-photo-31823402` | Pexels — Ryan Anderson, 8064x4536 | Aerial of a low limestone coast with a strip of **private villas with orange tile roofs**; lighthouse on the horizon | REJECT — **C4, identifiable private residences**. Reads as housing, not resort or condominium; no amenity evidence. |
| 3 | `pexels-photo-16164623` | Pexels — 2mephoto, 5472x3648 | Colourful Dutch-Caribbean waterfront with a large road bridge behind | REJECT — a **legible yellow shopfront sign** on the quay building; bridge and architecture indicate **Curaçao, not Aruba**. Off-destination and branded. |
| 4 | `pexels-photo-31030165` | Pexels — Helena Aguiar, 3024x4032 | Portrait phone snapshot of a beach club under a cliff, string lights | REJECT — **C5 not premium**: snapshot quality, plus a **chalkboard menu board** in frame. Cliff-backed cove is not an Aruban west-coast beach. |
| 5 | `pexels-photo-32393942` | Pexels — Courtney Ra, 5138x3853 | Ground-level rocky shoreline, one grey building dominating the left | REJECT — **C3 fail**, single building is the subject; ground level; rocky/scrubby shoreline, not the Aruban strip. |
| 6 | `pexels-photo-32393907` | Pexels — Courtney Ra, 5156x3867 | Same location at dusk | REJECT — same C3 fail, plus a **poster/sign on the building's ground floor**. |
| 7 | `pexels-photo-30699367` | Pexels — Courtney Ra, 5184x3888 | Cactus, a thatched umbrella, one white house up a stone stair | REJECT — **C3 single-building subject**, a **branded banner/flag** beside the house, flat washed-out light. **C5 not vacation-selling.** |
| 8 | `pexels-photo-31273867` | Pexels — Sean Ingram, 5136x7704 | Beach umbrellas | REJECT — **"COCO LOCO" wordmark legible on three umbrellas** at 1:1. Exactly the C3b street/retail branding failure. |
| 9 | `pexels-photo-6368077` | Pexels — Vlado Paunovic, 2199x3298 | One pink-graded balcony facade against sky | REJECT — **C3 fail**, the building *is* the frame; heavy colour grade; no destination evidence of any kind. |
| 10 | `pexels-photo-4710785` | Pexels — Leonardo Zunino, 3968x2976 | Top-down drone frame of surf on white sand | REJECT — beautiful, but **no property and no destination**. Cannot carry a condo certificate; could be any beach on earth. |
| 11 | `photo-1625736102294-96f0268f49de` | Unsplash — Lex Melony, 4000x2250 | Top-down palapas and palms, already 16:9 | REJECT — clean and premium, but **no building and no destination cue**. Held as a last-resort generic only. |
| 12 | `photo-1625487328546-4b9fc4eeab1d` | Unsplash — Lex Melony, 4032x3024 | Palm Beach at ground level, Moorish tower filling the right | REJECT — **C3 fail**, one building is the subject, and the same brand liability as #1; beach vendor stands add signage risk. |
| 13 | `photo-1635153756203-cfea696035d4` | Unsplash — Kiril Georgiev, 3000x4000 | Row of thatched cabanas over water | REJECT — **no destination proof**, no condominium evidence; a single amenity, not a strip. |
| 14 | `pexels-photo-12446359` | Pexels — Bertelli Fotografia, 5464x3640 | Elevated look-down at a palapa deck and loungers | REJECT — **no destination specificity**; cluttered white railing structure across the bottom edge. |
| 15 | `pexels-photo-12446351` | Pexels — Bertelli Fotografia, 4151x6226 | Dusk, catamarans and kayaks hauled up on sand | REJECT — **C5 not premium**: gloomy, foreground crowded with watercraft and loungers; portrait; no condominium evidence. |

### 5a. The one that hurt — `photo-1633421332483`, and why reframing could not save it

This frame is the best-looking Aruba image found anywhere in the sweep: Palm Beach, an enormous
clean turquoise foreground, a palapa row, three separate properties, and a landmark skyline.

Per step 4a I tried to recover it before rejecting.

- At 3x native, the modern white high-rise carries a **red "RIU" rooftop sign** (~53 x 30 px native).
- At 1.5x native, the white Moorish tower carries a **second red "RIU"** on its facade (~48 px wide native).
- Delivered at 1600x900 (scale 0.2193x), the rooftop mark measures **12 x 6 px** and the facade
  mark **10 x 13 px**. I rendered the delivered file and **"RIU" is still readable in red at 1:1**
  on the rooftop. This is the opposite outcome to the Myrtle Beach SkyWheel: high contrast red on
  white survives the downscale where a grey structure did not.
- **Reframing makes it worse, not better.** Cropping left of the rooftop sign (native x < 4302)
  forces a 4302px-wide crop, which raises the delivered scale to 0.372x — the *remaining* facade
  "RIU" then grows to roughly 18 x 22 delivered px, i.e. more legible than in the full frame.

This is precisely the case the brief names: **"Reframing fails when the mark is central or
repeated."** Two RIU marks, both central, on the two subject buildings. Rejected. Retouching is
not authorised and was not considered.

---

## 6. Why the second alternate is ranked third

`pexels-photo-27865066` is fully compliant — elevated enough that the strip recedes, no single
building as subject, no legible signage at 4x, huge clean sky and sea, and a Pexels-stated
location of Aruba. It is held behind the other two for two reasons, both C5 (saleability first):

1. A **band of seaweed** runs across the foreground sand through the lower-right quadrant of the
   delivered crop. Honest, but it reads slightly unmaintained next to the other two frames.
2. It is **ground level**, and C3's governing rule prefers elevation. The primary is a true drone
   frame and the alternate at least looks back from the water.

It is a genuine third option if either nomination is unavailable.

---

## 7. Licence and AI-provenance screen

| Asset | Licence | Attribution required | Share-alike | Paywall check |
| --- | --- | --- | --- | --- |
| PRIMARY | **Pexels License** (page confirms "free to use", not sponsored) | No | No | Free — no `premium_photo-`, no Unsplash+/Getty |
| ALTERNATE | **Unsplash License** (photo page confirms free, **not** an Unsplash+ item) | No | No | Free |
| second alternate | **Pexels License** | No | No | Free |

No CC BY-SA anywhere in this set, so no share-alike attaches to the published crop.

**AI screen.**

- **ALTERNATE — positive provenance, two independent checks.** The Unsplash filename prefix
  `1609769542` decodes to **2021-01-04 14:12:22 UTC**, and the photo page independently states a
  published date of **January 4, 2021** — the two agree. The page also reports the camera as an
  **Apple iPhone XS**, and the native geometry **3024 x 4032** is exactly that phone's 12 MP
  portrait frame. Comfortably pre-generative. **Pass.**
- **PRIMARY — Pexels strips EXIF, so the camera half of the screen cannot be run** (brief
  exception, acknowledged explicitly rather than waved through). Running the second half: native
  **3968 x 2976** is a 4:3, 11.8 MP frame — the standard output geometry of a 12 MP consumer
  drone sensor, not a generator dimension. It is one of a **pair** from the same shoot
  (`4710783` and `4710785`, sequential Pexels IDs, same photographer, same coastline, same
  altitude and light), which is a shooting pattern rather than a generation pattern. The Pexels
  page independently states the location as **Aruba**, and the skyline in the frame matches the
  real Palm Beach high-rise line. **Reasoned pass**, documented as a reasoned call.
- **second alternate — Pexels, EXIF stripped.** Native **5616 x 3744** is exactly the Canon EOS
  5D Mark II sensor frame (21.1 MP, 3:2). Real-sensor geometry. **Reasoned pass.**

---

## 8. Search log — what was run and what it returned

Per C6, the destination-appropriate vocabulary was used and nothing else. **No amenity words, no
country name appended, no "villa", no "condo", no "vacation rental", no interiors.**

| Query | Source | Result |
| --- | --- | --- |
| `aruba hotel` p1 | Pexels | 24 results, ~8 genuinely Aruban — best yield of the sweep; produced the primary and the second alternate |
| `aruba hotel` p2 | Pexels | 23 results; already drifting (Curaçao, Bonaire, Sint Eustatius, "Panchos Villas") |
| `aruba hotel` p3 | Pexels | 24 results, **destination solvent complete** — Mexico, Dominican Republic, Willemstad, Cancún, Waikiki. Query exhausted. |
| `aruba` p1 | Unsplash | 20 results; produced the alternate and the rejected RIU frame |
| `aruba` p2 | Unsplash | **Identical 20 results — Unsplash has no second page for Aruba.** Supply confirmed exhausted. |

**C2 is confirmed for Aruba, in a form between the two poles the brief predicts.** Aruba is not a
Sedona-style one-or-none destination, but it is nothing like Cancun either: the entire free-stock
supply for the island is roughly **25 usable frames across both sources**, and only about eight of
those contain a resort building at all. Four pages of search exhausted it completely.

**ARUBA CAUTION observed.** Oranjestad's duty-free retail core was avoided throughout; no
candidate from the cruise-port or jeweller district was carried forward. Both nominations are
beachfront strip frames (Eagle Beach and Druif Beach), and the one Oranjestad-tagged frame that
was carried (#3, the second alternate) is a beach frame well outside the retail core — its Pexels
"Oranjestad" tag is the municipality, not the shopping street.

A further caution worth recording for the family: **the Pexels `aruba hotel` result set is
contaminated with Curaçao and Bonaire**, which look superficially similar (Dutch Caribbean
architecture, divi-divi trees, turquoise water). Four rejections above (#3, #5, #6, #7) are almost
certainly not Aruba at all. Location was verified on the source page for every nomination.

---

## 9. Compliance summary against the condo rules

| Rule | Primary | Alternate |
| --- | --- | --- |
| **C3 — shoot the strip, no single building as subject** | PASS — two building groups plus a distant skyline, aerial vantage | PASS — three to four separate low-rise blocks in a row |
| **C3b — low buildings magnified, not the towers** | PASS — vendor banners and the low-rise complex were the magnified regions; the high-rises were checked last | PASS — the low blocks and the beach kiosk were the magnified regions |
| **C3c — measured in delivered pixels** | PASS — banners 162x53 delivered px, inspected at 10x, no letterforms | PASS — 5x on the delivered file, nothing resolves |
| **C3d — destination behind the roofline** | PASS — aerial puts the Caribbean and the beach behind everything built | PASS — palms and turquoise water frame the buildings |
| **C4 — no identifiable private residences** | PASS — resort/condominium blocks only | PASS |
| **C5 — premium / vacation-selling first** | PASS — this is the strongest saleability in the whole sweep | PASS |
| **C7 — every facade checked** | PASS | PASS |
| No named resort implied | PASS — many properties, none named | PASS |
| Overlay space for hero/header | PASS — left half ocean, top quarter sky | PASS — upper-left sky, lower third water |

---

## 10. Handover notes

1. **Strip the metadata.** Ship neither filename nor source title nor source alt text. Use the
   generic captions in §2. This is the C1 compliance rule, not housekeeping.
2. **Fetch with no query string.** The URLs in §1 are the verified files. Note that
   `pexels-photo-27865066` is served as **`.png` only** — the `.jpeg` path returns
   "Source image is unreachable". Same for `pexels-photo-16164623`. Worth knowing for the family.
3. **Do not re-open `photo-1633421332483`.** It is the prettiest Aruba frame in free stock and it
   will tempt the next agent. It carries two legible RIU marks and reframing amplifies the
   surviving one. The measurements are in §5a.
4. No repo file other than this report was modified.

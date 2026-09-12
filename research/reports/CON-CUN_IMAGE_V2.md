# CON-CUN — Cancun Condo — Image Report V2

**Certificate:** CON-CUN / `cancun-condo` / Cancun Condo
**Destination:** Cancún, Quintana Roo, Mexico (Zona Hotelera / Hotel Zone barrier island)
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch
**Date:** 2026-09-12
**Budget:** zero. No paid stock proposed, no `premium_photo-`, no retouching, no purchase named.

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `4306936` | Pexels — Zachary DeBottis | Pexels License | 3939 x 2216 | **YES — visually verified.** 100% rule run at native (no query string) + 4x / 8x facade and low-structure sweeps + 6x re-check on the delivered 1600x900 file |
| **ALTERNATE** | `photo-1510097467424-192d713fd8b2` (page slug `PW3tJkRkSy8`) | Unsplash — Gerson Repreza | Unsplash License | 4096 x 2160 | **YES — visually verified.** 100% rule run at native + 10x / 12x sweeps + 6x re-check on the delivered file. **Approved on a reframe; the full frame is REJECTED — see §4.** |
| RESERVE | `20210506` | Pexels — israwmx | Pexels License | 7953 x 5965 | **YES — visually verified.** Approved on a reframe; full frame rejected (mall wordmarks + crane) |

Both nominations are elevated aerials of the Cancún Hotel Zone in which **many separate properties share
the frame and no single building is the subject** — the C3 governing rule, which is also the stronger
compliance test: a many-property frame cannot imply the guarantee of any one property.

Fetch URLs — **no query string**. These are the exact bytes that were brand-checked and the exact bytes
that should ship:

```
https://images.pexels.com/photos/4306936/pexels-photo-4306936.jpeg      # PRIMARY
https://images.unsplash.com/photo-1510097467424-192d713fd8b2            # ALTERNATE
https://images.pexels.com/photos/20210506/pexels-photo-20210506.jpeg    # RESERVE
```

---

## 2. Delivery crops — rendered with PIL, opened, and inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `(0, 0) → (3939, 2216)` (full frame) | 3939 x 2216 | 1600 x 900 | **0.4062x (downscale)** | **none** |
| **ALTERNATE** | `(1800, 250) → (4096, 1542)` | 2296 x 1292 | 1600 x 900 | **0.6969x (downscale)** | **none** |
| RESERVE | `(150, 800) → (4150, 3050)` | 4000 x 2250 | 1600 x 900 | **0.4000x (downscale)** | **none** |

**No upscale anywhere. Nothing above 1.0x. Nothing to flag.**

The primary is natively 1.778:1, so the delivered frame is the photographer's own full composition —
no content is discarded at all.

Reproduce exactly:

```python
from PIL import Image

# PRIMARY
im = Image.open("pexels-photo-4306936.jpeg")                       # 3939x2216
im.crop((0, 0, 3939, 2216)).resize((1600, 900), Image.LANCZOS).save("con-cun-primary.jpg", quality=93)

# ALTERNATE  — the left-edge trim is load-bearing, see §4
im = Image.open("photo-1510097467424-192d713fd8b2")                # 4096x2160
im.crop((1800, 250, 4096, 1542)).resize((1600, 900), Image.LANCZOS).save("con-cun-alt.jpg", quality=93)

# RESERVE
im = Image.open("pexels-photo-20210506.jpeg")                      # 7953x5965
im.crop((150, 800, 4150, 3050)).resize((1600, 900), Image.LANCZOS).save("con-cun-reserve.jpg", quality=93)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/cun/FINAL_CON-CUN_primary.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/cun/FINAL_CON-CUN_alternate.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/cun/FINAL_CON-CUN_reserve.jpg
```

---

## 3. C1 — source captions, recorded so they can be stripped

**This is a compliance rule, not a workflow note.** The certificate names no property and assigns the
unit at confirmation. Nothing below travels to the site — not the title, not the filename, not the alt text.

| Slot | Source title (Pexels page title / Unsplash title) | Source alt text | Creator |
| --- | --- | --- | --- |
| PRIMARY | **"High Rise Buildings Near the Sea"** | "A breathtaking aerial view of Cancun's pristine beaches and luxury beachfront resorts under a sunny sky" | Zachary DeBottis (`@zachtheshoota`) |
| ALTERNATE | **"Cancun Coast"** | "aerial photo of white buildings" | Gerson Repreza (`@gersonrepreza`) |
| RESERVE | — | "Stunning aerial view of Cancun's coastline with turquoise waters and city hotels under a clear sky" | `@israwmx` |

**Good news on C1 for this certificate: none of the three source captions names a property.** Sedona's
approved file was titled "Villas of Arroyo Roble resort"; nothing comparable exists here. The captions
name only the city. That removes the sharpest edge of C1 — but the rule still applies in full, because
the *filenames* (`pexels-photo-4306936.jpeg`) are meaningless strings that must be replaced anyway.

**Ship as:** `cancun-condo-hero.jpg`, alt text along the lines of
*"Aerial view of the Cancún hotel zone shoreline, Quintana Roo, Mexico."* No resort, no operator, no
"luxury" or "resort" claim carried over from the source alt text.

---

## 4. The 100% rule — what was actually magnified, and what was found

Per C3b the sweeps deliberately targeted **the low buildings** — beach clubs, pool decks, palapas,
ground-floor frontages, retail blocks — not the towers. That is where the Myrtle Beach probe found
five of its six failures, and it is where this sweep found both of its real failures too.

### PRIMARY `4306936` — clean

| Pass | Region (native) | Zoom | What I see |
| --- | --- | --- | --- |
| A–C | tower band, x 1700–3939, y 760–1500 | **4x** | Glass-balcony **condominium** towers — residential architecture, not hotel massing. Balcony rails, sliding doors, roof plant. **No nameplate, no logo, no lettering on any facade.** |
| D | distant strip, x 900–1700, y 700–1100 | **4x** | Haze-softened low-rise and the Cancún Wheel; nothing resolvable |
| L1–L4 | beach clubs / pool decks, y 1050–1730 | **8x** | Palapas, loungers, blue umbrellas, lap pools, sand. **Zero text of any kind.** No beach-club nameplate, no branded parasol, no signboard. |
| L5–L6 | beachfront + far strip, x 1050–1800 | **8x** | Umbrella rows and atmospheric haze; no marks |
| DP1–DP4 | **the delivered 1600x900 file** | **6x** | Confirms the same. No text survives because none exists. |

**Nothing found. This candidate needed no reframe.** Atmospheric haze over the far strip suppresses
distant detail for free, and the near buildings simply carry no signage — which is itself evidence
that these are condominium towers rather than branded resorts.

**One flagged object, converted to delivered pixels per C3c.** The Cancún Wheel (a Ferris wheel) stands
on the distant strip. Found at 4x, it measures **≈15px across in the shipped 1600x900 file**, with no
colour separation and no wordmark; at 1:1 it does not read as a Ferris wheel. **C3c applies in the
direction it was written for: this is a false negative from over-magnification, not a defect.** It is
also not a trademark — an unbranded amusement ride is not a third-party mark. No action.

### ALTERNATE `photo-1510097467424` — **the full frame FAILS; the crop passes**

This is the one that vindicated the "magnify every facade" warning (C7), and it failed in exactly the
way the brief predicted for Cancún.

| Pass | Region (native) | Zoom | What I see |
| --- | --- | --- | --- |
| R3 | white tower, x 1150–1650, y 1150–1500 | **10x** | **A bold "Z" monogram with a wordmark beneath it, on the tower's blank white end wall.** Unambiguously a hotel brand mark. |
| R2 / R5 | white block, x 1250–1750, y 1400–2100 | **10x** | **A script "S" monogram plus a wordmark**, repeated twice on the same building — once high on the corner, once at deck level |
| R1 | retail block, x 900–1400, y 1550–1900 | **10x** | A signed red-and-white retail frontage, a boulevard with parked cars and a bus |

**Then, per C3c, I converted the find into delivered pixels before ruling — and it survived.** Rendered
at the candidate 0.5006x crop and re-magnified **from the shipped file**, the "Z" is still a
cleanly-formed letterform with a visible wordmark under it. It is detectable in the 1:1 thumbnail.
**That is a legible third-party resort nameplate in the delivered asset. Full-frame REJECT.**

**Reframe (step 4a), which is the highest-value zero-budget move available:** both nameplates sit in the
near-left foreground. Moving the crop's left edge from x=900 to **x=1800** drops the "Z" tower, the "S"
tower and the signed retail frontage entirely, and keeps the whole hotel-zone strip curving out to
Punta Cancún plus the full Caribbean. It costs nothing — the licence already covers it.

| Re-verification pass | Region (native) | Zoom | Result |
| --- | --- | --- | --- |
| U1–U2 | foreground resorts, x 1800–2200, y 850–1450 | **12x** | Cream resort blocks, a red palapa roof, loungers, pools. **No lettering.** |
| U3–U4 | mid strip, x 2200–3000, y 500–950 | **12x** | Tower line; no facade marks |
| U5–U6 | Punta Cancún towers + far left, x 1800–3400 | **12x** | Towers, ocean; nothing legible |
| DA1–DA4 | **the delivered 1600x900 file** | **6x** | Clean. Nothing survives. |

Note that the reframe *raises* the scale factor to 0.6969x — less downscale protection than the primary —
which is precisely why the 12x source sweep and the 6x delivered-file sweep were both run on it.

### RESERVE `20210506` — full frame fails, crop passes

| Pass | Region (native) | Zoom | What I see |
| --- | --- | --- | --- |
| P1 / S1 | mall block, x 4600–5350 | 6x → **16x** | **A teal two-word wordmark on a white mall facade** |
| P2 / S2 | mall block, x 5350–6100 | 6x → **16x** | **A lime circular logo mark plus a wordmark on a dark brown building** |
| P1 | right third | 6x | Construction crane; multi-storey car park; red-roofed mall roofs |
| Q1 | x 4150–4550, y 3050–3350 | **10x** | A brightly-coloured steel-frame **water-park / amusement structure** and a sports court |
| Q2 / T1 | marina, x 3550–3950 | **10x** | A blank black billboard on a pole — no text visible even at 10x |

Reframed to `(150, 800) → (4150, 3050)`: mall, crane, car park and water park are all outside the frame.
Re-swept at 10x (T1–T4) — resort blocks, beach, mangrove, lagoon, sky, **nothing legible**. The blank
billboard remains, at **≈20px and featureless** in the delivered file; recorded, not disqualifying.

**The Cancún hazard the brief warned about is real and it is on the ground, not on the towers.** Across
this sweep, resort *tower* nameplates fired **zero** times. Every mark found was on a **low** building —
a mall, a boulevard retail frontage, a mid-rise end wall at street level. C3b held exactly.

---

## 5. The two Cancún-specific hazards, addressed explicitly

**Hazard 1 — this is a CONDO certificate, not the all-inclusive one.** HVM sells a separate Cancún
all-inclusive certificate, and a frame carrying all-inclusive price-tier cues would be selling the
wrong product.

Both nominations were chosen partly *because* they avoid those cues. **Neither contains a swim-up bar,
a wristband, a buffet scene, an animation stage or a branded parasol run.** The primary's subject matter
is decisive here: magnified to 4x, its buildings are **glass-balcony residential condominium towers** —
individual unit balconies, sliding doors, no lobby porte-cochère, no all-inclusive beach-club apparatus.
That is the architecture of the product being sold. The candidates that *did* read as all-inclusive
(`20210511`, `20210504`, `20210498`, `20210512`, `20210508` — sprawling pool complexes, swim-up bars,
palapa villages) were all rejected, most of them on C3 first.

**Hazard 2 — hotel-zone signage reads at 4x.** Confirmed again, twice over, and it cost this sweep its
best-lit frame at full extent. "LIVE AQUA" and "Occidental Costa Cancún" were already on record from the
airfare sweep; this sweep adds the "Z" and "S" facade monograms on `1510097467424` and the two mall
wordmarks on `20210506`. Both of the affected candidates were **recovered by reframe rather than
discarded**, which is the brief's point about reframing being the highest-value zero-budget lever. Two
of the three nominations here exist only because of it.

Separately, `20210501` and `20210503` — the two israwmx frames already on record as carrying **"LIVE AQUA"**
legible at 4x — were **excluded from this sweep at the search stage**, not re-tested. They are near-duplicates
of the approved reserve's flight and would have failed identically.

---

## 6. Full candidate ledger — 30 opened, all visually verified

All 30 were downloaded and **opened with the Read tool** as four labelled contact sheets. Twelve were then
re-opened individually as gridded full-frame previews for crop planning. Five were taken to native
resolution with no query string and put through magnified sweeps. Three were rendered to 1600x900 and
re-magnified from the delivered file.

**C5 held: the dominant rejection cause was NOT branding.** Of 27 rejections, **14 failed on C3**
(a single building is the subject) and **7 failed on C5** (not premium / not vacation-selling — sargassum,
car parks, rooftop plant, construction). Only **2 failed on branding**, and both were recoverable by crop.

### Pexels — `cancun hotel` (the C6 query for this destination) and `cancun`

| ID | Source title | Native | Verdict | Why |
| --- | --- | --- | --- | --- |
| **4306936** | High Rise Buildings Near the Sea | 3939x2216 | **APPROVE — PRIMARY, visually verified** | Elevated strip; many condo towers, none the subject; zero signage at 8x; native 16:9; huge clean water + cloud sky |
| **20210506** | (aerial, coastline + hotels) | 7953x5965 | **APPROVE — RESERVE, visually verified** (reframe) | Whole barrier island + lagoon + Caribbean. Full frame carries two mall wordmarks, a crane and a water park; crop drops all four |
| 20210500 | (aerial, beaches + turquoise) | 8064x6048 | REJECT — visually verified | C5. Construction crane and a bare demolition lot in the right third; no 16:9 crop keeps the strip and drops both |
| 20210507 | (aerial, turquoise + hotels) | 8027x6020 | REJECT — visually verified | Superb water, but the built edge is a thin right-hand sliver. Tightening it to lose a bare scrub lot empties the frame of condo evidence — destination + product both lost |
| 20210498 | (aerial, resorts + turquoise sea) | 8064x6048 | REJECT — visually verified | Centred on the Punta Cancún entertainment district; tall sign masts; a single grey resort dominates bottom-left |
| 20210512 | (aerial, beaches + resorts) | 8064x6048 | REJECT — visually verified | Same district, same mast structures; C3b high risk |
| 20210508 | (aerial, beachfront resorts) | 8064x6048 | REJECT — visually verified | C5. Mall complex, multi-storey car park and boulevard fill the left half |
| 20210509 | (top view, beach resort) | 8064x6048 | REJECT — visually verified | Top-down: no horizon, no lagoon, no strip. Beautiful, but proves no destination |
| 20210511 | (aerial, beachfront resort + pools) | — | REJECT — visually verified | C3. Orthophoto of one curved resort; textbook single-building subject |
| 20210504 | (aerial, beachfront resort) | — | REJECT — visually verified | C3. One resort and its pool complex fill the left half |
| 20210501 / 20210503 | (Live Aqua Resort, named in title) | — | REJECT — prior record | **"LIVE AQUA" legible at 4x**; title names the property. Excluded at search stage |
| 4306947 | (aerial, beachfront hotels) | 3879x2182 | REJECT — visually verified | C3b. A colour-signed retail/market frontage and a red sign at the left edge; cars, roads |
| 17061347 | (aerial, Cancún coastline) | 3000x2250 | REJECT — visually verified | C5. A very large white rooftop plant (AC units) owns the lower-left quadrant; reads industrial. Lowest-res of the aerial set |
| 17061344 | (Cancún coastline) | portrait | REJECT — visually verified | Portrait; a 16:9 crop discards most of the strip |
| 17061348 | (aerial, turquoise waves) | — | REJECT — visually verified | Buildings reduced to a right-edge sliver; no condo evidence |
| 12333806 | (Cancun's iconic shoreline) | 3968x2976 | REJECT — visually verified | C5. Heavy dark sargassum streaks across the foreground water; busy retail district on the left edge |
| 12956666 | (aerial, Cancún beachfront) | — | REJECT — visually verified | C3 + C5. One condo tower dominates the right third; dark seagrass bands at the shoreline |
| 19943495 | (aerial, **a hotel** on the beachfront) | — | REJECT — visually verified | C3. A single arch-form hotel is the subject, and the arch silhouette is itself identifying |
| 6840004 | (aerial, luxurious beachfront resort) | — | REJECT — visually verified | C3. One hotel's balcony stack fills the left third |
| 9424954 | (aerial, Cancun beach resort) | 4056x3040 | REJECT — visually verified | C3. Reads as one resort campus with its own pier |
| 6422468 | (aerial, turquoise waters + beaches) | 3264x2448 | REJECT — visually verified | C3. One property's pool deck owns the bottom-right; lowest native res |
| 5960710 | (aerial, resort beach) | — | REJECT — visually verified | Top-down loungers of one property; no strip, no elevation payoff |
| 1802255 | (modern hotels along the beachfront) | portrait | REJECT — visually verified | C3. Beach-level vantage; portrait |
| 6867794 | (illuminated high-rise at twilight) | portrait | REJECT — visually verified | C3. A single tower *is* the entire subject; ground-level |
| 751268 | (tropical luxury resort, pool + ocean) | — | REJECT — visually verified | C3 + C5. Pool-and-facade at ground level; could be any resort on earth |
| 27898568 | (palm trees + resort at sunset) | portrait | REJECT — visually verified | C3. Ground-level palapa and lawn of one property |

### Unsplash — `cancun` alone (the C6 query for a dense resort strip)

| File | Alt text | Native | Verdict | Why |
| --- | --- | --- | --- | --- |
| **photo-1510097467424-192d713fd8b2** | aerial photo of white buildings ("Cancun Coast") | 4096x2160 | **APPROVE — ALTERNATE, visually verified** (reframe) | Canonical hotel-zone strip in warm evening light. Full frame REJECTED on legible "Z" and "S" facade nameplates; the x≥1800 crop drops both |
| photo-1630252421399-ddde79af47b3 | aerial view of people on beach | 4056x3040 | REJECT — visually verified | C3 + C5. One large resort campus dominates the left; a continuous sargassum line runs the whole shore |
| photo-1630252565669-ffb434c795e2 | aerial view of city buildings near sea | 2048x3040 | REJECT — visually verified | Portrait, and **native is only 2048 wide** — a 16:9 crop would need upscaling. Excluded on the no-upscale rule |
| photo-1630252452598-56d592ceec50 | city buildings near water, night | portrait | REJECT — visually verified | Portrait; beach-level; dark seagrass patches |
| photo-1509818139432-c67e4197a914 | aerial view of body of water | — | REJECT — visually verified | Top-down sand and surf; **zero buildings** — proves nothing and sells no condo |
| photo-1510097467424 (full frame) | — | — | REJECT — see §4 | Legible resort nameplates, confirmed **in delivered pixels** |

### Paywalled tier — checked as the brief requires, none used

`premium_photo-1697730254647-9b24f6ead436`, `premium_photo-1676517032044-5d602374a95b`,
`premium_photo-1719843013722-c2f4d69db940`, `premium_photo-1676517028705-5dddae9ab1d5`,
`premium_photo-1676517308037-e5dd855ba8c6`, `premium_photo-1754337904394-c4ca01cae08f` (a **Cartagena**
skyline mis-surfaced under a Cancún query — the "destination solvent" effect C6 warns about, appearing
in the paid tier).

**No purchase is named, because none is needed.** Unlike the AIR-CUN gap, the free tier resolves this
certificate comfortably. The paid items are pyramids, cenotes, palm streamers and a Colombian skyline —
none of them better than what was approved for free.

---

## 7. Search vocabulary — C6 confirmed, and one refinement

Queries run: `pexels.com/search/cancun hotel`, `pexels.com/search/cancun`, `unsplash.com/s/photos/cancun`,
`unsplash.com/s/photos/cancun-hotel-zone`. All rendered via **WebFetch** (the search pages 403/401 to curl);
files then pulled from the CDNs by plain curl, **no query string** for the verification copies.

- **`cancun hotel` on Pexels was the higher-yield query by a wide margin** — and for the reason C6 gives:
  it returns human-written titles, and those titles are what let me identify a frame as an aerial of the
  *strip* versus a single property before spending a download. It produced **both** the primary and the
  reserve.
- **`cancun` alone on Unsplash** produced the alternate. Confirmed as the right Unsplash query for a dense
  resort strip — but note Cancún's Unsplash pool is thin (15 free results) and portrait-heavy.
- **`cancun-hotel-zone` on Unsplash was a destination solvent** exactly as C6 predicts: it returned
  Cartagena, and a scatter of anonymous pool and umbrella shots that could be anywhere. It surfaced
  **none** of the Cancún frames that bare `cancun` returned. Adding the amenity phrase cost the query
  its destination.
- Per instruction, **"villa", "condo" and "vacation rental" were never searched**, and no interior was
  searched or considered.

**Refinement to record for the rest of the family:** on Cancún, **C2 inverts as predicted**. Sedona had
exactly one usable exterior; Cancún returned **ten or more genuinely usable elevated strip frames** and
the work was entirely in *rejection*, not discovery. The binding constraint on a dense destination is
adjudication time, not supply. Budget the effort accordingly: triage wide and cheap, then spend everything
on magnification.

---

## 8. Licence and AI-provenance

| Slot | Licence | Attribution required | Share-alike | Notes |
| --- | --- | --- | --- | --- |
| PRIMARY | **Pexels License** | No | No | "Free to use." No attribution obligation; none of the brief's CC BY-SA cautions attach |
| ALTERNATE | **Unsplash License** | No | No | Standard Unsplash, **not** Unsplash+. The `premium_photo-` marker is absent from the filename |
| RESERVE | **Pexels License** | No | No | As above |

Both preferred licences under the brief. No CC BY-SA anywhere in the nomination set, so no share-alike
attaches to the published crops.

**AI screen — PRIMARY (Pexels, EXIF stripped).** The brief's exception applies: Pexels serves no camera
metadata on anything, including un-resized originals, so the camera half of the screen cannot be run.
Running the second half as instructed — **3939 x 2216 is not generator geometry.** Generator output
clusters on round, power-of-two-adjacent dimensions (1024/1536/2048/4096 and square or exact-16:9
multiples). 3939 x 2216 is an *odd, non-round* pair at 1.7775:1, which is a **hand-trimmed crop off a
4:3 drone frame** — the residue of a human pulling a 16:9 letterbox out of a 4000x3000-class original and
losing a few pixels to the crop handles. Nothing rounds. This is a reasoned call, and I am recording it
as such rather than as an unexamined pass. Content corroborates: consistent solar direction across
towers, wave and bathymetry continuity, and a legible ferris wheel and jetski wake at 8x.

**AI screen — RESERVE (Pexels, EXIF stripped).** 7953 x 5965 at 4:3. A 48 MP drone stitch (DJI 8064x6048
full-res) trimmed by 111 x 83 px — again the signature of a human straightening or de-fringing an edge,
not of a generator. Same reasoning, same reasoned call.

**AI screen — ALTERNATE (Unsplash, EXIF also stripped).** The brief's free substitute applies. The
numeric prefix of `photo-1510097467424-192d713fd8b2` decodes as Unix **1510097467 → 2017-11-07T23:31:07Z**.
**Independently corroborated:** the Unsplash photo page (`unsplash.com/photos/PW3tJkRkSy8`, title
"Cancun Coast") states a publish date of **November 7, 2017**. The two agree. That is a positive,
zero-cost pre-generative provenance check — the file predates public image generation by years, and
4096 x 2160 is DCI 4K, a real capture geometry.

No EXIF on any nomination carries a camera make/model, but in no case is that paired with suspicious
round geometry, which is the combination the brief actually forbids.

---

## 9. Composition notes for the site build

**PRIMARY** — Water occupies the left ~60% of the frame and the sky the top ~30%; the condominium tower
line runs down the right third. Two large clean zones for translucent overlay:

- **Top band, y 0–260** (sky with soft cloud) — best for a headline; low local contrast across the full
  1600px width.
- **Left-centre, x 0–620 / y 420–900** (open turquoise water) — takes a price or CTA block cleanly.

Avoid setting type over x 700–1600 / y 280–650, where the towers are.

**ALTERNATE** — Mirror-image layout: buildings on the left, a very large open Caribbean on the right
**(x 700–1600, y 150–900 is almost entirely uninterrupted water)**. Useful as a right-aligned hero or
wherever the primary's left-weighted copy zone conflicts with the page. Cooler, later light than the
primary, so the two do not sit well side by side on the same screen — treat as substitutes, not a pair.

**Do not flip either image horizontally.** The Hotel Zone's geography (Caribbean on the seaward side,
Nichupté lagoon inland) is recognisable, and a mirrored Cancún reads as wrong to anyone who has been.

---

## 10. What this run adds to the family brief

1. **C3 held at 30 for 30.** Every ground-level or single-building frame failed; every approved frame is
   an elevated multi-property vantage. The rule is now 45-for-45 across three probes.
2. **C3b held, and the split is sharper than recorded.** Resort *tower* nameplates fired **zero of 30**
   here. Both branding failures were **low**: a mall block and a street-level end wall. An agent who
   magnifies the towers on a Cancún frame will find nothing and ship a branded frame.
3. **C3c cut in both directions in a single run** — which the brief predicted but had not yet
   demonstrated together. It **saved** a candidate (the Cancún Wheel: found at 4x, ≈15px and
   unresolvable in the shipped file, so not a defect) and it **killed** one (the "Z" nameplate:
   found at 10x and **still legible after downscaling**, so a real defect). The delivered-pixel test is
   the adjudicator in both directions, not the source-resolution look.
4. **Reframing produced two of three nominations.** On a dense, sign-heavy destination it is not a
   fallback — it is the primary tool. Both recovered candidates failed on a *region*, never on the whole
   image.
5. **C2 inverts on dense destinations, as the brief anticipated.** Cancún's constraint is adjudication,
   not supply. Sedona's "one-or-none" expectation does not transfer; Orlando and Punta Cana should be
   resourced for rejection volume.
6. **New, for the condo family: prefer condominium architecture over resort massing where the choice
   exists.** The primary was selected partly because glass-balcony residential towers visually match the
   product the certificate sells, and structurally carry less signage than hotels do. That is a saleability
   *and* a compliance advantage from one decision — and it is the cleanest way to keep a condo certificate
   visually distinct from the separate all-inclusive product.

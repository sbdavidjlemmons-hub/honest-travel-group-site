# CON-WID — Wisconsin Dells Condo — Image Report V2

**Certificate:** CON-WID / `wisconsin-dells-condo` / Wisconsin Dells Condo
**Destination:** Wisconsin Dells, Wisconsin
**Family:** Condo (20 certificates)
**Brief followed:** `research/IMAGE_BRIEF_V2.md`, read in full before any fetch. Condo rules C1–C7 applied.
**Date:** 2026-09-12
**Budget:** zero. No Unsplash+, no `premium_photo-`, no Getty, no retouching.
**Candidates downloaded and opened with the Read tool:** **18** (target was 12).

---

## 1. Verdict

| Slot | Asset | Source | Licence | Native | Visually verified |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | `photo-1627319704960-7bb15934f478` (page `unsplash.com/photos/s76CnJSA7ts`) | Unsplash — Ethan Walsweer | Unsplash License | 4892 x 3914 | **YES — visually verified.** Native fetched with no query string; 100% rule run at 1:1 and 3x on every region of the frame. |
| **ALTERNATE** | `photo-1561467059-f815ae1ef5eb` (page `unsplash.com/photos/ZjQqurI1cP8`) | Unsplash — Dave Hoefler | Unsplash License | 5760 x 3600 | **YES — visually verified.** Native fetched with no query string; 100% rule run at 1:1, 2x and 3x. |

Both are the **Dells of the Wisconsin River** — the sandstone gorge that gives the town its
name. Unsplash states the location on both photo pages: "Wisconsin Dells, WI, USA" (primary)
and "Dells of the Wisconsin River, Wisconsin Dells, USA" (alternate).

**Both frames contain zero built structures of any kind** — no building, no sign, no vehicle,
no boat, no dock, no waterslide, no entrance arch. There is therefore nothing to magnify that
could carry a mark, and nothing that could imply a guaranteed property.

Fetch URLs — **no query string**; these are the exact files that were brand-checked and the
exact files that should ship:

```
https://images.unsplash.com/photo-1627319704960-7bb15934f478      # PRIMARY
https://images.unsplash.com/photo-1561467059-f815ae1ef5eb         # ALTERNATE
```

### Read this before shipping — the honest caveat

**Neither nomination shows lodging.** Wisconsin Dells failed the standard condo formula for a
structural reason, not for lack of effort: see §4. The single frame in the entire free supply
that shows riverside condominium buildings carries a **legible "LAKE DELTON WATERFRONT VILLAS
/ RESERVE TODAY" sign with a phone number** — the worst possible mark on a certificate that
guarantees no named property. It was reframed to drop the sign, and still rejected; the full
reasoning and the rendered reframe are in §5.

The trade taken is the same one the brief's airfare rule states plainly: **destination +
anonymous forces the subject away from the asset**. These two frames are unmistakably Wisconsin
Dells and completely anonymous. A generic condo balcony would be neither.

---

## 2. Delivery crops — rendered with PIL, opened, inspected

| Slot | Crop from native | Crop size | Output | Scale factor | Upscale |
| --- | --- | --- | --- | --- | --- |
| PRIMARY | `(0, 734) → (4892, 3486)` | 4892 x 2752 | 1600 x 900 | **0.3271x (downscale)** | **none** |
| ALTERNATE | `(0, 0) → (5760, 3240)` | 5760 x 3240 | 1600 x 900 | **0.2778x (downscale)** | **none** |

**Nothing is upscaled. Both deliverables are >3x downscales of the source.**

Reproduce exactly:

```python
from PIL import Image

im = Image.open("photo-1627319704960-7bb15934f478.jpg")          # PRIMARY  (4892x3914)
im.crop((0, 734, 4892, 3486)).resize((1600, 900), Image.LANCZOS).save("con-wid-primary.jpg", quality=93)

im = Image.open("photo-1561467059-f815ae1ef5eb.jpg")             # ALTERNATE (5760x3600)
im.crop((0, 0, 5760, 3240)).resize((1600, 900), Image.LANCZOS).save("con-wid-alt.jpg", quality=93)
```

Renders live in this session's scratch directory (ephemeral — copy before it is reaped):

```
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conwid/DELIVER_primary_walsweer.jpg
/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/conwid/DELIVER_alt_hoefler.jpg
```

Nothing was written into the repo except this report.

### What the PRIMARY frame shows
Dawn on the Wisconsin River. Two sandstone bluffs — banded, undercut, pine-capped — frame the
channel from left and right; a low band of mist sits on mirror-calm water between them. The
palette is desaturated duck-egg and deep pine green. Genuinely premium editorial travel
photography, and the single most destination-specific image available for this town at zero
cost: the layered Cambrian sandstone above still water IS the Dells.
**Overlay space:** the top ~38% is unbroken pale sky and the bottom ~22% is unbroken water —
two very large, very low-detail regions. Excellent for a translucent hero or header.

### What the ALTERNATE frame shows
Golden hour on a Wisconsin River sandbar. A wide curve of warm ochre sand sweeps in from the
lower right; still water mirrors a full cumulus sky and a pine-and-hardwood shoreline; a small
sandstone outcrop sits mid-frame right with a fallen pine at its foot. Warmer, brighter and
more obviously "vacation" than the primary — it is the frame to pick if the hero needs to look
like summer rather than like landscape.
**Overlay space:** upper-left quadrant is sky and cloud reflection; the sand at lower right is
a large flat warm field. Good, though busier than the primary.

---

## 3. The 100% rule — what was actually magnified

Every check below was cropped from the **native-resolution** file (fetched with no query
string) and opened with the Read tool. Triage was never used as verification.

**PRIMARY (`1627319704960`, 4892 x 3914)**

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Right bluff, cliff top to waterline | (3700, 1550, 1192, 1350) | **3x** | Clean. Banded sandstone, pine, moss. No structure, no railing, no sign, no lettering. |
| Left bluff, cliff top to waterline | (0, 1500, 1500, 1400) | **3x** | Clean. Sandstone and conifer. No structure of any kind. |
| Distant channel, far treeline, mist band | (1400, 2500, 1800, 550) | **3x** | Clean. Two birds on the water (≈10 native px) and a hazy sandstone buttress. **No boat, no dock, no building, no slide tower.** |
| Whole frame | — | 1:1 | Clean. Not one man-made object in 19.1 megapixels. |

**Result: PASS at every magnification. No mark, no structure, nothing to strip.**

**ALTERNATE (`1561467059`, 5760 x 3600)**

| Region checked | Native rect | Zoom | Result |
| --- | --- | --- | --- |
| Far shoreline / treeline (left half) | (0, 1100, 2400, 600) | **3x** | Clean. Dense pine and hardwood down to the water. **No roofline, no dock, no cabin.** |
| Sandstone outcrop + shoreline (right of centre) | (2400, 1000, 1800, 700) | **3x** | Clean. Rock, pines, one fallen trunk. No structure. |
| Beach / foreground sand | (3400, 2100, 2360, 1100) | **2x** | Clean. Bare sand with footprints and a little organic debris. **No litter, no bin, no beach sign, no branded furniture.** |
| Whole frame | — | 1:1 | Clean. No man-made object in 20.7 megapixels. |

**Result: PASS at every magnification.**

**C3c (convert a high-zoom find into delivered pixels before rejecting):** not triggered on
either nomination — no candidate mark was found at any magnification, so there was nothing to
measure down into the shipped file.

---

## 4. The Wisconsin Dells waterpark constraint — how it actually resolved

The hard constraint was to avoid the named waterpark resorts (Kalahari, Wilderness, Mt Olympus,
Chula Vista, Great Wolf), whose slide towers and entrance arches are as recognisable as
wordmarks. **It resolved structurally, not by careful filtering.**

Free-stock supply for "wisconsin dells" is **almost entirely the river gorge, not the town.**
Across 18 opened candidates and roughly 40 enumerated results on two platforms, **not one
waterpark structure appeared** — no slide tower, no wave pool, no entrance arch, no hotel
porte-cochère. The photographers who upload Wisconsin Dells to Unsplash and Pexels are shooting
from boats and sandbars on the river, not from the Parkway strip.

This inverts the Myrtle Beach finding in a useful way. There, street-level retail signage was
the dominant failure (5 of 15). Here there is no strip in the supply at all. The compliance risk
migrated entirely to **one** frame — the riverside villas — and it was a resort nameplate after
all, exactly the failure C3b says is rare.

Both nominations were nonetheless magnified specifically for slide towers and arches along
every treeline and skyline in the frame, at 3x, before approval. Nothing was found.

---

## 5. The reframe that was tested and still rejected — `photo-1651385786468-6b9415c48e14`

This is the only frame in the free supply showing what the certificate actually sells:
a row of timber-clad, balconied, multi-unit lodge buildings directly on the water at Lake Delton.

**Source title (C1):** "A group of houses next to a body of water" — Ray Graciano, Unsplash,
page `unsplash.com/photos/r04WNDh9H-g`, native 5184 x 3456, Unsplash License.

| Step | What happened |
| --- | --- |
| Full frame, 1:1 | Buildings look promising. A small white rectangle sits on the shoreline at native ≈(3850–4400, 1870–2070) — roughly 60 px wide in a 1200 px preview, an easy false negative. |
| Suspect rectangle at **4x** from native | **"LAKE DELTON WATERFRONT VILLAS"** in full, above **"RESERVE TODAY — 1-8••-•••-••••"**, under a circular sunburst-over-water logo mark, on a stone-pier monument sign. Completely legible. |
| **Reframe attempted** (brief step 4a) | Left-weighted crop `(0, 900) → (3800, 3037)` → 1600x900. **The sign is gone**, and the facades re-magnified at 2x across the full remaining width show **no second wordmark** — no name band, no logo, no unit numbering. The reframe technically defeats the mark. |
| **Rejected anyway** | Three reasons, in order of weight. **(a) C3 — one building is the subject.** The reframe is a single contiguous development filling the frame; a many-property frame cannot imply a guarantee, but this one can, and the property is real, named and bookable. **(b) C1 in its strongest form.** The photograph is identifiably Lake Delton Waterfront Villas from its distinctive centre gable alone. Stripping the caption does not un-identify the pixels when the frame is one property shot head-on. **(c) C5 — not premium.** Flat white overcast sky, dull grey chop, and at the base of the main building a chain-link construction fence and utility clutter. It does not sell a vacation. |

Render kept for inspection at
`…/scratchpad/conwid/REFRAME_villas.jpg`, with the 4x sign crop at
`…/scratchpad/conwid/zoom_houses_sign_4x.jpg`.

This is the cleanest demonstration of C7 in the probe record so far: the mark was **invisible in
a 1200 px preview and unambiguous at 4x from native**, and it was a lodging nameplate soliciting
reservations — the exact thing the certificate must not imply.

---

## 6. Full candidate log — 18 downloaded, 18 opened

Sources searched, per the brief's vocabulary rules: **`wisconsin dells` on Pexels**,
**`wisconsin dells` alone on Unsplash**, and **`wisconsin dells hotel` on Pexels** (C6's
small-inland-destination query). The state name was never appended. "villa", "condo",
"vacation rental" and interiors were never searched.

| # | Asset | Source / creator | Title as published (C1 — strip) | Opened | Verdict |
| --- | --- | --- | --- | --- | --- |
| 1 | `photo-1627319704960-7bb15934f478` | Unsplash / Ethan Walsweer | "Green trees beside river during daytime" | YES | **APPROVE — PRIMARY.** Misted dawn gorge. Zero structures at 3x. |
| 2 | `photo-1561467059-f815ae1ef5eb` | Unsplash / Dave Hoefler | "Trees near lake" | YES | **APPROVE — ALTERNATE.** Golden-hour sandbar. Zero structures at 3x. |
| 3 | `photo-1651385786468-6b9415c48e14` | Unsplash / Ray Graciano | "A group of houses next to a body of water" | YES | **REJECT.** "LAKE DELTON WATERFRONT VILLAS / RESERVE TODAY" legible at 4x. Reframe succeeded on the mark, rejected on C3 + C1 + C5. See §5. |
| 4 | `photo-1651385786844-904d30834e53` | Unsplash / Ray Graciano | "A cliff with trees on it" | YES | **REJECT — near miss.** Handsome sunlit sandstone bluff under deep blue sky, unbranded. Loses to the nominations only on composition: the bluff is hard against the right edge and the left half is flat dark water, so a 16:9 crop yields either a wall of rock or a wall of water. Held as a third-place fallback. |
| 5 | `photo-1651385787138-6efdec4b8164` | Unsplash / Ray Graciano | "A large rock cliff with trees" | YES | **REJECT.** Single rock face filling the frame, flat overcast light, only a sliver of water. No sky for overlay. C5 — a geology record, not vacation imagery. |
| 6 | `photo-1651385787071-e242a36ff6d4` | Unsplash / Ray Graciano | "A large rock formation in the middle of a river" | YES | **REJECT.** Close-up of an undercut ledge, blown-out sky edge, algae band at the waterline. No overlay space. C5. |
| 7 | `photo-1651385787080-5ba50f75d453` | Unsplash / Ray Graciano | "A lake surrounded by trees" | YES | **REJECT.** Elevated vantage over the cliff-lined river — right idea, poor execution: foreground branches cut the frame into fragments. Magnified the lower right at **3x**: a tiered-seat excursion boat with passengers at a dock. No wordmark resolved, but an identifiable commercial tour vessel plus C5 clutter. |
| 8 | `photo-1651385784597-d2f46065a37e` | Unsplash / Ray Graciano | "A boat on the water" | YES | **REJECT.** Flat grey overcast, featureless wide river, pontoon boat at right. C5 — nothing here sells a vacation. |
| 9 | `photo-1651385784144-feb304cdf272` | Unsplash / Ray Graciano | "A body of water with trees around it" | YES | **REJECT.** Same overcast sequence. Cliffs reduced to distant smudges. C5. |
| 10 | `photo-1651385785256-4a002cd543e4` | Unsplash / Ray Graciano | "A body of water with trees around it" | YES | **REJECT.** As above; grey sky occupies 45% with no tonal interest. C5. |
| 11 | `photo-1651385784034-81806b376c52` | Unsplash / Ray Graciano | "A body of water with trees in the back" | YES | **REJECT.** Undifferentiated treeline over brown water. C5. |
| 12 | `photo-1651385786787-837b40d15bac` | Unsplash / Ray Graciano | "A river with trees and a house in the background" | YES | **REJECT.** A concrete highway bridge over a muddy creek, with a crumbling abutment. The single least premium frame in the set. C5. |
| 13 | `photo-1651385787726-8545976cfd0a` | Unsplash / Ray Graciano | "A rocky area with plants and trees" | YES | **REJECT.** Fern-choked rock shelf in flat forest light. No sky, no water, no place. C5. |
| 14 | `photo-1651385787069-2c6a49d711e4` | Unsplash / Ray Graciano | "A forest with fallen trees" | YES | **REJECT.** Dead branches and needle litter on a shaded slope. C5. |
| 15 | `pexels-728899` | Pexels / Tony Rueb | "A meandering river bordered by lush greenery and rocky cliffs" | YES | **REJECT.** Attractive blue-sky river gorge with rapids, unbranded — but the rock is grey lichened outcrop, not the Dells' tan banded sandstone, and Pexels states no location. **Destination unverified**, and the 4032 x 3024 handset geometry is a visible step below the nominations. Not shippable as "Wisconsin Dells". |
| 16 | `pexels-9693741` | Pexels / Tom Fisk | "Picturesque aerial view of lush forests and river" | YES | **REJECT — wrong destination.** This is La Crosse on the Mississippi: the city skyline, the Cass Street bridge and a boathouse row are all in frame. ~200 km from the Dells. |
| 17 | `pexels-9745191` | Pexels / Nicole Seidl | "Picturesque waterfall under a rustic footbridge" | YES | **REJECT — wrong destination.** Covered bridge over a falls in far northern Wisconsin (Amnicon-type basalt, autumn colour). Also 4000 x 6000 portrait — no usable 16:9. |
| 18 | `pexels-16352254` | Pexels / Jessi Ewer | "Enjoying a serene forest view from a cliff" | YES | **REJECT.** A hiking boot in the lower third is the subject; flat overcast; portrait orientation. C5. |

**Excluded before download — paywalled (zero-budget rule), named and not proposed for purchase:**
`premium_photo-1666231920376-abae7c7552c9` (Jason Leung, aerial), 
`premium_photo-1725597444034-2337c8048f31` and `premium_photo-1697637939627-c5e9ca9b551f` (Hans),
`premium_photo-1729775859993-86fc517913aa` and `premium_photo-1727550814019-7e71f9572319`
(Joshua Earle). All are Unsplash+/Getty. **None is needed** — the free supply produced two
compliant nominations, so there is no purchasable-only gap to report.

---

## 7. Licence, provenance and the AI screen

| | PRIMARY | ALTERNATE |
| --- | --- | --- |
| Licence | Unsplash License — no attribution required, no share-alike | Unsplash License — same |
| Photographer | Ethan Walsweer | Dave Hoefler |
| Stated location | Wisconsin Dells, WI, USA | Dells of the Wisconsin River, Wisconsin Dells, USA |
| Stated publish date | 26 July 2021 | 25 June 2019 |
| **Filename timestamp check** | prefix `1627319704` → **2021-07-26**, matches the stated date | prefix `1561467059` → **2019-06-25**, matches the stated date |
| **Camera EXIF on the photo page** | **Canon EOS R** | **Canon EOS 5D Mark III** |
| Native geometry | 4892 x 3914 — an off-round crop from the EOS R's 6720 x 4480 frame | 5760 x 3600 — the 5D Mark III's native 5760 px width, cropped to 16:10 |
| AI screen | **Positively cleared.** Named camera body, a non-round sensor-consistent geometry, and an upload timestamp years before photoreal generative stock. | **Positively cleared.** Same three tests; the 5760 width is the literal 5D Mark III sensor dimension. |

Both files sit well inside the brief's licence preference (plain Unsplash License — not CC BY-SA,
so no share-alike attaches to the crop).

## 8. C1 compliance — captions and filenames to use

Neither source title names a property, but **neither may be carried through** regardless.
Do not ship `photo-1627319704960-7bb15934f478.jpg`, "Green trees beside river during daytime",
"Trees near lake", or any Unsplash alt text.

Ship as:

```
con-wid-hero.jpg          alt: "Sandstone bluffs along the Wisconsin River at dawn"
con-wid-hero-alt.jpg      alt: "Riverside sandbar and pine bluffs, Wisconsin Dells"
```

Neither caption names, implies, or depicts a specific resort — which is the point, since the
certificate assigns the unit at confirmation.

---

## 9. What this probe adds to the condo family rules

1. **C3 ("shoot the strip, not the resort") has a limiting case: destinations where there is no
   strip in the free supply.** Wisconsin Dells is a dense, heavily built resort town whose
   free-stock corpus contains essentially no built environment at all. When that happens, the
   rule's *compliance* half still governs — and the way to satisfy "no single building is the
   subject" is to have no building in the frame. The destination's signature landscape carries
   the destination-specificity on its own.
2. **C7 confirmed at its strongest.** The one lodging frame in the set hid a fully legible
   property nameplate with a reservations phone number that was invisible below 4x. Any agent
   who approved on a preview would have shipped a competitor's advertisement.
3. **A successful reframe is not automatically an approval.** The villas reframe genuinely
   removed the mark and genuinely survived a 2x facade re-check — and was still the wrong frame,
   on C3 and C5. Step 4a recovers candidates that fail *only* on a region; it cannot rescue one
   that also fails on subject and on saleability.
4. **C5 held again, and by a wide margin.** Of 16 rejections, **12 were "not premium / not
   vacation-selling"** (flat overcast river, forest litter, a highway bridge, a boot), 3 were
   wrong-destination, and exactly **1** was branding. Judge saleability first.

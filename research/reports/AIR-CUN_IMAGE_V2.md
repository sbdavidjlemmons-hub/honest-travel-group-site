# AIR-CUN image acquisition — V2 (pixel-verified)

**Certificate:** AIR-CUN / `cancun-airfare-credit` / Cancun Airfare Credit
**Standard applied:** `research/IMAGE_BRIEF_V2.md`, airfare clause + the governing rule
("shoot the destination, not the aeroplane")
**Date:** 2026-09-09
**Scope:** images only. **No pricing work performed.** No certificate page, no production image,
and no other repository file was touched. This report is the only file written.

Evidence (downloads, contact sheets, magnified crops, delivery renders) is in the session scratch
directory:
`/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/aircun/`

---

## Headline result — read this first

**A destination-led search of the free-licence libraries found no photograph of Cancún that
contains a compliant aircraft. Zero. Not one.**

That is not an assumption. **173 Cancún / Quintana Roo frames were downloaded and looked at**, and
every dark anomaly in the sky of every one of them was cropped out at 4× native magnification and
inspected in 225 + 127 + 91 labelled crop tiles. Every anomaly resolved as cloud, gull, parasail,
swimmer, palapa, boat or sensor noise. Not a single aircraft.

The destination-led search was then run in the other direction — Flickr's CC-licensed
"cancun airplane" pool — and returned **20 for 20 aircraft-as-subject frames with legible
airline titles**, exactly as the brief predicts.

So the fallback clause applies: *"Only fall back to a generic silhouette after a destination-led
search has actually failed."* It has actually failed, and the evidence is itemised below.

**Nominated, both visually verified at up to 8× native magnification and again at delivery
pixel density:**

| | Frame | Source | Licence | Native pixels | Aircraft |
| --- | --- | --- | --- | --- | --- |
| **PRIMARY** | "Airplane Flying Above Palm Trees at Daytime" | Pexels **33975086** | Pexels License | 3024 × 4032 | belly view from directly underneath, 8.4 % of frame width, **wholly anonymous** |
| **ALTERNATE** | "Airplane over Silhouette of Woman on Beach" | Pexels **19716840** | Pexels License | 2981 × 3976 | full backlit silhouette, 11.8 % of frame width, **wholly anonymous** |

Both are the two framings the brief names as proven — #2 (directly underneath) and #1 (full
backlit silhouette). Neither is Cancún. **Say so on the record**; do not let this artwork be
described anywhere as a photograph of Cancún.

---

## PRIMARY — visually verified — APPROVE

**"Airplane Flying Above Palm Trees at Daytime"**

| Field | Value |
| --- | --- |
| Source page | https://www.pexels.com/photo/33975086/ |
| Direct file (original) | https://images.pexels.com/photos/33975086/pexels-photo-33975086.jpeg |
| Creator | ViRaL Bokha — https://www.pexels.com/@virvision/ |
| Licence | **Pexels License** — free for commercial use, **no attribution required, no share-alike, no NoDerivatives**. Crops and overlays unencumbered. (Standard Pexels restriction: the unaltered file may not be resold as stock.) |
| Native dimensions | **3024 × 4032 px** (portrait 3:4), 1,386,466 bytes |
| Stated location | **None stated on the source page.** Alt text says only "tropical palm trees". |
| EXIF | **None** — Pexels strips EXIF from everything it serves (brief, "Watch for paywalled tiers" / licence section). |
| AI screen | See "AI screen" below — **passes** the native-pixel-geometry substitute. |
| **Approval** | **APPROVE — visually verified** |

### What I actually see in this image

Shot looking straight up. The **left third of the frame is a dense curtain of coconut-palm
(pinnate, long drooping leaflets) fronds in near-silhouette**, two crowns overlapping, running
top-to-bottom. The **right two-thirds is open sky** — pale blue at the top grading to a soft white
haze, with thin high cloud. **Upper-centre, clear of the fronds, a twin-engine narrowbody airliner
is passing directly overhead, seen from below and slightly behind**, banking very slightly.

**Aircraft.** Real, exterior, in flight. Not a cabin window. Not a wing-out-the-window shot. Its
bounding box in native pixels is **(1483, 1380) – (1737, 1538)**, i.e. **254 px of 3024 = 8.4 % of
frame width**, sitting at 53 % across and 36 % down.

**Legible airline name?** **No.** I cropped a 320 px native region around it and re-opened it at
**4.1× native scale** (`z5.jpg`, top panel). It resolves as a clean underside: nose, wing roots,
two underslung engines with visible pylons, main-gear fairings, swept fin and tailplane, and
raked/winglet wingtips. **The entire lower surface is a uniform dark grey-black. There is no
fuselage wordmark, no belly text, no registration, no cheatline, no fin logo — the fin is edge-on
and reads as bare shape.** Two pinpoint highlights on the fuselage are window/light reflections,
not lettering. This is the structurally safest angle in aviation photography exactly as the brief
describes: airline titles live on the *upper* fuselage and the fin, and neither is presented here.

**Third-party commercial signage?** **None.** I magnified the lower-left corner at 1.1× native
across a 1200 px region (`z7.jpg`, bottom panel). It contains a bamboo/metal pole, a loop of dark
cable, and the straight metal edge of what is probably a palapa roof or gutter — **no text, no
logo, no resort name, no board of any kind.** All of it falls **outside** the recommended
delivery crop in any case (it lives below y = 3028 native; the crop ends at y = 2401).

**Third-party risk elsewhere.** Nothing. No buildings, no vehicles, no people, no branding
anywhere in frame.

**Overlay space.** **Excellent.** The right-hand ~55 % of the frame is unbroken low-contrast pale
sky with almost no detail, running the full height. A translucent hero plate, a header block or a
price panel sits there with nothing to fight. The aircraft is far enough left of centre that a
right-anchored text block does not collide with it.

**Vibe test.** Passes. It reads as "looking up from under the palms as your flight goes over" —
which is, in one image, the literal proposition of an airfare credit. It is soft and modern rather
than saturated and postcard-y; if the layout wants heat, the alternate below supplies it.

**Caveats to flag, plainly.**
1. **It is not Cancún.** No location is stated. The palms are coconut palms, which is at least
   botanically right for the Mexican Caribbean (unlike the Mediterranean date palms in the
   reserves below), but nothing in the frame identifies the place.
2. **Portrait native format.** A 16:9 hero needs the crop given below. At 3024 px wide the crop
   survives a 2560 px full-bleed hero comfortably; it will not survive a 3840 px one.

**Delivery render produced and re-checked:**
`deliver_primary_33975086_1600x900.jpg` — native crop **(0, 700) – (3024, 2401)** scaled to
1600 × 900. I re-opened the aircraft **at delivery pixel density, magnified 5×**
(`deliver_check.jpg`, second panel): the belly is still uniformly dark, still carries no titles,
no logo, no registration. **Anonymity holds at delivery resolution, which is the only resolution
that matters.**

**Attribution string (optional — Pexels does not require it):**
`Photo by ViRaL Bokha on Pexels.`

---

## ALTERNATE — visually verified — APPROVE

**"Airplane over Silhouette of Woman on Beach"**

| Field | Value |
| --- | --- |
| Source page | https://www.pexels.com/photo/19716840/ |
| Direct file (original) | https://images.pexels.com/photos/19716840/pexels-photo-19716840.jpeg |
| Creator | Artem Makarov — https://www.pexels.com/@artem-makarov-289670876/ |
| Licence | **Pexels License** — free for commercial use, no attribution required, no share-alike. |
| Native dimensions | **2981 × 3976 px** (portrait, non-round — an off-centre crop from a 4000 px frame), 1,669,113 bytes |
| Stated location | **None stated.** |
| EXIF | None (Pexels strips it). |
| AI screen | **Passes** — see below. |
| **Approval** | **APPROVE — visually verified** |

### What I actually see in this image

A vertical frame, roughly two-thirds sky. Top band: smooth lilac-mauve dusk, almost featureless.
Middle: horizontal streaks of cream and pale grey cloud, a faint old contrail running diagonally.
Lower third: a hard band of fire — deep orange over scarlet over a thin yellow line at the water.
Below that, calm dark sea, then a **rocky/concrete shoreline in full silhouette**. A **woman stands
at the water's edge, arms raised, photographing the sunset**; a second, seated figure sits far left.
A plain **metal handrail** runs a short way along the rocks. A low headland sits on the horizon at
the left. **High in the upper sky, well clear of everything, a jet airliner is climbing away in
complete silhouette.**

**Aircraft.** Real, exterior, in flight. Bounding box **(1304, 447) – (1656, 629)** native, i.e.
**352 px of 2981 = 11.8 % of frame width**, at 50 % across and 13.5 % down.

**Legible airline name?** **No.** Magnified to **3.0× native** (`z5.jpg`, middle panel) and again
at **5× delivery density** (`deliver_check.jpg`, bottom panel). It is a **solid black silhouette**
of an A320-family narrowbody — nose, wing fence at the tip, two underslung engines, fin and
tailplane, nose-gear door detail — **with no colour break anywhere on it. No titles, no tail mark,
no cheatline, no registration.** There is nothing to read: the aircraft carries zero tonal
information beyond its outline. This is framing #1 from the brief in textbook form.

**Third-party commercial signage?** **None.** I magnified the whole foreground shoreline at 1.1×
native across a 1200 px region and the mid-frame at 1.3× (`z7.jpg`, top two panels). The railing
is unpainted and unmarked; there is **no sign, no board, no lettering, no logo, no vehicle**
anywhere in the frame. The seated figure and the standing woman are both unidentifiable
silhouettes.

**Freight / industrial risk.** None. No cranes, poles, wires, bins or built structures beyond the
bare handrail.

**Overlay space.** **Outstanding — the best of anything tested.** The top ~25 % of the frame is a
near-flat lilac gradient with only the small aircraft in it; a translucent header sits there
perfectly. The 30–55 % band of soft cream cloud is also usable.

**Vibe test.** Passes strongly. It is the most emotionally direct frame in the whole sweep — a
traveller photographing a blazing sunset while a jet climbs out overhead.

**Caveats to flag, plainly.**
1. **It is not Cancún, and it does not read Caribbean.** The foreground is dark rock and a metal
   railing, not white sand; there are no palms and no turquoise water. It reads "coast at dusk",
   generically.
2. **Layout constraint.** The aircraft sits at 13 % down and the fiery sunset band at 65–74 % down.
   **No 16:9 crop can hold both.** This frame works as a **portrait or square hero**, or as a tall
   sidebar image — not as a wide banner. My test render `deliver_alt_19716840_1200x1200.jpg`
   (native crop (0, 300) – (2981, 3281)) keeps the jet and the sunset but clips the woman to head
   and shoulders. If the layout needs her whole silhouette, use the native 3:4 frame uncropped.

**Attribution string (optional):** `Photo by Artem Makarov on Pexels.`

---

## Reserves — visually verified, held back with reasons

| | Frame | Source | Native px | Verdict |
| --- | --- | --- | --- | --- |
| Reserve A | "Spectacular Sunset Over Calm Sea with Airplane" — Fatıma Acunman | Pexels **29254570** | 2252 × 4000 | **Brand-clean, verified.** Held back on softness. |
| Reserve B | "Silhouette of Palm Trees" — Clayton Miranda | Pexels **10352623** | 3000 × 4000 | **Brand-clean, verified.** Held back: stated location **Rhodes, Greece**. |
| **Withheld** | "Palm tree silhouette and airplane at sunset" — Rafid K | Pexels **35696781** | 4096 × 3072 | **Fails the AI screen. Do not publish.** |

**Reserve A — Pexels 29254570.** Fiery orange-and-teal sunset over a calm bay, a low wooded
headland on the horizon, warm reflections on the water. A small jet sits in the upper-left sky.
Magnified to **6.2×** (`z6.jpg`, top panel): a **full black silhouette, gear down, on approach** —
no markings of any kind. Aircraft is 147 px of 2252 = **6.5 % of frame width**. Beautiful sky and
huge clean overlay space. Held back only because at 2252 px wide it is the lowest-resolution of
the finalists and the aircraft crop is visibly soft. Native geometry 2252 × 4000 is a deliberate
9:16 crop from a 4000 px frame — non-round on the long axis, so it passes the AI screen.

**Reserve B — Pexels 10352623.** Dusk. Three palm crowns in silhouette against a smooth grey-lilac
sky warming to peach at the bottom. A **T-tailed, rear-engined airliner (MD-80 / 717 family)
passes directly overhead**; magnified to **5.4×** (`z6.jpg`, middle panel) it is a clean silhouette
with only the red and green wingtip navigation lights showing — **no titles, no logo, no
registration.** Compositionally excellent. **Held back because the source page states the location
as Rhodes, Greece**, and the palms are Canary/date palms, not coconut — the wrong tree for the
Caribbean, and a knowledgeable reader will see it.

**Withheld — Pexels 35696781.** This is aesthetically the strongest frame in the entire sweep: a
deep golden-orange gradient, one date-palm crown in silhouette on the right, and a small backlit
jet at 2.4 % of frame width. Magnified to **7.8×** (`z5.jpg`, bottom panel) it is fully anonymous.
**I am nevertheless refusing it**, on the brief's own rule: *"Never approve a file whose EXIF
carries no camera make, model, or exposure data on a suspiciously round pixel dimension."* Its
native size is **4096 × 3072** — 2¹² × (3 × 2¹⁰), a synthetic-looking power-of-two geometry that
matches no common sensor readout — with no camera metadata at all. Combined with the very smooth,
gradient-perfect sky, **AI generation cannot be positively ruled out.** Secondary objection: it is
a date palm in dusty warm haze and reads Gulf/Middle East, not Caribbean. Named here so the
coordinator can make the call knowingly; my recommendation is do not use it.

---

## AI screen — reasoned call, per the brief's Pexels exception

Pexels strips EXIF from every file it serves, including un-resized originals. I confirmed this
directly: of the eighteen Pexels originals I pulled, **only two retained any EXIF at all**, and
only an `Artist` string (`CHEN TE`, `JS SHARIFF`) — no make, model, focal length, aperture, shutter
or ISO on any file. **The camera-metadata half of the AI screen therefore cannot be run on any
Pexels file here.** As the brief directs, I ran the native-pixel-geometry substitute instead.

| Frame | Native px | Geometry reading | Call |
| --- | --- | --- | --- |
| **33975086 (PRIMARY)** | 3024 × 4032 | The **native 12 MP handset frame (4032 × 3024)** rotated to portrait — the exact example the brief names as a real sensor readout. | **Pass** |
| **19716840 (ALTERNATE)** | 2981 × 3976 | **Non-round on both axes.** An arbitrary off-centre crop from a 4000 px-tall frame; a generator does not emit 2981. Fine luminance noise and a sharpening halo around the aircraft are consistent with real capture plus unsharp mask. | **Pass** |
| 29254570 (Reserve A) | 2252 × 4000 | 4000 px long axis cropped to 9:16 (4000 × 9/16 = 2250). Non-round short axis; ordinary phone-crop geometry. | **Pass** |
| 10352623 (Reserve B) | 3000 × 4000 | A genuine 12 MP 4:3 sensor output (many phones and compacts emit exactly 4000 × 3000). Round, but it is a *real* readout size, not merely a round number. | **Pass with note** |
| 35696781 (withheld) | 4096 × 3072 | **2¹² × 3·2¹⁰.** Corresponds to no common sensor readout; characteristic of generator/upscaler output. | **FAIL — withheld** |
| 36959832 / 36959833 | 8000 × 12000 | 96 MP at exactly 8000 × 12000, no camera data. No consumer or professional camera emits this. | **FAIL — rejected outright, not opened further** |

I additionally checked both nominations for generation artefacts at magnification: the primary's
aircraft has correct engine-pylon geometry, correct main-gear fairing placement, a coherent
tailplane/fin relationship and consistent JPEG ringing; the alternate's silhouette has a coherent
wing-fence tip and nose-gear door. Neither shows the melted control surfaces, duplicated engines or
incoherent tail geometry typical of generated aircraft.

---

## The destination-led search, in full — what was opened and what was seen

### Block 1 — Flickr, CC-licensed, the aircraft-first pool (20 opened, 20 rejected)

Harvested via `WebFetch` on `flickr.com/search/?text=cancun airplane&license=2,3,4,5,6,9,10`
(the search page renders for WebFetch and the `live.staticflickr.com` thumbnail URLs carry the
photo IDs; `_n` and `_b` share a secret, so 1024 px versions download by plain curl). All twenty
were downloaded and **opened as a labelled contact sheet** (`fl/sheet1.jpg`).

**20 for 20 failed.** Every single frame is the aeroplane as subject:

| Flickr ID | What I see | Verdict |
| --- | --- | --- |
| 14866295 | 737 on stand, **"Continental"** titles + globe tail | REJECT — legible titles |
| 16933766849 | 757 landing, **"Condor"** titles, heart-motif tail | REJECT |
| 171550101 | MD-80 at stairs, **"AeroMexico"** titles | REJECT |
| 17185525435 | 767 nose fills frame, **"ondor"** + **"Boeing 767-300"** legible | REJECT |
| 22151444079 | A330 taxiing, **"orbest"** titles | REJECT |
| 23565288344 | A320, **"spirit"** titles + logo tail | REJECT |
| 24167437826 | A320, **"interjet"** titles | REJECT |
| 24193413335 | A330, **"American"** + flag tail | REJECT |
| 2821205163 | A330 **"LIVINGSTON"** + Fokker **"click"** — two brands | REJECT |
| 3020824206 | A320 at stand, Air Transat fin device, ground crew | REJECT |
| 3029996309 | A320 at airstairs branded **"SEAT"** | REJECT |
| 3362399061 | Boeing narrowbody boarding, stair unit **"EM 603"** | REJECT |
| 3363215590 | Narrowbody boarding at **"SEAT"** stairs, crowd | REJECT |
| 34143042 | **Wing out of the cabin window** over ocean | FAIL — wing-only |
| 34143064 | **Wing out of the cabin window**, dark blue sky | FAIL — wing-only |
| 442816583 | Yak-42, **"CUBANA"** titles | REJECT |
| 442817536 | 737 tail, Copa fin device | REJECT |
| 4902314309 | A320 **"interjet"** at stairs, **"CUN"** painted on apron | REJECT |
| 5085963186 | 767, **"AIR CANADA"** + maple-leaf tail | REJECT |
| 6518717989 | **Cabin interior**, seats and IFE screens | FAIL — not an exterior |

This is the brief's rule reproduced exactly: shoot the aeroplane at Cancún and you get livery,
every time, without exception.

### Block 2 — Pexels, Cancún / Quintana Roo destination pool (108 opened, 0 aircraft)

Sources: `pexels.com/search/` for *cancun sunset*, *cancun aerial*, *cancun beach sky*,
*cancun airplane*, *cancun hotel zone*, *cancun* (pages 1–3), *cancun sunset* p2,
*riviera maya*, *isla mujeres*, and the Spanish index `pexels.com/es-es/buscar/avion cancun`.
108 unique IDs downloaded at 1920 px.

- **All 108 were opened** as seven labelled contact sheets (`sheet_grp_00.jpg` … `sheet_grp_06.jpg`,
  `crops_d.jpg` set).
- Then every frame was machine-scanned for dark anomalies in the sky, and **the top three anomalies
  per frame were cropped out at ~4× native magnification and opened as labelled tiles** —
  `crops_a.jpg` (114 tiles), `crops_b.jpg` (111 tiles), `crops_d.jpg` (91 tiles).
- **Every one of the 316 tiles resolved as cloud, gull, parasail canopy, swimmer, boat, palapa
  thatch, beach umbrella, hotel window or JPEG noise. No aircraft appeared in any of them.**

**Brand hazards found in the Cancún pool** (worth recording for the condo/all-inclusive families
as well — this is the "dense with branded resort signage" caution proving out):

| Frame | What is legible |
| --- | --- |
| px_20210501, px_20210503 | **"LIVE AQUA"** in large blue type on the hotel façade, dead legible at 4× |
| px_35985279 | **"Occidental Costa Cancún"** in full, legible at 4× |
| px_5588736 | a parasailing operator's sign on the beach |
| px_12716670 | shot **through a cabin window**; the sharklet carries a green/magenta/purple livery scheme — fails on both counts |
| px_17399878 | shot **through a cabin window**, wing over Cancún — fails the exterior rule |

### Block 3 — Flickr, CC-licensed, destination-first "cancun sunset" (25 opened, 0 aircraft)

Twenty-five CC-licensed Cancún sunsets harvested the same way and downloaded at 1024 px, opened as
a contact sheet (`sheet_fl2.jpg`) and then anomaly-cropped into `crops_c.jpg`. Lagoon sunsets,
Punta Cancún, the ferry pier, Playa Delfines, the Nichupté pilings, a control tower against the
sun. **No aircraft in any frame.** One frame (Openverse-indexed "Interjet Plane leaving from
Cancun", CC BY-SA 2.0) is the same Interjet stand shot already rejected in Block 1.

### Block 4 — Unsplash, Cancún (20 opened, 0 aircraft)

`unsplash.com/s/photos/cancun`, `/cancun-airplane`, `/cancun-sunset` rendered via WebFetch;
20 free-licence `photo-*` files downloaded at 1920 px and anomaly-cropped into `crops_c.jpg`.
Aerials of the hotel-zone sandbar, dusk beach scenes, palms, piers. **No aircraft.** The only
aviation results are `photo-1560242374-f222add02c68` and `photo-1732069047260-5a614b4edc12` —
both **wing-out-of-the-window** shots, which fail the airfare clause outright.

**Paywalled tier, checked as the brief requires.** The Unsplash Cancún results do include
Unsplash+ / Getty items (`premium_photo-1676517032044-…`, `premium_photo-1719843013722-…`,
`premium_photo-1676517028705-…`, `premium_photo-1755711001513-…`, `premium_photo-1705418057300-…`).
**None of them contains an aircraft** — they are palms, cenotes, boats and beach umbrellas.
**So there is no purchasable Cancún-plus-aircraft asset to name either.** The gap is real, not a
licensing gap.

### Block 5 — Wikimedia Commons and Openverse (surveyed, nothing usable)

- `Category:Cancún` → `Category:Aerial photographs of Cancún` (52 files) enumerated via WebFetch
  (never rate-limited, as the brief says). The aviation-adjacent files —
  *Coming into land at Cancun (4392156561)*, *Flying^ Curribian Sea(Cancun) at Oct-24-2007*,
  *Arribando a Cancún*, *Cancun from the air July 1985* — are all **taken from inside an
  aircraft**, i.e. cabin/window views, which fail the exterior rule by definition. The rest are
  drone/plane aerials of the sandbar with no aircraft in them.
- Openverse anonymous API (`license=by,cc0,pdm,by-sa`, `page_size=20`, ten pages) returns only
  **240 CC results for "cancun"** in total; title-grepping the whole set for
  plane/avión/jet/vuelo/landing surfaced exactly **one** aviation item — the Interjet stand shot
  already rejected. `page_size=100` returns **401**; keep anonymous paging at 20.

### Block 6 — the fallback tier (23 opened, 5 survivors)

Searches: `pexels.com/search/` *plane over palm trees*, *airplane sunset beach*,
*airplane over beach*, *airplane over turquoise sea*, *mexico beach airplane*. Twenty-three frames
downloaded — twenty at 1920 px for a contact sheet (`sheet_palms.jpg`) and then the shortlist at
**full original resolution** for magnified adjudication.

| Frame | What I see at magnification | Verdict |
| --- | --- | --- |
| **33975086** | belly view through coconut palms, uniform dark underside at 4.1× | **APPROVE — PRIMARY** |
| **19716840** | full black silhouette over a sunset coast at 3.0× | **APPROVE — ALTERNATE** |
| 29254570 | full silhouette, gear down, at 6.2× | APPROVE — Reserve A |
| 10352623 | T-tail belly silhouette at 5.4×; **Rhodes, Greece** | APPROVE — Reserve B |
| 35696781 | anonymous at 7.8× **but 4096 × 3072 with no EXIF** | **WITHHELD — AI screen** |
| 32397088 | **"Lufthansa"** titles + crane tail on a 747-8, fully legible at 3.1× | **REJECT** |
| 18886562 | **Aeroflot** — winged tail device and blue cheatline legible at 3.1× | **REJECT** |
| 17196837 | widebody underside through fronds; a patterned dotted device on the belly and a marked fin — identifiable livery risk, and the airframe is half-hidden | **REJECT** |
| 13822403 | widebody belly over palms with a **registration** legible on the rear fuselage | **REJECT** |
| 17180863 | jet over palms with a strong yellow/orange fin livery | **REJECT** |
| 5769706 | **"Delta"** titles + livery, 757 on short final at Maho Beach | **REJECT** |
| 11331490 | magenta-liveried Fokker on approach over a beach | **REJECT** |
| 2805672 | Nassau, Bahamas — genuinely Caribbean, but the aircraft is fragmentary behind palm fronds and blown to pure white | REJECT — unusable frame |
| 36792921 | Townsville, Australia; the aircraft is a barely-visible speck | REJECT — too small to read as an aeroplane |
| 612875 | woman watching a **turboprop** overhead; flat grey, desaturated, no holiday warmth | REJECT — vibe |
| 36130276 | light aircraft parked behind a volleyball net; grey, drab | REJECT — vibe |
| 36853307 | speck-sized aircraft, low resolution (1672 px) | REJECT |
| 11524595 | palms + jet, Las Vegas | REJECT — desert, wrong read |
| 36959832 / 36959833 | palms + jet, but **8000 × 12000 with no camera data** | **REJECT — AI screen** |
| 9739465 | top-down of an aircraft in a park/airport apron, reads as infrastructure | REJECT — vibe |
| 4774024 | small aircraft over a grey beach with a runner; flat and cold | REJECT — vibe |
| 3225511, 15421145, 2479635 etc. | wing-out-of-window | FAIL — wing-only |

---

## Fetch mechanics — confirmations and one new correction for the brief

Everything the brief says held. Two additions worth recording:

- **Openverse anonymous paging:** `page_size=100` now returns **401**. `page_size=20` with a
  `license=` filter returns **200** and pages cleanly to at least page 10. Use 20.
- **Flickr search enumeration is not unusable after all.** The brief says Flickr search thumbnails
  "carry no titles or attribution", which is true — but the rendered page **does** expose the full
  `live.staticflickr.com/<server>/<id>_<secret>_n.jpg` URLs, and **swapping `_n` → `_b` yields the
  1024 px version with the same secret** (only `_k` / `_h` / `_o` need the `/sizes/o/` lookup).
  That turns a Flickr CC search into a 20-image visual triage in two calls — it is how Block 1 and
  Block 3 were adjudicated. Recommend adding this to the brief.
- **Screening method that made this tractable, offered for reuse.** Downloading 173 destination
  frames and eyeballing them one at a time would miss a 2.7 %-width aircraft. Instead: for each
  frame, background-subtract the sky (box blur), threshold for dark blobs, reject blobs whose
  surround is high-variance (cloud, surf) or whose contrast is low, then **crop the survivors at
  ~4× native and tile them into a labelled contact sheet**. One `Read` then adjudicates ~110 sky
  anomalies across ~37 photographs. That is what turned "we can't check them all" into "we checked
  them all". Scripts left in the scratch directory: `skyscan2.py`, `blobcrops.py`, `locate.py`,
  `zoom.py`, `detail.py`, `sheet.py`, `skyband.py`.

---

## Honest bottom line for the coordinator

1. **Cancún-specific + compliant does not exist in the free-licence libraries.** 173 destination
   frames opened, 316 sky anomalies magnified and inspected, four libraries swept. It is not there,
   and it is not behind a paywall either.
2. **The two nominations are compliant, verified, attractive and legally clean — but they are
   destination-agnostic.** The primary is at least botanically Caribbean (coconut palms); the
   alternate is not tropical at all, it is simply the best sunset-silhouette frame in existence
   under a free licence.
3. **If destination specificity is non-negotiable for this certificate**, the honest options are
   (a) commission or licence a Cancún frame outside the free tier, or (b) accept a Cancún frame
   with **no aircraft at all** and let the aviation idea live in the copy — several of the Cancún
   sunsets I verified are brand-clean and beautiful (`px_9425661`, `px_9513215`, `px_27600386`,
   `px_16456931`), they simply have empty skies. That is a product decision, not an image-sourcing
   one, and I am flagging it rather than quietly picking for you.
4. **Do not swap in Pexels 35696781** however good it looks in a thumbnail. It fails the AI screen
   on its own terms.

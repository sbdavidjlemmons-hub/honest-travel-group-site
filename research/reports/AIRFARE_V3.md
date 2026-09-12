# AIRFARE V3 — replacement hero photography, all five airfare certificates

Written 2026-09-12. Standard: `research/IMAGE_BRIEF_V2.md` airfare clause, refined by
`research/ART_DIRECTION_V3.md` S2 — *the destination landscape with an aircraft incidental:
small in the frame, unmistakably an aircraft at 1600x900, no legible livery, titles or tail logo.*
Budget $0. Nothing in `img/`, `certificates/` or any `.html` was touched by this sweep.

---

## 0. Live disclosure defect — goes first

**AIR-SJD and AIR-CRI are shipping the same photograph under two destination captions.**
`img/verified-certificates/cabo-san-lucas-airfare-credit.jpg` and
`img/verified-certificates/costa-rica-airfare-credit.jpg` are the same cabin-window wing shot
(mean per-channel difference 0.33/255; 0.36% of pixels differ by more than 8 — JPEG re-encode
noise plus the caption badge). Not byte-identical (md5 `d5bc5c0f…` vs `32c614ee…`), but one
picture. It is a wing-out-of-window frame, which `IMAGE_BRIEF_V2.md` fails outright ("a
cabin-window or wing-only shot FAILS"), and the winglet carries a yellow/green carrier colour
scheme. Two certificates, one photo, two place names. Both were already scheduled for
replacement; this note is so the caption problem is on the record while they remain live.

Two other premises in the task brief were checked against the shipping files and corrected:

| Code | Brief said | What is actually shipping |
| --- | --- | --- |
| AIR-SJU | generic sunset silhouette, not Puerto Rico | the V3 "San Juan tight" crop — Castillo San Cristóbal, PR flags, Condado towers, small jet. Destination is correct; it fails on softness (1.62x upscale) and a flat sky |
| AIR-CUN | aircraft buried | aircraft is clean and readable; the frame has no Cancún in it at all (palm fronds + sky) |

---

## 1. Verdict table

| Code | Verdict | Aircraft-in-destination frame found? | What is delivered | Rendered crop |
| --- | --- | --- | --- | --- |
| **AIR-HNL** | **UNRESOLVED** | Yes — one, and it **fails at 100%** on Delta titles + tail widget | Landscape-only fallback (Diamond Head over Waikiki), flagged; rejected frame kept as evidence | `research/crops/AIR-HNL_1600x900_diamondhead_FALLBACK_noaircraft.jpg` |
| **AIR-SJU** | **UNRESOLVED** (premium bar) | Yes — Isla Verde, CC BY, **passes livery and aircraft tests**, but 1280px source, 1.25x upscale, hazy | Flagged option rendered; owner decides whether haze is acceptable | `research/crops/AIR-SJU_1600x900_islaverde_FLAGGED.jpg` |
| **AIR-CUN** | **UNRESOLVED** | No — zero aircraft, consistent with the prior 173-frame sweep | Cancún-only fallback (hotel zone + Nichupté), **reframed to drop a legible H&M sign** | `research/crops/AIR-CUN_1600x900_hotelzone_FALLBACK_noaircraft.jpg` |
| **AIR-SJD** | **UNRESOLVED** | No — every Los Cabos aircraft frame is at SJD airport with legible livery | Cabo-only fallback (Land's End at sunset) | `research/crops/AIR-SJD_1600x900_landsend_FALLBACK_noaircraft.jpg` |
| **AIR-CRI** | **UNRESOLVED** | No landscape+aircraft; **one compliant aircraft frame at SJO** (silhouette, zero markings) | Costa Rica-only fallback (Arenal at sunset) **plus** the SJO silhouette as a flagged alternate | `…/AIR-CRI_1600x900_arenal_FALLBACK_noaircraft.jpg`, `…/AIR-CRI_1600x900_sjo_sunset_ALT_aircraft.jpg` |

**Zero approvals.** The three-way tension the brief names held across this whole sweep:
destination + anonymous forces a small aircraft, prominent + anonymous forces a generic place,
destination + prominent yields legible livery. The one frame that had all three ingredients
(Honolulu) carried a legible airline. An honest UNRESOLVED beats a bad approval.

**Compliance line on every fallback:** the four landscape-only fallbacks *are* their destinations
and may be captioned as such — but they do not satisfy S2 (no aircraft). That trade is the
owner's to make, not this sweep's. None of the source titles, filenames or alt text may reach the
site (rule C1).

Every crop above was rendered from the native file and opened with the Read tool at 1600x900;
every aircraft and every suspect mark was then cropped 1:1 out of the *rendered* file and
magnified, and out of the *native* file at 6x. Evidence tiles are in
`research/crops/evidence-airfare-v3/`.

---

## 2. AIR-HNL — Honolulu

### Candidate found and rejected

| Field | Value |
| --- | --- |
| Source | https://www.flickr.com/photos/prayitnophotography/15189404693/ — "Leaving on a jet plane ~ sung by John Denver", description "Honolulu International Airport, Hawai'i" |
| Photographer | Prayitno / Thank you for (12 millions +) view |
| Licence | CC BY 2.0 (confirmed on the photo page) |
| Native | 3728x1982 (Flickr `_o`, secret `371e126f89`), md5 `a8ed3ab46170873dbe52922f141f5000` |
| EXIF | Canon EOS Rebel T1i, 50mm, f/10, 1/320, ISO 200, 2014-09-26 15:13 — full capture chain, AI positively ruled out |
| Crop tested | `(205, 0, 3728, 1982)` = 3523x1982, scale 0.4542 (downscale) |
| Rendered | `research/crops/AIR-HNL_1600x900_prayitno_REJECTED_livery.jpg` |

**What I saw at 100%.** This is the only frame in the sweep that is simultaneously Honolulu and
an aircraft: the Ala Moana / Kakaʻako tower line and Diamond Head across the bottom, cumulus,
and a Boeing 767 climbing out of the Reef Runway. The destination test passes without
qualification — Diamond Head is unmistakable. The aircraft test fails in the other direction: the
jet spans ~560 px native, **15% of frame width**, 255 px in the delivered file — it is the subject,
not incidental. And the livery test fails outright. At native 2x
(`evidence-airfare-v3/AIR-HNL_prayitno_aircraft_native_2x.jpg`) **"▲DELTA" is legible on the
forward fuselage** and the fin carries the red/blue Delta widget. Cropped 1:1 from the *rendered*
1600x900 file and shown at 4x (`…_aircraft_delivered_4x.png`) the titles collapse to a grey
smudge, but **the red-over-blue tail widget survives as a colour break and reads as Delta trade
dress** — the same failure class as the Carnival whale-tail that was refused on CRU-TPA. Reframing
cannot help: the aircraft is the reason the frame exists. **REJECTED.**

### Fallback delivered (landscape only — flagged, no aircraft)

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/28408693/ — "Aerial View of Honolulu's Skyline and Coastline" |
| Photographer | Stephen Leonardi |
| Licence | Pexels License (free commercial use, no attribution) |
| Native | 6500x4333, md5 `f42a582a1ff369a6304f35ff30271d54` |
| AI screen | Pexels strips EXIF. Geometry 6500x4333 is 3:2, not a power-of-two multiple of any handset frame; photographer has a coherent same-day Honolulu series (28134943/44/48/51, 28408696). Reasoned pass. |
| Crop | `(0, 150, 6500, 3806)` = 6500x3656, scale 0.2462 |
| Rendered | `research/crops/AIR-HNL_1600x900_diamondhead_FALLBACK_noaircraft.jpg` |

**What I saw at 100%.** Shot from the Diamond Head rim: Kapiʻolani Park in the foreground,
the full Waikīkī–Ala Moana skyline, the Royal Hawaiian's pink block, Magic Island, the Koʻolau
foothills, big cumulus. Building band cropped from the rendered file at 2.5x
(`evidence-airfare-v3/AIR-HNL_diamondhead_waikiki_band_delivered_2.5x.jpg`): **no legible rooftop
or facade text** — every tower resolves as a block. No aircraft anywhere in the sky (the detector
found none; a tour helicopter appears in the sibling frame 28134944 and is not an aeroplane).
This is a better picture of Honolulu than the shipping frame. It does not satisfy S2.

**Note on the shipping frame.** The current Tantalus frame ("Flying Over the Sun", ELLK, CC BY
2.0) remains the only compliant Honolulu-plus-aircraft frame on record; it surfaced again in this
sweep (Flickr 53540121441) and was not re-tested. If the owner will not accept a no-aircraft
landscape, the choice is that frame, possibly re-cropped tighter to reduce the haze band.

**Coverage.** 106 Pexels/Unsplash Honolulu landscape frames at native, 51+67 detector tiles opened;
Flickr CC triage: diamond head airplane (21), waikiki plane (20), honolulu airplane sunset (14),
magic island plane / ala moana airplane / kakaako (27) at 1024 px; Openverse: 8 queries. Every
other aircraft was aircraft-as-subject with legible livery (Hawaiian x4, United x2, JAL, ANA,
Southwest x2, Delta), military (F-15s over Diamond Head, C-17), a window/wing view, or CC BY-NC
(two 2007 Ilikai-lanai sunsets with a jet — licence dead).

---

## 3. AIR-SJU — San Juan

### Candidate found — compliant, flagged on quality

| Field | Value |
| --- | --- |
| Source | https://www.flickr.com/photos/blueyeda73/2488293168/ — "Plane taking off over Isla Verde Beach." |
| Photographer | BluEyedA73 |
| Licence | CC BY 2.0 (confirmed on the photo page) |
| Native | **1280x960** (Flickr `_o`, secret `8395a13298`) — the original is small; md5 `1299ea5a6aaa563837f627b761ea2748` |
| EXIF | Canon PowerShot SD850 IS, 18.6mm, f/5, 1/640, ISO 80, 2008-05-10 — full capture chain |
| Crop | `(0, 120, 1280, 840)` = 1280x720, **scale 1.25 — UPSCALE** |
| Aircraft | native centre (742, 331), 54x12 px = **4.2% of frame width**, 68 px in the delivered file |
| Rendered | `research/crops/AIR-SJU_1600x900_islaverde_FLAGGED.jpg` |

**What I saw at 100%.** Isla Verde beach (Carolina, the San Juan metro beach strip beside SJU
airport) from an elevated hotel vantage: the long curve of sand, casuarinas and coconut palms,
turquoise shallows, and a white twin-jet climbing away from runway 8 over the beach. Cropped 1:1
from the rendered file at 4x (`evidence-airfare-v3/AIR-SJU_islaverde_aircraft_delivered_4x.png`)
it is unmistakably an aeroplane — swept wings, fuselage, fin — not a speck. At 6x native
(`…_aircraft_native_6x.png`) it is a plain white shape: **no titles, no fin mark, no registration,
no colour break.** Livery test passes with margin; aircraft test passes. Destination test is the
weak leg: it is genuinely San Juan and an SJU departure, but there is no landmark — a local would
name it, a stranger sees "Caribbean beach". Quality is the reason for the UNRESOLVED: a 2008
compact-camera file, ~55% of the frame is flat grey-blue haze, and it is a 1.25x upscale. It gives
the owner the "small airplane more visible" half of his ask and not the "better landscape" half.

**Coverage.** 69 Pexels/Unsplash San Juan frames at native (El Morro, Old San Juan, Condado,
Isla Verde, PR beach), 47+41 detector tiles; Flickr CC: isla verde plane (24), san juan airplane
(23), isla verde puerto rico + carolina beach (41), puerto rico airplane palm (24); Openverse: 12
queries. Everything else was a window/wing view (jetBlue, AA), Maho Beach St Maarten mislabelled
as PR, Luis Muñoz Marín apron spotting (AirTran, Spirit, Copa), a C-17 on the ramp, or
CC BY-NC-ND (Hank Anderson's "Takeoff", 2848x2136, the better of the two Isla Verde frames —
licence dead). The two handed leads: Pexels 37709987 (Jack Farinella) is a good Escambrón coast
frame with a contrail but no aircraft; Pexels 1052190 (Vincent Lebis) is an aircraft-as-subject
belly view with an orange/green tail stripe and is not Puerto Rico — rejected.

---

## 4. AIR-CUN — Cancún

**UNRESOLVED — no aircraft.** This sweep added 71 Pexels/Unsplash hotel-zone, lagoon and
sunset frames at native (120 detector tiles), 17 Flickr CC frames and 95 Openverse results to the
prior 173. Every sky anomaly resolved as gull, boat wake, cloud or noise. The only Cancún frames
with an aircraft were the Coco Bongo banner plane (third-party brand), CUN apron spotting
(Cubana, Interjet, Condor, JetBlue, United, Air Canada — all legible), and wing-out-of-window
views. A parallel sweep (`research/reports/AIRFARE_CUN_ALT_V3.md`, 1,367 frames) reached the same
conclusion independently. The gap is in the photographic record, not the licence tier.

### Fallback delivered (landscape only — flagged, no aircraft)

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/20210505/ — "Foreland with Hotels on Sea Coast in Cancun" |
| Photographer | Israel Torres (@israwmx) |
| Licence | Pexels License |
| Native | 8064x6048, md5 `2e6ae69bf70bfddef3ec694e532546df` |
| AI screen | Pexels strips EXIF. 8064x6048 is the exact 48 MP 4:3 frame of a DJI Air 2S / Mavic 3 quad-Bayer mode; coherent 15-frame same-flight series (20210498–20210512). Reasoned pass. |
| Crop | **`(2300, 900, 8064, 4142)`** = 5764x3242, scale 0.2776 — **not the full frame, see below** |
| Rendered | `research/crops/AIR-CUN_1600x900_hotelzone_FALLBACK_noaircraft.jpg` |

**What I saw at 100%.** The hotel zone from above Punta Cancún looking north: the white tower
cluster, the beach and the turquoise-to-cobalt Caribbean on the right, Laguna Nichupté and the
mainland on the left, Isla Mujeres on the horizon. Unmistakably Cancún. The first crop I rendered,
`(0, 800, 8064, 5336)`, was **rejected by the 100% rule**: the La Isla / Kukulcán mall on the
lagoon side carries a red **"H&M"** sign that is still readable when cropped 1:1 from the
delivered file and shown at 4x (`evidence-airfare-v3/AIR-CUN_fullframe_mall_HM_sign_delivered_4x.jpg`)
— saturated red on white survives the 0.198x downscale exactly as C3c-bis predicts. The shipped
crop starts at native x = 2300, 217 px clear of the sign, and drops the mall, the ferris wheel and
the residential district entirely; its left edge at 3x
(`…_reframe_leftedge_delivered_3x.jpg`) shows only the white towers, and the tower facades at
0.6x native carry no text. Rule C7 held: the hotel-zone signage risk fired, and the reframe
recovered the frame at zero cost.

---

## 5. AIR-SJD — Cabo San Lucas

**UNRESOLVED — no aircraft.** 69 Cabo landscape frames at native (El Arco, Land's End, Divorce
Beach, the marina, San José del Cabo; 64 detector tiles), 26 Flickr CC frames, 6 Openverse
queries. The four handed leads (22912077, 4023345, 18907101, 3964212) are all excellent
landscapes with empty skies. Every aircraft in the Los Cabos pool is at SJD airport — Alaska,
WestJet, Magnicharters, Rossiya, Aeromexico, United, Delta, Interjet — on stand or on the runway,
titles fully legible, no landscape. The airport sits ~30 km from the Arch on the Sea of Cortez
side; the geometry the standard needs does not occur here.

### Fallback delivered (landscape only — flagged, no aircraft)

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/12217245/ — "Aerial Footage of Rock Formation surrounded by the Sea", stated location Cabo San Lucas, BCS |
| Photographer | Ramo |
| Licence | Pexels License |
| Native | 5464x3640, md5 `7dbbddb167da4777b0b8b373d63539e4` |
| AI screen | Pexels strips EXIF. 5464x3640 is the Hasselblad L1D-20c (DJI Mavic 2 Pro) 5472x3648 frame trimmed 8 px per side — a real sensor. Reasoned pass. |
| Crop | `(0, 250, 5464, 3324)` = 5464x3074, scale 0.2928 |
| Rendered | `research/crops/AIR-SJD_1600x900_landsend_FALLBACK_noaircraft.jpg` |

**What I saw at 100%.** Land's End from the air at sunset: El Arco and the sea stacks at left
against the sun on the Pacific horizon, the granite ridge running to Divorce Beach at bottom
right, glassy water with two small boats and their wakes. No building, no sign, no text of any
kind in the frame; two distant vessels on the horizon are under 12 px in the delivered file. This
is as recognisable as Cabo gets. Alternate on file, not signage-checked: Pexels 4023345 (Zach The
Shoota, 4000x2250 native 16:9) — Médano beach and the town with Land's End behind; its beachfront
resort roofs would need the facade sweep before use.

---

## 6. AIR-CRI — Costa Rica

**UNRESOLVED for a landscape+aircraft frame.** 101 Costa Rica landscape frames at native (Arenal,
Manuel Antonio, Guanacaste, Tamarindo, Jacó, Liberia, Monteverde; 105+35 detector tiles — every
anomaly was a bird, a paraglider or a boat), 24 Flickr CC, 16 Openverse queries. The aircraft
frames that exist are all at Juan Santamaría (SJO) or Liberia (LIR): Volaris, Sunwing, Air
Transat, Sansa and Green Airways light aircraft, apron and fence shots. One of them is worth
carrying forward.

### Fallback delivered (landscape only — flagged, no aircraft)

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/14510492/ — "Landscape with a Volcano", stated location Alajuela Province, Costa Rica |
| Photographer | Jean Paul Montanaro |
| Licence | Pexels License |
| Native | 4910x3682, md5 `3ddf555a73f78e5ff5dcb04f879f754f` |
| AI screen | Pexels strips EXIF. 4910x3682 is a 4:3 18 MP frame, not a round number; photographer has a coherent Costa Rica drone series (15365628–41, 34750007). Reasoned pass. |
| Crop | `(0, 200, 4400, 2675)` = 4400x2475, scale 0.3636 — right edge and bottom trimmed to drop a car park and parked vans at native (4380–4900, 2680–2780) |
| Rendered | `research/crops/AIR-CRI_1600x900_arenal_FALLBACK_noaircraft.jpg` |

**What I saw at 100%.** Arenal's cone wearing its cloud cap, the La Fortuna plain in front,
rainforest, pasture and farm tracks, a violet-to-orange sunset behind the Tilarán range. The
band of buildings at bottom right, cropped from the rendered file at 2x, is red-roofed farm
sheds and a white hillside lodge with no text. No aircraft. Premium and unmistakably Costa Rica.

### Alternate delivered — aircraft present, destination not visible (flagged the other way)

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/29681940/ — "Airplane on Alajuela Airport Runway at Sunset", stated location Alajuela, Costa Rica |
| Photographer | Gustavo Salazar (Pexels retains the `Copyright: Gustavo Salazar` tag) |
| Licence | Pexels License |
| Native | 5495x3091 (native 16:9), md5 `69f2c688b0a676989c7eb31dde184178` |
| AI screen | 16:9 cut of a ~5500x3670 3:2 frame, non-round, copyright tag present. Reasoned pass. |
| Crop | full frame `(0, 0, 5495, 3091)`, scale 0.2912 |
| Aircraft | native centre (2780, 1960), ~1525 px span = **28% of frame width**, 444 px delivered — prominent, not small |
| Rendered | `research/crops/AIR-CRI_1600x900_sjo_sunset_ALT_aircraft.jpg` |

**What I saw at 100%.** A widebody twin lined up on SJO's runway seen dead astern, a complete
black silhouette against a blazing orange sky with the sun disc top-left, runway edge and
approach lights in green, white and red, Central Valley hills in silhouette. At 6x native
(`evidence-airfare-v3/AIR-CRI_sjo_tail_native_6x.png`) the fin is an undifferentiated dark
wedge — **no logo, no titles, no registration, no colour break anywhere on the airframe.** It
passes the livery test with more margin than anything else in this sweep and it was photographed
in Costa Rica, so a "Costa Rica" caption is truthful. It fails S2 on both counts the owner named:
the aircraft is the subject, and nothing in the frame says Costa Rica. It is offered because it
is an honest, compliant improvement on a wing shot, not because it meets the standard.

---

## 7. Method and mechanics — for the next sweep

**Detector.** 416 native frames were not eyeballed one by one. A top-hat/bottom-hat filter
(31 px rectangular footprint at 2000 px working width) flagged compact high-contrast blobs on
smooth, non-teal, non-warm background in the upper 75% of each frame; each hit was tiled at 3x
native onto a labelled contact sheet and every sheet was opened. 530 tiles across the five
destinations, **one aeroplane** (the Isla Verde jet) and one helicopter. It is the right tool —
the CUN precedent (316 tiles, zero) reproduced on four more destinations in under an hour of
compute — and it confirms the structural point: **destination-first searching finds landscapes
with empty skies; the aircraft frames come from aircraft-first searching, and those fail on
livery.** The two frames that had both came from Flickr photographers standing near an airport
and pointing the other way.

**Flickr CDN rate limit.** `_b` (1024 px) downloads run freely; after a burst of ~170 of them the
CDN returned **429 on every `_k` and `_o` request for about six minutes**, then served the
originals on the third or fourth retry at 3-minute spacing. Fetch `_b` for triage, then queue
originals one at a time with long backoff.

**Flickr search via WebFetch** returns the thumbnail URL list only when the prompt asks for
"the complete list of live.staticflickr.com URLs and nothing else"; a prompt asking for titles
makes the model refuse the whole page. Swap `_n`/`_m`/`_w`/`_z` for `_b` on the same secret.

**Openverse** anonymous API is stable at `page_size=20` and returns creator, licence and the
Flickr `_b` URL — the fastest way to enumerate a Flickr CC pool by title.

**Self-kill trap.** `pkill -f detect2.py` matched the shell that issued it (the script name was in
the heredoc) and killed the session twice. Anchor the pattern: `pkill -f "^python3 detect"`.

**Coverage totals.** 416 native landscape frames (HNL 106, SJU 69, CUN 71, SJD 69, CRI 101) plus
57 native aircraft-lead frames; 261 Flickr CC frames at 1024 px; ~50 Openverse queries; 530
detector tiles; 8 Flickr originals resolved. Roughly 735 frames triaged, all opened as sheets or
singly. Two candidates reached the 100% test; one failed, one passed on compliance and was held
on quality.

**Unrelated working-tree note.** `img/verified-certificates/cancun-airfare-credit.jpg` shows as
modified in `git status` (mtime 05:12 today) and commit `655b4d3` "ship Cancun airfare
replacement" landed during this session. Neither is from this sweep; flagged so it is not
attributed here.

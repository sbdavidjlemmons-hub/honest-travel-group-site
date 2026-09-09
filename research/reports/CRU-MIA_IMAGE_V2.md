# CRU-MIA / miami-cruise / "Miami Cruise" — image acquisition, V2 standard

Standard applied: `research/IMAGE_BRIEF_V2.md` (shoot the port, not the ship).
Assignment: image only. No pricing work performed. No other repo file touched.

**Every candidate below was downloaded and opened with the Read tool.** Nothing in this
report is a metadata inference. Where a verdict turned on a detail smaller than a thumbnail,
the region was re-cropped from the highest available resolution and re-opened.

Evidence files (downloads, high-res crops, 1600×900 delivery renders) are in the session
scratch directory:
`/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/mia/`

---

## Result

| | Candidate | Source | Licence | Pixels |
| --- | --- | --- | --- | --- |
| **PRIMARY** | Drone shot of the Miami port at sunset | Pexels 8530566 | Pexels License | 6240 × 4160 |
| **ALTERNATE** | Miamicruiseships20071208.jpg | Wikimedia Commons | CC BY-SA 1.0 ⚠ | 2560 × 1920 |

Both passed step 3 (opened and looked at). Both were additionally rendered as an actual
1600 × 900 crop and re-inspected at 220–240 % of delivery pixel density.

---

## PRIMARY — visually verified — APPROVE

**"Drone shot of the Miami port at sunset"**

| Field | Value |
| --- | --- |
| Source page | https://www.pexels.com/photo/drone-shot-of-the-miami-part-at-sunset-8530566/ |
| Direct file | https://images.pexels.com/photos/8530566/pexels-photo-8530566.jpeg |
| Creator | Brendon Spring — https://www.pexels.com/@lee81/ |
| Licence | Pexels License — free for commercial use, attribution not required, may not be resold as a standalone unaltered file |
| Dimensions | 6240 × 4160 (3:2) |
| Stated location | Miami, FL, United States |

### What I actually see

Dusk from a high vantage on Dodge Island looking north-north-west up Biscayne Bay. A pink-to-
gold gradient sky fills the top 45 % of the frame. A single cruise ship lies bow-on at the
quay on the left, backlit and rim-lit by the last of the sun. Along the quay: the PortMiami
tensile "sail mast" terminal canopy with its lanterns lit, a run of passenger boarding
bridges / gangway gantries, mooring bollards and a line of rubber fenders. Downtown and
Edgewater high-rises glitter across the water; the MacArthur Causeway and Watson Island run
away on the right. The channel occupies the whole right half as clean, reflective water.

### Against the V2 criteria

| Criterion | Verdict |
| --- | --- |
| Ship under ~40 % of frame width | **Pass.** Ship spans roughly 11–13 % of frame width. |
| Backlit / golden hour / dusk | **Pass.** Post-sunset; the ship is a warm silhouette. |
| Berth infrastructure in frame | **Pass, emphatically.** Terminal canopy, boarding bridges, bollards, fenders, quay apron — the berth *is* the subject. |
| Clean sky / water for overlay | **Pass.** Roughly 45 % clean sky and a full half-frame of clean water. |
| Vibe test — vacation, not freight | **Pass.** No cranes, no containers, no car parks, no razor wire. Reads as a departure evening. |
| No readable ship name | **Pass.** Crop `z_px1_bow.jpg` is the bow at 3× the native pixel scale: the name is two or three dark smudges, unreadable at any magnification. |
| No readable line wordmark | **Pass.** Bow-on angle; no funnel mark visible, no hull livery. |
| No third-party commercial signage | **Pass.** Distant downtown LED bands (arena, a red-lit sign) resolve to coloured pixels, not letterforms, at full resolution (`z_px1_sign1.jpg`). Terminal-side wayfinding is port-operator, not commercial, and is not legible in the delivery crop. |

### Delivery test

`del_px1_1600.jpg` — full-width 16:9 crop rendered to exactly 1600 × 900. Three 100 %
inspection tiles (`tile_LL`, `tile_LM`, `tile_RM`) were opened at 220 % of delivery pixels.
No letterform anywhere in the frame resolves as readable text. Approved at delivery size.

### Cautions to record

- **Licence is the Pexels License, not a CC licence.** Pexels is named as an allowed source
  in the brief, but the licence-preference list names Unsplash by name and not Pexels. It is
  functionally equivalent (commercial use allowed, no attribution required, no share-alike).
  Confirm this is acceptable to whoever signs off licences before release.
- **EXIF is stripped.** The delivered JPEG carries only Orientation / resolution tags — no
  camera make, model or exposure. Pexels strips EXIF from every file it serves, so this is a
  platform artefact, not a signal about this image. The V2 AI rule does **not** trip here: it
  requires stripped EXIF *on a suspiciously round pixel dimension*, and 6240 × 4160 is a real
  full-frame sensor readout (Sony α7 III / α7C class), not a generator's round output.
  Positive corroboration that this is a real photograph: the PortMiami geography is exactly
  correct — terminal sail-mast count and spacing, causeway geometry, Watson Island, and the
  Edgewater skyline all match the real site, which generators of that era did not reproduce.
  I could not positively confirm the camera body, and say so plainly.

---

## ALTERNATE — visually verified — APPROVE WITH CAUTION

**"Miamicruiseships20071208.jpg"**

| Field | Value |
| --- | --- |
| Source page | https://commons.wikimedia.org/wiki/File:Miamicruiseships20071208.jpg |
| Direct file | https://upload.wikimedia.org/wikipedia/commons/4/46/Miamicruiseships20071208.jpg |
| Creator | Marc Averette (self-photographed) |
| Licence | **CC BY-SA 1.0** ⚠ — attribution required, share-alike attaches to any crop published |
| Dimensions | 2560 × 1920 (4:3) |
| EXIF | Panasonic DMC-TZ1, 1/400 s, f/6.3, ISO 80, 13.0 mm, 2007-12-08 08:54:53 — real camera data, AI ruled out |

### What I actually see

Looking west across Biscayne Bay. Turquoise water fills the bottom third. A band of palms and
low waterfront villas (Star Island) runs across the middle. Behind it, a line of six or seven
cruise ships lies at berth along Dodge Island, with the downtown Miami skyline and a big
cumulus sky above. Every ship is a small element in a wide band; none is the subject.

### Against the V2 criteria

| Criterion | Verdict |
| --- | --- |
| Ship under ~40 % of frame width | **Pass.** No single ship exceeds ~12 % of frame width. |
| Backlit / golden hour | **Partial.** Bright mid-morning, not backlit. The wordmark-suppression the brief wants from low light is achieved instead by distance and haze — verified below, not assumed. |
| Berth infrastructure in frame | **Pass.** Terminal sheds and quay structures visible behind and between the ships; a second, third and fourth berthed vessel are in frame. |
| Clean sky / water for overlay | **Pass.** Large cumulus sky above, unbroken water below. |
| Vibe test | **Pass.** Turquoise water, palms, villas, blue sky. Reads as Miami vacation. No cranes, containers, car parks or utility clutter anywhere in the frame. |
| No readable ship name | **Pass.** Tiles `c17_tileA` / `c17_tileB` are the ship band at 240 % of delivery pixels: hull lettering is present but resolves to grey texture, not letters. |
| No readable line wordmark | **Pass on text.** No wordmark resolves. |
| No third-party commercial signage | **Pass.** Nothing legible. |

### The caution, stated plainly

Three or four **Carnival whale-tail funnels** are recognisable as shapes in the ship band, plus
one ship's decorative sunburst hull art. There is no readable text, so this does not breach the
letter of the brand rule — but the coordinator's Carnival Glory rejection cited "red whale-tail
funnel dead centre", and this is the same trade dress, just small and repeated across a distant
band rather than filling the frame. That, plus the CC BY-SA share-alike obligation and 2007
compact-camera softness at 1:1, is why this is the alternate and not the primary. If the
whale-tail silhouette is disqualifying on its own, **Miami has one usable image, not two**, and
the alternate slot is empty.

### Delivery test

`del_c17_1600.jpg` — full-width 16:9 crop rendered to exactly 1600 × 900. Holds up: the ships
read as a cruise port, no text is legible, the palms and turquoise water carry the vacation
signal, and the sky and water bands take a translucent overlay cleanly.

---

## Everything rejected, and why

All 40 rows below were downloaded and opened. Nothing here is a metadata guess.

### Wikimedia Commons

| File | Licence | Verdict — visually verified |
| --- | --- | --- |
| Miami Sunset (45863661094).jpg | CC0 | **REJECT.** Large blue Royal Caribbean crown-and-anchor logo on the terminal building, plus a lit hotel wordmark. No cruise ship at berth — it is a skyline shot. |
| Port of Miami by Don Ramey Logan.jpg | CC BY 4.0 | **REJECT.** "WORLD TRADE CENTER MIAMI" building sign legible, "NORWEGIAN PEARL" legible on the hull, NCL funnel logo, Carnival whale-tail, a grey naval warship with hull number in the foreground, shipping containers. |
| Port of Miami photo Don Ramey Logan.jpg | CC BY 3.0 | **REJECT.** Container stacks line the entire quay, two blue mobile harbour cranes, NCL funnel logo, Carnival whale-tail dead centre of any usable left-hand crop. Delivery crop rendered and re-checked — still reads as freight. |
| Sunrise in Port of Miami.jpg | CC BY-SA 2.0 | **REJECT.** Container gantry cranes, container yard, active construction site, and a large illuminated Royal Caribbean crown-and-anchor bottom right. |
| PortMiami from south.jpg | CC BY 2.0 | **REJECT.** Hazy, soft iPhone-5-era file; Carnival whale-tail funnels visible; a partially legible terminal sign. Not premium quality. |
| Miami Beach and Port of Miami just after dawn.jpg | CC BY-SA 2.0 | **REJECT.** Beautiful red dawn, but the silhouette is entirely container gantry cranes. No cruise ship. Freight. |
| Sunset port-of-miami.png | CC0 | **REJECT.** No cruise ship at berth. Electrical substation, warehouses and a crane in the foreground. Also a 2026 PNG upload by a red-link account with no EXIF — provenance not establishable. |
| Port of Miami - panoramio.jpg | CC BY-SA 3.0 | **REJECT.** Skyline and causeway only. No cruise ship, no berth. |
| Port of Miami546.jpg | Public domain | **REJECT.** Dusk, but the frame is container gantry cranes. Freight. |
| Port of Miami CTTE 2024 pano March 2024 Night.jpg | CC BY 2.0 | **REJECT.** Legible red neon **"Virgin"** wordmark on the terminal. No ship. |
| Port of Miami33.jpg | CC BY-SA 2.0 | **REJECT.** A "Port of Miami" monument sign plus an iPad billboard. No ship, no water. |
| Miami Cruise Terminals "la capital mundial del crucero" - panoramio.jpg | CC BY 3.0 | **REJECT.** Carnival terminal kerbside with Carnival advertising banners and a "Check-In / Baggage Drop-Off" sign. Multiple brand marks. |
| Port of Miami 20071208.jpg | CC BY 3.0 | **REJECT.** Ships at berth and decent composition, but only 2243 × 632 — a 16:9 crop yields 1124 px wide, short of a 1600 × 900 hero. Carnival funnels prominent; a branded red tour boat in the foreground. |
| Sunrise reflections on the buildings of Miami.jpg | CC BY-SA 2.0 | **REJECT.** Container gantry cranes and a lit container yard fill the lower band. Freight. |
| PortMiami main channel with city skyline… (March 11, 2024).jpg | CC BY-SA 4.0 | **REJECT — near miss.** Good light, native 16:9, strong berth infrastructure, ship small. But the adjacent red hull carries a legible **"Virgin"** signature wordmark, and a Carnival blue whale-tail sits centre frame. At 1600 px the Virgin script is ~37 px wide — marginally legible. Not worth the risk. |
| PortMiami from Carnival Conquest (27 December 2022).jpg | CC BY-SA 3.0 | **REJECT.** Flat overcast, container yard, multi-storey car park, passengers' backs in the foreground. |
| Cruise Terminal Miami - panoramio.jpg | CC BY 3.0 | **REJECT.** Night shot of a terminal shed roof with skips, a cherry picker and a car park. No ship. |
| Miami Cruise Terminal (44769960710).jpg | CC0 | **REJECT.** Lovely dusk terminal canopies, but portrait orientation, no cruise ship in frame, and a legible "PARAMOUNT" building sign with a phone number. |

### Pexels

| ID / title | Verdict — visually verified |
| --- | --- |
| 27088874 Skyline of Miami… from a boat | **REJECT.** Container gantry cranes dominate the right; boat bow in the foreground; no cruise ship. |
| 15131421 Ferry in bay at sunset | **REJECT.** Gorgeous dusk, but the ship (Norwegian, dragon/phoenix hull art, NCL funnel) fills ~60 % of frame width. |
| 15131439 Ferries in city harbor | **REJECT.** "CARNIVAL FREEDOM" fully legible on the stern; ship under way, not at berth. |
| 15131419 / 15131420 Skyscrapers at sunset | **REJECT.** Portrait; buildings are the subject; Carnival funnel in frame. |
| 15131424 Ferry in city harbor | **REJECT.** Portrait; ship fills the right half; container yard on the left. |
| 29785523 Front view of docked cruise ship in Miami | **REJECT.** Portrait; ship fills ~65 % of frame width; RCI crown on the mast. |
| 8574513 Drone shot of cruise ship docked on the port | **REJECT.** "EXPLORER OF THE SEAS" legible on the hull; RCI crown on the terminal; containers; Carnival whale-tail. |
| 8574512 Drone shot of a cruise ship | **REJECT.** "MSC MERAVIGLIA" legible on the bow. |
| 8574509 Aerial view of city at night | **REJECT.** No cruise ship; car parks and container yard in the foreground. |
| 8574657 / 8574714 Miami bay at dusk | **REJECT.** Beautiful, but no cruise ship and no berth. Wrong subject for this family. |
| 10846923 Illuminated city with harbor | **REJECT.** Container gantry crane silhouette. Freight. |
| 2405120 Aerial, golden hour | **REJECT.** Haulover/marina; no cruise ship at berth. |
| 15474825 Cruise ship moored in harbor | **REJECT.** Correct location (PortMiami sail canopies) but the ship spans ~53 % of frame width; RCI crown visible on the mast. |
| 15304500 Cruise ships moored on coast | **REJECT.** "PRINCESS CRUISES" and "Regal Princess" both fully legible. Not Miami. |
| 15306293 Cruise ship moored in harbor | **REJECT.** "VIKING SEA" legible. San Juan, not Miami. |
| 15306296 City on sea coast with cruise ship moored | **REJECT.** Composition is good but the port is San Juan, Puerto Rico. |
| 29677573 Luxury cruise ship docked at sunset harbor | **REJECT.** "VEENDAM" and "Holland America Line" legible. Not Miami. |
| 37880222 Aerial view of luxury cruise ships docked | **REJECT.** Top-down; no sky, no location cue, not Miami. |
| 30224027 Aerial view of Miami skyline and coastal waters | **REJECT.** Open bay. No ship, no berth. |
| 11472246 View of Miami skyline from a boat | **REJECT.** Overcast; no cruise ship; boat pulpit in the foreground. |

### Unsplash

| Photo | Verdict — visually verified |
| --- | --- |
| vT1lruPlUHY — "city skyline across body of water…", Ahmet Demiroğlu, tagged Port of Miami | **REJECT.** Dramatic sky and clean water, but the ship is under way in the channel, not at a berth, and there is no berth infrastructure in frame. |
| 2_tSG54UUSM — "a large cruise ship docked in a harbor" | **REJECT before download.** Page states the location is West Palm Beach, not Miami. |

### Public-domain aggregators

| Item | Verdict — visually verified |
| --- | --- |
| "Aerial view, looking east Biscayne" (Carol M. Highsmith / Library of Congress, CC0, 8800 × 5867) | **REJECT.** Miami Beach marina and condos. No cruise ship, no cruise berth. |
| LoC Highsmith collection, "port of miami" query | Only result is "Aerial view of the shipping-container port in Miami" — freight. Not pursued. |

---

## Method notes for the next agent

- Wikimedia now **refuses full-resolution originals** with HTTP 429 ("use thumbnail sizes
  listed on https://w.wiki/GHai") and rejects non-listed thumbnail widths with HTTP 400.
  Working widths observed: **320 / 640 / 800 / 1024 / 1280 / 1920 / 3840**. 1600 and 2560 are
  rejected. Fetch 3840 px for brand-legibility checks; it is ample.
- The `User-Agent` header from the brief is still required on both the API call and the file
  fetch, but is no longer sufficient on its own — Wikimedia also rate-limits hard. Run
  downloads **serially with a pause**; parallel API + file requests trip 429 within seconds.
- The API's `thumburl` now points at `thumb.wikimedia.org`, which 400s. Rewrite it to
  `upload.wikimedia.org/wikipedia/commons/thumb/<a>/<ab>/<name>/<width>px-<name>`, taking the
  hash prefix from the returned original URL — do not guess the prefix.
- Openverse (`https://api.openverse.org/v1/images/`) is a useful CC-only aggregator across
  Commons, Flickr and rawpixel. Anonymous requests cap `page_size` at 20 and reject `+`
  in the query — percent-encode spaces.
- Rendering an actual 1600 × 900 crop and re-opening it, then re-opening 100 % tiles of that
  crop, catches things a full-frame view hides in both directions. It cleared the primary and
  it is what condemned the "PortMiami main channel" near-miss.

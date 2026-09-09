# CRU-LAX image acquisition — V2 (pixel-verified)

**Certificate:** CRU-LAX / `los-angeles-cruise` / Los Angeles Cruise
**Ports:** World Cruise Center, San Pedro (Port of Los Angeles) and Long Beach
**Brief applied:** `research/IMAGE_BRIEF_V2.md`
**Date:** 2026-09-09
**Scope:** images only. No pricing work performed. No certificate page, no production image, and no other
repo file was touched — this report is the only file written.

---

## Result

**Two candidates nominated. Both were downloaded, opened with the Read tool, and brand-checked at
100 % of native resolution on the exact pixels that would ship.**

| Slot | Candidate | Licence | Verdict |
| --- | --- | --- | --- |
| **PRIMARY** | *Quantum of the Seas (ship, 2014) Departs San Pedro (Port of Los Angeles), California (December 2025)* — **reframed** | **CC0** | **APPROVE — visually verified** (one caution: legible `U. S. COAST GUARD` on moored cutters — non-commercial) |
| **ALTERNATE** | *Navigator of the Seas (ship, 2002) Departs San Pedro (Port of Los Angeles), California (December 2025)* — **reframed** | **CC0** | **APPROVE WITH DISCLOSED DEVIATION — visually verified** (container gantries in the right 40 % of the frame) |

Both are CC0 — the cleanest licence available under this brief. No attribution obligation, no
share-alike, no cost. Both carry full capture EXIF (Apple iPhone 11, 4.25 mm f/1.8, ISO 32,
19 Dec 2025, thirteen minutes apart), so AI generation is positively ruled out.

**41 candidates were individually downloaded and opened.** A further **92** Flickr results were
triaged on three rendered contact sheets; nothing in those 92 survived to an individual open except
the two noted in the rejection table. **39 of the 41 were rejected on sight.**

Both nominations are **recovered by reframe** — exactly the move `IMAGE_BRIEF_V2.md` §4a describes.
Both full frames carry the ship's name across the bow in large legible serif type and both would fail
on the full frame. A crop that drops the name region rescues each of them at zero cost, from a
licence already in the public domain.

---

## PRIMARY — visually verified

| Field | Value |
| --- | --- |
| Title | Quantum of the Seas (ship, 2014) Departs San Pedro (Port of Los Angeles), California (December 2025).jpg |
| Commons file page | https://commons.wikimedia.org/wiki/File:Quantum_of_the_Seas_(ship,_2014)_Departs_San_Pedro_(Port_of_Los_Angeles),_California_(December_2025).jpg |
| Direct file URL | https://upload.wikimedia.org/wikipedia/commons/f/f3/Quantum_of_the_Seas_%28ship%2C_2014%29_Departs_San_Pedro_%28Port_of_Los_Angeles%29%2C_California_%28December_2025%29.jpg |
| Creator | Jack Adamenko |
| Licence | **CC0 1.0 Universal (public-domain dedication)** — commercial use, crops and overlays entirely unencumbered. No attribution required (credit still recommended as good practice). |
| Native dimensions | 4032 × 2268 px (native 16:9), 1.84 MB |
| EXIF | Apple iPhone 11 · back dual wide camera 4.25 mm f/1.8 · 1/1063 s · ISO 32 · 26 mm equiv · DateTimeOriginal **2025:12:19 16:15:08** · Software 18.6.2 |
| AI ruled out | Complete capture EXIF (make, model, lens model, aperture, shutter, ISO, focal length, timestamp). 4032 × 2268 is the native 12 MP iPhone sensor cropped to 16:9 — a real sensor geometry, not generator output. Part of a same-afternoon sequence with the alternate (16:15 and 16:28). |
| **Approval** | **APPROVE — visually verified at 100 %** |

### Recommended 1600 × 900 crop

| Field | Value |
| --- | --- |
| Crop rectangle (native px) | **left 2130, top 330, right 3730, bottom 1230** |
| Crop size | **1600 × 900** |
| **Scale factor to deliverable** | **1.000 — a pure pixel-for-pixel crop. No resampling at all. No upscale.** |
| Rendered proof | `…/scratchpad/lax/crops/CRU-LAX_quantum_1600x900.jpg` |

Reproduce exactly:

```python
from PIL import Image
Image.open("Quantum_of_the_Seas_..._December_2025.jpg") \
     .crop((2130, 330, 3730, 1230)) \
     .save("CRU-LAX_hero_1600x900.jpg", quality=93)
```

### What I actually see in the shipped crop

Golden hour on the San Pedro main channel, shot from the rocks on the far side. **The bow and forward
superstructure of a modern cruise ship enters from the left edge**, lit warm, gliding outbound. Across
the middle of the frame runs the **San Pedro wharf** — a continuous quay with fenders and bollards, a
row of moored vessels, low cream-and-red terminal and administration buildings, and a line of tall
palms. Above and behind, clean hazy sky. Below, the whole bottom 30 % is flat golden-blue channel
water.

**Ship size in frame.** The visible bow section spans roughly 360 px of the 1600 px frame — **about
23 % of frame width, comfortably under the ~40 % ceiling.** The port is the subject; the ship is the
thing moving through it. This is the formula the brief asks for.

**Legible ship name?** **No.** The full frame carries `QUANTUM OF THE SEAS` in large serif caps on
the hull, centred at native x ≈ 1878–2118. The crop starts at x = 2130 — the name is outside the
shipped frame by 12 px at native, verified by cropping the name band and enlarging it 3× (`q_name3x.png`:
the wordmark is unambiguous there, and absent from the delivered crop). I then took a 100 % tile of
the crop's own left edge and looked: bare white plating, hawse pipes, anchor recess and a small draft
glyph. No lettering.

**Legible line wordmark?** **No.** The funnel and the Royal Caribbean crown-and-anchor sit aft of the
crop's left edge and are not in frame. Nothing on the visible bow carries a logo.

**Third-party commercial signage?** **None readable.** I magnified the entire shoreline band at 100 %
in two tiles. The buildings are unmarked cream stucco warehouses and offices; no mall, hotel, shipping
line or advertising copy resolves.

**One caution, disclosed.** The moored vessels at the quay are **US Coast Guard cutters**, and
`U. S. COAST GUARD` is legible on two of them at 100 % (roughly 90 px of text at native, ~5 % of frame
width). This is **not third-party commercial branding** — it is a federal agency, and the brief's brand
test targets commercial marks. It does, however, mean the middle band reads partly as a Coast Guard
station rather than purely as a cruise terminal. Coordinator's call; it is the single thing standing
between this frame and an unqualified pass.

**Freight / clutter check.** **Clean.** This is the whole reason the crop starts at x = 2130 and ends
at x = 3730: the full frame has a bank of container gantries behind the ship's stern on the left, and
another at the extreme right beyond x ≈ 3795. **Both are outside the shipped frame.** What remains is
a handful of thin red lattice shipyard cranes on the far horizon — small, distant, and reading as
generic waterfront, not as a container terminal. No container stacks, no gantries, no tank farm, no
car park, no razor wire.

**Overlay space.** Top ~45 % is clean graduated sky. Bottom ~30 % is clean water. Both take
translucent type without competing detail. The right two-thirds of the frame is open, so a
left-anchored ship reads well against right-anchored copy, or vice versa.

**Destination specificity.** Honest assessment: **moderate.** The palms, the low stucco port
architecture and the channel are recognisably Southern California, and the frame is genuinely the
Port of Los Angeles. But there is no single unmistakable LAX landmark in it — no Vincent Thomas
Bridge, no Angels Gate light, no Queen Mary. It reads as *a Californian cruise port*, not
specifically as San Pedro, to a viewer who does not know the harbour.

---

## ALTERNATE — visually verified

| Field | Value |
| --- | --- |
| Title | Navigator of the Seas (ship, 2002) Departs San Pedro (Port of Los Angeles), California (December 2025).jpg |
| Commons file page | https://commons.wikimedia.org/wiki/File:Navigator_of_the_Seas_(ship,_2002)_Departs_San_Pedro_(Port_of_Los_Angeles),_California_(December_2025).jpg |
| Direct file URL | https://upload.wikimedia.org/wikipedia/commons/0/03/Navigator_of_the_Seas_%28ship%2C_2002%29_Departs_San_Pedro_%28Port_of_Los_Angeles%29%2C_California_%28December_2025%29.jpg |
| Creator | Jack Adamenko |
| Licence | **CC0 1.0 Universal** |
| Native dimensions | 4032 × 2268 px (native 16:9), 1.80 MB |
| EXIF | Apple iPhone 11 · 4.25 mm f/1.8 · 1/693 s · ISO 32 · 26 mm equiv · DateTimeOriginal **2025:12:19 16:28:48** |
| AI ruled out | Same reasoning as the primary; same camera, same afternoon, 13 minutes later. |
| **Approval** | **APPROVE WITH ONE DISCLOSED DEVIATION — visually verified at 100 %** |

### Recommended 1600 × 900 crop

| Field | Value |
| --- | --- |
| Crop rectangle (native px) | **left 2020, top 330, right 3720, bottom 1286** |
| Crop size | 1700 × 956 |
| **Scale factor to deliverable** | **0.941 — a downscale. No upscale required.** |
| Rendered proof | `…/scratchpad/lax/crops/CRU-LAX_navigator_1600x900.jpg` |

```python
from PIL import Image
Image.open("Navigator_of_the_Seas_..._December_2025.jpg") \
     .crop((2020, 330, 3720, 1286)) \
     .resize((1600, 900), Image.LANCZOS) \
     .save("CRU-LAX_alt_1600x900.jpg", quality=93)
```

### What I actually see in the shipped crop

The best-looking travel frame found in this whole sweep. Low golden sun on the San Pedro channel. A
cruise ship's **bow enters from the left with perhaps forty passengers lined along the forward rail
watching the harbour go by** — a genuine, unstaged departure moment, the single most saleable thing in
any candidate reviewed. The hull is lit warm cream against a pale blue-gold sky. Across the middle:
the wharf with its fender line, low warehouse buildings with dark red roofs, and tall palms.

**Ship size in frame.** The bow section occupies roughly **44 % of frame width — over the ~40 %
guideline.** Disclosed. It cannot be reduced: the ship's name sits at native x 1763–1960 and any crop
that starts left of x ≈ 2000 puts the wordmark back in frame, while any crop that starts further right
crops into the bow and makes it larger relative to the frame, not smaller.

**Legible ship name?** **No.** `NAVIGATOR OF THE SEAS` is fully legible on the full frame (verified at
3×, `nav_name3x.png`). The crop starts at x = 2020, sixty pixels clear of it. A 100 % tile of the
crop's left edge shows bare plating, hawse pipes and a small draft glyph only.

**Legible line wordmark?** **No.** Funnel excluded by the crop. Separately, I opened a 100 % tile of
the ship's midships and stern in the full frame (`nav_stern100.png`) out of caution: that section
carries **no name and no visible crown-and-anchor either** — which is worth recording, because it means
this photographer's frames of this ship are unusually clean.

**Third-party commercial signage?** **None readable** anywhere in the crop at 100 %.

### The disclosed deviation — read this before using it

**A bank of container gantry cranes occupies the right ~40 % of the frame's width**, in a band about
14 % of the frame height, sitting behind the palms and warehouse roofs. At 100 % they are unmistakably
container gantries with their booms raised, backlit and edged in gold, with the tops of container
stacks faintly visible beneath them (`nav_final_cranes100.png`).

The LAX-specific instruction for this certificate names container cranes and stacks as **disqualifying
clutter**, and that is why this frame is the alternate and not the primary. In its favour: the cranes
are hazed, backlit and read almost as filigree; the cruise ship is unambiguously the hero rather than a
distant speck; and this is emphatically not the Port Canaveral failure mode, where the ships were specks
among silos, tankers and car parks. Against it: they are still container gantries, and the rule was
stated plainly.

**I could not crop them out.** The widest clean region between the ship's name (ends x 1960) and the
first gantry (begins x ≈ 3060) is 1100 px wide, which would need a **1.45× upscale** to reach 1600 px —
outside what this brief permits. Tested, not assumed.

---

## Rejections — every candidate opened

All rows below were downloaded and opened with the Read tool unless the verdict says otherwise.
"100 %" means a native-resolution crop of the suspect region was rendered and opened separately.

### Pexels (Pexels License — free commercial use, no attribution)

| # | ID / title | Native px | What I saw | Verdict |
| --- | --- | --- | --- | --- |
| 1 | 29822601 "Cruise ship and sailboat in Los Angeles harbor" — Navdeep Singh | 5928×3952 | Oceania *Regatta* underway off Long Beach. **100 %: `Regatta` fully legible in script on the hull; the Oceania blue-`O` funnel mark is sharp and large.** Name forward, logo aft — no crop holds the ship and drops both. Flat grey overcast, rusted barge in the foreground. | REJECT |
| 2 | 12088249 "Marina with towering cruise ship" — Nairodreyes | 3648×5472 | `Carnival Radiance` legible twice on the hull, red whale-tail funnel, foreground a thicket of sailboat masts and pilings. | REJECT |
| 3 | 9298008 "Sunset over a bustling harbor" — BasicIggy | 5464×3640 | Genuinely beautiful golden-hour aerial over Queensway Bay. **No cruise vessel at all.** 100 % horizon tile: the entire skyline is container gantries and container stacks. Fails the family subject rule and the freight rule together. | REJECT |
| 4 | 28057370 "Long Beach skyline with harbor at dusk" — Stephen Leonardi | 5236×3921 | Long Beach skyline and marina. No cruise vessel. | REJECT |
| 5 | 39358456 "Gerald Desmond Bridge at twilight" — SolyArtPhotos | 5778×3571 | Long Beach International Gateway across hazy water. No vessel; gantries and a transmission pylon at the edges. | REJECT |
| 6 | 36140979 "Californian beach with cruise ship" — Umayisik | 3089×2048 | **Mislabelled — this is a Mediterranean beach**, not California. Carnival whale-tail funnel offshore. | REJECT |
| 7 | 31438757 "Two iconic ocean liners" — Dinh Phúc Võ | 4678×3119 | Long Beach. Carnival *Firenze* (yellow funnel, blue Costa `C`) beside the Queen Mary. Flat white overcast sky. Reframe tested: right half = Queen Mary only, i.e. no cruise ship; left half = the branded funnel. Neither works. | REJECT |
| 8 | 31438751 "Cruise ship docked at harbor" — Dinh Phúc Võ | 2663×3994 | `CARNIVAL FIRENZE` in large caps across the stern plus `Carnival Fun Italian Style` on the hull. | REJECT |
| 9 | 31438754 "Lighthouse with palm trees and cruise ship" — Dinh Phúc Võ | 4459×2973 | Structurally the right idea — Lions Lighthouse, palms, lawn, ship small at berth. **100 %: the yellow funnel with the blue Costa `C` is enormous and perfectly legible.** Cropping it out removes the only vessel. Flat grey sky, litter in the foreground planting. | REJECT |
| 10 | 31438767 "People walking on marina pier" — Dinh Phúc Võ | 5256×3504 | `Harbor Breeze Cruises` wordmark across the boat, `Karin Lynn` on a second, overcast. | REJECT |
| 11 | 28516445 "Queen Mary and crescent moon" — SolyArtPhotos | 5518×3183 | Handsome night frame, but the vessel is the Queen Mary — a permanently moored hotel, not a cruise ship — with Cunard's red-and-black funnels. | REJECT |
| 12 | 4000923 "Ocean liner at sunset" — Peacefullens | 3528×4410 | Queen Mary at golden hour with the Soviet submarine. `Q U E E N · M A R Y` legible on the bow. Same subject problem. | REJECT |
| 13 | 9298010 "Long Beach Lighthouse and marina at sunset" — BasicIggy | 5464×3640 | Lions Lighthouse aerial. No cruise vessel; Shoreline Village storefront signage across the background. | REJECT |
| 14 | 6702510 "Long Beach Harbor at dusk" — Ambassador of Truth | 4000×2250 | Marina and downtown aerial. No cruise vessel; retail signage. | REJECT |
| 15 | 27920003 "Ship silhouetted against the sunset" — MrAlexPhotography | 7000×4667 | Open ocean from a bridge wing. No port, no berth, no destination cue of any kind. | REJECT |
| 16 | 22912092 "Ships by the shore" — Jules Clark | 5984×3748 | `SAPPHIRE PRINCESS` and `PRINCESS CRUISES` legible; Carnival whale-tail on the second ship. **And it is Cabo San Lucas, not Los Angeles.** | REJECT |
| 17 | 22912024 same scene, same photographer | 5984×3748 | As above. | REJECT |
| 18 | 16260911 "Passenger ship in port with mountain view" — RobertKSO | 4666×3599 | `GOLDEN GATE` and the Golden Gate Ferry roundel. San Francisco Bay. | REJECT |
| 19 | 11822688 "Boats in sea near city" — RobertKSO | 5529×2600 | San Francisco Bay, Bay Bridge, container ship, smoke plume. | REJECT |

### Wikimedia Commons

| # | File | Native px / licence | What I saw | Verdict |
| --- | --- | --- | --- | --- |
| 20 | Cruise Ship Departing Port of Los Angeles - panoramio.jpg — Shane Smith | 5184×3456, CC BY-SA 3.0 | *Ruby Princess* bow-on in warm light. **100 % (4 tiles): the tail of `…PRINCESS` wraps onto the visible port bow, plus a gold bow crest and the Princess seawitch mark on the mast.** Background is a tank-farm dome cluster, warehouses, utility poles and car parks. Reframe tested and **rejected**: every 16:9 crop that excludes the domes makes the ship 63–74 % of frame width — worse, not better. Ship is 47 % of width even at full width. | REJECT |
| 21 | Cruise Ship Departing Port of Los Angeles - panoramio (1).jpg | 5184×3456, CC BY-SA 3.0 | Same ship passing the breakwater. Princess seawitch on the funnel is the brightest object; `RUBY PRINCESS` legible bow and midships; container gantries fill the background. | REJECT |
| 22 | Cruise Ship Passing Los Angeles Harbour Light House - panoramio.jpg | 5184×3456, CC BY-SA 3.0 | `RUBY PRINCESS` legible **twice**, plus a crane-mounted `LAX TERMINALS` sign. | REJECT |
| 23 | World Cruise Center (San Pedro)..jpg — Ulises Icardi | 3048×2286, CC BY-SA 4.0 | `ROYAL PRINCESS / HAMILTON` in large type across the stern; an `EVERGREEN` container ship at the right; chain-link fence across the foreground. Three brands in one frame. | REJECT |
| 24 | Los Angeles World Cruise Center - Berth 91 - Norwegian Star.jpg | 5183×1639, CC BY-SA 3.0 | `NORWEGIAN STAR` on the hull, NCL wave on the funnel, a `SHIPPING` sign, a car park, traffic cones, a painted `STOP` on the asphalt. | REJECT |
| 25 | Cruise ship in Long beach - panoramio.jpg — Erwin Kreijne | 4752×3168, CC BY 3.0 | `Carnival PARADISE` legible across the stern; whale-tail funnel; file is stored rotated 90°. | REJECT |
| 26 | Puerto de Los Ángeles (San Pedro -California-)..jpg | 3186×2390, CC BY-SA 4.0 | Coast Guard basin with cutters, container gantries, industrial sheds. No cruise vessel. | REJECT |
| 27 | Port of Los Angeles and Cabrillo marina.jpg — Harry Chase / LA Times | 3898×2593, CC BY 4.0 | 1970s black-and-white aerial of a coal terminal. | REJECT |
| 28 | Queen Mary and cruise terminal.jpg | 4032×2280, CC BY-SA 4.0 | Queen Mary and the Spruce Goose Dome from the water. Clean and pleasant, but the only vessel is the Queen Mary. | REJECT |
| 29 | Long Beach (30359129614).jpg — Sergei Gussev | 3264×2448, CC BY 2.0 | Structurally the closest Long Beach frame: cruise ship tiny at berth beside the Queen Mary and the Dome, big sky and water. **100 %: the red-white-blue Carnival whale-tail funnel is the single brightest, most recognisable object in the frame**, plus Cunard's red funnels. Disqualifying per the LAX instruction. | REJECT |
| 30 | Long Beach (30373590803).jpg — Sergei Gussev | 3264×2448, CC BY 2.0 | Queensway with the Aquarium of the Pacific. **100 %: no cruise vessel**, and a red commercial sign on a building at the right. | REJECT |
| 31 | Long Beach (31036271892).jpg — Sergei Gussev | 3264×2448, CC BY 2.0 | Carnival ship at berth with the whale-tail funnel unmistakable, Queen Mary alongside, container gantries behind. | REJECT |
| 32 | Long Beach (31037020572).jpg — Sergei Gussev | 3264×2448, CC BY 2.0 | Queen Mary and Dome distant left; container gantries across the entire horizon; no cruise vessel. | REJECT |
| 33 | Long Beach (31179610425).jpg — Sergei Gussev | 3264×2448, CC BY 2.0 | Long Beach skyline across the bay with a tiny Carnival ship at the Dome. **100 %: the whale-tail funnel is still clearly resolvable.** Also soft, hazy and low-contrast. | REJECT |
| 34 | View of Port of Los Angeles and Port of Long Beach from San Pedro (6026504141).jpg | 4000×3000, CC BY-SA 4.0 | Hillside scrub foreground; container terminals across the whole horizon. | REJECT |
| 35 | Panorama in Long Beach.jpg — Kaio mh | 2049×1152, CC BY-SA 4.0 | Carnival funnel plus Queen Mary, heavy JPEG artefacting, muddy sandbar across the bottom half. | REJECT |
| 36 | Hazy Foggy Sunset (99501377).jpeg — Terry Lucas | 1680×1050, CC BY 3.0 | Telephoto of the LA basin at sunset. Beautiful light — and the subject is a forest of container gantries. No vessel. | REJECT |

### Unsplash (Unsplash License)

| # | ID | What I saw | Verdict |
| --- | --- | --- | --- |
| 37 | photo-1633747453733-daf50b62a3cf — Arvind Vallabh | Ultra-wide Long Beach sunset panorama. Container gantries end to end; the Dome and Queen Mary at the far right; no cruise vessel. | REJECT |

### Flickr (CC-filtered search)

| # | File | What I saw | Verdict |
| --- | --- | --- | --- |
| 38 | 15097787327 (`fl3/h15`) | Carnival *Paradise* photographed from directly overhead at the Long Beach berth. `PARADISE` legible on the stern; whale-tail funnel dead centre; the frame is a tall vertical unsuited to 16:9. | REJECT |
| 39 | 21253473961 (`fl3/h09`) | An NCL ship beyond the Long Beach breakwater — distant and small, which is the right instinct. But: no berth or terminal in frame, NCL wave mark on the funnel, flat grey light, and only 1024 px available without an owner/licence lookup. | REJECT |

### Downloaded but not individually opened — `NOT VISUALLY VERIFIED`, do not count

Pexels 23880052, 37646996, 37646994 (Queen Mary, daytime); 10450701, 10450703, 37740414, 37740415,
23880096, 11742762, 6702509 (Long Beach / LA lighthouse and marina aerials, no cruise vessel in the
thumbnail); 35569686 (titled "Carnival Panorama", rejected on the title). Commons
`Ports_of_Long_Beach_and_Los_Angeles_After_Takeoff…` (Wikimedia 429 defeated every retry).

### Triaged on contact sheets — 92 further results

Three rendered contact sheets (`fl_sheet.jpg`, 23 results; `fl2_sheet.jpg`, 31; `fl3_sheet.jpg`, 38)
covering Flickr CC searches for *long beach cruise terminal*, *vincent thomas bridge cruise ship*,
*san pedro harbor sunset*, *long beach cruise ship sunset* and *world cruise center los angeles*.
Content was overwhelmingly: Vincent Thomas Bridge portraits with no vessel, container terminals, the
Queen Mary, the Spruce Goose Dome, USS Iowa, the SS Lane Victory, the Waterfront Red Car, and
onboard-deck snapshots. Two were promoted to individual opens (rows 38 and 39); the rest failed on
subject, branding or freight at thumbnail size.

---

## Why Los Angeles is structurally hard — and how it was solved

Four forces work against this certificate, and it is worth recording them so the next sweep does not
rediscover them:

1. **San Pedro's cruise berths sit inside the largest container complex in North America.** Any wide
   or elevated view of the World Cruise Center contains gantries. Any view across the main channel
   contains gantries. This eliminated roughly half of everything found.
2. **The homeport lines are Carnival, Princess and Royal Caribbean.** Carnival's whale-tail funnel is
   a high-contrast mark that survives distance, haze and silhouetting — the exact conditions the V2
   rule relies on to suppress branding. It killed the best Long Beach frame (row 29) at 100 %.
3. **Long Beach's photogenic waterfront has no cruise ship in it.** The lighthouse, Shoreline
   Village, the marina and the skyline are all shot from angles where the cruise terminal is behind
   the camera. The frames with the best light contained no vessel; the frames with a vessel had the
   Dome and a Carnival funnel in them.
4. **The Queen Mary is a decoy.** She is the most-photographed ship in the region by a wide margin and
   she is not a cruise ship. Eight otherwise usable Long Beach frames dissolve on this point alone.

**What broke it:** two CC0 iPhone frames uploaded to Commons in December 2025, shot thirteen minutes
apart from the San Pedro side of the main channel at golden hour. In both, the photographer was
shooting the *harbour* with a ship passing through it. Both fail on the full frame because the ship's
name is legible; both are recovered by a crop that drops the name band — the Port Canaveral move,
applied twice, at zero cost, on the most permissive licence there is.

---

## Notes for the coordinator

- **Resolution ceiling.** Both files are 4032 × 2268 native, and both nominations use only part of that
  frame. **1600 × 900 is comfortable** (primary is a 1.000× straight crop; alternate 0.941×). A
  **2× retina hero at 3200 × 1800 would need 2.00× and 1.88× upscales respectively — flagged, and I do
  not recommend it.** For a full-bleed 2560 px header, neither file is sufficient.
- **Licence.** CC0 on both. There is no attribution obligation and no share-alike, so cropping,
  overlaying and compositing are entirely unconstrained. Crediting *Jack Adamenko / Wikimedia Commons*
  is still good practice.
- **Pick order.** If the container-crane rule is applied strictly, use the **primary** and accept the
  Coast Guard cutters. If the emotional register of the image matters more than a backlit crane band
  in the right third — and for a cruise landing page it may — the **alternate is the better-looking
  photograph by a clear margin**, and the passengers on the bow rail are the single strongest human
  cue found anywhere in this sweep. Both are pixel-verified; this is a taste call, not a compliance one.
- **If neither is acceptable, CRU-LAX is unresolved.** I found nothing else in 41 opens and 92 triaged
  thumbnails across Pexels, Unsplash, Wikimedia Commons, Openverse and Flickr. Nothing compliant sits
  behind a paywall either — Unsplash's Los Angeles port inventory is cargo containers and Getty-tier
  Newport Beach aerials, and Pexels has no LA cruise-berth photograph at all beyond the branded ones
  listed above. **Buying stock would not help here; the gap is in what exists, not in what is free.**

## Working files (scratch, not committed)

```
…/scratchpad/lax/wm_quantum.jpg                                 native primary source
…/scratchpad/lax/wm_navigator.jpg                               native alternate source
…/scratchpad/lax/crops/CRU-LAX_quantum_1600x900.jpg             recommended primary crop
…/scratchpad/lax/crops/CRU-LAX_navigator_1600x900.jpg           recommended alternate crop
…/scratchpad/lax/crops/q_name3x.png, nav_name3x.png             the wordmarks the crops exclude
…/scratchpad/lax/crops/q_final_cutters100.png                   "U. S. COAST GUARD" at 100 %
…/scratchpad/lax/crops/nav_final_cranes100.png                  the container gantries at 100 %
…/scratchpad/lax/crops/nav_final_leftedge100.png                bow at 100 %, no lettering
…/scratchpad/lax/fl_sheet.jpg, fl2_sheet.jpg, fl3_sheet.jpg     92-result triage sheets
```

No repo file other than this report was created or modified.

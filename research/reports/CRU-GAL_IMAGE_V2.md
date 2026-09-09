# CRU-GAL image acquisition — V2 (pixel-verified)

**Certificate:** CRU-GAL / `galveston-cruise` / Galveston Cruise
**Port:** Port of Galveston, Texas (Galveston Ship Channel / Pelican Island)
**Brief applied:** `research/IMAGE_BRIEF_V2.md`
**Date:** 2026-09-09
**Scope:** images only. No pricing work performed. No certificate page or production image touched. No repo file
modified other than this report.

---

## Result in one line

**One compliant frame exists for Galveston at zero budget, and it is on Unsplash.** Everything else — 28 images
downloaded and opened, plus ~44 more triaged from contact sheets — failed on legible hull branding, on freight/oil
industrial content, on third-party signage, or on a NonCommercial/NoDerivatives licence.

- **PRIMARY:** *"A fisherman on a pier overlooking a cruise ship"* — Gower Brown (@gbnl), Unsplash License,
  Seawolf Park, Galveston TX, 6016 × 4016 — **visually verified at 100 % and at 3× native**
- **ALTERNATE:** the **same source, a materially different 16:9 framing** (tighter, pier-led). See "Alternate" below.
- **No second independent Galveston image survived.** Stated honestly rather than padded. The three best
  near-misses and exactly why they fail are listed in "The three that nearly worked".

---

## PRIMARY — visually verified

| Field | Value |
| --- | --- |
| Title | *A fisherman on a pier overlooking a cruise ship* |
| Photo page | https://unsplash.com/photos/a-fisherman-on-a-pier-overlooking-a-cruise-ship-UCfGAgCRtNk |
| CDN original | `https://images.unsplash.com/photo-1779722769615-3e8c6cb102fe?q=100` (returns the full 6016 × 4016 file) |
| Creator | **Gower Brown** — Unsplash `@gbnl` |
| Licence | **Unsplash License.** Free for commercial use, no attribution required, modification and cropping permitted. **No share-alike, no NonCommercial, no NoDerivatives.** Not `premium_photo-`, not Unsplash+, not Getty — checked on the photo page, which shows the plain "Free to use under the Unsplash License" banner, no paywall interstitial. |
| Stated location | **Seawolf Park, Seawolf Park Boulevard, Galveston, TX, USA** — the public fishing pier on Pelican Island, directly across the Galveston Ship Channel from the Port of Galveston cruise berths. Destination-correct, not a stand-in. |
| Published | 25 May 2026 |
| Native dimensions | **6016 × 4016** (24.3 MP, 3:2) |
| Camera | **Nikon D750** (stated on the Unsplash photo page) |
| AI ruled out | Unsplash's CDN strips EXIF from every file it serves, so the camera-metadata half of the screen cannot be run on the downloaded bytes — the same limitation the brief documents for Pexels. Running the second half instead: **6016 × 4016 is the exact native full-frame sensor geometry of the Nikon D750**, uncropped and unrounded, and it matches the camera the photo page names. The frame also carries the physical signatures of a long lens on a real scene — a genuine depth-of-field gradient (pier sharp, ship soft, far shore softer), atmospheric haze that increases with distance, and motion-consistent chop. Reasoned call: real capture, not generator output. |
| **Approval** | **APPROVE — visually verified (full frame, 1600 px delivery render, 100 % native crops of every hull/quay/foreground region, 3× magnification of the bow name)** |

### What I actually see in this image

A long lens from the Seawolf Park fishing pier, looking north-west across the Galveston Ship Channel. An
**Oasis-class Royal Caribbean ship lies at a Port of Galveston cruise berth** in the middle distance under flat
overcast light. A **red-and-white tug/pushboat sits alongside her at the quay**; the **concrete bulkhead and quay
face, port sheds, light masts and a second white vessel** (Bolivar-ferry type, right of frame behind the treeline)
establish the berth. In the foreground right, a man works at a cleaning table on the pier with four rods propped on
the rail. Big, unbroken chop fills the whole lower-left of the frame.

**Ship size in frame.** Measured at native: bow at x ≈ 965, stern at x ≈ 3699 → **2734 px, 45.4 % of the 6016 px
frame width**. In the recommended delivery crop it reads **55 %**. **This is over the brief's "under ~40 %"
guideline and I am flagging it rather than burying it.** It cannot be reduced: there is no more frame to the left
(the bow is 965 px from the edge) and everything to the right of x ≈ 4980 carries brand marks, so widening the crop
trades a size miss for a branding failure. What the 40 % rule exists to prevent — a legible name — is verified
absent below at 3× native, so the failure mode the rule guards against does not occur here.

**Legible ship name?** **No.** The bow carries the operator's cursive script. Cropped straight out of the
**native-resolution** file at x 1050–2350 and again at **3× magnification** (`z_bow3x.png`), it resolves to a
low-contrast grey smear on white: word-shapes are visible, individual letters are not, and no reading is possible.
Three things suppress it — the ship is outside the plane of focus (the photographer focused on the pier),
~1.5 km of humid Gulf haze sits between camera and hull, and the mark is grey-on-white rather than a colour break.
At the 1600 px delivery size it is downscaled a further **0.32×**, i.e. rendered as texture. Nothing to read.

**Legible line wordmark?** **No.** The funnel was cropped at native and magnified 2× (`z_funnel2x.png`): twin
exhaust uptakes inside a curved white housing, **no crown-and-anchor, no logo of any kind, no colour mark**. No
Carnival whale-tail anywhere in the frame — the disqualifying mark the parent brief called out is simply not
present, because this is not a Carnival berth in this photograph.

**Third-party commercial signage?** **None in the delivery crop — but three brands exist in the full frame and the
crop is what removes them.** At 100 % native the far-right of the uncropped image carries **"Coleman"** on a cooler
lid (fully legible), **"Academy SPORTS+OUTDOORS"** on a red wagon (fully legible), and a **"FISH ID CHART"** board
with a city seal (fully legible). This is exactly the reframe case the brief describes: all three sit at
native x ≥ 5140, and **every recommended crop below stops at x = 4960**, dropping them entirely. A striped drink
cup at x 4985–5065 and a small green packet at x ≥ 5080 are also excluded by the same edge. The quay, tug, far
shore, second vessel, bait buckets and the pier furniture inside the crop were each magnified at native and carry
**no legible text**: the only sign in the frame is a small round red-circle prohibition pictogram on the pier
(no wordmark), and the bait buckets are plain green bin-liners.

**Freight / oil risk.** Clean. **No tank farm, no gantry cranes, no jack-up rigs, no container stacks, no
refinery stacks.** This matters more in Galveston than anywhere else in the cruise family — the Texas City
refinery complex and the Pelican Island rig lay-up ruined a large share of the candidate pool (see rejection list),
and this camera position happens to face away from both.

**Overlay space.** Excellent, and better than the two approved frames in the brief. In the recommended crop the
top ~28 % is unbroken pale sky and the lower-left ~60 % is unbroken water. Either band, or an L-shaped block
across both, takes a translucent hero or header without competing with detail.

**Vibe test.** Passes. It is a real Gulf-coast summer day — a man fishing off a public pier with a cruise ship
behind him. It is warm and human rather than glossy, and it is unmistakably a *port at leisure*, not freight. No
razor wire, no wheelie bins, no power lines, no car park, no paramedic truck.

**Light.** Bright overcast, and the brief's light criterion is satisfied by its third clause — **"overcast
distance."** The haze is doing precisely the job golden hour does in the Port Canaveral approval: flattening the
hull and suppressing the wordmark without any editing. This is not a sunset frame and I am not claiming it is.

---

## Recommended delivery crops — rendered with PIL, all downscales

Deliverable is **1600 × 900**. Source is 6016 × 4016, so **every option below is a reduction; nothing anywhere in
this report requires upscaling above 1.0×.**

| Crop | Native box (L, T, R, B) | Crop size | Scale to 1600 × 900 | Ship % of frame | Rendered file |
| --- | --- | --- | --- | --- | --- |
| **E — RECOMMENDED** | (0, 250, 4960, 3040) | 4960 × 2790 | **0.323× (downscale)** | 55 % | `cropE.png` |
| **C — alternate framing** | (0, 600, 4960, 3390) | 4960 × 2790 | **0.323× (downscale)** | 55 % | `cropC.png` |
| D — pier-led, no person | (0, 700, 4750, 3372) | 4750 × 2672 | **0.337× (downscale)** | 58 % | `cropD.png` |
| A — **do not use** | (0, 640, 5100, 3509) | 5100 × 2869 | 0.314× | 54 % | `cropA_1600.png` |

Rendered files live in the working directory
`/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/galv/`
(scratch, not the repo).

- **Crop E is the recommendation.** It gives the largest clean sky band (top ~28 %) above the ship and the largest
  clean water field (lower-left ~60 %), with the fisherman anchoring the right edge. Best overlay geometry of the four.
- **Crop C** is the same right edge with the horizon dropped: more pier, more foreground rods, less sky. Use it
  where the overlay sits low.
- **Crop D** removes the fisherman entirely for a pure port-and-pier frame; it costs 3 points of ship-width ratio.
- **Crop A is listed only to be ruled out.** Its right edge at x = 5100 pulls the striped drink cup and the edge of
  the red wagon back into frame. It is safe on the three big wordmarks but it is the wrong edge — use 4960.

**The right edge must not go past native x = 4980 in any reframe.** That is the hard boundary between a clean
frame and "Coleman / Academy / FISH ID CHART".

---

## ALTERNATE — visually verified

**Crop C of the same source** (box `(0, 600, 4960, 3390)`, 0.323× downscale, rendered and opened).

I am not going to dress a second image up as an alternate when there isn't one. The alternate here is a genuinely
different 16:9 composition off the same 24 MP negative — horizon lower, pier and rods dominant, sky reduced —
which is a real editorial choice for a different overlay layout, and it is covered by the same unencumbered
Unsplash License. It was rendered at delivery size and opened; the same 100 % branding checks apply because it
shares crop E's right edge.

**No second independent Galveston frame passed.** See below.

---

## The three that nearly worked, and exactly why they don't

These are worth recording so the next sweep does not spend budget re-finding them.

**1. Golden-hour Galveston harbour, tall-ship mast + cruise bow + sailing yacht — Flickr `9320150577`**
(flickr.com/photos/galvestonisland/9320150577). Compositionally the best frame located in the entire sweep: dusk
cloud, a cruise ship bow at berth occupying only ~13 % of frame width, *Elissa*'s rigging at the left edge, a
yacht mid-frame, people on the quay. **Licence: CC BY-NC-ND 2.0.** NonCommercial kills it for a commercial
certificate and NoDerivatives kills the crop as well. Unusable, and unfixable at zero budget. Opened and looked at;
recorded here purely so it is not re-nominated.

**2. "Cruise ships return to Galveston ports" — U.S. Coast Guard, Flickr `36131733674`** (2400 × 1718). A long
wharf leading to a cruise bow, gangway and terminal in frame. Two problems, either fatal. **Composition:**
**"CARNIVAL VALOR"** is legible on the bow at the delivered resolution, plus a second "CARNIVAL …" on the far bow
— central, repeated, uncroppable, exactly the case the brief says reframing cannot fix. **Licence:** the Flickr
account tags it CC BY-NC-ND 2.0, though the caption credits "U.S. Coast Guard photo by Petty Officer 2nd Class
Jonathan Klingenberg", which would make it PD-USGov. That rights conflict is moot given the wordmark, but flagging
it: **Coast Guard News Flickr imagery is routinely mistagged NC-ND and is very likely public domain** — a useful
lead for other ports, not for this one.

**3. "Cruise Ship & Strand District, Galveston" — Commons, Patrick Feller, CC BY 2.0, 3483 × 2354.** The
destination cue the parent brief specifically asked about: a cruise ship rising behind the historic Strand.
**Rejected on sight.** "CROWN PRINCESS" is legible twice (superstructure and bow), and the streetscape carries
"OLD GALVESTON SQUARE", "COL. BUBBIE'S STRAND SURPLUS SENTER" and "ANTIQUES · COLLECTIBLES" — three third-party
commercial signs spread right across the frame, plus jack-up rig derricks at the right edge and a monochrome
treatment. The marks are distributed, not localised, so no reframe recovers it. **The Strand-plus-ship idea is
sound and this is the only Commons execution of it; it fails on content, not on concept.**

---

## Full candidate list — 28 images downloaded and opened

Every row below was fetched to disk and opened with the Read tool. "Opened" means the image itself, not a
thumbnail or a metadata page.

### Unsplash

| # | Photo | Creator / id | Size | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Fisherman on pier overlooking a cruise ship, **Seawolf Park Galveston** | Gower Brown · `UCfGAgCRtNk` | 6016 × 4016 | **APPROVE — visually verified** |
| 2 | Aerial, *Carnival Breeze* departing | Cody McLain · `IqiphbYPMmk` | 2400 × 1798 | REJECT — "CARNIVAL BREEZE" legible on bow and hull, Carnival logo on hull, red whale-tail funnel dead centre. Ship ≈ 90 % of frame. |
| 3 | *Carnival Breeze* under way | Starla Sims · `60a3GZmqI-A` | 2400 × 2036 | REJECT — "CARNIVAL BREEZE" legible, Carnival wordmark + logo on hull, whale-tail funnel. |
| 4 | Product tanker at berth | Dan Cutler · `AUqIGVv7uEA` | 2400 × 3600 | REJECT — "BRIGHT DAWN" legible on the bridge front; freight, portrait, no passenger ship. |
| 5 | Jack-up rig lay-up, Pelican Island | Secret Travel Guide · `eJq_loJbM40` | 2400 × 1800 | REJECT — six drilling rigs, "POSH XANADU", "LEWEK EXPRESS"; heavy oil-industrial. No cruise ship. |
| 6 | Jack-up rig lay-up (second angle) | Linda Finkin · `8iry1wNGNtI` | 2400 × 1800 | REJECT — same rig row, orange OSVs, dry dock. Reads as an oilfield, not a vacation. |
| 7 | USS *Lexington* at pier | Misty McWain · `edHSKVb1uJQ` | 2400 × 1800 | REJECT — museum aircraft carrier, Corpus Christi, not Galveston, not a cruise ship. |
| 8 | Charter boat at sunset | Hameen Reynolds · `FLspfF_75dg` | 2400 × 1600 | REJECT — "Buccaneer" + a phone number legible; Port Aransas; small craft. |
| 9 | USS *Stewart* (DE-238), Seawolf Park | Gower Brown · `OeeNNhuZTFw` | 2000 × 2996 | REJECT — naval museum ship, "DE238" and an interpretive board legible; portrait; no cruise ship. |

### Pexels

| # | Photo | Creator / id | Verdict |
| --- | --- | --- | --- |
| 10 | Wooden pier in port, Galveston | F. J. Zangerolame · `20528624` | REJECT — shrimp-boat dock in monochrome; "LITTLE B…", "St. Vincent", a hull number legible. No passenger ship. |
| 11 | Aerial, oil tanker at sunset off Galveston | Ojas Narappanawar · `4606157` | REJECT — freight tanker, no port, no passenger ship. |
| 12 | Ship in a harbor | Jaxon M. Willis · `12485402` | REJECT — bulk carrier at a Galveston wharf; warehouses, vehicle-import lot. Freight. |
| 13 | A cargo ship docked on a pier | Jaxon M. Willis · `12485413` | REJECT — same bulk carrier, tighter. Freight. |
| 14 | Cargo ships on the port | Jaxon M. Willis · `12485405` | REJECT — bulk carrier + ro-ro bow, car-storage lot. Freight. |
| 15 | Illuminated ship at dusk | NC Farm Bureau Mark · `16678060` | REJECT — "MONTREAL / MONROVIA" legible on the stern; freighter; not Galveston. |
| 16 | Ship against a cloudscape at dusk | NC Farm Bureau Mark · `16678066` | REJECT — "OCEAN FREEDOM" legible; deck cranes, conveyor. Freight. |

### Wikimedia Commons

| # | File | Licence / size | Verdict |
| --- | --- | --- | --- |
| 17 | `Navigator of the Seas 2014 Galveston 2.JPG` | CC BY-SA 4.0 · 4320 × 2880 | REJECT — "NAVIGATOR OF THE SEAS" legible on the bow; ship ≈ 65 % of frame; "DRAKE" on a black bulk carrier at right; jack-up rig legs and a grain elevator behind. |
| 18 | `Navigator of the Seas 2014 Galveston 3.JPG` | CC BY-SA 4.0 · 4178 × 2787 | REJECT — same name legible, same "DRAKE", ship ≈ 80 % of frame. |
| 19 | `Cruise Ship & Strand District, Galveston, Texas 1301261308BW.jpg` | CC BY 2.0 · 3483 × 2354 | REJECT — see "near-misses" above. Distributed signage + legible ship name; no reframe. |
| 20 | `Port of Galveston Texas, June 2016.jpg` | CC BY 2.0 · 5760 × 3840 | REJECT — city view; "STARBUCKS COFFEE" and "JIMMY JOHN'S" both legible; parking lots. No ship. |
| 21 | `Port of Galveston Texas, June 2016 - Oceanstar.jpg` | CC BY 2.0 · 5760 × 3840 | REJECT — beautiful golden-hour Pier 21 view, but "OCEAN STAR", "ExxonMobil" and a Shell pecten all legible on the rig museum. No cruise ship. |
| 22 | `Port of Galveston Texas, June 2016 - Fisherman's Wharf.jpg` | CC BY 2.0 · 5760 × 3840 | REJECT — "Fisherman's Wharf" and "JIMMY JOHN'S" legible. No cruise ship. |
| 23 | `Galveston, Texas 2022 panorama.jpg` | CC BY-SA 2.0 · 3999 × 2250 | REJECT — shot *from* the ship, so no ship in frame; "Riondo's Ristorante" legible; coach park and lorry trailers in the foreground. |
| 24 | `CrownPrincessGalveston1.JPG` | **CC0** · 2272 × 1704 | REJECT — "CROWN PRINCESS" legible twice, Princess seawitch logo on the superstructure, terminal wayfinding signs, parked cars, shot through a car window. Best licence in the sweep, worst content. |
| 25 | `GrandeurOTSGalveston.jpg` | CC BY-SA 4.0 · 4032 × 3024 | REJECT — "GRANDEUR OF THE SEAS" legible on the bow; ship spans ~95 % of frame width; a "NO FISHING" sign on the rail. Uncroppable. |

### Flickr

| # | Photo | Licence / id | Verdict |
| --- | --- | --- | --- |
| 26 | Cruise ships return to Galveston ports (USCG) | tagged CC BY-NC-ND 2.0 · `36131733674` · 2400 × 1718 | REJECT — "CARNIVAL VALOR" legible on the bow, plus a second Carnival bow mark; skip, dumpster, security fencing, crates. Licence conflict noted above. |
| 27 | Princess ship over the port foreground | `1592855691` · 1024 px | REJECT — ship ≈ 72 % of frame; foreground is cranes, storage tanks and orange workboats under flat grey. Industrial, not vacation. |
| 28 | Galveston port waterfront panorama | `2521048238` · 1024 × 341 | REJECT — Carnival's red whale-tail funnel clearly resolved at berth (the brief's named disqualifier), plus gantries, a jack-up rig and refinery stacks. Also far too small: 1024 × 341 cannot make 1600 × 900 without a **1.56× upscale**. |

### Triaged from contact sheets (opened as sheets, not individually downloaded)

Two Flickr CC contact sheets covering **44 further images** were built and opened
(`fl_sheet.png`, 23 images; `fl2_sheet.png`, 21 images). None reached individual-download stage. Recurring failure
modes, for the record: **visible photographer watermarks** ("© Mike Fisher 2017/2020/2024" on three otherwise
interesting frames including a lovely willet-with-cruise-ship-bokeh shot), **Carnival whale-tail funnels**
(four frames), **Disney funnel and logo**, legible **"Coca-Cola"** street signage, container gantries, holiday
snapshots, and a mug reading "Galveston Island, Tx".

### NOT VISUALLY VERIFIED — do not count

Wikimedia rate-limiting (HTTP 429 on originals) defeated every retry with exponential backoff on five files. Each
is marked unverified per the brief, and none is nominated:

- `Navigator of the Seas 2014 Galveston 1 (cropped).JPG` — **NOT VISUALLY VERIFIED**
- `CrownPrincessatGalveston.JPG` — **NOT VISUALLY VERIFIED**
- `Galveston, Texas - 52294688963.jpg` — **NOT VISUALLY VERIFIED**
- `Port of Galveston Texas, June 2016 - Sailing Ship.jpg` — **NOT VISUALLY VERIFIED**
- `Galveston Texas, City View from Port, June 2016.jpg` — **NOT VISUALLY VERIFIED**

The two *Navigator* siblings that **were** opened both fail on a legible bow name, so the third is very unlikely to
differ. `CrownPrincessatGalveston.JPG` is the sibling of a file that fails on a doubled legible name.

---

## Search coverage

**Pexels (searched first and hardest, per the brief):** `galveston cruise ship`, `galveston`, `galveston texas`,
`galveston island`, `galveston harbor`, `port of galveston`, `texas cruise ship`, `cruise ship terminal`. Roughly
150 distinct results enumerated. **Finding: Pexels' Galveston corpus is beach, Pleasure Pier, lifeguard towers and
shrimp boats. There is no cruise ship at a Galveston berth on Pexels at all.**

**Unsplash:** `galveston`, `galveston texas`, `galveston island`, `galveston cruise`, `galveston harbor`
(0 results), `galveston ship`, `port of galveston` (0 results), `cruise ship texas`, `cruise ship port`, plus the
photographer's full profile. **Finding: exactly one Galveston cruise-berth frame exists on Unsplash — the primary.**
Four Getty/Unsplash+ items appeared in the Galveston results (Texas flag, two aerials, a harbour sailboat); all are
paywalled, none was pursued, and per the zero-budget standing constraint no purchase is proposed.

**Wikimedia Commons:** MediaSearch on four query forms; `Category:Cruise ships in Galveston, Texas` walked in full
(6 subcategories, 7 files — the complete Commons universe for this subject, and all of it assessed here);
`Category:Port of Galveston` does not exist.

**Openverse:** four queries across two licence sets and multiple pages. As the brief predicts, it returned
Commons files already seen, plus the *Port of Galveston June 2016* series.

**Flickr:** five CC-filtered searches, ~50 results harvested via WebFetch, `_n → _b` promoted to 1024 px, triaged in
two contact sheets, with `/sizes/o/` lookups on the two that warranted originals.

All fetch mechanics from the brief held exactly as documented: Pexels and Unsplash search pages needed WebFetch and
their CDNs served plain curl; Wikimedia 429'd on originals and needed serial requests with backoff; Flickr's
`_n → _b` swap worked on the same secret every time.

---

## Honest summary for the coordinator

There is **one** frame. It is genuinely good — destination-correct (Seawolf Park, the classic Galveston
cruise-watching spot), a real ship at a real Port of Galveston berth with a tug alongside and a second vessel in
frame, verified brand-free at 100 % and at 3× native, on the cleanest licence available, at 24 MP with room to
crop three different ways without ever upscaling, and with the best overlay geometry of any cruise frame in this
programme so far.

It carries **one honest defect: the ship is 45 % of the native frame and 55 % of the delivery crop, against a
"~40 %" guideline.** That number cannot be improved — the only way to widen the frame is to re-admit the Coleman
cooler and the Academy wagon. I judged an unreadable name at 55 % to be the better trade than three legible
consumer brands at 45 %, and I have shown the working so the call can be reversed if you disagree.

Everything Galveston-specific that is *not* this photograph is either wearing a Carnival funnel, wearing its own
name in large type, standing next to a drilling rig or a grain elevator, or licensed NonCommercial.

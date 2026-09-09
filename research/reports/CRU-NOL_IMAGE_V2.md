# CRU-NOL — image acquisition V2 (New Orleans cruise)

Certificate: **CRU-NOL / new-orleans-cruise / New Orleans Cruise**
Scope: image only. No pricing work performed.
Governing brief: `research/IMAGE_BRIEF_V2.md` (read in full before searching).
Date: 2026-09-09

---

## Verdict

**NO CANDIDATE PASSES. New Orleans still has zero usable artwork.**

38 candidates were located, downloaded and **opened with the Read tool and looked at**. Every one
fails at least one hard V2 criterion. There is no primary and no alternate to nominate.

I am reporting this plainly rather than nominating a third image that would fail the coordinator's
pixel check for the third time. Two near-misses and the exact reason each one dies are documented
in §4, together with the structural reason New Orleans is hostile to the V2 formula (§5) and the
options that remain (§6).

---

## 1. Method

1. Wikimedia Commons: full-text search (12 queries), category enumeration
   (`Port of New Orleans`, `Ships in New Orleans`, `Cruise ships in New Orleans` and its seven
   per-ship subcategories, `Erato Street Cruise Terminal`, `Woldenberg Park`), and geosearch at
   three coordinate points (the Julia/Erato Street terminals, the Canal Street wharf, Algiers Point).
2. Pexels: four search pages (`new orleans cruise ship`, `new orleans river`, `new orleans skyline`,
   `cruise ship port dusk`).
3. Unsplash and Openverse APIs both now require authorization (HTTP 401/403 through the proxy);
   Unsplash was reached only via web search, which surfaced no New Orleans cruise result.
   Flickr's search page renders thumbnails without metadata and could not be enumerated.
   **This is a real gap** — see §6.
4. Every candidate below was downloaded to scratch and **opened**. Wikimedia rate-limits the
   `api.php` endpoint hard from this egress IP; downloads were switched to direct
   `upload.wikimedia.org` MD5-path thumbnails at the **1280px** bucket (1600px returns HTTP 400).

---

## 2. Rejection list — Wikimedia Commons

All rows: **visually verified** (downloaded and opened).

| # | File (commons.wikimedia.org/wiki/…) | Creator | Licence | Dimensions | What I actually saw | Verdict |
|---|---|---|---|---|---|---|
| C01 | `File:Cruise ships Mississippi River in New Orleans.JPG` | MusikAnimal | CC BY-SA 4.0 | 6000×4000 | **This is the previously rejected primary — confirmed on sight.** "NORWEGIAN DAWN" legible on the stern, "CARNIVAL" on the second ship, "OUTLET COLLECTION RIVERWALK" mall sign at right, refrigerated trucks on the wharf. | REJECT |
| C02 | `File:Cruise ships Mississippi River in New Orleans 2.JPG` | MusikAnimal | CC BY-SA 4.0 | 6000×4000 | Same session, wider. "CARNIVAL DRE—" and "NORWEGIAN DAWN" both legible. Ships fill the right ~50% of the frame. Good bridge + sky, but two wordmarks. | REJECT |
| C03 | `File:Mississippi River - City of New Orleans and the Bridge, February 2023.jpg` | Mussi Katz | CC0 | 5838×3892 | Paddlewheel steamboat, not an ocean cruise ship. "CITY of NEW ORLEANS" printed three times (bow board, hull, pilothouse). | REJECT |
| C04 | `File:New Orleans CBD from Algiers Point at Dusk December 2006.jpg` | MeRyan | CC BY 2.0 | 3008×2000 | Genuinely beautiful dusk skyline across the river with huge clean water. **No cruise ship at all.** Red "Sheraton" and "Marriott" rooftop signs legible. | REJECT (no ship) |
| C05 | `File:Cruise ship in New Orleans.jpg` | Iulus Ascanius | Public domain | 2032×1524 | Carnival Fantasy-class mid-river in warm light. Red/white/blue Carnival whale-tail funnel dead centre; "Fantasy" on the superstructure. Ship ~65% of frame width, **not at berth**. | REJECT |
| C07 | `File:Mississippi River - from Woldenberg Park to Algiers Point, New Orleans, 1990.jpg` | Infrogmation | CC BY-SA 4.0 | 5857×4083 | Grainy 1990 B&W. Steamboat *Natchez* and a towboat lettered "MID-SOUTH TOWING COMPANY". No ocean ship. Railings across the foreground. | REJECT |
| C08 | `File:Carnival Elation turning around to leave the Port of New Orleans 5.JPG` | Ebgundy | CC BY-SA 3.0 | 3943×2919 | Good composition under the Crescent City Connection, but the red Carnival whale-tail funnel is the visual subject; "Elation" and "CARNIVAL ELATION" both readable. Pink industrial warehouse at left. | REJECT |
| C11 | `File:Norwegian Breakaway docked at the Port of New Orleans.jpg` | Penelopechicken123 | CC BY-SA 4.0 | 3024×4032 | "NORWEGIAN BREAKAWAY" in large black type across the stern. Portrait format. Photographer's white sleeve intrudes bottom-right. Mooring bollards are nice — the wordmark is fatal. | REJECT |
| C12 | `File:Norwegian Sun docked at Port of New Orleans.jpg` | Gnovick | CC BY 3.0 | 4288×2848 | **Closest aesthetic near-miss.** Blue-hour, ship at berth, wharf sheds, glowing skyline, long golden reflection on the river. Magnified 3× to check: **"NORWEGIAN SUN" is unambiguously legible** on the bow; NCL funnel mark visible; **"Sheraton" and "Hilton" rooftop signs clearly legible** in the skyline. Ship ~65% of frame width. | REJECT — see §4 |
| C13 | `File:Carnival Valor curise ship at New Orleans September 2019.jpg` | Bernard Spragg. NZ | CC0 | 5090×3131 | "CARNIVAL VALOR" in huge blue type on the superstructure *and* again on the bow. Funnel dominant. Construction cranes at left. | REJECT |
| C14 | `File:New Orleans October 2024 - Riverwalk Ship.jpg` | lukeharold | CC0 | 3200×2400 | "OUTLET COLLECTION / RIVERWALK" fills the left half; ship is the tanker "GLOBAL HOPE". No cruise ship. | REJECT |
| C15 | `File:Aerial - New Orleans Skyline 2013 - panoramio.jpg` | panoramio user | CC BY 3.0 | 4320×3240 | Industrial wharf sheds, shipping containers, parked cars. No cruise ship. Burned-in "XEON ©" watermark bottom-right. HDR-crunchy. | REJECT |
| C20 | `File:New Orleans, LA (French Quarter) - Looking down river from Westin.jpg` | JasonParis | CC BY 2.0 | 3600×2700 | Several hundred parked cars, a derelict brick building, power pylon. No cruise ship. | REJECT |
| C21 | `File:Crescent City Connection from Westin Balcony.jpg` | Eira Tansey | CC BY 2.0 | 1600×1200 | Red "RIVERWALK" sign, "Audubon Aquarium of the Americas" signage, moored barges, overhead wire. No cruise ship. | REJECT |
| C24 | `File:Riverboat City of New Orleans Tour - Crescent City Connection bridge.jpg` | Daquella manera | CC0 | 9148×3846 | Handsome wide panorama of the bridge with big sky and water — but **no cruise ship**, and the right third is container-stacked wharf. | REJECT (no ship) |
| C25 | `File:New Orleans from the Air September 2019 - French Quarter and CBD - River to Lake.jpg` | George Bannister | CC BY 2.0 | 4032×3024 | Aerial over the French Quarter at dusk. Only vessel is the small ferry. No cruise ship. | REJECT |
| C26 | `File:Skyline - New Orleans, Louisiana, USA - Ca. December 29, 1987.jpg` | Giorgio Galeotti | CC BY-SA 4.0 | 7500×5000 | 1987 skyline from Algiers. "Sheraton" and "Marriott" legible; *Natchez* at the wharf. No cruise ship. | REJECT |
| C27 | `File:New Orleans, LA (Central Waterfront) - Canal Ferry Lights.jpg` | JasonParis | CC BY 2.0 | 2857×3810 | It is a photograph of the "Canal Street Ferry Terminal / CLOSED / OPERATING" sign. Not a ship image at all. | REJECT |
| C30 | `File:Tug boat and cruise ships near New Orleans 3.JPG` | MusikAnimal | CC BY-SA 4.0 | 5775×3854 | "CARNIVAL DREAM" and "NORWEGIAN DAWN" legible in the background; tug "J J CENAC" lettered twice in the foreground. Three names in one frame. | REJECT |
| C32 | `File:Carnival Elation leaving the Port of New Orleans 8.JPG` | Eric Gunderson | CC BY-SA 3.0 | 4000×3000 | Ship is small-ish and there is a lot of clean sky and water — but "CARNIVAL ELATION" is legible on the bow, the funnel is unmistakable, and two grey military sealift ships sit at the wharf behind. Not at berth. | REJECT |
| C33 | `File:Carnival Elation at the Port of New Orleans.JPG` | Eric Gunderson | CC BY-SA 3.0 | — | Same series, ship at berth, Carnival funnel and name dominant. | REJECT |
| C36 | `File:CBP Clears Arriving Passengers after Cruise Ships Diverted to Port of New Orleans due to Hurricane Harvey.jpg` | U.S. Customs and Border Protection | Public domain | 5312×2988 | "CARNIVAL BREEZE" enormous across the bow. A marked "U.S. Customs and Border Protection" SUV in the foreground; stacked containers at right. Reads as an enforcement operation, not a holiday. | REJECT |
| C37 | `File:Norwegian Cruise Ship leaving New Orleans.jpg` | Ray Devlin | CC BY 2.0 | 3872×2592 | "NORWEGIAN SPIRIT" in large type on the stern, NCL hull artwork, funnel logo. Ship fills the frame. | REJECT |
| C38 | `File:Grandeur of the Seas at New Orleans.jpg` | Len Turner | CC BY 2.0 | 1024×768 | Ship at berth under the bridge — the name on the stern *is* low-contrast — but the ship occupies ~72% of frame width, a black fuel barge and tug are moored alongside, the light is flat midday, and the original is only 1024px wide (unusable for a hero). | REJECT |
| C40 | `File:New Orleans Central Business District seen from the Crescent City Connection.jpg` | Yair Haklai | CC BY-SA 4.0 | 4128×2322 | **Second near-miss.** Ship at berth ~45% of width, terminal, wharf, skyline. But the red Carnival whale-tail funnel is the brightest object in the frame, "Sheraton" is legible, a blue "RIVERWALK" sign sits mid-frame, and a rusted bridge guardrail runs across the entire bottom edge. Phone snapshot through a car window. | REJECT — see §4 |
| C42 | `File:Serenade of the Seas docked in New Orleans.JPG` | Sunnya343 | CC BY-SA 3.0 | 4000×3000 | Shot from the dock; ship fills the frame; black security fence across the bottom third; "SERENADE OF THE SEAS 17" readable on a lifeboat. | REJECT |
| C43 | `File:Mississippi river and New Orleans waterfront seen from Algiers (2255422528).jpg` | KimonBerlin | CC BY-SA 2.0 | 3504×1856 | Orange tanker "EAGLE TUCSON" across the whole frame; "Sheraton" legible; dead winter weeds in the foreground. No cruise ship. | REJECT |
| C45 | `File:Mississippi River at New Orleans September 2002 Algiers Point Bend.jpg` | Jeff Kern | CC BY 2.0 | 1024×768 | Small ferry mid-river, "Bollinger" barges on the far bank, rooftop plant in the foreground. Overcast and drab. | REJECT |
| C49 | `File:New Orleans October 2017 French Market to the Crescent City Connection 02.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | **Compositionally the closest to the V2 formula** — cruise ship at berth, small (~18% of width), bridge, terminal, riverboat. Ruined by the foreground: a full car park, railway tracks, green plastic construction fencing, overhead catenary wires. Red "Hilton" sign legible; Carnival funnel visible. This is the exact failure mode of the rejected "Upper Algiers" alternate. | REJECT |
| C50 | `File:Ship and Crescent City Connection, Mississippi River at New Orleans French Quarter Levee.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | Red bulk carrier "GLOBAL VISION" under the bridge. Freight, not a cruise ship. Overhead wire bisects the sky. | REJECT |
| C51 | `File:New Orleans Riverwalk - 53209888919.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | "CARNIVAL TRIUMPH" legible in blue on the superstructure, "GRETNA" water tower, container gantries and industrial plant at right. | REJECT |
| C52 | `File:Norwegian Dawn (ship, 2002).jpg` | Yair Haklai | CC BY-SA 4.0 | 4128×2322 | "NORWEGIAN DAWN" legible on the stern; "RWALK" (Riverwalk) sign at the bottom edge; a black silhouetted stairwell occupies the left third. | REJECT |
| C53 | `File:Mississippi River from Jax Brewery, New Orleans, 20 July 2026 - 5.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | Bulk carrier "DILIGENT HOLDINGS" plus the *Natchez* (name legible). No cruise ship. | REJECT |
| C56 | `File:New Orleans Riverwalk - 53209511196.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | Lovely pink dusk light — and "OUTLET COLLECTION RIVERWALK" twice, "FOREVER 21", "PUMA", plus the *Creole Queen* paddlewheeler. Four third-party marks. | REJECT |
| C57 | `File:New Orleans Riverwalk - 53208633297.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | Golden-hour steamboat *NATCHEZ* with the name in 2-metre letters on the hull. Not an ocean cruise ship. | REJECT |

Also opened and rejected from the same sweep, without individual rows: C22/C23/C28
(`New Orleans, LA (Mississippi River) February 2011 – 01/03/18`, JasonParis, CC BY 2.0) — freighters
and bridges, no cruise ship; C29 (`New Orleans Skyline from Cruise Ship, January 2012`) — shot *from*
a ship, so no ship in frame; C31/C41 (`Carnival Elation leaving/turning 1`) — Carnival funnel and
name dominant; C44 (`New Orleans skyline from Lower 9th Ward Riverfront 02`) — no cruise ship;
C47/C48 (`Erato St Terminal – Carnival Elation P1110525/P1110534`) — dockside close-ups, name and
funnel fill the frame; C59 (`Carnival Inspiration`, 2002, 1024×768) — name legible, too small.

---

## 3. Rejection list — Pexels

Licence note: all four carry the **Pexels License** (free for commercial use, no attribution
required). That is functionally equivalent to the Unsplash License the brief permits, but it is not
one of the four licences the brief names — flagging for the coordinator. All rows **visually verified**.

| # | Photo | Photographer | Dimensions | What I actually saw | Verdict |
|---|---|---|---|---|---|
| P1 | `pexels.com/photo/cruise-ship-on-mississippi-river-in-new-orleans-32744123/` | Chad Populis Photography | 5–6k native | Superb backlit golden light, ship at berth. But "Celebrity CONSTELLATION" **and** "Celebrity ✕ Cruises" **and** the funnel ✕ mark **and** "…TLET COLL… / RIVERWA…" mall sign at right — plus two rusted green barges lettered "ZT 302" across the whole foreground. Five marks. | REJECT |
| P2 | `pexels.com/photo/mississippi-river-view-from-new-orleans-32000913/` | Kevin Early | 1800×1350 (served) | Elevated riverfront view. "Audubon Aquarium" mural, "PUBLIC PARKING" sign, a blue tanker mid-river, streetcar tracks and overhead wires. No cruise ship. | REJECT |
| P3 | `pexels.com/photo/scenic-view-of-new-orleans-skyline-at-sunset-39004104/` | NC Farm Bureau Mark | 1800×1200 (served) | The best *light* found anywhere in this search — golden-hour skyline from the Algiers bank with a huge clean sky and a full lower half of open water. "Westin" sign faintly legible. **No cruise ship**, only a small paddlewheeler at the wharf. | REJECT (no ship) |
| P4 | `pexels.com/photo/new-orleans-skyline-across-mississippi-river-32744125/` | Chad Populis Photography | 1800×1200 (served) | "Marriott", "WESTIN" and "HOTEL MONTELEONE" all legible; chain-link fence and scrub across the foreground. No cruise ship. | REJECT |

---

## 4. The two near-misses, and precisely what kills them

**C12 — Norwegian Sun at berth, blue hour (CC BY 3.0, Gnovick, 4288×2848).**
This is the only New Orleans image found that genuinely looks like a vacation: ship lit up at the
wharf, city glowing behind, a long gold reflection down two-fifths of the frame. I magnified two
regions 3× to be certain rather than guess:

- Bow: **"NORWEGIAN SUN"** in serif capitals, dark on white, fully readable.
- Skyline: **"Sheraton"** in red and **"Hilton"** in red, both fully readable; "Marriott" faintly.

The V2 brand check bars a readable ship name, a readable line wordmark **and** third-party
commercial signage, naming hotels explicitly. This image fails all three. The name sits at the bow,
i.e. the left third; cropping it away removes the ship's most attractive line and still leaves both
hotel signs and the NCL funnel mark. It is not salvageable by cropping. EXIF/provenance are fine
(2006, non-round 4288×2848, consistent with a Nikon D2X-era body) — the failure is compositional.

**C40 — CBD and cruise terminal from the Crescent City Connection (CC BY-SA 4.0, Yair Haklai, 4128×2322).**
Structurally right: ship at berth under ~45% of frame width, terminal, wharf pilings, skyline,
plenty of sky. Killed by four things at once: the red Carnival whale-tail funnel is the single
brightest object in the frame (trade dress, not incidental); "Sheraton" is legible; a blue
"RIVERWALK" sign sits mid-frame; and a rusted, paint-flaked bridge guardrail runs across the entire
bottom edge. It is also a phone snapshot through a moving car's window — soft, and CC BY-SA
(share-alike attaches to any crop).

---

## 5. Why New Orleans keeps failing

This is not bad luck across three agents. The port's geometry makes the V2 formula almost
unachievable:

1. **The berths face a retail mall.** The Julia Street and Erato Street terminals sit directly under
   the Outlet Collection Riverwalk. Any frame that includes the berth from the river or from Algiers
   includes the mall sign; any frame that excludes it is shot from the wharf, i.e. close, i.e. the
   ship's name fills the frame.
2. **The only elevated viewpoints are hotels.** Shots from the Westin/Hilton balconies and from the
   bridge all include the Sheraton, Hilton, Marriott and Monteleone rooftop signs — the New Orleans
   skyline *is* hotel signage.
3. **The river is a working freight channel.** Backlit distance shots reliably contain barges,
   towboats, tankers or container gantries. The two most attractive dusk frames found (C56, P1) each
   put a rusted barge or a mall sign directly in the hero zone.
4. **The homeport lines are Carnival and NCL.** Carnival's red whale-tail funnel is a high-contrast
   logo that survives silhouetting, backlighting and distance — the very techniques V2 relies on to
   suppress wordmarks. Distance does not save a Carnival ship.
5. **Nearly every "New Orleans cruise" result is a paddlewheel steamboat** (*Natchez*, *Creole
   Queen*, *City of New Orleans*, *American Queen*), all of which wear their names in display type
   two metres tall.

---

## 6. What remains open (coordinator decisions — I have not acted on any of these)

1. **Unsplash and Flickr were not fully searched.** Both APIs now require credentials that this
   session does not have (Unsplash `napi` → 401; Openverse `api.openverse.org` → 401; openverse.org
   front end → 403; Flickr search HTML renders no per-photo metadata). Flickr in particular holds a
   large body of CC BY New Orleans riverfront work by local photographers that this sweep could not
   reach. **An Unsplash or Flickr API key would materially change the odds.** This is the single
   highest-value unblock.
2. **Relax one criterion, deliberately and on the record.** If the coordinator is willing to accept
   distant, low-contrast *hotel rooftop* signage — as distinct from a mall sign that is the subject —
   then C12 still fails on the ship name and cannot be rescued. There is no image in this sweep that
   a single relaxation saves. Two relaxations (allow the ship name at low contrast **and** allow
   distant hotel signs) would make C12 nominable; that is a call above my level.
3. **Substitute the subject.** P3 (`pexels-39004104`, Pexels License, golden hour from the Algiers
   bank) satisfies every V2 criterion except that the vessel at the wharf is a paddlewheeler rather
   than an ocean cruise ship: clean sky, open water for the overlay, real New Orleans geography,
   berth visible, no legible ship name, only a faint "Westin". If the family rule for CRU-NOL could
   be read as "the New Orleans riverfront the cruise departs from" rather than "a cruise ship at
   berth", this is a usable hero today. **It does not meet the rule as written**, so I have not
   nominated it — but it is the best-looking compliant-except-for-subject frame found.
4. **Licence widening.** Several strong-light frames are CC BY-SA (C40, C56 is CC BY, C24 is CC0).
   Share-alike is flagged as a caution, not a bar; but none of the CC BY-SA candidates passes the
   composition test anyway, so widening the licence tolerance alone changes nothing.
5. **Commission or licence a stock frame.** Getty/iStock/Shutterstock all carry New Orleans cruise
   terminal imagery. Outside the free-licence remit, so recorded and not pursued.

---

## 7. Files

Downloads for this verification are in the session scratch directory
(`…/scratchpad/nol/`) as `c01.jpg`–`c60.jpg` and `p*.jpg`, plus the two magnified
crops used to adjudicate C12 (`c12_bow.jpg`, `c12_sky.jpg`). Nothing was copied into the repository.
No certificate page, production image, or other repository file was modified by this task.

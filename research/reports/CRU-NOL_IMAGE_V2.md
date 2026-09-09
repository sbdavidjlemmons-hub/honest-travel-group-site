# CRU-NOL — image acquisition V2 (New Orleans cruise)

Certificate: **CRU-NOL / new-orleans-cruise / New Orleans Cruise**
Scope: image only. No pricing work performed.
Governing brief: `research/IMAGE_BRIEF_V2.md` (read in full before searching).
Date: 2026-09-09

---

## Verdict

**NO CANDIDATE PASSES. New Orleans still has zero usable artwork.**

40 candidates were located, downloaded and **opened with the Read tool and looked at**. Every one
fails at least one hard V2 criterion. There is no primary and no alternate to nominate.

The closest near-miss (`File:Downtown New Orleans.jpg`, CC0) survived every test until the final
native-resolution check, where a **fully legible "Sheraton" rooftop sign** appears directly above
the ship. Details in §3 — including the fact that I briefly nominated it on the strength of a
lower-resolution check and had to withdraw it. That reversal is the most useful thing in this
report, so it is documented rather than tidied away.

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
4. Every candidate below was downloaded to scratch and **opened**. Wikimedia rate-limits this
   egress IP hard; downloads were switched to direct `upload.wikimedia.org` MD5-path thumbnails at
   the **1280px** bucket (1600px and above return HTTP 400 on these files).

---

## 2. A methodological warning worth more than the candidate list

Twice in this task, a judgement made below native resolution was wrong.

I could not initially fetch the original of the leading candidate (429-rate-limited; thumbnails
above 1280px refused). Working from a 1920px copy, I magnified the skyline 4×, measured the
apparent width of a suspect mark at ~20px, projected ~34px at the 3264px original, computed ~4px
per character for an eight-letter word, and concluded it could not be readable. **That reasoning
was sound in form and wrong in fact.** What I had measured was a partially-resolved dark band at
the top of the building, not the sign. The actual rooftop sign is roughly **300px wide** in the
original and reads "Sheraton" unmistakably.

The lesson generalises beyond this file:

- **Pixel-extent arithmetic on a downscaled copy is not a substitute for opening the original.**
  Downscaling destroys the very evidence you need to measure, so the measurement is taken on an
  artefact rather than on the thing itself. It produces false passes, which are the expensive kind.
- The V1 failure mode was inferring from EXIF and category names. The failure mode I nearly repeated
  is subtler — inferring from *a real look at a smaller copy* — and it is just as unreliable.
- Practical rule for the next agent: **the brand check must be performed on the file that will be
  published, at 100%.** If the original cannot be fetched, the candidate is *unverified*, not
  *passing*. Route around the rate limit (the working trick is in §6) rather than reasoning around
  the missing pixels.

---

## 3. The closest near-miss, and exactly what killed it

**`File:Downtown New Orleans.jpg`** — Sario528 — **CC0** — 3264×2448 — 19 January 2013, 08:21 —
taken from the Crescent City Connection.
`https://commons.wikimedia.org/wiki/File:Downtown_New_Orleans.jpg`

This is the only New Orleans image found that satisfies the *compositional* half of V2 outright:

| V2 criterion | Assessment |
|---|---|
| Ship under ~40% of frame width | **PASS.** ~19% as shot; ~25% in a trial crop. |
| Backlit / golden hour / dusk / overcast distance | **PARTIAL.** Low-angle winter morning light (08:21, ~90 min after sunrise), clean blue sky. Not golden hour; wordmark suppression comes from distance instead. |
| Port evidence in frame | **PASS.** Terminal sheds with red roofs, timber wharf pilings, a paddlewheeler at the next berth, and the Crescent City Connection itself. |
| Clean sky or water for overlay | **PASS, strongly.** Top ~45% clean sky, bottom ~20% open river. Two usable overlay zones. |
| Vibe test | **PASS in crop.** As shot, the left third and bottom edge are grey bridge trusswork with a rusted bolted plate; cropped to the right 74.5% / top 80% it reads as "arriving in New Orleans by sea." |
| **Brand check** | **FAIL — decisive.** See below. |

**Brand check at native resolution (the check that matters):**

- **Ship name — passes.** At 8× on the original the bow lettering is an unresolvable grey smear.
  The vessel is Royal Caribbean, so the red Carnival whale-tail funnel that kills most New Orleans
  candidates is absent, and no funnel wordmark resolves.
- **"Sheraton" — fails.** The rooftop sign on the Sheraton New Orleans is **fully legible** at
  native resolution: white letters on a dark fascia, ~300px wide in a 3264px frame.
- **Not croppable.** The Sheraton tower sits at x≈2454 of 3264 — **directly above the ship's stern**
  (the ship spans x≈1700–2550). Any crop that removes the sign cuts the ship in half.

The brief bars "third-party commercial signage (malls, shipping lines, **hotels**)" in terms. This
fails on the letter and on the spirit — a hotel wordmark hovering over the hero vessel is precisely
the "second brand in frame" problem that sank the previous nominee.

**Provenance is clean** (recorded so nobody re-litigates it): EXIF `Make=SAMSUNG`,
`Model=SPH-L710` (Galaxy S III — 8MP, matching 3264×2448 exactly), `DateTimeOriginal=2013:01:19
08:21:55`, `ExposureTime=1/2536`, `FNumber=f/2.6`, `ISO=80`, `FocalLength=3.7mm`,
`Software=L710VPBLJ7`. Real camera, real exposure data, 2013 upload — AI is ruled out. Licence CC0,
the best case available. **The provenance is impeccable and the image is still unusable** — which
is the V2 point exactly: licence and authenticity were never the binding constraint here.

**One option I am flagging but not exercising:** the sign is a small, high-contrast element against
plain sky and would be trivial to retouch out. V2 is explicit that the technique should suppress
wordmarks "without editing", and presenting a retouched frame as compliant artwork is a decision
above my level. If the coordinator is willing to sanction a single clone-stamp on a CC0 file, this
image becomes usable immediately and is the fastest route to unblocking New Orleans.

**Second near-miss, for completeness — `File:Norwegian Sun docked at Port of New Orleans.jpg`**
(Gnovick, CC BY 3.0, 4288×2848). The best-*looking* New Orleans image in existence for this brief:
blue hour, ship at berth, glowing skyline, long gold reflection. Magnified 3×: **"NORWEGIAN SUN"
unambiguously legible** on the bow, NCL funnel mark, **"Sheraton" and "Hilton" rooftop signs
clearly legible**, ship ~65% of frame width. Fails all three prongs of the brand check; the name is
at the bow, so no crop rescues it.

---

## 4. Rejection list — Wikimedia Commons

All rows: **visually verified** (downloaded and opened).

| # | File (commons.wikimedia.org/wiki/…) | Creator | Licence | Dimensions | What I actually saw | Verdict |
|---|---|---|---|---|---|---|
| C01 | `File:Cruise ships Mississippi River in New Orleans.JPG` | MusikAnimal | CC BY-SA 4.0 | 6000×4000 | **The previously rejected primary — confirmed on sight.** "NORWEGIAN DAWN" legible on the stern, "CARNIVAL" on the second ship, "OUTLET COLLECTION RIVERWALK" mall sign, refrigerated trucks on the wharf. | REJECT |
| C02 | `File:Cruise ships Mississippi River in New Orleans 2.JPG` | MusikAnimal | CC BY-SA 4.0 | 6000×4000 | Same session, wider. "CARNIVAL DRE—" and "NORWEGIAN DAWN" both legible. Ships fill the right ~50%. | REJECT |
| C03 | `File:Mississippi River - City of New Orleans and the Bridge, February 2023.jpg` | Mussi Katz | CC0 | 5838×3892 | Paddlewheel steamboat, not an ocean ship. "CITY of NEW ORLEANS" printed three times. | REJECT |
| C04 | `File:New Orleans CBD from Algiers Point at Dusk December 2006.jpg` | MeRyan | CC BY 2.0 | 3008×2000 | Beautiful dusk skyline, huge clean water. **No cruise ship.** Red "Sheraton" and "Marriott" legible. | REJECT (no ship) |
| C05 | `File:Cruise ship in New Orleans.jpg` | Iulus Ascanius | Public domain | 2032×1524 | Carnival Fantasy-class mid-river. Whale-tail funnel dead centre; "Fantasy" on the superstructure. ~65% of width, **not at berth**. | REJECT |
| C06 | `File:Cruise Ship in the Mississippi, New Orleans 2002.jpg` | Jeff Kern | CC BY 2.0 | 1024×768 | Carnival Inspiration departing; ship only ~21% of width (good) but the background is entirely grain silos, warehouses and red industrial sheds, light flat and hazy, Carnival funnel clear, original 1024px. | REJECT |
| C07 | `File:Mississippi River - from Woldenberg Park to Algiers Point, New Orleans, 1990.jpg` | Infrogmation | CC BY-SA 4.0 | 5857×4083 | Grainy 1990 B&W. *Natchez* and a towboat lettered "MID-SOUTH TOWING COMPANY". No ocean ship. | REJECT |
| C08 | `File:Carnival Elation turning around to leave the Port of New Orleans 5.JPG` | Ebgundy | CC BY-SA 3.0 | 3943×2919 | Good bridge composition, but the red Carnival funnel is the subject; "Elation" and "CARNIVAL ELATION" readable. Pink industrial warehouse. | REJECT |
| C09 | `File:Downtown New Orleans.jpg` | Sario528 | CC0 | 3264×2448 | **Closest near-miss — see §3.** Everything right except a fully legible "Sheraton" rooftop sign directly above the ship, uncroppable. | REJECT |
| C11 | `File:Norwegian Breakaway docked at the Port of New Orleans.jpg` | Penelopechicken123 | CC BY-SA 4.0 | 3024×4032 | "NORWEGIAN BREAKAWAY" in large black type across the stern. Photographer's sleeve in frame. | REJECT |
| C12 | `File:Norwegian Sun docked at Port of New Orleans.jpg` | Gnovick | CC BY 3.0 | 4288×2848 | **Second near-miss — see §3.** Ship name, NCL mark, Sheraton and Hilton signs all legible. | REJECT |
| C13 | `File:Carnival Valor curise ship at New Orleans September 2019.jpg` | Bernard Spragg. NZ | CC0 | 5090×3131 | "CARNIVAL VALOR" in huge blue type twice. Construction cranes. | REJECT |
| C14 | `File:New Orleans October 2024 - Riverwalk Ship.jpg` | lukeharold | CC0 | 3200×2400 | "OUTLET COLLECTION / RIVERWALK" fills the left half; vessel is the tanker "GLOBAL HOPE". | REJECT |
| C15 | `File:Aerial - New Orleans Skyline 2013 - panoramio.jpg` | panoramio user | CC BY 3.0 | 4320×3240 | Industrial wharf, containers, parked cars. No cruise ship. Burned-in "XEON ©" watermark. | REJECT |
| C20 | `File:New Orleans, LA (French Quarter) - Looking down river from Westin.jpg` | JasonParis | CC BY 2.0 | 3600×2700 | Several hundred parked cars, derelict brick building, power pylon. No cruise ship. | REJECT |
| C21 | `File:Crescent City Connection from Westin Balcony.jpg` | Eira Tansey | CC BY 2.0 | 1600×1200 | Red "RIVERWALK" sign, "Audubon Aquarium" signage, moored barges. No cruise ship. | REJECT |
| C24 | `File:Riverboat City of New Orleans Tour - Crescent City Connection bridge.jpg` | Daquella manera | CC0 | 9148×3846 | Handsome bridge panorama, big sky and water — **no cruise ship**; right third is container wharf. | REJECT |
| C25 | `File:New Orleans from the Air September 2019 - French Quarter and CBD - River to Lake.jpg` | George Bannister | CC BY 2.0 | 4032×3024 | Dusk aerial; only vessel is the small ferry. | REJECT |
| C26 | `File:Skyline - New Orleans, Louisiana, USA - Ca. December 29, 1987.jpg` | Giorgio Galeotti | CC BY-SA 4.0 | 7500×5000 | "Sheraton" and "Marriott" legible; *Natchez* at the wharf. No cruise ship. | REJECT |
| C27 | `File:New Orleans, LA (Central Waterfront) - Canal Ferry Lights.jpg` | JasonParis | CC BY 2.0 | 2857×3810 | A photograph of the "Canal Street Ferry Terminal / CLOSED / OPERATING" sign. Not a ship image. | REJECT |
| C30 | `File:Tug boat and cruise ships near New Orleans 3.JPG` | MusikAnimal | CC BY-SA 4.0 | 5775×3854 | "CARNIVAL DREAM", "NORWEGIAN DAWN", and tug "J J CENAC" lettered twice. Three names. | REJECT |
| C32 | `File:Carnival Elation leaving the Port of New Orleans 8.JPG` | Eric Gunderson | CC BY-SA 3.0 | 4000×3000 | Lots of clean sky and water, but "CARNIVAL ELATION" legible, funnel unmistakable, two grey military sealift ships behind. Not at berth. | REJECT |
| C33 | `File:Carnival Elation at the Port of New Orleans.JPG` | Eric Gunderson | CC BY-SA 3.0 | — | Ship at berth, Carnival funnel and name dominant. | REJECT |
| C36 | `File:CBP Clears Arriving Passengers … Hurricane Harvey.jpg` | U.S. Customs and Border Protection | Public domain | 5312×2988 | "CARNIVAL BREEZE" enormous across the bow; marked CBP SUV in the foreground; stacked containers. Reads as an enforcement operation. | REJECT |
| C37 | `File:Norwegian Cruise Ship leaving New Orleans.jpg` | Ray Devlin | CC BY 2.0 | 3872×2592 | "NORWEGIAN SPIRIT" large on the stern, NCL hull artwork, funnel logo. | REJECT |
| C38 | `File:Grandeur of the Seas at New Orleans.jpg` | Len Turner | CC BY 2.0 | 1024×768 | Stern name *is* low-contrast, but ship ~72% of width, black fuel barge and tug alongside, flat midday light, original only 1024px. | REJECT |
| C40 | `File:New Orleans Central Business District seen from the Crescent City Connection.jpg` | Yair Haklai | CC BY-SA 4.0 | 4128×2322 | Same viewpoint as C09, worse throughout: red Carnival funnel is the brightest object, "Sheraton" legible, blue "RIVERWALK" sign mid-frame, rusted guardrail across the bottom, shot through a car window. CC BY-SA. | REJECT |
| C42 | `File:Serenade of the Seas docked in New Orleans.JPG` | Sunnya343 | CC BY-SA 3.0 | 4000×3000 | Ship fills the frame; black security fence across the bottom third; "SERENADE OF THE SEAS 17" readable on a lifeboat. | REJECT |
| C43 | `File:Mississippi river and New Orleans waterfront seen from Algiers (2255422528).jpg` | KimonBerlin | CC BY-SA 2.0 | 3504×1856 | Orange tanker "EAGLE TUCSON" across the frame; "Sheraton" legible; dead weeds in the foreground. | REJECT |
| C45 | `File:Mississippi River at New Orleans September 2002 Algiers Point Bend.jpg` | Jeff Kern | CC BY 2.0 | 1024×768 | Small ferry mid-river, "Bollinger" barges, rooftop plant. Overcast and drab. | REJECT |
| C49 | `File:New Orleans October 2017 French Market to the Crescent City Connection 02.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | Ship at berth and small (~18%) — ruined by a full car park, railway tracks, green construction fencing, overhead catenary. Red "Hilton" legible. The exact failure mode of the rejected "Upper Algiers" alternate. | REJECT |
| C50 | `File:Ship and Crescent City Connection … French Quarter Levee.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | Bulk carrier "GLOBAL VISION". Freight, not a cruise ship. | REJECT |
| C51 | `File:New Orleans Riverwalk - 53209888919.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | "CARNIVAL TRIUMPH" legible, "GRETNA" water tower, container gantries. | REJECT |
| C52 | `File:Norwegian Dawn (ship, 2002).jpg` | Yair Haklai | CC BY-SA 4.0 | 4128×2322 | "NORWEGIAN DAWN" legible on the stern; "RWALK" sign; black silhouetted stairwell over the left third. | REJECT |
| C53 | `File:Mississippi River from Jax Brewery, New Orleans, 20 July 2026 - 5.jpg` | Infrogmation | CC BY-SA 4.0 | 5184×3888 | Bulk carrier "DILIGENT HOLDINGS" plus the *Natchez*. No cruise ship. | REJECT |
| C56 | `File:New Orleans Riverwalk - 53209511196.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | Lovely pink dusk — and "OUTLET COLLECTION RIVERWALK" twice, "FOREVER 21", "PUMA", plus the *Creole Queen*. Four third-party marks. | REJECT |
| C57 | `File:New Orleans Riverwalk - 53208633297.jpg` | M. Gaylard | CC BY 2.0 | 6016×4000 | Golden-hour steamboat *NATCHEZ*, name in two-metre letters. Not an ocean cruise ship. | REJECT |

Also opened and rejected: C10 (= C38, same file); C22/C23/C28 (`New Orleans, LA (Mississippi River)
February 2011 – 01/03/18`, JasonParis, CC BY 2.0) — freighters and bridges, no cruise ship; C29
(`New Orleans Skyline from Cruise Ship, January 2012`) — shot *from* a ship; C31/C41 (`Carnival
Elation leaving/turning 1`) — Carnival funnel and name dominant; C44 (`New Orleans skyline from
Lower 9th Ward Riverfront 02`) — no cruise ship; C47/C48 (`Erato St Terminal – Carnival Elation
P1110525/P1110534`) — dockside close-ups; C59 (`Carnival Inspiration`, 2002) — name legible, 1024px.

---

## 5. Rejection list — Pexels

Licence note: all four carry the **Pexels License** (free for commercial use, no attribution
required) — functionally equivalent to the Unsplash License the brief permits, but not one of the
four licences named. Flagging. All rows **visually verified**.

| # | Photo | Photographer | What I actually saw | Verdict |
|---|---|---|---|---|
| P1 | `pexels.com/photo/cruise-ship-on-mississippi-river-in-new-orleans-32744123/` | Chad Populis Photography | Superb backlit golden light, ship at berth — but "Celebrity CONSTELLATION", "Celebrity ✕ Cruises", the funnel ✕ mark, an "…TLET COLL… / RIVERWA…" mall sign, and two rusted green barges lettered "ZT 302" across the foreground. Five marks. | REJECT |
| P2 | `pexels.com/photo/mississippi-river-view-from-new-orleans-32000913/` | Kevin Early | "Audubon Aquarium" mural, "PUBLIC PARKING" sign, blue tanker, streetcar wires. No cruise ship. | REJECT |
| P3 | `pexels.com/photo/scenic-view-of-new-orleans-skyline-at-sunset-39004104/` | NC Farm Bureau Mark | The best *light* found anywhere: golden-hour skyline from the Algiers bank, huge clean sky, full lower half of open water. "Westin" faintly legible. **No cruise ship** — only a paddlewheeler. | REJECT (no ship) |
| P4 | `pexels.com/photo/new-orleans-skyline-across-mississippi-river-32744125/` | Chad Populis Photography | "Marriott", "WESTIN", "HOTEL MONTELEONE" all legible; chain-link fence and scrub. No cruise ship. | REJECT |

---

## 6. Why New Orleans keeps failing

Not bad luck across three agents — the port's geometry is hostile to the V2 formula:

1. **The berths face a retail mall.** The Julia and Erato Street terminals sit under the Outlet
   Collection Riverwalk. Frames that include the berth from river level include the mall sign;
   frames that exclude it are shot from the wharf, i.e. close, i.e. the ship's name fills the frame.
2. **The only elevated viewpoints are hotels** — and the Sheraton, Hilton, Marriott and Monteleone
   rooftop signs *are* the New Orleans skyline. This is what killed both near-misses. Any frame
   wide enough to put the ship under 40% is wide enough to include a hotel wordmark.
3. **The river is a working freight channel** — backlit distance shots reliably contain barges,
   towboats, tankers or container gantries.
4. **The homeport lines are Carnival and NCL.** Carnival's red whale-tail funnel is a
   high-contrast logo that survives silhouetting, backlighting and distance — the very techniques
   V2 relies on. Distance does not save a Carnival ship.
5. **Most "New Orleans cruise" results are paddlewheel steamboats** (*Natchez*, *Creole Queen*,
   *City of New Orleans*, *American Queen*), all wearing their names in display type.

Points 1 and 2 together mean the V2 formula may simply have **no solution at New Orleans** in
free-licence sources. That is a finding, not an excuse: it should shape what is asked for next.

**Wikimedia rate-limit workaround, for the next agent.** Direct fetches of
`upload.wikimedia.org/.../<File>.jpg` return 429 from this egress IP, and thumbnails above 1280px
return 400. What *does* work: request the file through `api.php` with `iiurlwidth=3000`, then fetch
the `thumburl` it returns **including its `?utm_source=…` query string** and with
`Referer: https://commons.wikimedia.org/`. That returned the full 3264px original on the first try
after a dozen failures. Without this, no honest brand check is possible.

---

## 7. Options, all requiring a decision above my level

1. **Sanction one retouch.** C09 (CC0, no attribution or share-alike burden) is compliant in every
   respect except a single small rooftop sign against plain sky. One clone-stamp makes New Orleans
   usable today. V2 says wordmarks should be suppressed "without editing", so this needs an explicit
   ruling — but it is by far the cheapest route.
2. **Get an Unsplash or Flickr key.** Both were unreachable (Unsplash `napi` → 401; Openverse API →
   401; openverse.org → 403; Flickr search HTML carries no per-photo metadata). Flickr holds a large
   body of CC BY New Orleans riverfront work this sweep could not touch. Highest-value unblock if a
   clean, unedited frame is required.
3. **Relax the subject rule.** P3 (`pexels-39004104`, Pexels License) satisfies every V2 criterion
   except that the vessel at the wharf is a paddlewheeler, not an ocean ship — and a Mississippi
   sternwheeler is arguably *more* evocative of a New Orleans departure than a white hull. If
   CRU-NOL's subject rule can be read as "the riverfront the cruise departs from," this is an
   excellent hero today, with the best light of anything found. Not nominated, because it does not
   meet the rule as written.
4. **Accept a hotel sign at distance.** If distant rooftop hotel signage were permitted (as distinct
   from a mall sign that is the subject), C09 passes as-is and C12 still does not (its ship name is
   legible). This is a narrower relaxation than it sounds and would unblock exactly one image.
5. **Licence stock.** Getty/iStock/Shutterstock carry New Orleans cruise terminal imagery. Outside
   the free-licence remit; recorded, not pursued.

---

## 8. Files

Downloads are in the session scratch directory (`…/scratchpad/nol/`) as `c01.jpg`–`c60.jpg` and
`p*.jpg`. Adjudication crops: `c12_bow.jpg`, `c12_sky.jpg` (C12); `c09_ship.jpg`, `c09_sky.jpg`,
`c09_towers.jpg`, `c09_crop_preview.jpg` (the low-resolution pass that produced the false positive)
and `c09_big.jpg`, `c09_towers_native.jpg`, `c09_ship_native.jpg`, `c09_sign_zoom.jpg`,
`c09_bow_zoom.jpg` (the native-resolution pass that overturned it — `c09_sign_zoom.jpg` is the
decisive frame). Nothing was copied into the repository. No certificate page, production image, or
other repository file was modified by this task.

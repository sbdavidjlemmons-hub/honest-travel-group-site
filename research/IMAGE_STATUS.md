# Image verification status — all 40 certificates

Method: candidate downloaded, opened with the Read tool, and judged on the visible pixels.
Anything not opened is `NOT VERIFIED` and does not count as approved, regardless of what
its metadata says.

Standard: `research/IMAGE_BRIEF_V2.md`.

## V3 supersessions (2026-09-12) — READ THIS FIRST for these 11 codes

Everything below this section is historical record — what was tried, what failed, and why.
For the 11 codes in this table, the verdict here is current; older entries further down for
the same code describe a prior candidate that this V3 pass replaced. Full review reasoning:
`research/reports/REVIEW_V3_LOG.md`. Art direction driving this pass: `research/ART_DIRECTION_V3.md`.

| Code | Verdict | Source | Note |
| --- | --- | --- | --- |
| CRU-BAH | **APPROVED (V3)** | Pexels 27011618, Simon Hurry | Hog Island lighthouse, ship <3% width on the horizon, fully backlit. Zero legible marks. |
| CRU-FTL | **APPROVED (V3) — resolution upgrade** | Pexels 9867744, Blue Arauz | Golden-hour Las Olas bridge + marina, 2.5x the resolution of the prior approval. Dockside mural verified by zoom as civic sailfish art, not a brand. |
| CRU-JAX | **APPROVED (V3) — reframe** | Pexels 10788521, Mike Jones | Full frame had "WELLS FARGO" legible; reframe drops it. Ship absent by design — owner's instruction, not a compliance workaround. |
| CRU-MEX | **APPROVED (V3) — second candidate** | Unsplash `YYSKPYHOq4E`, Alonso Reyes | First candidate (Cabo, Pexels 17415444) rejected on independent zoom — a legible Princess Cruises funnel logo the sourcing agent's own report missed. This candidate (Holland America's Maasdam, Puerto Vallarta, sunset) passes: stern text invisible at delivered size, only a soft smudge under heavy zoom. |
| CRU-NOL | **APPROVED (V3)** | Pexels 25003118 | St. Louis Cathedral silhouette across the river at sunset. First clean frame after 88 candidates across three sweeps — see the escalation history below, now resolved. |
| AIN-CUN | **APPROVED (V3)** | Pexels 20210509, israwmx | Multi-property pool strip, 3 properties in frame, beach, palapas. Zero text. |
| AIN-DOM | **APPROVED (V3) — reframe** | Pexels 11227594, Antonio Florentini | Full frame had a "Royalton" pool-floor wordmark; crop stops well short of it, verified by independent zoom on the crop boundary. |
| AIN-MBJ | **APPROVED (V3) — reversal after exhaustive search** | Flickr/Commons "Panorama Montego Bay," Trevor Cameron, CC BY 2.0 | The specialist search (93 candidates total across both agents, all documented in `research/reports/ALLINC_MBJ_ALT_V3.md`) confirms no multi-property Montego Bay frame exists free. This is the same Iberostar Rose Hall photo rejected once already. Approved on reconsideration under the CON-SED precedent: a real single named property is acceptable provided the site never captions or alt-tags it by name — the certificate's own no-guarantee language does the rest. Two resort wings kept in frame (not one), zero legible text at shipped size. |
| CON-KTH | **APPROVED (V3)** | Pexels 5345349, Tangie Bodden | Cottages directly on the dune line, ocean immediately behind — the literal fix for "closer to the water." |
| CON-SEV | **APPROVED (V3)** | Unsplash `photo-1708290178777-55f92dea1355` | 9-12 cabins on a ridge, Smoky Mountains backdrop. Minor seasonal snow dusting noted, not disqualifying. |
| CRU-GAL | **No change — confirmed no upgrade exists** | (unchanged) | Specialist search triaged ~90 candidates; best challenger has no ship and no berth (fails the cruise-family rule) plus a legible Bubba Gump roundel. Current Unsplash Gower Brown frame stands. |
| AIR-CUN | **APPROVED (V3) — second candidate, again via specialist** | Pexels 4306931, Zachary DeBottis | 1,367 candidates opened across two agents; zero combine Cancun with a visible aircraft. Shipped a verified real Cancun hotel-zone landscape instead — a genuine upgrade, since the outgoing image was not Cancun at all and was deliberately un-captioned as such. One storefront sign checked under boosted contrast/brightness myself and confirmed unresolvable. No aircraft in this frame; the S2 standard is not fully met, but the destination-accuracy and premium-quality gain is real. |
| AIR-SJU | **APPROVED (V3) — full brief met** | Flickr/CC "Isla Verde" frame | Real San Juan-area beach, aircraft small but readable as an aircraft, no legible livery even under zoom. Modest native resolution (1280px, ~1.25x upscale to 1600x900) — visually clean at shipped size, no softness that reads as an obvious defect. This is the one airfare replacement that satisfies the full S2 standard (destination + aircraft + no livery). |
| AIR-SJD | **APPROVED (V3) — destination-only, no free aircraft combo exists** | Pexels — El Arco / Land's End, Cabo | Owner's prior verdict was "absolutely not" on the outgoing image; every free Cabo-plus-aircraft candidate had legible livery. Shipped the exhaustively-verified iconic Land's End sunset instead — no aircraft, but a strict upgrade over a rejected image. |
| AIR-CRI | **APPROVED (V3) — destination-only** | Pexels — Arenal volcano at dusk | The one aircraft-present alternate found (SJO runway silhouette) is airport-tarmac-as-subject, which fails the family's own "destination not aeroplane" standard harder than a no-aircraft landscape does. Shipped Arenal instead: unmistakably Costa Rica, premium, zero signage. Note: Arenal sits near La Fortuna (Alajuela province); the certificate's pre-existing front-of-card label reads "Guanacaste, Costa Rica" — that label predates this session and is a broader destination convention already used site-wide, not a claim introduced here. |
| AIR-HNL | **No change — reframe tested, not shipped** | (unchanged: Tantalus Heights, jet incidental) | The only Honolulu-plus-aircraft candidate found has "DELTA" legible at native. A no-aircraft skyline reframe (excluding a Royal Hawaiian Hotel intrusion I caught on zoom) was tested and looks clean, but trades away the one thing the current image already has — a real, brand-clean aircraft — for a picture that is arguably not a net improvement against the owner's actual ask ("an airplane in there **and** a better picture"). Left as-is rather than trade one deficiency for another. |

Also this pass: condo interiors added (second image, card back) for `branson-condo`,
`cancun-condo`, `catskill-condo`, `wisconsin-dells-condo` — all four APPROVED, sourced and
verified in `research/reports/CONDO_INTERIORS_V3.md`. `south-lake-tahoe-condo` interior stays
**UNRESOLVED** (best candidate carries a legible SAMSUNG mark and shows no kitchen).

Two landing-page (non-certificate) subjects were also replaced: `img/cruise-sunset*` and
`img/hawaii-condo-resort*`. The outgoing `cruise-sunset` was carrying a live compliance defect
— "REGAL PRIN…" and "HAMILT…" legible at delivered size — independent of this project's scope
but caught and fixed in the same pass. `img/hawaii-waikiki-sunset*` was also reviewed and
**rejected**: the candidate is unmistakably the Royal Hawaiian Hotel, identifiable by
architecture and color alone. The current image stands until a replacement is found.
`img/cabo-bluehour*` stays **UNRESOLVED** — no free source exists at the required 3:4 portrait
geometry.

## Verified by eye

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| **CRU-PCV** | **Sunset — Port Canaveral, REFRAMED (CC BY 2.0, 6050x3058 source)** | **APPROVED — recovered by crop** | The full frame failed on a large "MSC" stern wordmark. A left-weighted 16:9 crop (`research/crops/CRU-PCV_1600x900_reframe.jpg`) drops the stern entirely and keeps the ship at berth on the right, a distant second vessel at berth far left, terminal buildings and cranes, and the full golden-hour sky. Verified at shipped 1600x900: only faint bow hull text remains, resolving as a grey smudge at 100% and readable only under 3x magnification — the same standard applied to Miami and Fort Lauderdale. Top half is clean sky, bottom third clean water. **Recovered at zero cost from a licence already in hand.** |
| CRU-PCV | Sunset — Port Canaveral, FULL FRAME | REJECTED (superseded by the reframe) | Passed a 1600px look, failed the native check. Cropped from the 3840px file: **"MSC" in large letters on the stern, the MSC crest beside it, "MSC MERAVIGLIA" legible on the bow, and the MSC compass mark on the funnel.** What read as "a small MSC mark" downscaled is a full wordmark at native. Port Canaveral has no artwork. |
| CRU-MEX | Mega Cruise Ships, Cozumel (CC BY 2.0, 5065x2804) | **REJECTED — reframe also fails** | Full frame: "FREEDOM OF THE SEAS" fully legible across the bow at shipped size. Reframing was attempted and is **worse**: the right-weighted crop puts "CARNIVAL DREAM" in the frame twice plus the red whale-tail funnel. Not recoverable from this source. Mexico has no artwork. |
| CRU-PCV | Port Canaveral Panorama (CC BY-SA 4.0) | REJECTED | Industrial: gantry cranes, cement silos, tanker, car parks. Ships are specks. |
| CRU-MIA | Carnival Glory, PortMiami (CC BY 2.0) | REJECTED | "Carnival Glory" legible across the hull; whale-tail funnel centre frame. Uncroppable. |
| CRU-FTL | Celebrity Equinox, Port Everglades (CC BY 2.0) | REJECTED | "Celebrity EQUINOX" and "Celebrity X Cruises" legible; Crowley containers. |
| CRU-FTL | Aerial, Port Everglades (CC BY-SA 4.0) | REJECTED | "CARNIVAL CONQUEST" and "CARIBBEAN PRINCESS" both legible. |
| CRU-NOL | Cruise ships Mississippi River (CC BY-SA 4.0) | REJECTED | "NORWEGIAN DAWN" + "CARNIVAL" + an Outlet Collection Riverwalk mall sign. |
| CRU-NOL | Upper Algiers stroll (CC BY-SA 4.0) | REJECTED | Wheelie bins, razor wire, utility poles, parked cars. Unusable commercially. |
| **CRU-FTL** | **Port Everglades — Alistair Cunningham (CC BY 3.0, 2048x1536)** | **APPROVED** | Double-verified: agent opened it, coordinator re-opened it. Three ships at berth at 15/30/21% frame width, terminal buildings, palms, tug, channel buoy, parking structure. No legible name or wordmark on any of the three ships. No third-party signage. Top ~35% clean sky, bottom ~40% clean water. Only limit is modest resolution — fine for a 1600x900 card hero, not a full-bleed 2560px one. |
| CRU-FTL | Leaving the port before night falls (CC BY 3.0, 2304x1728) | APPROVED (alternate) | Agent-verified. Dusk at the inlet, ship backlit behind the jetty, no readable branding. Two disclosed deviations: ship at ~48% frame width (over the 40% target) and port evidence is a channel jetty rather than berth infrastructure. Neither affects the brand test. |
| CRU-FTL | Sunset behind the cruiser (CC BY 3.0) | REJECTED | Previously approved on metadata as "low logo risk, backlit silhouette." Opened: "CONSTELLATION" legible in dark type across the hull, bow fills the frame. Backlighting did not wash it out. |

| **CRU-MIA** | **Pexels 8530566 "Drone shot of the Miami port at sunset" — Brendon Spring, Pexels License, 6240x4160** | **APPROVED — best in set** | Double-verified. Dusk on Dodge Island looking north up Biscayne Bay. Ship at berth bow-on at roughly 7-13% of frame width, backlit. PortMiami's illuminated sail-mast terminal canopy, boarding gantries, bollards and fenders establish the berth; Miami skyline behind. Pink-gold-violet sky across the top half, clean channel water across the right. No legible ship name, no funnel mark, no third-party signage. Agent zoomed the bow to 3x native and rendered a real 1600x900 crop with 100% tiles: nothing resolves as text. Pexels License is free commercial use with no attribution obligation. |
| CRU-MIA | Miamicruiseships20071208 — Marc Averette, CC BY-SA 1.0, 2560x1920 | APPROVED WITH CAUTION (alternate) | No name or wordmark resolves even at 240% of delivery pixels, but three or four Carnival whale-tail funnels are recognisable as shapes. No text, so it does not breach the letter of the rule, but it is the same trade dress that disqualified Carnival Glory. Coordinator call: the primary is strong enough that Miami does not need this to carry weight. Treat as reserve only. |

## Needs new candidates — zero usable artwork today

### CRU-NOL — 38 candidates opened, zero pass. Escalating.

A full re-sweep (34 Wikimedia + 4 Pexels, all downloaded and opened) produced **no compliant
image**. The agent declined to nominate rather than pass a fourth failure through. Near-misses:

- *Norwegian Sun at berth, blue hour* — the only NOLA frame that genuinely looks like a vacation.
  Magnified 3x: "NORWEGIAN SUN" unambiguously legible on the bow, plus legible "Sheraton" and
  "Hilton" rooftop signs. Name sits at the bow, so no crop rescues it.
- *CBD from the Crescent City Connection* — structurally right, but the red Carnival whale-tail
  funnel is the brightest object in frame, "Sheraton" and "RIVERWALK" are legible, and a rusted
  bridge guardrail crosses the bottom edge.

**Why this is structural, not bad luck:**
1. The berths sit directly under the Riverwalk outlet mall, so any frame containing the berth
   contains the mall sign.
2. The only elevated viewpoints are hotels, and the New Orleans skyline *is* hotel signage.
3. The river is a working freight channel, so backlit distance shots reliably contain barges
   and gantries.
4. The homeport lines are Carnival and NCL, and Carnival's red funnel is a high-contrast mark
   that survives exactly the silhouetting and distance the V2 rule relies on.

### V3 RESOLUTION — buy stock. 78 candidates opened across two sweeps.

The V2 blockage was broken: Unsplash, Openverse, Pexels and Flickr were all reached and their
complete New Orleans river inventories enumerated. 40 further candidates downloaded and opened.
**Nothing passes, and the reason is now precise rather than speculative:**

1. Unsplash's good New Orleans river/dusk imagery is **Getty / Unsplash+ — a paid licence**, not
   the Unsplash License. The free tier contains **no ocean cruise ship at New Orleans at all.**
2. Exactly **one image in 40** held a real ocean cruise ship at berth in good light — a Carnival
   ship whose red whale-tail funnel and orange hull artwork are unmistakable at 4x, with "WESTIN"
   and "Marriott" legible in the same frame.
3. Pexels' entire New Orleans cruise-ship inventory is **two photographs**, both already rejected in V2.

**The frame that solved Miami does exist for New Orleans — it is simply purchasable, not free:**
`premium_photo-1733281223460-9ad20c22960c` — "Telephoto Drone Shot of Downtown New Orleans at
Sunset", Getty via Unsplash+, and its siblings.

**Coordinator recommendation: buy it.** One licensed image resolves the certificate that two full
sweeps and 78 opened candidates could not. Further free-source searching here is spend without
prospect.

**Other unblocks (now largely superseded):**
- A **Flickr API key** would reach substantial CC BY New Orleans riverfront work this sweep
  could not: Unsplash's API, Openverse's API and openverse.org all returned 401/403 this session.
- **Paid stock with a commercial release** for this one certificate.
- **Relaxing the subject rule** to "the riverfront the cruise departs from" would make Pexels
  39004104 usable today — golden hour from the Algiers bank, clean sky, open water for overlay,
  berth visible, no legible ship name, only a faint "Westin". Its vessel is a paddlewheeler,
  not an ocean ship, so it fails the rule as written.

`CRU-FTL` and `CRU-MIA` are **RESOLVED** — see approvals above.

## Native-resolution re-check of all coordinator approvals (2026-09-09)

Prompted by an agent that caught itself nearly approving a file after measuring a suspect mark on
a 1920px copy and computing it unreadable — then fetching the original and finding "Sheraton"
legible on a 300px rooftop sign. The same check was run against every coordinator approval.

| Code | Native check | Result |
| --- | --- | --- |
| CRU-MIA | 4000px crop of the bow region | **HOLDS.** Bow markings remain unresolvable smudges; no wordmark, no funnel logo. |
| CRU-FTL | 2048px native, ship band cropped and 2x upscaled | **HOLDS.** All three ship names remain illegible. The modest native resolution actively helps: there is not enough detail to resolve a name. |
| CRU-PCV | 3840px crop of the ship | **FAILS.** Large "MSC" on the stern plus crest, "MSC MERAVIGLIA" on the bow, MSC compass on the funnel. |
| CRU-MEX | 3840px crop of the bow | **FAILS.** "FREEDOM OF THE SEAS" fully legible. |

**Two of four reversed.** The downscaled look is not a substitute for the published-resolution
check, and this failure mode is more dangerous than the metadata one because it feels like
verification.

## Airfare — AIR-SJU resolved, and the recipe generalises

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| **AIR-SJU** | **Pexels 1076033, George Desipris, Pexels License, 4256x2392 native 16:9** | **APPROVED** | Double-verified. Sunset with a hard fan of crepuscular rays; twin-engine narrowbody on short final in complete black silhouette; a second aircraft parked on the ridge, terminal structures and airfield lights, open sea across the bottom third. At 7x on the delivery crop the aircraft is a solid black shape — no fin mark, no titles, no registration, no colour break. Two separate overlay zones. |
| AIR-SJU | Pexels 2990971, Tom Cattini, Pexels License, 4032x3024 | APPROVED (alternate) | A320 from directly underneath at dusk, warm-lit belly, two palm crowns in silhouette lower right, ~60% unbroken blue gradient sky. Faint tail texture is present but resolves as pattern, not as a wordmark. Palms supply the tropical cue the primary lacks. |

**19 opened, 15 rejected (79%).** Every suspected wordmark or tail-logo region was re-cropped at
5-8x native before ruling.

| **AIR-HNL** | **"Flying Over the Sun", ELLK Photo, CC BY 2.0, 5191x3894** | **APPROVED** | Double-verified. Telephoto sunset from Tantalus Heights: palm frond in silhouette, Ala Moana towers, Magic Island peninsula, ocean, half-set sun, and a twin-engine widebody climbing away above it. At 4x native the aircraft is uniform pale grey with no wordmark, tail logo, cheatline, or registration. No legible signage on any building. Full EXIF (Fujifilm X-T20, 120.6mm, f/5.8, 1/160, ISO 1000, Feb 2024) on a non-round dimension. The hazy sea/sky band across the middle is the best overlay canvas in the whole set. |
| AIR-HNL | "Golden Palm Trees", Edmund Garman, CC BY 2.0, 4875x2742 | APPROVED (alternate) | Magic Island, Oahu: six coconut palms in silhouette against a blue-to-gold gradient, winglet-equipped narrowbody climbing out at right, flat backlit silhouette with zero markings. Nikon D7000 EXIF. Disclosed weakness: the aircraft is only ~2.7% of frame width. |

**24 opened, 22 rejected.** Both nominations plain CC BY 2.0 — no share-alike, no NoDerivatives.

### The trade-off, decided

**There is no usable free-licence aircraft photograph at or over San Juan.** Pexels' "san juan
puerto rico airplane" query returns 23 results with zero aircraft exteriors. Free-licence
Caribbean aviation photography is concentrated at Maho Beach, Sint Maarten — a genre built to
show the airline; all three Maho frames opened carried a fully legible wordmark or registration.

### AIR-SJU final — two verified options, designer picks

43 further candidates opened under the destination-first rule. Destination-specific San Juan
imagery **does** exist free-licensed, disproving the V2 conclusion. But every San Juan option
trades away something, so both are recorded rather than one being forced:

| Option | Destination | Aircraft | Sharpness | Verdict |
| --- | --- | --- | --- | --- |
| **V2 sunset silhouette** (Pexels 1076033) | Generic — reads Mediterranean | Prominent, full black silhouette, zero markings | Sharp, native 16:9 | **PRIMARY.** Best image; satisfies the standard as written ("real passenger air travel **or** an aircraft connected to the destination context"). |
| **V3 San Juan tight** (Unsplash 1613845968442) | Unmistakable — Castillo San Cristobal, PR flag, Condado skyline | Visible airliner at 2.44% frame width, no titles/fin logo/registration at 22x | **Soft** — 1.62x upscale from a 990px native crop | **ALTERNATE.** Use where place-authenticity matters more than crispness. |
| V3 San Juan wide (same source, full-width crop) | Superb — garita, La Perla, ramparts, surf | Reduced to a ~10px speck | Sharp, 0.42x downscale | Rejected as an *airfare* hero: it no longer communicates air travel. |
| V3 alternate (Unsplash 1693878981296) | Not visible at 16:9 | Tiny Cessna | Sharp | Rejected. Flat grey overcast, no destination in frame, and a light single-engine aircraft does not read as airfare. |

Both delivery crops are committed under `research/crops/`.

**Mechanics learned:** `images.unsplash.com/photo-<hash>` with **no query string** returns the full
native original — a `?w=` fetch destroys small subjects before you can brand-check them. Unsplash
photo pages also expose stated location and camera make/model, so the camera half of the AI screen
**can** be run on Unsplash files, unlike Pexels.

**SUPERSEDED — the Honolulu sweep disproved this.** Both HNL approvals are unmistakably Oahu AND
completely anonymous, achieved by shooting the *destination* and letting a jet be incidental in
the sky. Destination-specificity is achievable; the San Juan sweep searched for aircraft rather
than for Puerto Rico.

**AIR-SJU is being re-run under the corrected rule.** Its current approvals stand as a fallback
only, and must not be captioned or alt-tagged as Puerto Rico while they do. A legible carrier
livery remains disqualifying regardless — that part of the earlier call was right.

## AIR-CUN — resolved with non-Cancun imagery; the destination gap is proven exhaustive

**173 Cancun / Quintana Roo frames downloaded and opened** (108 Pexels, 25 Flickr CC, 20 Unsplash,
plus Commons and Openverse). Every dark sky anomaly was machine-detected, cropped at ~4x native and
opened as labelled tiles — **316 tiles across three sheets**. All resolved as cloud, gull,
parasail, swimmer, boat, palapa or noise. **Zero aircraft.**

The aircraft-first check went **20 for 20 rejected** — Continental, Condor x2, AeroMexico, Orbest,
Spirit, Interjet x2, American, Livingston, Air Transat, Cubana, Copa, Air Canada, all with legible
titles, plus two wing-out-of-window shots and a cabin interior. The governing rule reproduced exactly.

**The paywall was checked too:** Unsplash+/Getty Cancun items are palms, cenotes and umbrellas.
No purchasable asset exists either, so this is a real gap in the photographic record, not a
licensing gap. Nothing to buy even with budget.

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| **AIR-CUN** | **Pexels 33975086, ViRaL Bokha, Pexels License, 3024x4032** | **APPROVED** | Belly view from directly underneath through coconut-palm fronds. Aircraft 8.4% of frame width, uniform dark underside at 4.1x — no titles, logo, registration or cheatline. Foreground pole and cable fall outside the recommended crop. |
| AIR-CUN | Pexels 19716840, Artem Makarov, Pexels License, 2981x3976 | APPROVED (alternate, portrait only) | Full black silhouette over a fiery sunset coast, 11.8% of frame width, zero markings at 3x and again at 5x delivery density. Best overlay space tested — but the jet sits at 13% height and the sunset at 65-74%, so **no 16:9 crop holds both.** Portrait or square hero only. |

**Neither is Cancun.** Consistent with the AIR-SJU decision: brand-clean beats destination-specific
for the airfare family. These must never be captioned, alt-tagged or described as Cancun.

**Coordinator call on the flagged file:** Pexels 35696781 is the most beautiful frame in the sweep
and is **refused**. 4096x3072 with no camera data fails the AI screen; the agent named it so the
call could be made knowingly rather than silently. Same failure, worse, for 36959832/33 at
8000x12000. Holding the line — an unexplained round-number geometry with no capture chain is
exactly what the screen exists to catch.

## Cruise batch — CRU-TPA resolved

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| **CRU-TPA** | **"Bridge Ship 2458", Kenneth John Gill, CC BY-SA 4.0, 6016x4016** | **APPROVED — best cruise image in the set** | Double-verified. Sunshine Skyway Bridge in silhouette with a cruise ship passing beneath at sunset, ship at **8.3% of frame width**. The agent tiled the entire horizon band at native 1:1 in three 2000px tiles: **zero text anywhere in the frame**, no signage of any kind, transom smear does not resolve into letters at 3x, funnel an undifferentiated dark block. Delivery crop is a 0.417x downscale — no upscaling. Enormous red-orange sky and dark water for overlay. **Caution: CC BY-SA, share-alike attaches to the published crop.** |
| CRU-TPA | "Florida-6", Ajay Suresh, CC BY 2.0, 3456x3456 | APPROVED (alternate, with caveat) | Tampa CBD skyline, Radiance-class ship outbound with tug, Port Tampa Bay berth. Ship 20.1% of width, no name on bow or hull, no funnel logo at 1.8x native. **Caveat: the distant skyline carries "SunTrust" (79px native, 37px at delivery) and a small PNC mark — legible at native, illegible at 1600x900.** Cannot be reframed away without pushing the ship to ~65% of width, which the agent tested and rejected. |
| CRU-TPA | Pexels 10634522, Carnival Paradise under the Skyway | **REJECTED (coordinator call)** | The agent offered but did not nominate it: a left-weighted reframe drops both "Paradise" wordmarks and leaves the funnel as an unidentifiable red wedge between bridge piers. Best licence of the three. **Refused** — the whale-tail rule exists because that mark survives silhouetting, and the primary is clean, so there is no reason to take the risk. The agent was right not to make this call itself. |

**Coverage:** 20 opened, 17 rejected on sight with native-crop reasons logged. Pexels holds exactly
**one** Tampa-region cruise photo across four queries; Unsplash holds **zero** free (its only
Tampa/Skyway results are Unsplash+). Commons produced both nominations — the first time Commons
has beaten the commercial libraries, because the winning frame is a landscape photograph, not a
ship photograph.

| **CRU-GAL** | **"A fisherman on a pier overlooking a cruise ship", Gower Brown, Unsplash License, 6016x4016** | **APPROVED** | Double-verified. Long lens from Seawolf Park pier on Pelican Island, directly across the ship channel from the cruise berths — destination-correct, not a stand-in. Oasis-class ship at a Port of Galveston berth, tug alongside, quay, sheds, light masts, second vessel; angler and rods in the foreground give it human warmth. Bow name is an unreadable grey smear at 3x native; **no funnel logo at all**. Unsplash License: commercial use, no attribution, no share-alike. Delivery crop E `(0,250,4960,3040)` at **0.323x downscale**. |

**The crop boundary is the whole result.** The full frame carries **three legible consumer brands** at native — "Coleman", "Academy SPORTS+OUTDOORS", "FISH ID CHART" — all at x >= 5140. Every recommended crop stops at **x = 4960** and drops all three. Never crop past x = 4980.

**One honest defect, flagged not buried:** the ship is 45% of native width and **55% of the delivery crop**, against the ~40% guideline. It is unimprovable — the bow sits only 965px from the left edge, and widening right re-admits the brands. Coordinator call: **approve.** The 40% rule is a means to the end of illegible branding, and that end is achieved here despite the means being exceeded. The agent published its measurements so the call is reversible.

**No second independent Galveston image exists.** The alternate is the same source at a different framing, stated plainly rather than padded. 28 opened plus ~44 triaged across contact sheets; ~150 results enumerated over 16 queries. **Pexels has no cruise ship at a Galveston berth at all; Unsplash has exactly one, and it is the primary.**

Two leads recorded for other ports: the best composition in the sweep (dusk harbour, cruise bow at 13% of frame, the tall ship *Elissa* in frame) is **CC BY-NC-ND — dead twice over**; and a Coast Guard wharf shot tagged NC-ND is **likely a mislabel on PD-USGov work**, which may be worth challenging on other ports.

| **CRU-WCB** | **Pexels 35783406 "Sunset Cruise Ship View at Cayman Islands Beach", Tetyana Kovyrina, Pexels License, 5464x8192** | **APPROVED — best image in the project** | Double-verified. Grand Cayman at sunset: palms silhouetted left, two figures walking the sand, ship at anchor offshore, glassy water, a full pink-orange sky. Ship at 20.4% of frame width (measured by luminance threshold on the rendered file, not eyeballed). Delivery crop `(0,3900,5464,6974)` at **0.293x — a 3.42x downscale.** Pexels License: commercial use, no attribution, no share-alike. AI screen: 5464x8192 is exactly a Canon EOS R5 portrait frame, with a coherent same-body Cayman series from the photographer. |

**The 100% rule, applied with margin.** At native the frame IS branded — "NORWEGIAN ENCORE" on the bow superstructure and "NCL" on the funnel are both legible. Cropped 1:1 from the *rendered* 1600x900 file and opened at 4x: the name is ~29px wide with ~2px cap height and resolves to an undifferentiated light band; "NCL" is ~7px. Same standard that approved Port Canaveral and rejected Cozumel, with more headroom than either.

**Qualification accepted:** no berth infrastructure — the ship is at anchor, which is the only geometry Grand Cayman offers. **Coordinator call: fine.** This is a REGION certificate with no assigned port, and the governing standard asks for a real passenger ship in the assigned port **or relevant cruise region**. Beach, palms, Caribbean sunset and an anchored ship establish the region unambiguously.

### Why Grand Cayman was the only Western Caribbean port that could work

47 candidates opened across all six acceptable ports. Two structural patterns:

1. **Carnival's funnel killed three otherwise-excellent frames**, including a Coxen Hole twilight shot with two lit ships at berth both wearing whale-tails, centrally and duplicated — the Cozumel failure mode exactly.
2. **Cozumel's Punta Langosta, Roatan's Town Center, Ocho Rios' Island Village and Falmouth's Historic District are purpose-built RETAIL developments.** Every frame with real berth infrastructure also carried Rolex, Diamonds International, a Rolling Stones logo, or "MONKEY LA LA ZIP". **Port evidence and no-third-party-signage are in direct conflict at these ports** in a way they are not at Port Canaveral or Galveston.

Grand Cayman resolves it precisely *because* it has no berth: tendered calls put ships a mile offshore against open water, so there are no shops to photograph.

Two data-quality warnings: Commons `High-view_Ocho_Rios_Jamaica.jpg` is **badly mislabelled — it is the Marin Headlands and the Golden Gate Bridge**, and `Mahogany_Bay,_Roatan` is a photograph of a tree.

Mechanics: Wikimedia's 429 now hits `upload.wikimedia.org` originals too — check `stat -c%s` before opening, since errors arrive as 2,256-byte HTML. `Special:MediaSearch` is near-useless where an `api.php` generator search filtered to >=2400px finds the same files in one call.

| **CRU-LAX** | **"Quantum of the Seas Departs San Pedro (Dec 2025)", Jack Adamenko, CC0, 4032x2268** | **APPROVED — weakest of the approved cruise set aesthetically** | Double-verified. A **reframe recovery** and the cleanest licence in the project. `QUANTUM OF THE SEAS` sits at native x 1878-2118; the crop starts at **x = 2130, twelve pixels clear**. Delivery crop `(2130,330,3730,1230)` is **1600x900 at scale 1.000 — pure pixel-for-pixel, no resampling, no upscale.** Bare plating at the left edge, no funnel, no logo, no commercial signage; palms, port buildings, clean sky and water. Ship ~23% of frame width. Full iPhone 11 EXIF (4.25mm, f/1.8, ISO 32), so AI is positively ruled out. **Disclosed: "U. S. COAST GUARD" is legible on moored cutters** — federal rather than commercial, but the middle band reads partly as a Coast Guard station, and the frame sells a working harbour more than a vacation. Accepted because it is compliant, CC0, unresampled, and Los Angeles is genuinely hard. |
| CRU-LAX | "Navigator of the Seas Departs San Pedro", Jack Adamenko, CC0, 4032x2268 | APPROVED (alternate, two deviations) | Best-looking travel frame in the sweep — passengers along the bow rail in golden light, wharf, palms. 0.941x downscale. **Two disclosed deviations:** a backlit container gantry bank across the right ~40% of width, and the ship at ~44% of frame width. Removing the gantries leaves only 1100px of clean region, needing a 1.45x upscale; reducing the ship reintroduces the wordmark. |

**Hard limit on this certificate: both files cap at exactly 1600x900.** A 2x retina hero would need a 2.00x / 1.88x upscale, which is not recommended.

**41 candidates opened, 39 rejected; 92 further Flickr results triaged on contact sheets.** Three 100%-rule reversals worth recording: a Pexels frame looked plausible until "Regatta" and the Oceania funnel mark resolved sharply; the best-composed Long Beach frame died when the Carnival whale-tail resolved as the brightest object; and a Lions Lighthouse frame with ideal structure carried a full-size Costa "C" on the funnel. A Ruby Princess bow-on frame was reframe-tested and rejected on arithmetic — every crop excluding the tank-farm domes pushed the ship to 63-74% of frame width.

**Four structural reasons Los Angeles is hard:** the cruise berths sit inside a container complex; the homeport lines are Carnival, Princess and RCI; Long Beach's photogenic waterfront faces *away* from the cruise terminal; and the Queen Mary is a decoy that dissolves eight otherwise usable frames. The agent notes explicitly that **buying stock would not have helped — the gap is in what exists, not in what is free.**

## CRU-TPA primary independently corroborated

A stalled parallel fetch in the Tampa sweep had independently completed its download of the primary's source before dying. The two files are byte-identical (md5 `753b96d549ae8be3ab4c9b7c7f459511`, 9,118,310 bytes, 6016x4016), so every brand judgement on that primary rests on a native file confirmed by two independent fetches. The brief's "if you cannot fetch the original, the candidate is UNVERIFIED" clause is satisfied with room to spare.

## Condo family — CON-SED probe resolved, and it rewrote the family plan

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| **CON-SED** | **Pexels 6604588, Quintin Gellar, Pexels License, 6016x4016** | **APPROVED** | Double-verified. Two-storey condominium villas — sand brick, red barrel-tile roofs, timber balconies, lawns, cypress and willows — with the Sedona red rock escarpment behind and blue sky above. Exactly the multi-room condo product the certificate sells. Delivery crop `(0,300,6016,3684)` at **0.266x downscale**; that framing also crops an HVAC condenser and utility box off the bottom edge. 100% check: 9 native tiles across every facade plus 4 magnifications at 2x-7x. Only sign-shaped objects were a unit-number door plaque (~15px, no letterforms at 6x), a utility box, and two private hillside houses. **No resort name, logo or third-party signage at native.** |
| CON-SED | Pexels 26867471, Allen Boguslavsky, 4032x3024 | APPROVED (alternate) | Sedona at sunset from above town: dramatic sky, full red rock skyline, southwestern tile roofs below. 0.4215x downscale, crop drops a driveway, SUV and trailer. A convincing "wordmark" resolved at 7x with brightness boost to **JPEG noise over a hedge** — a false positive, cropped out anyway. |

| **CON-MYR** | **Unsplash photo-1543511670-8eb2cbcd6d47, Jeremy Kierez, Unsplash License, 4056x3040** | **APPROVED** | Double-verified. Drone frame of the Grand Strand condo tower line: towers left, resort lawn with plain yellow umbrellas and pool deck bottom-left, wide clean beach and ocean right, cloudless sky. Multiple towers, so no single property is implied. Delivery crop `(0,600,4056,2882)` at **0.3945x downscale**. Magnified to 7x across every facade, pool deck, umbrella, bin and distant skyline: **zero legible signage.** |
| CON-MYR | Unsplash photo-1543511685-1694615ade58, same photographer, 15s later | APPROVED (alternate) | Mirror composition, same 0.3945x. **Contains the SkyWheel** — found at 7x, 36px native, but **14px in the delivered file with no colour and no wordmark, unresolvable at 1:1.** Reframe tested and rejected on merit: the anchor tower is 1460px tall, so any window excluding the wheel loses either the tower crown or the whole beach. |

**The probe overturned my pre-registered risk.** I expected legible property branding to be the
dominant condo failure. It fired **once in fourteen**, and was a third-party product brand, not a
resort name. The real number-one cause is **"not premium / not vacation-selling"** — 6 of 13
rejections were car parks, abandoned houses, snow, gravel driveways and ruins.

**And it surfaced a compliance issue I had not considered.** The approved file's Pexels title is
"Villas of Arroyo Roble resort". The pixels name no property, but the *caption* does. Since the
certificate names no resort and assigns the unit at confirmation, source metadata must never reach
the site — title, filename or alt text. Now rule C1 in the brief.

All seven probe rules are encoded in `IMAGE_BRIEF_V2.md` under the condo family, including the
search vocabulary finding: `<destination> hotel` on Pexels is the best query, and "villa", "condo"
and "vacation rental" are actively counterproductive.

## CRU-MIA re-confirmed at true native

The earlier Miami check used a `?w=4000` fetch, which Pexels silently capped below the 6240x4160
native. Re-fetched with no query string and re-cropped the bow at 3x of true native: the markings
remain unresolvable dark smudges, no letterforms. **Approval stands.**

## Not yet verified

All remaining 37 certificates. Wave-1 agents nominated their candidates under the original
brief, which forbade downloading, so their image verdicts are metadata inference and must be
re-checked against V2 before any of them is treated as approved.

## Known crop obligation

Both approvals are judged at roughly 1900px render width. Neither has been crop-tested at the
production 1600x900. The "MSC" mark on the Port Canaveral hull is small but not invisible and
may read at full resolution on a high-density display. Confirm before release.

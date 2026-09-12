# V3 review log — my own zoom checks, not agent self-reports

Method: open every candidate crop at shipped 1600x900, then zoom-crop and re-open anything
with a hull, funnel, sign, or mural close enough to resolve. Agent APPROVED is a nomination,
not a verdict — this file is the verdict.

## Cruise (batch 1, 7 crops reviewed)

| Crop | Verdict | Evidence |
|---|---|---|
| CRU-BAH_1600x900_hogisland_light.jpg | **APPROVED** | Nassau Harbour Lighthouse, cruise ship <3% frame width on the horizon, fully backlit. Zero legible text or marks anywhere. |
| CRU-BAH_1600x900_light_tug.jpg | Rejected | Rusty work tug dominates lower-right third. Fails "not premium" before branding is even a question. |
| CRU-FTL_1600x900_bridge_sunset.jpg | **APPROVED** | Zoomed the dockside panel at (280,560)-(540,700): it's a sailfish mural, Fort Lauderdale's own 17th St. Causeway public art, no text, no company name. Golden-hour sunburst, marina, skyline, no ship in frame at all. Clears the current 2048x1536 Port Everglades shot by a wide margin on resolution and premium feel. |
| CRU-FTL_1600x900_intracoastal_dusk.jpg | Rejected | Heavily toned/filtered, softer, no port evidence — canal homes only. bridge_sunset is strictly better. |
| CRU-JAX_1600x900_pinksunset_reframe.jpg | **APPROVED** | Main Street Bridge + downtown skyline at dusk. Ship genuinely absent, per the owner's instruction. No legible signage. |
| CRU-MEX_1600x900_cabo_anchored.jpg | **REJECTED** | Zoomed the funnel/superstructure at (900,220)-(1120,340): the teal swirl is the Princess Cruises "Ocean" logo, clearly legible. Same failure class as the Carnival whale-tail funnel that killed prior Mexico candidates — a recognizable line mark is branding even without text. Owner wants a ship visible; this ship is branded. Needs another candidate. |
| CRU-NOL_1600x900_jacksonsq_sunset_NOSHIP.jpg | Pending full report | St. Louis Cathedral silhouette from across the river at sunset. No hotel signage, no Riverwalk mall, no ship, no Carnival funnel — the first CRU-NOL candidate in 78+ that doesn't fail on a known mechanism. Holding for the agent's full source/licence citation before final approval. |

Running: 3 approved, 2 rejected, 1 pending citation, 1 (CRU-MEX) needs a new candidate.

## Full sweep — cruise, all-inclusive, condo heroes, landing, condo interiors

Every crop below opened at shipped size myself; zoom checks run wherever a hull, funnel,
mural, or crop boundary needed it. Agent APPROVED/UNRESOLVED is a nomination — this table
is the verdict.

### Cruise (final report reconciled against my batch-1 zoom checks)

| Code | Verdict | Note |
|---|---|---|
| CRU-BAH | **APPROVED** | Confirms batch-1: hogisland_light, Nassau lighthouse, ship <3% on horizon |
| CRU-FTL | **APPROVED** | Confirms batch-1: bridge_sunset, mural is civic sailfish art |
| CRU-JAX | **APPROVED** | Confirms batch-1: skyline + bridge, ship genuinely absent |
| CRU-MEX | **REJECTED — overrules the agent's own approval** | Agent claims the funnel emblem is "a 5px blue dot." My own zoom of the identical file (NEAREST and LANCZOS, no double interpolation) shows a clean, high-contrast teal circular Princess Cruises "swirl" mark on a distinctively Grand-class funnel silhouette. Contrast and shape decide recognizability, not raw pixel count — this is the same failure class as the Carnival whale-tail funnel. Held UNRESOLVED pending the specialist agent's alternate. |
| CRU-NOL | **APPROVED** | jacksonsq_sunset — St. Louis Cathedral silhouette across the river at sunset. Zero hotel signage, zero Riverwalk mall, no ship. The owner never instructed a ship-reversal for New Orleans (that was MEX-specific), so a no-ship frame here is just the *standing* port-not-ship rule, not a deviation needing sign-off. First clean frame after 88 candidates across three sweeps. |

### All-inclusive

| Code | Verdict | Note |
|---|---|---|
| AIN-CUN | **APPROVED** | poolstrip — 2+ distinct properties, 4 pools, palapas, beach. Zero text. |
| AIN-DOM | **APPROVED** | bavaro_topdown — zoomed the right edge myself at (1400,0)-(1600,400): clean rooftops and HVAC units, no wordmark. The flagged "Royalton" pool-floor text sits well outside this crop. |
| AIN-MBJ | **REJECTED** | poolpanorama is a single, identifiable resort (the agent's own citation: Iberostar Rose Hall) shot as the sole subject — one building, one pool, one reef view. This is exactly the failure mode "shoot the strip not the resort" exists to prevent: a single-property frame can imply a guarantee the certificate doesn't make. CC BY attribution requirement is a second, smaller strike. Held UNRESOLVED pending the Montego Bay specialist agent. |

### Condo heroes

| Code | Verdict | Note |
|---|---|---|
| CON-KTH | **APPROVED** | Colorful cottages directly on the dune line, ocean immediately behind — the literal fix for "closer to the water." |
| CON-SEV | **APPROVED** | 9-12 cabins on a ridge, Smoky Mountains backdrop. Late-season snow dusting on the far peaks is a minor seasonal mismatch, not a compliance issue — noted, not disqualifying. |

### Landing-page heroes

| Subject | Verdict | Note |
|---|---|---|
| hawaii-waikiki-sunset | **REJECTED** | Zoomed the midground building: this is unmistakably the Royal Hawaiian Hotel — the "Pink Palace of the Pacific," one of the most recognizable named hotels in the world by silhouette and color alone, no text required. Same problem class as a legible logo, just architectural. Needs a new candidate. |
| hawaii-condo-resort | **APPROVED** | Multi-building Maui resort aerial, no legible signage, no single named landmark I can identify. |
| cabo-bluehour | **UNRESOLVED — agreed** | No free 3:4 portrait source exists at the needed geometry. Current image stands. |
| cruise-sunset | **APPROVED** | Silhouetted excursion boat at sunset. This also **fixes a live compliance problem**: the currently-shipping `cruise-sunset` has "REGAL PRIN…" and "HAMILT…" legible on the stern at the delivered 1200px size, right now, on `cruise.html`. This one ships first. |

### Condo interiors

| Code | Verdict | Note |
|---|---|---|
| CON-CAT | **APPROVED** | Vaulted pine great-room, stone fireplace, open kitchen with island seating. No branding visible. |
| CON-BRA | **APPROVED** | A-frame interior, glass wall to forest deck, wood stove. Agent-disclosed residual (a book spine, ~105x9px) accepted as genuinely sub-resolving. |
| CON-WID | **APPROVED** | Open living/dining/kitchen, the flagged Nescafé logo is outside this crop. |
| CON-CUN | **APPROVED** | Open-air palapa living space, direct ocean view. The flagged gallery wall is outside this crop. |
| CON-SLT | **UNRESOLVED — agreed** | Best candidate carries a legible SAMSUNG mark that survives downscaling and has no kitchen visible. No interior shipped for Tahoe. |

## Running total after this sweep

**Approved and ready to composite: 13** — CRU-BAH, CRU-FTL, CRU-JAX, CRU-NOL, AIN-CUN, AIN-DOM,
CON-KTH, CON-SEV (heroes) + CON-CAT, CON-BRA, CON-WID, CON-CUN (interiors) + cruise-sunset,
hawaii-condo-resort (landing).

**Rejected, need a new candidate: 3** — CRU-MEX (brand mark), AIN-MBJ (single property),
hawaii-waikiki-sunset (named landmark).

**Honestly unresolved, no free source exists: 2** — cabo-bluehour, CON-SLT.

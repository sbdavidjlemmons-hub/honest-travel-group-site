# CRU-MEX — ship-in-frame sweep V3 (ALT lane: Puerto Vallarta / Mazatlán / Progreso / Costa Maya)

Certificate: **CRU-MEX / mexico-cruise-region**. Scope: image only, no pricing work.
Governing brief: `research/IMAGE_BRIEF_V2.md`, **overridden on one point by the owner** — "get rid of it. Get a
real ship in there." A cruise ship must be visible; its name, hull wordmark and funnel mark must not be
legible at 1600x900. Ports assigned to this lane: Puerto Vallarta, Mazatlán, Progreso, Costa Maya/Mahahual.
Cabo San Lucas and Ensenada belong to the other agent and were not touched. Cozumel was skipped.
Date: 2026-09-12. Nothing in `img/`, `certificates/` or any `.html` was modified.

---

## Verdict: APPROVED — visually verified at native and at the shipped 1600x900

| Field | Value |
| --- | --- |
| Source | Unsplash, photo `YYSKPYHOq4E` — https://unsplash.com/photos/white-and-black-ship-on-sea-during-sunset-YYSKPYHOq4E |
| CDN native (no query string) | https://images.unsplash.com/photo-1585793753011-397e6e4668d6 |
| Photographer | Alonso Reyes (@alonsoreyes), Puerto Vallarta-based drone photographer |
| Licence | **Unsplash License** — free commercial use, no attribution required, no share-alike. Not Unsplash+ (no `premium_photo-` prefix). $0. |
| Stated location | "Puerto Vallarta, Jalisco, Mexico". Photographer's caption: "this cruise heading home with the most spectacular sunset of Puerto Vallarta, Mexico." |
| Camera (photo page) | Hasselblad L1D-20c (DJI Mavic 2 Pro). Published 2 Apr 2020; the filename prefix `1585793753` is the Unix upload stamp = 2020-04-02 — pre-generative. Native 5437x3622 is a hair inside the Mavic 2 Pro's 5472x3648 frame, i.e. a real sensor geometry. AI ruled out on both halves of the screen. |
| Native dimensions | **5437 x 3622** |
| Crop box (primary) | **(0, 300, 5437, 3358)** — full width, 16:9, downscaled to 1600x900 |
| Crop path (primary) | `research/crops/CRU-MEX_1600x900_alt_banderas_maasdam.jpg` |
| Crop box (tighter option) | (310, 665, 4918, 3257) → `research/crops/CRU-MEX_1600x900_alt_banderas_maasdam_tight.jpg` — ship at ~31% of width instead of ~25%; stern text goes from a dash to a faint smudge at 2x. Primary is the safer file; the tight one is there if the owner wants the ship bigger. |
| Ship in shipped frame | 400 x 202 delivered px = **25% of frame width** (primary). Stern-quarter angle, backlit, hull in shadow. |
| Port evidence | **None.** Open water in Banderas Bay, a low land mass on the horizon at far right. No berth, terminal or second vessel. Disclosed, not papered over — the owner's instruction puts the ship first; the "shoot the port" criterion is the one being reversed. |
| Overlay room | Top ~40% is clean orange-to-violet sky; bottom ~30% is clean water. Sun sits on the horizon at roughly x 38%, y 35%. |

### What I actually saw at 100%

At **native**, the ship is Holland America's *Maasdam* leaving Banderas Bay stern-quarter-on into the sunset. The
transom carries **"MAASDAM" over "ROTTERDAM"** in small gold serif capitals — fully legible at native (230x28 px
and 180x20 px). Below the funnel on the port deckhouse there is a partial **"Holland Amer[ica]"** deck sign
(210x30 px native). The **funnel** is a dark casing with white horizontal louvres and a faint curved white line
on its port face — it does not read as any brand shape, and it is nothing like a whale-tail. The visible port
bow and hull side carry **no text at all** (checked at 100%: dark navy hull, orange lifeboats, portholes only).
In the **shipped 1600x900** file the stern name measures **68 x 8 px** and the second line 53 x 6 px,
gold-on-navy in shadow: at 1:1 it is a pale dash on the transom; at 2x a smudge; at 3x a ghost you can only
"read" because you already know what it says — the same standard the coordinator accepted for the Port
Canaveral bow text. The deck sign is 62 x 9 px and does not resolve at 3x. The funnel mark is a 16 x 21 px
dark block. No wordmark, no ship name, no funnel logo resolves at the resolution that ships. No third-party
signage exists in the frame.

### Why this geometry passes where the others failed

Contrast, not size. Same photographer, same bay, same drone, same golden hour — three sibling frames failed
because their names sit on a **white** transom or hull in **blue** type (Royal Princess, Norwegian Gem,
Diamond Princess). *Maasdam*'s dark hull puts small gold letters in shadow; the downscale collapses them into
the silhouette. Stern-on helps only when the transom is dark.

---

## Rejected — opened at native or at the shipped render (7)

| # | Candidate | Source / licence / native | What I saw | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Royal Princess leaving PV into the sun | Unsplash `photo-1559599746-8823b38544c6`, Alonso Reyes, Unsplash License, 5417x3609 | Stern-on, gorgeous light, ship 24% width. **"ROYAL PRINCESS / HAMILTON" in blue on the white transom, ~190 px native → ~56 px delivered — still readable at 1:1 in the 1600x900 render.** Stern-on does not help when the transom is white. Reframing can only enlarge it. | REJECT |
| 2 | Norwegian Gem at sunset | Unsplash `photo-1578530332818-6ba472e67b9f`, Alonso Reyes, 5325x3544 | "NORWEGIAN GEM" on the hull side and again on the transom, both legible at native and at delivery; heavy teal/orange grade. | REJECT |
| 3 | Diamond Princess leaving PV, sunset | Unsplash `photo-1665669010272-41a35ee80190`, Alonso Reyes, 5441x3625 | "PRINCESS CRUISES" along the hull, "DIAMOND PRINCESS" on the transom and on the bridge-wing nameboard; ship 42% width. | REJECT |
| 4 | Ships docked in Puerto Vallarta | Commons, Anakondarh, **CC BY-SA 4.0**, 3840x2160, Samsung S7, GPS at the PV terminal | Azamara ship at the berth with **"AZAMARA" legible on the hull and the Azamara mark on the funnel**; a superyacht, the Marigalante pirate ship, a car park, a six-lane road and buses across the bottom third. Brand + not premium + share-alike. | REJECT |
| 5 | "Cruise Ship at Sunset near a Tropical Shore" | Pexels 36018868, Brayan Ramirez, Pexels License, 2440x3974 portrait | Hull fills the right half; a **"DIAMONDS INTERNATIONAL"** mural runs along the bottom edge behind a fence; no stated location (tags say Puerto Rico and Cancún). | REJECT |
| 6 | Cruceros BlueKay, Mahahual | Commons, Juan Ortega, CC BY 3.0, 6016x4000, Nikon D3200, Dec 2013 | Carnival ship at the Costa Maya pier, **red whale-tail funnel obvious at 1500 px** — the Carnival Glory trade dress; foreground is sunbathers in bikinis and a beached panga. Funnel + not premium. | REJECT |
| 7 | "Cruise ships docked in Costa Maya" | Flickr bvi4092, CC BY 2.0, 3362x1891 original | Original returned **HTTP 429 on four attempts** (45/75/90 s backoff) through the proxy. Only the 1024 px copy was seen (two ships at the pier, daylight, side-on). | **NOT VISUALLY VERIFIED** — does not count |

## Rejected at triage (contact sheets, 74 thumbnails across Pexels / Unsplash / Commons / Openverse)

| Group | What killed it |
| --- | --- |
| Alonso Reyes siblings: `photo-1665669010244` (b/w Diamond Princess), `photo-1665668890636` (Diamond Princess, "PRINCESS CRUISES" readable even at 800 px), `photo-1559600088` (Norwegian ship side-on in daylight with the PV skyline, 40% width, hull art) | Hull-side wordmarks on white in daylight |
| Commons Port of Puerto Vallarta: *Crucero en PTO Vallarta (6)*, *Marigalante y crucero*, *Vistas de PV (2)* (all Ferfive CC BY 4.0), *Puerto Vallarta, Mexico* (TerryDOtt, 8192 px pano) | Carnival whale-tail in every Ferfive frame; NCL hull art on the pano |
| *Dawn Princess at PV 6*, *Las naves del pacifico*, *Luka u Puerto Vallarti* x2, *Cruise ship in PV* | Daylight side-on at berth with name on the hull; two are terminal car parks; all CC BY-SA |
| *Puerto Vallarta Crucero*, *Puesta de Sol* (Abraham Aguilar Flores) | 1024x768 — below the deliverable |
| Progreso: *Carnival Freedom in Progreso* (CC BY-SA), *Cruise ship in the distance off Yucatán* (Philip N. Cohen, CC BY-SA 2.0, 2994 px) | Carnival trade dress; the second is a grey ship in grey haze — brand-safe but not a vacation |
| Mazatlán: Pexels 12318706 / 12004343 / 34204411 / 32351611, Unsplash Jaime Florian set, Adolfo Félix | Skyline and rock aerials with no cruise ship; the "ship" in 1618939315314 is a tourist boat; Commons category holds only Carnival Splendor and Regal Princess spotter frames |
| Costa Maya / Mahahual: Pexels 5769605 (Julia Volk — tags Bahamas/Jamaica/Aruba, not Mexico), 29146142 and 30037131/41/46/39 (Costa bows and lit "Costa Smeralda" logo), 30439422; Unsplash Steve Matthews Mahahual aerials (no ship) | Wrong location, Costa funnel trade dress, or no ship |
| Pexels 30890766 (cannons = San Juan), 33449032 (statue + container cranes), 15564308 (foliage-framed ship, port unstated) | Wrong port or unusable composition |
| Unsplash Progreso, Costa Maya, Mazatlán `premium_photo-` items (Getty) | Paywalled — excluded on sight, $0 budget |

## Search log

| Query | Where | Yield |
| --- | --- | --- |
| puerto vallarta cruise ship | Pexels, Unsplash | Unsplash: the entire Alonso Reyes set (6 frames) — the only PV cruise photography on either platform |
| mazatlan cruise ship / mazatlan | Pexels, Unsplash | Zero cruise ships at Mazatlán on either platform; Pexels "mazatlan cruise ship" returns Cádiz, Hobart, Ajaccio |
| progreso yucatan | Pexels, Unsplash | Beach and pier frames, no ship; Getty-only for the pier itself |
| costa maya / mahahual | Pexels, Unsplash | Beach aerials, no ship; "costa maya" is a destination solvent → Costa Cruises ships in Europe |
| cruise ship sunset mexico | Pexels, Unsplash | Re-surfaces the Alonso Reyes set; everything else is Ensenada (other lane), Grenada, Turkey, Italy |
| Category:Port of Puerto Vallarta, Category:Cruise ships in Mexico, Category:Cruise ships in Mazatlán | Commons via WebFetch | 51 + 33 files enumerated; 30 fetched as 640 px thumbs via the API; spotter photography throughout |
| puerto vallarta / mazatlan / progreso / mahahual / costa maya cruise ship, banderas bay cruise ship sunset | Openverse | 1024 px Flickr copies of Commons files already seen; one CC BY Costa Maya frame (429 on the original) |

## Notes for the coordinator

- **Attribution:** none required under the Unsplash License. Credit "Alonso Reyes / Unsplash" on `artwork-credits.html` anyway if the page lists every hero.
- **Caption rule:** never carry "Maasdam", "Holland America", or the ship name into any caption, filename or alt text. Re-caption generically ("cruise ship at sunset, Banderas Bay") — the certificate promises no line, ship or port.
- **Two disclosed deviations from the V2 table:** no berth infrastructure in frame, and the ship is at sea rather than alongside. Both are consequences of the owner's instruction, not oversights; the Grand Cayman approval set the precedent for an anchorage/at-sea geometry.
- **The other lane's file** `research/crops/CRU-MEX_1600x900_cabo_anchored.jpg` exists and was not touched; the `alt_` prefix keeps this lane separate.
- Candidates opened at native/shipped resolution: 7 (+1 unretrievable). Triaged on contact sheets: 74. Stop rule not reached.

# CRU-GAL hero — V3 opportunistic upgrade sweep

**Certificate:** CRU-GAL / Galveston Cruise · **Date:** 2026-09-12 · **Brief:** `research/IMAGE_BRIEF_V2.md`
**Bar set by owner:** "Galveston is okay for now. If you can find another one, great." — i.e. *clearly better* than the shipping frame, or no change.
**Scope:** images only. Nothing in `img/`, `certificates/` or any `.html` touched. New files: this report and two challenger renders in `research/crops/`.

---

## Verdict: **NO UPGRADE — the current frame stands.**

Unsplash `photo-1779722769615-3e8c6cb102fe` (Gower Brown), crop `(0,250,4960,3040)`, Seawolf Park, stays.

**Why, in one line:** there is still no second cruise-berth photograph of Galveston at zero budget, and every frame that is prettier than Seawolf Park has no ship and no berth in it — a different product, not a better version of this one.

---

## What was searched (all new since the V2 sweep of 2026-09-09)

| Source | Queries | Result |
| --- | --- | --- |
| Unsplash (WebFetch → CDN, no query string) | `galveston` p1+p2, `galveston texas`, `galveston pier`, `galveston cruise`, `galveston port`, `seawolf park` | **Zero new cruise-berth frames.** The only ship-at-berth image in the whole corpus is the current primary. 5 Getty/Unsplash+ items (paywalled, skipped). New finds are all Pleasure Pier. |
| Pexels (WebFetch → CDN) | `galveston`, `galveston texas port`, `galveston pier`, `galveston cruise ship`, `galveston harbor` | **Zero cruise ships at Galveston.** "galveston cruise ship" returns Cádiz, Hobart, Auckland. Corpus is beach, jetty, Pleasure Pier, shrimp dock. |
| Openverse API (`license=by,cc0,pdm,by-sa`) | `galveston harbor`, `galveston cruise`, `port of galveston`, `galveston cruise terminal`, `galveston ship channel`, `pier 21 galveston`, `harborside galveston`, `pelican island galveston`, `seawolf park`, `galveston pleasure pier`, `galveston seawall`, `galveston strand` | ~240 rows, almost all 1024 px Flickr. Every cruise frame is Carnival (whale-tail funnel + name) or a rig lay-up. |
| Flickr CC (WebFetch, `_n→_b`, `/sizes/o/` for four originals) | `galveston cruise ship`, `galveston harbor sunset`, `galveston pleasure pier sunset`, `galveston port cruise terminal`, `galveston cruise` newest-first | Newest-first to Sep 2026: Royal Caribbean at ~75 % of frame (name legible), Carnival Breeze, cabin interiors. |
| Wikimedia Commons (API + category walk) | `Category:Galveston Island Historic Pleasure Pier` (45 files), `Royal caribbean Terminal 10 Galveston 2023`, `Port of Galveston June 2016 - Sailing Ship` (previously unverified) | Terminal 10 = "Welcome" + crown-and-anchor + Chevrolet. Sailing Ship = *Elissa*, no cruise ship. Category has 4 Carol Highsmith PD night frames of the pier (7360 px) — no ship. |

**Opened individually at native/full frame: 8. Triaged on eight contact sheets: ~90. Cap of 20 not reached — the supply ran out first.**

---

## The port class — exhausted, again

| Candidate | Source / licence / native | What I saw | Verdict |
| --- | --- | --- | --- |
| "Maritime scene in Galveston Harbor" — roy.luck | Flickr 9760068183 · CC BY 2.0 · 3216×2448, **iPhone 5** | Pier 21: *Elissa*'s bowsprit, yacht "Boardwalk" (name legible), cruise bow ~30 % of frame. **"CARNIVAL MAGIC" legible twice on the bow** at native, red-white-blue Carnival stripe. Phone file. | REJECT — branded, uncroppable (mark is central), 3 MP phone. |
| "Port of Galveston" — jillccarlson | Flickr 26982074674 · CC BY 2.0 · 5760×3840, Canon 5D III | Elevated view of *Elissa* at Pier 21, warm evening light. **No cruise ship.** "ELISSA" legible on the bow; warehouses, car park and a party-boat sign behind. | REJECT — no passenger ship; industrial backdrop. |
| Royal Caribbean Terminal 10, 2023 | Commons · CC BY 2.0 · 3001×2000 | Terminal facade: giant "Welcome", crown-and-anchor logo, "CHEVROLET" tailgate. | REJECT on sight (triage). |
| Royal Caribbean at berth, 2025 | Flickr 54299750089 · 1024 px triage | Voyager-class ship side-on, ~75 % of frame width, sheds behind. | REJECT — fails the 40 % rule before the name check; not pursued to original. |
| roy.luck 2011/2013 series (10 frames) | Flickr · CC BY 2.0 · 1024 px | Carnival Conquest / Magic bow-on with names, or jack-up rigs, or B&W storm. | REJECT — all. |
| Patrick Feller "Fishing and Carnival Magic, Outbound" | Flickr 9501282321 · CC BY | Full Carnival Magic broadside, whale-tail funnel, angler in foreground. | REJECT — brand shape. |
| "Bolivar Ferry Passing Seawolf Park at Sunset" | Flickr 4201610199 · CC BY · 1024 px | Ferry silhouette at dusk. Not a cruise ship, no berth. | REJECT. |
| Commons "Port of galveston.jpg" | CC BY · 1875×1276 | Three container gantries. | REJECT — freight. |

Nothing in this class is a candidate. The V2 finding holds: *Pexels has no cruise ship at a Galveston berth; Unsplash has exactly one, and it ships today.*

---

## Best challenger — and exactly why it lost

**"Sunset at Pleasure Pier, Galveston Texas" — Justin Wolff (@jayphoto), Unsplash**

| Field | Value |
| --- | --- |
| CDN | `https://images.unsplash.com/photo-1701972184355-d7de7849ee26` (no query string → 8256×5504) |
| Licence | Unsplash License — commercial use, no attribution, no share-alike. Plain "Free to use" banner, not `premium_photo-`. |
| Location (page) | Galveston, TX, USA — published 2023-12-07; filename timestamp `1701972184` = 2023-12-07, cross-checks. |
| Native | **8256×5504** = Nikon D850/Z7-class full-frame native geometry, uncropped. Camera not stated on the page; EXIF stripped by CDN as always. Reasoned call: real capture — long-exposure surf motion, true depth gradient, pre-generative upload date. |
| Render | `research/crops/CRU-GAL_1600x900_v3_pleasure-pier-wolff.jpg` — crop box **(0,240,8256,4884)**, 0.194× downscale. |

**What I actually saw at 100 % (native).** The full pier from the beachhead to the seaward tip, ~60 % of frame width, sitting on a horizon at 44 % height under an unbroken pink-to-lavender dusk gradient; long-exposure surf fills the bottom half. On the landward buildings at native the **"BUBBA GUMP SHRIMP CO." roundel is fully legible**, so are "FACE YOUR FEAR · IRON SHARK", "PLEASURE PIER · FUN", **"FOOD / GAMES / RIDES"** and "LIVE MUSIC". In the *delivered* 1600×900 file at 4× nearest-neighbour: the Bubba Gump roundel is a 25-px pink disc with a dark band — no letters resolve; "FOOD" and "RIDES" are ~12 px saturated blocks, word-shape readable, letters marginal; "GAMES" does not resolve. Those are generic amenity words, not brands. Badge zone (620–980, 53–116) is pure sky: luminance mean 188, σ 5.5 (Seawolf: 228, σ 1.4 — both clean).

**Where it beats Seawolf Park:** premium light (dusk vs flat overcast), instantly recognisable Galveston landmark vs a port only locals know, 8256 px vs 6016 px native, cleaner and prettier badge sky.

**Why it lost anyway — the one criterion it cannot meet:** *there is no ship and no berth.* The cruise family rule is "real passenger ship at a berth in the assigned port"; the parent's own list of what "better" means includes "a stronger port read", and this frame has none. Every other cruise hero in the programme (Port Canaveral, Cozumel, Grand Cayman, Tampa, San Pedro) shows a ship; a roller-coaster pier under a cruise headline reads as an amusement-park product. That is a sideways move on the product cue, and a sideways move is a fail under the owner's bar. It is not an artwork problem and no crop fixes it.

**Second challenger, same class:** "Pleasure Pier" — Thomas Ohlsson Photography, Flickr 38107791236, **CC BY 2.0 (attribution obligation attaches)**, 4896×3264 Fujifilm X-T1, EXIF intact (2017-11-04). Pastel dusk, lit rides reflected in wet sand, one person at the right edge. Rendered at `research/crops/CRU-GAL_1600x900_v3_pleasure-pier-ohlsson.jpg`, box (0,143,4896,2897), 0.327×. At 100 % the head building shows arches and lit interior, **no legible text**; visible high-ISO grain. Loses to Wolff on resolution, licence and noise; loses to Seawolf Park for the same reason Wolff does.

**Owner's escape hatch, stated once:** if a no-ship Galveston *destination* hero is acceptable for CRU-GAL, the Wolff frame is verified, rendered and ready at the path above. That is a product-read decision for the owner, not one I can make inside the brief.

---

## Other Pleasure Pier frames opened at native — for the record

| Frame | Source / licence / native | Why not |
| --- | --- | --- |
| Trace Hudson "Vibrant sunset over Galveston's iconic amusement pier" | Pexels 2386404 · Pexels License · **2560×2048 only** | Most saturated frame in the sweep, but the pier *is* the subject (fills the frame); "FOOD / GAMES / RIDES" and "Sea Dragon" legible at the 0.625× delivered scale; sun flare in the top-right badge zone; lowest native. |
| Josh Olalde "a beach with a roller coaster in the background" | Unsplash photo-1648062897404-5a3fc56f7be4 · 6240×4160 (Fuji X-Trans 26 MP native) | Golden hour with beachgoers — good, but pier is a dark silhouette line and the sky is a flat grey-blue; a faint "Rock n Roll" script on the head-building roof at native, unreadable delivered. Weaker than Wolff on every axis. |
| Terren Hurst "a pier with a roller coaster in the distance" | Unsplash photo-1638300163974-8e9ba222a245 · 5407×3605 · Canon R6 | Moody dark storm-light silhouette; too dark to sell a vacation. |
| Katie Haugland Bowen "Pleasure Pier Blue Hour HDR" | Flickr 7634796316 · CC BY · 4516×2970 | HDR treatment; **"BUBBA GUMP" roundel legible** on the head building at delivered scale — third-party brand, central. |
| Carol M. Highsmith dusk series (4) | Commons/LoC · Public domain · 7360×4912 TIF | Triaged at 1280: true night, lit rides on black water. Handsome, PD, huge — and no ship. Not opened at native; recorded so the next sweep doesn't re-find them. |
| Alberto Abouganem, Sankenbruck, Barera, Rader, Webster | Commons/Flickr · CC BY / BY-SA · 4–8k | Triaged: entrance signage, swing-ride light trails, monochrome, car parks, or BY-SA. |

---

## Do-not-re-find list (adds to V2's)

- Every roy.luck Galveston frame (2011, 2013 series): Carnival names, rigs, iPhone, or B&W.
- jillccarlson "Port of Galveston" (10 frames, 2016): *Elissa*, city, rigs, Fisherman's Wharf signage, coach park — no cruise ship in any of them.
- Flickr newest-first to Sep 2026 has produced nothing usable since the V2 sweep.
- Any Pleasure Pier frame that includes the head building carries the Bubba Gump roundel at native; it only survives at ≤0.2× delivery.
- Unsplash `galveston port` returns two images, one paywalled; `seawolf park` returns two, both the museum warship.

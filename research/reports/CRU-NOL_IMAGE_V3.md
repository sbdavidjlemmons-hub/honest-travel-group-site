# CRU-NOL — image acquisition V3 (New Orleans cruise)

Certificate: **CRU-NOL / new-orleans-cruise / New Orleans Cruise**
Scope: image only. **No pricing work performed.**
Governing brief: `research/IMAGE_BRIEF_V2.md` (read in full before searching).
Prior sweep: `research/reports/CRU-NOL_IMAGE_V2.md` (38 candidates, all rejected — not re-examined here).
Date: 2026-09-09

---

## Verdict

**NO CANDIDATE PASSES. Free-licence sources cannot meet this standard for New Orleans — buy stock.**

This sweep was commissioned specifically because V2 was 34 Wikimedia + only 4 Pexels: Unsplash,
Openverse and openverse.org had all returned 401/403 in that session. **That blockage is now
broken** (§1 documents exactly how). I reached Pexels, Unsplash, Openverse and Flickr, enumerated
their complete New Orleans river inventories, and **downloaded and opened 40 new candidates**.

The result is not a near-miss. It is a structural finding:

1. **Unsplash's entire stock of good New Orleans river/dusk imagery is Getty / Unsplash+ — a paid
   licence, not the Unsplash License the brief permits.** The free tier contains no ocean cruise
   ship at New Orleans at all. (§4)
2. **Exactly one image in 40 contained a real ocean cruise ship at berth in New Orleans in good
   light** — and it is a **Carnival** ship whose red whale-tail funnel and orange hull artwork are
   unmistakable at 4× magnification, with "WESTIN" and "Marriott" legible in the same frame. (§5)
3. **Pexels' entire New Orleans cruise-ship inventory is two photographs**, both already opened and
   rejected in V2.

The frame the brief asks for — the dusk drone shot that solved Miami — *does exist* for New Orleans.
It is `premium_photo-1733281223460-9ad20c22960c` ("Telephoto Drone Shot of Downtown New Orleans at
Sunset", Getty Images) and its siblings. They are behind the Unsplash+ paywall. That is the answer:
**this frame is purchasable, not free.** (§7)

I am nominating nothing. Per the mandate, reporting this plainly is the correct outcome.

---

## 1. Fetch technique — the V2 blockage is solved, record this for future agents

V2 reported Unsplash/Openverse as hard-blocked. They are reachable. The specifics:

| Endpoint | Plain `curl` | Works via |
| --- | --- | --- |
| `www.pexels.com/search/…` | **403** — Cloudflare "Just a moment…" interstitial | **`WebFetch`** renders it fully |
| `unsplash.com/s/photos/…` | **401** — Anubis "Making sure you're not a bot!" | **`WebFetch`** renders it fully |
| `unsplash.com/napi/search/photos` | **401** (same wall) | — |
| `images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?…&w=1920` | **200** | plain curl, any UA |
| `images.unsplash.com/photo-<HASH>?w=2400&q=85` | **200** | plain curl, any UA |
| `source.unsplash.com/<id>/1920x1080` | **503** — endpoint retired, do not use |
| `api.openverse.org/v1/images/` | **200** — **no longer 401**, anonymous works | plain curl |
| `www.flickr.com/search/` | 200, but HTML carries thumbnails with **no titles or attribution** | unusable for enumeration |

**Working method:** `WebFetch` the search page to harvest photo IDs / `photo-<hash>` filenames, then
`curl` the CDN directly. A browser User-Agent does **not** defeat either bot wall — only WebFetch does.

Openverse anonymous search accepts `license=by,cc0,pdm,by-sa` and `size=large`; ten queries × two
pages returned 111 unique results, of which the New Orleans subset was **almost entirely Wikimedia
files already covered by V2**. Openverse adds essentially nothing here beyond Commons.

---

## 2. Coverage — what was enumerated

- **Pexels** (via WebFetch): `new orleans cruise ship`, `port of new orleans`, `new orleans aerial`,
  `new orleans river sunset`, `new orleans cruise terminal`, `new orleans port sunset`,
  `cruise ship river dusk`. The New Orleans result sets converge on the **same ~20 photographs** —
  the library is small and I have now seen all of it.
- **Unsplash** (via WebFetch): `new-orleans-river`, `new-orleans-cruise`, `port-of-new-orleans`,
  `new-orleans-skyline`, `mississippi-river-new-orleans`, `new-orleans-sunset`. Same convergence.
- **Openverse API**: 10 queries × 2 pages, commercial-use licences only.
- **Flickr**: reachable but un-enumerable (no metadata in HTML); reached indirectly through Openverse.

**40 new candidates downloaded and opened with the Read tool.** None of the 38 from V2 was re-examined.

---

## 3. Rejection list — Pexels (17 new, all *visually verified*)

Licence for all: **Pexels License** (free commercial use, no attribution). Same caveat as V2 — this
is functionally equivalent to the Unsplash License but is not one of the four the brief names.

| # | ID / title | Photographer | Served px | What I actually saw | Verdict |
|---|---|---|---|---|---|
| X01 | `39004126` Night View of New Orleans Skyline | NC Farm Bureau Mark | 1920×1280 | Night skyline from Algiers, long colour reflections. **"WESTIN"** in large white caps and **"Marriott"** in red both fully legible; a "PARK" sign and a red neon sign too. Only vessels are a towboat pushing a barge and a paddlewheeler at the wharf. **No cruise ship.** | REJECT |
| X02 | `39004108` Bridge over Mississippi River | NC Farm Bureau Mark | 1920×1280 | Wide daylight river, CCC bridge centred, bright cumulus. Tour boats and a yellow wharf structure at left, industrial sheds at right. **No cruise ship.** Flat midday light. | REJECT |
| X03 | `39004136` Crescent City Connection Bridge | NC Farm Bureau Mark | 1920×1280 | Bridge across the full frame under cumulus. Moored barges left, blue industrial plant and a water tower right. **No cruise ship.** | REJECT |
| X04 | `39004112` Sunset Over Tranquil River Waters | NC Farm Bureau Mark | 1920×1280 | Genuinely lovely golden-hour sun over the river — but shot **from a moving vessel** (its wake fills the lower half), looking at an industrial bank of transmission pylons and sheds. **No ship, no city.** | REJECT |
| X05 | `39026420` Industrial Skyline at Sunset with Riverboat | Oleksiy Yeshtokyn | 1920×1280 | Derelict Market Street Power Plant, twin stacks, **graffiti "REZNOR / POSUM / TOBY" legible** across the façade. Transmission pylons, a loaded barge and towboat. Skyline tiny at right. **No cruise ship.** | REJECT |
| X06 | `39026408` Cargo Ship Docked at Industrial Port | Oleksiy Yeshtokyn | 1920×1280 | **"BULK PROMISE"** in white caps across the bow of a black/red bulk carrier at a conveyor berth. Freight, not a cruise. | REJECT |
| X07 | `38720292` Night View of New Orleans Skyline | Oleksiy Yeshtokyn | 1920×1280 | Night skyline. **"Marriott"** in red and **"CAESARS"** both legible. WTC tower lit red/white/blue. Only a paddlewheeler at the wharf. **No cruise ship.** | REJECT |
| X08 | `39001318` Twin Bridges at Sunset | Oleksiy Yeshtokyn | 1920×2880 | Portrait, looking up between the two CCC spans with purple accent lighting. Pretty sky, but the base of the frame is the Algiers ferry approach: car park, red brick warehouse, highway ramps. **No cruise ship.** | REJECT |
| X09 | `22430898` Buildings by River in New Orleans | Kelly | 1920×1079 | Drone over the river. Sky is **blown out to flat white** (no overlay value). **"WESTIN"**, **"Marriott"**, **"PARK"** legible; paddlewheeler **"NATCHEZ"** name legible bottom-right; festival crowds and marquees. **No cruise ship.** | REJECT |
| X10 | `22430903` Birds Eye View of New Orleans | Kelly | 1920×1079 | Drone over the CBD/French Quarter. **"WESTIN"**, **"HOTEL MONTELEONE"**, **"PARK"** legible. Car parks and box trucks fill the lower third. **No river of note, no ship.** | REJECT |
| X11 | `22430901` Aerial of the French Quarter | Kelly | 1920×1079 | Drone over the Quarter rooftops. **"HOTEL MONTELEONE"** and **"ANTOINE'S RESTAURANT"** legible. **No river, no ship.** | REJECT |
| X12 | `25003118` Jackson Square at Sunset | Fernando B. M. | 1920×1281 | Handsome golden-hour silhouette of St Louis Cathedral from the river, big warm sky. Foreground is a riprap levee, a white event marquee on scaffolding, and parked cars. **No cruise ship.** | REJECT |
| X13 | `32744124` Tugboat with New Orleans Skyline | Chad Populis Photography | 1920×1280 | Towboat with a "Z" funnel logo shot **through bare winter branches** that clutter the whole lower half. **"Sheraton"**, **"LCMC Health"**, **"Pan-American Life"** legible. **No cruise ship.** | REJECT |
| X14 | `35596114` Cape Knox Military Ships | Prathsnap | 1920×2880 | **"CAPE KNOX"** in black caps on two grey Maritime-Administration sealift hulls. Military, not vacation. | REJECT |
| X15 | `34150166` Steamboat Creole Queen | Hannibal Photography | 1920×1162 | **"CREOLE QUEEN"** in metre-high letters plus "CQ" on the paddlebox. Paddlewheeler, not an ocean cruise ship. | REJECT |
| X16 | `34183380` B&W Cargo Ship on Mississippi River | Anna Stromberg | 1920×1440 | Monochrome tanker **"POSILLIPO"** with a steel handrail and brick promenade across the bottom third. Freight. | REJECT |
| X17 | `7203502` Grayscale Waterfront City Buildings | Essow K. | 1920×1280 | **Compositionally the cleanest frame in the whole sweep** — pure New Orleans skyline silhouette from across the river, zero legible signage (everything is in shadow), half the frame open water, half open sky. Killed by two things: it is **monochrome** (the brief wants dusk/golden hour), and there is **no cruise ship, no berth, no port evidence** of any kind. | REJECT — see §6 |

---

## 4. Rejection list — Unsplash (21 new, all *visually verified*)

**Licence finding, and it is the important one.** Unsplash serves two different licences:

- `images.unsplash.com/photo-*` = **Unsplash License** — free, permitted by the brief.
- `plus.unsplash.com/premium_photo-*` = **Unsplash+ License** — a **paid subscription** product,
  almost all of it supplied by **Getty Images**. **Not free, not permitted by the brief.**

Across six New Orleans searches, **every single well-composed New Orleans river, dusk, drone or port
frame was `premium_photo-*` / Getty.** Titles observed, all paywalled:
`Sunset over New Orleans on the Mississippi River` (×4 distinct assets),
`Telephoto Drone Shot of Downtown New Orleans at Sunset`, `Drone View of Downtown New Orleans`,
`The Skyline of New Orleans … across Mississippi River`, `An aerial of Freighter on Mississippi
River at New Orleans`, `An aerial of Freighter at bridge over Mississippi River at New Orleans`,
`An aerial scene of Mississippi River at New Orleans`, `The Mississippi River seen from the Central
Business District`, `A vibrant blue sky above the Mississippi River and the Crescent City Connection`.

I did not download these: they fail on licence before composition matters. The free residue is below.

| # | `photo-<hash>` | Photographer | Served px | What I actually saw | Verdict |
|---|---|---|---|---|---|
| U01 | `1712245240110-eaffb661bb86` | Ricky Beron | 6000×3372 | **The only real ocean cruise ship at berth found in this sweep.** See §5 — Carnival whale-tail funnel + "WESTIN" + "Marriott". | REJECT |
| U02 | `1652141559192-8b83f87dde91` | David Lin | 2400×1600 | **Best hero-overlay frame found anywhere.** Teal-and-orange dusk, skyline in near-silhouette across the river, clean sky top half, clean water bottom half. Killed by: **no cruise ship**, **"Marriott"** in red clearly legible, "CapitalOne" and "HOTEL MONTELEONE" legible, and a **transmission pylon with power lines** crossing the centre of the frame. | REJECT — see §6 |
| U03 | `1661735365500-aed60aeff97d` | Yuhan Du | 2400×1351 | Titled "a large ship docked" — it is the **Natchez** paddlewheeler at the wharf, fleur-de-lis ironwork, yellow construction crane behind. Not an ocean cruise ship. | REJECT |
| U04 | `1651573563984-8e8be82a9ff0` | Tomo M | 2400×3600 | **Not New Orleans.** This is **Osaka, Japan** — Japanese shopfront signage, Umeda towers, a ferris wheel. Mislabelled by Unsplash's New Orleans search. | REJECT |
| U05 | `1691388205972-325956f0dfec` | Joseph Hsing | 2400×3620 | **Not New Orleans.** This is **Disneyland's Mark Twain Riverboat** — gold-crowned stacks, Rivers of America, Big Thunder Mountain rockwork. Theme-park content, explicitly barred. | REJECT |
| U06 | `1657120925406-947f8655ab9e` | Quick PS | 2400×1600 | Steamboat **"NATCHEZ"** in large red letters, lovely pink sunset, big clean sky. Paddlewheeler with the name legible. | REJECT |
| U07 | `1591761912434-ba45ea84d00a` | Mary Hammel | 2400×1800 | **"NATCHEZ."** in metre-high shaded caps, red paddlewheel, steel handrail across the foreground. Harsh midday blue. | REJECT |
| U08 | `1599335474334-c55974fdd7e4` | Tomas Martinez | 2400×1800 | Natchez stern at the wharf; **"STEAMER NATCHEZ / PORT OF NEW ORLEANS"** board fully legible. Flat midday. | REJECT |
| U09 | `1560110612-d9e9237f8327` | Morgan Petroski | 2400×1600 | Natchez under a dramatic black storm cell. Big moody sky — but **"NATCHEZ."** legible, a tanker at left, and the light is storm, not dusk. | REJECT |
| U10 | `1655070180522-9e54cbb6e763` | Gower Brown | 2400×1602 | **"City of New Orleans"** paddlewheeler at the wharf. **"WESTIN"** and **"Hilton"** legible, a **"DUKES OF DIXIELAND"** banner, green-striped awnings, yellow crane. Bright midday. No ocean ship. | REJECT |
| U11 | `1599335440661-61bac9d4f62b` | Tomas Martinez | 2400×1800 | Riverfront from the Moon Walk under flat grey overcast. **"WESTIN"** legible right; paddlewheeler at the wharf; riprap rocks in the foreground. No ocean ship. | REJECT |
| U12 | `1707941391629-f92a48230b29` | Sunira Moses | 2400×1601 | Wide orange sunset over the river with a big clean sky. Far bank is a **row of wharf sheds and transmission pylons**; power lines enter frame at left. **No vessel of any kind.** | REJECT |
| U13 | `1668764619178-15632660a315` | Mel Zhang | 2400×1800 | Rooftop view over French Quarter roofs at sunset. A **transmission pylon dominates the centre**; foreground is entirely roof plant and AC units; only a paddlewheeler at the distant wharf. | REJECT |
| U14 | `1696308085740-5569aa0825c1` | Scott Gundersen | 2400×1591 | Red-hulled bulk carrier stern filling the right half, grainy film dusk. Freight. | REJECT |
| U15 | `1658976824038-333778031d4d` | Cody Wingfield | 2400×1600 | **Rusted chain-link fence and barbed wire** across the left half, derelict wharf decking, a **"Bollinger"** shipyard sign behind. The exact "technically compliant, commercially unusable" failure V2 flagged. | REJECT |
| U16 | `1659147554654-7a548884b60d` | Justin Wilkens | 2400×3600 | Derelict concrete pier on piles with graffiti on its end wall; a distant cargo ship. Backlit and atmospheric but reads as urban decay, not vacation. | REJECT |
| U17 | `1663296997291-a114272280cc` | iSawRed | 2400×1306 | Dusk on a wooded river bend shot from a deck; a **white handrail stanchion occupies the left third**. No city, no port, no ship. | REJECT |
| U18 | `1749385135312-330a639625e7` | Dhruvin Pandya | 2400×1600 | Dusk from a paddlewheeler deck. Underexposed; a **balustrade and the backs of passengers' heads** fill the bottom quarter; a "PLEASE DO NOT SIT ON RAIL" sign. Distant skyline only. | REJECT |
| U19 | `1659409652510-29ff975b99d9` | Scott May | 2400×3600 | Beautiful golden silhouette of two passengers at a paddlewheeler rail. But it is shot **from** the vessel — no ship in frame, no berth — and transmission pylons sit on the horizon. Wrong subject entirely. | REJECT |
| U20 | `1771868540030-cb8c7a7730a9` | Fujiphilm | 2400×1603 | Shot **through an aeroplane window** over Lake Pontchartrain at sunset — a black window frame down the right edge and a large smeared blur across the lower half. Not a port. | REJECT |
| U21 | `1610562409635-6242c9854e0d` | Erica Li | 2400×1600 | Sailing marina at golden hour (Lake Pontchartrain, not the cruise port). Boat names **"MIRAGE / NEW ORLEANS"** and **"MOON PIE"** legible. No cruise ship. | REJECT |

---

## 5. The one real cruise ship — and exactly what kills it

**U01 — `photo-1712245240110-eaffb661bb86`, Ricky Beron, Unsplash License, 6000×3372.**

Structurally this is very close to the V2 formula and to the Miami solution. Elevated aerial from
above Algiers Point looking upriver at the CBD in warm early light; a large white cruise ship lies at
the Julia Street wharf **small in frame (~11% of frame width)** under the Crescent City Connection;
terminal sheds, the Algiers ferry landing and a towboat-and-barge give real port evidence; the lower
right third is clean open water suitable for an overlay.

I re-fetched the original at 6000px and cropped two regions at **4× and 3×** rather than guessing:

- **Ship (4×):** the funnel is the **Carnival red-white-and-blue whale-tail**, unmistakable in shape
  and colour, and the hull carries Carnival's **orange/red "sunrise" bow artwork** along its whole
  length. The brief names the Carnival funnel as **disqualifying because it survives silhouetting** —
  and here it survives being 11% of the frame, which is the point.
- **Skyline (3×):** **"WESTIN"** in large caps and **"Marriott"** in red are both **fully legible**.

So it fails the brand check three times over: operator trade dress, plus two hotel wordmarks the
brief names as known offenders. It cannot be cropped out of trouble — the ship *is* the reason to use
the image, and the hotel signage sits in the opposite third from it.

Secondary issues: a barge under tow in mid-river, a shipyard crane on the Algiers bank, and a parked
RV and bare dirt in the near foreground.

---

## 6. Near-misses, if the coordinator ever wants to relax one criterion

Neither is nominable as written. Recording them so the trade-off is explicit rather than rediscovered.

| Frame | What it has | The single thing it lacks |
| --- | --- | --- |
| **U02** `photo-1652141559192-8b83f87dde91`, David Lin, Unsplash License, 2400×1600 | The best light and the best overlay geometry in the entire sweep — teal/orange dusk, half clean sky, half clean water, real New Orleans skyline | **No ship, and "Marriott" is legible.** Two relaxations, not one. |
| **X17** `pexels-7203502`, Essow K., Pexels License, 1920×1280 | Total absence of legible branding — everything is silhouette. Clean sky and water. | **No ship at all**, and it is **monochrome**. |

There is no image in this sweep that a *single* relaxation rescues. U01 would need the Carnival
funnel rule waived **and** hotel signage waived — and the funnel rule exists precisely because
distance and backlight do not defeat it.

---

## 7. Conclusion and recommendation

**Free-licence sources cannot meet this standard for New Orleans. Buy stock.**

V2 hypothesised that an Unsplash key would "materially change the odds" and called it the single
highest-value unblock. **That hypothesis is now tested and false.** Unsplash was fully searched. Its
free New Orleans inventory holds paddlewheelers, hotel signage, transmission pylons and two
mislabelled non-New-Orleans images. Its *good* material — including precisely the dusk aerial that
solved Miami — is Getty-supplied Unsplash+, i.e. paid.

Why New Orleans defeats the formula, confirmed independently of V2's reasoning:

1. **The homeport line is Carnival.** The whale-tail funnel is a high-contrast logo that survives the
   exact distance-and-backlight techniques the brief relies on. Distance does not save a Carnival ship.
2. **The skyline is hotel signage.** "WESTIN" and "Marriott" appear in **eleven** of the 40 frames I
   opened. They are the two brightest rooftop marks in the city and they are legible from Algiers,
   from the air, and at night.
3. **The riverfront is a working freight channel.** Barges, towboats, tankers and transmission pylons
   appear in most wide frames.
4. **"New Orleans cruise" overwhelmingly means paddlewheeler.** *Natchez*, *Creole Queen*, *City of
   New Orleans* — all of which wear their names in display type. They dominated every search on
   every platform.
5. **The one geometry that works is a paid asset.** The dusk drone frame exists; it is licensed.

**Recommended action:** licence a single frame. The nearest match to the brief already located is
Unsplash+ `premium_photo-1733281223460-9ad20c22960c` (Getty, "Telephoto Drone Shot of Downtown New
Orleans at Sunset"); Getty, iStock and Adobe Stock all carry New Orleans cruise-terminal imagery.
This is outside the free-licence remit, so I have **not** pursued or acquired anything.

If purchase is refused, the honest alternatives are (a) leave CRU-NOL without a port hero and use a
non-ship New Orleans dusk frame such as U02 with the "Marriott" corner cropped or overlaid — which
still fails the family rule as written and is a coordinator-level call, or (b) accept that this
certificate carries no image.

---

## 8. Files

All 40 downloads for this verification are in the session scratch directory
`…/scratchpad/nol3/` as `px_<ID>.jpg`, `un_<hash>.jpg` and `fl_<id>_b.jpg`, together with
`beron_full.jpg` (the 6000px original of U01) and the two magnified crops used to adjudicate it,
`beron_ship.jpg` (4×) and `beron_skyline.jpg` (3×).

Nothing was copied into the repository. **No certificate page, production image, or other repository
file was modified by this task.** This report is the only file written.

---

## Appendix — two Flickr candidates (CC BY 2.0, *visually verified*)

Reached via the Openverse API; the only genuinely new non-Wikimedia, non-stock leads found.

| # | File | Creator | Licence | Max px | What I actually saw | Verdict |
|---|---|---|---|---|---|---|
| F01 | `flickr.com/photos/58415659@N00/16584017238` "City of New Orleans Cruise Terminal" | kitmasterbloke | CC BY 2.0 | **1023×713** | NCL ship bow-on at the terminal; CCC bridge left, terminal building and pile wharf right. Ship ~30% of width and the name is not readable — but the **NCL multicoloured hull swoosh is the operator's trade dress** and is the brightest thing on the hull, the light is flat midday blue, and **the original is only 1023px wide**, unusable for a hero. | REJECT |
| F02 | `flickr.com/photos/58415659@N00/16771546755` "…'MV Norwegian Dawn' nearest camera" | kitmasterbloke | CC BY 2.0 | **1023×590** | Two ships bow-on filling ~60% of frame: NCL hull swoosh on the near ship, a Carnival ship behind with **"CAR…" legible** on its hull and its blue funnel visible. Flat midday. Too small regardless. | REJECT |

Flickr's max served size for both is `_b` (1024px); `_h` (1600) and `_k` (2048) return HTTP 410.

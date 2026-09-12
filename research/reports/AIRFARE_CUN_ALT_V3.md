# AIR-CUN hero photography — ALT sweep V3 (approach-path angle)

**Certificate:** AIR-CUN / Cancun Airfare Credit
**Verdict:** **UNRESOLVED** — no free-licence photograph of Cancún with a compliant aircraft in the sky exists in Pexels, Unsplash, Flickr-CC, Openverse or Wikimedia Commons. **1,367 frames opened**, 2,062 sky-anomaly tiles inspected at ~4x. Zero.
**Flagged fallback (destination-only, NO aircraft):** Pexels **4306931** — rendered to `research/crops/AIR-CUN_1600x900_alt_puntacancun.jpg`.
**Standard:** `research/IMAGE_BRIEF_V2.md` airfare clause. Nothing in `img/`, `certificates/` or any `.html` was touched.
**Evidence:** `/tmp/claude-0/-home-user-honest-travel-group-site/7e77666f-e17b-50c5-bb87-aed94f820cc9/scratchpad/aircun_alt/` (contact sheets `sheet_*.jpg`, anomaly tiles `anom_*.jpg`, fallback checks `fb/`).

---

## 1. What was searched (the approach angle, not the general "cancun" pool)

The prior sweep (`AIR-CUN_IMAGE_V2.md`) covered 173 general Cancún frames. This sweep went where aircraft physically are — CUN's arrival/departure tracks cross Nichupté, Punta Nizuc and the northern hotel zone — and then exhausted the remaining CC pools.

| Source | Queries | Frames opened |
| --- | --- | --- |
| Flickr CC (licence 2,3,4,5,6,9,10) | cancun approach, cancun landing, approaching cancun, cancun arrival, cancun takeoff (0 hits), cancun hotel zone plane, cancun avion, avion playa cancun, cancun plane beach, cancun plane sky, cancun airplane beach, cancun aircraft, cancun aeroplane, cancun jet, cancun flight, cancun contrail, isla mujeres ferry, isla mujeres airplane, punta sam, punta nizuc, nichupte, cancun laguna, playa delfines, playa chac mool, cancun hotel zone, zona hotelera cancun, cancun skyline, cancun sunrise, cancun sunset p2, cancun sky p1-2, cancun clouds, cancun blue sky, cancun beach p1-2, cancun mexico, cancun caribbean, cancun panorama, cancun pier, cancun parasailing, cancun airport sunset | **662** (at 1024 px `_b`) |
| Openverse (licence by/cc0/pdm/by-sa) | cancun airplane, cancun landing, cancun approach, cancun aerial plane, cancun lagoon plane, cancun airport approach, isla mujeres plane, cancun jet, **plus the full 240-item "cancun" pool** (238 Flickr / 2 Commons) — every item not already opened was downloaded and looked at, not title-grepped | **219** new |
| Pexels | cancun aerial, cancun drone, flying into cancun, cancun airport, landing cancun, cancun lagoon, cancun plane, punta cancun, cancun sky, cancun coast, cancun skyline, cancun beach, cancun ocean, cancun mexico, cancun hotel, quintana roo, cancun parasailing | **96** (triage at w=2000; suspects at native) |
| Unsplash (WebFetch) | cancun-aerial, cancun-airport, cancun-drone, cancun-sky, cancun-plane, cancun-beach, cancun-mexico, isla-mujeres, hotel-zone-cancun, playa-delfines, cancun p2/p3 | listed only — every result was either already in the V2 sweep, a wing-out-of-window, or Unsplash+ |
| Wikimedia Commons (API, 1280 px) | Category: Hotel zone in Cancún, Nichupté Lagoon, Panoramics in Cancún, Puerto Juárez, Puerto Cancún, Nature of Cancún, **Beaches of Cancún (both pages)** | **390** |
| **Total** | | **1,367 opened; 2,062 anomaly tiles adjudicated** |

Method per frame: contact-sheet look, then machine scan of the upper 60 % for compact dark/bright blobs against smooth sky, each blob cropped at ~4x and tiled; every tile was opened with the Read tool. Every anomaly resolved as **gull, frigatebird, pelican, parasail, kite, boat wake, mast, flagpole, lamp, cloud fragment or JPEG noise**.

## 2. Every frame that actually contained an aircraft — and why it fails

| Source / ID | What I saw at magnification | Verdict |
| --- | --- | --- |
| Flickr 2657118061 "Coco Bongo Flying Ad" | Light aircraft towing a **Coco Bongo** banner over the beach; aircraft is the subject | REJECT — third-party brand + aircraft-as-subject |
| Flickr 4206143599 | Night long exposure from a pier, hotel-zone lights; the aircraft is a **light streak**, not an aeroplane; railing in foreground | REJECT — does not read as aircraft; not premium |
| Flickr 2207765782 | Air Transat A310 from below, **"Transat"** titles + fin legible | REJECT — livery |
| Flickr 5156xxxx set (2021 CUN spotting, 20 frames) | Aeromexico, Delta, Viva, Air Canada Rouge, Magni, Frontier, Air Transat, WestJet, Spirit, Sunwing on the CUN apron | REJECT ×20 — livery, airport not destination |
| Flickr 2356xxxx / 2411xxxx "cancun jet" set (10) | American, Sunwing, LAN, Thomas Cook, Condor, Copa on stand | REJECT ×10 — livery |
| Flickr 28268021309, 3255858077, 41345968080, 5233352350, 2147090719, 4850104475 | Aircraft/contrail against **plain sky or cloud only** — no Cancún in frame | REJECT — no destination (generic class already covered by V2's fallbacks) |
| Flickr 15775524848, 50674xxxxx (Southwest wing set), 3040xxxxxx (sunset wing set), 4257542622, 14099421359, 3003965435, 9618446826, 26834334597 etc. | Wing / winglet out of the cabin window over the hotel zone or Isla Mujeres; one winglet carries partial "…A.com" text | FAIL — wing-only, exterior rule |
| Pexels 12967643 (Bryan Dickerson, sunrise) | Sweeping white arc across the sky looked like a contrail — at native **5568×3712** it is cirrus; no aircraft at either end | REJECT — no aircraft |
| Commons "Cancun Aerial - panoramio (3)" | White streak in the sea is a **boat wake**; shot from inside an aircraft | REJECT |
| Commons "Zona Hotelera … panoramio" (380 px) | "Contrail" flagged by the scanner is a **palm frond** crossing a palapa roof; file is 380 px wide anyway | REJECT — not an aircraft; unshippable size |

Prediction of the brief held exactly: **every frame where the aircraft is the subject failed on livery; every destination frame had no aircraft.** Base rate of a Cancún frame containing any aircraft, across ~1,540 frames opened by both sweeps: 0.

## 3. Flagged fallback — destination-only, visually verified

| Field | Value |
| --- | --- |
| Source | https://www.pexels.com/photo/4306931/ — "Aerial Shot of a Coastal City" |
| Direct native | `https://images.pexels.com/photos/4306931/pexels-photo-4306931.jpeg` (no query string) |
| Photographer | Zachary DeBottis (`@zachtheshoota`) — stated location on the page: **Cancún, Mexico** |
| Licence | Pexels License — free commercial use, no attribution, no share-alike |
| Native dimensions | **4000 × 2250** (16:9) |
| Crop box (native px) | **(700, 0) → (3900, 1800)** = 3200 × 1800, scaled 0.5× to 1600 × 900 |
| Crop path | `research/crops/AIR-CUN_1600x900_alt_puntacancun.jpg` (EXIF-free, 312 KB) |
| Approval | **FLAGGED FALLBACK — visually verified. Contains NO aircraft.** |

**What I actually saw at 100 %.** Drone frame ~300 m over Boulevard Kukulcán at km 8, looking north-west across Punta Cancún: Nichupté lagoon fills the left third, the Caribbean the right half, and the Punta Cancún cluster sits mid-frame — a large white arcaded tower with twin rooftop cupolas, a curved white mid-rise beside it, a terracotta low-rise, Playa Caracol and its pier, and the northern hotel-zone skyline fading into haze. The top ~42 % is open sky with light cumulus — clean overlay space. I cut the native into three 1:1 chunks and magnified the delivered file at 4x: **no hotel wordmark resolves on any facade** (the arcaded tower's crown is bare; the curved tower is bare); the only marks anywhere are two square poster panels with a stylised figure and a thin white text strip on a dark box mall at bottom-left — ~50 px at native, an unreadable smudge at 1:1, and ~20 px of grey mush in the delivered file. Shifting the crop 700 px right dropped the scenic-tower emblem, the convention-centre roof and most of the car park that sat in the full frame. Boats, a jet-ski wake and beachgoers are specks. It is unmistakably Cancún, it sells the place, and it has nothing to do with an aeroplane — which is the flag.

**AI screen (reasoned, not an unexamined pass).** Pexels strips camera EXIF (only Orientation/72 dpi survive). Geometry 4000 × 2250 is exactly the 16:9 crop of a 4000 × 3000 12-MP drone sensor (DJI FC-series); the sibling frames from the same flight — 4306936 (3939 × 2216, the approved **CON-CUN primary**) and 4306947 (3879 × 2182) — are hand-trimmed variants of the same geometry, and the three share lighting, haze and boat traffic. Consistent with a real flight, not generator output.

**Two flags for the coordinator.**
1. This is **not an airfare image**. If shipped it must be captioned as Cancún only; never as "flying into Cancún", never with any implied aircraft.
2. It is the **same photographer and same flight** as the CON-CUN primary (4306936). Two certificates would share a look. Different frame, different crop, but a viewer flipping between the two pages will see kin. Alternates if that matters: Pexels 17061347 (Angel Valladares, 3000 × 2250, hotel zone looking north with big sky — not yet 100 %-checked) or 30197352 (anna, 4096 × 2731, beach + skyline + dramatic cloud — not yet 100 %-checked).

## 4. Fetch mechanics learned (add to the brief)

- **Unsplash `?page=N` is ignored by WebFetch** — every page returns page 1. Unsplash depth beyond ~20 results per query is not enumerable this way; vary the query instead.
- **Flickr `&page=2` works** through WebFetch. `_m`, `_w`, `_c`, `_z` thumbnail suffixes all swap to `_b` on the same secret.
- **Openverse licence-filtered "cancun" is 240 items and now fully visually swept** (238 Flickr, 2 Commons). Nothing left to title-grep.
- **Commons batch API** (`titles=File:a|File:b|…` ×20, `iiurlwidth=1280`) returned `thumburl` on `upload.wikimedia.org` directly — no rewrite needed. Three parallel workers with 0.8 s pauses pulled 396 files without a single 429.
- **Commons full-text `list=search`** with accented terms returned non-JSON through the proxy; not needed, not chased.
- The brief's Flickr caveat stands: `_b` is 1024 px. Any Flickr find still needs the `/sizes/o/` lookup before it can be called shippable at 1600.
- `pkill -f <script>` inside the agent's Bash matches the Bash's own command line and kills the session. Use `pgrep -f "[c]ommons"`-style patterns.

## 5. Recommendation

Stop searching free pools for Cancún-plus-aircraft; both sweeps agree and the base rate is zero. The certificate ships either with V2's anonymous generic aircraft (not Cancún, must not be captioned Cancún) or with this destination-only Cancún frame (must not be captioned as an aircraft image). That is a commercial call, not an artwork problem.

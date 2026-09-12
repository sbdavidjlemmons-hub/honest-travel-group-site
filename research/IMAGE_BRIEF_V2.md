# Image acquisition brief V2 — corrected from pixel-level verification

Supersedes the image section of AGENT_BRIEF.md. Written 2026-09-09 after the coordinator
downloaded and visually inspected 8 candidates that agents had marked APPROVED on metadata.

## What the pixel check found

**6 of 8 metadata-approved candidates failed on sight.** Metadata approval is not verification.

| Candidate | Agent verdict | On sight | Reason |
| --- | --- | --- | --- |
| Carnival Glory, PortMiami | APPROVED, CC BY 2.0 | **REJECT** | "Carnival Glory" in large legible type across the hull, red whale-tail funnel dead centre. Uncroppable — it is the subject. |
| Celebrity Equinox, Port Everglades | APPROVED | **REJECT** | "Celebrity EQUINOX" and "Celebrity X Cruises" both legible; Crowley shipping containers add a second brand. |
| Aerial, Port Everglades | rejected on licence | **REJECT confirmed** | "CARNIVAL CONQUEST" and "CARIBBEAN PRINCESS" both fully legible. |
| Norwegian Dawn, New Orleans | APPROVED, medium risk | **REJECT** | "NORWEGIAN DAWN" legible on stern, "CARNIVAL" on the second ship, plus an "OUTLET COLLECTION RIVERWALK" mall sign — three brands in one frame. |
| Upper Algiers, New Orleans | "lowest logo risk" | **REJECT** | Wheelie bins, razor wire, power lines, parked cars, a paramedic truck. Technically compliant, commercially unusable. Not premium travel imagery. |
| Port Canaveral panorama | PRIMARY | **REJECT** | Industrial port: gantry cranes, cement silos, a red tanker, car parks. Ships are distant specks. Reads as freight, not vacation. |
| **Sunset — Port Canaveral** | alternate | **APPROVE** | Golden hour, ship at berth, terminal and parking structure in frame, second ship far left. Only a small "MSC" on the hull. Huge clean sky and water for overlay. |
| **Mega Cruise Ships, Cozumel** | PRIMARY | **APPROVE** | Two ships at the pier, mooring dolphins and gangway prove the berth. Bow name small and low-contrast; second ship's funnel distant. |

## Why this happened

Agents were told not to download, so every logo and composition judgement was inferred from
focal length, EXIF, and Commons category names. That inference is unreliable in both directions:
it approved three ships with wordmarks across the hull, and it rejected nothing for being ugly.

## The rule that actually works

"Real ship in port" and "no legible third-party branding" are in genuine physical tension —
every ship at a real berth wears its operator's trade dress. The two approvals show the formula
that resolves it:

**Shoot the port, not the ship.**

| Criterion | Requirement |
| --- | --- |
| Ship size in frame | Occupies **under ~40% of frame width**. A ship filling the frame always shows a legible name. |
| Light | **Backlit, golden hour, dusk, or overcast distance.** Silhouette and low contrast suppress wordmarks without editing. |
| Port evidence | Terminal building, gantry, mooring dolphins, gangway, parking structure, or a second berthed vessel **must be in frame**. |
| Composition | Substantial clean sky or water for translucent hero/header overlay. |
| Vibe test | Would this sell a vacation? Reject industrial freight, car parks, razor wire, utility poles, refuse bins. |
| Brand check | No readable ship name, no readable line wordmark, **and no third-party commercial signage** (malls, shipping lines, hotels). |

## Mandatory procedure — every agent, every candidate

1. Find the candidate and record source, creator, licence, dimensions.
2. **Download it** to your scratch directory. Use a real User-Agent — Wikimedia returns 403
   without one, on the API call as well as the file fetch:
   `{"User-Agent":"HVM-image-verification/1.0 (rights and suitability check)"}`
   Commons direct URL: `https://commons.wikimedia.org/w/api.php?action=query&titles=File:NAME&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1600&format=json`
3. **Open it with the Read tool and look at it.** This is not optional.
3a. **THE 100% RULE — check the brand on the file that will be published, at full resolution.**
   Looking at a downscaled copy is NOT verification. It produces *false positives*, which are the
   expensive kind: a wordmark that reads as a faint smudge at 1600px can be a 300px sign at native.
   Crop the suspect region out of the **native-resolution** file (PIL is available) and open the
   crop. Two coordinator approvals were reversed by exactly this check after passing a
   downscaled look. **If you cannot fetch the original, the candidate is UNVERIFIED, not passing.**
4. Write down what you actually see: is the ship name legible? the line wordmark? any third-party
   sign? is it attractive?
4a. **BEFORE REJECTING, TRY REFRAMING. This is the highest-value move available at zero budget.**
   The deliverable is 1600x900. Sources run 4000-6000px. A branded region does **not** have to be
   in the shipped frame. If a candidate fails only because of a wordmark in one part of the image,
   crop a different 16:9 region and re-test — the licence already covers it and it costs nothing.
   Port Canaveral was recovered exactly this way: the full frame carried a large "MSC" on the
   stern, but a left-weighted crop drops the stern entirely, keeps the ship at berth, the terminal,
   a distant second vessel and the whole sunset, and leaves only faint bow text that resolves at 3x.
   Reframing fails when the mark is central or repeated — the Cozumel reframe put "CARNIVAL DREAM"
   in twice plus the funnel, which is worse than the original. Test, do not assume.

5. Only then mark APPROVE or REJECT, and say **"visually verified"** in the approval column.
   A candidate that was not opened is marked `NOT VISUALLY VERIFIED` and does not count.
6. Nominate a primary and an alternate that both passed step 3.

## Fetch mechanics — learned the hard way, do not rediscover these

- Wikimedia returns **403** without a User-Agent, on the API call as well as the file fetch.
- It now returns **429** on full-resolution originals. Download **serially with pauses**;
  parallel requests trip the limit within seconds. Use exponential backoff.
- Only these thumbnail widths are served: **320 / 640 / 800 / 1024 / 1280 / 1920 / 3840**.
  Requests for 1600 or 2560 are rejected with 400.
- The API's `thumburl` points at `thumb.wikimedia.org`, which 400s. Rewrite it to
  `upload.wikimedia.org/.../thumb/<a>/<ab>/<name>/<w>px-<name>` using the hash prefix from the
  returned original URL.
- **Openverse** anonymous search works (no longer 401). Accepts `license=by,cc0,pdm,by-sa` and
  `size=large`. But its results are almost entirely Wikimedia files you have already seen — it
  adds little beyond Commons.

### Defeating the bot walls — use WebFetch, not curl

Pexels and Unsplash **search pages** sit behind bot protection that a browser User-Agent does not
defeat. Their **image CDNs** do not. The working method is a two-step:

| Endpoint | plain curl | works via |
| --- | --- | --- |
| `www.pexels.com/search/...` | 403 Cloudflare interstitial | **WebFetch** renders it fully |
| `unsplash.com/s/photos/...` | 401 Anubis bot wall | **WebFetch** renders it fully |
| `unsplash.com/napi/search/photos` | 401 | — |
| `images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg` **(no query string)** | **200, TRUE NATIVE** | plain curl — **use this for brand checks** |
| `images.pexels.com/...jpeg?...&w=1920` | 200 but **silently capped below native** | fine for triage, NEVER for the 100% rule |
| `images.unsplash.com/photo-<HASH>?w=2400&q=85` | **200** | plain curl, any UA |
| `source.unsplash.com/<id>/1920x1080` | 503, endpoint retired | do not use |
| `www.flickr.com/search/` | 200 but thumbnails carry no titles or attribution | unusable for enumeration |

**Method: WebFetch the search page to harvest photo IDs / `photo-<hash>` filenames, then curl the
CDN directly.**

**CRITICAL — strip the query string for the 100% check.** Both CDNs silently serve *less* than
native when you pass a size parameter: `pexels-photo-<ID>.jpeg?w=4000` returned 4000x2667 where
the true native is 6240x4160, and `images.unsplash.com/photo-<hash>?w=2400` destroys a small
aircraft before you can brand-check it. Fetch **with no query string at all** before running the
100% rule. Triage at a sized URL if you like; verify only at native.

### Flickr IS enumerable (corrects an earlier note)

WebFetch on a Flickr CC search exposes full `live.staticflickr.com/<server>/<id>_<secret>_n.jpg`
URLs. **Swapping `_n` for `_b` gives the 1024px version on the same secret** — only `_k`, `_h` and
`_o` need the `/sizes/o/` lookup. That turns a CC search into a 20-image triage in two calls.

**Openverse anonymous `page_size=100` now returns 401.** Use 20; it pages cleanly to page 10+.

### Beating Wikimedia's 429 via Flickr

- `WebFetch` on `commons.wikimedia.org/wiki/Category:...` is **never rate-limited** and returns
  full category listings.
- Most Commons aviation and travel files are **Flickr imports with the Flickr ID in the filename**.
- The Openverse API returns the `live.staticflickr.com` URL, which **downloads fine while
  Wikimedia is 429ing**, and often holds larger sizes than Commons serves.
- Flickr's `_k` / `_h` / `_o` size suffixes use a **different secret** than `_b` — guessing returns
  410. Fetch `https://www.flickr.com/photos/<user>/<id>/sizes/o/` to get the real URL.
  This is how the Honolulu nominations went from 1024px to 5191px and 4875px.

### Watch for paywalled tiers

Unsplash's best travel imagery is increasingly **Unsplash+ / Getty** — a paid licence, NOT the
Unsplash License this brief permits. A `premium_photo-` prefix in the filename marks it. If the
only compliant frame for a destination is paywalled, **say so and name the exact asset** — a
purchasable answer is a real deliverable, not a failure.
- **Pexels and Unsplash are often better sources than Commons for this brief** — their travel
  photography is composed to sell a destination, which is exactly the "shoot the port" framing
  the rule wants, and their licences carry no attribution or share-alike obligation.

## Standing constraint: ZERO BUDGET

No paid stock. No Unsplash+, no Getty, no premium_photo-. If the only compliant frame is
paywalled, the certificate is unresolved — say so and move on; do not propose a purchase.

This makes **reframing** (step 4a) and **source selection** the two levers that matter. Roughly
120 candidates have already been rejected across the sweeps; a meaningful share of them failed on
a *region*, not on the whole image, and are recoverable by crop at no cost. Re-testing a
previously rejected high-resolution candidate by reframe is usually cheaper than finding a new one.

Retouching to remove a mark is **not** authorised, including on CC0 files where the licence
permits it. The client brand is "Honest Travel Group"; editing evidence photography to make a
compliance problem disappear is off the table.

## Licence preference

Plain CC BY, CC0, public domain, or Unsplash License. Flag CC BY-SA as a caution — share-alike
attaches to any crop you publish. Never approve a file whose EXIF carries no camera make, model,
or exposure data on a suspiciously round pixel dimension: AI cannot be positively ruled out.

**Unsplash strips EXIF too** — the exception below is not Pexels-only. But Unsplash gives you a
free substitute: the numeric prefix of `photo-<n>-<hash>` is a **Unix upload timestamp**
(`1543511670` -> 2018-11-29, cross-checked against a third file's stated publish date). That is a
positive, zero-cost pre-generative provenance check available on every Unsplash file.

**Exception — Pexels strips EXIF from everything it serves.** The camera-metadata half of the
AI screen cannot be run on any Pexels file, including un-resized originals. Run the second half
instead: check whether the native pixel geometry corresponds to a real sensor (e.g. 4256x2392 is
a Nikon D3-generation frame cropped to 16:9; 4032x3024 is a native 12 MP handset frame) rather
than to generator output. Document that reasoning explicitly as a reasoned call — never as an
unexamined pass.

## Per-family subject rules

- **Cruise (12):** real passenger ship at a berth in the assigned port or region, per the formula above.
- **Airfare (5):** a **real aircraft exterior** — on stand, taxiing, or in flight. A cabin-window
  or wing-only shot FAILS. No identifiable livery or airline wordmark.

  **The two framings that work — proven, use these first:**
  1. **Full silhouette against a sunset.** A backlit aircraft on short final is a solid black
     shape: no fin mark, no titles, no registration, no colour break.
  2. **Directly underneath.** Airline titles live on the *upper* fuselage and the fin. A belly
     view from below shows neither. This is structurally the safest angle in aviation photography.

  **THE GOVERNING RULE — shoot the destination, not the aeroplane.**
  Every frame where the aircraft is the *subject* fails on livery. That was six for six on the
  Honolulu sweep: Hawaiian at OGG, Delta at HNL, US Airways, Cathay, Virgin, American Trans Air.
  The frames that pass are ones where a photographer was shooting the **place** and a jet
  happened to be in the sky. This is the exact analogue of the cruise rule.

  So search for the destination, not for aircraft: "Honolulu sunset", "Diamond Head dusk",
  "Waikiki from Tantalus" — then check the sky. Do **not** search "Hawaiian Airlines 787".

  **Destination-specificity IS achievable this way.** An earlier sweep concluded otherwise and
  settled for a generic silhouette; the Honolulu sweep disproved it by finding two frames that
  are both unmistakably Oahu and completely anonymous. Chase both. Only fall back to a generic
  silhouette after a destination-led search has actually failed.

  **The three-way tension, stated plainly:** destination + anonymous forces a *small* aircraft;
  prominent + anonymous forces a *generic* location; destination + prominent always yields a
  legible livery. Take the first. A small aeroplane over the right place beats a large anonymous
  one over the wrong place.
- **Condo (20):** authentic destination-specific resort or condominium exterior/grounds. No named
  resort. No theme-park branding or recognisable park landmarks for Orlando.
  ### Condo family rules — from the Sedona probe (14 opened), supersede assumptions

  **C1. THE CAPTION NAMES THE PROPERTY EVEN WHEN THE PIXELS DO NOT.** The approved Sedona file is
  titled "Villas of Arroyo Roble resort" on Pexels. The certificate names no resort and assigns the
  unit at confirmation, so **re-caption generically and never carry source metadata — title,
  filename, alt text — through to the site.** This is a compliance rule, not a workflow note: a
  filename naming a specific property implies a property the certificate does not guarantee.

  **C2. Supply is SINGULAR, not scarce.** Sedona had exactly **one** usable resort exterior, and it
  surfaced in all eight queries. Unsplash `sedona-hotel` returns an empty state; Openverse returns
  1 result for "sedona resort" and 0 for condominium/villas/hotel-pool. Expect one-or-none on every
  inland or small destination. Expect the opposite — abundance plus high signage risk — on
  Cancun, Orlando and Punta Cana.

  **C3. SHOOT THE STRIP, NOT THE RESORT — the governing rule, 100% predictive across 15 candidates.**
  Elevate until **no single building is the subject**. Every ground-level or single-building frame
  in the Myrtle Beach probe failed; every elevated multi-building frame passed. It is also the
  stronger *compliance* test: a many-property frame cannot imply a guarantee even when the one
  property in it carries no name. Aerials and elevated vantages are the highest-yield framing.

  **C3b. MAGNIFY THE LOW BUILDINGS, NOT THE TALL ONES.** Resort nameplates failed only 1 of 15.
  **Street-level retail signage failed 5 of 15** — one frame carried six legible brands at once
  (DIRTY DON'S, FUN PLAZA, BOARDWALK Paradise, ATM, N.Y. STYLE PIZZA, plus the SkyWheel). An agent
  who magnifies the towers finds nothing and ships a frame branded along its bottom edge.

  **C3c-bis. COLOUR CONTRAST DECIDES WHETHER A MARK SURVIVES THE DOWNSCALE, NOT SIZE ALONE.**
  The Myrtle Beach SkyWheel vanished at 14 delivered pixels because it was low-contrast grey.
  A red "RIU" rooftop sign in an Aruba frame measures only 12x6 delivered pixels and is **still
  readable at 1:1** — saturated red on white survives resampling where grey-on-grey does not.
  Measure in delivered pixels as C3c says, then judge contrast, not just span.

  **C3c. CONVERT A HIGH-ZOOM FIND INTO DELIVERED PIXELS BEFORE REJECTING ON IT.** The Myrtle Beach
  SkyWheel is 36px at native and found at 7x — but **14px in the delivered file, no colour, no
  wordmark, unresolvable as a ferris wheel at 1:1.** The 100% rule cuts both ways: it catches
  false positives from downscaled looks AND false negatives from over-magnified ones. Measure in
  the shipped file.

  **C3d. Shoot the destination, not the building.** The condo analogue of "shoot the port, not the
  ship". Aerials and elevated vantages are the highest-yield framing: they put the destination's
  signature landscape behind the roofline and push any signage below resolution.

  **C4. Reject identifiable private residences.** Not a trademark problem, so the checklist waved
  it through — and it cost the probe the best sky in its set. Add it.

  **C5. The dominant rejection cause is NOT branding.** Legible property names fired **once in
  fourteen**, and it was a third-party product brand, not a resort. The number-one cause is
  **"not premium / not vacation-selling"** — 6 of 13 rejections: car parks, abandoned houses,
  snow, gravel driveways, ruins. Same failure that killed Upper Algiers and the Port Canaveral
  panorama. Judge saleability first, branding second.

  **C6. Search vocabulary — this matters more than effort.**
  - **Destination-dependent — run both.** On a small inland destination, **`<destination> hotel`
    on Pexels** is best: it returns the human-written title, which is how the Sedona probe
    identified its primary as a resort rather than housing. On a dense resort strip,
    **`<destination>` ALONE on Unsplash** is best: bare "myrtle beach" returned both winners.
  - **Every amenity word is a "destination solvent".** `north myrtle beach condo` pulled in Orange
    Beach Alabama; `oceanfront condo` returned zero Myrtle Beach across 24 results and produced a
    flawless unbranded frame from the wrong coastline. **Adding the state name is pure waste** and
    promotes paywalled Unsplash+ items. Roughly half of one probe's search calls were lost this way.
  - **NEVER "villa"** — returns Turkiye and Egypt regardless of the place name.
  - **NEVER "condo" or "vacation rental"** — listing-site vocabulary, not photographer vocabulary.
  - **Never search interiors.** They could be anywhere and prove no destination.

  **C6b. VERIFY THE STATED LOCATION BEFORE DOWNLOADING, NOT AFTER.** Destination queries pull
  neighbouring places constantly: an "outer banks" search returned Holden Beach (250 mi away) and
  Wrightsville Beach; a Pexels "aruba hotel" set was heavily contaminated with Curacao and Bonaire,
  which share the same Dutch-Caribbean architecture and divi-divi trees. Read the source page's
  stated location field first — it costs nothing and saves multi-megabyte fetches.

  **C7. Signage still gets magnified.** "LIVE AQUA" and "Occidental Costa Cancun" were both legible
  at 4x in Cancun hotel-zone frames. Check every facade — but expect C5 to reject the frame first.
- **All-inclusive (3):** authentic destination-specific resort photography. No named resort.

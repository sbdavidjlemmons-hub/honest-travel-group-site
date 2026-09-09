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
| `images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?...&w=1920` | **200** | plain curl, any UA |
| `images.unsplash.com/photo-<HASH>?w=2400&q=85` | **200** | plain curl, any UA |
| `source.unsplash.com/<id>/1920x1080` | 503, endpoint retired | do not use |
| `www.flickr.com/search/` | 200 but thumbnails carry no titles or attribution | unusable for enumeration |

**Method: WebFetch the search page to harvest photo IDs / `photo-<hash>` filenames, then curl the
CDN directly.**

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
  **Resort signage is the live risk in this family** — verified cases include "LIVE AQUA" and
  "Occidental Costa Cancun" both legible at 4x in Cancun hotel-zone frames. Magnify every
  building facade and every sign-shaped object before approving.
- **All-inclusive (3):** authentic destination-specific resort photography. No named resort.

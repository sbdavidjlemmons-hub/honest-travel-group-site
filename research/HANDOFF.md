# HVM CERTIFICATE ARTWORK — HANDOFF PACKET
Generated 2026-09-09. Portable: assumes no access to the original repo, tools, or agents.

## 1. THE JOB

Honest Vacation Marketing (HVM) sells 40 travel certificates. Each needs a hero image,
1600x900, real photography, commercially licensed, free (BUDGET IS ZERO), destination-specific,
with NO legible third-party branding.

Families: 12 cruise, 20 condo/resort, 3 all-inclusive, 5 airfare credit.

PRICING RESEARCH IS FROZEN by owner instruction. Images only.

## 2. HARD CONSTRAINTS

- ZERO BUDGET. No Unsplash+, no Getty, no `premium_photo-` prefix, no stock purchase ever.
  If the only compliant frame is paywalled, the certificate is UNRESOLVED. Do not propose buying.
- NO RETOUCHING. Not even on CC0 files where the licence permits it. Client brand is
  "Honest Travel Group"; editing evidence photography to erase a compliance problem is off the table.
- NO AI-GENERATED OR AI-ALTERED IMAGERY.
- Certificates name NO resort, ship, or airline and guarantee none. Imagery must not imply one.

## 3. THE FIVE RULES THAT DECIDE EVERYTHING (learned the hard way, ~600 candidates)

**R1. SHOOT THE PLACE, NOT THE PRODUCT.**
- Cruise: "shoot the port, not the ship." Ship under ~40% of frame width, backlit/golden hour,
  berth infrastructure in frame, clean sky/water for overlay.
- Condo: "shoot the strip, not the resort." Elevate until NO SINGLE BUILDING is the subject.
  100% predictive across 15 candidates. Also the stronger compliance test — a many-property
  frame cannot imply a guarantee.
- Airfare: "shoot the destination, not the aeroplane." Every frame where the aircraft is the
  subject fails on livery (6/6 in one sweep, 20/20 in another). Winners are photos of a PLACE
  where a jet happened to be in the sky. Fallbacks: full sunset silhouette, or belly view from
  directly underneath (airline titles live on the upper fuselage and fin).

**R2. DOWNLOAD IT AND LOOK AT IT.** Metadata approval is worthless. 6 of the first 8
metadata-approved candidates failed on sight, including a hull reading "Carnival Glory" in
letters a metre high and a photo of wheelie bins and razor wire rated "lowest logo risk."

**R3. THE 100% RULE — CHECK THE FILE THAT WILL SHIP, AT FULL RESOLUTION.**
A downscaled look produces FALSE POSITIVES, the expensive kind: a wordmark that reads as a smudge
at 1600px can be a 300px sign at native. Two approvals were reversed by this check.
**CRITICAL FETCH BUG:** both CDNs silently serve BELOW native when you pass a size parameter.
`pexels-photo-<ID>.jpeg?w=4000` returned 4000x2667 where true native is 6240x4160.
`images.unsplash.com/photo-<hash>?w=2400` destroys small subjects entirely.
**FETCH WITH NO QUERY STRING AT ALL** before any brand check.
It cuts both ways — also convert a high-zoom find into DELIVERED pixels before rejecting:
a landmark at 36px native was 14px and unresolvable in the shipped file.

**R4. REFRAME BEFORE REJECTING.** Deliverable is 1600x900; sources are 4000-8000px. A branded
region does not have to be in the shipped frame. This recovered two certificates at zero cost.
Port Canaveral: full frame had a large "MSC" stern wordmark; a left-weighted crop drops it
entirely. Los Angeles: "QUANTUM OF THE SEAS" sits at native x1878-2118, crop starts at x2130 —
twelve pixels clear, yielding a pixel-for-pixel 1600x900 at scale 1.000.
Fails when the mark is central or repeated (a Cozumel reframe put "CARNIVAL DREAM" in twice).

**R5. SOURCE SELECTION DECIDES THE OUTCOME.** Wikimedia is shot by spotters — the subject IS the
branded hull, so the wordmark is centred and legible. Pexels and Unsplash are shot to sell a
destination — the place is the subject and the product is incidental. Search commercial travel
stock first. (Exception: the one Wikimedia win was a LANDSCAPE photo that happened to contain a
ship — which restates R1 from the other side.)

## 4. SEARCH VOCABULARY (measured, not guessed)

- Small inland destination: **`<destination> hotel` on Pexels** — returns the human-written title,
  which is how you tell a resort from housing.
- Dense resort strip: **`<destination>` ALONE on Unsplash** — bare "myrtle beach" returned both winners.
- **NEVER "villa"** (returns Turkiye and Egypt regardless of place name), **never "condo"**,
  **never "vacation rental"** (listing-site vocabulary photographers don't use), **never interiors**.
- **Never add the state name.** Pure waste; also promotes paywalled items. Roughly half of one
  probe's search calls were lost to amenity words acting as "destination solvents" —
  `north myrtle beach condo` pulled in Orange Beach, Alabama.

## 5. FETCH MECHANICS

- Pexels/Unsplash SEARCH pages sit behind bot walls curl cannot pass. **WebFetch renders them.**
  Harvest photo IDs, then curl the CDN directly. A browser User-Agent does NOT defeat the walls.
- Direct: `images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg` (no query string = true native)
  `images.unsplash.com/photo-<hash>` (no query string = full original)
- `source.unsplash.com` is retired (503).
- Wikimedia: 403 without a User-Agent, on the API call as well as the file fetch. Now 429s
  originals persistently — use exponential backoff; errors arrive as 2,256-byte HTML, so
  check file size before opening. Only widths 320/640/800/1024/1280/1920/3840 are served.
  `thumburl` points at `thumb.wikimedia.org`, which 400s — rewrite to `upload.wikimedia.org`.
  WebFetch on `commons.wikimedia.org/wiki/Category:...` is never rate-limited.
- Flickr IS enumerable: WebFetch a CC search, then swap the `_n` suffix for `_b` for the 1024px
  version on the same secret. Only `_k`/`_h`/`_o` need the `/sizes/o/` lookup.
- Openverse anonymous works; `page_size=100` now 401s, use 20. Returns mostly Wikimedia files.

## 6. AI SCREEN

Reject any file with no camera make/model/exposure on a suspiciously round pixel dimension.
BUT: **Pexels AND Unsplash both strip EXIF from everything they serve.** Substitute:
- Check native geometry against a real sensor format (4256x2392 = Nikon D3-gen cropped to 16:9;
  4032x3024 = native 12MP handset; 5464x8192 = Canon EOS R5 portrait).
- Unsplash bonus: the numeric prefix of `photo-<n>-<hash>` is a **Unix upload timestamp**
  (1543511670 -> 2018-11-29) — a free pre-generative provenance check.
Document the reasoning explicitly as a reasoned call, never an unexamined pass.
One beautiful Cancun frame (4096x3072, no camera data) was REFUSED on this screen. Hold that line.

## 7. COMPLIANCE FINDINGS (these are legal, not cosmetic)

**C1. THE CAPTION NAMES THE PROPERTY EVEN WHEN THE PIXELS DO NOT.** The approved Sedona file is
titled "Villas of Arroyo Roble resort" on Pexels. The certificate names no resort and assigns the
unit at confirmation. **Never carry source title, filename, or alt text through to the site.**
Re-caption generically.

**C2. Airfare images are NOT the destination.** Where a destination-specific frame could not be
found, a generic silhouette was approved. Those must never be captioned or alt-tagged as the
destination.

**C3. Cruise imagery must carry the existing representative-photography disclosure** — the ship,
line, itinerary and port of call are not guaranteed.

**C4. Magnify the LOW buildings, not the tall ones.** Street-level retail signage failed 5 of 15
condo candidates; resort nameplates only 1 of 15. One frame carried six legible brands at once.

**C5. Dominant rejection cause is NOT branding.** It is "not premium / not vacation-selling" —
car parks, ruins, gravel, industrial freight. 6 of 13 in one probe. Judge saleability first.

**C6. Add "identifiable private residence" to the reject list.** Not a trademark problem, so
checklists wave it through.

## 8. APPROVED — 12 of 40, all visually verified at native by two independent parties

| Code | Source | Licence | Delivery crop | Scale |
|---|---|---|---|---|
| CRU-MIA | Pexels 8530566 (Brendon Spring) | Pexels | dusk PortMiami, ship ~7% width | downscale |
| CRU-FTL | Commons "Port Everglades - panoramio - Alistair Cunningham" | CC BY 3.0 | 3 ships at berth, 2048x1536 native | ~0.78x |
| CRU-PCV | Commons "Sunset - Port Canaveral" | CC BY 2.0 | REFRAMED left-weighted, drops MSC stern | downscale |
| CRU-TPA | Commons "Bridge Ship 2458" (Kenneth John Gill) | CC BY-SA 4.0 | (0,500,6016,3884) Skyway at sunset | 0.266x |
| CRU-GAL | Unsplash photo-1779722769615-3e8c6cb102fe (Gower Brown) | Unsplash | **(0,250,4960,3040)** — never past x4980 | 0.323x |
| CRU-WCB | Pexels 35783406 (Tetyana Kovyrina) | Pexels | (0,3900,5464,6974) Grand Cayman sunset | 0.293x |
| CRU-LAX | Commons "Quantum of the Seas Departs San Pedro (Dec 2025)" (Jack Adamenko) | **CC0** | **(2130,330,3730,1230)** pixel-for-pixel | **1.000x** |
| AIR-HNL | Flickr 53540121441 (ELLK Photo) | CC BY 2.0 | Tantalus Heights, jet incidental | downscale |
| AIR-SJU | Pexels 1076033 (George Desipris) | Pexels | sunset silhouette (NOT Puerto Rico) | native 16:9 |
| AIR-CUN | Pexels 33975086 (ViRaL Bokha) | Pexels | belly view thru palms (NOT Cancun) | downscale |
| CON-SED | Pexels 6604588 (Quintin Gellar) | Pexels | (0,300,6016,3684) villas + red rock | 0.266x |
| CON-MYR | Unsplash photo-1543511670-8eb2cbcd6d47 (Jeremy Kierez) | Unsplash | (0,600,4056,2882) Grand Strand | 0.394x |

Notes: CRU-TPA is CC BY-SA — share-alike attaches to the published crop. CRU-LAX has
"U.S. COAST GUARD" legible on moored cutters (federal, not commercial) and both LA files cap at
exactly 1600x900 — a 2x retina hero would need a 2.0x upscale, not recommended.
AIR-SJU has a verified Puerto Rico alternate (Unsplash photo-1613845968442-b48ee2a0fcc6, airliner
over Castillo San Cristobal) that is SOFT — 1.62x upscale from a 990px crop. Designer's choice.

## 9. UNRESOLVED / BLOCKED

- **CRU-MEX (Cozumel)** — full frame has "FREEDOM OF THE SEAS" legible; reframe is WORSE
  ("CARNIVAL DREAM" twice plus red funnel). Not recoverable from the located source.
- **CRU-NOL (New Orleans)** — 78 candidates opened across two sweeps. STRUCTURALLY UNSOLVABLE
  free: berths sit under the Riverwalk outlet mall, the only elevated viewpoints are hotels and
  the skyline IS hotel signage, the river is a working freight channel, and Carnival's red funnel
  survives every silhouetting technique. The frame that would work exists but is Unsplash+/Getty
  (`premium_photo-1733281223460-9ad20c22960c`) — paywalled, so unresolved at zero budget.
- **CRU-CHA (Charleston)** — needs no artwork. **THE CERTIFICATE ITSELF IS BLOCKED:** Carnival's
  homeport contract ended Jan 2025, Union Pier closed to cruise ships 30 Jun 2026, and the only
  Charleston departures are 8-night voyages at $5,990-$7,835pp. The live page advertises an
  $800-$1,800 comparison for a product that cannot be delivered. **Escalate this commercially.**

## 10. NOT YET ATTEMPTED — 25 certificates

Cruise: CRU-JAX, CRU-BAH
Airfare: AIR-SJD (Cabo), AIR-CRI (Costa Rica)
All-inclusive: AIN-CUN, AIN-DOM, AIN-MBJ
Condo (16): ARU BRA BRE CUN CAT KTH LOZ ORL PKC PFG SCO SEV SLT VAB WHI WBG WID
  (ORL and STM were in flight when work stopped; ORL's leading candidate was a "Caribbean Beach"
   frame, STM's was a pair of 200MP frames from one photographer — both unverified.)

Per-destination cautions already established:
- ORL: NO theme-park branding, characters, or recognisable park landmarks. Target Kissimmee /
  Lake Buena Vista condo clusters.
- STM: **Maho Beach is a trap** — the aircraft-landing genre exists to show the airline and every
  frame carries a legible carrier wordmark. Philipsburg Front Street is dense duty-free retail.
  Target Simpson Bay, Dawn Beach, Oyster Pond, Cupecoy.
- CUN: hotel-zone signage reads at 4x — "LIVE AQUA" and "Occidental Costa Cancun" both confirmed.
- Caribbean cruise ports generally: Cozumel's Punta Langosta, Roatan's Town Center, Ocho Rios'
  Island Village and Falmouth's Historic District are purpose-built RETAIL developments. Every
  frame with real berth infrastructure also carries Rolex or Diamonds International. Port evidence
  and no-third-party-signage are MUTUALLY EXCLUSIVE there. Grand Cayman works because tendered
  calls put ships offshore with no shops to photograph.

## 11. DATA-QUALITY WARNINGS

- Caption trust is worthless. Commons "High-view Ocho Rios Jamaica" is actually the **Marin
  Headlands and Golden Gate Bridge**. "Mahogany Bay, Roatan" is a **photo of a tree**. Unsplash's
  New Orleans search returns an **Osaka, Japan** street and **Disneyland's Mark Twain Riverboat**.
- Third-party SEO pages describe inventory their own booking engines no longer carry — The Cruise
  Web and Direct Line Cruises both still publish "cruises from Charleston" pages that return zero.

## 12. WHY WORK STOPPED

Account-level weekly API rate limit, resets **2026-09-11 04:00 UTC**. Two condo agents (ORL, STM)
were terminated mid-task. No work was lost — everything is committed to branch
`claude/hvm-certificate-research-jxl8ih`, PR #9, 32 commits.

## 13. IF YOU RESUME THIS

1. Re-run CON-ORL and CON-STM from scratch; their partial results are not trustworthy.
2. Work the 16 remaining condos with Section 3's R1/condo rule and Section 4's vocabulary. They
   are a throughput problem now, not a research problem — the playbook is proven on two probes.
3. All-inclusive (3) should behave like condo but with higher signage risk (Cancun, Punta Cana,
   Montego Bay are all dense branded resort zones).
4. AIR-SJD and AIR-CRI: apply "shoot the destination, not the aeroplane" FIRST. Only fall back to
   a generic silhouette after a destination-led search actually fails.
5. Expected hit rate: roughly 1 in 3 candidates survives the 100% rule. Budget accordingly.

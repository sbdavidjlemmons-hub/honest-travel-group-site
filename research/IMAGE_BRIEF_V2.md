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
4. Write down what you actually see: is the ship name legible? the line wordmark? any third-party
   sign? is it attractive?
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
- **Openverse** is a useful CC-only aggregator. Anonymous `page_size` maxes at 20; percent-encode spaces.
- **Pexels and Unsplash are often better sources than Commons for this brief** — their travel
  photography is composed to sell a destination, which is exactly the "shoot the port" framing
  the rule wants, and their licences carry no attribution or share-alike obligation.

## Licence preference

Plain CC BY, CC0, public domain, or Unsplash License. Flag CC BY-SA as a caution — share-alike
attaches to any crop you publish. Never approve a file whose EXIF carries no camera make, model,
or exposure data on a suspiciously round pixel dimension: AI cannot be positively ruled out.

## Per-family subject rules

- **Cruise (12):** real passenger ship at a berth in the assigned port or region, per the formula above.
- **Airfare (5):** a **real aircraft exterior** — on stand, taxiing, or in flight. A cabin-window
  or wing-only shot FAILS. No identifiable livery or airline wordmark. Same distance/backlight logic.
- **Condo (20):** authentic destination-specific resort or condominium exterior/grounds. No named
  resort. No theme-park branding or recognisable park landmarks for Orlando.
- **All-inclusive (3):** authentic destination-specific resort photography. No named resort.

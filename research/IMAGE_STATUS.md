# Image verification status — all 40 certificates

Method: candidate downloaded, opened with the Read tool, and judged on the visible pixels.
Anything not opened is `NOT VERIFIED` and does not count as approved, regardless of what
its metadata says.

Standard: `research/IMAGE_BRIEF_V2.md`.

## Verified by eye

| Code | Candidate | Verdict | Note |
| --- | --- | --- | --- |
| CRU-PCV | Sunset — Port Canaveral (CC BY 2.0, 6050x3058) | **APPROVED** | Best in set. Backlit ship at berth, terminal + parking structure in frame, small MSC mark only, large clean sky for overlay. Needs a 1600x900 crop check at 100%. |
| CRU-MEX | Mega Cruise Ships, Cozumel (CC BY 2.0, 5065x2804) | **APPROVED** | Mooring dolphins and gangway prove the berth. Bow name small and low-contrast. Needs a 1600x900 crop check at 100%. |
| CRU-PCV | Port Canaveral Panorama (CC BY-SA 4.0) | REJECTED | Industrial: gantry cranes, cement silos, tanker, car parks. Ships are specks. |
| CRU-MIA | Carnival Glory, PortMiami (CC BY 2.0) | REJECTED | "Carnival Glory" legible across the hull; whale-tail funnel centre frame. Uncroppable. |
| CRU-FTL | Celebrity Equinox, Port Everglades (CC BY 2.0) | REJECTED | "Celebrity EQUINOX" and "Celebrity X Cruises" legible; Crowley containers. |
| CRU-FTL | Aerial, Port Everglades (CC BY-SA 4.0) | REJECTED | "CARNIVAL CONQUEST" and "CARIBBEAN PRINCESS" both legible. |
| CRU-NOL | Cruise ships Mississippi River (CC BY-SA 4.0) | REJECTED | "NORWEGIAN DAWN" + "CARNIVAL" + an Outlet Collection Riverwalk mall sign. |
| CRU-NOL | Upper Algiers stroll (CC BY-SA 4.0) | REJECTED | Wheelie bins, razor wire, utility poles, parked cars. Unusable commercially. |
| **CRU-FTL** | **Port Everglades — Alistair Cunningham (CC BY 3.0, 2048x1536)** | **APPROVED** | Double-verified: agent opened it, coordinator re-opened it. Three ships at berth at 15/30/21% frame width, terminal buildings, palms, tug, channel buoy, parking structure. No legible name or wordmark on any of the three ships. No third-party signage. Top ~35% clean sky, bottom ~40% clean water. Only limit is modest resolution — fine for a 1600x900 card hero, not a full-bleed 2560px one. |
| CRU-FTL | Leaving the port before night falls (CC BY 3.0, 2304x1728) | APPROVED (alternate) | Agent-verified. Dusk at the inlet, ship backlit behind the jetty, no readable branding. Two disclosed deviations: ship at ~48% frame width (over the 40% target) and port evidence is a channel jetty rather than berth infrastructure. Neither affects the brand test. |
| CRU-FTL | Sunset behind the cruiser (CC BY 3.0) | REJECTED | Previously approved on metadata as "low logo risk, backlit silhouette." Opened: "CONSTELLATION" legible in dark type across the hull, bow fills the frame. Backlighting did not wash it out. |

## Needs new candidates — zero usable artwork today

`CRU-MIA`, `CRU-NOL` — every nominated candidate rejected on sight. Replacement agents running.

`CRU-FTL` is **RESOLVED** — see the approved primary and alternate above.

## Not yet verified

All remaining 37 certificates. Wave-1 agents nominated their candidates under the original
brief, which forbade downloading, so their image verdicts are metadata inference and must be
re-checked against V2 before any of them is treated as approved.

## Known crop obligation

Both approvals are judged at roughly 1900px render width. Neither has been crop-tested at the
production 1600x900. The "MSC" mark on the Port Canaveral hull is small but not invisible and
may read at full resolution on a high-density display. Confirm before release.

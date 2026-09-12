# HVM booking cost baseline — read-first extraction

Extracted: September 9, 2026
Scope: research input only. No page, image, campaign, or live system was modified.
Source of record: FAQ JSON-LD block inside each `/certificates/**/*.html` page in this repository.

## Why this file exists

The 40-agent premium research assignment requires a **documented HVM booking cost** for every
certificate, and forbids inventing one. This file records what is actually documented today,
what is ambiguous, and the conservative convention used when a range is documented instead of
a fixed amount.

## Finding 1 — costs are documented, but by family, not by certificate

There are **four** distinct cost structures across the 40 certificates, not forty. Every page
within a family carries byte-identical cost language. Verified across all 40 pages.

| Family | Certs | Documented traveler-paid charge | Documented deposit | Product |
| --- | ---: | --- | --- | --- |
| Resort condominium | 20 | "Start at $15 per night per traveler; resort fees may be additional" | $150 | 7 nights, up to 4 travelers |
| Cruise | 12 | "Approximately $145–$157 per person by cruise length" ($145 / 3n, $151 / 4n, $157 / 5n) | $150 | 3–5 nights, 2 adults, lower-deck outside stateroom |
| All-inclusive | 3 | "$195–$269 per person, subject to change" | $298 | 5 days / 4 nights, 2 adults |
| Airfare credit | 5 | "Approximately $150 per person; airfare taxes/fees and base fare above $500 remain traveler-paid" | $240 | 5 days / 4 nights, 2 adults, + $500 base-airfare credit |

Cruise cost language does **not** vary by port. Condo cost language does **not** vary by
destination. The destination-specific variable is the comparable retail side only.

## Finding 2 — zero certificates carry a single fixed booking cost

Every one of the four structures is a range, a floor, or an approximation:

- Condo: "**Start at** $15" is a floor, not a price.
- Cruise: "**Approximately** $145–$157" is a range.
- All-inclusive: "$195–$269, **subject to change**" is a range plus a change reservation.
- Airfare: "**Approximately** $150" plus uncapped traveler-paid air above $500.

A strict reading of "do not invent an HVM booking cost" blocks all 40. That is not a useful
outcome, so this baseline adopts an explicit, disclosed convention instead.

### Convention: use the documented maximum

Where a range is documented, use the **top** of the range. A higher assumed HVM cost produces a
**smaller** claimed savings figure, which is the conservative direction for any comparative
price claim. Never use the floor.

| Family | Convention applied | Charges (2 travelers) | Charges (max occupancy) | + deposit |
| --- | --- | ---: | ---: | ---: |
| Condo | $15/night/traveler × 7 nights | $210 | $420 (4 travelers) | $150 |
| Cruise | $157 pp (5-night, top of range) × 2 | $314 | $314 | $150 |
| All-inclusive | $269 pp (top of range) × 2 | $538 | $538 | $298 |
| Airfare | $150 pp × 2 | $300 | $300 | $240 |

## Finding 3 — unresolved: deposit treatment

No page states whether the reservation deposit is (a) applied toward the traveler-paid charges,
(b) additional to them, or (c) refundable at travel. The savings arithmetic changes by
$150–$298 per certificate depending on the answer.

**Status: OPEN. Requires a controlling answer from the source certificate terms or CSNG.**
Until resolved, the baseline reports both `charges only` and `charges + deposit`.

## Finding 4 — airfare certificates cannot carry a whole-trip comparison

The airfare product is 4 nights of standard room-only accommodation plus a **$500 credit toward
base airfare**. The traveler still pays: all base fare above $500, all airfare taxes and fees,
~$150 per person, and a $240 deposit.

The maximum defensible comparable for an airfare certificate is therefore:

    (retail cost of 4 nights, room-only, comparable property) + $500

It is **not** the retail cost of a vacation to that destination. Comparing the certificate
against a full Cabo, Cancún, Costa Rica, Honolulu, or San Juan trip package would overstate the
benefit by the entire unfunded airfare balance.

**Status: HARD CONSTRAINT on `AIR-SJD`, `AIR-CUN`, `AIR-CRI`, `AIR-HNL`, `AIR-SJU`.**

## Finding 5 — availability restrictions constrain the comparable set

Documented across families and material to whether a comparison price is bona fide:

- Sunday–Tuesday check-in (all-inclusive, airfare)
- 45+ days advance notice (all families)
- Two date options required, 30+ days apart (condo, airfare)
- June–August and listed holiday sailings excluded (cruise)
- Exact resort condominium assigned at confirmation from a destination list (condo — no named property)
- One of two named example properties per destination (airfare)
- Room-only unless otherwise confirmed (airfare)
- Resort fees may be additional (condo)

A premium comparable priced on dates or in categories the certificate cannot actually deliver is
not a like-for-like comparison.

## Finding 6 — prior research already exists on-page

Every certificate page already carries: "Comparable public rates researched August 24, 2026.
Research context only — not the certificate charge, cash value, or guaranteed savings."

This assignment is therefore a **refresh and hardening** of existing comparable research, not a
first build. The August 24 figures are the prior baseline to reconcile against.

## Finding 7 — image research was released September 8, 2026

`docs/ARTWORK_RELEASE_2026-09-08.md` records 40/40 real, non-AI, 1600×900 production images with
per-family release manifests. Two gaps against the current assignment's stated standard:

| Family | Released state | Gap vs. "real ships in port" / "real airplanes" standard |
| --- | --- | --- |
| Cruise (12) | 12 images derived from a single Unsplash source: a passenger ship **at sea**. Manifest states the imagery "does not promise a particular ship, cruise line, sailing, itinerary, **or port of call**." | **FAILS.** No port evidence exists, and one source photo cannot be port-specific across 12 ports. |
| Airfare (5) | 5 images derived from a single Unsplash source: passenger window / aircraft wing. | **WEAK.** Communicates air travel; does not show a real airplane exterior, and is not destination-specific. |
| Condo (20) | Real resort photography, exact destination printed, representative-property disclosure. | Passes on its face. Spot-verify only. |
| All-inclusive (3) | Real resort-stay photography, exact destination printed. | Passes on its face. Spot-verify only. |

Image rework scope is therefore **17 certificates, not 40**.

## What is NOT in this repository

The assignment's read-first list names four records that do not exist here:
`ELITE_MARKETING_SOLUTIONS_MASTER.md`, `HVM_EXISTING_SYSTEM_SNAPSHOT_2026-09-08.md`,
`CERTIFICATE_CODE_MAP.md`, and per-destination offer Markdown. The certificate HTML pages and
`docs/manifests/*` are the only controlling records present. If the named records exist
elsewhere (Drive, HighLevel), they must be supplied before the read-first rule is satisfied.

## Code and slug reconciliation

40/40 permanent codes map to an existing page. Family counts reconcile:
20 condo + 12 cruise + 3 all-inclusive + 5 airfare = 40.

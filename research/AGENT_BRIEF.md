# HVM certificate research — shared agent brief

Read this in full before researching. Today is **September 9, 2026**.

## Absolute rules

1. **Never invent a price.** Every number in your evidence table needs a direct URL you actually
   fetched and the timestamp you fetched it. If you could not fetch it, write `UNVERIFIED` in the
   row and say why. A plausible-sounding price with no source is the single worst failure mode here.
2. **No search-result links.** Direct property/sailing/fare pages only.
3. **Research only.** Do not download images, modify any certificate page, touch HighLevel,
   publish anything, or edit files outside your own report.
4. **Do not invent an HVM booking cost.** Use the baseline below. It is the only source.

## HVM booking costs — from docs/HVM_BOOKING_COST_BASELINE.md

Costs are documented **by family**, identical across every certificate in that family. Where the
source states a range or a floor, use the **documented maximum** (conservative: higher HVM cost =
smaller savings claim).

| Family | Traveler charges | Deposit | Product |
| --- | --- | --- | --- |
| Condo (20) | $15/night/traveler x 7 nights = **$210** (2 travelers) / **$420** (4 travelers). Resort fees may be additional. | $150 | 7 nights, resort condominium, up to 4 travelers |
| Cruise (12) | $157 pp (5-night top of range) x 2 = **$314** | $150 | 3/4/5 nights, 2 adults, lower-deck outside stateroom |
| All-inclusive (3) | $269 pp (top of range) x 2 = **$538** | $298 | 5 days / 4 nights, 2 adults |
| Airfare (5) | $150 pp x 2 = **$300**, plus all base fare above $500 and all air taxes/fees | $240 | 5 days / 4 nights room-only, 2 adults, + $500 base-airfare credit |

**PAYMENT TIMING — CONFIRMED BY OWNER 2026-09-09:**

- **$0 is collected at the presentation.** Nothing is paid to attend, and nothing is paid on the day.
- The reservation deposit is taken **only at the time the traveler reserves their travel date**,
  not at the presentation.
- All traveler-paid charges land **at booking**, never before.

This is a materially stronger and more honest claim than a savings figure, because it is
verifiable and unconditional. Lead with it.

**Still unresolved:** whether the deposit is *applied toward* the traveler charges, *additional
to* them, or *refunded* at travel. Until an owner answers, report savings BOTH ways:
`charges only` and `charges + deposit`.

## Comparable-pricing standard

Collect **at least 5** current public comparables. For each row record: provider, direct URL,
fetch timestamp, travel dates, occupancy, product match, base, taxes/fees, total, rate type,
match notes.

Match the certificate's real constraints:

| Family | Comparable must be | Travel dates to price |
| --- | --- | --- |
| Condo | 7 nights, condo/2BR unit sleeping 4, same destination | 45+ days out: Nov 2026 - Apr 2027 |
| Cruise | 3-5 nights, 2 adults, **outside/oceanview stateroom** (not interior, not balcony), departing the assigned port | Oct-Nov 2026 or Jan-May 2027 (June-Aug and holiday sailings are excluded by the cert) |
| All-inclusive | 4 nights, 2 adults, all-inclusive, Sun/Mon/Tue check-in | Nov 2026 - Apr 2027 |
| Airfare | **4 nights room-only** at a comparable property, 2 adults | Nov 2026 - Apr 2027 |

Rules:
- Use **premium public retail** rates, but never an outlier chosen because it is the highest.
  A defensible premium is an upper-quartile *flexible public rate on a comparable product*.
- Exclude: flash sales, loyalty-only, owner rates, points, coupons, mystery inventory, employee rates.
- Do not compare unlike products (suite vs. standard, balcony vs. outside, all-inclusive vs. room-only).
- Include mandatory taxes and unavoidable fees, and say so.
- The condo certificate assigns the property at confirmation and names no resort. Price the
  destination's condo category, not a single luxury flagship.
- If certificate terms conflict internally, stop and flag `TERMS CONFLICT - NO DISPLAY PRICE`.

### AIRFARE HARD CAP (AIR-* only)

The airfare certificate is 4 nights room-only **plus a $500 credit**. The traveler still pays all
base fare above $500, all air taxes and fees, $300, and a $240 deposit.

    Maximum defensible comparable = (4-night room-only retail for 2) + $500

Do **not** compare against a full vacation package or a whole-trip cost. Research the destination's
real round-trip airfare anyway and report it as context, so the $500 credit's true coverage
percentage is visible. That coverage percentage is a required field for AIR certificates.

## Image standard — all 40 re-researched

Ignore the prior release. Nominate fresh candidates.

- **No AI-generated or AI-altered imagery.** State how you ruled that out.
- Verify: source, creator, license (must permit commercial use), exact destination, dimensions.
- Avoid visible third-party logos. Never show a named resort unless that resort is in the certificate.
- **Cruise: the ship must be visibly in or at the assigned port / relevant region.** Record the
  port evidence explicitly. An open-ocean shot fails. This is the known gap in the current set.
- **Airfare: a real aircraft must be visible** (exterior, on stand, taxiing, or in flight).
  A cabin-window or wing-only shot fails. No airline logos or liveries identifiable.
- Condo / all-inclusive: authentic destination-specific resort-category photography.
- If commercial rights cannot be verified: `RESEARCH REFERENCE ONLY - NOT APPROVED`.

Nominate a primary and an alternate. Prefer Unsplash, Pexels, Wikimedia Commons (check the specific
file's license), or an official destination tourism board media library with stated terms.

## Report format

Write exactly one file: `research/reports/[CODE]_RESEARCH.md`

```markdown
# [CODE] — [NAME]

## Controlling certificate facts
- Source page: certificates/<family>/<slug>.html
- Duration / Occupancy / Product:
- Included / Excluded:
- Travel-window and blackout terms:
- HVM charges (from baseline): $X  | Deposit: $Y
- Conflicts or missing facts:

## Comparable pricing evidence
| # | Provider | Direct URL | Checked (UTC) | Dates | Occupancy | Product match | Base | Taxes/fees | Total | Rate type | Match notes |
|---|---|---|---|---|---|---|---:|---:|---:|---|---|

(minimum 5 rows; mark any unfetchable row UNVERIFIED)

## Price conclusion
- Low verified comparable:
- Median verified comparable:
- Defensible premium comparable:
- Highest verified comparable:
- Recommended comparison amount:
- Why it is defensible (2 sentences, cite which rows):
- HVM charges: $X | + deposit: $Y
- Savings (charges only): $
- Savings (charges + deposit): $
- [AIR only] Real round-trip airfare researched: $ | $500 credit covers: __%
- Confidence: High / Medium / Low
- Refresh by:

## Image evidence
| Candidate | Source URL | Creator | License | Destination/port proof | Dimensions | Logo risk | AI ruled out how | Approval |
|---|---|---|---|---|---|---|---|---|

(primary + alternate)

## Display output A — compliant reference framing (owner-confirmed payment timing)
**$0 today.** Nothing is collected at the presentation.

Just 45-60 minutes of your time, with your spouse, while we show you the benefits of travel.

When you are ready to reserve your travel date, you pay the stated reservation and booking
costs — and not before: $XXX in charges plus a $XXX reservation deposit.

Comparable public rates for a similar trip, researched [date]: $X,XXX. Research context only —
not the certificate charge, cash value, or guaranteed savings.

All terms, conditions, availability, taxes, and applicable fees apply.

## Display output B — requested savings framing
~~Comparable Trip Cost: $X,XXX~~

**ROUGHLY, A SAVINGS OF $X,XXX**

**For just 45–60 minutes of your time, together with your spouse, while we show you the benefits of travel.**

**$0 today — nothing is collected at the presentation.**

**You pay the stated reservation and booking costs only when you are ready to select your travel dates.**

*All terms, conditions, availability, taxes, and applicable fees apply.*

## Risk notes
- Anything that makes the comparison legally fragile (availability, unnamed property, restricted dates).

## Blockers
- [None, or exact blocker]
```

Round only the consumer-facing savings figure. Keep exact numbers in the table.

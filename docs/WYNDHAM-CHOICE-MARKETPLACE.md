# WYNDHAM CHOICE MARKETPLACE - ACTIVE BUILD

Status: ACTIVE BUILD BRANCH
Branch: `build/wyndham-choice-marketplace`
Production: NOT YET CHANGED

## Locked direction

HGV and Marriott test models are set aside. The active direction is the Wyndham-derived Choice Marketplace.

Preserve the existing certificate assets and proven backend plumbing. Build a fresh customer-facing journey around them. Do not edit `certificates/` unless separately authorized.

## Core journey

Traffic
-> HVM trust-first experience
-> certificate
-> qualification
-> 45-60 minute presentation explaining travel membership benefits and how to activate the certificate
-> "Your Vacation Certificate Is Unlocked"
-> HonestVacationOffers.com Choice Marketplace
-> family-level certificate cards
-> click a family
-> second carousel of individual certificates in that family
-> traveler explores all available families and certificates
-> traveler chooses
-> certificate directions govern date booking / fulfillment

## Marketplace interaction

Level 1: each certificate family is represented as a clickable certificate/card.

Level 2: selecting a family opens a carousel containing the individual certificates in that family.

The original certificate remains recognizable. The traveler is not trapped in the original family. All certificate families may be explored after unlock.

## Offer principles

- Trust before transaction.
- No money upfront / no credit card upfront, subject to final operational/legal verification before public copy is changed.
- The presentation is 45-60 minutes.
- Purpose of presentation: show the benefits of the travel membership programs and show the traveler how to activate the certificate.
- No forced same-day vacation selection.
- Certificate-associated fees remain disclosed on the certificates.
- When ready to book dates, traveler follows the directions on the selected certificate.
- Guide the traveler; the traveler chooses.

## Measurement

Maintain separate attribution for:
1. Quantity Net - broad real travel intent.
2. Affinity / Quality Net - meaningful travel/loyalty/vacation-ownership/destination/presentation signals.

Track at minimum:
traffic -> certificate engagement -> qualification -> booking -> show -> presentation complete -> unlock -> family exploration -> certificate exploration/selection.

Do not fabricate missing stages. UNKNOWN stays UNKNOWN until verified.

## Preservation / release guard

1. Do not rebuild or alter the 41 protected certificate assets merely to create the marketplace.
2. Do not route production traffic to this branch until tracking, qualification, booking/handoff, mobile behavior, back/refresh/re-entry, and certificate links are tested.
3. Build alongside production so rollback is immediate.
4. Every production claim requires live verification.
5. HVO is the exploration marketplace; HVM remains the trust, qualification, presentation, and unlock journey.

## Build order

1. Inventory current family pages, certificate URLs, tracking hooks, qualification, and redirects.
2. Create the new marketplace shell without modifying certificate files.
3. Wire family-card -> family-carousel -> individual-certificate navigation.
4. Add unlock handoff contract between HVM and HVO.
5. Preserve UTM/source/intent attribution across handoff.
6. Test mobile, keyboard, back/forward, refresh, direct URLs, sharing, abandonment/re-entry.
7. Verify tracking and GHL reconciliation.
8. Only then prepare production cutover.

## Explicitly unresolved

- Exact HVO domain/repository/deployment target must be verified before cutover.
- Exact public wording of no-money/no-credit-card claims must match actual terms and operations.
- Exact unlock authorization mechanism must be selected and tested.
- Existing HVO redirect behavior must be verified before replacement.

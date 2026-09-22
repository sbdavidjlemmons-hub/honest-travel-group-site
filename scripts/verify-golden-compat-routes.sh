#!/usr/bin/env bash
set -euo pipefail

# Route-contract guard for certificates/golden/{east,west}.html.
#
# Supersedes the original version of this script (added to main in
# d4927beb, "Add Golden campaign route regression check"), which
# asserted east.html/west.html were thin location.replace() redirect
# stubs to GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html. That assertion is
# now obsolete: as of the golden-repair-2026-09-19 merge, both routes
# are the approved permanent, directly rendered interactive
# certificate pages (flip card, tilt, booking CTA) verified in PR #15.
#
# This script checks the route CONTRACT (permanent direct routes, not
# redirects; correct, distinct East/West identity; byte-identical to
# the approved d561083 implementation). It complements, and does not
# duplicate, scripts/verify-golden-release.mjs (which checks the
# approved DEPLOY.html master, runtime asset hashes, and detailed
# behavior contract: flip timing, tilt suppression, reduced-motion,
# etc.) and scripts/verify-golden-a11y.mjs (which checks the
# keyboard-focus contract). None of those three re-check what this one
# does, and this one does not re-check what they do.

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
east="$root/certificates/golden/east.html"
west="$root/certificates/golden/west.html"
approved="GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html"

# Approved git blob SHAs for the interactive implementation, pinned at
# commit d561083ce5d57121fe8aa00b52c43ec12fbcf2e0 (the PR #15 head this
# route contract was verified against). A shallow CI checkout may not
# have that commit as a reachable ref, so the expected hashes are
# pinned here rather than resolved via `git show d561083:...`.
east_expected_sha="8d2a7b01fc11cfee272c61a1fd027a10e60185c9"
west_expected_sha="cf6363823ca10915289f16bad7487222c02c4703"

fail() { echo "GOLDEN COMPAT ROUTES VERIFY FAIL: $1" >&2; exit 1; }

# 1-2. Both routes exist.
test -f "$east" || fail "certificates/golden/east.html is missing"
test -f "$west" || fail "certificates/golden/west.html is missing"

# 3. Both are permanent, directly rendered interactive certificate
#    routes, not thin wrapper/loader pages.
grep -Fq 'data-hvm-route="east"' "$east" || fail "east.html is not the direct interactive route (missing data-hvm-route=\"east\")"
grep -Fq 'data-hvm-route="west"' "$west" || fail "west.html is not the direct interactive route (missing data-hvm-route=\"west\")"
grep -Fq 'class="card"' "$east" || fail "east.html is missing the interactive certificate card"
grep -Fq 'class="card"' "$west" || fail "west.html is missing the interactive certificate card"

# 4. Neither route redirects via location.replace.
if grep -Fq 'location.replace' "$east"; then fail "east.html still contains location.replace (redirect stub, not the approved direct route)"; fi
if grep -Fq 'location.replace' "$west"; then fail "west.html still contains location.replace (redirect stub, not the approved direct route)"; fi

# 5. Neither route redirects to the DEPLOY.html master.
if grep -Fq "$approved" "$east"; then fail "east.html still references $approved (should be a direct route, not a redirect)"; fi
if grep -Fq "$approved" "$west"; then fail "west.html still references $approved (should be a direct route, not a redirect)"; fi

# 6. East and West route identities remain distinct and correct.
grep -Fq 'Miami' "$east" || fail "east.html lost its Miami/East identity"
grep -Fq 'West Coast' "$west" || fail "west.html lost its West Coast & Mexico identity"
grep -Fq 'id="west"' "$east" || fail "east.html is missing its cross-link to the West route"
grep -Fq 'id="miami"' "$west" || fail "west.html is missing its cross-link to the East (Miami) route"

# 7. Byte-identical to the approved d561083 implementation.
east_actual_sha="$(git hash-object "$east")"
west_actual_sha="$(git hash-object "$west")"
[ "$east_actual_sha" = "$east_expected_sha" ] || fail "east.html changed since the approved d561083 implementation (got $east_actual_sha)"
[ "$west_actual_sha" = "$west_expected_sha" ] || fail "west.html changed since the approved d561083 implementation (got $west_actual_sha)"

echo "golden compat routes verified: east.html and west.html are the approved permanent interactive routes, byte-identical to d561083"

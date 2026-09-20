#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
east="$root/certificates/golden/east.html"
west="$root/certificates/golden/west.html"
approved="/certificates/GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html"

test -f "$east"
test -f "$west"
grep -Fq "$approved" "$east"
grep -Fq "$approved" "$west"
grep -Fq "location.replace" "$east"
grep -Fq "location.replace" "$west"
grep -Fq "collection', 'west-coast-mexico'" "$west"
grep -Fq "url.search = location.search" "$east"
grep -Fq "url.hash = location.hash" "$east"
grep -Fq "url.hash = location.hash" "$west"

echo "golden compatibility routes verified"

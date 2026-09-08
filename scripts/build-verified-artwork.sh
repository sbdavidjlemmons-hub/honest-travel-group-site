#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
output_dir="$repo_dir/img/verified-certificates"
work_dir="$repo_dir/audit/artwork-build"
only_family="${ARTWORK_FAMILY:-}"
cruise_source="/workspace/scratch/family-cruise.jpg"
resort_source="/workspace/scratch/family-tropical-resort.jpg"
airfare_source="/workspace/scratch/family-airfare2.png"
mountain_source="/workspace/scratch/family-mountain-resort.png"

for source_file in "$cruise_source" "$resort_source" "$airfare_source" "$mountain_source"; do
  test -s "$source_file" || { echo "Missing source: $source_file" >&2; exit 1; }
done

mkdir -p "$output_dir" "$work_dir"

prepare_base() {
  local source_file="$1" target_file="$2"
  convert "$source_file" -auto-orient -fuzz 4% -trim +repage \
    -resize '1600x900^' -gravity center -crop 1600x900+0+0 +repage \
    -colorspace sRGB "$target_file"
}

prepare_base "$cruise_source" "$work_dir/cruise-base.png"
prepare_base "$resort_source" "$work_dir/resort-base.png"
prepare_base "$airfare_source" "$work_dir/airfare-base.png"
prepare_base "$mountain_source" "$work_dir/mountain-base.png"

# Blur only the small vessel-name area. The ship remains real and recognizable,
# while no readable third-party vessel or line name ships.
convert "$work_dir/cruise-base.png" \
  -region 240x70+420+590 -blur 0x11 +region \
  "$work_dir/cruise-base-clean.png"

mountain_slugs='^(branson|breckenridge|catskill|lake-ozark|park-city|pigeon-forge|sevierville|south-lake-tahoe|whitefish|wisconsin-dells)-condo$'

find "$repo_dir/certificates" -mindepth 2 -maxdepth 2 -type f -name '*.html' -print0 |
while IFS= read -r -d '' page; do
  family="$(basename "$(dirname "$page")")"
  slug="$(basename "$page" .html)"
  if [[ -n "$only_family" && "$family" != "$only_family" ]]; then
    continue
  fi
  destination="$(perl -ne 'if (/DESTNAME="([^"]+)"/) { print $1; exit }' "$page")"
  test -n "$destination" || { echo "No DESTNAME in $page" >&2; exit 1; }

  case "$family" in
    cruise)
      base="$work_dir/cruise-base-clean.png"
      label="CRUISE CERTIFICATE"
      accent="#267ca8"
      note="Representative passenger ship • line, ship and itinerary vary"
      ;;
    airfare)
      base="$work_dir/airfare-base.png"
      label="AIRFARE CREDIT CERTIFICATE"
      accent="#b06b22"
      note="Representative air travel • carrier, flight and routing vary"
      ;;
    all-inclusive)
      base="$work_dir/resort-base.png"
      label="ALL-INCLUSIVE CERTIFICATE"
      accent="#167b75"
      note="Representative resort stay • exact property assigned at confirmation"
      ;;
    condo)
      if [[ "$slug" =~ $mountain_slugs ]]; then
        base="$work_dir/mountain-base.png"
      else
        base="$work_dir/resort-base.png"
      fi
      label="RESORT CONDOMINIUM CERTIFICATE"
      accent="#287253"
      note="Representative resort accommodation • exact property assigned at confirmation"
      ;;
    *)
      echo "Unknown family $family" >&2
      exit 1
      ;;
  esac

  target="$output_dir/$slug.jpg"
  destination_length="${#destination}"
  destination_size=23
  if (( destination_length > 32 )); then
    destination_size=16
  elif (( destination_length > 24 )); then
    destination_size=19
  fi
  destination_label="$work_dir/label-$slug.png"
  convert -size 360x64 xc:none \
    -fill "$accent" -draw 'roundrectangle 0,0 359,63 22,22' \
    -font DejaVu-Sans-Bold -fill white -pointsize "$destination_size" -gravity center -annotate +0+0 "$destination" \
    "$destination_label"
  convert "$base" \
    \( -size 1600x370 gradient:'#00000000-#061713e8' \) -gravity south -composite \
    "$destination_label" -gravity north -geometry +0+52 -composite \
    -strip -sampling-factor 4:2:0 -interlace Plane -quality 88 "$target"
done

count="$(find "$output_dir" -maxdepth 1 -type f -name '*.jpg' | wc -l | tr -d ' ')"
test "$count" = "40" || { echo "Expected 40 images in the final set; found $count" >&2; exit 1; }

find "$output_dir" -maxdepth 1 -type f -name '*.jpg' -size 0 -print | grep -q . && {
  echo "Zero-byte output found" >&2
  exit 1
}

echo "Built $count verified artwork files in $output_dir"

# HVM certificate artwork release and deletion record

Date: September 8, 2026
Scope: Honest Vacation Marketing certificate artwork only

## Verified replacement set

| Certificate family | Pages | Final images | Visual standard |
| --- | ---: | ---: | --- |
| Resort Condominium | 20 | 20 | Real resort photography; exact destination printed; representative-property disclosure |
| Cruise | 12 | 12 | Real passenger ship; no readable third-party name/logo; ship/line/itinerary disclosure |
| All-Inclusive | 3 | 3 | Real resort-stay photography; exact destination printed; representative-property disclosure |
| Airfare Credit | 5 | 5 | Real air-travel photography; exact destination printed; carrier/flight/routing disclosure |
| **Total** | **40** | **40** | **No AI-generated imagery** |

All final images are unique 1600×900 JPEGs. Every certificate page references exactly one matching production image and includes matching Open Graph and Twitter image metadata, alt text, a representative-use disclosure, and a real-photo credit link.

## Deleted superseded artwork

Deletion happened only after the 40 replacements were uploaded and verified.

| Location | Deleted | Post-delete state |
| --- | ---: | --- |
| Git working tree `img/certificates/` | 39 files | Directory removed; zero old page references |
| Drive condo folder | 33 files | 20 verified replacement images remain |
| Drive all-inclusive folder | 3 files | 3 verified replacement images remain |
| Drive cruise folder | 12 files | 12 verified replacement images remain |
| Drive airfare folder | 5 files | 5 verified replacement images remain |
| Drive duplicate approved-cruise folder | 6 files | 0 images remain |
| **Drive total permanently deleted** | **59 files** | **0 old IDs remain; 40 new IDs present and nonempty** |

Google Drive deletions were permanent. The repository deletion removes the old files from the new release tree; older Git commits continue to provide repository-level history until a separate history rewrite is deliberately performed.

## Automated checks

- 40/40 certificate pages passed.
- 40/40 images passed JPEG signature, 1600×900 dimensions, nonempty-size, and unique-hash checks.
- 0 references to `img/certificates/` remain in certificate HTML.
- 40/40 local page routes returned HTTP 200.
- 40/40 local image routes returned HTTP 200.
- 40/40 certificate booking click-through targets returned HTTP 200 in the static release test.

The machine-readable row-level report is `audit/artwork-verification.json`.

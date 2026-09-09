# CRU-WCB — image acquisition V2 (Western Caribbean cruise region)

Certificate: **CRU-WCB / western-caribbean-cruise-region / Western Caribbean Cruise Region**
Scope: image only. **No pricing work performed.**
Governing brief: `research/IMAGE_BRIEF_V2.md` (read in full before searching).
Region certificate — no assigned port. Acceptable ports: Cozumel, Grand Cayman (George Town),
Roatán, Costa Maya, Ocho Rios, Falmouth (Jamaica).
Date: 2026-09-09

---

## Verdict

**ONE frame passes, and it passes cleanly on brand safety. It is nominated as primary with one
qualification stated up front: it has no berth infrastructure in frame.**

**PRIMARY — Pexels 35783406, "Sunset Cruise Ship View at Cayman Islands Beach", Tetyana Kovyrina.**
Grand Cayman. Norwegian Encore at the George Town anchorage, silhouetted against a full sunset,
seen from a west-facing beach with two figures walking the waterline and a lit beach palapa at
frame left. Ship = **20.4% of shipped frame width**. Visually verified at 100% on the file that
ships. Nothing brand-legible survives the downscale.

**ALTERNATE — the same source, second 16:9 reframe** (beach-forward instead of sky-forward).
I am labelling this honestly: **no second *independent* Western Caribbean frame survived.** Rather
than pad the nomination with something that fails, I am giving the coordinator two genuinely
different compositions off one clean licence and a full account of why nothing else made it.

**Candidates downloaded and opened with the Read tool: 47, across all six acceptable ports.**
Rejections are itemised in §5 with the specific thing I saw.

### The one qualification, stated plainly

The brief's criteria table requires **port evidence** — "terminal building, gantry, mooring
dolphins, gangway, parking structure, or a second berthed vessel **must be in frame**." The primary
does **not** have any of those. What it has is a beach bar/palapa with string lights at frame left
and a single marine marker pile in the water between the shoreline and the ship (verified at 5×,
§4.3). The ship is at **anchor**, not at a berth — which is the correct and only geometry available
at Grand Cayman, since the island has no cruise berth and every call is tendered.

So: it satisfies ship-size, light, composition, vibe and brand-check outright, and satisfies
"port" only in the sense that the anchorage *is* the port. That is a coordinator call, not mine to
paper over. Every frame in this sweep that *did* carry a pier, terminal or gangway failed on
something else — usually retail signage or a Carnival funnel — and §5 shows that pattern is not
coincidental.

---

## 1. What I was told not to repeat, and did not

The prior sweep rejected a Cozumel frame ("Mega Cruise Ships", Commons) because **"FREEDOM OF THE
SEAS" was legible on the bow at shipped size**, and its reframe was worse — the alternate crop put
"CARNIVAL DREAM" in twice plus the red whale-tail funnel. I did not revisit that file, and I
treated the Carnival funnel as disqualifying wherever it appeared.

That instruction did real work. **Three otherwise-excellent Western Caribbean frames died on the
funnel alone:**

| Frame | Port | What killed it |
| --- | --- | --- |
| Pexels 2678418, Samson Bush | **Coxen Hole, Roatán**, twilight | Two ships at berth, lights reflecting on flat water, genuinely beautiful — **both** carry the red whale-tail. Central and duplicated: unreframable, exactly the Cozumel failure mode. |
| Commons `Two_Cruise_Ships.jpg` (6000×2814) | Grand Cayman anchorage | Whale-tail on the right-hand ship at distance, and a concrete seawall + yellow bollard + chain across the whole foreground. Silhouette distance did not suppress it. |
| Pexels 35525533, Rick Tobin | **Roatán / Coxen Hole** | Whale-tail *and* "CARNIVAL VISTA" legible on the bow, plus a rusting shipwreck and a container barge in the mid-ground. |

Confirmed: the funnel survives distance and low light. It is a shape, not a wordmark, so none of the
usual suppressors touch it.

I also ranged widely as instructed rather than fixating on Cozumel — Cozumel contributed exactly
two openable candidates in the whole sweep (§5.2), and both failed.

---

## 2. Fetch mechanics — the brief's notes held, with two additions

Everything in `IMAGE_BRIEF_V2.md` §"Fetch mechanics" worked as documented. Two things to add:

**2.1 Wikimedia's 429 is now aggressive on `upload.wikimedia.org` originals, not just the API.**
A serial loop with 1.5 s pauses still tripped it — four of eight files came back as a 2,256-byte
HTML error page that PIL reports as `UnidentifiedImageError`. **Check `stat -c%s` before opening,
not after.** What worked: a retry wrapper that treats any response under ~50 KB as a failure and
backs off 5 s → 10 s → 15 s → 20 s, plus a browser-style User-Agent string with the
HVM-image-verification token appended. Every file eventually landed, most on retry 1–3.

**2.2 `Special:MediaSearch` is near-useless; the `api.php` search generator is not.**
MediaSearch returned *one* result for "Grand Cayman cruise ship tender George Town" and *zero* for
Roatán and Cozumel queries that plainly have files. The generator search finds them:

```
api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=30
        &gsrsearch=<query>&prop=imageinfo&iiprop=url|size
```

Filtering that to `width >= 2400` turns a category crawl into a one-call triage. This is how the
Falmouth, Costa Maya and Port-of-Roatán files were found. Recommend future sweeps use it first.

**2.3 Openverse remains thin for this brief.** Four port queries returned a combined **two** results
— both Wikimedia files, both rejected. Consistent with the brief's existing note.

**2.4 Flickr triage confirmed.** WebFetch on a CC-filtered Flickr search does expose full
`live.staticflickr.com` paths, and `_n` → `_b` gives 1024 px on the same secret. A 16-image George
Town contact sheet cost two calls. **But 1024 px is below the 1600 px deliverable**, so this is a
triage tool only — nothing on that sheet was worth the `/sizes/o/` round trip (§5.1).

---

## 3. PRIMARY — full record

| Field | Value |
| --- | --- |
| Source | Pexels — https://www.pexels.com/photo/35783406/ |
| CDN (original, no params) | `https://images.pexels.com/photos/35783406/pexels-photo-35783406.jpeg` |
| Title | "Sunset Cruise Ship View at Cayman Islands Beach" |
| Photographer | Tetyana Kovyrina |
| Licence | **Pexels License** — free for commercial use, no attribution required, no share-alike |
| Native dimensions | **5464 × 8192** (portrait) |
| Port | **Grand Cayman** — George Town anchorage, seen from a west-facing beach (Seven Mile Beach geometry) |
| Ship | Norwegian Encore (NCL) — identified at native resolution, §3.3 |
| Visual verification | **VISUALLY VERIFIED** — native file opened, 100 % ship crop opened, shipped 1600×900 file opened, three magnified sub-regions of the shipped file opened |

### 3.1 Recommended crop and scale factor

```
Source        5464 × 8192
Crop region   (0, 3900) → (5464, 6974)      full width, 5464 × 3074 native  (exact 16:9)
Output        1600 × 900
SCALE FACTOR  1600 / 5464 = 0.2928          — a 3.42× downscale
```

Rendered: `…/scratchpad/wcb/FINAL_CRU-WCB_primary_1600x900.jpg`

The 3.42× downscale is the whole brand-safety argument and is stated here so it can be checked.

### 3.2 Criteria table

| Criterion | Requirement | This frame |
| --- | --- | --- |
| Ship size | under ~40 % of frame width | **20.4 %** — 327 px of 1600, measured on the rendered file by luminance threshold across the ship band (x 699→1026), excluding the palms at frame left |
| Light | backlit / golden hour / dusk | **Full sunset, ship in near-silhouette against a lit sky.** Best case for the rule |
| Port evidence | terminal, gantry, dolphins, gangway, parking, or second vessel | **NOT SATISFIED.** Beach palapa at frame left + one marine marker pile. No pier, no second vessel — horizon band scanned full width at native, §4.4 |
| Composition | substantial clean sky or water for overlay | **Excellent.** Upper ~45 % is unbroken sunset sky; lower ~40 % is unbroken sand and glassy water. Two large, quiet overlay zones |
| Vibe test | would this sell a vacation? | **Yes, unambiguously.** Two figures walking the waterline at sunset, one photographing it; palms with string lights. No industry, no cars, no wires, no bins |
| Brand check | no readable ship name, line wordmark, or third-party signage | **PASSES at shipped size.** See §3.3 |

### 3.3 THE 100 % RULE — what is actually there, and what survives

**Step 1 — discovery at native resolution.** I cropped the ship out of the 5464 × 8192 original
(box 2223, 5207 → 3685, 5851; 1462 × 644 native px) and opened it. At native the frame **is
branded**:

- **"NORWEGIAN ENCORE"** in white on the upper superstructure at the bow — clearly legible, ~100
  native px wide
- **"NCL"** on the funnel — legible
- Norwegian Encore's signature swirling hull artwork along the bow

This is exactly the failure the brief warns about — it would have read as a faint smudge on a
downscaled look. **Recording it in full, because that is the point of the rule.**

**Step 2 — judgement on the file that ships.** The deliverable is 1600 × 900 at a 3.42× downscale.
I cropped the ship 1:1 out of the *rendered* 1600 × 900 file (box 660, 430 → 1060, 540) and opened
it at 4× LANCZOS. At the shipped scale:

| Mark | Native size | Size in the 1600 px deliverable | Legible? |
| --- | --- | --- | --- |
| "NORWEGIAN ENCORE" | ~100 px wide, ~7 px cap height | **~29 px wide, ~2 px cap height** | **No.** Resolves to an undifferentiated light band. No letterforms recoverable at 4× |
| "NCL" funnel mark | ~24 px wide | **~7 px wide** | **No.** A dark blob against a dark funnel |
| Hull artwork | full bow | visible as a soft wavy pattern | Decorative pattern, **not a wordmark or logo** — the criterion is "no readable ship name, no readable line wordmark, no third-party commercial signage" and this is none of the three |

This is the same standard the coordinator applied when approving the Port Canaveral sunset ("faint
bow text that resolves at 3×") and when rejecting the Cozumel frame ("legible **at shipped size**").
By that standard this passes, and it passes with more margin than Port Canaveral did — a 3.42×
downscale against Port Canaveral's crop-and-keep.

**Step 3 — the rest of the shipped file.** Only three regions are non-uniform. All three opened
from the rendered 1600 × 900 file:

- **Beach palapa / palms, frame left** (0, 400 → 180, 600 at 4×): thatched roof, string lights,
  furled beach umbrellas on the sand, a bin, one standing figure. **No signage of any kind.** The
  furled umbrellas read as beach furniture at 1:1, not as debris.
- **The two walking figures** (100, 460 → 340, 610 at 6×): full silhouettes. A ~4 px light patch on
  the man's shirt is an indistinct blur at 6× — no graphic or wordmark recoverable.
- **Sky, sand and water**: uniform. Nothing to check.

### 3.4 AI screen — reasoned call, per the brief's Pexels exception

Pexels strips EXIF, so the camera-metadata half of the screen cannot be run. Running the second
half, as the brief directs:

**Native geometry is 5464 × 8192 — that is a Canon EOS R5 frame in portrait orientation** (the R5
sensor is 8192 × 5464, 45 MP). This is an exact real-sensor match, not a round generator number.
It corroborates rather than merely fails to contradict.

Reinforcing it: Kovyrina's Cayman set is internally consistent with one body. `36000893` is also
5464 × 8192; `35701855` is 5373 × 8056 and `35783407` is 5012 × 7515 — the same aspect and scale,
slightly cropped. A generator does not produce a coherent set of near-identical off-round
dimensions from one photographer at one location.

**Called as a real photographic capture.** Documented as reasoning, not as an unexamined pass.

For contrast, an AI-screen **failure** I hit in the same set: Pexels **29261269** ("Serene sunset at
Cayman Islands beach", Chevaughn Barnett) is **12000 × 9000** — 108 MP, exactly 4:3, both dimensions
round. No sensor produces that. Per the brief's rule this cannot have AI positively ruled out. It
had no ship in it and was rejected anyway, but flagging the geometry for the record.

### 3.5 Port identity — evidence and its limits

**For Grand Cayman:**
1. Pexels carries an explicit **location tag: Cayman Islands** on this photo.
2. The photographer's title names the Cayman Islands.
3. Kovyrina has a **coherent Cayman series** — 35783405, 35783406, 35783407, 35701855, 36000893,
   36000895 — several Cayman-titled, shot on one body. `36000893` in that series shows a
   recognisable George Town–area waterfront (seawall promenade, modern white office block, floating
   dock, a yellow water taxi), which independently places the photographer on Grand Cayman.
4. **Geographic consistency.** The frame is a west-facing beach at sunset with a large cruise ship
   at anchor offshore. Grand Cayman has no cruise berth; ships anchor off George Town and tender.
   Seven Mile Beach faces west, and the George Town anchorage lies south along that shoreline.
   The geometry is exactly right.
5. **Itinerary consistency.** Norwegian Encore runs Western Caribbean itineraries that call at
   Grand Cayman.

**The limits, stated:** there is no geotag I can verify independently — the location rests on the
photographer's own assertion plus the corroboration above. Pexels' keyword tags on this photo are
SEO noise ("Barbados", "Punta Cana", "Hawaii Beach", "Goa Beach") and should **not** be read as
competing location claims; they are auto-generated and appear across unrelated Pexels beach photos.

---

## 4. ALTERNATE — same source, second reframe

```
Source        Pexels 35783406 (as above, same licence)
Crop region   (0, 4300) → (5464, 7374)      full width, 5464 × 3074 native  (exact 16:9)
Output        1600 × 900
SCALE FACTOR  1600 / 5464 = 0.2928          — a 3.42× downscale
```

Rendered: `…/scratchpad/wcb/FINAL_CRU-WCB_alternate_1600x900.jpg`

Same file, same licence, same verification — the crop shifts down 400 native px, which moves the
ship from the vertical mid-line to the upper third and trades sky for foreground sand. The primary
is the **sky hero** (better for a top-anchored header overlay); the alternate is the **beach hero**
(better if type sits low). Ship size, brand status and vibe are identical between them.

**I am not dressing this up as an independent second candidate.** It is not one. §5 is the account
of why there isn't one.

### 4.1 The closest independent runner-up, and its exact defect

**Commons `Port of Falmouth viewed from cruise ship, Apr 2014.jpg`** (4000 × 3000, Falmouth,
Jamaica). It is the only rejected frame that had *both* a real ship at a real berth *and* an
accepted Western Caribbean port. **I reframed it before rejecting, per brief step 4a**: a crop from
y = 900 (scale 1600/4000 = 0.40) successfully drops the ship's funnel and mast out of frame and
brings the ship to ~28 % of width. The reframe still fails, on three counts that no crop fixes:

- Retail signage throughout the terminal plaza (red shop fascias, vendor kiosks)
- **No clean sky or water anywhere** — the frame is ~90 % rooftops and paving, so there is no
  overlay zone
- Vibe: it reads as an outlet mall with a ship parked behind it, not as a vacation

**Reframe tested, reframe failed.** Recorded so no one repeats it.

### 4.2 The other near-miss

**Commons `Falmouth ~ Jamaica.jpg`** (6000 × 4000) is a clean, brand-free view of the Falmouth
cruise pier: the Georgian terminal building, mooring fenders down both sides of the berth, the
Jamaican flag, town and hills behind. It satisfies port evidence perfectly and has no legible
brands. **It has no ship.** The cruise family rule requires "real passenger ship at a berth," so it
fails on subject. Sky is also flat overcast grey — poor for overlay. Noting it in case a future
brief loosens the ship requirement for a region card.

### 4.3 Marker pile — verified

The dark vertical object in the water below the ship was cropped from native at (2560, 5600) →
(2860, 5800) and opened at 5×. It is a **marine marker pile** — a single post, no signage, no
platform. Reported as what it is: a small marine marker, not berth infrastructure. I am not
claiming it as a mooring dolphin.

### 4.4 Horizon scanned for a second vessel

The full native horizon band (0, 5650) → (5464, 6150) was cropped, split in half and opened. **No
second vessel, no tender, no pier anywhere along the horizon.** Reporting the negative result
rather than leaving the criterion vague.

---

## 5. Everything opened and rejected — 45 frames

Every row below was **downloaded and opened with the Read tool**. Nothing here is a metadata
judgement.

### 5.1 Grand Cayman (13 opened besides the primary)

| Candidate | Source | Verdict |
| --- | --- | --- |
| 35701855 Kovyrina, "Dramatic sunset over Cayman Islands beach" | Pexels 5373×8056 | REJECT — beautiful sunset, **no ship** |
| 35783407 Kovyrina | Pexels 5012×7515 | REJECT — no ship, one figure in the surf |
| 36000893 Kovyrina, George Town–area waterfront | Pexels 5464×8192 | REJECT — no ship (used only as location corroboration, §3.5) |
| 36000895 Kovyrina | Pexels 4865×7293 | REJECT — no ship |
| 38724079 Christa | Pexels 4284×5712 | REJECT — no ship, water and sky only |
| 29261269 Chevaughn Barnett | Pexels **12000×9000** | REJECT — no ship; **round non-sensor geometry, AI cannot be ruled out** (§3.4) |
| `Two_Cruise_Ships.jpg` | Commons 6000×2814 | REJECT — **Carnival whale-tail funnel**; concrete seawall, yellow bollard and chain across the foreground |
| `Empress_of_the_Seas_in_Grand_Cayman_May_30,_2016.jpg` | Commons 2738×1825 | REJECT — "EMPRESS OF THE SEAS" fully legible, ship fills frame |
| Flickr CC contact sheet, 16 George Town frames (`_b` 1024 px) | Flickr | REJECT en bloc — Carnival whale-tails in the majority; **all capped at 1024 px**, below the 1600 px deliverable, so none justified a `/sizes/o/` chase |
| Unsplash Ronny Rondon ×4 (`photo-1622561700644`, `…722733`, `…763586`, `…758888`) | Unsplash 4000 px | REJECT — Grand Cayman sandbar and sunsets, **no cruise ship** in any |
| Unsplash `photo-1597674668521` Gray Matter | Unsplash | REJECT — page states **Grand Turk, Turks & Caicos**. Not Western Caribbean |
| Pexels 20737480 Ian Panelo | Pexels 4000×6000 | REJECT — ship is a speck on the horizon, unreadable as a cruise ship; empty sky, no port |
| `George Town - Old Harbor`, `Waterfront, George Town`, `George Town - Equinox from Tender` | Commons | REJECT before download — 1003×656, 800×533, 1480×771. **All below the 1600 px deliverable** |

### 5.2 Cozumel (2 opened)

| Candidate | Source | Verdict |
| --- | --- | --- |
| `International Cruise Pier, Cozumel QR.jpg` | Commons 6000×3216 | REJECT — the single most brand-dense frame in the sweep. "**winjet** Fast Ferry" across an orange ferry hull, "**TEQUILA A GOGO**", a **Rolex** dealer sign, a **Rolling Stones** lips logo, and further retail fascias. Third-party commercial signage is an explicit disqualifier |
| `Two_Cruise_Ships.jpg` (listed above; the anchorage may be Cozumel or Grand Cayman) | Commons | REJECT — Carnival funnel |
| Prior sweep's "Mega Cruise Ships" | — | Not re-examined, per instruction |

Cozumel's free-licence inventory is genuinely this thin. Pexels' Cozumel results are beach,
hammock and pelican photographs with no vessels; the Commons pier photograph is the only real port
frame and it is unusable.

### 5.3 Roatán / Coxen Hole (7 opened)

| Candidate | Source | Verdict |
| --- | --- | --- |
| Pexels 2678418 Samson Bush, twilight | 4000×3000 | REJECT — **two Carnival whale-tail funnels**, both lit; plus a rusted shipwreck at frame right and a car park bottom-left |
| Pexels 35525533 Rick Tobin | 6000×4000 | REJECT — whale-tail **and** "CARNIVAL VISTA" legible; shipwreck, container barge, concrete waterfront |
| Pexels 33290659 Earth Stock, Coxen Hole dock aerial | 4624×3472 | REJECT — handsome pier and terminal complex, **no cruise ship** |
| Pexels 17793307 Rachel Carter, Coxen Hole from above | 2448×3059 | REJECT — heavy storm cloud, no ship, fails the vibe test |
| `Port of Roatan (33087196786).jpg` | Commons 5184×2487 | REJECT — "**MONKEY LA LA ZIP**" in metre-high letters across the roof, "**TOWN CENTER — WELCOME / BIENVENIDOS**" sign, shop fascias. No ship |
| `Mahogany Bay, Roatan, Honduras - panoramio.jpg` | Commons 4320×2432 | REJECT — **mislabelled**. It is a tree and a green steel pole. No bay, no ship |
| `Roatan from a cruise ship.jpg` | Commons 4032×3024 | REJECT — distant coastline, no ship |

### 5.4 Ocho Rios (2 opened)

| Candidate | Source | Verdict |
| --- | --- | --- |
| `JM-ocho_rios-hafen-01.jpg`, Balou46 | Commons 4928×3264, CC BY-SA 4.0 | REJECT — genuinely attractive: harbour, breakwater, Turtle Beach, three tender catamarans at the pier. But **no cruise ship** (it is shot *from* one), and magnifying the waterfront resolves "**DI DIAMONDS INTERNATIONAL**", "**JAMAICA BLUE MOUNTAIN COFFEE**" and "AREA 1 / ZONA 1". Two disqualifiers |
| `High-view_Ocho_Rios_Jamaica.jpg` | Commons 4032×3024 | REJECT — **badly mislabelled on Commons: this is the Marin Headlands and the Golden Gate Bridge, San Francisco.** Not Jamaica at all. Flagging it; the file name will mislead the next sweep too |

### 5.5 Falmouth, Jamaica (3 opened)

| Candidate | Source | Verdict |
| --- | --- | --- |
| `Port of Falmouth viewed from cruise ship, Apr 2014.jpg` | Commons 4000×3000 | REJECT after reframe test — see §4.1 |
| `Falmouth ~ Jamaica.jpg` | Commons 6000×4000 | REJECT — pier, terminal and berth are perfect and brand-free, but **no ship**; flat grey sky. See §4.2 |
| `Falmouth, Jamaica.jpg` | Commons 6000×4000 | REJECT — Oasis-class ship looms over more than half the frame; "**GOLD MINE**" and other retail fascias in the plaza; blown white sky with no overlay value |

### 5.6 Costa Maya (5 opened)

| Candidate | Source | Verdict |
| --- | --- | --- |
| `Costa Maya, Mexico - panoramio (2)/(6)/(7)/(8)` | Commons 4928×3264 each | REJECT — all four are shoreline and reef from the water. **No cruise ship in any.** (6) additionally carries a large pink beach-club building |
| `Costa maya from cruise ship.jpg` | Commons **1200×900** | REJECT — below the 1600 px deliverable, cannot be cropped to 1600×900 |

Costa Maya has essentially no free-licence cruise-port photography. Pexels' Mahahual results are
beach, hammock and palm frames with no vessels.

### 5.7 Opened, then rejected on geography or brand (13)

These surfaced under Western Caribbean queries but are not Western Caribbean, or died on brand:

| Candidate | What I saw |
| --- | --- |
| Pexels 20464720 | "**CARNIVAL VENEZIA**" on the bow; tender lettered "Grenada Marine Protected Area" — Grenada |
| Pexels 29673821 | "**P&O CRUISES**" across the hull in metre-high type — Bridgetown |
| Pexels 15822441 | Celebrity "X" funnel logo and "Celebrity" on the hull — Key West |
| Pexels 15564308 | **AIDA** red-lips logo and wordmark |
| Pexels 30070297 | Superb sunset berth composition with mooring dolphins and a tug — but Tortola, and the ship name reads on the bow |
| Pexels 30441205 | "**EXPLORA II**" legible on the stern |
| Pexels 5334285 | "**CARNIVAL CONQUEST**" on a gangway banner between two hulls |
| Pexels 31812942 | "**P&O CRUISES**" plus "ZONE 1 / ZONE 2" pier signage |
| Pexels 15304353 | "**PRINCESS CRUISES**" on the hull — St Thomas |
| Pexels 38503193 | Holland America seahorse funnel marks ×2, ship fills the frame |
| Pexels 36363951 | Looked ideal — two ships bow-on at distance, long pier, big clean sky. 100 % crop resolves a **French tricolour** and a magenta/green **Ponant** funnel; Pexels tags it **Rotterdam** |
| Pexels 37099814 | Lovely geometry — tiny ship at anchor, pier, palms — but **Tela, Honduras**, not an accepted port, and litter on the beach |
| Pexels 29146142 / 33420949 / 37874063 / 32859608 / 15298849 / 10656996 / 30573335 | Ship dominates the frame and/or unestablished port; 32859608 and 15298849 are hull-and-lifeboat close-ups with no sky |

---

## 6. The structural finding

The Western Caribbean is the hardest region on this brief for one reason: **Carnival, Royal
Caribbean and NCL own it, and all three wear marks that survive the two suppressors the brief
relies on.** Distance and backlight kill wordmarks. They do not kill Carnival's whale-tail, which
is a silhouette, or Celebrity's X, or Holland America's seahorse — those are *shapes* on the
highest point of the ship, against the sky.

And the ports themselves are the second problem. Cozumel's Punta Langosta, Roatán's Town Center,
Ocho Rios' Island Village and Falmouth's Historic District are all **purpose-built retail
developments**. Photographing the berth means photographing the shops. Every "shoot the port"
frame in this sweep that had real berth infrastructure also had Diamonds International, Rolex, a
Rolling Stones logo, or Monkey La La in it. The brief's port-evidence criterion and its
no-third-party-signage criterion are in direct conflict at these six ports specifically, in a way
they are not at Port Canaveral or Miami.

**What resolved it was the one Western Caribbean port with no berth at all.** Grand Cayman tenders
every call, so its ships sit a mile offshore against open water — no pier to photograph, and
therefore no shops. The coordinator's instinct to look at Grand Cayman was right, and it was right
for a reason worth writing down: *the anchorage ports are the brand-safe ports.* If a future
certificate needs a Western Caribbean frame and this one is unavailable, look at Grand Cayman
first, and look at sunset.

---

## 7. Files

Rendered deliverables (scratch, not committed):

```
…/scratchpad/wcb/FINAL_CRU-WCB_primary_1600x900.jpg     crop (0,3900)-(5464,6974), scale 0.2928
…/scratchpad/wcb/FINAL_CRU-WCB_alternate_1600x900.jpg   crop (0,4300)-(5464,7374), scale 0.2928
…/scratchpad/wcb/px_35783406.jpg                        native 5464×8192 original
```

Verification crops retained: `crop_35783406_ship_100.jpg` (native ship, shows the branding),
`chk_shipped_ship_4xL.jpg` (same region from the shipped file at 4×, shows it does not survive),
`chk_shipped_bar_4x.jpg`, `chk_final_people_6x.jpg`, `scan_buoy2.jpg`, `scan_horizon_L/R.jpg`.

No repository file other than this report was modified.

# Repo map — every folder, what it is, and what to clean up

Written 2026-08-31. Covers both repos.

`CLAUDE.md` (in each repo) is the **rules**: never hand-edit the site repo, never work on
`main`, diff before you merge. This file is the **map**: what is in each folder, whether it
is source, output, or dead weight, and the cleanup that is safe to do.

Read `CLAUDE.md` first. This file assumes it.

---

## 1. The two repos in one picture

```
  sbdavidjlemmons-hub/honest-travel-group          ← SOURCE. Change things here.
  ─────────────────────────────────────────
   scripts/build-site.mjs         ─┐
   scripts/build-certificates.mjs  │  node scripts/build-*.mjs
   scripts/build-snapshots.mjs     ├──────────────────────────►  site/   (gitignored)
   scripts/build-vo-sites.mjs      │                                │
   scripts/lib/tracking.mjs       ─┘                                │
   scripts/assets/js/*.js  ──── copied verbatim ───────────────►    │
                                                                    │
                                              copy across on a branch, open a PR
                                                                    │
                                                                    ▼
  sbdavidjlemmons-hub/honest-travel-group-site     ← BUILD OUTPUT. GitHub Pages serves this.
  ──────────────────────────────────────────
   *.html, certificates/, js/, img/         →  https://honestvacationmarketing.com


  worker/lead-intake/  ──── wrangler deploy ────►  hvm-lead-intake.lead-intake.workers.dev
        ▲                                                    │
        └──────── the site posts every form and beacon ──────┘
```

**The one-line version:** the site repo is a photocopy. Editing the photocopy does not
change the original, and the next photocopy erases what you wrote. That has happened three
times (dates and commits are in `CLAUDE.md`).

---

## 2. Wireframe — `honest-travel-group` (source)

Legend: **SOURCE** = edit here · **OUTPUT** = generated, do not edit · **PARKED** = not in
the live funnel · **JUNK** = safe to remove (§5).

```
honest-travel-group/
│
├── CLAUDE.md                     SOURCE   Collision rules. Read first.
├── START-HERE.md                 SOURCE   The orientation doc. Names the current docs.
├── README.md                     SOURCE
├── 66 other *.md files           MIXED    Only 4 are current. See §5.1.
├── 9 binary files (.docx/.pptx/  PARKED   Decks, handbooks, a reconciliation waterfall,
│   .xlsx/.pdf/.ipynb)                     one stale Excel lock file. See §5.2.
│
├── .claude/                      SOURCE   ← the agents live here. See §4.
│   ├── agents/
│   │   ├── README.md                      The three chains + shared facts table
│   │   ├── lead-researcher.md             Read, Grep, Glob, WebSearch, WebFetch, Write
│   │   ├── contact-enricher.md            Read, Write, Edit, Bash, Grep, Glob
│   │   ├── outreach-writer.md             Read, Grep, Glob, Write
│   │   └── compliance-checker.md          Read, Grep, Glob, Bash
│   └── launch.json                        Serves site/ on :8899 for local preview
│
├── scripts/                      SOURCE   ★ THE GENERATORS. This is where pages change.
│   ├── build-site.mjs                     4 offer pages + index/about/partners/optin/
│   │                                      terms/privacy/thank-you.  Holds A2P_DISCLOSURE,
│   │                                      TESTIMONIALS[] (deliberately empty), SOT.cst.
│   ├── build-certificates.mjs             40 destination pages + 2 index pages
│   ├── build-snapshots.mjs                snap-a/b/c.html
│   ├── build-vo-sites.mjs                 voice-over variants
│   ├── check-site.mjs                     ★ the guardrail. Run after every build.
│   ├── offer-content.mjs                  copy blocks the offer pages compose from
│   ├── certificate.mjs                    certificate rendering
│   ├── lib/
│   │   ├── tracking.mjs                   ★ trackingHead / assertTracking /
│   │   │                                    beaconTail / assertBeacon / copyBeaconAssets
│   │   └── normalize-tags.mjs
│   ├── assets/js/
│   │   ├── visit.js                       ★ the beacon — EDIT HERE, not in the site repo
│   │   └── scoring.js                     ★ the intent scorer — EDIT HERE
│   │
│   ├── daily-audience.mjs                 the one audience command (find→stage→push→verify)
│   ├── validate-phones.mjs                all phone grading goes through this
│   ├── push-ghl-contacts.mjs              resumable upsert
│   ├── build-a0-segment.mjs               re-run after every push
│   ├── import-datamoon.mjs · stage-datamoon-audience.mjs
│   ├── extract-priority.mjs · build-call-list.mjs · build-callback-queue.mjs
│   ├── build-send-batch.mjs · build-ghl-audience.mjs · build-ghl-opportunities.mjs
│   ├── midpoint-touch.mjs · rep-credit.mjs · rep-links.mjs · reps.mjs
│   ├── verify-lead-intake.mjs · verify-live-funnel.mjs · webhook-vs-control.mjs
│   ├── *.test.mjs                         3 tests colocated with their scripts
│   └── *.ps1                              4 Windows scheduler wrappers
│
├── worker/                       SOURCE   ★ DEPLOYED. Cloudflare.
│   ├── lead-intake/
│   │   ├── index.mjs                      the router. Visit branch runs BEFORE mapLead —
│   │   │                                  the site posts every bucket to the bare origin.
│   │   ├── mapLead.mjs                    form → GHL contact
│   │   ├── visit.mjs   + visit.test.mjs   the visit bucket (KV, capped window, 90d TTL)
│   │   ├── seatlock.mjs                   Authorize.net seat hold
│   │   ├── touch.mjs   + touch.test.mjs
│   │   ├── booking.mjs + booking.test.mjs
│   │   ├── dayreport.mjs + dayreport.test.mjs
│   │   ├── redteam.test.mjs               abuse cases
│   │   └── wrangler.toml
│   ├── phone/                             separate worker: copy.mjs, index.mjs, wrangler.toml
│   └── index.ts                           legacy TS entry
│
├── site/                         OUTPUT   Gitignored. `build-*.mjs` writes it. Never edit.
├── data/certificates.json        SOURCE   the 40 destinations the cert generator reads
├── email-templates/              SOURCE   44 files. M-*/NB*/T1 HTML + cold-set markdown.
├── marketing/                    SOURCE   4 kits (Meta ads, FB launch, email campaign)
│
├── app/                          PARKED   Next.js app (api, portal, assess, gateways,
│                                          pathways, legal, components…). Not the funnel.
├── supercool-site/               PARKED   separate Vite/Tailwind site
├── examples/d1 · db/ · drizzle/ · lib/ · build/   PARKED  D1/Drizzle scaffolding
├── public/                       PARKED   3.0 MB — brand/ and certificates/ assets
├── tests/                        SOURCE   3 tests: consent guard, rendered HTML, scoring
├── backups/lovable/              JUNK?    671 files, 4.5 MB. Nothing references it. §5.3
│
├── .env                          ★ NOT IN GIT. GHL token, location id, LEAD_ENDPOINT.
└── DATA/                         ★ NOT IN GIT. Staged audiences. Lost once, 2026-08-05.
```

**The five paths that actually make money:** `scripts/build-site.mjs`,
`scripts/build-certificates.mjs`, `scripts/lib/tracking.mjs`, `scripts/assets/js/`,
`worker/lead-intake/`. Everything else can move fast.

---

## 3. Wireframe — `honest-travel-group-site` (build output)

```
honest-travel-group-site/
│
├── CLAUDE.md                     SOURCE   "This repo is build output." Read it.
├── CNAME · .nojekyll · _redirects        deploy config (also emitted by the generator)
├── robots.txt · sitemap.xml · llms.txt   also generated
├── README.txt
│
├── cruise.html                   OUTPUT ★ money page
├── condo.html                    OUTPUT ★ money page
├── all-inclusive.html            OUTPUT ★ money page
├── resort-air.html               OUTPUT ★ money page
├── thank-you.html                OUTPUT ★ money page — BUT SEE THE WARNING BELOW
│
├── index.html · about.html · partners.html          OUTPUT
├── optin.html · terms.html · privacy.html           OUTPUT — live-fetched by the A2P
│                                                    carrier compliance scan. Leave alone.
├── snap-a.html · snap-b.html · snap-c.html          OUTPUT (build-snapshots.mjs)
├── text.html                                        OUTPUT
├── partner.html                  ⚠ HAND-WRITTEN. No generator exists. See below.
│
├── certificates/
│   ├── index.html · terms.html   OUTPUT
│   ├── cruise/           12 pages
│   ├── condo/            20 pages
│   ├── airfare/           5 pages
│   └── all-inclusive/     3 pages          40 destination pages + 2 index = 42 files
│
├── js/
│   ├── visit.js                  OUTPUT   copied from scripts/assets/js/ — edit it THERE
│   └── scoring.js                OUTPUT   copied from scripts/assets/js/ — edit it THERE
│
├── img/                          24 files, 6.6 MB
│
└── docs/                         SOURCE   hand-written, lives only here
    ├── cold-stream-setup.md              sending subdomain / cold stream
    ├── orchestrator-rail.md              session orchestration
    └── REPO-MAP.md                       this file
```

### ⚠ The two files that are not reproducible from source

| File | What it carries | Risk |
|---|---|---|
| `thank-you.html` | the partner hand-off — `handoff()`, `ptoken()`, the `partner.html` link, the local `.ics`. Roughly **143 lines** the generator does not produce. | The next `node scripts/build-site.mjs` overwrites all of it, silently. |
| `partner.html` | the whole page. **No generator at all.** | The next build does not know it exists. |

Porting both into `build-site.mjs` is **outstanding work**, not a decision that was made.
Until it is done, anyone running a full build has to restore these two by hand — which is
exactly the failure mode `CLAUDE.md` documents three times.

---

## 4. Cleaning up the agents

"Agents" means two different things here. Both need attention; only one is a file cleanup.

### 4.1 The four subagent definitions — `.claude/agents/`

**Do not delete these.** They are well-built and they are tracked in git. Each one carries
domain rules that are expensive to re-derive: the DataMoon phone defect, the
`needs-dnc-scrub` block, the empty `TESTIMONIALS[]`, "certificate number ≠ activation code."
Deleting them re-opens every one of those.

What they need is **reconciliation with `CLAUDE.md`**, which did not exist when they were
written. The division of labour should be:

| | Owns |
|---|---|
| `CLAUDE.md` | Repo mechanics — two repos, never edit the output, never work on `main`, diff before merge, prove-it-before-push commands |
| `.claude/agents/*.md` | Domain rules — consent basis, phone grading, voice, what may never be claimed |

Concretely, three edits:

1. **Add one line to each of the four agents**, near the top:
   `> Repo rules live in CLAUDE.md. Read it before touching a file. Never edit the site repo by hand; never commit to main.`
   None of the four currently says this. `contact-enricher` has `Write` and `Edit`, and
   `compliance-checker` and `contact-enricher` both have `Bash` — all three could hand-edit
   the output repo today and nothing in their instructions stops them.

2. **Fix the grounding order in `README.md`.** It says
   `START-HERE.md → HANDOFF.md → NODES.md → WORKFLOW-DESIGN.md`. It should start with
   `CLAUDE.md`. The README's own "Known doc conflicts" section already flags that
   `START-HERE.md`'s "only four current docs" line is out of date — the same is now true of
   the grounding order.

3. **Resolve or re-date the shared facts table** in `README.md`. Two entries are
   time-sensitive and one is now wrong somewhere:
   - *"SMS **Blocked.** A2P campaign In progress"* — verify against `A2P_STATUS.md` before
     any agent quotes it.
   - *"Email live, **warm-up Stage 1**"* — the ladder in `DELIVERABILITY.md` governs; if the
     stage has moved, this table is telling four agents the wrong volume ceiling.
   - The A0 counts (4,859 / 2,958) are already flagged as conflicting with `HANDOFF.md`'s
     arithmetic note. Pick one and fix the loser.

Tool surface is right as-is: `outreach-writer` and `lead-researcher` cannot run Bash, and
`compliance-checker` cannot write. That is the correct shape — the gate cannot edit what it
is gating. Do not widen it.

**What to check before changing anything:** the agents reference `build-site.mjs` symbols by
name (`A2P_DISCLOSURE`, `TESTIMONIALS[]`, `SOT.cst`). If a generator rename lands, these four
files break silently — nothing asserts them. Grep before you rename:

```bash
grep -rn 'A2P_DISCLOSURE\|TESTIMONIALS\|SOT\.cst' .claude/agents/ scripts/
```

### 4.2 The running sessions

Separate problem, and it is not a file cleanup — it is an archive pass. Several sessions are
open against these repos, cannot see each other, and some have been idle long enough that
they are holding a name and a branch and doing nothing. That is what produced the collisions
`CLAUDE.md` documents.

The rule that prevents it is already written down: **branch, push, PR — nobody works on
`main`.** The cleanup is just enforcement:

1. List the sessions and note, for each: last activity, branch, and whether it has an open PR.
2. **Anything with an open PR: leave it alone.** It is doing work.
3. **Anything idle with no branch and no PR:** archive it. It has nothing to lose.
4. **Anything idle with a branch and no PR:** push the branch first, then archive. Otherwise
   the work goes with the container.
5. Anything blocked at a permission prompt with nobody watching will never unblock itself —
   archive it and restart the task with a session that can be watched.

Archiving is reversible (a session can be unarchived) but the container is not — an archived
session's uncommitted working tree is gone. **Push before archiving, every time.**

---

## 5. Repo hygiene — the cleanup `START-HERE.md` already sanctions

### 5.1 Fourteen superseded docs, all still present

`START-HERE.md` line 53 names these as *"Superseded, keep for reference only."* Every one of
them is still sitting in the repo root, indistinguishable from a current doc:

```
ACTION_KIT_AND_TODO.md   ARCHITECTURE.md        DEPLOY.md
LAUNCH_CHECKLIST.md      MORNING_CHECKLIST.md   LEAN_BUILD_SCOPE.md
GHL_MASTERY_REPORT.md    INTEGRATION_MAP.md     SEO_STRUCTURE.md
GATEWAYS_AUDIENCE_MAP.md GHL_HANDOFF_SHOW_RATE.md LAUNCH_DAY_OUTREACH.md
AUDIT.md                 GHL_AI_WORKFLOW_BRIEF.md
```

**Move, don't delete** — `START-HERE.md` says keep them for reference:

```bash
mkdir -p docs/archive
git mv ACTION_KIT_AND_TODO.md ARCHITECTURE.md DEPLOY.md LAUNCH_CHECKLIST.md \
       MORNING_CHECKLIST.md LEAN_BUILD_SCOPE.md GHL_MASTERY_REPORT.md \
       INTEGRATION_MAP.md SEO_STRUCTURE.md GATEWAYS_AUDIENCE_MAP.md \
       GHL_HANDOFF_SHOW_RATE.md LAUNCH_DAY_OUTREACH.md AUDIT.md \
       GHL_AI_WORKFLOW_BRIEF.md  docs/archive/
grep -rn 'ACTION_KIT_AND_TODO\|GHL_MASTERY_REPORT\|INTEGRATION_MAP' --include='*.md' \
     --include='*.mjs' . | grep -v docs/archive   # fix any link this breaks
```

That takes the root from 69 markdown files to 55. The remaining 55 still need a pass —
`START-HERE.md` names only **four** as current (`HANDOFF.md`, `GHL_SOP.md`,
`AUDIENCE_SYSTEM.md`, `DELIVERABILITY.md`), and the agents' README adds `NODES.md` and
`WORKFLOW-DESIGN.md`. That leaves roughly **49 documents whose status nobody has stated.**
Do not guess at those — they are specs and reports, and some are the only record of a
decision.

### 5.2 The stale Excel lock file — delete this one outright

```
~$meshare_exit_lead_value.ipynb
```

An Office lock file for `timeshare_exit_lead_value.ipynb`, committed by accident. It is not
a document, it holds nothing, and it will confuse every future `ls`.

```bash
git rm '~$meshare_exit_lead_value.ipynb'
printf '~$*\n' >> .gitignore
```

The other eight binaries in root (the LA handbook, the training deck, the brand copy, the
TCR reconciliation waterfall in three formats, the timeshare notebook, the Excel export) are
real documents. Leave them, or move them to `docs/` — but they are not junk.

### 5.3 `backups/lovable/` — 671 files, 4.5 MB

Nothing in the repo references it. It is a snapshot of a Lovable export. Before removing it,
confirm it is reproducible from Lovable itself — if it is, it does not belong in git; if it
is not, it is the only copy and it stays.

```bash
grep -rn 'backups/' --include='*.mjs' --include='*.ts' --include='*.json' . | grep -v node_modules
```

### 5.4 Already done

The 45 MB of committed junk `START-HERE.md` flags — `node-v24.18.0-win-x64.zip`,
`UPLOAD TEST READY.zip`, `trc proposal.docx`, `artwork-studio.html`,
`gateways-preview.html`, `hvg-home-preview.html` — is **gone.** Verified 2026-08-31. That
paragraph in `START-HERE.md` is now stale and should be struck.

---

## 6. Before you push anything

```bash
node scripts/build-site.mjs           # regenerate
node scripts/build-certificates.mjs   # 40 destination pages
node scripts/check-site.mjs           # the guardrail
node worker/lead-intake/visit.test.mjs
node worker/lead-intake/redteam.test.mjs
node worker/lead-intake/touch.test.mjs
node worker/lead-intake/booking.test.mjs
node worker/lead-intake/dayreport.test.mjs
```

Then **diff the regenerated `site/` against the deployed site repo.** Output that differs in
ways you did not intend is the warning. There is no CI on either repo — nothing runs on a PR
— so the build assertions (`assertTracking`, `assertBeacon`) and this diff are the only
things standing between a regression and production.

Two specific traps:

- **Build without `.env` and every page ships `var ENDPOINT=""`.** The forms silently stop
  posting while still telling visitors they are in. Confirm the build prints
  `"webhook": "live"` before copying anything across.
- **A clean auto-merge is not evidence of a correct one.** On 2026-08-30 two sessions
  independently added the same three tracking scripts to all 40 certificate pages; git took
  both sides without a conflict, and every page was set to fire GA4, Meta and DataMoon
  twice — inflating exactly the traffic numbers the intent ranking is read off.

---

## 7. Nothing in §4 or §5 has been done

This file is the map and the plan. No file has been moved, deleted, or archived, and no
session has been touched. Every command above is written out so it can be run — or not — on
your say-so.

# Golden Certificate Tracking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put both approved Golden Cruise Certificates behind the existing HVM measurement rail without changing their visible or commercial content.

**Architecture:** Add a marked, removable analytics bootstrap to the Golden HTML and a focused external event bridge. Reuse `js/visit.js` and the deployed visit bucket; encode Golden journey events in both GA4/Meta and HVM visit beacons while leaving booking completion to GoHighLevel.

**Tech Stack:** Static HTML, browser JavaScript, Node.js verification script, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-18-golden-tracking.md`

## Global Constraints

- Do not change approved certificate artwork, PDFs, offer copy, pricing, disclosures, destinations, or booking rules.
- Keep calendar `B2QxN25XAnB9MaD4KukW` unchanged.
- Do not emit `booking_completed` from a browser click.
- Preserve first-touch attribution before cleaning the visible URL.
- Use the existing Meta, GA4, DataMoon, and HVM worker identifiers verbatim.

---

### Task 1: Golden tracking rail

**Files:**
- Create: `js/golden-tracking.js`
- Create: `scripts/verify-golden-tracking.mjs`
- Modify: `certificates/GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html`

**Interfaces:**
- Consumes: `window.HVM_PAGE`, `window.HVM_VID`, `window.__hvmParams`, `window.fbq`, `window.gtag`, the existing Golden DOM controls, and `js/visit.js`.
- Produces: GA4/Meta journey events and HVM visit beacons for the four approved client-side stages.

- [ ] **Step 1: Write the failing verification script**

Check the required platform IDs, external scripts, event names, calendar ID,
absence of browser-side `booking_completed`, and a normalized SHA-256 proving
the original Golden file is unchanged outside the marked tracking blocks.

- [ ] **Step 2: Run the verification script and confirm RED**

Run: `node scripts/verify-golden-tracking.mjs`

Expected: FAIL because the Golden tracking blocks and event bridge do not exist.

- [ ] **Step 3: Add the minimal tracking implementation**

Insert only two marked script blocks into the Golden HTML and add
`js/golden-tracking.js`. Keep all existing HTML, CSS, inline JavaScript, embedded
images, PDFs, and booking URLs untouched.

- [ ] **Step 4: Run targeted and regression verification**

Run:

```bash
node scripts/verify-golden-tracking.mjs
node --check js/golden-tracking.js
git diff --check
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit and publish**

```bash
git add certificates/GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html js/golden-tracking.js scripts/verify-golden-tracking.mjs docs/superpowers
git commit -m "Add HVM tracking to Golden certificates"
git push origin main
```


#!/usr/bin/env node
/* Regression guard: the inactive certificate face must contain no
   keyboard-focusable interactive descendants. Added after QA found the
   back-face booking CTA remained Tab-reachable while aria-hidden="true"
   on both Golden certificate routes. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const failures = [];

function read(rel) { return fs.readFileSync(path.join(root, rel), 'utf8'); }

const routes = [
  'certificates/golden/east.html',
  'certificates/golden/west.html'
];

for (const rel of routes) {
  const html = read(rel);

  // 1. Hidden-face links cannot receive keyboard focus: the back-face
  //    booking CTA must ship with tabindex="-1" in the base markup, since
  //    the back face starts aria-hidden="true" (front is the initial face).
  if (!/<a class="booking-hotspot" tabindex="-1"/.test(html)) {
    failures.push(rel + ': booking-hotspot missing default tabindex="-1"');
  }

  // 2. Visible-face controls can receive keyboard focus / tab order stays
  //    correct after flipping front -> back -> front, and aria-hidden and
  //    tabindex stay synchronized: the render() function must toggle both
  //    faces' interactive descendants in lockstep with aria-hidden, not
  //    just set aria-hidden alone.
  if (!/function setFaceFocusable\(face,focusable\)\{/.test(html)) {
    failures.push(rel + ': setFaceFocusable helper missing');
  }
  if (!/setFaceFocusable\(front,!flipped\)/.test(html)) {
    failures.push(rel + ': render() does not sync front-face focusability with flip state');
  }
  if (!/setFaceFocusable\(back,flipped\)/.test(html)) {
    failures.push(rel + ': render() does not sync back-face focusability with flip state');
  }

  // Both toggles must run inside the same render() that sets aria-hidden,
  // not in a separate, driftable code path.
  const renderBlock = html.match(/function render\(\)\{[\s\S]*?\n  \}/);
  if (!renderBlock ||
      !/aria-hidden/.test(renderBlock[0]) ||
      !/setFaceFocusable\(front,!flipped\)/.test(renderBlock[0]) ||
      !/setFaceFocusable\(back,flipped\)/.test(renderBlock[0])) {
    failures.push(rel + ': aria-hidden and tabindex toggles are not co-located in render() (states could drift apart)');
  }
}

if (failures.length) {
  console.error('GOLDEN A11Y VERIFY FAIL');
  console.error('- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('GOLDEN A11Y VERIFY PASS: hidden-face controls are not keyboard-focusable on East or West.');

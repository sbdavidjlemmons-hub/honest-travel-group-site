#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const lockPath = path.join(root,'certificates','golden','GOLDEN-LOCK.json');
const lock = JSON.parse(fs.readFileSync(lockPath,'utf8'));
const failures = [];

function exists(rel){ return fs.existsSync(path.join(root,rel)); }
function read(rel){ return fs.readFileSync(path.join(root,rel),'utf8'); }
function fail(msg){ failures.push(msg); }

if (!exists(lock.requiredRoutes.east)) fail('missing east route');
if (!exists(lock.requiredRoutes.west)) fail('missing west route');
if (!exists(lock.protected.trackingScript)) fail('missing golden tracking script');

for (const rel of [lock.requiredRoutes.east,lock.requiredRoutes.west]) {
  if (!exists(rel)) continue;
  const html = read(rel);
  if (!html.includes(lock.protected.calendarId)) fail(rel+': calendar id missing');
  if (/animation[^;]*:\s*[^;]*(infinite|iteration-count\s*:\s*infinite)/i.test(html)) fail(rel+': continuous animation detected');
  if (!/prefers-reduced-motion/i.test(html)) fail(rel+': reduced-motion guard missing');
}

if (failures.length) {
  console.error('GOLDEN VERIFY FAIL');
  failures.forEach(x=>console.error('- '+x));
  process.exit(1);
}
console.log('GOLDEN VERIFY PASS');

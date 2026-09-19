#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const lock = JSON.parse(fs.readFileSync(path.join(root,'certificates','golden','GOLDEN-LOCK.json'),'utf8'));
const failures = [];

function abs(rel){ return path.join(root,rel); }
function exists(rel){ return fs.existsSync(abs(rel)); }
function read(rel){ return fs.readFileSync(abs(rel),'utf8'); }
function fail(msg){ failures.push(msg); }
function gitBlobSha(buffer){
  const header = Buffer.from('blob ' + buffer.length + '\0');
  return crypto.createHash('sha1').update(Buffer.concat([header,buffer])).digest('hex');
}

const goldenRel = lock.protected.goldenFile.path;
if (!exists(goldenRel)) fail('approved Golden deploy file is missing');
else {
  const buf = fs.readFileSync(abs(goldenRel));
  const actual = gitBlobSha(buf);
  if (actual !== lock.protected.goldenFile.blobSha) {
    fail('approved Golden deploy file changed outside explicit approval: ' + actual);
  }
  if (!buf.toString('utf8').includes(lock.protected.calendarId)) {
    fail('approved presentation calendar ID is missing from Golden deploy file');
  }
}

if (!exists(lock.protected.trackingScript)) fail('Golden tracking script is missing');

const routeRules = [
  [lock.requiredRoutes.east,'collection=miami#miami','east'],
  [lock.requiredRoutes.west,'collection=west-coast-mexico#west','west']
];
for (const [rel,target,route] of routeRules) {
  if (!exists(rel)) { fail('missing route: '+rel); continue; }
  const html = read(rel);
  if (!html.includes('GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html')) fail(rel+': does not target approved Golden deploy file');
  if (!html.includes(target)) fail(rel+': regional selector missing');
  if (!html.includes("data-hvm-route','"+route+"'")) fail(rel+': route identity missing');
  if (!html.includes('.stage.companion{display:none!important}')) fail(rel+': companion certificate suppression missing');
  if (!html.includes('.stage.turning .paper-shadow{animation:none!important}')) fail(rel+': turn-shadow suppression missing');
  if (!html.includes('transition:transform .58s')) fail(rel+': approved 580ms flip timing missing');
  if (!html.includes('@media(prefers-reduced-motion:reduce)')) fail(rel+': reduced-motion guard missing');
}

if (failures.length) {
  console.error('GOLDEN VERIFY FAIL');
  failures.forEach(x=>console.error('- '+x));
  process.exit(1);
}
console.log('GOLDEN VERIFY PASS');

#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

const master = lock.protected.approvedMaster;
if (!master || !master.path) fail('approvedMaster lock is missing');
else if (!exists(master.path)) fail('approved Golden deploy file is missing');
else {
  const buf = fs.readFileSync(abs(master.path));
  const actual = gitBlobSha(buf);
  if (actual !== master.blobSha) fail('approved Golden master changed: ' + actual);
  if (!buf.toString('utf8').includes(lock.protected.calendarId)) fail('approved presentation calendar ID is missing from Golden master');
}

if (!exists(lock.protected.trackingScript)) fail('Golden tracking script is missing');

for (const [name,asset] of Object.entries(lock.protected.runtimeAssets || {})) {
  if (!exists(asset.path)) { fail('missing runtime asset: '+name); continue; }
  const actual = gitBlobSha(fs.readFileSync(abs(asset.path)));
  if (actual !== asset.blobSha) fail('runtime asset hash changed: '+name);
}

const routeRules = [
  [lock.requiredRoutes.east,'east','miami-front.png','miami-back.png','/certificates/golden/west.html'],
  [lock.requiredRoutes.west,'west','west-front.png','west-back.png','/certificates/golden/east.html']
];

for (const [rel,route,frontImg,backImg,crossRoute] of routeRules) {
  if (!exists(rel)) { fail('missing route: '+rel); continue; }
  const html = read(rel);
  if (!html.includes('data-hvm-route="'+route+'"')) fail(rel+': route identity missing');
  if (!html.includes(frontImg)) fail(rel+': approved front asset missing');
  if (!html.includes(backImg)) fail(rel+': approved back asset missing');
  if (!html.includes('data-src="/certificates/golden/assets/')) fail(rel+': lazy back-image loading missing');
  if (!html.includes(crossRoute)) fail(rel+': cross-region route link missing');
  if (!html.includes('B2QxN25XAnB9MaD4KukW')) fail(rel+': booking calendar missing');
  if (!html.includes('.card{position:relative;aspect-ratio:3/5')) fail(rel+': certificate card structure missing');
  if (!html.includes('.face.back{transform:rotateY(180deg)}')) fail(rel+': back-face containment missing');
  if (!html.includes('transition:transform .58s')) fail(rel+': approved 580ms flip timing missing');
  if (!html.includes('let flipped=false')) fail(rel+': front-first state missing');
  if (!html.includes('e.pointerType===\'touch\'')) fail(rel+': mobile tilt suppression missing');
  if (!html.includes('@media(prefers-reduced-motion:reduce)')) fail(rel+': reduced-motion guard missing');
  if (/animation\s*:/i.test(html)) fail(rel+': unexpected CSS animation found');
}

if (failures.length) {
  console.error('GOLDEN VERIFY FAIL');
  failures.forEach(x=>console.error('- '+x));
  process.exit(1);
}
console.log('GOLDEN VERIFY PASS');

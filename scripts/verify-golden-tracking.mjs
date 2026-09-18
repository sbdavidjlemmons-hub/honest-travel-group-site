import fs from 'node:fs';
import crypto from 'node:crypto';

const htmlPath = new URL('../certificates/GOLDEN-CRUISE-CERTIFICATES.DEPLOY.html', import.meta.url);
const bridgePath = new URL('../js/golden-tracking.js', import.meta.url);
const html = fs.readFileSync(htmlPath, 'utf8');
const failures = [];
const requireText = (source, needle, label) => {
  if (!source.includes(needle)) failures.push(`${label} missing`);
};

requireText(html, '<!-- hvm-golden-tracking:start -->', 'head tracking marker');
requireText(html, '<!-- hvm-golden-tracking:end -->', 'head tracking end marker');
requireText(html, '<!-- hvm-golden-events:start -->', 'event bridge marker');
requireText(html, '<!-- hvm-golden-events:end -->', 'event bridge end marker');
requireText(html, '1284937561029384', 'Meta Pixel');
requireText(html, 'G-8XR4QN2LMP', 'GA4');
requireText(html, 'honest-vacation-marketing', 'DataMoon client');
requireText(html, '../js/visit.js', 'HVM visit beacon');
requireText(html, '../js/golden-tracking.js', 'Golden event bridge');
requireText(html, 'window.HVM_PAGE', 'Golden HVM page identity');

const calendar = 'B2QxN25XAnB9MaD4KukW';
const calendarCount = html.split(calendar).length - 1;
if (calendarCount !== 2) failures.push(`booking calendar occurrence count changed: expected 2, got ${calendarCount}`);

let bridge = '';
if (fs.existsSync(bridgePath)) bridge = fs.readFileSync(bridgePath, 'utf8');
else failures.push('js/golden-tracking.js missing');
for (const event of ['certificate_viewed', 'certificate_flipped', 'offer_clicked', 'booking_page_reached']) {
  requireText(bridge, event, `${event} event`);
}
if (/booking_completed/.test(bridge)) failures.push('browser bridge must not claim booking_completed');
requireText(bridge, 'hvm-lead-intake.lead-intake.workers.dev', 'HVM event endpoint');

const normalized = html
  .replace(/<!-- hvm-golden-tracking:start -->[\s\S]*?<!-- hvm-golden-tracking:end -->/g, '')
  .replace(/<!-- hvm-golden-events:start -->[\s\S]*?<!-- hvm-golden-events:end -->/g, '')
  // apply_patch supplies the conventional final LF; the approved baseline did
  // not have one. Ignore only that non-rendering EOF difference.
  .replace(/\n$/, '');
const normalizedSha = crypto.createHash('sha256').update(normalized).digest('hex');
const approvedBaselineSha = 'e60528349345e1120ca8849c85ff0ffea49f228f22befe97f148925735eb3ade';
if (normalizedSha !== approvedBaselineSha) {
  failures.push(`Golden certificate changed outside tracking blocks: ${normalizedSha}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('PASS: Golden visuals/content locked; Meta, GA4, DataMoon and HVM journey tracking present.');

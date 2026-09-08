import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const families = ['condo', 'cruise', 'all-inclusive', 'airfare'];
const expected = { condo: 20, cruise: 12, 'all-inclusive': 3, airfare: 5 };
const failures = [];
const hashes = new Set();
const rows = [];

for (const family of families) {
  const dir = path.join(repo, 'certificates', family);
  const pages = fs.readdirSync(dir).filter(n => n.endsWith('.html')).sort();
  if (pages.length !== expected[family]) failures.push(`${family}: expected ${expected[family]} pages, found ${pages.length}`);
  for (const pageName of pages) {
    const slug = pageName.slice(0, -5);
    const pagePath = path.join(dir, pageName);
    const imagePath = path.join(repo, 'img', 'verified-certificates', `${slug}.jpg`);
    const html = fs.readFileSync(pagePath, 'utf8');
    const destination = html.match(/DESTNAME="([^"]+)"/)?.[1] || '';
    const expectedRelative = `../../img/verified-certificates/${slug}.jpg`;
    const expectedPublic = `https://honestvacationmarketing.com/img/verified-certificates/${slug}.jpg`;
    const expectToken = family === 'cruise' ? 'passenger cruise ship' : family === 'airfare' ? 'air-travel' : 'resort';

    if (!fs.existsSync(imagePath)) { failures.push(`${slug}: image missing`); continue; }
    const bytes = fs.readFileSync(imagePath);
    const hash = crypto.createHash('sha256').update(bytes).digest('hex');
    hashes.add(hash);
    const identify = spawnSync('identify', ['-format', '%m|%w|%h', imagePath], { encoding: 'utf8' });
    const [format, width, height] = identify.stdout.trim().split('|');
    if (format !== 'JPEG' || width !== '1600' || height !== '900') failures.push(`${slug}: expected JPEG 1600x900, got ${identify.stdout.trim()}`);
    if (bytes.length < 75000) failures.push(`${slug}: suspiciously small (${bytes.length} bytes)`);
    if (!html.includes(expectedRelative)) failures.push(`${slug}: page does not reference final image`);
    if (!html.includes(expectedPublic)) failures.push(`${slug}: social image missing`);
    if (!html.toLowerCase().includes(expectToken)) failures.push(`${slug}: family-specific alt/disclosure missing`);
    if (!html.includes('Representative real')) failures.push(`${slug}: representative-use disclosure missing`);
    if (!html.includes('../artwork-credits.html')) failures.push(`${slug}: credits link missing`);
    if (!html.includes('class="funnel-cta"')) failures.push(`${slug}: booking click-through missing`);
    if (!html.includes('hvm-lead-intake.lead-intake.workers.dev')) failures.push(`${slug}: lead endpoint missing`);
    if ((html.match(/class="front-photo"/g) || []).length !== 1) failures.push(`${slug}: expected exactly one front photo`);
    rows.push({ family, slug, destination, bytes: bytes.length, hash: hash.slice(0, 12) });
  }
}

if (rows.length !== 40) failures.push(`expected 40 verified rows, found ${rows.length}`);
if (hashes.size !== 40) failures.push(`expected 40 unique image files, found ${hashes.size} unique hashes`);
if (!fs.existsSync(path.join(repo, 'certificates', 'artwork-credits.html'))) failures.push('artwork credits page missing');

const oldRefs = spawnSync('rg', ['-n', 'img/certificates/', 'certificates', '--glob', '*.html'], { cwd: repo, encoding: 'utf8' });
if (oldRefs.status === 0) failures.push(`old image references remain:\n${oldRefs.stdout}`);

const report = {
  generated_at_utc: new Date().toISOString(),
  totals: { pages: rows.length, unique_images: hashes.size, failures: failures.length },
  rows,
  failures
};
fs.mkdirSync(path.join(repo, 'audit'), { recursive: true });
fs.writeFileSync(path.join(repo, 'audit', 'artwork-verification.json'), JSON.stringify(report, null, 2) + '\n');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS: ${rows.length}/40 pages, ${hashes.size}/40 unique 1600x900 JPEGs, 0 old references.`);

import fs from 'node:fs';

const familyPages = ['cruise.html','all-inclusive.html','condo.html','resort-air.html'];
let failed = false;
function assert(ok,msg){ if(!ok){ console.error('FAIL:',msg); failed=true; } else console.log('PASS:',msg); }

for (const page of familyPages) {
  const html = fs.readFileSync(page,'utf8');
  assert(!/continue anyway/i.test(html), page+' has no qualification bypass copy');
  assert(html.includes('name="q_couple" required'), page+' requires couple criterion');
  assert(html.includes('name="q_age" required'), page+' requires age criterion');
  assert(html.includes('name="q_income" required'), page+' requires income criterion');
  assert(html.includes('name="q_card" required'), page+' requires major credit card criterion');
  assert(html.includes('name="q_travel" required'), page+' requires travel frequency criterion');
  assert(html.includes('data-tick="q_couple,q_age,q_income"'), page+' Q1 pre-fills relationship/age/income');
  assert(html.includes('data-tick="q_card,q_travel"'), page+' Q2 pre-fills card/travel');
  assert((html.match(/Not our fit &mdash; see other offers/g)||[]).length >= 2, page+' routes nonmatches away from booking');
  assert(html.includes('B2QxN25XAnB9MaD4KukW'), page+' uses approved HVM booking calendar');
}
if (failed) process.exit(1);
console.log('Acquisition funnel guard passed.');

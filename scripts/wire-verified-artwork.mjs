import fs from 'node:fs';
import path from 'node:path';

const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const roots = ['condo', 'cruise', 'all-inclusive', 'airfare'];
let changed = 0;

function familyCopy(family, destination) {
  if (family === 'cruise') return {
    alt: `Real passenger cruise ship for the ${destination} cruise certificate; representative vessel, with line, ship and itinerary varying.`,
    note: 'Representative real passenger-ship photography. Line, ship, itinerary, ports and departure date are not guaranteed.'
  };
  if (family === 'airfare') return {
    alt: `Real air-travel photography for the ${destination} airfare-credit certificate; carrier, flight and routing vary.`,
    note: 'Representative real air-travel photography. Carrier, flight, route and schedule are not guaranteed.'
  };
  if (family === 'all-inclusive') return {
    alt: `Real resort-stay photography for the ${destination} all-inclusive certificate; representative imagery, with the exact property assigned at confirmation.`,
    note: 'Representative real resort-stay photography. The pictured property is not promised; the exact property is assigned at confirmation.'
  };
  return {
    alt: `Real resort-accommodation photography for the ${destination} resort-condominium certificate; representative imagery, with the exact property assigned at confirmation.`,
    note: 'Representative real resort-accommodation photography. The pictured property is not promised; the exact property is assigned at confirmation.'
  };
}

for (const family of roots) {
  const dir = path.join(repo, 'certificates', family);
  for (const name of fs.readdirSync(dir).filter(n => n.endsWith('.html')).sort()) {
    const file = path.join(dir, name);
    const slug = name.slice(0, -5);
    let html = fs.readFileSync(file, 'utf8');
    const destination = html.match(/DESTNAME="([^"]+)"/)?.[1];
    if (!destination) throw new Error(`Missing DESTNAME in ${file}`);
    const copy = familyCopy(family, destination);
    const imageUrl = `https://honestvacationmarketing.com/img/verified-certificates/${slug}.jpg`;
    const relative = `../../img/verified-certificates/${slug}.jpg`;
    const meta = `<meta property="og:image" content="${imageUrl}"><meta property="og:image:alt" content="${copy.alt}">\n<meta name="twitter:image" content="${imageUrl}"><meta name="twitter:image:alt" content="${copy.alt}">`;

    html = html.replace(/<meta property="og:image"[^>]*><meta property="og:image:alt"[^>]*>\s*<meta name="twitter:image"[^>]*><meta name="twitter:image:alt"[^>]*>/, meta);
    if (!html.includes('property="og:image"')) {
      html = html.replace('<script type="application/ld+json">', `${meta}\n<script type="application/ld+json">`);
    }
    html = html.replace('<meta name="twitter:card" content="summary">', '<meta name="twitter:card" content="summary_large_image">');

    if (!html.includes('.front-photo{')) {
      const artCss = `\n.front{overflow:hidden;isolation:isolate}\n.front-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transform:scale(1.015);transition:transform 1.1s ease,filter .55s ease}\n.flip:hover .front-photo{transform:scale(1.055);filter:saturate(1.06)}\n.front:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,22,17,.04),rgba(8,22,17,.82));z-index:-1}\n.photo-credit{position:absolute;top:132px;right:18px;color:rgba(255,255,255,.92);font-size:9px;text-decoration:none;text-shadow:0 1px 5px rgba(0,0,0,.75)}\n.art-note{font-size:10.5px!important;line-height:1.35!important;opacity:.9!important;margin-top:8px}\n`;
      html = html.replace('</style>', `${artCss}</style>`);
    }
    if (!html.includes('/* verified-artwork-release */')) {
      const releaseCss = `\n/* verified-artwork-release */\n.photo-credit{top:132px!important;right:18px!important;left:auto!important}\n.art-note{font-size:10.5px!important;line-height:1.35!important;opacity:.9!important;margin-top:8px}\n`;
      html = html.replace('</style>', `${releaseCss}</style>`);
    }

    const imageMarkup = `<img class="front-photo" src="${relative}" alt="${copy.alt}"><a class="photo-credit" href="../artwork-credits.html" rel="noopener">Real-photo credits</a>`;
    html = html.replace(/<img class="front-photo"[^>]*><a class="photo-credit"[^>]*>.*?<\/a>/, imageMarkup);
    if (!html.includes(`src="${relative}"`)) {
      html = html.replace(/(<div class="face front"[^>]*>)/, `$1\n      ${imageMarkup}`);
    }
    if (!html.includes(copy.note)) {
      html = html.replace(/(<label class="flipbtn" for="flip">)/, `<p class="art-note">${copy.note}</p>\n      $1`);
    }

    fs.writeFileSync(file, html);
    changed += 1;
  }
}

if (changed !== 40) throw new Error(`Expected 40 pages; updated ${changed}`);
console.log(`Wired verified artwork into ${changed} certificate pages.`);

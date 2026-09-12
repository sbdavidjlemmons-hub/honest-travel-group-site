#!/usr/bin/env node
// One-off bulk patch: add a QR code to every live certificate page, linking back
// to that certificate's own family landing page. Mirrors the shape of
// scripts/wire-verified-artwork.mjs — regex-extract, string-replace, write back.
//
// Run: node scripts/wire-qr-codes.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";
import path from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const FAMILY_TO_LANDING = {
  cruise: "../../cruise.html",
  condo: "../../condo.html",
  "all-inclusive": "../../all-inclusive.html",
  "resort-air": "../../resort-air.html", // airfare certs carry FAMILY="resort-air"
};

const files = [
  ...globSync("certificates/cruise/*.html", { cwd: ROOT }),
  ...globSync("certificates/condo/*.html", { cwd: ROOT }),
  ...globSync("certificates/airfare/*.html", { cwd: ROOT }),
  ...globSync("certificates/all-inclusive/*.html", { cwd: ROOT }),
].sort();

const QR_CSS = `
.qr-block{margin-top:18px;display:inline-flex;align-items:center;gap:10px;text-decoration:none}
.qr-block span.qr-canvas{display:inline-block;width:96px;height:96px;flex:none}
.qr-block small{color:var(--muted);font-size:11.5px;line-height:1.4;max-width:140px}
`;

let patched = 0, skipped = 0;

for (const rel of files) {
  const file = path.join(ROOT, rel);
  let s = readFileSync(file, "utf8");

  if (rel.endsWith("charleston-cruise.html")) { skipped++; continue; }

  const destM = s.match(/var DEST="([^"]+)"/);
  const famM = s.match(/FAMILY="([^"]+)"/);
  const nameM = s.match(/DESTNAME="([^"]+)"/);
  if (!destM || !famM) { console.error(`SKIP (no DEST/FAMILY): ${rel}`); skipped++; continue; }

  const dest = destM[1], family = famM[1], destName = nameM ? nameM[1] : dest;
  const landing = FAMILY_TO_LANDING[family];
  if (!landing) { console.error(`SKIP (unknown FAMILY="${family}"): ${rel}`); skipped++; continue; }

  const url = `${landing}?utm_source=qr&utm_medium=certificate&utm_campaign=cert-${dest}&dest=${dest}`;
  const qrId = `hvm-qr-${dest}`;

  // 1. CSS — append once, right before the closing </style>
  const styleClose = "</style>";
  if (!s.includes(styleClose)) throw new Error(`${rel}: no </style> found`);
  s = s.replace(styleClose, QR_CSS + styleClose);

  // 2. Markup — insert before the universal, byte-identical footer
  const footer = '<footer class="wrap">Retail comparisons are dated research context only';
  if (!s.includes(footer)) throw new Error(`${rel}: universal footer anchor not found`);
  const qrMarkup =
    `<div class="qr-block-wrap"><a class="qr-block" href="${url}" aria-label="Scan or tap to explore ${destName} vacation options">` +
    `<span class="qr-canvas" id="${qrId}"></span><small>Scan for more like this</small></a></div>\n`;
  s = s.replace(footer, qrMarkup + footer);

  // 3. Script — load qrcodejs once + render, right after the last existing script tag
  const lastScript = '<script src="../../js/visit.js"></script>';
  if (!s.includes(lastScript)) throw new Error(`${rel}: js/visit.js anchor not found`);
  const qrScript =
    lastScript +
    `\n<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>` +
    `<script>try{new QRCode(document.getElementById("${qrId}"),{text:${JSON.stringify(
      "https://honestvacationmarketing.com" + landing.replace("../..", "") + "?utm_source=qr&utm_medium=certificate&utm_campaign=cert-" + dest + "&dest=" + dest
    )},width:96,height:96,correctLevel:QRCode.CorrectLevel.M});}catch(e){}</script>`;
  s = s.replace(lastScript, qrScript);

  writeFileSync(file, s);
  patched++;
  console.log(`patched: ${rel}  ->  ${url}`);
}

console.log(`\n${patched} patched, ${skipped} skipped.`);

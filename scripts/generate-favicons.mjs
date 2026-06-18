/**
 * Generates PNG/ICO favicons for browsers and Google Search from public/favicon.svg.
 * Skips when outputs already exist and favicon.svg is unchanged.
 *
 * Usage: node scripts/generate-favicons.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');
const SVG = path.join(PUBLIC, 'favicon.svg');

const OUTPUTS = [
  'favicon-48x48.png',
  'favicon-192x192.png',
  'apple-touch-icon.png',
  'favicon.ico',
];

function isUpToDate() {
  if (!fs.existsSync(SVG)) return false;

  const svgMtime = fs.statSync(SVG).mtimeMs;
  return OUTPUTS.every((name) => {
    const dest = path.join(PUBLIC, name);
    return fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= svgMtime;
  });
}

async function main() {
  if (isUpToDate()) {
    console.log('Favicons up to date — skipping generation');
    return;
  }

  const { default: sharp } = await import('sharp');
  const { default: toIco } = await import('to-ico');

  const svg = fs.readFileSync(SVG);
  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    const dest = path.join(PUBLIC, name);
    await sharp(svg).resize(size, size).png().toFile(dest);
    console.log(`Wrote ${name}`);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map((size) => sharp(svg).resize(size, size).png().toBuffer()),
  );
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), await toIco(icoBuffers));
  console.log('Wrote favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

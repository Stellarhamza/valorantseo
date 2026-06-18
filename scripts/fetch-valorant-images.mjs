/**
 * Downloads official Valorant images from Riot Games CDN to public/images/.
 * Sources: playvalorant.com (cmsassets.rgpub.io)
 *
 * Usage: node scripts/fetch-valorant-images.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'images');

const CDN = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636';

/** Curated official Riot Valorant assets from playvalorant.com */
const IMAGES = [
  {
    file: 'hero.jpg',
    url: `${CDN}/news_live/4930a598d665650cb31f984c00a4198b0df0b4d8-4984x2803.jpg`,
  },
  {
    file: 'og-cover.png',
    url: `${CDN}/news/67d199e0f7108bc60e8293d3f9a37538b0b55b11-3840x2160.png`,
  },
  {
    file: 'cover.png',
    url: `${CDN}/news/5101e4ee241fbfca261bf8150230236c46c8b991-3840x2160.png`,
  },
  {
    file: 'gallery-01.jpg',
    url: `${CDN}/news_live/ec64db5c355938c1f1339ff891d849546550fe7a-1920x1080.jpg`,
  },
  {
    file: 'gallery-02.jpg',
    url: `${CDN}/news_live/e421896bdd455ba1ed2b656cf4382231df010879-1920x1080.jpg`,
  },
  {
    file: 'gallery-03.jpg',
    url: `${CDN}/news_live/6e3e66577519c8290d874aa94d82e28aec2ccc3e-915x515.jpg`,
  },
  {
    file: 'gallery-04.jpg',
    url: `${CDN}/news_live/f9e0dcccefb0de3fdd18ba73d3d51996e3e3aa9d-915x515.jpg`,
  },
  {
    file: 'gallery-05.jpg',
    url: `${CDN}/news_live/79be60bb23b3da854acf80b2b519c93ad9cd8588-915x515.jpg`,
  },
  {
    file: 'gallery-06.jpg',
    url: `${CDN}/news_live/6fad2e48b4bc321180aded74c8fdc3cb2d796721-1920x1081.jpg`,
  },
  {
    file: 'gallery-07.png',
    url: `${CDN}/news/983a6d66978aabd3ccd4e51517298d9a0b5467d9-3840x2160.png`,
  },
  {
    file: 'gallery-08.png',
    url: `${CDN}/news/7ba5df090f5efee7988d8d33f4b43c3441cb1aab-3840x2160.png`,
  },
  {
    file: 'module-esp.jpg',
    url: `${CDN}/news_live/0e440e2dcfa2e45f6a3b5d52b0b227e97b941633-915x515.jpg`,
  },
  {
    file: 'module-aimbot.jpg',
    url: `${CDN}/news_live/515eaea5eae0d30076ec30a0e9653677b14c5ffe-1920x1080.jpg`,
  },
  {
    file: 'module-triggerbot.jpg',
    url: `${CDN}/news_live/de128f551bcb83de831aef0c237afcd8d26b248e-1920x1080.jpg`,
  },
  {
    file: 'module-radar.jpg',
    url: `${CDN}/news_live/72b1463c770e58c75f25859ca3c65516cf87f5d7-915x515.jpg`,
  },
  {
    file: 'module-recoil.jpg',
    url: `${CDN}/news_live/5611f019c16d727f7e29765a949f40d304e4d2ae-1920x1080.jpg`,
  },
  {
    file: 'module-skins.png',
    url: `${CDN}/news/72853f583a0f6b25aed54870531756483a7b61de-3840x2160.png`,
  },
  {
    file: 'module-spoofer.png',
    url: `${CDN}/news/878d51688c0f9dd0de827162e80c40811668e0c6-3840x2160.png`,
  },
  {
    file: 'section-overview.png',
    url: `${CDN}/news/5cb7e65c04a489eccd725ce693fdc11e99982e10-3840x2160.png`,
  },
  {
    file: 'section-how-it-works.png',
    url: `${CDN}/news/bccc7b5f8647a4f654d4bb359247bce6e82c77ab-3840x2160.png`,
  },
  {
    file: 'section-safety.png',
    url: `${CDN}/news/7df1e6ee284810ef0cbf8db369c214a8cbf6578c-3840x2160.png`,
  },
  {
    file: 'section-setup.png',
    url: `${CDN}/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png`,
  },
  {
    file: 'section-editorial.jpg',
    url: `${CDN}/news_live/29bb7050b93366ee360377b03061fb62e54264ea-1920x1081.jpg`,
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => reject(new Error(`HTTP ${res.statusCode} for ${url}`)));
          return;
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        file.close();
        fs.unlink(dest, () => reject(err));
      });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let downloaded = 0;
  let skipped = 0;

  for (const item of IMAGES) {
    const dest = path.join(OUT_DIR, item.file);

    if (fs.existsSync(dest) && process.env.FETCH_IMAGES !== 'force') {
      skipped += 1;
      continue;
    }

    process.stdout.write(`Downloading ${item.file} … `);
    await download(item.url, dest);
    const stat = fs.statSync(dest);
    console.log(`${Math.round(stat.size / 1024)} KB`);
    downloaded += 1;
  }

  console.log(`\nDone — ${downloaded} downloaded, ${skipped} skipped (public/images/)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

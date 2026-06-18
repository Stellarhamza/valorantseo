// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update site URL before deploying to production
const site = 'https://valorantcheats.org';

export default defineConfig({
  site,
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});

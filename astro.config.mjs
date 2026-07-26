import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://morris1029.github.io',
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://craiglaws.github.io/liam-flo/',
  base: '/liam-flo/',
});


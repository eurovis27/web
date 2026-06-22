// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site:           'https://visus-eurovis.github.io', 
  base:           '/eurovis2027.de', // import.meta.env.BASE_URL
  trailingSlash:  'never',
});

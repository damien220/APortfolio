// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  vite: {
    server: {
      host: '127.0.0.1',
      strictPort: true,
      // Disable HMR overlay and network scanning — prevents WSL2 hang
      hmr: { host: '127.0.0.1' },
    },
  },
});

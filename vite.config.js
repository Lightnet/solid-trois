// vite.config.ts
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  server: {
    port:3000,
    proxy: {
      
    }
  },
  plugins: [solidPlugin()],
});
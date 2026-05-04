import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
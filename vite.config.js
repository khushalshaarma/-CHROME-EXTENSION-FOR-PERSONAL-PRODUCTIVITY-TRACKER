

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import path from 'path';

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    buildEnd() {
      try {
        copyFileSync('public/manifest.json', 'dist/manifest.json');
        copyFileSync('public/background.js', 'dist/background.js');
        copyFileSync('public/icon16.png', 'dist/icon16.png');
        copyFileSync('public/icon48.png', 'dist/icon48.png');
        copyFileSync('public/icon128.png', 'dist/icon128.png');
        console.log('✅ All static assets copied successfully.');
      } catch (err) {
        console.error('❌ Error copying assets:', err.message);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  build: {
    outDir: 'dist',
  },
});

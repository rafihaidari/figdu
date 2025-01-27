import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      '@': '/src',// Remove Preact aliases, no need for aliases with React
    },
  },
});

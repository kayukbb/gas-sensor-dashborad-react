import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gas-sensor-dashboard-react/',
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'],
    },
  },
});

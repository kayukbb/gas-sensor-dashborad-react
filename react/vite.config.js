import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gas-sensor-dashboard-react/',
  server: {
    port: 3001, // Change the port here
  },
});

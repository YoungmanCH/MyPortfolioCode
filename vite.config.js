/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/MyPortfolio/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: { chunkSizeWarningLimit: 1600 }
});

/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://youngmanch.github.io/MyPortfolio/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})

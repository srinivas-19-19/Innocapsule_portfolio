import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Auto-detect base path:
// - Vercel / Custom domain deploys to root: '/'
// - GitHub Pages (GitHub Actions) deploys to repository subpath: '/Innocapsule_portfolio/'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && !process.env.VERCEL
const defaultBase = isGitHubPages ? '/Innocapsule_portfolio/' : '/'
const base = process.env.BASE_PATH || defaultBase

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})


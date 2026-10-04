import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base is set to the repo sub-path because the repo is named
// "vikas-sharma-portfolio" (not "Vikass8125.github.io"), so
// GitHub Pages serves it at https://vikass8125.github.io/vikas-sharma-portfolio/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/vikas-sharma-portfolio/',
})

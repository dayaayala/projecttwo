import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the repo name for GitHub Pages: https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/projecttwo/',
})

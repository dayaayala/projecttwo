import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the repo name for GitHub Pages: https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/projecttwo/',
  server: {
    // With a non-root base, open the app URL so the favicon + assets resolve.
    open: '/projecttwo/',
  },
})

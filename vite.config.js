import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Forced restart to ensure Tailwind and PostCSS configuration are picked up
export default defineConfig({
  plugins: [react()],
})

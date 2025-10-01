import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows us to use @ as a shortcut to the src directory
      // Example: import Button from '@/components/Button' instead of '../../components/Button'
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Development server runs on port 3000
    open: true, // Automatically open browser when starting dev server
  },
})

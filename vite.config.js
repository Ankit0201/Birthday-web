import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['988c-2409-40c4-30cf-f997-2c5d-e2b5-fdc1-5cb.ngrok-free.app']
  }
})

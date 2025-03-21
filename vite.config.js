import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['d60f-2409-40c4-27f-7e13-8559-ff8b-5a29-a456.ngrok-free.app']
  }
})

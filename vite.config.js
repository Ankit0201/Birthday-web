import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['40b9-2409-40c4-27f-7e13-fc7a-68f9-ea3d-e8b0.ngrok-free.app']
  }
})

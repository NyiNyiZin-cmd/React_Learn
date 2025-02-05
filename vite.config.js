import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/React_Learn',
  plugins: [react(),tailwindcss()],
  server: {
    port: 5138,
    open: true,
  }
})

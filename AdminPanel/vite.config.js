import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      '/users': {
        target: 'http://localhost:8800/api', 
        changeOrigin: true,
      },
      '/auth': {
        target: 'http://localhost:8800/api', 
        changeOrigin: true,
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/x-ui-clone/",
  plugins: [react()],
  // server: {
  //   host: '192.168.29.180',
  //   port: 5173,
  // }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Weather_Forecast_Application/', // 👈 must match your repo name
  plugins: [react()],
})

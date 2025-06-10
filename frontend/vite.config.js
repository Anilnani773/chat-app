import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import themes from 'daisyui/theme/object'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Security headers for "npm run dev". These headers, directives and values
// are here to not break normal devevelopment.
const securityHeadersLocal = {
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'X-Content-Type-Options': 'nosniff'
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { headers: securityHeadersLocal }
})

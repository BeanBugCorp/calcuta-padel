import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Security headers for "npm run dev". These headers, directives and values
// are here to not break normal devevelopment. The CSP is not strict, as the one in preview.
const securityHeadersLocal = {
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'X-Content-Type-Options': 'nosniff',
  'content-security-policy-report-only': "default-src 'self'; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' https://fonts.googleapis.com; script-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { headers: securityHeadersLocal }
})

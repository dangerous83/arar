import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Pages the site is served from /<repo>/. The workflow sets VITE_BASE
// to the right subpath at build time. Locally and on Vercel we fall back to "/".
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: { host: true, port: 5173 },
});

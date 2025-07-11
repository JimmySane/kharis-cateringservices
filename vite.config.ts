import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Detect if we're in production mode
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/kharis-cateringservices/" : "/", // GitHub Pages base path for prod
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

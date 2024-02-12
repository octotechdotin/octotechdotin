import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/server": "https://codeguyakash.github.io/",
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        "!**/node_modules/react-router/**",
        "!**/node_modules/react-router-dom/**",
      ],
    },
  },
  optimizeDeps: {
    exclude: ["react-router", "react-router-dom"],
  },
});

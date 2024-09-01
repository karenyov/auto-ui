import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      // components: path.resolve(__dirname, "src/components"),
      // layouts: path.resolve(__dirname, "src/layouts"),
      // pages: path.resolve(__dirname, "src/pages"),
      // src: path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  server: {
    port: 8080,
    fs: {
      cachedChecks: false
    }
  },
});

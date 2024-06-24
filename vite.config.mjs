import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "examples",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: "react-spinners",
});

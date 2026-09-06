import { readFileSync } from "node:fs";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * The demo ships a static card per loader so the page is browsable with
 * JavaScript disabled, and so the grid holds its place until React renders
 * over it. Generated from src/index.ts so the list cannot drift.
 */
function staticLoaderCards() {
  return {
    name: "static-loader-cards",
    transformIndexHtml(html) {
      const source = readFileSync(new URL("./src/index.ts", import.meta.url), "utf8");
      const names = [...source.matchAll(/export \{ default as (\w+) \}/g)].map(([, name]) => name);

      if (names.length === 0) {
        throw new Error("static-loader-cards: no loaders found in src/index.ts");
      }

      const cards = names
        .map(
          (name) =>
            `<article class="card">\n` +
            `            <div class="card-stage"></div>\n` +
            `            <div class="card-meta">\n` +
            `              <a class="card-name" href="storybook?path=/docs/${name.toLowerCase()}--docs">${name}</a>\n` +
            `            </div>\n` +
            `          </article>`
        )
        .join("\n          ");

      return html.replace("<!-- loader-cards -->", cards);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticLoaderCards()],
  root: "examples",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: "react-spinners",
});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "kanagawa-dragon",
    },
  },
  site: "https://vincentcayadi.github.io/",
  integrations: [mdx(), sitemap(), tailwind()],
});

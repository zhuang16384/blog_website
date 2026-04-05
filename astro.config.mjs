import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zhuang.blog/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["if-function"],
        },
      },
    },
  },
});

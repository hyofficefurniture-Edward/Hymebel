import { defineConfig } from "astro/config";

// hymebel.com — KK / UZ / EN 动态内容树 + 独立 MN / RU 市场入口。
// MN/RU are intentionally fixed Astro routes, not additions to the Central-Asia locale matrix.
export default defineConfig({
  site: "https://hymebel.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "kk",
    locales: ["kk", "uz", "en"],
    routing: {
      prefixDefaultLocale: true,
      // 根路径 is an x-default market selector rendered by src/pages/index.astro.
      redirectToDefaultLocale: false,
      fallbackType: "redirect",
    },
  },
});

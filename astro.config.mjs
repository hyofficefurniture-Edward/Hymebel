import { defineConfig } from "astro/config";

// hymebel.com — 中亚三语站（哈萨克语 / 乌兹别克语 / 英语）
// 语言矩阵（2026-09-29 定稿）：默认 kk（根路径 301 跳 /kk/）→ uz → en（末位）；ru 架构预留 P1
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
      // 根路径重定向由 src/pages/index.astro 自行渲染（静态托管下用 meta refresh + rel=canonical）
      redirectToDefaultLocale: false,
      fallbackType: "redirect",
    },
  },
  // 预留：/ru/ 上线时把 "ru" 加入 locales 并开启 localePathMap
  redirects: {
    "/ru/": { status: 302, destination: "/kk/" },
  },
});

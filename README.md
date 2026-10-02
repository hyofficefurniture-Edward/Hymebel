# hymebel.com — 中亚三语站（哈萨克语 / 乌兹别克语 / 英语）

鸿业家具集团面向中亚市场的独立站，技术栈与内容规范**完整对齐西语双站**（hymobiliario.com / hymueble.com）：
Astro 静态输出 + GitHub Pages + 自定义域名 + Let's Encrypt。

- 方案依据：`output/20260928-hymebel-ca-site-plan/stage3/鸿业家具集团_hymebel中亚三语站建设方案_v1.1_2026年9月.docx`
- 站点负责人（人工审核）：Sarhet 塔拉甫汗沙尔克提 `z@hysdfurniture.com`

## 一、语言矩阵（2026-09-29 定稿）

| 顺序 | 语言 | 路径 | hreflang | 说明 |
|---|---|---|---|---|
| 1（**默认**） | 哈萨克语 | `/kk/` | `kk-KZ` | 站点默认语言；根路径 `/` 跳转 `/kk/`；**x-default → /kk/** |
| 2 | 乌兹别克语 | `/uz/` | `uz-UZ` | 第二顺位，对接乌国 Telegram 主渠道 |
| 3 | 英语 | `/en/` | `en` | 国际线（品牌方/设计师/FF&E），置于末位 |
| 预留 | 俄语 | `/ru/` | `ru` | 架构预留 P1，暂 302 → `/kk/`（`astro.config.mjs` 的 `redirects`） |

技术落实：
- `astro.config.mjs` → `i18n.defaultLocale = "kk"`、`locales = ["kk","uz","en"]`、`prefixDefaultLocale: true`
- `src/i18n/utils.ts` → `alternates()` 统一产出三语互链 + `x-default`
- `src/pages/index.astro` → 根路径落地页（meta refresh → `/kk/`，canonical 指向 `/kk/`，noindex）
  > 静态托管下无法输出真正的 HTTP 301；上线时在 CDN（Cloudflare 等）加一条 `/` → `/kk/` 的 301 规则即可，HTML 跳转作为兜底。

## 二、目录结构

```
astro.config.mjs          站点域名 + i18n 路由 + /ru/ 预留跳转
src/i18n/ui.ts            kk / uz / en 三语字典 + 公司 SSOT 口径（company）
src/i18n/utils.ts         语言识别、t()、localizePath()、alternates()
src/data/categories.ts    5 条产品线 + about + contact（三语名称/简介/要点）
src/layouts/BaseLayout.astro   canonical / hreflang / OG / Organization JSON-LD
src/components/Header.astro    一级菜单 + 语言切换器（含移动端汉堡）
src/components/Footer.astro    站内链接 + 联系方式 + 语言列表
src/pages/
  index.astro            根路径 → /kk/（默认语）
  [lang]/index.astro     首页（hero / 数字 / 定义块 / 产品线 / 优势 / 流程 / 案例 / FAQ / CTA）
  [lang]/[slug].astro    5 品类页 + about + contact（含 Web3Forms 表单 + WhatsApp/Telegram）
  robots.txt.ts          提交 sitemap 索引 + 分语言 sitemap
  sitemap.xml.ts         索引 → sitemap-kk / -uz / -en
  sitemap-{kk,uz,en}.xml.ts  分语言 sitemap（带 hreflang 注解）
scripts/qa-hreflang.mjs  上线门禁：canonical + 三语互链 + x-default → /kk/
```

已落地页面：**8 类页面 × 3 语 = 24 页** + 2 个跳转桩（`/`、`/ru/`）。

## 三、常用命令

```bash
npm run dev        # 本地开发 http://127.0.0.1:4321/（默认会跳 /kk/）
npm run build      # 构建到 dist/
npm run qa:hreflang  # 构建后校验 hreflang / canonical / x-default（CI 已接入）
npm run preview    # 预览 dist/
```

## 四、上线前待办（S1 剩余项）

1. **域名与托管**：新建 GitHub 仓库 `Hymebel` → Pages 指向 `dist`（workflow 已就绪）→ DNS 解析 `hymebel.com` → 签发 Let's Encrypt
2. **真实 301**：CDN 侧配置 `/` → `/kk/`
3. **TDK 逐页重写**：当前品类页元描述由简介截断到 158 字符，需按 TDK 规范（T ≤60 / D 135-160 / K 1 主 2 辅）逐页手写
4. **哈/乌语母语校对**：`kk` / `uz` 文案为 AI 生成，须由 Sarhet 指定的母语者过一遍（术语与商务表述）
5. **配图**：按三源混合规范（AI 30-40% + 自有画册 + 外网 10-20%）出图，**AI 图必须先跑 remove-ai-watermark**
6. **GSC + Yandex Webmaster**：分别提交 `sitemap-kk.xml` / `sitemap-uz.xml` / `sitemap-en.xml`
7. **博客与内容管线**：`/kk/blog/`、`/uz/blog/`、`/en/blog/` 接入既有 JSON → build → push 管线（GEO/RAG 简报模板）

## 五、合规红线（沿用集团规范）

- 不出现仿冒/复刻/同款类表述；对外物料不使用第三方品牌图与 logo
- AI 生成素材保留提示词日志；配图上站前必须去水印
- 伊斯兰文化适配：避免酒精类画面与文案，斋月调整发布节奏

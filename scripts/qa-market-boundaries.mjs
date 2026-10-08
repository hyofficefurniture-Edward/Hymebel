#!/usr/bin/env node
/**
 * 发布闸门：市场不是普通的语言下拉项。
 * KK / UZ / EN must not cross-link to MN/RU. MN and RU may link only to their
 * own market-specific English fallback, and all market forms must be attributed.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const expectations = [
  { lang: "kk", market: "kz" },
  { lang: "uz", market: "uz" },
  { lang: "en", market: "global" },
];
const dist = "dist";
const errors = [];

const root = readFileSync(join(dist, "index.html"), "utf8");
if (!/<meta http-equiv="refresh" content="0; url=\/kk\/"/.test(root)) errors.push("根首页必须直接进入中亚 /kk/");
if (/href="\/(?:mn|ru)\//.test(root) || root.includes("Select your market")) errors.push("根首页不得恢复市场选择页");

for (const { lang, market } of expectations) {
  const file = join(dist, lang, "contact", "index.html");
  if (!existsSync(file)) {
    errors.push(`缺少 ${file}`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  if (!html.includes(`const market = "${market}"`)) errors.push(`${lang}: GA4 market 应为 ${market}`);
  if (!html.includes("source_url: window.location.href")) errors.push(`${lang}: 表单缺少 source_url`);
  if (!html.includes("referrer: document.referrer || 'direct'")) errors.push(`${lang}: 表单缺少 referrer`);
  if (/href="\/(?:ru|mn)\//.test(html)) errors.push(`${lang}: 不得出现 MN/RU 市场入口`);
  if (/hreflang="(?:ru|ru-RU|mn|mn-MN)"/.test(html)) errors.push(`${lang}: 不得声明 MN/RU hreflang`);
}

for (const market of ["mn", "ru"]) {
  for (const part of ["", "contact", "project-starter", "faq", "blog", "en", "en/contact", "en/project-starter", "en/faq", "en/blog"]) {
    const file = join(dist, market, ...part.split("/").filter(Boolean), "index.html");
    if (!existsSync(file)) {
      errors.push(`缺少 ${file}`);
      continue;
    }
    const html = readFileSync(file, "utf8");
    if (!html.includes(`market = "${market}"`)) errors.push(`${market}/${part || "home"}: GA4 market 应为 ${market}`);
    if ((part === "" || part === "contact" || part === "en" || part === "en/contact") && !html.includes("source_url: window.location.href")) errors.push(`${market}/${part || "home"}: 表单归因脚本缺少 source_url`);
    const other = market === "mn" ? "ru" : "mn";
    if (new RegExp(`href="/${other}/`).test(html)) errors.push(`${market}/${part || "home"}: 不得导向 ${other.toUpperCase()} 市场`);
    if (new RegExp(`hreflang="${other === "mn" ? "mn-MN" : "ru-RU"}"`).test(html)) errors.push(`${market}/${part || "home"}: 不得声明另一市场 hreflang`);
  }
}

for (const market of ["mn", "ru"]) {
  const rss = join(dist, `rss-${market}.xml`);
  if (!existsSync(rss)) errors.push(`缺少 ${rss}`);
  const sitemap = join(dist, `sitemap-${market}.xml`);
  if (!existsSync(sitemap)) errors.push(`缺少 ${sitemap}`);
  else if (!readFileSync(sitemap, "utf8").includes(`/${market}/blog/`)) errors.push(`${market}: sitemap 缺少博客入口`);
}

if (errors.length) {
  console.error("✗ market boundary QA failed");
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log("✓ market boundary QA passed: KK / UZ / MN / RU isolated, attributed, and blog-ready");


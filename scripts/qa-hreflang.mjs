#!/usr/bin/env node
/** SEO release gate: canonical and hreflang must match the market architecture. */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const errors = [];
let checked = 0;
function pathToUrl(file) {
  let rel = relative(DIST, file).split("\\").join("/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/index\.html$/, "")}`;
}
function check(file) {
  const url = pathToUrl(file);
  const html = readFileSync(file, "utf8");
  checked++;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonical) errors.push(`${url}: missing canonical`);
  else if (url === "/" && !canonical[1].endsWith("/kk/")) errors.push(`${url}: root canonical must target /kk/ → ${canonical[1]}`);
  else if (url !== "/" && !canonical[1].endsWith(url)) errors.push(`${url}: canonical mismatch → ${canonical[1]}`);
  const market = url.startsWith("/mn/") ? "mn" : url.startsWith("/ru/") ? "ru" : null;
  const central = url.startsWith("/kk/") ? "kk" : url.startsWith("/uz/") ? "uz" : url.startsWith("/en/") ? "en" : null;
  const marketArticle = !!market && /^\/(mn|ru)\/blog\/[^/]+\/$/.test(url);
  const tags = marketArticle
    ? [`hreflang="${market === 'mn' ? 'mn-MN' : 'ru-RU'}"`, 'hreflang="x-default"']
    : market === "mn"
    ? ['hreflang="mn-MN"', 'hreflang="en-MN"', 'hreflang="x-default"']
    : market === "ru"
      ? ['hreflang="ru-RU"', 'hreflang="en-RU"', 'hreflang="x-default"']
      : url === "/kk/en/"
        ? ['hreflang="en-KZ"', 'hreflang="x-default"']
        : url === "/uz/en/"
          ? ['hreflang="en-UZ"', 'hreflang="x-default"']
        : url === "/"
        ? ['hreflang="kk-KZ"', 'hreflang="uz-UZ"', 'hreflang="en"', 'hreflang="x-default"']
        : central === "kk"
          ? ['hreflang="kk-KZ"', 'hreflang="x-default"']
          : central === "uz"
            ? ['hreflang="uz-UZ"', 'hreflang="x-default"']
            : ['hreflang="en"', 'hreflang="x-default"'];
  for (const tag of tags) if (!html.includes(tag)) errors.push(`${url}: missing alternate ${tag}`);
  if (market) {
    const other = market === "mn" ? "ru" : "mn";
    if (new RegExp(`href="/${other}/`).test(html)) errors.push(`${url}: cross-market link to ${other}`);
  }
  // Visible Central-Asia navigation can switch KK/UZ/EN; SEO alternates remain separate.
  if (central === "kk" && /<link rel="alternate" hreflang="uz-UZ"/.test(html)) errors.push(`${url}: unrelated Uzbekistan SEO alternate`);
  if (central === "uz" && /<link rel="alternate" hreflang="kk-KZ"/.test(html)) errors.push(`${url}: unrelated Kazakhstan SEO alternate`);
}
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const file = join(dir, entry);
    if (statSync(file).isDirectory()) walk(file);
    else if (entry.endsWith(".html")) check(file);
  }
}
if (!existsSync(DIST)) {
  console.error("✗ dist/ not found; run build first");
  process.exit(1);
}
const root = join(DIST, "index.html");
if (!existsSync(root)) errors.push("missing dist/index.html root redirect");
else if (!readFileSync(root, "utf8").includes('http-equiv="refresh" content="0; url=/kk/"')) errors.push("root must redirect to /kk/");
walk(DIST);
if (errors.length) {
  console.error(`✗ hreflang QA failed (${checked} HTML pages)`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}
console.log(`✓ hreflang QA passed: ${checked} pages have canonical and market-safe alternates`);

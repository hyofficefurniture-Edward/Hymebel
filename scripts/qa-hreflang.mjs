#!/usr/bin/env node
/**
 * qa-hreflang.mjs —— 上线前强制校验（对应方案「技术规范清单」第 1 条）
 * 校验项：
 *   1) dist/index.html 存在且包含指向 /kk/ 的跳转（默认语言哈萨克语）
 *   2) 每个语言页面都有 canonical，且 canonical 路径与文件实际路径一致
 *   3) 每个页面都有 kk-KZ / uz-UZ / en 三语互链 + x-default 指向 /kk/
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, posix } from "node:path";

const DIST = "dist";
const errors = [];
let checked = 0;
let redirects = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (entry.endsWith(".html")) check(p);
  }
}

function pathToUrl(file) {
  let rel = relative(DIST, file).split("\\").join("/");
  if (rel === "index.html") return "/";
  rel = rel.replace(/index\.html$/, "");
  return "/" + rel;
}

function check(file) {
  const url = pathToUrl(file);
  const html = readFileSync(file, "utf8");

  // 跳转桩（根路径默认语跳转、/ru/ 预留跳转）：只校验跳转目标是否落到已上线语言
  if (html.includes('http-equiv="refresh"')) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (!canonical) errors.push(`${url}: 跳转桩缺少 canonical`);
    else if (!/\/(kk|uz|en)\/$/.test(canonical[1]) && !canonical[1].endsWith("/kk/"))
      errors.push(`${url}: 跳转桩目标不是已上线语言 → ${canonical[1]}`);
    redirects++;
    return;
  }

  checked++;

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonical) errors.push(`${url}: 缺少 canonical`);
  else if (!canonical[1].endsWith(url)) errors.push(`${url}: canonical 指向 ${canonical[1]}`);

  for (const tag of ["hreflang=\"kk-KZ\"", "hreflang=\"uz-UZ\"", "hreflang=\"en\"", "hreflang=\"x-default\""]) {
    if (!html.includes(tag)) errors.push(`${url}: 缺少 alternate ${tag}`);
  }

  const xDefault = html.match(/<link rel="alternate" hreflang="x-default" href="([^"]+)"/);
  if (xDefault && !xDefault[1].endsWith("/kk/") && !xDefault[1].includes("/kk/"))
    errors.push(`${url}: x-default 未指向哈萨克语版 /kk/（实际 ${xDefault[1]}）`);
}

if (!existsSync(DIST)) {
  console.error("✗ 未找到 dist/，请先执行 npm run build");
  process.exit(1);
}

const rootIndex = join(DIST, "index.html");
if (!existsSync(rootIndex)) errors.push("缺少 dist/index.html（根路径默认语言跳转页）");
else if (!readFileSync(rootIndex, "utf8").includes('url=/kk/')) errors.push("根路径跳转未指向 /kk/（默认哈萨克语）");

walk(DIST);

if (errors.length) {
  console.error(`✗ hreflang QA 失败（检查 ${checked} 页）`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(
  `✓ hreflang QA 通过：${checked} 个真实页面含 canonical + 三语互链 + x-default → /kk/；${redirects} 个跳转桩目标正确`,
);

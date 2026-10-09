#!/usr/bin/env node
/**
 * audit_by_file.mjs — 与 scripts/audit-claim-risk.mjs 完全相同的正则与扫描范围，
 * 但按「文件 → 类型」输出计数，用于 HEAD 与工作区的逐文件对比。
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["src/data", "src/i18n", "src/pages", "src/layouts"];
const patterns = [
  { type: "delivery", re: /30\s*[–-]\s*45|9\s*[–-]\s*10\s*(?:days|күн|kun)|5\s*[–-]\s*7\s*(?:days|күн|kun)|lead time|production takes/i },
  { type: "cert", re: /\bEAC\b|certificat|сертификат|sertifikat|compliance/i },
  { type: "scale", re: /300[,.\s]?000|1[,.\s]?000\+|50\+\s*(?:countries|ел|davlat)|8\s+(?:international\s+)?cert/i },
  { type: "named", re: /Hilton|five-star|5-star|бес жұлдыз|besh yulduz/i },
  { type: "commercial", re: /48\s*(?:hours|сағат|soat)|\bInStock\b|MOQ|minimum order|минимал.*(?:заказ|buyurtma)/i },
];
const perFile = new Map();
const perType = {};
function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const file = join(dir, entry);
    if (statSync(file).isDirectory()) walk(file);
    else if (/\.(ts|astro|md)$/i.test(file)) scan(file);
  }
}
function scan(file) {
  const rel = relative(process.cwd(), file).replaceAll("\\", "/");
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const p of patterns) {
      if (p.re.test(line)) {
        perType[p.type] = (perType[p.type] || 0) + 1;
        const key = rel + " [" + p.type + "]";
        if (!perFile.has(key)) perFile.set(key, []);
        perFile.get(key).push(index + 1);
      }
    }
  });
}
roots.forEach(walk);

const total = Object.values(perType).reduce((a, b) => a + b, 0);
console.log("TOTAL=" + total + " " + JSON.stringify(perType));
console.log("--- per file ---");
for (const [k, v] of [...perFile.entries()].sort()) {
  console.log(`${String(v.length).padStart(4)}  ${k}  lines=${v.slice(0, 12).join(",")}${v.length > 12 ? ",..." : ""}`);
}

#!/usr/bin/env node
/**
 * Read-only release audit for claims that need a source-of-truth record before
 * they are repeated in pages, FAQ schema or AI-facing summaries.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["src/data", "src/i18n", "src/pages", "src/layouts"];
const patterns = [
  { type: "delivery / logistics", re: /30\s*[–-]\s*45|9\s*[–-]\s*10\s*(?:days|күн|kun)|5\s*[–-]\s*7\s*(?:days|күн|kun)|lead time|production takes/i },
  { type: "certification / compliance", re: /\bEAC\b|certificat|сертификат|sertifikat|compliance/i },
  { type: "scale / project count", re: /300[,.\s]?000|1[,.\s]?000\+|50\+\s*(?:countries|ел|davlat)|8\s+(?:international\s+)?cert/i },
  { type: "named reference", re: /Hilton|five-star|5-star|бес жұлдыз|besh yulduz/i },
  { type: "commercial promise", re: /48\s*(?:hours|сағат|soat)|\bInStock\b|MOQ|minimum order|минимал.*(?:заказ|buyurtma)/i },
];
const findings = [];
function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const file = join(dir, entry);
    if (statSync(file).isDirectory()) walk(file);
    else if (/\.(ts|astro|md)$/i.test(file)) scan(file);
  }
}
function scan(file) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const pattern of patterns) {
      if (pattern.re.test(line)) findings.push({ file: relative(process.cwd(), file).replaceAll("\\", "/"), line: index + 1, type: pattern.type, excerpt: line.trim().replace(/\s+/g, " ").slice(0, 180) });
    }
  });
}
roots.forEach(walk);
const grouped = Object.groupBy(findings, ({ type }) => type);
console.log("Claim-risk audit (read-only):");
for (const [type, list] of Object.entries(grouped)) console.log(`- ${type}: ${list.length}`);
console.log(`Total findings: ${findings.length}`);
console.log("\nFirst 60 findings (create an evidence record before changing a claim):");
findings.slice(0, 60).forEach((f) => console.log(`${f.file}:${f.line} [${f.type}] ${f.excerpt}`));
process.exitCode = 0;

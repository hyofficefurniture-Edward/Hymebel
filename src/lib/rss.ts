import { posts } from "../data/blog";
import type { Lang } from "../i18n/ui";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** 分语言 RSS 2.0 订阅源（内容分发 / 抓取器友好） */
export function rss(lang: Lang, origin: string): string {
  const ttl = { kk: "Hymebel — Орталық Азия жиһаз нарығына арналған нұсқаулықтар", uz: "Hymebel — Markaziy Osiyo mebel bozori uchun qo'llanmalar", en: "Hymebel — Furniture procurement guides for Central Asia" }[lang];
  const self = `${origin}/rss-${lang}.xml`;

  const items = posts
    .map((p) => {
      const url = `${origin}/${lang}/blog/${p.id}/`;
      const body = [p.definition[lang], ...p.sections.flatMap((s) => s.paras[lang])].join(" ");
      return [
        "    <item>",
        `      <title>${esc(p.title[lang])}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(p.date + "T08:00:00Z").toUTCString()}</pubDate>`,
        `      <category>${esc(p.tag[lang])}</category>`,
        `      <description><![CDATA[${p.excerpt[lang]}]]></description>`,
        `      <content:encoded><![CDATA[${body}]]></content:encoded>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(ttl)}</title>
    <link>${origin}/${lang}/blog/</link>
    <description>${esc(ttl)}</description>
    <language>${lang === "kk" ? "kk-KZ" : lang === "uz" ? "uz-UZ" : "en"}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

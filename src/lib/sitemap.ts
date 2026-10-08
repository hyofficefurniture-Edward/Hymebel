import { allSlugs } from "../data/categories";
import { products } from "../data/products";
import { posts } from "../data/blog";
import { marketPostsFor } from "../data/market-posts";
import { catalogFor, catalogGroups } from '../data/market-catalog';
import { languages, type Lang } from "../i18n/ui";

/**
 * Existing Central-Asia URL trees are market-specific.  Do not declare KK/UZ/EN
 * pages as translations of each other: that would merge distinct market intent.
 */
export function urlset(lang: Lang, origin: string, lastmod: string): string {
  const paths = [
    `/${lang}/`,
    ...allSlugs.map((s) => `/${lang}/${s}/`),
    `/${lang}/cases/`,
    ...products.map((p) => `/${lang}/products/${p.id}/`),
    `/${lang}/blog/`,
    ...posts.map((p) => `/${lang}/blog/${p.id}/`),
  ];
  const urls = paths
    .map((path) => {
      const loc = `${origin}${path}`;
      const links = [
        `    <xhtml:link rel="alternate" hreflang="${languages[lang].htmlLang}" href="${loc}"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/"/>`,
      ].join("\n");

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

/** sitemap 索引：指向三份分语言 sitemap */
export function sitemapIndex(origin: string): string {
  const now = new Date().toISOString();
  const items = ["sitemap-kk.xml", "sitemap-uz.xml", "sitemap-en.xml", "sitemap-mn.xml", "sitemap-ru.xml"]
    .map((f) => `  <sitemap>\n    <loc>${origin}/${f}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

/**
 * MN/RU are deliberately separate market trees.  Their English pages are a
 * market-specific fallback, not a language switch to Central Asia or another
 * market, so each sitemap contains only its own four launch URLs.
 */
export function marketUrlset(market: "mn" | "ru", origin: string): string {
  const localHreflang = market === "mn" ? "mn-MN" : "ru-RU";
  const englishHreflang = market === "mn" ? "en-MN" : "en-RU";
  const categorySlugs = catalogGroups.map(g => g.slug);
  const resources = ["project-starter", "faq", "cases", "services", "about"];
  const paths = [
    `/${market}/`, `/${market}/contact/`, ...categorySlugs.map((slug) => `/${market}/${slug}/`), ...resources.map((slug) => `/${market}/${slug}/`),
    `/${market}/en/`, `/${market}/en/contact/`, ...categorySlugs.map((slug) => `/${market}/en/${slug}/`), ...resources.map((slug) => `/${market}/en/${slug}/`),
    `/${market}/blog/`, `/${market}/en/blog/`,
    ...marketPostsFor(market).map((post) => `/${market}/blog/${post.id}/`),
    ...catalogFor(market, market).flatMap(p => [`/${market}/products/${p.id}/`, `/${market}/en/products/${p.id}/`]),
  ];
  const now = new Date().toISOString().slice(0, 10);
  const urls = paths.map((path) => {
    const english = path.includes("/en/");
    const isArticle = path.includes("/blog/") && path !== `/${market}/blog/` && path !== `/${market}/en/blog/`;
    const paired = english ? path.replace(`/${market}/en/`, `/${market}/`) : path.replace(`/${market}/`, `/${market}/en/`);
    const alternate = isArticle ? "" : `\n    <xhtml:link rel="alternate" hreflang="${english ? localHreflang : englishHreflang}" href="${origin}${paired}"/>`;
    return `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <xhtml:link rel="alternate" hreflang="${english ? englishHreflang : localHreflang}" href="${origin}${path}"/>${alternate}\n  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

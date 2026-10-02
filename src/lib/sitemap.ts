import { allSlugs } from "../data/categories";
import { products } from "../data/products";
import { posts } from "../data/blog";
import { locales, type Lang } from "../i18n/ui";

/** 分语言 sitemap：首页 + 全部 slug + 产品详情页 + 博客文章，带 hreflang 注解（x-default → 默认哈萨克语） */
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
        ...locales.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l === "kk" ? "kk-KZ" : l === "uz" ? "uz-UZ" : "en"}" href="${origin}${path.replace(`/${lang}/`, `/${l}/`)}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${path.replace(`/${lang}/`, "/kk/")}"/>`,
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
  const items = ["sitemap-kk.xml", "sitemap-uz.xml", "sitemap-en.xml"]
    .map((f) => `  <sitemap>\n    <loc>${origin}/${f}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

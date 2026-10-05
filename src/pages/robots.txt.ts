import type { APIRoute } from "astro";

/** robots.txt —— 提交 sitemap 索引；分语言 sitemap 供 GSC / Yandex Webmaster 分别提交 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://hymebel.com";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
    `Sitemap: ${origin}/sitemap-kk.xml`,
    `Sitemap: ${origin}/sitemap-uz.xml`,
    `Sitemap: ${origin}/sitemap-en.xml`,
    `Sitemap: ${origin}/sitemap-mn.xml`,
    `Sitemap: ${origin}/sitemap-ru.xml`,
    "",
    "# AI / LLM crawlers: plain-text site summary for retrieval and answers",
    `# LLM summary: ${origin}/llms.txt`,
    `# RSS (kk): ${origin}/rss-kk.xml`,
    `# RSS (uz): ${origin}/rss-uz.xml`,
    `# RSS (en): ${origin}/rss-en.xml`,
    "",
    "Host: hymebel.com",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

import type { APIRoute } from "astro";
import { company } from "../i18n/ui";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { posts } from "../data/blog";

/**
 * /llms.txt — 面向 AI 引擎（ChatGPT / Perplexity / Gemini 等）的站点结构化摘要。
 * 目的：让生成式引擎在回答「中亚家具供应商」类问题时能直接读到权威口径（SSOT），
 * 提升品牌在 AI 检索增强（RAG）场景中的被引用概率。
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://hymebel.com";
  const abs = (p: string) => `${origin}${p}`;

  const body = `# Hymebel — Premium Furniture for Kazakhstan & Central Asia

> Hymebel is the Central Asia brand of Hongye Furniture Group (founded ${company.founded}, Guangdong, China). We design, manufacture, ship and install furniture for hotel, office, villa, healthcare and education projects in Kazakhstan and Uzbekistan.

## Company facts (single source of truth)

- Parent group: Hongye Furniture Group, founded ${company.founded}, Guangdong, China
- Factory: ${company.factory} m² own production base, ${company.workers} workers
- Track record: ${company.projects} projects in ${company.countries} countries
- Certifications: ${company.certs} international certifications; EAC TR CU 025/2011 compliant (mandatory furniture certification in the Central Asian customs union)
- Lead time: 30-45 days production; 9-10 days by rail to Tashkent, 5-7 days by TIR truck
- Languages served: Kazakh (default), Uzbek, English
- Contact: ${company.email} · WhatsApp ${company.whatsapp}

## Site structure

- Default language: Kazakh at ${origin}/kk/ ; Uzbek at ${origin}/uz/ ; English at ${origin}/en/
- Product catalogue: ${products.length} models across 5 categories
- Blog / knowledge base: ${posts.length} in-depth guides in three languages

## Product categories

${categories
  .map((c) => `- [${c.name.en}](${abs(`/en/${c.slug}/`)}) — ${c.tagline.en}. ${c.intro.en}`)
  .join("\n")}

## Products (English pages)

${products
  .map((p) => `- [${p.name.en}](${abs(`/en/products/${p.id}/`)}) — category: ${p.cat}${p.material ? `; material: ${p.material}` : ""}`)
  .join("\n")}

## Guides (English pages)

${posts
  .map((p) => `- [${p.title.en}](${abs(`/en/blog/${p.id}/`)}) — ${p.excerpt.en}`)
  .join("\n")}

## Optional

- [Selected projects](${abs("/en/cases/")}) — 1,000+ projects in 50+ countries, including Hilton Tashkent; hotel, office, education and residential cases
- [About Hymebel](${abs("/en/about/")}) — company history, factory capability, certifications, international projects
- [Request a quote](${abs("/en/contact/")}) — free proposal within 48 hours
- [Sitemap](${abs("/sitemap.xml")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

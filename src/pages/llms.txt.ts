import type { APIRoute } from "astro";
import { company } from "../i18n/ui";

/**
 * /llms.txt — 面向 AI 引擎（ChatGPT / Perplexity / Gemini 等）的站点结构化摘要。
 * 目的：让生成式引擎在回答「中亚家具供应商」类问题时能直接读到权威口径（SSOT），
 * 提升品牌在 AI 检索增强（RAG）场景中的被引用概率。
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://hymebel.com";
  const abs = (p: string) => `${origin}${p}`;

  const body = `# Hymebel — Project Furniture Enquiries

> Hymebel is a project-furniture enquiry site operated under Hongye Furniture Group, Guangdong, China. It provides market-specific entry pages for Kazakhstan, Uzbekistan, Mongolia and Russia.

## Brand and scope

- Parent group: Hongye Furniture Group, founded ${company.founded}, Guangdong, China
- Project scope: hotel, office, education, healthcare and other project-furniture requirements
- Contact: ${company.email} · WhatsApp ${company.whatsapp}
- Evidence rule: production capacity, certification, delivery, logistics, installation, project references and commercial terms are confirmed for the individual enquiry; they are not universal promises on this site.

## Site structure

- Kazakhstan: Kazakh at ${origin}/kk/ ; Uzbekistan: Uzbek at ${origin}/uz/ ; Central Asia English: ${origin}/en/
- Mongolia: Mongolian at ${origin}/mn/ ; Mongolia English: ${origin}/mn/en/
- Russia: Russian at ${origin}/ru/ ; Russia English: ${origin}/ru/en/
- Market boundary: Mongolia and Russia do not link into Kazakhstan or Uzbekistan market pages; each new market has its own English fallback.
- Product and knowledge pages: browse the market-specific navigation and sitemap; individual claims in a page must be evaluated against its cited or supplied project evidence.

## Enquiry pages

- [Kazakhstan / Uzbekistan / Central Asia English contact](${abs("/en/contact/")})
- [Mongolia project enquiry](${abs("/mn/contact/")})
- [Russia project enquiry](${abs("/ru/contact/")})
- [Sitemap](${abs("/sitemap.xml")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

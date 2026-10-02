import type { APIRoute } from "astro";
import { rss } from "../lib/rss";
import { locales, type Lang } from "../i18n/ui";

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ site, params }) => {
  const lang = params.lang as Lang;
  const origin = site?.origin ?? "https://hymebel.com";
  return new Response(rss(lang, origin), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};

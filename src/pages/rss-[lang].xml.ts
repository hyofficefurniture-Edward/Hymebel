import type { APIRoute } from "astro";
import { marketRss, rss } from "../lib/rss";
import { locales, type Lang } from "../i18n/ui";

export function getStaticPaths() {
  return [...locales, "mn", "ru"].map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ site, params }) => {
  const lang = params.lang as Lang | "mn" | "ru";
  const origin = site?.origin ?? "https://hymebel.com";
  return new Response(lang === "mn" || lang === "ru" ? marketRss(lang, origin) : rss(lang, origin), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};

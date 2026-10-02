import type { APIRoute } from "astro";
import { sitemapIndex } from "../lib/sitemap";

export const GET: APIRoute = ({ site }) =>
  new Response(sitemapIndex(site?.origin ?? "https://hymebel.com"), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });

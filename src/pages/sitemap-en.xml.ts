import type { APIRoute } from "astro";
import { urlset } from "../lib/sitemap";

const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = ({ site }) =>
  new Response(urlset("en", site?.origin ?? "https://hymebel.com", BUILD_DATE), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });

import type { APIRoute } from "astro";
import { marketUrlset } from "../lib/sitemap";

export const GET: APIRoute = ({ site }) =>
  new Response(marketUrlset("mn", site?.origin ?? "https://hymebel.com"), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });

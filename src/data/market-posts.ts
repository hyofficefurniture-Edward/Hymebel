/**
 * Market-native editorial layer.
 *
 * Keep this separate from blog.ts: blog.ts is a WorkBuddy-generated, three
 * language archive that must not be hand-edited. A record here belongs to one
 * market only and is never silently translated or exposed in another market.
 */
import type { Lang } from "../i18n/ui";

export type MarketCode = Lang | "mn" | "ru";

export interface MarketPost {
  id: string;
  market: MarketCode;
  title: string;
  tag: string;
  excerpt: string;
  date: string;
  readingMin: number;
  image: string;
  imageAlt: string;
  definition: string;
  takeaways: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
}

/** Empty by design at launch. Add reviewed, market-specific posts here. */
export const marketPosts: MarketPost[] = [];

export const marketPostsFor = (market: MarketCode) =>
  marketPosts.filter((post) => post.market === market);

export const marketPostById = (market: MarketCode, id: string) =>
  marketPosts.find((post) => post.market === market && post.id === id);

import type { Lang } from "../i18n/ui";

/**
 * 市场与语言必须分开建模：语言相同不代表采购、法规、案例或流量可共享。
 * KK / UZ / EN retain the shared dynamic content tree. MN / RU use separate
 * fixed routes, dedicated forms and sitemaps; they must not be inserted into
 * the Central-Asia locales list merely to make a language dropdown work.
 */
export type MarketId = "kz" | "uz" | "mn" | "ru" | "global";

export const marketLaunches = {
  kz: { route: "/kk/", englishRoute: "/en/", sitemap: "/sitemap-kk.xml" },
  uz: { route: "/uz/", englishRoute: "/en/", sitemap: "/sitemap-uz.xml" },
  mn: { route: "/mn/", englishRoute: "/mn/en/", sitemap: "/sitemap-mn.xml" },
  ru: { route: "/ru/", englishRoute: "/ru/en/", sitemap: "/sitemap-ru.xml" },
} as const;

export function marketForLanguage(lang: Lang): MarketId {
  if (lang === "kk") return "kz";
  if (lang === "uz") return "uz";
  return "global";
}


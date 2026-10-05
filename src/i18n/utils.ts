import { defaultLang, languages, locales, ui, type Lang } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return !!value && (locales as string[]).includes(value);
}

export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split("/").filter(Boolean)[0];
  return isLang(segment) ? segment : defaultLang;
}

/** t("nav.hotel") —— 缺键回落默认语言（哈萨克语），再回落键名 */
export function useTranslations(lang: Lang) {
  const dict = ui[lang];
  const fallback = ui[defaultLang];
  return (key: string): string => dict[key] ?? fallback[key] ?? key;
}

/** 站内路径（含语言前缀，trailing slash 与 Astro build.format=directory 一致） */
export function localePath(lang: Lang, slug = ""): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export type AltLink = { lang: Lang; hreflang: string; href: string; label: string };

/**
 * 市场隔离：KK、UZ、EN 旧内容 URL 不再声明为彼此的翻译版本。
 * 这避免把哈萨克和乌兹别克采购意图错误合并；可见英文入口由
 * marketEnglishEntry() 提供，且只在当前市场内跳转。
 */
export function alternates(lang: Lang, slug = ""): { alts: AltLink[]; xDefault: AltLink } {
  const alts: AltLink[] = [{
    lang,
    hreflang: languages[lang].htmlLang,
    href: localePath(lang, slug),
    label: languages[lang].label,
  }];
  return {
    alts,
    xDefault: {
      lang,
      hreflang: "x-default",
      href: "/",
      label: "Market selector",
    },
  };
}

/** English never jumps from one Central-Asia market into the other. */
export function marketEnglishEntry(lang: Lang): string | null {
  if (lang === "kk") return "/kk/en/";
  if (lang === "uz") return "/uz/en/";
  return null;
}

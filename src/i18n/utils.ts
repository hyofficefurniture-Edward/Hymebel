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

/** 三语互链 + x-default（指向默认哈萨克语版） */
export function alternates(slug = ""): { alts: AltLink[]; xDefault: AltLink } {
  const alts: AltLink[] = locales.map((l) => ({
    lang: l,
    hreflang: languages[l].htmlLang,
    href: localePath(l, slug),
    label: languages[l].label,
  }));
  return {
    alts,
    xDefault: {
      lang: defaultLang,
      hreflang: "x-default",
      href: localePath(defaultLang, slug),
      label: languages[defaultLang].label,
    },
  };
}

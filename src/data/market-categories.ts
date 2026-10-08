import { catalogGroups } from './market-catalog';
export type MarketCategory = { slug:string; title:string; description:string; intro:string; bullets:string[] };
export function categoriesFor(market:'mn'|'ru', language:'mn'|'ru'|'en'): MarketCategory[] {
  return catalogGroups.map(g=>({slug:g.slug,title:g.title[language],description:g[language==='en'?'en':market],intro:g[language==='en'?'en':market],bullets:[g.checklist[language]]}));
}

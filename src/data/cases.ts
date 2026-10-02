import type { Lang } from "../i18n/ui";

export type Localized = Record<Lang, string>;

export type CaseStudy = {
  id: string;
  /** 自有实拍图（产品场景图库，均已过接触表目检） */
  image: string;
  industry: Localized;
  title: Localized;
  location: Localized;
  scope: Localized;
  imageAlt: Localized;
};

/**
 * 精选案例（合规口径：仅 Hilton Tashkent 可具名，其余为画像式描述；
 * 数据只用 SSOT：1000+ 项目 / 50+ 国 / 交期 30-45 天 / 铁路 9-10 天）
 */
export const cases: CaseStudy[] = [
  {
    id: "hilton-tashkent",
    image: "/images/proyectos/hotel-suite.webp",
    industry: { kk: "Қонақүй", uz: "Mehmonxona", en: "Hotel" },
    title: {
      kk: "Hilton Tashkent қонақүй жобасы",
      uz: "Hilton Tashkent mehmonxona loyihasi",
      en: "Hilton Tashkent hotel project",
    },
    location: { kk: "Өзбекстан, Ташкент", uz: "Oʻzbekiston, Toshkent", en: "Tashkent, Uzbekistan" },
    scope: {
      kk: "Қонақүй нөмірлеріне арналған FF&E жиһаз жабдығы: төсек-орын, жұмыс аймағы, шкаф және жарықтандыру элементтері халықаралық оператордың стандарттарына сәйкес өндірілді.",
      uz: "Mehmonxona xonalari uchun FF&E jihozlash: krovat, ish joyi, shkaf va yoritish elementlari xalqaro operator standartlariga muvofiq ishlab chiqarildi.",
      en: "FF&E supply for guest rooms: beds, work zones, wardrobes and lighting elements manufactured to the international operator's standards.",
    },
    imageAlt: {
      kk: "Hymebel жабдықтаған Hilton Tashkent қонақүйінің премиум нөмірі",
      uz: "Hymebel jihozlagan Hilton Tashkent mehmonxonasining premium xonasi",
      en: "Premium guest room at Hilton Tashkent furnished by Hymebel",
    },
  },
  {
    id: "hotel-banquet-astana",
    image: "/images/products/hotel-ca-11/hotel-ca-11-scene.jpg",
    industry: { kk: "Қонақүй", uz: "Mehmonxona", en: "Hotel" },
    title: {
      kk: "Премиум қонақүйдің банкет залы",
      uz: "Premium mehmonxona banket zali",
      en: "Banquet hall of a premium hotel",
    },
    location: { kk: "Қазақстан, Астана", uz: "Qozogʻiston, Astana", en: "Astana, Kazakhstan" },
    scope: {
      kk: "600 орындық банкет залы: ұзын үстелдер, жұмсақ төселген бүкітелетін орындықтар, бүкітелетін үстелдер мен сахна жиһазы — күн сайынғы ауыр жүктемеге арналған коммерциялық класс.",
      uz: "600 o'rinli banket zali: uzun stollar, yumshoq o'rindiqlar, katlanadigan stollar va sahna mebeli — sutkalik yuqori yuklamaga mo'ljallangan tijorat klassi.",
      en: "600-seat banquet hall: long tables, upholstered stacking chairs, folding tables and stage furniture — commercial grade for daily heavy use.",
    },
    imageAlt: {
      kk: "Hymebel жабдықтаған ірі қонақүй банкет залы — дөңгелек үстелдер мен жұмсақ орындықтар",
      uz: "Hymebel jihozlagan katta mehmonxona banket zali — dumaloq stollar va yumshoq stulyalar",
      en: "Large hotel banquet hall furnished by Hymebel with round tables and upholstered chairs",
    },
  },
  {
    id: "hotel-bar-restaurant",
    image: "/images/products/hotel-ca-07/hotel-ca-07-scene.jpg",
    industry: { kk: "Қонақүй", uz: "Mehmonxona", en: "Hotel" },
    title: {
      kk: "Қонақүйдің бөлме мейрамханасы мен бар аймағы",
      uz: "Mehmonxona restorani va bar zonasi",
      en: "Hotel all-day restaurant and bar",
    },
    location: { kk: "Өзбекстан, Ташкент", uz: "Oʻzbekiston, Toshkent", en: "Tashkent, Uzbekistan" },
    scope: {
      kk: "Тұтас ағаштан жасалған бар үстелі, биік барлық орындықтар, жұмсақ орындықтар мен жылы жарықтандыру — қонақүйдің күнделікті рестораны мен бар аймағына толық жиһаздау.",
      uz: "Massiv yog'ochdan yasalgan bar stoli, baland bar stulyalari, yumshoq o'tirgichlar va iliq yoritish — mehmonxona restorani va bar zonasi uchun to'liq jihozlash.",
      en: "Solid-wood bar counter, high barstools, lounge seating and warm lighting — full fit-out for the hotel's daily restaurant and bar.",
    },
    imageAlt: {
      kk: "Hymebel жабдықтаған қонақүй бар аймағы — ағаш үстел мен биік барлық орындықтар",
      uz: "Hymebel jihozlagan mehmonxona bar zonasi — yog'och stul va baland bar stulyalari",
      en: "Hotel bar area furnished by Hymebel with wooden counter and high barstools",
    },
  },
  {
    id: "office-conference-astana",
    image: "/images/products/office-ca-05/office-ca-05-scene.jpg",
    industry: { kk: "Кеңсе", uz: "Ofis", en: "Office" },
    title: {
      kk: "Бизнес-орталықтың кеңес аймағы",
      uz: "Biznes-markazning uchrashuv zoni",
      en: "Business centre conference floor",
    },
    location: { kk: "Қазақстан, Астана", uz: "Qozogʻiston, Astana", en: "Astana, Kazakhstan" },
    scope: {
      kk: "14 орындық кеңес үстелі (5,2 м) ағаш негізде, кабель-менеджмент пен интеграцияланған розеткалармен; переговорные мен executive кабинеттерге кеңейту.",
      uz: "14 o'rinli uchrashuv stoli (5,2 m) yog'och asosda, kabel boshqaruvi va integratsiyalashgan rozetkalar bilan; kichik uchrashuv xonalari va rahbar kabinetlariga kengaytirilgan.",
      en: "14-seat conference table (5.2 m) on a wood base with cable management and integrated power; extended to smaller meeting rooms and executive offices.",
    },
    imageAlt: {
      kk: "Hymebel жасаған ірі кеңес үстелі — ағаш қаптамалы, кәсіби кеңсе интерьері",
      uz: "Hymebel ishlab chiqargan katta uchrashuv stoli — yog'och qoplamali, professional ofis interyeri",
      en: "Large wood-finish conference table by Hymebel in a professional office interior",
    },
  },
  {
    id: "edu-campus-kz",
    image: "/images/products/edu-ca-01/edu-ca-01-scene.jpg",
    industry: { kk: "Білім беру", uz: "Ta'lim", en: "Education" },
    title: {
      kk: "Халықаралық мектеп кампусы",
      uz: "Xalqaro maktab kampusi",
      en: "International school campus",
    },
    location: { kk: "Қазақстан", uz: "Qozogʻiston", en: "Kazakhstan" },
    scope: {
      kk: "200+ орындық дәрісхана: бекітілген қатарлы орындықтар, ақтақта айналасындағы жиһаз, мұғалім трибунасы — EAC TR CU 025/2011 талаптарына сай.",
      uz: "200+ o'rinli auditoriya: biriktirilgan qatorli o'rindiqlar, yozuv taxtasi atrofidagi jihozlar, o'qituvchi kafedri — EAC TR CU 025/2011 talablariga muvofiq.",
      en: "200+ seat lecture hall: fixed row seating, furniture around the whiteboard, teacher podium — compliant with EAC TR CU 025/2011.",
    },
    imageAlt: {
      kk: "Hymebel жабдықтаған дәрісханадағы қатарлы орындықтар мен үстелдер",
      uz: "Hymebel jihozlagan auditoriyadagi qatorli o'rindiqlar va stollar",
      en: "Row seating and desks in a lecture hall furnished by Hymebel",
    },
  },
  {
    id: "villa-residence-tashkent",
    image: "/images/products/home-ca-01/home-ca-01-scene.jpg",
    industry: { kk: "Тұрғын үй", uz: "Turar-joy", en: "Residential" },
    title: {
      kk: "Жеке резиденцияға толық циклды жиһаздау",
      uz: "Shaxsiy rezidensiyaga to'liq tsikl jihozlash",
      en: "Full-cycle furnishing of a private residence",
    },
    location: { kk: "Өзбекстан, Ташкент", uz: "Oʻzbekiston, Toshkent", en: "Tashkent, Uzbekistan" },
    scope: {
      kk: "Жатақ бөлме, қабылдау және асүй аймақтарына арналған тапсырыстық жиһаз: массив ағаш, табиғи былғары және тас үстелдер — жеке жобалаудан монтаждауға дейін 45 күн.",
      uz: "Yotoqxona, qabulxona va oshxona uchun buyurtma jihozlari: massiv yog'och, tabiiy teri va tosh stollar — individual loyihalashdan o'rnatishgacha 45 kun.",
      en: "Bespoke furniture for bedrooms, reception and dining areas: solid wood, natural leather and stone tops — from custom design to installation in 45 days.",
    },
    imageAlt: {
      kk: "Hymebel жобалаған жеке резиденцияның жылы жатақ бөлмесі",
      uz: "Hymebel loyihalagan shaxsiy rezidensiyaning iliq yotoqxonasi",
      en: "Warm bedroom of a private residence designed by Hymebel",
    },
  },
];

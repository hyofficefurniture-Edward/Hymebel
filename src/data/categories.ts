import type { Lang } from "../i18n/ui";

export type Localized = Record<Lang, string>;

export type Category = {
  slug: string;
  navKey: string;
  icon: string;
  /** /images/ 下的自有实拍图（来源 hymobiliario.com 同源资产） */
  image: string;
  name: Localized;
  imageAlt: Localized;
  tagline: Localized;
  intro: Localized;
  bullets: Record<Lang, string[]>;
};

export const categories: Category[] = [
  {
    slug: "hotel-furniture",
    navKey: "nav.hotel",
    icon: "🏨",
    image: "/images/productos/hotel-lobby.webp",
    name: {
      kk: "Қонақүй жиһазы",
      uz: "Mehmonxona mebeli",
      en: "Hotel Furniture",
    },
    imageAlt: {
      kk: "Премиум қонақүй лоббиінің ішкі көрінісі — Hymebel қонақүй жиһазы",
      uz: "Premium mehmonxona lobbi interyeri — Hymebel mehmonxona mebeli",
      en: "Premium hotel lobby interior furnished by Hymebel",
    },
    tagline: {
      kk: "FF&E толық жабдықтау",
      uz: "To'liq FF&E ta'minoti",
      en: "Full FF&E supply",
    },
    intro: {
      kk: "Нөмірлер, лобби, мейрамхана және конференц-залдарға арналған жиһаз. Жоба бойынша өндіріс, 30-45 күн, теміржолмен Орталық Азияға 9-10 күн.",
      uz: "Xonalar, lobbi, restoran va konferents-zallar uchun mebel. Loyiha bo'yicha ishlab chiqarish: 30-45 kun, temiryo'l orqali Markaziy Osiyoga 9-10 kun.",
      en: "Furniture for guest rooms, lobbies, restaurants and conference halls. Built to your drawings in 30-45 days, then 9-10 days by rail to Central Asia.",
    },
    bullets: {
      kk: ["Нөмір жиһазы (30-50 нөмір)", "Лобби және қабылдау аймағы", "Мейрамхана және конференц-зал"],
      uz: ["Xona mebeli (30-50 xona)", "Lobbi va qabulxona", "Restoran va konferents-zal"],
      en: ["Guest room furniture (30-50 rooms)", "Lobby and reception", "Restaurant and conference halls"],
    },
  },
  {
    slug: "office-furniture",
    navKey: "nav.office",
    icon: "🏢",
    image: "/images/productos/office.webp",
    name: { kk: "Кеңсе жиһазы", uz: "Ofis mebeli", en: "Office Furniture" },
    imageAlt: {
      kk: "Заманауи кеңсе жұмыс орындары — Hymebel кеңсе жиһазы",
      uz: "Zamonaviy ofis ish joylari — Hymebel ofis mebeli",
      en: "Modern corporate workstations supplied by Hymebel",
    },
    tagline: {
      kk: "Эргономика және жобалау",
      uz: "Ergonomika va loyihalash",
      en: "Ergonomics & workspace planning",
    },
    intro: {
      kk: "Жұмыс орындары, жиналыс бөлмелері және қабылдау аймақтары. 300 000 м² өндіріс алаңы көлемді жобаларды қамтиды.",
      uz: "Ish joylari, majlislar zallari va qabulxonalar. 300 000 m² ishlab chiqarish maydoni yirik loyihalarni qamrab oladi.",
      en: "Workstations, meeting rooms and reception areas. Our 300,000 m² factory covers large-scale rollouts.",
    },
    bullets: {
      kk: ["Жұмыс орындары және бөлу панельдері", "Жиналыс бөлмесі жиһазы", "Қабылдау және күту аймағы"],
      uz: ["Ish joylari va ajratgichlar", "Majlislar zali mebeli", "Qabulxona va kutish zonasi"],
      en: ["Workstations and partitions", "Meeting room furniture", "Reception and waiting areas"],
    },
  },
  {
    slug: "villa-residential",
    navKey: "nav.residential",
    icon: "🏡",
    image: "/images/productos/residential.webp",
    name: { kk: "Вилла және тұрғын үй", uz: "Villa va turar-joy", en: "Villa & Residential" },
    imageAlt: {
      kk: "Заманауи вилла қонақ бөлмесі — Hymebel тұрғын үй жиһазы",
      uz: "Zamonaviy villa mehmonxonasi — Hymebel turar-joy mebeli",
      en: "Modern villa living room furnished by Hymebel",
    },
    tagline: {
      kk: "Толық жоба — бір өндірушіден",
      uz: "To'liq loyiha — bitta ishlab chiqaruvchidan",
      en: "One manufacturer, whole home",
    },
    intro: {
      kk: "Ас үй, қонақ бөлме, жатын бөлме жиһазы және қабырға панельдері. Өлшеуден монтажға дейінгі толық цикл.",
      uz: "Oshxona, mehmonxona, yotoqxona mebeli va devor panellari. O'lchovdan o'rnatishgacha to'liq tsikl.",
      en: "Kitchen, living, bedroom furniture and wall panelling. A complete cycle from site survey to installation.",
    },
    bullets: {
      kk: ["Ас үй және асхана жиһазы", "Қонақ және жатын бөлме", "Қабырға панельдері мен есіктер"],
      uz: ["Oshxona va ovqat zonasi", "Mehmonxona va yotoqxona", "Devor panellari va eshiklar"],
      en: ["Kitchen and dining furniture", "Living and bedroom sets", "Wall panelling and doors"],
    },
  },
  {
    slug: "healthcare-furniture",
    navKey: "nav.healthcare",
    icon: "🏥",
    image: "/images/productos/healthcare.webp",
    name: { kk: "Медициналық жиһаз", uz: "Tibbiyot mebeli", en: "Healthcare Furniture" },
    imageAlt: {
      kk: "Медициналық мекеме жиһазы — Hymebel өндірісі",
      uz: "Tibbiyot muassasa mebeli — Hymebel ishlab chiqarishi",
      en: "Healthcare facility furniture manufactured by Hymebel",
    },
    tagline: {
      kk: "Гигиена стандарттары",
      uz: "Gigiyena standartlari",
      en: "Hygiene-first materials",
    },
    intro: {
      kk: "Палаталар, қабылдау бөлімдері және зертханалар үшін жиһаз. Тазалауға қолайлы материалдар және сертификатталған өндіріс.",
      uz: "Palatalar, qabul bo'limlari va laboratoriyalar uchun mebel. Tozalashga qulay materiallar va sertifikatlangan ishlab chiqarish.",
      en: "Furniture for patient rooms, clinics and laboratories. Easy-clean materials from certified production lines.",
    },
    bullets: {
      kk: ["Палата жиһазы", "Қабылдау және күту аймағы", "Зертхана жабдықтары"],
      uz: ["Palata mebeli", "Qabul va kutish zonasi", "Laboratoriya jihozlari"],
      en: ["Patient room furniture", "Reception and waiting areas", "Laboratory casework"],
    },
  },
  {
    slug: "education-furniture",
    navKey: "nav.education",
    icon: "🎓",
    image: "/images/productos/education.webp",
    name: { kk: "Білім беру жиһазы", uz: "Ta'lim mebeli", en: "Education Furniture" },
    imageAlt: {
      kk: "Сынып парталары мен орындықтары — Hymebel білім беру жиһазы",
      uz: "Sinf partalari va stullari — Hymebel ta'lim mebeli",
      en: "Classroom desks and chairs supplied by Hymebel",
    },
    tagline: {
      kk: "Көтерме жеткізу",
      uz: "Ulgurji yetkazib berish",
      en: "Bulk supply terms",
    },
    intro: {
      kk: "Сыныптар, кітапханалар және зертханалар үшін берік жиһаз. Мектептер мен университеттерге көтерме жеткізу тәжірибесі.",
      uz: "Sinflar, kutubxonalar va laboratoriyalar uchun mustahkam mebel. Maktab va universitetlarga ulgurji yetkazib berish tajribasi.",
      en: "Durable furniture for classrooms, libraries and laboratories, with proven bulk-supply experience for schools and universities.",
    },
    bullets: {
      kk: ["Сынып парталары мен орындықтар", "Кітапхана жиһазы", "Зертхана үстелдері"],
      uz: ["Sinf partalari va stullar", "Kutubxona mebeli", "Laboratoriya stollari"],
      en: ["Classroom desks and chairs", "Library furniture", "Laboratory tables"],
    },
  },
];

export const about = {
  slug: "about",
  navKey: "nav.about",
  name: { kk: "Біз туралы", uz: "Biz haqimizda", en: "About Hymebel" } as Localized,
  intro: {
    kk: "Hymebel — Hongye Furniture Group (1996 жылдан бері) бренді. 1000+ жоба, 50+ ел, 300 000 м² өндіріс алаңы және 8 халықаралық сертификат.",
    uz: "Hymebel — Hongye Furniture Group (1996-yildan beri) brendi. 1000+ loyiha, 50+ davlat, 300 000 m² ishlab chiqarish maydoni va 8 xalqaro sertifikat.",
    en: "Hymebel is the Central Asia brand of Hongye Furniture Group (founded 1996): 1,000+ projects, 50+ countries, a 300,000 m² factory and 8 international certifications.",
  } as Localized,
  bullets: {
    kk: [
      "1996 жылдан бері жиһаз өндірісі және экспорт",
      "8 халықаралық сертификат және EAC TR CU 025/2011 сәйкестігі",
      "Халықаралық жобалар: Hilton Tashkent (Өзбекстан)",
    ],
    uz: [
      "1996-yildan beri mebel ishlab chiqarish va eksport",
      "8 xalqaro sertifikat va EAC TR CU 025/2011 muvofiqligi",
      "Xalqaro loyihalar: Hilton Tashkent (Oʻzbekiston)",
    ],
    en: [
      "Furniture manufacturing and export since 1996",
      "8 international certifications and EAC TR CU 025/2011 compliance",
      "International references including Hilton Tashkent, Uzbekistan",
    ],
  },
};

export const contactPage = {
  slug: "contact",
  navKey: "nav.contact",
  name: { kk: "Байланыс", uz: "Aloqa", en: "Contact us" } as Localized,
};

/** sitemap / hreflang 用的全部 slug（不含首页） */
export const allSlugs: string[] = [...categories.map((c) => c.slug), about.slug, contactPage.slug];

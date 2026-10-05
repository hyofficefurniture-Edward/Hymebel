// hymebel.com 三语字典：kk（默认，西里尔哈萨克语）· uz（拉丁乌兹别克语）· en（英语，国际线末位）
export const languages = {
  kk: { label: "Қазақша", short: "KK", htmlLang: "kk-KZ" },
  uz: { label: "Oʻzbekcha", short: "UZ", htmlLang: "uz-UZ" },
  en: { label: "English", short: "EN", htmlLang: "en" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "kk";
export const locales: Lang[] = ["kk", "uz", "en"];

type Dict = Record<string, string>;

const kk: Dict = {
  "nav.home": "Басты бет",
  "nav.hotel": "Қонақүй жиһазы",
  "nav.office": "Кеңсе жиһазы",
  "nav.residential": "Вилла және тұрғын үй",
  "nav.healthcare": "Медициналық жиһаз",
  "nav.education": "Білім беру жиһазы",
  "nav.contact": "Байланыс",
  "nav.about": "Біз туралы",
  "nav.cases": "Жобалар",

  "cases.h": "Таңдаулы жобалар",
  "cases.lead":
    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды. Төменде — Орталық Азиядағы жобалардың таңдамалысы: қонақүйлер, кеңселер, білім беру мекемелері және тұрғын үйлер.",
  "cases.note":
    "Кейбір тапсырыс берушілердің өтініші бойынша жобалардың бір бөлігі жинақталған сипаттамамен ұсынылған. Толық фотоесептер мен материал сертификаттарын байланыс орнатқаннан кейін ұсынуға болады.",
  "stat.leadtime": "күн өндіріс (жөнелтуге дейін)",

  "site.tagline": "Hongye Furniture Group · Орталық Азия",
  "hero.eyebrow": "Қазақстан · Өзбекстан · Орталық Азия",
  "hero.title": "Орталық Азия нарығына арналған премиум жиһаз",
  "hero.subtitle":
    "1996 жылдан бері · 1000+ жоба · 300 000 м² өндіріс алаңы · 50+ ел · 8 халықаралық сертификат. Қонақүй, кеңсе және вилла жобаларын жобалаудан монтажға дейін толық қамтимыз.",
  "hero.ctaPrimary": "Тегін смета алу",
  "hero.ctaSecondary": "Жобаны талқылау",

  "stat.projects": "жоба",
  "stat.factory": "м² өндіріс алаңы",
  "stat.since": "жылдан бері нарықта",
  "stat.workers": "жұмысшы өндірісте",
  "stat.countries": "ел",
  "stat.certs": "халықаралық сертификат",

  "definition":
    "Hymebel — 1996 жылы құрылған Hongye Furniture Group компаниясының Орталық Азия нарығына арналған жиһаз бренді. Қонақүй, кеңсе, вилла, медициналық және білім беру жобаларына арналған жиһазды жобалаудан өндіруге, жеткізуге және монтаждауға дейін толық циклмен жеткізеді.",

  "categories.title": "Өнім бағыттары",
  "categories.subtitle": "Бес негізгі бағыт — қонақүйден бастап білім беру жобаларына дейін.",

  "why.title": "Неге Hymebel",
  "why.1": "300 000 м² өз өндіріс алаңы — делдалсыз баға және тұрақты сапа",
  "why.2": "EAC TR CU 025/2011 талаптарына сәйкестік және 8 халықаралық сертификат",
  "why.3": "Өндіріс 30-45 күн, теміржолмен Орталық Азияға 9-10 күн",
  "why.4": "Толық цикл: өлшеу, 3D жобалау, өндіріс, жеткізу, монтаж",

  "process.title": "Жұмыс тәртібі",
  "process.1": "Сұраныс пен өлшеу",
  "process.2": "3D жоба және смета",
  "process.3": "Өндіріс және сапа бақылауы",
  "process.4": "Жеткізу және монтаж",

  "case.title": "Халықаралық тәжірибе",
  "case.body":
    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды — оның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы. Әр жоба үшін фотоесеп және материалдық сертификаттар беріледі.",
  "case.cta": "Жобаларды көру",
  "case.imgAlt": "Hymebel жабдықтаған премиум қонақүй нөмірі",

  "faq.title": "Жиі қойылатын сұрақтар",
  "faq.1.q": "Hymebel қандай жиһаз шығарады?",
  "faq.1.a":
    "Қонақүй, кеңсе, вилла, медициналық және білім беру нысандарына арналған жиһазды жобалаймыз, өндіреміз, жеткіземіз және монтаждаймыз.",
  "faq.2.q": "Жеткізу және өндіріс мерзімі қанша?",
  "faq.2.a":
    "Өндіріс 30-45 күн, теміржолмен Орталық Азияға 9-10 күн (TIR көлігімен 5-7 күн).",
  "faq.3.q": "EAC сертификаты бар ма?",
  "faq.3.a":
    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес, 8 халықаралық сертификатымыз бар. Құжаттама жобамен бірге беріледі.",
  "faq.4.q": "Ең аз тапсырыс көлемі қандай?",
  "faq.4.a":
    "Жоба түріне байланысты: қонақүй жобалары әдетте 30-50 бөлме жиһазынан басталады, вилла жобалары бөлме бойынша есептеледі.",

  "cta.title": "Жобаңызды талқылайық",
  "cta.body": "Жоспар, өлшем немесе сурет жіберіңіз — 48 сағат ішінде коммерциялық ұсыныс дайындаймыз.",

  "contact.title": "Байланыс",
  "contact.subtitle": "WhatsApp, Telegram немесе электрондық пошта арқылы жазыңыз — жауап 24 сағат ішінде.",

  "contact.primaryRole": "Негізгі байланыс",
  "contact.secondaryRole": "Аймақтық өкіл — Орталық Азия",
  "contact.tagline": "Коммерциялық және тұрғын үй кеңістігіне арналған толық шешім жеткізушісі",
  "contact.lblTel": "Телефон",
  "contact.lblMobile": "Ұялы / WhatsApp",
  "contact.lblEmail": "Email",
  "contact.lblWeb": "Веб-сайт",
  "contact.lblAddress": "Мекенжай",
  "contact.lblLangs": "Тілдер",
  "contact.langsValue": "қазақ, өзбек, орыс",
  "contact.secondaryNote": "Қазақ, өзбек және орыс тілінде сөйлеседі — аймақтық жобалар бойынша бірінші байланыс.",
  "contact.formTitle": "Сұраныс жіберу",
  "form.name": "Атыңыз",
  "form.company": "Компания",
  "form.country": "Ел / қала",
  "form.phone": "Телефон / WhatsApp",
  "form.category": "Жоба түрі",
  "form.message": "Жоба сипаттамасы",
  "form.submit": "Жіберу",
  "form.note": "Деректеріңіз тек осы сұраныс бойынша пайдаланылады.",

  "footer.about":
    "Hymebel — Hongye Furniture Group (1996 жылдан бері) бренді. Жиһаз өндірісі, жобалау және экспорт.",
  "footer.rights": "© 2026 Hongye Furniture Group. Барлық құқықтар қорғалған.",
  "footer.links": "Бөлімдер",

  "meta.home.title": "Hymebel — Қазақстан мен Орталық Азияға арналған премиум жиһаз",
  "meta.home.desc":
    "Қонақүй, кеңсе, вилла, медициналық және білім беру жобаларына арналған жиһаз: 300 000 м² өндіріс, EAC сәйкестігі, 30-45 күн өндіріс. Тегін смета алыңыз.",

  // ── 页头/页脚（对齐西语双站结构）──
  "nav.products": "Өнімдер",
  "nav.blog": "Блог",
  "footer.cta.tag": "Тегін смета",
  "footer.cta.title": "Жобаны бастауға дайынсыз ба?",
  "footer.cta.body": "Аға кеңесші 24 сағат ішінде жауап береді.",
  "footer.cta.secondary": "Өнімдерді көру",
  "footer.col.products": "Өнімдер",
  "footer.col.company": "Компания",
  "footer.col.resources": "Ресурстар",
  "footer.col.contact": "Байланыс",
  "footer.factory": "Өндіріс базамыз",
  "footer.member": "Hongye Furniture Group мүшесі →",

  // ── 公司 FAQ 板块（首页，站群口径）──
  "companyfaq.title": "Компания туралы жиі қойылатын сұрақтар",
  "companyfaq.subtitle": "Hymebel және Hongye Furniture Group туралы ең жиі сұралатын сұрақтар.",
  "cf.1.q": "Hymebel — қандай компания?",
  "cf.1.a":
    "Hymebel — 1996 жылы құрылған Hongye Furniture Group компаниясының Орталық Азияға мамандандырылған жиһаз бренді. Қонақүй, кеңсе, вилла, медициналық және білім беру жобалары үшін жиһазды жобалаудан өндіріске, жеткізуге және монтаждауға дейін толық циклмен жеткіземіз.",
  "cf.2.q": "Өндіріс базасы қандай?",
  "cf.2.a":
    "Өзіміздің 300 000 м² өндіріс алаңы және 1000-нан астам жұмысшы. Барлық өнім өз зауытымызда шығарылады — делдалсыз баға және тұрақты сапа.",
  "cf.3.q": "EAC сертификаты бар ма?",
  "cf.3.a":
    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес, қосымша 8 халықаралық сертификатымыз бар. Толық құжаттама әр жобамен бірге беріледі.",
  "cf.4.q": "Өндіріс және жеткізу мерзімі қандай?",
  "cf.4.a":
    "Тапсырыс көлеміне байланысты өндіріс әдетте 30-45 күн. Теміржолмен Орталық Азияға 9-10 күн, TIR көлігімен 5-7 күн жетеді.",
  "cf.5.q": "Ең аз тапсырыс көлемі қандай?",
  "cf.5.a":
    "Жоба түріне байланысты: қонақүй жобалары әдетте 30-50 нөмірлік жиһаздан басталады, вилла жобалары бөлме бойынша есептеледі.",
  "cf.6.q": "Жеке жоба бойынша жасай аласыз ба?",
  "cf.6.a":
    "Иә — сызба, 3D модель немесе сілтеме суреттер бойынша өндіреміз. Әр жобаға фотоесеп және материалдық сертификаттар беріледі.",
  "cf.7.q": "Сапа қалай бақыланады?",
  "cf.7.a":
    "Әр тапсырыс өндіріс кезеңдерінде сапа бақылауынан өтеді, жөнелту алдында толық фотоесеп дайындалады және тапсырысшыға жіберіледі.",
  "cf.8.q": "Тапсырысты қалай беруге болады?",
  "cf.8.a":
    "WhatsApp, Telegram немесе сайттағы форма арқылы жоспар, өлшем немесе сызба жіберіңіз — 48 сағат ішінде коммерциялық ұсыныс дайындаймыз.",

  // ── About 页 ──
  "about.story.h": "Компания тарихы",
  "about.story.p":
    "Hongye Furniture Group 1996 жылы Қытайдың Гуандун провинциясында құрылды. Шамамен 30 жылдық өндірістік тәжірибе негізінде топ Hymebel бренді арқылы Орталық Азия нарығына зауыттық бағамен тікелей жеткізуді ұсынады: жобалау, өндіріс, логистика және монтаж бір ғана жауапкершілікте.",
  "about.factory.h": "Өндіріс базасы",
  "about.factory.lead":
    "Бір алаңда толық цикл: 300 000 м² зауыт, 1000-нан астам жұмысшы, автоматтандырылған кесу және CNC желілері, плита, металл және тігіні цехтары, сапа бақылауы және экспорттық орау. Мұндай масштаб жобалық тапсырыстарды 30-45 күнде орындауға және әр партияның сапасын бірдей ұстауға мүмкіндік береді.",
  "about.certs.h": "Сертификаттар мен сапа",
  "about.certs.p":
    "8 халықаралық сертификат, EAC TR CU 025/2011 сәйкестігі. Әр жобалық жөнелту фотоесеппен және материалдық сертификаттармен толықтырылады.",
  "about.global.h": "Халықаралық жобалар",
  "about.global.p":
    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды, соның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы.",
  "about.gallery.h": "Өндіріс фотогалереясы",

  // ── 产品板块 ──
  "products.viewAll": "Барлық өнімдерді көру",
  "products.count": "өнім",
  "products.specs.h": "Техникалық параметрлер",
  "products.material": "Материал",
  "products.dimensions": "Өлшемдер",
  "products.finish": "Әрлеу",
  "products.features.h": "Артықшылықтары",
  "products.inquiry": "Бұл өнім бойынша сұрау жіберу",
  "products.related.h": "Ұқсас өнімдер",
  "products.cat.h": "Өнімдер",

  // ── 博客 ──
  "blog.title": "Блог",
  "blog.subtitle": "Орталық Азия жиһаз нарығы, FF&E өндірісі және жоба логистикасы туралы сараптамалық мақалалар",
  "blog.readMore": "Толығырақ оқу →",
  "blog.back": "Блогқа оралу",
  "blog.latest.h": "Соңғы мақалалар",
  "blog.latest.cta": "Барлық мақалалар →",
  "home.cases.cta": "Барлық жобаларды көру →",
};

const uz: Dict = {
  "nav.home": "Asosiy sahifa",
  "nav.hotel": "Mehmonxona mebeli",
  "nav.office": "Ofis mebeli",
  "nav.residential": "Villa va turar-joy",
  "nav.healthcare": "Tibbiyot mebeli",
  "nav.education": "Ta'lim mebeli",
  "nav.contact": "Aloqa",
  "nav.about": "Biz haqimizda",
  "nav.cases": "Loyihalar",

  "cases.h": "Tanlangan loyihalar",
  "cases.lead":
    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi. Quyida Markaziy Osiyodagi loyihalarning tanlamasi: mehmonxonalar, ofislar, ta'lim muassasalari va turar-joy obyektlari.",
  "cases.note":
    "Buyurtmachilarning iltimosiga ko'ra loyihalarning bir qismi umumlashtirilgan tavsif bilan taqdim etilgan. To'liq foto-hisobotlar va material sertifikatlari bilan tanishish uchun biz bilan bog'laning.",
  "stat.leadtime": "kun ishlab chiqarish (yuborishgacha)",

  "site.tagline": "Hongye Furniture Group · Markaziy Osiyo",
  "hero.eyebrow": "Oʻzbekiston · Qozogʻiston · Markaziy Osiyo",
  "hero.title": "Markaziy Osiyo bozori uchun premium mebel",
  "hero.subtitle":
    "1996-yildan beri · 1000+ loyiha · 300 000 m² ishlab chiqarish maydoni · 50+ davlat · 8 xalqaro sertifikat. Mehmonxona, ofis va villa loyihalarini loyihalashdan o'rnatishgacha to'liq ta'minlaymiz.",
  "hero.ctaPrimary": "Bepul hisob-kitob olish",
  "hero.ctaSecondary": "Loyihani muhokama qilish",

  "stat.projects": "loyiha",
  "stat.factory": "m² ishlab chiqarish maydoni",
  "stat.since": "yildan beri bozorda",
  "stat.workers": "ishchi ishlab chiqarishda",
  "stat.countries": "davlat",
  "stat.certs": "xalqaro sertifikat",

  "definition":
    "Hymebel — 1996-yilda tashkil etilgan Hongye Furniture Group kompaniyasining Markaziy Osiyo bozori uchun mebel brendi. Mehmonxona, ofis, villa, tibbiyot va ta'lim loyihalari uchun mebelni loyihalash, ishlab chiqarish, yetkazib berish va o'rnatishni to'liq tsiklda amalga oshiradi.",

  "categories.title": "Mahsulot yo'nalishlari",
  "categories.subtitle": "Beshta asosiy yo'nalish — mehmonxonadan ta'lim loyihalarigacha.",

  "why.title": "Nega Hymebel",
  "why.1": "300 000 m² o'z ishlab chiqarish maydonimiz — vositachisiz narx va barqaror sifat",
  "why.2": "EAC TR CU 025/2011 talablariga muvofiqlik va 8 xalqaro sertifikat",
  "why.3": "Ishlab chiqarish 30-45 kun, temiryo'l orqali Markaziy Osiyoga 9-10 kun",
  "why.4": "To'liq tsikl: o'lchov, 3D dizayn, ishlab chiqarish, yetkazib berish, o'rnatish",

  "process.title": "Ish tartibi",
  "process.1": "So'rov va o'lchov",
  "process.2": "3D loyiha va hisob-kitob",
  "process.3": "Ishlab chiqarish va sifat nazorati",
  "process.4": "Yetkazib berish va o'rnatish",

  "case.title": "Xalqaro tajriba",
  "case.body":
    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi — jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi. Har bir loyiha uchun foto-hisobot va material sertifikatlari taqdim etiladi.",
  "case.cta": "Loyihalarni ko'rish",
  "case.imgAlt": "Hymebel jihozlagan premium mehmonxona xonasi",

  "faq.title": "Ko'p beriladigan savollar",
  "faq.1.q": "Hymebel qanday mebel ishlab chiqaradi?",
  "faq.1.a":
    "Mehmonxona, ofis, villa, tibbiyot va ta'lim muassasalari uchun mebelni loyihalaymiz, ishlab chiqaramiz, yetkazib beramiz va o'rnatamiz.",
  "faq.2.q": "Ishlab chiqarish va yetkazib berish muddati qancha?",
  "faq.2.a":
    "Ishlab chiqarish 30-45 kun, temiryo'l orqali Markaziy Osiyoga 9-10 kun (TIR transportida 5-7 kun).",
  "faq.3.q": "EAC sertifikati bormi?",
  "faq.3.a":
    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi, 8 ta xalqaro sertifikatimiz bor. Hujjatlar loyiha bilan birga taqdim etiladi.",
  "faq.4.q": "Minimal buyurtma hajmi qancha?",
  "faq.4.a":
    "Loyiha turiga bog'liq: mehmonxona loyihalari odatda 30-50 xona mebelidan boshlanadi, villa loyihalari xona bo'yicha hisoblanadi.",

  "cta.title": "Loyihangizni muhokama qilamiz",
  "cta.body": "Reja, o'lchov yoki rasm yuboring — 48 soat ichida tijorat taklifini tayyorlaymiz.",

  "contact.title": "Aloqa",
  "contact.subtitle":
    "WhatsApp, Telegram yoki elektron pochta orqali yozing — 24 soat ichida javob beramiz.",

  "contact.primaryRole": "Asosiy aloqa shaxsi",
  "contact.secondaryRole": "Mintaqaviy vakil — Markaziy Osiyo",
  "contact.tagline": "Tijorat va turar-joy makonlari uchun kompleks yechim yetkazib beruvchi",
  "contact.lblTel": "Telefon",
  "contact.lblMobile": "Mobil / WhatsApp",
  "contact.lblEmail": "Email",
  "contact.lblWeb": "Veb-sayt",
  "contact.lblAddress": "Manzil",
  "contact.lblLangs": "Tillar",
  "contact.langsValue": "qozoq, o'zbek, rus",
  "contact.secondaryNote": "Qozoq, o'zbek va rus tillarida so'zlashadi — mintaqaviy loyihalar uchun birlamchi aloqa.",
  "contact.formTitle": "So'rov yuborish",
  "form.name": "Ismingiz",
  "form.company": "Kompaniya",
  "form.country": "Davlat / shahar",
  "form.phone": "Telefon / WhatsApp",
  "form.category": "Loyiha turi",
  "form.message": "Loyiha tavsifi",
  "form.submit": "Yuborish",
  "form.note": "Ma'lumotlaringiz faqat shu so'rov uchun ishlatiladi.",

  "footer.about":
    "Hymebel — Hongye Furniture Group (1996-yildan beri) brendi. Mebel ishlab chiqarish, loyihalash va eksport.",
  "footer.rights": "© 2026 Hongye Furniture Group. Barcha huquqlar himoyalangan.",
  "footer.links": "Bo'limlar",

  "meta.home.title": "Hymebel — Oʻzbekiston va Markaziy Osiyo uchun premium mebel",
  "meta.home.desc":
    "Mehmonxona, ofis, villa, tibbiyot va ta'lim loyihalari uchun mebel: 300 000 m² ishlab chiqarish, EAC muvofiqligi, 30-45 kun ishlab chiqarish. Bepul hisob-kitob oling.",

  // ── 页头/页脚 ──
  "nav.products": "Mahsulotlar",
  "nav.blog": "Blog",
  "footer.cta.tag": "Bepul hisob-kitob",
  "footer.cta.title": "Loyihani boshlashga tayyormisiz?",
  "footer.cta.body": "Katta maslahatchi 24 soat ichida javob beradi.",
  "footer.cta.secondary": "Mahsulotlarni ko'rish",
  "footer.col.products": "Mahsulotlar",
  "footer.col.company": "Kompaniya",
  "footer.col.resources": "Resurslar",
  "footer.col.contact": "Aloqa",
  "footer.factory": "Ishlab chiqarish bazamiz",
  "footer.member": "Hongye Furniture Group a'zosi →",

  // ── 公司 FAQ 板块 ──
  "companyfaq.title": "Kompaniya haqida ko'p beriladigan savollar",
  "companyfaq.subtitle": "Hymebel va Hongye Furniture Group haqida eng ko'p so'raladigan savollar.",
  "cf.1.q": "Hymebel qanday kompaniya?",
  "cf.1.a":
    "Hymebel — 1996-yilda tashkil etilgan Hongye Furniture Group kompaniyasining Markaziy Osiyoga ixtisoslashgan mebel brendi. Mehmonxona, ofis, villa, tibbiyot va ta'lim loyihalari uchun mebelni loyihalashdan ishlab chiqarish, yetkazib berish va o'rnatishgacha to'liq tsiklda yetkazib beramiz.",
  "cf.2.q": "Ishlab chiqarish bazasi qanday?",
  "cf.2.a":
    "O'zimizning 300 000 m² ishlab chiqarish maydoni va 1000 dan ortiq ishchi. Barcha mahsulot o'z zavodimizda ishlab chiqariladi — vositachisiz narx va barqaror sifat.",
  "cf.3.q": "EAC sertifikati bormi?",
  "cf.3.a":
    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi, qo'shimcha 8 ta xalqaro sertifikatimiz bor. To'liq hujjatlar har bir loyiha bilan beriladi.",
  "cf.4.q": "Ishlab chiqarish va yetkazib berish muddati qanday?",
  "cf.4.a":
    "Buyurtma hajmiga qarab ishlab chiqarish odatda 30-45 kun. Temiryo'l orqali Markaziy Osiyoga 9-10 kun, TIR transportida 5-7 kun.",
  "cf.5.q": "Minimal buyurtma hajmi qancha?",
  "cf.5.a":
    "Loyiha turiga bog'liq: mehmonxona loyihalari odatda 30-50 xonalik mebildan boshlanadi, villa loyihalari xona bo'yicha hisoblanadi.",
  "cf.6.q": "Loyihaviy buyurtma bo'yicha ishlaymisizmi?",
  "cf.6.a":
    "Ha — chizma, 3D model yoki havola rasmlar bo'yicha ishlab chiqaramiz. Har bir loyiha uchun foto-hisobot va material sertifikatlari beriladi.",
  "cf.7.q": "Sifat qanday nazorat qilinadi?",
  "cf.7.a":
    "Har bir buyurtma ishlab chiqarish bosqichlarida sifat nazoratidan o'tadi, yuborishdan oldin to'liq foto-hisobot tayyorlanib, buyurtmachiga yuboriladi.",
  "cf.8.q": "Buyurtmani qanday berish mumkin?",
  "cf.8.a":
    "WhatsApp, Telegram yoki saytdagi forma orqali reja, o'lchov yoki chizma yuboring — 48 soat ichida tijorat taklifini tayyorlaymiz.",

  // ── About 页 ──
  "about.story.h": "Kompaniya tarixi",
  "about.story.p":
    "Hongye Furniture Group 1996-yilda Xitoyning Guandun provinsiyasida tashkil etilgan. 30 yilga yaqin ishlab chiqarish tajribasi asosida guruh Hymebel brendi orqali Markaziy Osiyo bozoriga zavod narxlarida to'g'ridan-to'g'ri yetkazib berishni taklif qiladi: loyihalash, ishlab chiqarish, logistika va o'rnatish bitta javobgarlikda.",
  "about.factory.h": "Ishlab chiqarish bazasi",
  "about.factory.lead":
    "Bitta maydonda to'liq tsikl: 300 000 m² zavod, 1000 dan ortiq ishchi, avtomatlashtirilgan kesish va CNC liniyalari, plita, metall va tikuv sexlari, sifat nazorati va eksport qadoqlash. Bunday masshtab loyiha buyurtmalarini 30-45 kunda bajarish va har bir partiya sifatini bir xil darajada saqlash imkonini beradi.",
  "about.certs.h": "Sertifikatlar va sifat",
  "about.certs.p":
    "8 ta xalqaro sertifikat, EAC TR CU 025/2011 muvofiqligi. Har bir loyihaviy yuborish foto-hisobot va material sertifikatlari bilan to'ldiriladi.",
  "about.global.h": "Xalqaro loyihalar",
  "about.global.p":
    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi, jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi.",
  "about.gallery.h": "Zavod fotogalereyasi",

  // ── 产品板块 ──
  "products.viewAll": "Barcha mahsulotlarni ko'rish",
  "products.count": "mahsulot",
  "products.specs.h": "Texnik parametrlar",
  "products.material": "Material",
  "products.dimensions": "O'lchamlar",
  "products.finish": "Yakuniy qoplama",
  "products.features.h": "Afzalliklari",
  "products.inquiry": "Bu mahsulot bo'yicha so'rov yuborish",
  "products.related.h": "O'xshash mahsulotlar",
  "products.cat.h": "Mahsulotlar",

  // ── 博客 ──
  "blog.title": "Blog",
  "blog.subtitle": "Markaziy Osiyo mebel bozori, FF&E ishlab chiqarish va loyiha logistikasi haqida ekspert maqolalari",
  "blog.readMore": "To'liq o'qish →",
  "blog.back": "Blogga qaytish",
  "blog.latest.h": "So'nggi maqolalar",
  "blog.latest.cta": "Barcha maqolalar →",
  "home.cases.cta": "Barcha loyihalarni ko'rish →",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.hotel": "Hotel Furniture",
  "nav.office": "Office Furniture",
  "nav.residential": "Villa & Residential",
  "nav.healthcare": "Healthcare Furniture",
  "nav.education": "Education Furniture",
  "nav.contact": "Contact",
  "nav.about": "About",
  "nav.cases": "Projects",

  "cases.h": "Selected projects",
  "cases.lead":
    "1,000+ projects delivered across 50+ countries. Below is a selection of Central Asian projects: hotels, offices, educational institutions and residential developments.",
  "cases.note":
    "Some projects are presented with generalized descriptions at the client's request. Full photo reports and material certificates are available upon request.",
  "stat.leadtime": "days production (to dispatch)",

  "site.tagline": "Hongye Furniture Group · Central Asia",
  "hero.eyebrow": "Kazakhstan · Uzbekistan · Central Asia",
  "hero.title": "Premium furniture for Central Asia's hospitality, office and residential projects",
  "hero.subtitle":
    "Since 1996 · 1,000+ projects · 300,000 m² factory · 50+ countries · 8 international certifications. Full-cycle FF&E — from design and production to delivery and installation.",
  "hero.ctaPrimary": "Get a free quote",
  "hero.ctaSecondary": "Discuss your project",

  "stat.projects": "projects",
  "stat.factory": "m² factory area",
  "stat.since": "years in the market",
  "stat.workers": "workers in production",
  "stat.countries": "countries",
  "stat.certs": "international certifications",

  "definition":
    "Hymebel is the Central Asia brand of Hongye Furniture Group, founded in 1996. The company delivers full-cycle furniture for hotels, offices, villas, healthcare and education projects — from design and manufacturing to delivery and installation.",

  "categories.title": "Product lines",
  "categories.subtitle": "Five core lines — from hospitality to education projects.",

  "why.title": "Why Hymebel",
  "why.1": "300,000 m² own factory — direct pricing and consistent quality",
  "why.2": "EAC TR CU 025/2011 compliance and 8 international certifications",
  "why.3": "Production in 30-45 days, plus 9-10 days by rail to Central Asia",
  "why.4": "Turnkey: survey, 3D design, production, delivery, installation",

  "process.title": "How we work",
  "process.1": "Enquiry & site survey",
  "process.2": "3D design & quotation",
  "process.3": "Production & quality control",
  "process.4": "Delivery & installation",

  "case.title": "International track record",
  "case.body":
    "1,000+ projects delivered across 50+ countries, including the Hilton Tashkent hotel project in Uzbekistan. Every project comes with a photo report and material certificates.",
  "case.cta": "View projects",
  "case.imgAlt": "Premium hotel guest room furnished by Hymebel",

  "faq.title": "Frequently asked questions",
  "faq.1.q": "What furniture does Hymebel supply?",
  "faq.1.a":
    "We design, manufacture, deliver and install furniture for hotels, offices, villas, hospitals and schools.",
  "faq.2.q": "What are your production and delivery lead times?",
  "faq.2.a":
    "Production takes 30-45 days, plus 9-10 days by rail to Central Asia (5-7 days by TIR truck).",
  "faq.3.q": "Are you EAC compliant?",
  "faq.3.a":
    "Yes — our production meets EAC TR CU 025/2011 and we hold 8 international certifications. Documentation is delivered with the project.",
  "faq.4.q": "What is your minimum order quantity?",
  "faq.4.a":
    "It depends on the project type: hotel projects usually start from furniture for 30-50 rooms, while villa projects are quoted room by room.",

  "cta.title": "Let's discuss your project",
  "cta.body":
    "Send your plans, measurements or drawings — we prepare a commercial proposal within 48 hours.",

  "contact.title": "Contact us",
  "contact.subtitle": "Reach us on WhatsApp, Telegram or email — we reply within 24 hours.",

  "contact.primaryRole": "Primary contact",
  "contact.secondaryRole": "Regional representative — Central Asia",
  "contact.tagline": "One-stop solution provider for commercial and residential space",
  "contact.lblTel": "Tel",
  "contact.lblMobile": "Mobile / WhatsApp",
  "contact.lblEmail": "Email",
  "contact.lblWeb": "Web",
  "contact.lblAddress": "Address",
  "contact.lblLangs": "Languages",
  "contact.langsValue": "Kazakh, Uzbek, Russian",
  "contact.secondaryNote": "Speaks Kazakh, Uzbek and Russian — first point of contact for regional projects.",
  "contact.formTitle": "Send an enquiry",
  "form.name": "Your name",
  "form.company": "Company",
  "form.country": "Country / city",
  "form.phone": "Phone / WhatsApp",
  "form.category": "Project type",
  "form.message": "Project details",
  "form.submit": "Send enquiry",
  "form.note": "Your details are used only to answer this enquiry.",

  "footer.about":
    "Hymebel — a Hongye Furniture Group brand (since 1996). Furniture manufacturing, project design and export.",
  "footer.rights": "© 2026 Hongye Furniture Group. All rights reserved.",
  "footer.links": "Sections",

  "meta.home.title": "Hymebel — Premium Furniture for Kazakhstan & Central Asia",
  "meta.home.desc":
    "Furniture for hotel, office, villa, healthcare and education projects: 300,000 m² factory, EAC compliance, 30-45 day production. Request a free quote.",

  // ── Header/Footer ──
  "nav.products": "Products",
  "nav.blog": "Blog",
  "footer.cta.tag": "Free quote",
  "footer.cta.title": "Ready to start your project?",
  "footer.cta.body": "A senior consultant will reply within 24 hours.",
  "footer.cta.secondary": "View products",
  "footer.col.products": "Products",
  "footer.col.company": "Company",
  "footer.col.resources": "Resources",
  "footer.col.contact": "Contact",
  "footer.factory": "Our factory",
  "footer.member": "Member of Hongye Furniture Group →",

  // ── Company FAQ section (homepage) ──
  "companyfaq.title": "Company FAQ",
  "companyfaq.subtitle": "The most frequently asked questions about Hymebel and Hongye Furniture Group.",
  "cf.1.q": "What kind of company is Hymebel?",
  "cf.1.a":
    "Hymebel is the Central Asia brand of Hongye Furniture Group, founded in 1996. We deliver furniture for hotel, office, villa, healthcare and education projects on a full-cycle basis — from design to production, delivery and installation.",
  "cf.2.q": "What is your production base like?",
  "cf.2.a":
    "Our own 300,000 m² factory with 1,000+ workers. All products are manufactured in-house — direct pricing with no middlemen and consistent quality.",
  "cf.3.q": "Do you hold EAC certification?",
  "cf.3.a":
    "Yes — production meets EAC TR CU 025/2011, and we hold 8 additional international certifications. Full documentation is delivered with every project.",
  "cf.4.q": "What are your production and delivery lead times?",
  "cf.4.a":
    "Production typically takes 30-45 days depending on order size. Rail delivery to Central Asia takes 9-10 days, TIR trucking 5-7 days.",
  "cf.5.q": "What is your minimum order quantity?",
  "cf.5.a":
    "It depends on the project type: hotel projects usually start from furniture for 30-50 rooms, while villa projects are quoted room by room.",
  "cf.6.q": "Do you build custom project orders?",
  "cf.6.a":
    "Yes — we manufacture from drawings, 3D models or reference images. Every project comes with a photo report and material certificates.",
  "cf.7.q": "How is quality controlled?",
  "cf.7.a":
    "Every order passes quality checks at each production stage, and a complete photo report is prepared and shared before shipment.",
  "cf.8.q": "How do I place an order?",
  "cf.8.a":
    "Send your plan, measurements or drawings via WhatsApp, Telegram or the website form — we prepare a commercial proposal within 48 hours.",

  // ── About page ──
  "about.story.h": "Company history",
  "about.story.p":
    "Hongye Furniture Group was founded in 1996 in Guangdong, China. Building on nearly 30 years of manufacturing experience, the group serves the Central Asia market under the Hymebel brand with direct factory pricing: design, production, logistics and installation under a single point of responsibility.",
  "about.factory.h": "Production base",
  "about.factory.lead":
    "A full cycle on one site: a 300,000 m² factory with 1,000+ workers, automated cutting and CNC lines, panel, metal and upholstery shops, quality control and export packing. This scale is what allows project orders to be completed in 30-45 days with consistent quality across every batch.",
  "about.certs.h": "Certifications & quality",
  "about.certs.p":
    "8 international certifications and EAC TR CU 025/2011 compliance. Every project shipment is backed by a photo report and material certificates.",
  "about.global.h": "International projects",
  "about.global.p":
    "1,000+ projects delivered across 50+ countries, including the Hilton Tashkent hotel project in Uzbekistan.",
  "about.gallery.h": "Factory photo gallery",

  // ── Products ──
  "products.viewAll": "View all products",
  "products.count": "products",
  "products.specs.h": "Technical specifications",
  "products.material": "Material",
  "products.dimensions": "Dimensions",
  "products.finish": "Finish",
  "products.features.h": "Key advantages",
  "products.inquiry": "Enquire about this product",
  "products.related.h": "Related products",
  "products.cat.h": "Products",

  // ── Blog ──
  "blog.title": "Blog",
  "blog.subtitle": "Expert articles on the Central Asia furniture market, FF&E manufacturing and project logistics",
  "blog.readMore": "Read more →",
  "blog.back": "Back to blog",
  "blog.latest.h": "Latest articles",
  "blog.latest.cta": "All articles →",
  "home.cases.cta": "View all projects →",
};

export const ui: Record<Lang, Dict> = { kk, uz, en };

export const company = {
  legal: "Hongye Furniture Group",
  legalFull: "Hongye Furniture Group Co. Ltd",
  founded: "1996",
  projects: "1,000+",
  factory: "300,000",
  workers: "1,000+",
  countries: "50+",
  certs: "8",
  /** 主渠道（2026-10-02 起主联系人为 Edward Tse；中亚三语站前期效果由其本人盯） */
  whatsapp: "+8613702279783",
  telegram: "hysdfurniture",
  email: "h@hysdfurniture.com",
  tel: "+86-750-8888886",
  web: "www.hysdfurniture.com",
  webUrl: "https://www.hysdfurniture.com",
  address: "No.1 Section, Heshan Industrial City, Jiangmen, Guangdong, China",
  /** 主联系人（商务总负责） */
  primary: {
    name: "Edward Tse",
    title: "Senior VP",
    entity: "Hongye Furniture Group Co. Ltd",
    mobile: "+8613702279783",
    mobileDisplay: "86-137 0227 9783",
    email: "h@hysdfurniture.com",
  },
  /** 辅助联系人（中亚区域：母语校审 + 当地客户对接） */
  secondary: {
    name: "Sarhet",
    email: "z@hysdfurniture.com",
  },
  web3formsKey: "b08f8db9-03cc-4f84-99ed-2e651cddd7ee",
  /** GA4 衡量 ID：为空则不注入任何统计脚本（中亚站 hymebel.com，2026-10-02 开通） */
  gaId: "G-P3E4FQ8LK5",
};

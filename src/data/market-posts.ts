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

/**
 * MN/RU market-native posts — first batch, 2026-10-08 (6 MN + 4 RU).
 * PAA-BOOST-2026-10-08: each entry carries 6 question-form sections,
 * 7 FAQs and 6 takeaways (People-Also-Ask / GEO shape).
 *
 * Scope rules applied to every entry below:
 * - One market per record. No translation mirroring, no shared text between MN
 *   and RU, no hreflang pairing for articles.
 * - Written in the local market language only; the regional English blog page
 *   carries English-speaking enquiries.
 * - No statement about delivery time, certification, capacity, project count or
 *   commercial minimums. Those are confirmed against project conditions only, so
 *   the text asks the reader for drawings, BOQs and room lists instead.
 * - Case material is company-library reference imagery, never described as a
 *   delivered local project in Mongolia or Russia.
 *
 * Image provenance: no new photography was commissioned for this batch. Each
 * entry reuses an existing library asset that already matches the article's
 * subject — hotel guest-room checklist, office and residential product scenes,
 * material comparison, factory assembly and hospitality reference shots. The
 * assets carry no third-party branding and no performance claims.
 */
export const marketPosts: MarketPost[] = [
  {
    id: "hotel-furniture-supplier-evaluation-uzbekistan",
    market: "uz",
    title: "Mehmonxona mebeli yetkazib beruvchisini qanday baholash kerak: tekshiruv ro'yxati",
    tag: "Mehmonxona",
    excerpt: "Yetkazib beruvchini zavod quvvati, namuna intizomi, loyiha tajribasi, hujjatlar to'liqligi va taklif shaffofligi bo'yicha baholash tartibi hamda har bir mezon uchun amaliy tekshiruv savollari.",
    date: "2026-10-30",
    readingMin: 9,
    image: "/images/blog/guestroom-checklist.webp",
    imageAlt: "Mehmonxona mebeli yetkazib beruvchisini baholash uchun tekshiruv ro'yxati va material namunalari stol ustida",
    definition:
      "Mehmonxona mebeli yetkazib beruvchisini baholash — zavod quvvati, namuna intizomi, loyiha tajribasi, hujjatlar to'liqligi va taklif shaffofligini yagona tekshiruv ro'yxati bo'yicha o'lchaydigan jarayon. Bu baholash narxni emas, buyurtmani kelishilgan sifatda va kelishilgan hajmda bajarish qobiliyatini aniqlaydi, shuning uchun u takliflarni yakuniy taqqoslashdan oldin o'tkaziladi. Ro'yxatdan xarid bo'limi, loyiha menejeri va dizayner birgalikda foydalanadi, natija esa ball jadvali va yozma xulosa sifatida qayd etiladi.",
    takeaways: [
      "Zavodni savdo vositachisidan ajratish uchun ishlab chiqarish manzilini, sex egasini va qaysi operatsiya o'z ichida bajarilishini yozma so'rang.",
      "Har bir mebel turi uchun imzolangan o'lchovli namuna saqlang va seriyali partiyani faqat shu namuna bilan qabul qiling.",
      "Loyiha tajribasini obyekt nomi bilan emas, mebel turkumi, xona hajmi va o'rnatish sanasi bilan so'rang.",
      "Material varaqasi, sinov hisoboti, qadoqlash sxemasi va ehtiyot qismlar ro'yxatini taklif bilan birga talab qiling.",
      "Javob tezligini emas, javobning chizma, o'lchov yoki namuna bilan tasdiqlanishini baholang.",
      "Taklifni umumiy summa bo'yicha emas, yetkazib berish sharti, qadoqlash, bojxona va o'rnatish kiritilganiga qarab satrma-satr solishtiring.",
    ],
    sections: [
      {
        heading: "Yetkazib beruvchi zavodmi yoki savdo vositachisimi — buni qanday aniqlash mumkin?",
        paragraphs: [
          "Birinchi savol ishlab chiqarish qayerda va kimning nazorati ostida bajarilishiga tegishli bo'lishi kerak. Zavod o'z sexining manzilini, uchastkalar kesimini va qaysi operatsiyani o'zi bajarishini aniq aytadi, vositachi esa ko'pincha umumiy javob berib, aniq manzilni keyinga qoldiradi. Ishlab chiqarish manzili taklif varag'ida va shartnomada ko'rsatilsa, keyinchalik partiyani kuzatish ancha osonlashadi.",
          "Sexni ko'rish yoki video orqali kuzatish kesish, qirra yopish, yig'ish va qoplash uchastkalarining haqiqatan mavjudligini ko'rsatadi. Qaysi qismlar tashqi buyurtmaga berilishini ham so'rang: metall, shisha yoki mato qoplamasi boshqa joyda bajarilsa, zanjirda qo'shimcha nazorat nuqtasi paydo bo'ladi. Bu javob yozma bo'lsa, uni keyingi baholashda dalil sifatida ishlatish mumkin.",
          "Quvvat haqida gapirganda oylik hajm emas, bir vaqtda ochiq turgan buyurtmalar soni muhimroq. Yangi buyurtma qaysi davrga rejalashtirilishini va qaysi uchastka eng ko'p yuklanganini so'rang. Bu ma'lumot yetkazib berish grafigini baholashda narxdan ko'ra ko'proq narsa beradi.",
        ],
      },
      {
        heading: "Namuna bilan seriyali mahsulot bir xil bo'lishini qanday tekshirish kerak?",
        paragraphs: [
          "Namuna tasdiqlanganda uning faqat tashqi ko'rinishi emas, o'lchami, qirra yechimi, furnitura turi va mato partiyasi ham yozib qo'yilishi kerak. Imzolangan namuna ikki nusxada saqlanadi: biri buyurtmachida, biri zavodda. Seriyali partiya qabul qilinganda taqqoslash shu nusxa bilan amalga oshiriladi, og'zaki kelishuv bilan emas.",
          "Rang va ohang farqi ko'pincha turli partiyadagi mato yoki qoplamadan kelib chiqadi, shuning uchun namuna varaqasida partiya raqami va rang kodi bo'lishi shart. Bir xil kod ikki xil partiyada bir xil ko'rinishni kafolatlamaydi, shu sababli qo'shimcha partiya uchun yangi namuna tasdiqlanadi. Bu talab yozilmasa, keyingi xona guruhi oldingi guruhdan sezilarli farq qilishi mumkin.",
          "Ruxsat etilgan farq oldindan kelishiladi: o'lchamda odatda bir necha millimetr, mato ohangida esa vizual taqqoslash asosida. Bu chegaralar hujjatda yozilmasa, qabul paytida har bir kichik farq alohida munozaraga aylanadi. Namuna bilan birga o'lchov protokoli saqlansa, nizo paytida tayanch bo'ladi.",
        ],
      },
      {
        heading: "Mehmonxona loyihalaridagi tajribani qanday baholash kerak?",
        paragraphs: [
          "Tajriba ro'yxati o'zi dalil emas, shuning uchun har bir loyiha bo'yicha uchta savol beriladi: qanday turdagi mebel yetkazilgan, obyekt qachon foydalanishga topshirilgan va yetkazib beruvchi qaysi qismga javobgar bo'lgan. Faqat mebel sotilganmi yoki o'lchov, namuna, yetkazib berish va o'rnatish ham bajarilganmi — bu farq hal qiluvchi ahamiyatga ega.",
          "Mehmonxona sharoiti uy mebelidan farq qiladi: eshik kuniga ko'p marta ochiladi, chamadon qirralarga uriladi, tozalash vositalari sirtga ta'sir qiladi. Shu sababli lobbi, restoran va xona kabi turkumlar bo'yicha alohida tajriba so'raladi. Javobda mebel guruhi va joylashuv sxemasi ko'rsatilsa, taqqoslash aniqroq bo'ladi.",
          "Toshkent, O'zbekistondagi Hilton Tashkent kabi obyektning xona va lobbi zonalari makon hajmi bo'yicha tayanch sifatida qaralishi mumkin. Bu taqqoslash faqat mebel guruhlari va joylashuv tamoyillariga tegishli, sifat kafolati sifatida talqin qilinmaydi. Har bir loyihada o'lchov va talablar joyning o'zidan olinadi.",
        ],
      },
      {
        heading: "Qaysi hujjatlar taklif bilan birga bo'lishi kerak?",
        paragraphs: [
          "Material varaqasi har bir pozitsiya uchun qatlam turi, qalinligi, qirra yechimi, sirt ishlovi, mato tarkibi va zichligini ko'rsatishi kerak. Bu maydonlar bo'sh qolsa, ikkita taklifni bir xil asosda solishtirish mumkin bo'lmaydi. Varaqada material nomi bilan birga rang kodi ham yozilishi kerak.",
          "Sinov hisoboti qaysi namuna bo'yicha va qaysi laboratoriya tomonidan berilganini ko'rsatishi kerak, faqat natija satri yetarli emas. Namlik, yonishga chidamlilik va sirtga ta'sir bo'yicha talablar loyiha shartlariga bog'lanadi, shuning uchun hisobot sanasi ham muhim. Hisobotdagi namuna modeli buyurtmadagi model bilan bir xil bo'lmasa, hujjat dalil bo'lmaydi.",
          "Qadoqlash sxemasi, yuk belgilari, ehtiyot qismlar ro'yxati, yig'ish yo'riqnomasi va kafolat shartlari taklif paketining majburiy qismi hisoblanadi. Qadoqlash sxemasi quti o'lchami, og'irligi va joylashuvini ko'rsatsa, saqlash maydoni va yuklash tartibi oldindan rejalashtiriladi. Bu hujjatlar keyinroq emas, taklif bilan birga so'raladi.",
        ],
      },
      {
        heading: "Muloqot va javob tezligi nimani ko'rsatadi?",
        paragraphs: [
          "Javob tezligi o'zi sifat belgisi emas, muhimi javobning aniqligi va uni tasdiqlovchi hujjatdir. Texnik savolga chizma, o'lchov yoki namuna bilan javob berilgan bo'lsa, yetkazib beruvchi mavzuni tushunayotgani ko'rinadi. Faqat umumiy tasdiq bilan kelgan tez javob keyinchalik ko'p savol tug'diradi.",
          "Bitta mas'ul shaxs va bitta yozishma tili belgilanishi kerak, shunda savol va javob yo'qolmaydi. O'zgarishlar kim tomonidan va qaysi sanada so'ragani yozib borilsa, keyinchalik qaysi versiya kuchda ekanini aniqlash oson bo'ladi. Yozishma tarixi shartnoma ilovasi sifatida saqlansa, nizo paytida tayanch bo'ladi.",
          "Chizma va spetsifikatsiya bir tilda, o'lchov birligi bir xil tizimda bo'lishi kerak. Tarjima qilingan javobda o'lchov birligi tushib qolsa, u keyinchalik xato buyurtmaga aylanadi. Shu sababli har bir yuborilgan hujjatda birlik va sana ko'rsatilishi talab qilinadi.",
        ],
      },
      {
        heading: "Taklif narxi shaffofligini qanday tekshirish kerak?",
        paragraphs: [
          "Shaffof taklif har bir pozitsiya uchun birlik narxini, miqdorni va nimani o'z ichiga olmasligini alohida ko'rsatadi. Yetkazib berish sharti qaysi nuqtadan keyin xarajat va javobgarlik o'tishini aniq yozishi kerak. Qadoqlash, yuklash, sug'urta, bojxona va o'rnatish alohida satr bo'lsa, taqqoslash to'g'ri bo'ladi.",
          "Taklifning amal qilish muddati, to'lov grafigi va narxni o'zgartirish shartlari ham yozilishi kerak. Material yoki kurs o'zgarganda narx qanday yangilanishi oldindan kelishilmasa, shartnoma bosqichida kutilmagan o'sish paydo bo'ladi. Bu shartlar narx jadvali bilan bir varaqda turishi ma'qul.",
          "Yakuniy qaror uchun mezonlar oldindan og'irlik bilan belgilanadi: ishlab chiqarish qobiliyati, namuna intizomi, hujjatlar to'liqligi, muloqot va narx. Har bir mezonga ball qo'yilib, izoh yoziladi, natija esa yagona jadvalda jamlanadi. Ball jadvali saqlansa, qaror asosli bo'ladi va keyingi loyihada takrorlanadi.",
        ],
      },
    ],
    faqs: [
      {
        question: "Zavodni tekshirish uchun albatta sexga borish shartmi?",
        answer:
          "Shart emas, lekin faqat hujjat bilan cheklangan tekshiruv kamroq ma'lumot beradi. Ishlab chiqarish manzili, uchastkalar kesimi va tashqi buyurtmaga berilgan qismlar yozma tasdiqlansa, masofadan baholash ancha ishonchli bo'ladi.",
      },
      {
        question: "Namunani kim tasdiqlashi kerak?",
        answer:
          "Namunani buyurtmachi tomondan dizayner va loyiha menejeri birgalikda, zavod tomondan esa ishlab chiqarish mas'uli tasdiqlaydi. Imzo sanasi va namuna raqami ikkala nusxada bir xil bo'lishi kerak, aks holda keyingi taqqoslashda qaysi nusxa asos ekani noma'lum bo'ladi.",
      },
      {
        question: "Tajriba ro'yxati qanchalik muhim?",
        answer:
          "Ro'yxat faqat suhbat uchun asos bo'ladi, o'zi sifat kafolati emas. Har bir loyiha bo'yicha mebel turkumi, hajmi va yetkazib beruvchining javobgarlik doirasi aniqlansa, tajriba haqiqiy mezonga aylanadi.",
      },
      {
        question: "Taklifdagi eng past narx nima uchun xavfli hisoblanadi?",
        answer:
          "Past narx ko'pincha qadoqlash, bojxona yoki o'rnatish kabi satrlarning taklifdan tushib qolganini bildiradi. Shu sababli takliflar bir xil hajm, bir xil yetkazib berish sharti va bir xil xizmat doirasi bo'yicha solishtiriladi.",
      },
      {
        question: "Baholash natijasini qanday hujjatlashtirish kerak?",
        answer:
          "Har bir mezon bo'yicha ball, izoh va dalil ko'rsatiladi, xulosa yozma shaklda saqlanadi. Bu hujjat shartnoma shartlarini belgilashda va keyinchalik bahsli holatlarda tayanch bo'ladi.",
      },
    ],
  },
  {
    id: "hotel-furniture-production-installation-stages-uzbekistan",
    market: "uz",
    title: "Mehmonxona mebeli buyurtmasi qanday bosqichlardan o'tadi: tasdiqlashdan o'rnatishgacha",
    tag: "Mehmonxona",
    excerpt: "Buyurtma tasdiqlangandan kalit topshirilgunga qadar bosqichlar, har bir bosqichda buyurtmachi va zavodning vazifalari hamda topshiriladigan hujjatlar ro'yxati.",
    date: "2026-10-30",
    readingMin: 9,
    image: "/images/blog/ffe-timeline.webp",
    imageAlt: "Mehmonxona mebeli buyurtmasi bosqichlari: tasdiqlashdan o'rnatishgacha bo'lgan jarayon jadvali",
    definition:
      "Mehmonxona mebeli buyurtmasining jarayoni — tasdiqlash, chizma va namuna, seriyali ishlab chiqarish, zavod tekshiruvi, tashish, o'rnatish va topshirish bosqichlaridan iborat yagona zanjir. Har bir bosqichda qaror qabul qiluvchi tomon, bajariladigan ish va topshiriladigan hujjat belgilangan bo'lsa, keyingi bosqich faqat oldingi tasdiqqa tayanadi. Jarayonni loyiha menejeri, zavodning eksport bo'limi va pudratchi birgalikda boshqaradi, chunki kechikish odatda bitta bosqichda emas, ikki bosqich orasidagi tasdiqda yuzaga keladi.",
    takeaways: [
      "Buyurtma tasdiqlanganda spetsifikatsiya versiyasi, miqdor va yetkazib berish sharti bitta hujjatda qulflanadi.",
      "Har bir chizma va namuna imzo bilan tasdiqlanadi, tasdiqlanmagan detal seriyali ishlab chiqarishga kirmaydi.",
      "Oraliq nazoratni partiya o'rtasida o'tkazing, oxiriga qoldirilsa tuzatish butun partiyaga tegadi.",
      "Zavod tekshiruvi va qadoqlash sxemasi yuklashdan oldin birgalikda yopiladi.",
      "Tashish va bojxona uchun hujjatlar ro'yxati oldindan kelishiladi va har biriga mas'ul tomon yoziladi.",
      "O'rnatishdan keyin kamchiliklar ro'yxati tuzilib, ehtiyot qismlar va yo'riqnoma bilan birga topshiriladi.",
    ],
    sections: [
      {
        heading: "Buyurtma tasdiqlanganda qaysi shartlar qat'iy belgilanadi?",
        paragraphs: [
          "Tasdiqlash bosqichida spetsifikatsiya versiyasi, xona turlari bo'yicha miqdor, yetkazib berish sharti va to'lov grafigi bitta hujjatda birlashtiriladi. Bu hujjat keyingi barcha o'zgarishlar uchun tayanch bo'ladi, shuning uchun unga sana va versiya raqami qo'yiladi. Bir xil nomdagi ikki fayl qolsa, sex qaysi versiya bo'yicha ishlashini bilmay qoladi.",
          "Buyurtmachi tomondan xarid va loyiha menejeri, zavod tomondan eksport va ishlab chiqarish mas'uli imzo qo'yadi. Kim qaysi qarorni tasdiqlashi yozilmasa, keyinchalik bir xil savol ikki tomonda ikki xil javob oladi. Mas'ullar ro'yxati shartnoma ilovasida ko'rsatilsa, aloqa uzilmaydi.",
          "O'zgarish tartibi ham shu bosqichda kelishiladi: qaysi o'zgarish narx va muddatga ta'sir qiladi, qaysi biri faqat hujjatni yangilaydi. Yozma tartib bo'lsa, og'zaki iltimoslar buyurtma hajmiga tasodifan qo'shilib ketmaydi. Har bir o'zgarish alohida varaqda qayd etiladi va tasdiqlanadi.",
        ],
      },
      {
        heading: "Chizma va namuna qanday tasdiqlanadi?",
        paragraphs: [
          "Seriyali ishlab chiqarishdan oldin har bir mebel turi uchun o'lchovli chizma va, kerak bo'lsa, jismoniy namuna tayyorlanadi. Chizmada tashqi o'lcham, devorga mahkamlash nuqtasi, furnitura joyi va qirra yechimi ko'rsatiladi. Chizma xonadagi haqiqiy o'lchov bilan solishtirilmasa, joyida tuzatish talabi paydo bo'ladi.",
          "Namuna tasdiqlanganda unga namuna raqami, sana va material partiyasi yoziladi, so'ngra ikki nusxa imzolanadi. Tasdiqlangan namuna zavodda saqlanadi va seriyali partiya shu nusxa bilan taqqoslanadi. Namuna faqat rang uchun emas, qirra va furnitura uchun ham tayanch hisoblanadi.",
          "Tasdiqdan keyin o'zgartirish kiritilsa, u yangi versiya sifatida rasmiylashtiriladi, eski chizma bekor qilinadi. Aks holda sexdagi eski fayl bilan yangi ko'rsatma bir vaqtda ishlatilib, partiyada farq paydo bo'ladi. Bekor qilingan chizma arxivda saqlanadi, lekin ish uchun ishlatilmaydi.",
        ],
      },
      {
        heading: "Seriyali ishlab chiqarish va oraliq nazorat qanday o'tadi?",
        paragraphs: [
          "Ishlab chiqarish partiyalarga bo'linadi, har bir partiya xona turi yoki mebel turkumiga bog'lanadi. Zavod kesish, qirra yopish, yig'ish va qoplash bosqichlarida nazorat nuqtalarini belgilaydi va natijani yozma qayd etadi. Partiya raqami qadoqdagi belgi bilan bir xil bo'lsa, keyinchalik qaysi buyum qaysi partiyadan chiqqanini aniqlash oson.",
          "Oraliq nazorat partiya tugagandan keyin emas, o'rtasida o'tkaziladi. Birinchi buyumlardan olingan o'lcham va sifat natijasi keyingi buyumlar uchun sozlama bo'ladi, shu sababli dastlabki namunalar alohida tekshiriladi. Nazorat hisobotida chetlanish va u qanday tuzatilgani yozilishi kerak.",
          "Buyurtmachi tomondan bu bosqichdagi vazifa — tasdiqlangan namunadan chetlanish sezilsa, darhol yozma xabar berish va qarorni kechiktirmaslik. Har bir kechiktirilgan javob ishlab chiqarish grafigini butun partiya bo'ylab surib yuboradi. Qaror yozma bo'lsa, u keyingi partiyalar uchun ham ko'rsatma bo'ladi.",
        ],
      },
      {
        heading: "Zavod tekshiruvi va qadoqlashda nima yopiladi?",
        paragraphs: [
          "Yuklashdan oldin tayyor partiya miqdor, o'lcham, rang va yig'ish to'liqligi bo'yicha tekshiriladi. Tekshiruv natijasi fotosurat va o'lchov yozuvi bilan qayd etiladi, shunda yukdan keyin paydo bo'lgan zarar bilan zavod javobgarligi ajratiladi. Tekshiruvda topilgan kamchilik yuklashdan oldin tuzatilishi kerak.",
          "Qadoqlash sxemasi quti o'lchami, og'irligi, ichki mahkamlash usuli va yuk belgilarini ko'rsatadi. Burchak himoyasi, namlikdan saqlash va qavatma-qavat joylashuv tartibi alohida yoziladi, chunki bu ma'lumot ochish va saqlash bosqichida kerak bo'ladi. Quti ustidagi belgi sxema bilan mos bo'lmasa, obyektda qidiruv vaqt yo'qotadi.",
          "Topshiriladigan hujjatlar: qadoqlash ro'yxati, yuk belgilari sxemasi, yig'ish yo'riqnomasi va ehtiyot qismlar ro'yxati. Yuk hujjatlari bilan qadoqlash ro'yxati bir xil bo'lmasa, bojxonada va qabulda ortiqcha tekshiruv paydo bo'ladi. Har bir hujjatning nusxasi elektron shaklda ham yuboriladi.",
        ],
      },
      {
        heading: "Tashish va bojxona rasmiylashtirishda kim nima qiladi?",
        paragraphs: [
          "Tashish sharti shartnomada aniq yozilishi kerak: qaysi nuqtadan keyin xarajat va javobgarlik buyurtmachiga o'tadi. Shu nuqta bilan birga sug'urta, yuklash usuli va yetkazib berish manzili ham belgilanadi. Shart nomlanmasa, yo'ldagi zarar uchun javobgar tomon nizoda aniqlanadi.",
          "Zavod tomondan yuk hujjatlari, qadoqlash ro'yxati va kelib chiqish sertifikati tayyorlanadi, buyurtmachi tomondan bojxona brokeri, import ruxsatlari va mahalliy tashish tashkil etiladi. Har bir hujjat uchun mas'ul shaxs va topshirish sanasi jadvalda ko'rsatiladi. Hujjat to'plami oldindan tekshirilsa, yuk chegara punktida to'xtab qolmaydi.",
          "Yo'lda yuz beradigan kechikish uchun zaxira vaqt ajratiladi, chunki bojxona tekshiruvi yoki transport o'zgarishi ishlab chiqarish grafigiga bog'liq emas. Bu zaxira o'rnatish jadvalini tuzishda hisobga olinadi. Zaxira bo'lmasa, mebel yetib kelgunga qadar montaj jamoasi kutishga majbur bo'ladi.",
        ],
      },
      {
        heading: "Qabul qilish, o'rnatish va topshirish qanday yakunlanadi?",
        paragraphs: [
          "Obyektda yuk qabul qilinganda qutilarning soni, tashqi holati va yuk belgilari qadoqlash ro'yxati bilan solishtiriladi. Zarar aniqlansa, u yuk hujjatlari bilan bir vaqtda qayd etiladi, keyinroq emas. Kechiktirilgan qayd bilan zararni tashuvchi yoki zavod javobgarligiga bog'lash qiyinlashadi.",
          "O'rnatish ketma-ketligi xona bo'yicha tuziladi: avval karkas va devorga mahkamlanadigan qismlar, keyin yumshoq mebel va aksessuarlar. Har bir xona tugagach, o'lcham, mahkamlash va eshik ochilishi tekshiriladi. Pol va devor himoyasi ish boshida qo'yilsa, keyingi xonalarda zarar kamayadi.",
          "Yakunda kamchiliklar ro'yxati tuziladi, tuzatish muddati va mas'uli yoziladi. Ehtiyot qismlar, yig'ish yo'riqnomasi va kafolat shartlari shu ro'yxat bilan birga topshiriladi. Imzolangan topshirish dalolatnomasi bilan jarayon yopiladi va keyingi almashtirishlar shu hujjatga tayanadi.",
        ],
      },
    ],
    faqs: [
      {
        question: "Butun jarayon qancha vaqt oladi?",
        answer:
          "Aniq muddat loyiha hajmi, tasdiqlash tezligi va tashish yo'nalishiga bog'liq, shuning uchun raqam emas, bosqichlar jadvali kelishiladi. Ushbu bosqichlar odatda bir necha haftani oladi, tasdiqlash va tashish esa alohida zaxira talab qiladi.",
      },
      {
        question: "Namuna tasdiqlanmasa ishlab chiqarish boshlanadimi?",
        answer:
          "Boshlanmaydi, chunki namunadan keyingi o'zgarish butun partiyani qayta ishlashga olib keladi. Istisno faqat karkas kabi o'zgarmaydigan qismlar uchun yozma kelishuv bilan bo'ladi.",
      },
      {
        question: "Oraliq nazoratni kim o'tkazadi?",
        answer:
          "Uni zavodning sifat mas'uli o'tkazadi, buyurtmachi vakili esa natijani tasdiqlaydi yoki video orqali kuzatadi. Hisobotda partiya raqami, tekshirilgan buyumlar va aniqlangan chetlanishlar yozilishi kerak.",
      },
      {
        question: "O'rnatishni kim bajaradi?",
        answer:
          "O'rnatishni zavod jamoasi yoki kelishilgan mahalliy pudratchi bajaradi, mas'uliyat shartnomada ko'rsatiladi. Qaysi tomon vosita, ko'tarish va qadoq chiqindilarini olib ketishini ham oldindan kelishish kerak.",
      },
      {
        question: "Topshirishda qanday hujjatlar qoladi?",
        answer:
          "Kamchiliklar ro'yxati, topshirish dalolatnomasi, ehtiyot qismlar ro'yxati va yig'ish yo'riqnomasi saqlanadi. Bu hujjatlar kafolat bo'yicha murojaat qilganda va keyingi bosqichda xona yangilanganda tayanch bo'ladi.",
      },
    ],
  },
  {
    id: "hotel-furniture-boq-by-room-type-mongolia",
    market: "mn",
    title: "Зочид буудлын өрөөний төрөл тус бүрээр тавилгын BOQ-г хэрхэн бэлтгэх вэ",
    tag: "Зочид буудал",
    excerpt:
      "Стандарт, делюкс, люкс болон апартментал өрөөний тавилгын BOQ-г өрөөний тоо, хэмжээ, материал, суурилуулалтын дарааллаар хэрхэн задалж бичих вэ.",
    date: "2026-10-08",
    readingMin: 7,
    image: "/images/blog/guestroom-checklist.webp",
    imageAlt: "Зочид буудлын өрөөний тавилгын шалгах хуудас",
    definition:
      "Зочид буудлын тавилгын BOQ гэдэг нь өрөөний төрөл тус бүрийн тавилгыг тоо ширхэг, хэмжээ, материал, өнгө болон суурилуулалтын шаардлагатай хамт нэг хүснэгтэд нэгтгэсэн худалдан авалтын баримт юм. Зөв бэлтгэсэн BOQ нь өөр өөр нийлүүлэгчийн саналыг ижил суурь дээр харьцуулах боломжийг бүрдүүлдэг.",
    takeaways: [
      "BOQ-г нэг том жагсаалт биш, өрөөний төрөл тус бүрийн бие даасан блокоор эхлүүлэх нь давхардлыг арилгана.",
      "Мөр бүрт байршил, хэмжээ, материал, өнгө, тоо ширхэг, тэмдэглэл гэсэн зургаан талбар байх нь үнийн саналыг харьцуулах гол нөхцөл.",
      "Хэмжээг өрөөний бодит хэмжилт эсвэл архитектурын зургаас гаргаж, тооцоолсон хэмжээг тусад нь тэмдэглэнэ.",
      "Хувилбарын дугаар, огноо, хүлээн авагчийг баримтад тэмдэглэснээр хожуу үеийн маргааныг багасгана.",
      "Нийлүүлэгчид илгээхийн өмнө өрөөний тоо, нийт тоо ширхэг, давхардсан мөрийг гурван удаа шалгана.",
      "Саналыг нийт дүнгээр бус, мөр тус бүрийн бүтэц ба нэгж үнээр харьцуулна.",
    ],
    sections: [
      {
        heading: "BOQ-г яагаад өрөөний төрлөөр эхлүүлэх нь зүйтэй вэ?",
        paragraphs: [
          "Зочид буудлын төсөлд нэг өрөөний төрөл нь олон зуун өрөөг төлөөлдөг. Хэрэв та бүх өрөөний тавилгыг нэг жагсаалтад нийлүүлбэл стандарт өрөөний сандал, люкс өрөөний сандал хоёрыг ялгах боломж алга болж, нийлүүлэгч буруу тооцоо гаргах эрсдэл нэмэгддэг. Тиймээс BOQ-г өрөөний төрөл тус бүрээр тусдаа блок болгон, блок бүрийг өрөөний тоогоор үржүүлэх бүтэцтэй бичих нь хамгийн бага эрсдэлтэй арга.",
          "Энэ бүтэц нь дараа нь өрөөний тоо өөрчлөгдөх, эсвэл зөвхөн нэг төрлийн өрөөний материал солигдох үед бүх баримтыг дахин бичих шаардлагагүй болгодог. Зөвхөн тухайн блокийг шинэчилж, хувилбарын дугаарыг ахиулна.",
        ],
      },
      {
        heading: "Нэг өрөөний мөрөнд ямар талбарууд заавал байх вэ?",
        paragraphs: [
          "Мөр бүр дор хаяж зургаан талбартай байх нь салбарын хүлээн зөвшөөрөгдсөн хамгийн бага шаардлага. Нэгд, тавилгын нэр ба байршил. Хоёрт, өрөөний төрөл ба өрөөний тоо. Гуравт, урт өргөн өндөр бүхий хэмжээ. Дөрөвт, үндсэн материал ба гадаргуугийн өнгөлгөө. Тавдугаарт, даавуу, арьс, металл зэрэг бүрэлдэхүүн хэсгийн өнгө. Зургадугаарт, суурилуулалт эсвэл угсралтын шаардлага.",
          "Нэмэлт талбар болгон тээвэрлэлтийн баглаа боодол, байршил дахь өргөх шаардлага, тооцоолсон эзлэхүүнийг оруулж болно. Гэхдээ эдгээрийг үнийн саналын үндсэн харьцуулалтад бус, тусдаа хавсралт хэлбэрээр өгөх нь илүү тохиромжтой.",
        ],
      },
      {
        heading: "Хэмжээ, материалын шаардлагыг хэрхэн гаргах вэ?",
        paragraphs: [
          "Хэмжээг хоёр эх сурвалжаас гаргана: архитектурын зураг ба талбайн бодит хэмжилт. Хоёр эх сурвалж зөрж байвал баримтад хоёуланг нь харуулж, аль нь шийдвэрлэх үү гэдгийг хариуцсан архитектортой тодруулна. Тооцоолсон буюу зурагнаас хэмжсэн хэмжээг заавал тэмдэглэснээр суурилуулалтын үеийн зайны алдаа багасна.",
          "Материалын хувьд зөвхөн ерөнхий нэрийг бичих нь хангалтгүй. Жишээ нь хатуу мод гэхийн оронд модны төрөл, өнгөлгөөний зузаан, гадаргуугийн боловсруулалтыг заана. Ингэснээр ижил төсөвтэй хоёр саналыг шударгаар харьцуулах боломж бүрдэнэ.",
        ],
      },
      {
        heading: "Хувилбарын удирдлагыг хэрхэн хийх вэ?",
        paragraphs: [
          "BOQ нь нэг удаа бичиж дуусгах баримт биш. Дизайны хөгжлийн явцад өрөөний тоо, материал, өнгө байнга өөрчлөгддөг. Тиймээс файлын нэрэнд хувилбарын дугаар ба огноог оруулж, хувилбар тус бүрийн өөрчлөлтийг товч тэмдэглэл хэлбэрээр хөтлөх нь чухал.",
          "Өөрчлөлт бүрийг хэн хүсэв, хэзээ батлав, ямар үнийн нөлөөтэй вэ гэсэн гурван асуултаар бүртгэх нь дараагийн шатны маргааныг эрс багасгадаг.",
        ],
      },
      {
        heading: "Нийлүүлэгчид илгээхээс өмнө юуг шалгах вэ?",
        paragraphs: [
          "Илгээхийн өмнө гурван шалгалт хийхийг зөвлөнө. Нэгд, өрөөний төрөл бүрийн өрөөний тоо нийлбэр нь төслийн нийт өрөөний тоотой тохирч байгаа эсэх. Хоёрт, нэг мөр давхардаж ороогүй эсэх. Гуравт, хэмжээний нэгж бүх хүснэгтэд ижил байгаа эсэх.",
          "Мөн баримтын хамт өрөөний төрлийн зураг, материал өнгөний дээжийг хавсаргах нь нийлүүлэгчийн саналыг илүү нарийвчлалтай болгоно. Энэ багц бэлэн болсны дараа л харьцуулах боломжтой саналууд ирж эхэлдэг.",
        ],
      },
      {
        heading: "Нийлүүлэгчийн саналыг хүлээн авсны дараа юуг харьцуулах вэ?",
        paragraphs: [
          "Саналууд ирсний дараа хамгийн түрүүнд нийт дүнг бус, мөр тус бүрийн харьцуулалтыг хийнэ. Нэг ижил мөрөнд нэг нийлүүлэгч өнгөлгөөг оруулж, нөгөө нь оруулаагүй байх нь түгээмэл. Тиймээс мөр бүрийг ижил бүтэцтэй болгож, дутуу хэсгийг тэмдэглэнэ.",
          "Дараа нь нэгж үнэ ба нийт үнийг тусад нь харна. Зарим санал нэгжийн үнийг оруулахгүй, зөвхөн нийт дүнг бичсэн байдаг тул хожуу үед мөр нэмэгдэхэд зөрүү гардаг. Харьцуулалтын хүснэгтэд хоёр үзүүлэлтийг зэрэгцүүлэн бичих нь шийдвэр гаргахад хялбар болно.",
        ],
      },
    ],
    faqs: [
      {
        question: "BOQ-г Excel эсвэл PDF-ээр илгээх нь зөв үү?",
        answer:
          "Excel хэлбэр нь нийлүүлэгчид мөр бүрээр хариу бичих боломж олгодог тул үнийн харьцуулалтад илүү тохиромжтой. PDF-ийг зөвхөн эцсийн батлагдсан хувилбарыг бүртгэх зорилгоор хамт илгээнэ.",
      },
      {
        question: "Өрөөний тоо тодорхойгүй үед BOQ бэлтгэж болох уу?",
        answer:
          "Болно. Нэг өрөөний төрлийн жишиг блокийг бэлтгэж, өрөөний тоог хувьсагч хэлбэрээр үлдээнэ. Дараа нь тоо тодорхой болмогц зөвхөн үржүүлэгчийг шинэчилнэ.",
      },
      {
        question: "Материалын шаардлагад ямар мэдээлэл заавал байх вэ?",
        answer:
          "Модны болон хавтангийн төрөл, өнгөлгөөний зузаан, гадаргуугийн боловсруулалт, ирмэгийн шийдэл, даавууны найрлага ба элэгдэлд тэсвэрлэх ангилал зэрэг нь заавал байх ёстой мэдээлэлд орно.",
      },
      {
        question: "Суурилуулалтын шаардлагыг BOQ-д оруулах шаардлагатай юу?",
        answer:
          "Тийм. Угсралт шаардсан эсэх, лифтээр дамжих боломжтой эсэх, шалны хамгаалалт шаардлагатай эсэх зэрэг нь үнийн санал ба ажлын хуваарилалтад шууд нөлөөлдөг тул тусад нь багана гаргах нь зүйтэй.",
      },
      {
        question: "Нэг нийлүүлэгчид олон өрөөний төрөл өгч болох уу?",
        answer:
          "Болно. Гэхдээ өрөөний төрөл тус бүрийг тусдаа хуудас эсвэл тусдаа файл болгон өгөх нь нийлүүлэгчийн тооцоог илүү тодорхой болгодог.",
      },
      {
        question: "BOQ-г шинэчлэх давтамж ямар байх вэ?",
        answer:
          "Дизайны үе шат бүр дуусах үед, мөн гол өөрчлөлт гарсан бүрд шинэчлэх нь зохистой. Хувилбар бүрийг огноотой хадгалах нь буцаах боломжийг хадгална.",
      },
      {
        question: "BOQ-д нөөц тавилга оруулах шаардлагатай юу?",
        answer:
          "Зочид буудлын хувьд үндсэн тооны тодорхой хэсгийг нөөц болгон тусдаа мөрөнд тэмдэглэх нь түгээмэл. Ингэснээр гэмтсэн ширхэгийг тусад нь захиалахгүйгээр солих боломжтой.",
      },
    ],
  },
  {
    id: "office-furniture-room-list-mongolia",
    market: "mn",
    title: "Оффисын өрөөний жагсаалтыг тавилгын хүсэлт болгон хэрхэн хөрвүүлэх вэ",
    tag: "Оффис",
    excerpt:
      "Ажлын байр, уулзалтын өрөө, хүлээн авах хэсэг болон агуулахын жагсаалтыг тоо ширхэг, хэмжээ, хэрэглээний шаардлагатай холбож хүсэлт болгох арга.",
    date: "2026-10-08",
    readingMin: 6,
    image: "/images/products/office-ca-01/office-ca-01-scene.jpg",
    imageAlt: "Оффисын ажлын байрны тавилгын ерөнхий дүр зураг",
    definition:
      "Оффисын өрөөний жагсаалт гэдэг нь байршлын нэр, талбай, хүний тоо, тавилгын төрөл ба тоо ширхэгийг нэгтгэсэн хүснэгт бөгөөд үүнийг тавилгын хүсэлт болгон хөрвүүлэхдээ ажлын байрны төрөл, уулзалтын өрөөний багтаамж, агуулахын шаардлагыг тусад нь тодорхойлно.",
    takeaways: [
      "Байршлын код, талбай, ажилтны тоо, тавилгын төрөл, тоо ширхэг гэсэн таван багана нь оффисын хүсэлтийн үндэс.",
      "Ажлын байрыг шууд ба шууд бус гэж ангилснаар сандал, ширээний тоог илүү нарийвчлалтай гаргана.",
      "Уулзалтын өрөөний багтаамж ба ширээний хэлбэр нь өрөөний талбайтай шууд холбоотой.",
      "Агуулах, архив, хэвлэлийн хэсгийн тавилгыг ихэвчлэн мартагддаг тул тусад нь жагсаана.",
      "Хүсэлтэд ажлын урсгалын тайлбар хавсаргаснаар зөв төрлийн шийдэл санал болгох боломж нэмэгдэнэ.",
      "Хүсэлт илгээсний дараах асуултад хурдан хариулах нь саналын нарийвчлалыг дээшлүүлнэ.",
    ],
    sections: [
      {
        heading: "Өрөөний жагсаалтыг яагаад хүсэлтийн эхлэл болгох вэ?",
        paragraphs: [
          "Оффисын төсөлд алдаа ихэвчлэн тоо ширхэгээс биш, байршлын бүтцээс үүсдэг. Нэг нээлттэй талбайг хэдэн хэсэгт хуваах, хэдэн хүн багтах, аль хэсэг нь чимээгүй ажилд зориулагдах вэ гэдэг нь тавилгын төрөл ба тоог шууд тодорхойлно. Тиймээс эхлээд өрөөний жагсаалтыг байршлын түвшинд гаргах нь зүйтэй.",
          "Энэ жагсаалт нь зөвхөн худалдан авалтын баримт биш, ирээдүйн өөрчлөлтийг төлөвлөх суурь болдог. Ажилтны тоо өсөх үед ямар хэсэгт ямар тавилгын нөөц байгааг энэ жагсаалтаас харж болно.",
        ],
      },
      {
        heading: "Ажлын байрны төрөл ба тоог хэрхэн тодорхойлох вэ?",
        paragraphs: [
          "Ажлын байрыг дор хаяж гурван төрөлд хуваах нь хүсэлтийг ойлгомжтой болгоно: тогтмол ажлын байр, хуваалцсан ажлын байр, уян хатан ажлын байр. Төрөл бүрт ширээний хэмжээ, дэлгэцийн тоо, хадгалах шүүгээний хэмжээ өөр байна.",
          "Тоо ширхэгийг гаргахдаа зөвхөн ажилтны тоог биш, зэрэг ажиллах хүний тоог харгалзана. Ээлжээр ажилладаг хэсэг байвал шаардлагатай ажлын байрны тоо нийт ажилтны тооноос цөөн байх боломжтой.",
        ],
      },
      {
        heading: "Уулзалтын болон хүлээн авах хэсгийг хэрхэн төлөвлөх вэ?",
        paragraphs: [
          "Уулзалтын өрөөний хувьд багтаамж, ширээний хэлбэр, дэлгэц ба холболтын байршил гэсэн гурвыг хамт авч үзнэ. Урт ширээ нь илтгэл тавихад тохиромжтой бол дугуй ширээ нь хэлэлцүүлэгт илүү тохиромжтой.",
          "Хүлээн авах хэсэг болон хүлээх хэсэгт тавилгын төрөл нь зөвхөн гоо зүйн асуудал бус, анхны сэтгэгдэл ба ажлын урсгалын асуудал юм. Тиймээс тусдаа жагсааж, хэрэглээний тайлбарыг хамт бичих нь зүйтэй.",
        ],
      },
      {
        heading: "Хадгалах талбайг яагаад тусад нь тооцох вэ?",
        paragraphs: [
          "Агуулах, архив, хэвлэлийн хэсэг зэрэг хадгалах талбайн тавилга нь ихэвчлэн үндсэн жагсаалтаас орхигддог. Гэтэл эдгээр нь суурилуулалтын дарааллын сүүлчийн үе шатанд яаралтай хэрэгцээ болж гарч ирдэг.",
          "Хадгалах талбайг тавиур, шүүгээ, түгжээтэй шүүгээ гэж ангилж, шаардлагатай даацыг тэмдэглэх нь хангалттай. Эдгээрийг тусдаа блок болгосноор нийлүүлэгч ижил түвшний санал өгөх боломжтой болно.",
        ],
      },
      {
        heading: "Хүсэлтэд ямар нэмэлт мэдээлэл хавсаргах нь ашигтай вэ?",
        paragraphs: [
          "Ажлын урсгалын тайлбар, ажилтны тооны таамаг, ирээдүйн өргөтгөлийн төлөвлөгөө гэсэн гурвыг хавсаргах нь саналын чанарыг эрс дээшлүүлдэг. Яагаад гэвэл нийлүүлэгч зөвхөн тоо биш, хэрэглээг ойлгож байж тохирох төрлийг санал болгодог.",
          "Мөн барилгын лифт, коридорын өргөн, давхарын тоо зэрэг ложистикийн нөхцөлийг тэмдэглэх нь хожуу үеийн гэнэтийн зардлыг багасгана.",
        ],
      },
      {
        heading: "Хүсэлт илгээсний дараа ямар дараалал үргэлжлэх вэ?",
        paragraphs: [
          "Хүсэлт илгээсний дараа эхний шатанд тоо ширхэг ба ерөнхий хэмжээг тодруулах асуултууд ирнэ. Энэ үед хариултыг хойшлуулахгүй байх нь саналын чанарт шууд нөлөөлнө.",
          "Дараагийн шатанд талбайн хэмжилт ба бодит байршлын шалгалт орно. Уулзалтын өрөөний хаалганы өргөн, цахилгааны цэгийн байршил зэрэг нэмэлт мэдээлэл шаардлагатай болдог тул эдгээрийг урьдчилан цуглуулсан байх нь цаг хэмнэнэ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ажлын байрны тоог ажилтны тоотой тэнцүү авах ёстой юу?",
        answer:
          "Заавал биш. Ээлж, эрэлт, алсаас ажиллах хувь хэмжээ зэргээс хамаарч ажлын байрны тоо нийт ажилтны тооноос бага эсвэл их байж болно. Хүсэлтэд харьцааг тайлбарлаж өгөх нь зүйтэй.",
      },
      {
        question: "Хуваалцсан ажлын байрыг оффисын хүсэлтэд хэрхэн бичих вэ?",
        answer:
          "Хэдэн хүн нэг ажлын байрыг ашиглах, өдрийн аль хэсэгт ашиглах, хадгалах шүүгээг хэрхэн хуваах гэсэн гурван мэдээллийг тусдаа мөрөнд бичнэ.",
      },
      {
        question: "Уулзалтын өрөөний тоог хэрхэн тодорхойлох вэ?",
        answer:
          "Ажилтны тоо, багийн бүтэц, өдөр тутмын уулзалтын давтамж гэсэн гурав дээр үндэслэнэ. Том нэг өрөөнөөс олон жижиг өрөө илүү үр ашигтай байх тохиолдол түгээмэл.",
      },
      {
        question: "Хадгалах талбайг төлөвлөхдөө юуг анхаарах вэ?",
        answer:
          "Хадгалах зүйлийн төрөл, жин, хандах давтамж гэсэн гурвыг тодорхойлно. Өдөр бүр ханддаг зүйлийг өндөр тавиурт, улирлын зүйлийг тусдаа хэсэгт байрлуулах нь зүйтэй.",
      },
      {
        question: "Оффисын хүсэлтэд дотор заслын мэдээлэл хэрэгтэй юу?",
        answer:
          "Хэрэгтэй. Ханын өнгө, шалны материал, таазны өндөр зэрэг нь тавилгын өнгө ба хэмжээний сонголтод нөлөөлдөг тул товч ч гэсэн хавсаргах нь ашигтай.",
      },
      {
        question: "Баримтыг ямар хэлбэрээр илгээх нь хамгийн тохиромжтой вэ?",
        answer:
          "Хүснэгтийг Excel хэлбэрээр, тайлбар ба зургийг PDF хэлбэрээр хавсаргах нь хамгийн тохиромжтой. Ингэснээр мөр бүрээр хариу авах боломж хадгалагдана.",
      },
      {
        question: "Оффисын хүсэлтэд талбайн зураг хавсаргах шаардлагатай юу?",
        answer:
          "Зураг байвал санал илүү нарийвчлалтай болно. Гэхдээ тодорхой зураггүй тохиолдолд байршлын хэмжээ ба ажлын байрны тоог бичсэн хүснэгт хангалттай.",
      },
    ],
  },
  {
    id: "villa-residential-room-list-color-samples-mongolia",
    market: "mn",
    title: "Хувийн орон сууц, виллагийн өрөөний жагсаалт ба өнгөний дээжийг хэрхэн бэлтгэх вэ",
    tag: "Орон сууц",
    excerpt:
      "Орон сууц, виллагийн өрөө тус бүрийн тавилгын жагсаалтыг өнгөний дээж, материалын чиглэл, гэр бүлийн хэрэглээтэй холбож бэлтгэх практик арга.",
    date: "2026-10-08",
    readingMin: 6,
    image: "/images/blog/custom-wardrobes-almaty.webp",
    imageAlt: "Хувийн орон сууцны хувцасны шкаф ба өнгөний шийдэл",
    definition:
      "Орон сууцны төслийн өрөөний жагсаалт гэдэг нь өрөө тус бүрийн тавилгыг хэмжээ, материал, өнгөний чиглэл, хэрэглээний шаардлагатай хамт тэмдэглэсэн баримт бөгөөд өнгөний дээж нь энэ баримтын салшгүй хэсэг байх ёстой.",
    takeaways: [
      "Өрөө тус бүрийг бие даасан блок болгож, хэмжээ ба материалыг тусад нь тэмдэглэнэ.",
      "Өнгөний дээжийг зөвхөн нэрээр бус, бодит дээж болон дотоод гэрэлтүүлгийн нөхцөлд авсан зурагтай хамт өгнө.",
      "Гэр бүлийн бүтэц, хүүхдийн нас, гэрийн тэжээвэр амьтан байгаа эсэх нь материалын сонголтод шууд нөлөөлнө.",
      "Хадгалах хэрэгцээг шүүгээ, шкаф, агуулахын хэсэг тус бүрээр тооцно.",
      "Өнгөлгөөний дээж ба эцсийн бүтээгдэхүүний хоорондын ялгааг урьдчилан тохиролцоно.",
      "Гэр бүлийн онцгой хэрэгцээг жагсаалтад тусдаа мөрөнд тэмдэглэнэ.",
    ],
    sections: [
      {
        heading: "Өрөөний жагсаалтыг яагаад гэр бүлийн хэрэглээнээс эхлэх вэ?",
        paragraphs: [
          "Орон сууцны төсөл нь зочид буудлаас ялгаатай нь нэг гэр бүлийн өдөр тутмын амьдралыг тусгадаг. Тиймээс тавилгын сонголт нь гоо зүйн асуудал төдийгүй, хэн ямар өрөөг хэрхэн ашиглах вэ гэдэг асуултаас эхэлнэ.",
          "Хүүхдийн өрөө, ажлын өрөө, зочны өрөө, хоолны өрөө гэсэн үндсэн дөрвөн хэсгийг эхлээд тусгаарлаж, дараа нь тус бүрийн тавилгын жагсаалтыг гаргах нь хамгийн ойлгомжтой арга юм.",
        ],
      },
      {
        heading: "Өнгөний дээжийг хэрхэн зөв бэлтгэх вэ?",
        paragraphs: [
          "Өнгөний нэрийг бичдэг шошго нь бодит өнгийг хангалттай дүрсэлж чаддаггүй. Ижил нэртэй хоёр өнгө өөр үйлдвэрт өөр гарч болно. Тиймээс дээжийг бодитоор авч, өдрийн болон оройн гэрэлд тус тусдаа авсан зургийг хамт хадгалах нь зүйтэй.",
          "Мөн дээжийг matte, satin, gloss гэх мэт гадаргуугийн төрлөөр ялгаж тэмдэглэнэ. Гадаргуу нь өнгөний мэдрэмжид ихээхэн нөлөөлдөг.",
        ],
      },
      {
        heading: "Материалыг хэрхэн сонгох вэ?",
        paragraphs: [
          "Материалын сонголт нь өрөөний чийгшил, гэрлийн хэмжээ, хэрэглээний эрчим гэсэн гурван хүчин зүйлээс хамаарна. Угаалгын өрөө, гал тогооны ойролцоо чийгэнд тэсвэртэй шийдэл шаардлагатай бол зочны өрөөнд дулаан мэдрэмжтэй материал илүү тохиромжтой.",
          "Хүүхэдтэй гэр бүлд ирмэгийн бөөрөнхий шийдэл, амархан цэвэрлэгддэг гадаргууг сонгох нь практик юм. Эдгээрийг жагсаалтад тэмдэглэснээр дараагийн шатны алдаа багасна.",
        ],
      },
      {
        heading: "Хадгалах хэрэгцээг хэрхэн тооцох вэ?",
        paragraphs: [
          "Хадгалах талбайг өрөө тус бүрээр тусад нь тооцох нь зөв. Жишээ нь унтлагын өрөөнд хувцас, улирлын хөнжил, аяллын хайрцаг гэсэн гурван төрлийн хадгалалт шаардлагатай болдог.",
          "Гал тогоо, угаалгын өрөө, коридорын хадгалалтыг тусдаа бичих нь суурилуулалтын дараалалд шууд нөлөөлдөг тул эхнээс нь төлөвлөх нь зүйтэй.",
        ],
      },
      {
        heading: "Дээж ба эцсийн бүтээгдэхүүний ялгааг хэрхэн зохицуулах вэ?",
        paragraphs: [
          "Байгалийн материал ашигласан тохиолдолд дээж ба эцсийн бүтээгдэхүүний хооронд бага зэргийн ялгаа гарах нь хэвийн. Үүнийг урьдчилан тохиролцож, хүлээн зөвшөөрөгдөх хязгаарыг тодорхой болгох нь дараагийн маргааныг сэргийлнэ.",
          "Чухал хэсгүүдийн хувьд эхлээд нэг ширхэг дээж бүтээгдэхүүн хийлгэж, батлуулсны дараа бүх өрөөнд үйлдвэрлэх дарааллыг баримтлах нь хамгийн бага эрсдэлтэй.",
        ],
      },
      {
        heading: "Өндөр настан ба хөдөлгөөний хязгаарлалттай гэр бүлийн гишүүний хэрэгцээг хэрхэн тусгах вэ?",
        paragraphs: [
          "Гэрт өндөр настан эсвэл хөдөлгөөний хязгаарлалттай хүн байвал тавилгын өндөр, бариулын хэлбэр, чөлөөт зайг дахин харна. Орц, коридор, угаалгын өрөөний замыг тавилгаар хаахгүй байх нь хамгийн чухал шаардлага.",
          "Мөн шүүгээний бариул ба онгойлголтын хүчийг хөнгөн болгож, шалан дээр гулсаж болох шийдлээс зайлсхийх нь зүйтэй. Эдгээрийг жагсаалтад тусдаа тэмдэглэснээр дараагийн үе шатанд маргаан гарахгүй.",
        ],
      },
    ],
    faqs: [
      {
        question: "Өнгөний дээжийг зурагнаас сонгож болох уу?",
        answer:
          "Зураг нь чиглэл тодорхойлоход тохиромжтой ч эцсийн шийдвэрт бодит дээж шаардлагатай. Дэлгэцийн тохиргоо, гэрэлтүүлэг өнгийг өөр харагдуулдаг.",
      },
      {
        question: "Материалын дээжийг хэдэн төрөл бэлтгэх нь зүйтэй вэ?",
        answer:
          "Үндсэн хоёр, нэмэлт нэг гэсэн гурван чиглэл бэлтгэх нь шийдвэр гаргахад хангалттай. Хэт олон сонголт нь шийдвэрийг удаашруулдаг.",
      },
      {
        question: "Хүүхдийн өрөөнд ямар материал тохиромжтой вэ?",
        answer:
          "Ирмэг нь бөөрөнхий, гадаргуу нь амархан цэвэрлэгддэг, будаг ба цавууны үнэр багатай материалыг сонгох нь зүйтэй.",
      },
      {
        question: "Гал тогооны тавилгыг тусдаа жагсаалт болгох уу?",
        answer:
          "Тийм. Гал тогоо нь чийг, дулаан, тосны нөлөөнд байнга өртдөг тул бусад өрөөнөөс тусдаа шаардлагатай. Тусдаа блок болгох нь зөв.",
      },
      {
        question: "Хадгалах талбайг хэрхэн хэмжих вэ?",
        answer:
          "Хадгалах зүйлийн төрөл тус бүрийн ойролцоо эзлэхүүнийг тооцож, шаардлагатай хамгийн бага талбайг гаргана. Улирлын зүйлийг тусад нь тооцно.",
      },
      {
        question: "Нэг дээж бүтээгдэхүүн хийлгэх нь үргэлж шаардлагатай юу?",
        answer:
          "Нарийн шийдэл эсвэл байгалийн материал ашигласан тохиолдолд шаардлагатай. Стандарт хэмжээ, стандарт өнгөтэй тохиолдолд дээж ба каталог хангалттай.",
      },
      {
        question: "Орон сууцны тавилгын суурилуулалтыг ямар дарааллаар хийх вэ?",
        answer:
          "Ихэвчлэн гал тогоо ба угаалгын өрөөний суурилуулсан тавилга, дараа нь унтлагын ба хувцасны шкаф, хамгийн сүүлд зочны өрөөний тавилга гэсэн дараалал тохиромжтой. Тоос ихтэй ажил дууссаны дараа эцсийн тавилгыг байрлуулна.",
      },
    ],
  },
  {
    id: "furniture-dimension-material-review-ulaanbaatar",
    market: "mn",
    title: "Улаанбаатарт төслийн тавилгын хэмжээ, материалыг хэрхэн хянан шалгах вэ",
    tag: "Техникийн хяналт",
    excerpt:
      "Дизайны баг ба нийлүүлэгчийн хооронд хэмжээ, материал, өнгөлгөөний мэдээллийг алдаагүй солилцох хяналтын дараалал ба шалгах хуудас.",
    date: "2026-10-08",
    readingMin: 7,
    image: "/images/blog/solid-wood-vs-veneer.webp",
    imageAlt: "Хатуу мод ба өнгөлгөөний хавтангийн харьцуулалт",
    definition:
      "Төслийн тавилгын техникийн хяналт гэдэг нь зургийн хэмжээ, материалын задаргаа, гадаргуугийн өнгөлгөө, холболтын шийдлийг дизайны баг ба үйлдвэрлэгчийн хооронд албан ёсоор баталгаажуулах үйл явц юм.",
    takeaways: [
      "Хэмжээг үргэлж нэгжтэй бичиж, зургийн масштаб ба баримтын тоог хамт тэмдэглэнэ.",
      "Материалын задаргааг үндсэн хэсэг, бүрэлдэхүүн хэсэг, холболтын хэрэгсэл гэсэн гурван түвшинд хуваана.",
      "Гадаргуугийн өнгөлгөөг бодит дээжээр, гэрлийн өөр нөхцөлд шалгана.",
      "Асуулт бүрийг бичгээр хариулж, хариултыг баримтад хавсаргана.",
      "Баталгаажсан хувилбарыг түгжээд, дараагийн өөрчлөлтийг тусад нь бүртгэнэ.",
      "Хэмжилтийг нэг хариуцсан хүн хийж, өрөөний дугаар ба гэрэл зургийн хамт бүртгэнэ.",
    ],
    sections: [
      {
        heading: "Хэмжээний хяналтыг хаанаас эхлэх вэ?",
        paragraphs: [
          "Хэмжээний алдаа нь ихэвчлэн нэгжийн зөрүүнээс эхэлдэг. Нэг зурагт миллиметр, нөгөөд нь сантиметр хэрэглэснээр бүх жагсаалт буруу болдог. Тиймээс баримт бүрийн эхэнд ашиглах нэгжийг тодорхой бичиж, бүх хүснэгтэд нэгэн ижил байлгах нь хамгийн эхний алхам.",
          "Дараа нь хэмжээ бүрийн эх сурвалжийг тэмдэглэнэ. Архитектурын зурагнаас авсан уу, талбайн хэмжилтээс авсан уу, эсвэл тооцоолол уу гэдгийг ялгах нь дараагийн шатны баталгаажуулалтыг хялбар болгоно.",
        ],
      },
      {
        heading: "Материалын задаргааг хэрхэн бүтэцлэх вэ?",
        paragraphs: [
          "Материалын мэдээллийг гурван түвшинд хуваах нь ойлгомжтой. Нэгд, бүтцийн үндсэн материал. Хоёрт, харагдах гадаргуугийн өнгөлгөө. Гуравт, бариул, нугас, гулсуур зэрэг холболтын хэрэгсэл.",
          "Энэ бүтэц нь зөвхөн хяналтад төдийгүй, ирээдүйн засвар үйлчилгээнд ашиглагдана. Аль хэсэг нь элэгдэж байгааг мэдэж байвал солих хэсгийг хурдан тодорхойлж болно.",
        ],
      },
      {
        heading: "Өнгөлгөөг хэрхэн шалгах вэ?",
        paragraphs: [
          "Өнгөлгөөг зөвхөн нэг гэрлийн нөхцөлд шалгах нь хангалтгүй. Өдрийн гэрэл, оройн дулаан гэрэл, хүйтэн цагаан гэрэл гэсэн гуравт тус тусдаа харж харьцуулах нь зүйтэй.",
          "Мөн өнгөлгөөг босоо ба хэвтээ байрлалд харгалзуулж үзнэ. Нэг ижил материал байрлалаас хамаарч өөр өнгөтэй харагддаг нь түгээмэл.",
        ],
      },
      {
        heading: "Харилцааг бичгээр хөтлөх нь яагаад чухал вэ?",
        paragraphs: [
          "Дуут яриа, мессежээр тохирсон зүйл удалгүй мартагддаг. Тиймээс асуулт бүрийг бичгээр тавьж, хариултыг баримтад хавсаргах нь зүйтэй. Энэ нь дараагийн шатанд хэн юу баталсан гэдгийг тодорхой болгоно.",
          "Шийдвэр бүрийг огноо, хариуцсан хүний нэртэй хамт бүртгэх нь маргааныг эрс багасгадаг.",
        ],
      },
      {
        heading: "Баталгаажсан хувилбарыг хэрхэн түгжих вэ?",
        paragraphs: [
          "Тодорхой үе шатанд хүрсний дараа баталгаажсан хувилбарыг түгжиж, дараагийн өөрчлөлтийг тусад нь бүртгэх нь чухал. Ингэснээр үйлдвэрлэл эхэлсний дараах санамсаргүй өөрчлөлтөөс сэргийлнэ.",
          "Түгжих үед хэмжээ, материал, өнгөлгөө, холболтын хэрэгсэл гэсэн дөрвөн хэсгийг бүрэн шалгаж, гарын үсэг эсвэл бичгээр баталгаажуулна.",
        ],
      },
      {
        heading: "Хэмжилтийг талбайд хэн хийх нь зүйтэй вэ?",
        paragraphs: [
          "Хэмжилтийг нэг хариуцсан хүн хийж, үр дүнг бичгээр баталгаажуулах нь хамгийн бага эрсдэлтэй. Хэд хэдэн хүн тус тусдаа хэмжихэд нэгж ба хэмжих цэг зөрөх нь түгээмэл.",
          "Хэмжилтийн үед хаалга, лифт, шатны өргөнийг тэмдэглэж, хэмжээ авсан өрөөний дугаарыг хамт бүртгэнэ. Гэрэл зурагтай хавсаргаснаар дараагийн шатанд эргэлзээ гарахгүй.",
        ],
      },
    ],
    faqs: [
      {
        question: "Хэмжээг ямар нэгжээр бичих нь хамгийн тохиромжтой вэ?",
        answer:
          "Миллиметр нь тавилгын үйлдвэрлэлд хамгийн түгээмэл хэрэглэгддэг нэгж. Гэхдээ хамгийн чухал нь бүх баримтад нэг ижил нэгж хэрэглэх явдал юм.",
      },
      {
        question: "Материалын дээжийг хэн баталгаажуулах ёстой вэ?",
        answer:
          "Дизайны хариуцсан архитектор болон төслийн эзэн хоёулаа баталгаажуулах нь зүйтэй. Нэг талын баталгаажуулалт хожим зөрчил үүсгэдэг.",
      },
      {
        question: "Гадаргуугийн өнгөлгөөг хэрхэн албан ёсоор батлах вэ?",
        answer:
          "Бодит дээжийг дугаарлаж, гэрэл зургийн хамт баримтад хавсаргаж, гарын үсгээр баталгаажуулна. Дээжийг хоёр талд тус тусдаа хадгална.",
      },
      {
        question: "Үйлдвэрлэл эхэлсний дараа өөрчлөлт хийж болох уу?",
        answer:
          "Болох боловч зардал ба хугацааны нөлөөтэй. Тиймээс аль үе шатнаас хойш өөрчлөлт хийхийг хязгаарлахыг эхнээс нь тохиролцох нь зүйтэй.",
      },
      {
        question: "Холболтын хэрэгслийг яагаад тусад нь тэмдэглэх вэ?",
        answer:
          "Бариул, нугас, гулсуур нь өдөр тутмын хэрэглээнд хамгийн түрүүнд элэгддэг хэсэг. Тэдгээрийг тусад нь тэмдэглэснээр солих ба засварлах ажил хялбар болно.",
      },
      {
        question: "Техникийн хяналтыг хэдэн үе шаттай хийх нь зүйтэй вэ?",
        answer:
          "Дизайны үе шатны төгсгөл, үйлдвэрлэлийн өмнөх баталгаажуулалт, суурилуулалтын өмнөх шалгалт гэсэн гурван үе шаттай байх нь хамгийн үр дүнтэй.",
      },
      {
        question: "Зургийн хэмжээ ба талбайн хэмжилт зөрвөл алийг нь баримтлах вэ?",
        answer:
          "Талбайн бодит хэмжилтийг баримтлах нь зүйтэй. Зөрүүг баримтад тэмдэглэж, шийдвэрийг хариуцсан архитектортой бичгээр тодруулна.",
      },
    ],
  },
  {
    id: "school-healthcare-furniture-requirements-mongolia",
    market: "mn",
    title: "Сургууль, эмнэлгийн тавилгын техникийн шаардлагыг хэрхэн тодруулах вэ",
    tag: "Сургууль, эмнэлэг",
    excerpt:
      "Боловсрол ба эрүүл мэндийн байгууллагын тавилгын шаардлагыг хэрэглэгчийн бүлэг, ариун цэвэр, зайлшгүй нүүлгэн шилжүүлэх зам зэрэг хүчин зүйлээр хэрхэн тодруулах вэ.",
    date: "2026-10-08",
    readingMin: 7,
    image: "/images/blog/school-furniture-standards-kz.webp",
    imageAlt: "Сургуулийн тавилгын хэмжээ ба түвшний шалгуур",
    definition:
      "Сургууль, эмнэлгийн тавилгын техникийн шаардлага гэдэг нь хэрэглэгчийн насны бүлэг, хэрэглээний үргэлжлэх хугацаа, цэвэрлэгээний шаардлага, яаралтай үеийн хөдөлгөөний зам гэсэн дөрвөн хүчин зүйлээс гардаг бөгөөд эдгээрийг тухайн төслийн нөхцөлд тулгуурлан тодруулна.",
    takeaways: [
      "Хэрэглэгчийн насны бүлэг нь тавилгын хэмжээ ба өндрийн гол тодорхойлогч хүчин зүйл.",
      "Эрүүл мэндийн орчинд гадаргуу нь амархан цэвэрлэгдэх ба чийгэнд тэсвэртэй байх шаардлагатай.",
      "Яаралтай үеийн хөдөлгөөний зам нь тавилгын байршил ба хэмжээг хязгаарлана.",
      "Суурилуулалт ба дахин зохион байгуулалтын уян хатан байдлыг эхнээс нь төлөвлөнө.",
      "Шаардлага бүрийг баримт бичгээр баталгаажуулж, амаар тохиролцсоныг хүчингүй болгоно.",
      "Аюулгүй байдал, ариун цэвэр, хэрэглэгчийн хэмжээг эхэнд, гоо зүйн шийдлийг дараагийн үе шатанд үлдээнэ.",
    ],
    sections: [
      {
        heading: "Хэрэглэгчийн бүлгээс шаардлагыг хэрхэн гаргах вэ?",
        paragraphs: [
          "Боловсролын байгууллагад тавилгын хэмжээ нь сурагчийн нас ба биеийн өндрөөс шууд хамаарна. Нэг ангид гурван өөр өндрийн шаардлагатай сурагч сууж болно. Тиймээс зөвхөн нэг хэмжээг сонгохын оронд тохируулж болох эсвэл хэдэн түвшний сонголт хийх нь зүйтэй.",
          "Эрүүл мэндийн байгууллагад хэрэглэгч нь өвчтөн, хамтран ажиллагч, асрагч гэсэн гурван бүлэг болно. Бүлэг бүрийн хэрэгцээ өөр тул тавилгын төрлийг тусад нь тодорхойлно.",
        ],
      },
      {
        heading: "Ариун цэврийн шаардлагыг хэрхэн тусгах вэ?",
        paragraphs: [
          "Эрүүл мэндийн орчинд гадаргуу нь амархан цэвэрлэгдэх, чийг ба химийн бодисонд тэсвэртэй байх шаардлагатай. Мөн завсар, холболтын хэсэгт тоос хуримтлагдахгүй байх нь чухал.",
          "Суудлын даавууны хувьд элэгдэлд тэсвэрлэх чанар ба цэвэрлэгээний аргыг үйлдвэрлэгчтэй тодруулна. Эдгээрийг баримтад бичгээр тэмдэглэх нь дараагийн шатны шалгалтад тусална.",
        ],
      },
      {
        heading: "Яаралтай үеийн хөдөлгөөний замыг хэрхэн тооцох вэ?",
        paragraphs: [
          "Эмнэлэг, сургуулийн барилгад хөдөлгөөний зам байнга нээлттэй байх ёстой. Тиймээс тавилгын байршил нь гарц, шат, лифтийн өмнөх зайг хаахгүй байх ёстой.",
          "Тавилгын хэмжээг сонгохдоо зөвхөн хэрэглээний талбайг бус, тэр өрөөгөөр дамжин өнгөрөх хүний тоог харгалзана. Энэ нь коридорын тавилгын хэмжээг шууд тодорхойлно.",
        ],
      },
      {
        heading: "Суурилуулалт ба уян хатан байдлыг хэрхэн төлөвлөх вэ?",
        paragraphs: [
          "Боловсролын орчинд өрөөний зориулалт байнга өөрчлөгддөг. Нэг өрөө өнөөдөр хичээлийн танхим, маргааш семинарын танхим болж болно. Тиймээс хөдөлгөж болох тавилгыг сонгох нь илүү уян хатан шийдэл болно.",
          "Эмнэлэгт тавилга ихэвчлэн тогтмол байрлалтай байдаг. Тиймээс суурилуулалтын дараалал ба цахилгаан, холболтын цэгийн байршлыг урьдчилан төлөвлөх нь чухал.",
        ],
      },
      {
        heading: "Шаардлагыг хэрхэн баримтжуулах вэ?",
        paragraphs: [
          "Шаардлага бүрийг бичгээр тэмдэглэж, эх сурвалж ба огноог хамт хадгална. Амаар тохирсон зүйл удалгүй мартагддаг тул баримтжуулалт нь төслийн хамгаалалт юм.",
          "Хэрэглэгчийн бүлэг, ариун цэвэр, хөдөлгөөний зам, суурилуулалт гэсэн дөрвөн хэсгийг тусдаа бүлэг болгож бичих нь хяналтыг хялбар болгоно.",
        ],
      },
      {
        heading: "Хязгаарлагдмал төсвийн үед шаардлагыг хэрхэн эрэмбэлэх вэ?",
        paragraphs: [
          "Бүх шаардлагыг нэгэн зэрэг хангах боломжгүй үед эрүүл ахуй, аюулгүй байдал, хэрэглэгчийн хэмжээ гэсэн гурвыг эхэнд тавина. Эдгээр нь хожим засварлах боломжгүй үндсэн нөхцөл юм.",
          "Гоо зүйн шийдэл ба нэмэлт тохижилтыг дараагийн үе шат руу шилжүүлж болно. Ингэснээр төсөв хэтрэхгүй байхын зэрэгцээ үндсэн шаардлага бүрэн хангагдана.",
        ],
      },
    ],
    faqs: [
      {
        question: "Сургуулийн тавилгын өндрийг хэрхэн сонгох вэ?",
        answer:
          "Сурагчдын биеийн өндрийн тархалтыг хэмжиж, хамгийн олон сурагчид тохирох хэмжээг үндсэн болгоод, тохируулж болох загварыг нэмэлт болгон сонгох нь зүйтэй.",
      },
      {
        question: "Эмнэлгийн тавилгын гадаргуунд ямар шаардлага тавих вэ?",
        answer:
          "Амархан цэвэрлэгдэх, чийг ба түгээмэл цэвэрлэгээний бодисонд тэсвэртэй, завсаргүй холболттой байх гэсэн гурван шаардлагыг үндсэн болгоно.",
      },
      {
        question: "Хөдөлгөөний замыг хэрхэн шалгах вэ?",
        answer:
          "Төлөвлөгөөний зурган дээр тавилгын байршлыг тэмдэглээд, гарц ба шатны өмнөх зай хангалттай эсэхийг шалгана. Шаардлагатай бол тухайн байгууллагын хариуцсан хүнтэй баталгаажуулна.",
      },
      {
        question: "Тогтмол ба хөдөлгөж болох тавилгыг хэрхэн ялгах вэ?",
        answer:
          "Өрөөний зориулалт жилд хэдэн удаа өөрчлөгддөг вэ гэдгээс хамаарна. Байнга өөрчлөгддөг бол хөдөлгөж болох шийдэл, тогтмол бол суурилуулсан шийдэл тохиромжтой.",
      },
      {
        question: "Ариун цэврийн шаардлагыг хэн баталгаажуулах вэ?",
        answer:
          "Тухайн байгууллагын эрүүл ахуйн хариуцсан хүн ба төслийн эзэн хамт баталгаажуулах нь зүйтэй. Шаардлагыг баримтад тэмдэглэж, огноотой хадгална.",
      },
      {
        question: "Боловсролын орчинд ямар материал илүү тохиромжтой вэ?",
        answer:
          "Бөөрөнхий ирмэгтэй, амархан цэвэрлэгддэг, элэгдэлд тэсвэртэй материал тохиромжтой. Хүүхдийн хэрэглээнд удаан эдэлгээтэй байдал нь гоо зүйгээс илүү чухал.",
      },
      {
        question: "Сургуулийн тавилгыг хэдэн жилийн хэрэглээнд тооцож сонгох вэ?",
        answer:
          "Байгууллагын хэрэглээний эрчим ба засвар үйлчилгээний төлөвлөгөөнөөс хамаарна. Урт хугацааны хэрэглээг тооцох үед солих хэсгийн нийлүүлэлт ба засварын боломжийг хамт тодруулах нь зүйтэй.",
      },
    ],
  },
  {
    id: "project-furniture-drawing-submittal-checklist-mongolia",
    market: "mn",
    title: "Төслийн тавилгын зураг, материалын багцыг илгээхийн өмнөх шалгах хуудас",
    tag: "Төслийн баримт",
    excerpt:
      "Тавилгын төслийн хүсэлтийг илгээхийн өмнө ямар зураг, хүснэгт, дээж, тайлбарыг бэлтгэх ёстойг дарааллаар нь жагсаасан шалгах хуудас.",
    date: "2026-10-08",
    readingMin: 6,
    image: "/images/blog/ffe-timeline.webp",
    imageAlt: "Төслийн тавилгын үе шат ба баримтын дараалал",
    definition:
      "Төслийн тавилгын багц гэдэг нь өрөөний жагсаалт, хэмжээний зураг, материалын тодорхойлолт, өнгөний дээж, хүлээгдэж буй үе шатын тайлбар гэсэн таван хэсгээс бүрдэх бөгөөд энэ багц бүрэн байх тусам эхний хариу илүү тодорхой болдог.",
    takeaways: [
      "Багц бүрэн байх тусам хариултын чанар шууд дээшилнэ.",
      "Өрөөний жагсаалт ба хэмжээний зураг нь хамгийн чухал хоёр баримт.",
      "Материалын тодорхойлолтыг ерөнхий нэрээр бус, бүрэн задаргаагаар бичнэ.",
      "Хүлээгдэж буй үе шат ба шийдвэр гаргах хугацааг тодорхой хэлнэ.",
      "Нэг файлын нэршил ба хувилбарын дугаарыг бүх хавсралтад нэгэн ижил байлгана.",
      "Хүсэлтийг гурван үе шаттай илгээж, үе шат бүрийн баталгаажуулалтыг бичгээр тэмдэглэнэ.",
    ],
    sections: [
      {
        heading: "Ямар баримт хамгийн түрүүнд хэрэгтэй вэ?",
        paragraphs: [
          "Хамгийн түрүүнд өрөөний жагсаалт хэрэгтэй. Энэ нь ямар өрөөнд ямар тавилга, хэдэн ширхэг шаардлагатайг харуулна. Жагсаалтгүй хүсэлт нь ерөнхий хариулт авдаг бөгөөд харьцуулах боломжгүй санал болдог.",
          "Хоёрдугаарт хэмжээний зураг хэрэгтэй. Талбайн хэмжилт эсвэл архитектурын зураг байж болно. Хамгийн чухал нь хэмжээний нэгж тодорхой байх явдал юм.",
        ],
      },
      {
        heading: "Материалын тодорхойлолтыг хэрхэн бичих вэ?",
        paragraphs: [
          "Материалын тодорхойлолт нь бүтцийн материал, гадаргуугийн өнгөлгөө, холболтын хэрэгсэл гэсэн гурван түвшинд байх нь хамгийн ойлгомжтой. Ерөнхий нэрээр бичсэн тодорхойлолт нь саналын зөрүүг ихээхэн нэмэгдүүлдэг.",
          "Боломжтой бол бодит дээжийн гэрэл зургийг хавсаргана. Дээжийн дугаар ба хүлээн авсан огноог тэмдэглэх нь дараагийн харьцуулалтад тусална.",
        ],
      },
      {
        heading: "Хүлээгдэж буй үе шатыг хэрхэн илэрхийлэх вэ?",
        paragraphs: [
          "Хүсэлт илгээх үед төсөл ямар үе шатанд байгаагаа тодорхой хэлэх нь чухал. Урьдчилсан төсөв гаргах үе шат уу, эсвэл нийлүүлэгч сонгох эцсийн үе шат уу гэдгээс хамаарч шаардлагатай мэдээллийн хэмжээ өөр байна.",
          "Мөн шийдвэр гаргах хүлээгдэж буй хугацааг тэмдэглэнэ. Энэ нь хариу өгөх дарааллыг тодорхойлоход тусална.",
        ],
      },
      {
        heading: "Файлын зохион байгуулалтыг хэрхэн хийх вэ?",
        paragraphs: [
          "Файлын нэршил нь төслийн нэр, баримтын төрөл, огноо, хувилбарын дугаар гэсэн дөрвөн хэсгээс бүрдэх нь хамгийн ойлгомжтой. Жишээ нь төслийн нэр, дараа нь өрөөний жагсаалт, дараа нь огноо.",
          "Бүх хавсралтад нэг ижил нэршлийн систем хэрэглэснээр хүлээн авагч файлуудыг хурдан ялгаж, буруу файл нээх эрсдэл багасна.",
        ],
      },
      {
        heading: "Илгээхийн өмнөх эцсийн шалгалт",
        paragraphs: [
          "Илгээхийн өмнө дараах дөрвийг шалгана: өрөөний жагсаалт бүрэн эсэх, хэмжээний нэгж нэг ижил эсэх, материалын тодорхойлолт гурван түвшинд байгаа эсэх, хүлээгдэж буй үе шат тодорхой бичигдсэн эсэх.",
          "Эдгээр дөрөв бүрэн болсны дараа илгээх нь хамгийн бага эрсдэлтэй. Дутуу багц илгээснээр хэд хэдэн удаа нэмэлт асуулт хариулах шаардлага гарч, цаг алдагдана.",
        ],
      },
      {
        heading: "Хүсэлтийг хэдэн үе шаттай илгээх нь зүйтэй вэ?",
        paragraphs: [
          "Бүх мэдээллийг нэг дор цуглуулахыг хүлээх нь цаг алдалт болдог. Тиймээс эхний шатанд өрөөний жагсаалт ба ерөнхий чиглэлийг, хоёрдугаар шатанд хэмжээ ба материалын тодорхойлолтыг, гуравдугаар шатанд өнгөний дээж ба эцсийн баталгаажуулалтыг илгээх нь илүү үр дүнтэй.",
          "Үе шат бүрийн төгсгөлд ямар мэдээлэл батлагдсаныг бичгээр тэмдэглэх нь чухал. Ингэснээр дараагийн үе шатанд өмнөх шийдвэр дахин хэлэлцэгдэхгүй.",
        ],
      },
    ],
    faqs: [
      {
        question: "Хүсэлтэд ямар файлын төрөл хүлээн авах вэ?",
        answer:
          "Хүснэгтийн хувьд Excel, зураг ба тайлбарын хувьд PDF, гэрэл зургийн хувьд түгээмэл форматууд тохиромжтой. Гол нь файл нээгдэх боломжтой байх явдал юм.",
      },
      {
        question: "Хэмжээний зураггүйгээр эхлэх боломжтой юу?",
        answer:
          "Болох боловч хариулт ерөнхий түвшинд байна. Тодорхой санал авахын тулд дор хаяж өрөөний ерөнхий хэмжээ шаардлагатай.",
      },
      {
        question: "Материалын дээжийг шуудангаар илгээх шаардлагатай юу?",
        answer:
          "Эхний шатанд гэрэл зураг хангалттай. Гэхдээ эцсийн баталгаажуулалтад бодит дээж шаардлагатай тул үүнийг урьдчилан төлөвлөх нь зүйтэй.",
      },
      {
        question: "Хэдэн нийлүүлэгчид нэгэн зэрэг илгээх нь зүйтэй вэ?",
        answer:
          "Харьцуулалт хийх боломжтой хэмжээгээр илгээх нь зүйтэй. Гэхдээ бүгдэд нэг ижил баримт очсон эсэхийг шалгаж, нэг стандарт хувилбар ашиглана.",
      },
      {
        question: "Хувилбарын дугаарыг яагаад заавал бичих вэ?",
        answer:
          "Олон хувилбар зэрэг эргэлдэх үед аль нь хамгийн сүүлийн эсэхийг тодорхойлоход тусална. Мөн буцаах шаардлагатай үед өмнөх хувилбарыг олоход хялбар.",
      },
      {
        question: "Хариу авах хүртэл юу хийх вэ?",
        answer:
          "Тухайн хугацаанд нэмэлт мэдээлэл цуглуулж, дараагийн үе шатын бэлтгэлийг үргэлжлүүлэх нь зүйтэй. Мөн илгээсэн баримтыг хуулбарлан хадгална.",
      },
      {
        question: "Багцыг ямар хэлээр бэлтгэх нь зүйтэй вэ?",
        answer:
          "Хүснэгт ба хэмжээг олон улсын нийтлэг хэлбэрээр, тайлбарыг тухайн төслийн ажлын хэлээр бэлтгэх нь хамгийн тохиромжтой. Хоёр хэл хольсон баримт нь техникийн нэр томьёоны зөрүү үүсгэдэг.",
      },
    ],
  },
  {
    id: "hotel-renovation-phased-procurement-sample-approval-russia",
    market: "ru",
    title: "Поэтапная закупка мебели при реконструкции отеля и утверждение образцов",
    tag: "Гостиница",
    excerpt:
      "Как разбить поставку мебели на этапы при реконструкции отеля, какие образцы утвердить до заказа и как фиксировать решения, чтобы не остановить ввод номеров.",
    date: "2026-10-08",
    readingMin: 7,
    image: "/images/blog/hotel-lobby-trends-2026.webp",
    imageAlt: "Интерьер гостиничного лобби как ориентир по материалам и отделке",
    definition:
      "Поэтапная закупка мебели при реконструкции отеля — это разбивка всего объёма на пусковые блоки, при которой каждый блок закрывается собственной спецификацией, собственными образцами и отдельной проверкой, а не одной общей сметой на весь корпус.",
    takeaways: [
      "Пусковой блок формируется по этажам или зонам, а не по типам мебели.",
      "Образцы материалов утверждаются до размещения заказа и хранятся у обеих сторон.",
      "Для каждого блока фиксируется свой перечень позиций и своя дата готовности.",
      "Замена позиции внутри блока допускается только письменно и с пересчётом сроков.",
      "Приёмка блока проводится отдельно, чтобы не блокировать остальные этажи.",
      "Окна для монтажа в работающем отеле фиксируются по блокам заранее.",
    ],
    sections: [
      {
        heading: "Почему реконструкцию нельзя закрывать одной спецификацией?",
        paragraphs: [
          "При реконструкции действующего отеля часть номеров продолжает работать. Если весь объём идёт одной спецификацией, то любая задержка по одной позиции останавливает ввод сразу всех этажей. Разбивка на пусковые блоки позволяет вводить этажи постепенно и сохранять работу отеля.",
          "Кроме того, единая спецификация быстро устаревает: решения по отделке меняются от этажа к этажу, а иногда и в пределах одного этажа. Блочная структура позволяет обновлять только нужный фрагмент.",
        ],
      },
      {
        heading: "Как формировать пусковые блоки?",
        paragraphs: [
          "Практичнее всего делить по этажам или по функциональным зонам: номерной фонд, лобби и общественные зоны, ресторан, конференц-зона, служебные помещения. Внутри блока позиции группируются по типу номера, а не по типу мебели.",
          "Для каждого блока определяется свой перечень позиций, свой комплект образцов и своя дата готовности. Это позволяет параллельно вести несколько этапов и не зависеть от одного поставщика по всему корпусу.",
        ],
      },
      {
        heading: "Какие образцы нужно утвердить до заказа?",
        paragraphs: [
          "До размещения заказа имеет смысл утвердить образцы отделки корпуса, обивки, металла и столешниц. Для каждой позиции образец маркируется, фотографируется и подписывается, а копия остаётся у обеих сторон.",
          "Утверждение образца по фотографии в каталоге обычно недостаточно. Один и тот же код цвета в разных партиях выглядит по-разному, поэтому финальное решение лучше принимать по физическому образцу.",
        ],
      },
      {
        heading: "Как фиксировать изменения внутри блока?",
        paragraphs: [
          "Любая замена позиции оформляется письменно: что меняется, почему, кто согласовал и как это влияет на дату готовности блока. Устные договорённости почти всегда теряются уже через несколько недель.",
          "Если замена неизбежна, стоит проверить, не задевает ли она смежные позиции. Например, смена обивки кресла может потребовать повторного подбора по износостойкости.",
        ],
      },
      {
        heading: "Как проводить приёмку по этапам?",
        paragraphs: [
          "Приёмка ведётся по блокам, а не по всему объёму. Это позволяет выявить замечания на первом этаже и не повторять их на следующих, что особенно важно при повторяющихся типах номеров.",
          "Замечания фиксируются построчно с привязкой к номеру помещения. Такой перечень удобно передавать и поставщику, и подрядчику по монтажу, не смешивая зоны ответственности.",
        ],
      },
      {
        heading: "Как быть, если отель продолжает работать во время монтажа?",
        paragraphs: [
          "Работающий отель задаёт жёсткие окна для монтажа. Обычно они попадают на этажи с низкой загрузкой, а не на удобные для подрядчика даты. Эти окна стоит зафиксировать в графике по блокам заранее, вместе с зонами временного хранения.",
          "Нужно предусмотреть и защиту уже смонтированных зон от прохода других подрядчиков. Простая защита кромок и согласованный маршрут перемещения грузов убирают большинство повреждений до сдачи.",
        ],
      },
    ],
    faqs: [
      {
        question: "Сколько пусковых блоков обычно имеет смысл выделять?",
        answer:
          "Для городского отеля чаще всего достаточно трёх блоков: номерной фонд, общественные зоны и служебные помещения. Дальнейшее дробление зависит от количества этажей и графика ввода.",
      },
      {
        question: "Можно ли утверждать образцы параллельно с разработкой спецификации?",
        answer:
          "Да, это даже удобнее. Пока спецификация уточняется по количеству, образцы уже проходят согласование, и к моменту размещения заказа решение готово.",
      },
      {
        question: "Что делать, если образец и партия визуально отличаются?",
        answer:
          "Зафиксировать допустимый диапазон отклонения заранее, до заказа. Для натуральных материалов небольшое расхождение считается нормой, для крашеных поверхностей — нет.",
      },
      {
        question: "Нужно ли хранить утверждённые образцы после сдачи объекта?",
        answer:
          "Да. Они пригодятся при плановой замене отдельных позиций, когда нужно повторить тот же вид отделки без повторного согласования всего комплекта.",
      },
      {
        question: "Как не сорвать график ввода, если один блок задерживается?",
        answer:
          "Разделить приёмку и монтаж по блокам заранее и назначить ответственного за каждый блок. Тогда задержка одного этажа не останавливает остальные.",
      },
      {
        question: "Кто должен подписывать изменения по блоку?",
        answer:
          "Представитель проектной команды и лицо, отвечающее за бюджет. Без второй подписи изменение считается недействительным и не влияет на график.",
      },
      {
        question: "Что делать, если часть номеров заселена в момент монтажа?",
        answer:
          "Выделить отдельный маршрут перемещения грузов и защитить общие зоны. Монтаж в жилой части этажа лучше проводить в согласованные часы, чтобы не мешать гостям.",
      },
    ],
  },
  {
    id: "office-boq-comparable-quote-comparison-russia",
    market: "ru",
    title: "Как сравнивать предложения на офисную мебель по одинаковому BOQ",
    tag: "Офис",
    excerpt:
      "Почему предложения на офисную мебель нельзя сравнивать по итоговой сумме, как привести их к одной базе и какие расхождения разбирать в первую очередь.",
    date: "2026-10-08",
    readingMin: 6,
    image: "/images/products/office-ca-05/office-ca-05-scene.jpg",
    imageAlt: "Офисное рабочее пространство как ориентир по составу позиций",
    definition:
      "Сравнение предложений на офисную мебель по одинаковому BOQ — это приведение всех ответов к одной структуре позиций, где каждая строка совпадает по габаритам, материалам и комплектации, и только после этого сопоставляется стоимость.",
    takeaways: [
      "Итоговая сумма без разбивки по строкам не показывает, за что именно платит заказчик.",
      "Габариты и материалы в предложениях нужно сводить к одной базе до сравнения цены.",
      "Комплектация — выдвижные ящики, кабель-каналы, экраны — чаще всего скрытая разница.",
      "Расхождения по срокам и объёму поставки разбираются отдельно от цены.",
      "Итоговая таблица сравнения остаётся рабочим документом до подписания.",
      "Нестандартные позиции сравниваются по чертежу, а не по названию.",
    ],
    sections: [
      {
        heading: "Почему итоговая сумма почти всегда вводит в заблуждение?",
        paragraphs: [
          "Два предложения с одинаковой итоговой суммой часто содержат разные наборы позиций. В одном случае в стоимость входят экраны и кабель-каналы, в другом — нет. Без построчного сопоставления разница становится видна только после заказа.",
          "Поэтому первым шагом сравнения должна быть не сумма, а структура. Сначала нужно убедиться, что обе стороны отвечали на один и тот же перечень позиций.",
        ],
      },
      {
        heading: "Как привести предложения к одной базе?",
        paragraphs: [
          "Для каждой позиции нужно сверить четыре параметра: габариты, материал корпуса и фасадов, комплектацию и тип фурнитуры. Если хотя бы один параметр отличается, строка помечается и разбирается отдельно.",
          "Удобнее всего вести сведение в одной таблице, где строки описывают позиции, а столбцы — поставщиков. Это позволяет видеть расхождения построчно, а не через итоговые числа.",
        ],
      },
      {
        heading: "Какие расхождения встречаются чаще всего?",
        paragraphs: [
          "Первое — толщина и тип плиты. Второе — наличие или отсутствие кабель-канала и монтажной панели. Третье — фурнитура: доводчики, тип направляющих, класс замков. Четвёртое — упаковка и способ доставки до этажа.",
          "Отдельно стоит проверить, включены ли в предложение сборка и расстановка по месту. Эта строка часто выпадает и всплывает уже на финальном этапе.",
        ],
      },
      {
        heading: "Как оценивать расхождения по срокам и объёму?",
        paragraphs: [
          "Нужно смотреть не на разницу в календарных днях, а на привязку к этапам самого проекта. Предложение, которое приходит позже, но совпадает с графиком ввода помещений, обычно удобнее.",
          "Объём поставки также стоит сопоставлять целиком: если один поставщик закрывает только часть позиций, заказчику придётся отдельно решать вопрос по остатку и сводить сроки вручную.",
        ],
      },
      {
        heading: "Что делать с итоговой таблицей после сравнения?",
        paragraphs: [
          "Таблица сравнения остаётся рабочим документом. В неё вносятся уточнения от поставщиков, и каждое изменение помечается датой. Так видно, как менялось предложение в процессе переговоров.",
          "К моменту выбора удобно иметь несколько позиций, приведённых к одной базе, с пояснениями по каждому существенному расхождению. Это упрощает защиту решения перед руководством.",
        ],
      },
      {
        heading: "Как сравнивать предложения, если часть позиций нестандартная?",
        paragraphs: [
          "Нестандартные позиции нельзя сопоставлять по названию — только по чертежу. Если по позиции нет габаритов и состава материалов, её стоит вынести в отдельный список и вернуться к сравнению после уточнения.",
          "Для таких строк полезно запрашивать эскиз с привязкой к помещению и перечень применяемых материалов. Без этого сравнивать стоимость не имеет смысла: под одинаковым названием могут стоять разные изделия.",
        ],
      },
    ],
    faqs: [
      {
        question: "Обязательно ли требовать BOQ от поставщика в ответе?",
        answer:
          "Да. Ответ в произвольной форме почти невозможно сопоставить. Форма, разосланная заказчиком, позволяет сравнивать предложения построчно.",
      },
      {
        question: "Что делать, если поставщик предлагает аналог позиции?",
        answer:
          "Запросить техническое описание аналога с габаритами и материалами. Если параметры отличаются существенно, строка рассматривается как отдельное предложение.",
      },
      {
        question: "Как сравнивать предложения с разной комплектацией?",
        answer:
          "Сначала восстановить недостающие позиции в одной из колонок и привести обе стороны к полному комплекту, и только затем сравнивать стоимость.",
      },
      {
        question: "Нужно ли учитывать упаковку и доставку отдельной строкой?",
        answer:
          "Да, иначе строки могут быть несопоставимы. Упаковка, доставка до этажа и подъём — это три разных пункта, которые стоит разделять.",
      },
      {
        question: "Сколько предложений достаточно для объективного сравнения?",
        answer:
          "Три полностью заполненных ответа уже дают понятную картину. Главное, чтобы все они отвечали на один и тот же перечень позиций.",
      },
      {
        question: "Можно ли менять BOQ после рассылки?",
        answer:
          "Можно, но нужно разослать обновлённую версию всем участникам одновременно и указать номер редакции, чтобы предложения оставались сопоставимыми.",
      },
      {
        question: "Что делать, если поставщик ответил не по всем строкам BOQ?",
        answer:
          "Запросить недостающие строки повторно, указав, что сравнение проводится только по полному перечню. Частично заполненные ответы искажают картину по стоимости.",
      },
    ],
  },
  {
    id: "restaurant-seating-layout-storage-russia",
    market: "ru",
    title: "Планировка посадки и хранение в ресторанном проекте: что уточнить до заказа",
    tag: "Ресторан",
    excerpt:
      "Какие параметры посадки, проходов и складских зон нужно зафиксировать до заказа мебели, чтобы планировка выдержала реальную загрузку зала.",
    date: "2026-10-08",
    readingMin: 6,
    image: "/images/blog/marble-dining-tables-tashkent.webp",
    imageAlt: "Обеденная зона ресторана как ориентир по габаритам посадки",
    definition:
      "Планировка посадки в ресторанном проекте — это расчёт количества посадочных мест и конфигурации зон с учётом ширины проходов и обслуживания, а хранение — это набор складских зон, рассчитанный на реальный объём посуды, мебели и расходных материалов.",
    takeaways: [
      "Посадочные места считаются по ширине проходов, а не только по площади зала.",
      "Зоны с разной посадкой — основной зал, бар, терраса, кабинеты — считаются отдельно.",
      "Складской объём включает не только продукты, но и резерв мебели.",
      "Для каждого типа посадки определяется свой набор столов и стульев.",
      "Планировка проверяется по сценарию полной загрузки до заказа.",
      "Высота стойки и высота табуретов согласуются вместе, до заказа.",
    ],
    sections: [
      {
        heading: "Как считать посадочные места корректно?",
        paragraphs: [
          "Расчёт по площади зала даёт завышенный результат. Реальное количество мест определяется шириной проходов, необходимых для обслуживания и перемещения гостей. Поэтому сначала размечаются траектории движения, а места считаются по остаточному пространству.",
          "Отдельно стоит учитывать проходы для посуды и тележек. Их ширина отличается от проходов для гостей, и именно эти траектории чаще всего уменьшают число мест в ряду.",
        ],
      },
      {
        heading: "Почему зоны нужно считать раздельно?",
        paragraphs: [
          "Основной зал, барная зона, терраса и отдельные кабинеты работают по-разному. Для каждой зоны характерны свои столы, стулья и требования к износостойкости. Сведение их в одну строку почти всегда даёт ошибку.",
          "Например, для террасы важнее влагостойкость и устойчивость к перепаду температур, а для кабинетов — акустика и плотность посадки.",
        ],
      },
      {
        heading: "Какой набор столов нужен для гибкой посадки?",
        paragraphs: [
          "Для гибкой посадки обычно нужны две-три базовые формы: квадратные столы на двоих, прямоугольные и столы под посадку группой. Соотношение между ними определяется по сценарию вечерней загрузки, а не по дневной.",
          "Важно проверить, как столы стыкуются между собой при перестановке. Одинаковая высота и совпадающие кромки позволяют менять конфигурацию зала без замены мебели.",
        ],
      },
      {
        heading: "Что учитывать при расчёте хранения?",
        paragraphs: [
          "Складские зоны в ресторане редко считают правильно с первого раза. Помимо продуктов и посуды нужно предусмотреть место для резерва мебели: складных столов, дополнительных стульев, детских кресел и запасных комплектов под замену.",
          "Отдельно стоит заложить зону для уборочного инвентаря и для хранения сезонных элементов террасы, если она есть. Эти позиции часто всплывают уже во время монтажа.",
        ],
      },
      {
        heading: "Как проверить планировку до заказа?",
        paragraphs: [
          "Планировку стоит разметить по сценарию полной загрузки: максимальное число гостей, одновременная работа официантов и проход с тележкой. Если хотя бы один маршрут перекрывается, конфигурацию нужно менять до заказа.",
          "Полезно также проверить сценарий трансформации зала под банкет или мероприятие: какие позиции убираются, куда именно они перемещаются и хватит ли для этого места.",
        ],
      },
      {
        heading: "Как планировать барную зону и высокие столы?",
        paragraphs: [
          "В барной зоне посадка устроена иначе: часть гостей стоит, часть сидит на высоких табуретах. Поэтому зона считается по длине стойки и по ширине подходов, а не по площади зала.",
          "Высоту стойки и высоту табуретов нужно согласовывать вместе, иначе посадка получается неудобной. Отдельно проверяется, куда ставится нога и хватает ли места для локтей, если вдоль стойки идёт проход.",
        ],
      },
    ],
    faqs: [
      {
        question: "Сколько посадочных мест можно разместить на заданной площади зала?",
        answer:
          "Оценить можно только после разметки проходов. Площадь зала сама по себе не даёт корректного числа, поскольку значительная часть уходит на траектории движения и обслуживания.",
      },
      {
        question: "Нужно ли закладывать резервную мебель в спецификацию?",
        answer:
          "Да, обычно в размере небольшого процента от основного количества. Это позволяет оперативно заменить повреждённую позицию без отдельной закупки.",
      },
      {
        question: "Чем отличается мебель для зала и для террасы?",
        answer:
          "Требованиями к материалам: для террасы важна влагостойкость, устойчивость к ультрафиолету и перепадам температуры, для зала — износостойкость и удобство уборки.",
      },
      {
        question: "Как проверить, что столы подходят для перестановки?",
        answer:
          "Проверить совпадение высоты, геометрии кромки и устойчивость при стыковке. Если параметры совпадают, конфигурацию зала можно менять без замены мебели.",
      },
      {
        question: "Что делать с хранением сезонных элементов?",
        answer:
          "Заложить отдельную зону с учётом габаритов сложенных элементов и предусмотреть защиту от влаги. Иначе сезонная мебель занимает место в основном складе.",
      },
      {
        question: "Кто должен согласовывать планировку посадки?",
        answer:
          "Технолог или управляющий ресторана вместе с проектной командой. Технологический сценарий определяет проходы, а проектная команда — габариты и расстановку.",
      },
      {
        question: "Сколько места нужно на одного гостя у барной стойки?",
        answer:
          "Ширина посадочного места определяется шириной табурета и свободой локтей при движении вдоль стойки. Точное значение задаётся после разметки проходов у стойки.",
      },
    ],
  },
  {
    id: "custom-furniture-interface-installation-responsibility-russia",
    market: "ru",
    title: "Мебель по чертежам: разграничение интерфейсов и ответственности за монтаж",
    tag: "Нестандарт",
    excerpt:
      "Как заранее распределить зоны ответственности между производителем мебели, подрядчиком и проектной командой, когда изделие стыкуется с инженерными системами.",
    date: "2026-10-08",
    readingMin: 7,
    image: "/images/fabrica/assembly.webp",
    imageAlt: "Участок сборки и подготовки изделий перед отгрузкой",
    definition:
      "Интерфейс в мебели по чертежам — это место стыковки изделия с инженерными системами или строительными конструкциями, а разграничение ответственности — это письменное распределение работ по подготовке, монтажу и приёмке между всеми участниками.",
    takeaways: [
      "Интерфейсы описываются на чертеже, а не обсуждаются на площадке.",
      "Ответственность за подготовку основания фиксируется до начала монтажа.",
      "Точки подключения к электрике, воде и вентиляции размечаются заранее.",
      "Каждый участник подтверждает свою зону письменно и до начала работ.",
      "Приёмка ведётся по интерфейсам, а не по общему впечатлению от объекта.",
      "Проверка изделия до отгрузки ведётся по утверждённому чертежу и фиксируется фотографиями.",
    ],
    sections: [
      {
        heading: "Что считается интерфейсом в проекте мебели?",
        paragraphs: [
          "Интерфейс — это место, где изделие встречается с чем-то, что делают другие: стена, пол, потолок, электрика, вода, вентиляция, слаботочные системы. Каждое такое место требует согласования, потому что ошибки там почти всегда выходят на позднем этапе.",
          "Например, встроенный шкаф может перекрыть доступ к вентиляционному выходу, а столешница — к розетке. Такие конфликты дешевле выявить на чертеже, чем на объекте.",
        ],
      },
      {
        heading: "Как распределить ответственность за основание?",
        paragraphs: [
          "Подготовка основания — самая частая зона спора. Ровность стен и пола, наличие закладных, выполненные выводы инженерных систем: всё это должно быть закреплено за конкретным участником до начала работ.",
          "Полезно составить простую таблицу, где перечислены виды работ и напротив каждого стоит исполнитель. Она не заменяет договор, но снимает большинство недоразумений на площадке.",
        ],
      },
      {
        heading: "Когда нужно размечать точки подключения?",
        paragraphs: [
          "Разметку точек подключения стоит делать до финальной корректировки чертежей мебели. Если розетки и выводы обозначены уже после, изделие приходится дорабатывать по месту.",
          "После разметки полезно провести совместный обмер и зафиксировать результат фотографиями с привязкой к помещению. Это создаёт общую точку отсчёта для всех участников.",
        ],
      },
      {
        heading: "Как проводить приёмку по интерфейсам?",
        paragraphs: [
          "Приёмка по интерфейсам означает, что проверяется не общее впечатление, а конкретный стык: зазоры, совпадение по уровню, доступ к инженерным элементам, полнота закрытия кромки. По каждому пункту ведётся отдельная отметка.",
          "Такой подход позволяет разделить замечания по зонам ответственности сразу, без переноса обсуждения на следующую встречу.",
        ],
      },
      {
        heading: "Как оформлять изменения в ходе монтажа?",
        paragraphs: [
          "Изменения в ходе монтажа оформляются письменно и коротко: что обнаружено, кто отвечает за устранение, к какому сроку. Записи удобно вести в одном журнале с датами.",
          "Если изменение затрагивает другого участника, его нужно привлечь к решению до начала работ, а не после. Иначе спор переносится на этап сдачи объекта.",
        ],
      },
      {
        heading: "Как проверять изделие до отправки на объект?",
        paragraphs: [
          "Проверка перед отправкой закрывает те вопросы, которые на объекте решать дороже. Стоит сверить габариты с утверждённым чертежом, состав материалов, сторону открывания и расположение вырезов под инженерные узлы.",
          "Результат проверки фиксируется фотографиями и кратким перечнем выявленных отклонений. Заказчику этот лист передаётся до отгрузки, чтобы приёмка на объекте шла по заранее известным параметрам.",
        ],
      },
    ],
    faqs: [
      {
        question: "Кто отвечает за несоответствие стен при монтаже встроенной мебели?",
        answer:
          "Тот участник, за которым закреплена подготовка основания. Поэтому важно зафиксировать это заранее в таблице работ, а не разбираться по факту.",
      },
      {
        question: "Нужен ли отдельный чертёж по интерфейсам?",
        answer:
          "Да, это удобнее, чем искать стыки на общем чертеже. Такой лист показывает только места сопряжения и упрощает согласование между участниками.",
      },
      {
        question: "Что делать, если розетка оказалась внутри корпуса изделия?",
        answer:
          "Решение принимается совместно с проектной командой: либо смещается вывод, либо корректируется изделие. До начала монтажа такой конфликт обходится дешевле.",
      },
      {
        question: "Как оформлять доступ к инженерным узлам?",
        answer:
          "Через съёмные панели или люки, обозначенные на чертеже. Важно, чтобы доступ сохранялся после установки и не требовал демонтажа изделия.",
      },
      {
        question: "Кто проводит приёмку интерфейсов?",
        answer:
          "Проектная команда вместе с представителями производителя и монтажного подрядчика. Каждый подтверждает свою зону отдельно.",
      },
      {
        question: "Можно ли вести монтаж параллельно с другими работами?",
        answer:
          "Можно, если зоны разделены и интерфейсы уже согласованы. Иначе параллельные работы почти всегда приводят к взаимным повреждениям и спорам.",
      },
      {
        question: "Кто отвечает за сохранность изделия до передачи заказчику?",
        answer:
          "Ответственность начинается с момента отгрузки и распределяется по договору между производителем, перевозчиком и монтажным подрядчиком. Поэтому точки перехода стоит описать заранее, а не после повреждения.",
      },
    ],
  },
{
    id: "canton-fair-2026-project-brief-preparation-mongolia",
    market: "mn",
    title: "Кантоны үзэсгэлэнд явахаас өмнө тавилгын төслийн товчоог хэрхэн бэлтгэх вэ",
    tag: "Тавилгын төсөл",
    excerpt:
      "Төслийн товчоо бэлэн байвал Кантоны үзэсгэлэн дээр цуглуулсан мэдээллийг гэртээ харьсны дараа шууд харьцуулж, нэг ижил суурь дээр үнэлэх боломжтой болдог. Энэ нийтлэл юу багтаах, юу цуглуулах, хэрхэн харьцуулахыг алхам алхмаар харуулна.",
    date: "2026-10-12",
    readingMin: 7,
    image: "/images/blog/ffe-timeline.webp",
    imageAlt: "Кантон үзэсгэлэнд бэлтгэх тавилгын төслийн товчооны хуваарь",
    definition:
      "Төслийн товчоо гэдэг нь тавилгын хэрэгцээг өрөөний жагсаалт, талбай ба таазны өндөр, шалны төлөвлөгөө, тоо ширхэг, материал ба өнгөний дээж, төсвийн хүрээ, суурилуулалтын нөхцөлтэй хамт нэг баримтад нэгтгэсэн, нийлүүлэгчид илгээхэд бэлэн худалдан авалтын баримт юм.",
    takeaways: [
      "Тавилга Кантоны үзэсгэлэнгийн хоёрдугаар үед тавигддаг тул аяллын хуваарийг эхний үетэй хэт хатуу холбох шаардлагагүй.",
      "Өрөөний жагсаалт, талбай, таазны өндөр, шалны төлөвлөгөө нь товчооны үндэс болно.",
      "Тоо ширхэг, хэмжээ, материал, өнгөний дээжийг мөр тус бүрээр тусад нь тэмдэглэнэ.",
      "Үзэсгэлэн дээр дээжийн ойрын зураг, материалын жижиг дээж, холбох хэрэгслийн дэлгэрэнгүй, сав баглаа боодлын аргыг цуглуулна.",
      "Үнэ болон нөхцөлийг аман ярианаас бус, мөр тус бүрийн бүтэцтэй бичгээр авна.",
      "Гэртээ харьсны дараа бүх материалыг нэг харьцуулах багц болгож, дутуу мэдээллийг бичгээр тодруулна.",
    ],
    sections: [
      {
        heading: "Төслийн товчоог яагаад үзэсгэлэнд явахаас өмнө бэлтгэх нь зүйтэй вэ?",
        paragraphs: [
          "Кантоны үзэсгэлэн дээр нэг өдрийн дотор олон нийлүүлэгчтэй уулзах боломжтой ч, уулзалт бүр богино байдаг. Товчоогүй очвол яриа ерөнхий түвшинд үлдэж, буцаж ирэхэд юуг ч харьцуулах боломжгүй болдог. Товчоо нь яриаг тухайн төслийн хэмжээ рүү чиглүүлж, хариултуудыг ижил суурь дээр харьцуулах боломжтой болгодог. Ингэснээр нэг нийлүүлэгчийн саналыг нөгөөтэй нь шууд зэрэгцүүлж үзэх боломж бүрддэг. Нэг өдрийн хуваарийг урьдчилан гаргаж, уулзалт бүрд хэдэн минут зарцуулахаа тооцвол илүү олон нийлүүлэгчийг үзэх боломжтой.",
          "Мөн товчоо нь нийлүүлэгчид таны хэрэгцээг хэр ноцтой авч үзэхийг тодорхойлдог. Хэрэгцээгээ тодорхой илэрхийлсэн зураг, жагсаалттай очиход яриа богино, агуулгатай болдог. Харин бэлтгэлгүй очсон тохиолдолд цаг их зарцуулагдаж, авсан мэдээлэл нь хожим ашиглахад хэцүү, бүрхэг хэлбэрээр үлддэг.",
        ],
      },
      {
        heading: "Товчоонд ямар материалууд заавал багтах вэ?",
        paragraphs: [
          "Хамгийн багадаа долоон зүйл багтах нь зүйтэй: өрөөний жагсаалт, талбай ба таазны өндөр, шалны төлөвлөгөө, тавилгын тоо ширхэг, материал ба өнгөний дээж, төсвийн хүрээ, суурилуулалтын нөхцөл. Эдгээрийг нэг файлд, хувилбарын дугаартайгаар хөтлөх нь дараагийн шатанд маргаан багасгана. Файлын нэрэнд огноог оруулбал аль хувилбар хэзээ илгээгдсэнийг хянахад хялбар болно. Материал, өнгөний дээжийг зурагтай хамт нэг хавтас болгон хавсаргавал илгээх баримт бүрэн болдог.",
          "Өрөөний жагсаалтыг төрөл тус бүрээр бичиж, тавилгыг тухайн өрөөнд байрлуулсан байдлаар нэрлэнэ. Жишээ нь зочны өрөөний буйдан, люкс өрөөний буйдан гэж ялгавал ижил нэртэй мөр давхардахгүй. Нийлүүлэгч буруу тооцоо гаргах эрсдэл буурч, саналыг мөр тус бүрээр харьцуулах боломж бүрдэнэ.",
        ],
      },
      {
        heading: "Тавилга ямар үед тавигддаг вэ, аяллаа хэрхэн төлөвлөх вэ?",
        paragraphs: [
          "Кантоны үзэсгэлэн гурван үе шаттай. Эхний үе 2026 оны 10 дугаар сарын 15-наас 19-ний өдрийг хүртэл, хоёрдугаар үе 2026 оны 10 дугаар сарын 23-наас 27-ны өдрийг хүртэл, гуравдугаар үе 2026 оны 10 дугаар сарын 31-ээс 11 дүгээр сарын 4-ний өдрийг хүртэл үргэлжилнэ. Тавилга нь хоёрдугаар үед тавигддаг.",
          "Эхний үе нь электрон бараа, гэрэлтүүлэг, металл эд анги зэрэг үйлдвэрлэлийн чиглэлд төвлөрдөг тул тавилгын үндсэн уулзалтууд хоёрдугаар үед төвлөрнө. Хоёр үеийн хооронд 2026 оны 10 дугаар сарын 20-ноос 22-ны өдрийг хүртэл солилцооны завсарлага байдаг тул аяллын хуваарьт энэ цонхыг тооцох нь зүйтэй. Мөн 10 дугаар сарын 28-наас 30-ны өдрийг хүртэл хоёр ба гуравдугаар үеийн хооронд дахин завсарлага байна. Аяллын үе бүрд ямар уулзалт хийхийг урьдчилан хуваарилбал цаг хэмнэнэ.",
        ],
      },
      {
        heading: "Үзэсгэлэн дээр ямар мэдээлэл цуглуулах вэ?",
        paragraphs: [
          "Дээж бүрийн ойрын зураг, материалын жижиг дээж, холбох хэрэгслийн дэлгэрэнгүй, гадаргуугийн боловсруулалтын тайлбарыг цуглуулна. Зураг дээр дээжийн хажууд хэмжээ харагдахаар хамт авбал дараа нь ялгахад хялбар болно. Дээж бүрд төслийн өрөөний нэрийг шууд тэмдэглэж бичих нь сүүлд андуурахаас сэргийлнэ. Мөн гадаргуугийн боловсруулалт зөөлөн эсвэл товойсон эсэхийг гараараа шалгаж, мэдрэмжийг бичиж үлдээх нь ашигтай.",
          "Сав баглаа боодлын арга, хайрцагны хэмжээ, булан хамгаалалтын шийдлийг асууна. Мөн ижил төслийн өөр өрөөнд тохирох хувилбарыг санал болгосон эсэхийг тодруулж, сонголтуудыг бичиж үлдээнэ. Эдгээр мэдээлэл нь гэртээ харьсны дараа аль дээж аль өрөөнд тохирохыг шийдэхэд шууд тусалдаг.",
        ],
      },
      {
        heading: "Баглаа боодол ба суурилуулалтын нөхцлийг хэрхэн тодруулах вэ?",
        paragraphs: [
          "Үзэсгэлэн дээр аль хэсгийг нийлүүлэгч угсарч, аль хэсгийг газар дээр суурилуулахыг тодруулна. Хариуцлагын хил хязгаар, шаардлагатай бэлтгэл ажлыг бичгээр тэмдэглэснээр суурилуулалтын үеийн зөрчил багасна. Шалны тэгш байдал, цахилгааны цэг, өргөх замын нөхцөл зэргийг ч урьдчилан асууж тэмдэглэх нь зүйтэй. Суурилуулалтын дараалал ба ажиллах цагийн хязгаарыг ч урьдчилан асууж тэмдэглэвэл зүйтэй.",
          "Хүргэлтийн хугацаа, баталгаа, гэрчилгээ зэрэг нөхцлийг тухайн төслийн нөхцөлөөр тус тусад нь тодруулж, бичгээр баталгаажуулахыг хүснэ. Энэ нийтлэлд тэдгээрийн талаар ямар нэг тоо, амлалт өгөхгүй. Харин ямар асуулт тавих, ямар хариултыг бичгээр авах талыг тодорхой зааж өгнө.",
        ],
      },
      {
        heading: "Гэртээ харьсны дараа товчоог хэрхэн харьцуулах багц болгох вэ?",
        paragraphs: [
          "Буцаж ирсний дараа цуглуулсан материалыг нийлүүлэгч тус бүрээр, мөр тус бүрийн бүтэцтэй нэг хүснэгтэд оруулна. Ингэснээр нэг ижил мөрийг хоёр өөр санал дээр шууд харьцуулах боломжтой болно. Нийт дүнгээр бус, мөр тус бүрийн бүтцээр харьцуулах нь ялгааг илрүүлэх гол арга юм. Ижил өрөөний ижил мөрийг хоёр нийлүүлэгчийн санал дээр зэрэгцүүлэн харах нь ялгааг тод харуулна.",
          "Дараа нь дутуу байгаа мэдээллийг жагсааж, нийлүүлэгч бүрээс бичгээр тодруулга авна. Ингэж цуглуулсан харьцуулах багц нь дараагийн шатны шийдвэрийг хурдасгана. Анхны сэтгэгдэл биш, бүрэн мэдээлэлд үндэслэн сонголт хийх боломж бүрдэнэ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Товчоог хэр нарийвчилсан байх ёстой вэ?",
        answer:
          "Товчоо нь нийлүүлэгчид шууд хариулах боломж олгох хэмжээнд нарийвчилсан байх нь хангалттай. Хэт их мэдээлэл биш, харин шийдвэр гаргахад шаардлагатай гол зүйлсийг тодорхой бичих нь чухал.",
      },
      {
        question: "Хэмжээг зурагнаас авч болох уу, эсвэл газар дээр хэмжих үү?",
        answer:
          "Хоёулаа байвал илүү найдвартай. Архитектурын зураг нь ерөнхий хэмжээг, газар дээрх хэмжилт нь бодит нөхцөлийг харуулдаг тул зөрвөл хоёуланг нь тэмдэглэж, аль нь шийдвэрлэхийг хариуцсан архитектортой тодруулна.",
      },
      {
        question: "Өнгөний дээжийг яаж харьцуулах вэ?",
        answer:
          "Ижил нөхцөлд, нэг гэрэлтүүлгийн дор хоёр дээжийг зэрэгцүүлж харьцуулна. Гэрлийн нөхцөл өөрчлөгдвөл нэг дээж өөр харагддаг тул үзэсгэлэн дээр болон гэртээ хоёуланд нь шалгах нь зүйтэй.",
      },
      {
        question: "Тавилга яагаад хоёрдугаар үед тавигддаг вэ?",
        answer:
          "Хоёрдугаар үе нь гэр ахуйн бүтээгдэхүүний үе бөгөөд тавилга энэ үед хамаардаг. Эхний үе нь электрон бараа, гэрэлтүүлэг, металл зэрэг үйлдвэрлэлийн чиглэлд төвлөрдөг тул тавилгын уулзалтыг тусдаа төлөвлөнө.",
      },
      {
        question: "Үнэ болон нөхцлийг яагаад бичгээр авах вэ?",
        answer:
          "Аман яриаг хожим дахин сэргээхэд хэцүү байдаг. Мөр тус бүрийн бүтэцтэй бичгээр авбал саналуудыг ижил суурь дээр харьцуулах боломжтой болж, хожуу үеийн зөрчил багасна.",
      },
      {
        question: "Визийн материалыг хэрхэн бэлтгэх вэ?",
        answer:
          "Шаардлагатай материалын жагсаалтыг холбогдох элчин сайдын яам, консулын газрын албан ёсны мэдээллээс шалгана. Энэ нийтлэл зөвхөн ерөнхий процессыг дурдаж, виз олгох баталгаа өгөхгүй.",
      },
      {
        question: "Олон нийлүүлэгчтэй уулзахдаа цагаа хэрхэн хуваарилах вэ?",
        answer:
          "Товчоонд багтсан өрөөний төрөл тус бүрээр үзэх зүйлсээ урьдчилан жагсааж, уулзалт бүрд тодорхой асуултын жагсаалт бэлтгэнэ. Ингэснээр цөөн цагт илүү харьцуулах боломжтой мэдээлэл цуглуулах боломжтой болно.",
      },
    ],
  },
  {
    id: "canton-fair-2026-project-brief-preparation-russia",
    market: "ru",
    title: "Подготовка проектного брифа к Кантонской выставке и отбор поставщиков",
    tag: "Проект",
    excerpt:
      "Проектный бриф, собранный до поездки, превращает разрозненные визиты в сопоставимые данные. Разбираем, какие документы взять с собой, что уточнить на месте и как сравнивать предложения после возвращения.",
    date: "2026-10-12",
    readingMin: 7,
    image: "/images/blog/canton-fair-2026-registration-travel.webp",
    imageAlt: "Подготовка документов и плана поездки к Кантонской выставке",
    definition:
      "Проектный бриф для Кантонской выставки — это собранный в один документ набор исходных данных о проекте: перечень помещений, площади и высоты потолков, планировки, количество позиций, образцы материалов и цвета, диапазон бюджета и условия монтажа, — по которому поставщик может отвечать предметно, а не общими каталогами.",
    takeaways: [
      "Перечень помещений, площади и высоты потолков задают рамку будущего брифа.",
      "Образцы материалов и цвета фиксируются с маркировкой, а не только по фото в каталоге.",
      "Мебель показывается во второй фазе выставки, поэтому график поездки не стоит жёстко привязывать к первой фазе.",
      "На месте уточняются границы ответственности, упаковка, перечень документов и порядок изменений.",
      "Предложения принимаются построчно и в письменном виде, а не как общий прайс.",
      "После возвращения неполные ответы собираются в один запрос на уточнение.",
    ],
    sections: [
      {
        heading: "Зачем готовить проектный бриф до поездки?",
        paragraphs: [
          "На выставке за день проходит много встреч, но каждая встреча короткая. Без брифа разговор остаётся общим, и после возвращения сравнивать оказывается нечего. Бриф переводит беседу в конкретные параметры проекта, поэтому ответы разных поставщиков становятся сопоставимыми между собой. Даже короткий бриф из одной страницы заметно меняет ход разговора на встрече.",
          "Кроме того, бриф показывает поставщику серьёзность запроса. С планировками, перечнем помещений и образцами разговор идёт короче и предметнее. Без подготовки время уходит на общие презентации, и разговор дольше остаётся пересказом каталога, а не обсуждением проекта.",
        ],
      },
      {
        heading: "Как правильно организовать чертежи и перечень помещений?",
        paragraphs: [
          "Планировки стоит привести к одному формату и одной единице измерения. Перечень помещений составляется по типам, и мебель называется так, как она стоит в конкретном помещении, а не абстрактным кодом. Такой подход убирает дублирование позиций и упрощает сверку между разделами. Единицы измерения указываются один раз и далее не меняются по всему документу.",
          "К перечню полезно приложить высоты потолков и отметки проёмов. Это заранее снимает часть вопросов о габаритах и уменьшает риск пересчёта позиций уже после заказа. Полезно указывать версию документа с датой, чтобы было понятно, какой редакцией пользуется поставщик. Так поставщик видит актуальную редакцию и не работает с устаревшим перечнем.",
        ],
      },
      {
        heading: "Что уточнить на месте до того, как сравнивать цены?",
        paragraphs: [
          "Сначала выясняются границы ответственности: что входит в поставку, а что выполняется на объекте силами заказчика. Отдельно проговариваются упаковка, способ защиты кромок и условия приёмки. Эти пункты удобно задавать до обсуждения цены, чтобы сравнивать предложения на равных условиях. Чем раньше они проговорены, тем меньше спорных ситуаций возникает на этапе приёмки.",
          "Затем запрашивается перечень документов, сопровождающих поставку, и порядок внесения изменений после согласования. Ответы фиксируются письменно, чтобы к ним можно было вернуться при сравнении. Если ответа нет, вопрос попадает в отдельный список и закрывается позже. К концу поездки такой список показывает, какие вопросы ещё открыты.",
        ],
      },
      {
        heading: "Чем первая фаза выставки отличается от второй?",
        paragraphs: [
          "Кантонская выставка проходит в три фазы. Первая фаза идёт с 15 по 19 октября 2026 года, вторая — с 23 по 27 октября 2026 года, третья — с 31 октября по 4 ноября 2026 года. Мебель показывается во второй фазе. Эти даты стоит держать под рукой при планировании встреч.",
          "Первая фаза ориентирована на промышленные направления: электронику, освещение, металл. Поэтому мебельные встречи планируются под вторую фазу, а между фазами остаётся переходный период с 20 по 22 октября 2026 года. Между второй и третьей фазами также есть переход с 28 по 30 октября 2026 года. С учётом этих периодов график поездки строится заранее и без спешки.",
        ],
      },
      {
        heading: "Как не получить вместо ответа общий каталог?",
        paragraphs: [
          "Общий каталог появляется там, где вопрос задан слишком широко. Помогает заранее подготовленный список вопросов по каждой позиции: габариты, материал, отделка, упаковка, комплектность. Чем конкретнее вопрос, тем конкретнее ответ по проекту. Список вопросов удобно держать в одном файле и отмечать, что уже закрыто.",
          "Полезно показать собственные планировки и образцы и попросить ответ именно по ним. Если ответа по проекту нет, это фиксируется, и позиция переносится в отдельный список уточнений. Так формируется понятный перечень того, что ещё нужно дозапросить. По нему проще понять, каких данных действительно не хватает для решения.",
        ],
      },
      {
        heading: "Как выстроить сравнение и уточнения после возвращения?",
        paragraphs: [
          "После поездки все данные сводятся в одну таблицу, где каждая позиция разложена построчно. Тогда предложения разных поставщиков сравниваются на одной основе, а не по итоговой сумме. Построчная структура сразу показывает, где условия отличаются. Одинаковые позиции выстраиваются друг под другом, и расхождения видны сразу.",
          "Незакрытые вопросы собираются в один запрос на уточнение. Ответы добавляются в ту же таблицу, и решение принимается по полноте данных, а не по первому впечатлению от встречи. Такой порядок позволяет вернуться к любому поставщику с предметным вопросом. В итоге выбор опирается на полную картину, а не на отдельные впечатления.",
        ],
      },
    ],
    faqs: [
      {
        question: "Насколько подробным должен быть бриф?",
        answer:
          "Достаточно той детализации, при которой поставщик может ответить по существу. Важнее не объём, а наличие параметров, по которым предложения сравниваются между собой.",
      },
      {
        question: "Можно ли брать габариты с чертежей или нужно мерить на объекте?",
        answer:
          "Лучше располагать обоими источниками. Чертежи дают общие размеры, а обмер на объекте отражает фактические условия, поэтому расхождения стоит указывать отдельно и согласовывать с проектной командой.",
      },
      {
        question: "Как сравнивать образцы отделки?",
        answer:
          "Одинаковые образцы сравниваются при одном освещении и рядом друг с другом. Один и тот же код цвета в разных партиях может выглядеть по-разному, поэтому проверка идёт и на месте, и после возвращения.",
      },
      {
        question: "Почему мебель показывают во второй фазе?",
        answer:
          "Вторая фаза посвящена товарам для дома, и мебель относится к ней. Первая фаза сосредоточена на промышленных направлениях, поэтому мебельные встречи планируются отдельно, под вторую фазу.",
      },
      {
        question: "Зачем фиксировать договорённости письменно?",
        answer:
          "Устные договорённости трудно восстановить через несколько недель. Письменная фиксация по каждой позиции позволяет вернуться к ней и сравнить условия разных поставщиков на равных.",
      },
      {
        question: "Как подготовить документы для поездки?",
        answer:
          "Перечень необходимых документов проверяется на официальных ресурсах консульства или посольства. Здесь упоминается только общий порядок действий; гарантий по выдаче визы не даётся.",
      },
      {
        question: "Как распорядиться временем при большом числе встреч?",
        answer:
          "По каждому типу помещения заранее составляется список того, что нужно увидеть и спросить. Тогда за короткое время собирается больше сопоставимых данных для дальнейшего сравнения.",
      },
    ],
  },
  {
    id: "hotel-furniture-boq-package-uzbekistan",
    market: "uz",
    title: "Mehmonxona mebeli uchun BOQ qanday tuziladi: xona turlari bo'yicha to'liq paket",
    tag: "Mehmonxona",
    excerpt: "Mehmonxona mebeli BOQni xona turlari kesimida tuzish, har bir pozitsiyaga majburiy maydonlarni yozish va uni taklif so'rovi paketiga aylantirish tartibi.",
    date: "2026-10-19",
    readingMin: 9,
    image: "/images/blog/ffe-timeline.webp",
    imageAlt: "Mehmonxona xonasi mebeli ro'yxati, o'lchov varaqasi va material namunalari stol ustida",
    definition: "Mehmonxona mebeli uchun BOQ — xona turlari kesimida har bir pozitsiyaning nomi, o'lchami, materiali, miqdori va o'rnatish talabi bilan bitta jadvalga jamlangan xarid hujjati. Xona turi bo'yicha bo'lingan BOQ tender jarayonida barcha takliflarni bir xil asosda taqqoslash imkonini beradi, chunki standart xona va lyuks xona mebeli alohida bloklarda hisoblanadi va har bir blok xona soniga ko'paytiriladi.",
    takeaways: [
      "BOQni bitta uzun ro'yxat emas, har bir xona turi uchun alohida blok qilib tuzing, shunda miqdorlar takrorlanmaydi va keyingi o'zgartirish oson bo'ladi.",
      "Har bir qatorda joylashuv, o'lcham, material, rang, miqdor va izoh bo'lsin; shu olti maydon takliflarni taqqoslashning asosiy sharti hisoblanadi.",
      "O'lchamlarni me'moriy chizma va xonadagi haqiqiy o'lchovdan oling, taxminiy raqamlarni alohida belgi bilan ajratib ko'rsating va farqni izohda yozing.",
      "Material nomini umumiy so'z bilan emas, qatlam turi, qalinligi, qirra yechimi va sirt ishlovi bilan yozing, rang kodini ham qo'shing.",
      "Fayl nomiga versiya raqami va sanani qo'shing, har bir o'zgarishni kim so'ragani va nima o'zgargani bilan qayd eting.",
      "Takliflarni umumiy summaga qarab emas, qator bo'yicha tarkib, birlik narxi va qo'shimcha xarajatlar bo'yicha solishtiring, aks holda arzon ko'ringan taklif keyin qimmatga tushadi.",
    ],
    sections: [
      {
        heading: "BOQ nima uchun xona turlari bo'yicha bo'linadi?",
        paragraphs: [
          "Mehmonxona loyihasida bitta xona turi o'nlab yoki yuzlab xonani ifodalaydi. Agar barcha mebel bitta ro'yxatga tushsa, standart xonadagi stul bilan lyuks xonadagi stul bir qatorda ko'rinadi va yetkazib beruvchi qaysi miqdorni qaysi turga yozishni bilmay qoladi. Xona turi bo'yicha alohida blok tuzilganda har bir blok xona soniga ko'paytiriladi va umumiy hajm shu yo'l bilan yig'iladi.",
          "Bu tuzilma keyinchalik faqat bitta tur o'zgarganda butun hujjatni qaytadan yozishni talab qilmaydi. Masalan, Toshkent, O'zbekiston shahridagi loyihada lyuks xona uchun tanlangan yumshoq mebel almashtirilsa, faqat shu blok yangilanadi, qolgan bloklar va ularning raqamlari o'z joyida qoladi. Shu sababli blok nomida xona turi kodi va versiya sanasi ko'rinib turishi kerak.",
        ],
      },
      {
        heading: "BOQda har bir pozitsiya uchun qanday maydonlar bo'lishi kerak?",
        paragraphs: [
          "Har bir qatorda kamida olti maydon bo'lishi kerak: mebel nomi va xonadagi joylashuvi, xona turi va xona soni, uzunlik, kenglik va balandlik, asosiy material va sirt qoplamasi, mato yoki metall kabi qismlarning rangi, o'rnatish talabi. Bu maydonlar to'ldirilmasa, ikkita taklifni bir xil asosda solishtirish qiyinlashadi va keyinchalik qaysi qator nimani o'z ichiga olgani noma'lum bo'lib qoladi.",
          "Qo'shimcha maydon sifatida qadoqlash usuli, liftdan o'tish sharti va yig'ish uchun kerakli vositalarni kiritish mumkin. Lekin ularni asosiy narx jadvaliga aralashtirmasdan, alohida ilova sifatida berish ma'qul, aks holda qatorlar orasidagi farqni kuzatish va solishtirish qiyinlashadi. Har bir qo'shimcha maydon uchun o'lchov birligi ham yoziladi.",
        ],
      },
      {
        heading: "Chizma va o'lchamlarni BOQ bilan qanday bog'lash kerak?",
        paragraphs: [
          "O'lcham ikki manbadan olinadi: me'moriy chizma va xonadagi haqiqiy o'lchov. Ikkisi bir-biriga mos kelmasa, hujjatda ikkalasini ham ko'rsatib, qaysi biri hal qiluvchi ekanini loyiha me'mori bilan yozma ravishda kelishib olish kerak. Chizmadan olingan o'lchamni taxminiy deb belgilash keyingi bosqichdagi nizolarni kamaytiradi.",
          "Har bir pozitsiyaga chizma varaqasining raqami va detal nomini yozib qo'ying. Shunda yetkazib beruvchi qaysi stol qaysi chizmaga tegishli ekanini darhol topadi va o'lchamni o'zicha talqin qilmaydi. Kesim, tutqich va oyoq tuzilishi ko'rsatilgan detallar alohida varaqda berilsa, savol-javob hajmi sezilarli darajada kamayadi. Chizma raqamlari BOQdagi qator raqamlari bilan bir xil tartibda bo'lsa, tekshirish ancha tezlashadi.",
        ],
      },
      {
        heading: "Material va ishlov berishni BOQda qanday yozish kerak?",
        paragraphs: [
          "Materialni umumiy nom bilan yozish yetarli emas. Yog'och o'rniga qatlam turi, qalinligi, qirra yechimi va sirt ishlovi yoziladi; mato o'rniga tola tarkibi, zichligi va rang kodi ko'rsatiladi. Shu tarzda bir xil byudjetdagi ikkita taklif orasidagi haqiqiy farq ko'rinadi va keyinchalik almashtirish bahosi asosli bo'ladi.",
          "Standart talab qilinadigan joylarda HPL, MDF yoki fanera kabi qisqartmalardan foydalanish mumkin, lekin har bir qisqartma yonida qalinlik va qirra ishlovi yozilishi kerak. Namlik yuqori bo'lgan hududlar uchun qirra yopilishi va metall qismlarning qoplamasi alohida band sifatida ko'rsatiladi, chunki bu ikki detal xizmat muddatiga bevosita ta'sir qiladi. Namuna rang kodi bilan birga yozilmasa, ikki partiya orasida ohang farqi paydo bo'lishi mumkin.",
        ],
      },
      {
        heading: "BOQni taklif so'rovi ya'ni RFQ paketiga qanday aylantirish kerak?",
        paragraphs: [
          "BOQ tayyor bo'lgach, uni taklif so'rovi paketiga aylantirish uchun uchta hujjat qo'shiladi: xona turlarining rejasi, material namunalari ro'yxati va to'ldirish qoidalari. Qoidalar varag'ida qaysi katakni to'ldirish, qaysi katakni o'zgartirmaslik va savollarni qaysi shaklda yuborish aniq yoziladi. Shu uch hujjat bo'lmasa, qaytgan takliflarni bir xil formatga keltirish uchun qo'shimcha vaqt sarflanadi.",
          "Paketda har bir xona turi alohida varaq yoki alohida fayl bo'lsa, yetkazib beruvchi hisobni aralashtirmaydi. Savol berish uchun aloqa nuqtasi va javob topshirish shakli ham paketning o'zida ko'rsatilishi kerak, shunda barcha ishtirokchilar bir xil ma'lumotga tayanadi va taqqoslash asosi bir xil bo'lib qoladi. Javoblar ham bir xil fayl shaklida qaytishi qoidalar varag'ida ko'rsatiladi.",
        ],
      },
      {
        heading: "BOQni qabul qilishda qaysi xatolar ko'p uchraydi?",
        paragraphs: [
          "Eng ko'p uchraydigan xato — xona sonini umumiy ro'yxatga bir marta yozib, keyin uni qatorlarga ko'paytirishni unutish. Natijada umumiy miqdor haqiqiy ehtiyojdan past chiqadi. Ikkinchi tez-tez uchraydigan xato — bir qatorning ikki marta kiritilishi, ayniqsa yumshoq mebel va aksessuar bitta blokda yozilganda. Bu ikki xato ko'pincha birga uchraydi va umumiy summani sezilarli darajada o'zgartiradi.",
          "Uchinchi xato — o'lchov birligining aralashishi: bir varaqda millimetr, boshqasida santimetr ishlatilishi. To'rtinchi xato — material talabining umumiy qoldirilishi, buning natijasida takliflar solishtirilmaydi. Yuborishdan oldin xona sonlari yig'indisi, takrorlangan qatorlar va birliklar bir xilligi tekshiriladi, so'ngra hujjat versiyasi qulflanadi. Tekshiruvdan so'ng hujjat yetkazib beruvchilarga yuboriladi va savollar faqat yozma shaklda qabul qilinadi.",
        ],
      },
    ],
    faqs: [
      {
        question: "BOQni Excel yoki PDF shaklida yuborish to'g'rimi?",
        answer: "Excel shakli yetkazib beruvchiga har bir qator bo'yicha javob yozish imkonini beradi, shuning uchun narx solishtirish uchun qulayroq. PDF faqat tasdiqlangan yakuniy versiyani qayd etish uchun qo'shib yuboriladi.",
      },
      {
        question: "Xona soni hali aniq bo'lmasa ham BOQ tuzish mumkinmi?",
        answer: "Mumkin. Bitta xona turi uchun namuna blok tayyorlanadi va xona soni o'zgaruvchi sifatida qoldiriladi. Son aniqlangach faqat ko'paytiruvchi yangilanadi, qolgan tuzilma o'zgarmaydi.",
      },
      {
        question: "Material talabida qanday ma'lumot bo'lishi shart?",
        answer: "Qatlam yoki mato turi, qalinligi, sirt ishlovi, qirra yechimi va rang kodi majburiy maydonlarga kiradi. Yumshoq mebel uchun tola tarkibi va zichlik ham yozilishi kerak.",
      },
      {
        question: "O'rnatish talabini BOQga kiritish kerakmi?",
        answer: "Ha. Yig'ish kerakmi, liftdan o'tadimi va polni himoya qilish talab qilinadimi, bu savollar taklif tarkibiga bevosita ta'sir qiladi. Shu sababli alohida ustun ajratish ma'qul.",
      },
      {
        question: "Bitta yetkazib beruvchiga bir nechta xona turini berish mumkinmi?",
        answer: "Mumkin, lekin har bir xona turi alohida varaq yoki alohida fayl ko'rinishida berilishi kerak. Aks holda hisob qatorlari aralashib, keyinchalik qaysi raqam qaysi turga tegishli ekanini aniqlash qiyinlashadi.",
      },
      {
        question: "BOQni qanchalik tez-tez yangilash kerak?",
        answer: "Dizaynning har bir bosqichi tugagach va asosiy o'zgarish kiritilgach yangilash tavsiya etiladi. Har bir versiyani sana bilan saqlash oldingi holatga qaytish imkonini beradi.",
      },
      {
        question: "BOQda zaxira mebel ko'rsatish kerakmi?",
        answer: "Mehmonxona uchun asosiy miqdordan alohida zaxira qatori ko'rsatish odatiy hol. Bu shikastlangan birlikni alohida buyurtma qilmasdan almashtirish imkonini beradi va xona ishdan chiqishini kamaytiradi.",
      },
    ],
  },
  {
    id: "hotel-room-furniture-quantity-takeoff-uzbekistan",
    market: "uz",
    title: "Mehmonxona xonasiga qancha mebel kerak: chizma bo'yicha miqdor hisoblash",
    tag: "Mehmonxona",
    excerpt: "Xona turi, krovat o'lchami, o'tish yo'lagi va zaxira hisobga olingan holda mebel miqdorini chizma bo'yicha qanday chiqarish va natijani BOQ bilan qanday solishtirish haqida amaliy yo'riqnoma.",
    date: "2026-10-19",
    readingMin: 9,
    image: "/images/blog/uz-hotels-2026.webp",
    imageAlt: "Mehmonxona xonasining mebel joylashuvi chizmasi va o'lchov belgilari",
    definition: "Chizma bo'yicha miqdor hisoblash (quantity takeoff) — mehmonxona loyihasida har bir xona turi uchun krovat, tungi stol, ish stoli va shkafning aniq sonini reja o'lchamlari asosida aniqlash usuli. Natija BOQ va buyurtma hajmi uchun asos bo'ladi, shuning uchun u satrma-satr tekshiriladigan hujjat bo'lishi kerak.",
    takeaways: [
      "Har bir xona turini alohida blok sifatida hisoblab, xona soniga ko'paytiring, aks holda standart va lyuks buyumlari aralashadi.",
      "Krovat o'lchami va devor uzunligi tungi stollar sonini belgilaydi: ikki kishilik krovatda odatda ikkita tungi stol bo'ladi.",
      "Ish stoli va shkafni xona maydoni hamda yurish yo'lagi kengligidan kelib chiqib tanlang.",
      "Lobbi va restoranda o'rindiq soni aylanma va o'tish yo'laklari bilan birga hisoblanadi.",
      "Zaxira miqdori loyiha shartlari, o'rnatish bosqichi va almashtirish rejasiga qarab belgilanadi, yagona foiz qoidasi yo'q.",
      "Hisoblangan ro'yxatni BOQ bilan satrma-satr solishtiring: nom, o'lcham, material va o'lchov birligi bir xil bo'lishi shart.",
    ],
    sections: [
      {
        heading: "Xona turi bo'yicha miqdorni qanday hisoblash kerak?",
        paragraphs: [
          "Hisoblashni xona turkumlari ro'yxatidan boshlang: standart xona, katta xona yoki lyuks va harakatlanishi cheklangan mehmonlar uchun moslashtirilgan xona. Har bir turkum uchun alohida varaq ochib, xona soni, o'rtacha maydon va joylashuv sonini yozing. Bitta xonadagi buyum soni xona soniga ko'paytiriladi, turkumlar esa jamlanmaydi.",
          "Moslashtirilgan xona alohida turkum bo'lmasa, u ikki marta hisoblanadi va ro'yxat shishadi. Loyihada sakson to'rtta standart, o'ttizta lyuks va oltita moslashtirilgan xona bo'lsa, alohida ro'yxatlar umumiy sonni qo'shish va xatoni topishni osonlashtiradi.",
          "Burchak xonalar va bir turkumdagi turli geometriyali xonalarni ham alohida belgilang. Deraza joyi yoki eshik tomoni boshqacha bo'lsa, shkaf va ish stolining o'lchami o'zgaradi, shuning uchun har bir turkum ichida uch-to'rt tipik plan ajratilsa, o'rnatishda qayta ishlash kamayadi.",
        ],
      },
      {
        heading: "Krovat va tungi stol sonini qanday aniqlanadi?",
        paragraphs: [
          "Krovat soni joylashuv sonidan kelib chiqadi: bir kishilik xonada bitta krovat, ikki kishilik xonada bitta keng krovat yoki ikkita alohida krovat bo'ladi. Standartda krovat eni odatda to'qson santimetrdan yuz oltmish santimetrgacha, lyukslarda yuz sakson santimetrgacha uchraydi. Aniq o'lchamni me'mor bilan tasdiqlang: u tungi stol va o'tish yo'lagi hisobiga ta'sir qiladi.",
          "Tungi stol soni krovat soniga emas, yon tomonlari soniga bog'liq: bitta keng krovatda ikkita, ikkita alohida krovatda esa oraliq masofaga qarab ikkita yoki uchta stol qo'yiladi. Oraliq tor bo'lsa, krovatlar orasiga bitta kengroq stol joylashtiriladi.",
          "Krovat atrofidagi bo'sh joyni ham ro'yxatga kiriting: yondan devorgacha kamida oltmish santimetr, krovat oxiridan qarshi mebelgacha to'qson santimetr qoldiriladi. Bu o'lchamlar bajarilmasa, tungi stol sonini kamaytirish yoki krovatni boshqa devorga ko'chirish kerak. Shuning uchun sanashdan oldin har bir krovatning joyi planda belgilangan bo'lishi shart.",
        ],
      },
      {
        heading: "Ish stoli va shkaf hajmini xona o'lchamidan qanday chiqarish kerak?",
        paragraphs: [
          "Ish stolining chuqurligi kamida oltmish santimetr, kengligi yuz santimetrdan yuz yigirma santimetrgacha, stul tortib chiqiladigan joy uchun yana yetmish besh santimetr kerak. Xona tor bo'lsa, stol deraza oldiga yoki krovat qarshisiga qo'yiladi, o'tish yo'lagi saqlanadi. Stol soni xonada bitta, lyukslarda yozuv va kichik ovqatlanish stoli alohida hisoblanadi.",
          "Shkaf hajmi xona maydonidan emas, osma joy uzunligidan chiqariladi: bir kishi uchun tayoq uzunligi oltmish santimetrdan sakson santimetrgacha, ikki kishilik xonada ikki barobar olinadi. Chuqurlik elka kiyimlari uchun ellik besh santimetrdan oltmish santimetrgacha bo'lishi kerak. Ochiladigan eshik oldida to'qson santimetr bo'sh joy qoldiriladi, suriladigan eshikda talab kamayadi.",
          "Xona kichik bo'lsa, shkafni koridorga yoki kirish devoriga joylashtirish ko'rib chiqiladi, lekin eshik ochilish yo'nalishi tekshiriladi. Lyukslarda kiyim uchun alohida xona yoki ochiq tokcha qo'shilib, u alohida satr bo'ladi. Chamadon tokchasi, seyf va mini bar joyi ham ro'yxatga kiritilsa, keyinchalik qo'shimcha buyurtma chiqmaydi.",
        ],
      },
      {
        heading: "Lobbi va restoran kabi ochiq maydonlar miqdori qanday hisoblanadi?",
        paragraphs: [
          "Ochiq maydonlarda miqdor xona sonidan emas, bir vaqtda joylashadigan mehmonlar sonidan chiqariladi. Lobbida kutish zonasi, lift oldidagi o'rindiqlar va dam olish burchagi alohida hisoblanadi. Restoranda o'rindiq soni zallar soni, stol o'lchami va xizmat sxemasidan chiqariladi, buffet oldida kamida bir yarim metr bo'sh joy qoldiriladi.",
          "Stol va stul sonini zal maydonini bitta songa bo'lish bilan chiqarish xato beradi. To'g'ri usul — joylashuvni panjara ko'rinishida chizish: to'rt va ikki kishilik stollar, burchakdagi o'rindiqlar alohida bloklanadi. Stol orasidagi masofa kamida to'qson santimetr, asosiy yo'lak bir metr yigirma santimetrdan bir yarim metrgacha bo'ladi.",
          "Banket va konferensiya zallari uchun moslashuvchan sxema kerak: bir xil maydon kunduzgi va kechki joylashuvda turlicha bo'ladi, shuning uchun ikki variant hisoblanadi, ko'chiriladigan stollar umumiy ro'yxatda ko'rsatiladi. Terrasa mebellari ob-havoga chidamli materiallar bo'yicha alohida satrga chiqariladi.",
        ],
      },
      {
        heading: "Zaxira miqdorini qanday belgilash kerak?",
        paragraphs: [
          "Zaxira uchun yagona foiz yo'q, uni tayyor raqam sifatida olib bo'lmaydi. Miqdor ochilish bosqichi, o'rnatish jarayoni, saqlash joyi va almashtirish rejasiga qarab belgilanadi. Bir bosqichda ochiladigan mehmonxonada ehtiyoj kamroq, bosqichma-bosqich ishga tushiriladigan loyihada ko'proq bo'ladi.",
          "Zaxirani ikki turga ajrating: o'rnatish zaxirasi va foydalanish zaxirasi. Birinchisi montaj paytida shikastlangan yoki o'lchami to'g'ri kelmagan buyumlarni qoplaydi, ikkinchisi ish davomida almashtiriladigan qismlar uchun saqlanadi. Ikkalasini BOQ da alohida satr qilib, sababi va saqlash joyini ko'rsating.",
          "Zaxira tarkibiga faqat krovat va stul kirmaydi: eng ko'p shikastlanadigan qismlar — stol usti, eshik tutqichi, oyoq tayanchi, mato qoplamasi va g'ildiraklar. Saqlash maydoni cheklangan bo'lsa, katta buyum o'rniga almashtiriladigan panel va qoplamalarni ko'proq saqlash amaliyroq.",
        ],
      },
      {
        heading: "Hisoblangan miqdorni BOQ bilan qanday solishtirish kerak?",
        paragraphs: [
          "Solishtirishni umumiy sondan emas, satr darajasida boshlang. Har bir satr uchun to'rt ustun tuzing: chizma bo'yicha miqdor, BOQ dagi miqdor, farq va farq sababi. O'lchov birligi bir xil bo'lishi shart, chunki bir joyda dona, boshqa joyda to'plam yozilsa, raqamlar mos kelmaydi. Nom ham bir xil bo'lsin, aks holda ortiqcha buyurtma chiqadi.",
          "Farq chiqqan har bir satr uchun sababni yozing: lyuks xona ikki marta sanalgan, burchak xonaning o'lchami hisobga olinmagan, ochiq maydon mebellari BOQ ga kirmagan yoki zaxira asosiy miqdorga qo'shilgan. Har bir tuzatishdan so'ng faylning yangi versiyasini saqlang.",
          "Yakuniy tekshiruvda uchta jamlama bajariladi: turkumlar bo'yicha xona soni loyihadagi umumiy songa tengmi, har bir turkumdagi buyum soni xona soniga to'g'ri ko'paytirilganmi, zaxira va ehtiyot qismlar asosiy ro'yxatdan alohida ko'rsatilganmi. Javob aniq bo'lsa, ro'yxat buyurtmaga uzatiladi. Chizma o'zgarsa, avval miqdor, keyin BOQ yangilanadi.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mebel miqdorini hisoblash uchun qanday chizmalar kerak?",
        answer: "Har bir xona turi uchun o'lchamlari yozilgan reja, eshik va deraza joylashuvi ko'rsatilgan plan, shift balandligi va rozetka chizmasi kerak. Mebel joylashuvi sxemasi o'tish yo'lagi va eshik ochilishini tekshirishga yordam beradi. Chizma sanasi va versiyasi ro'yxat bilan bir xil bo'lishi shart.",
      },
      {
        question: "Quantity takeoff va BOQ o'rtasidagi farq nima?",
        answer: "Quantity takeoff — chizma asosida buyum sonini aniqlash jarayoni, BOQ esa shu sonlarni material, o'lcham va texnik talab bilan birlashtirgan hujjat. Birinchi bosqichda faqat miqdor va joylashuv hisoblanadi, ikkinchisida satrlar buyurtma uchun tayyorlanadi. Shuning uchun avval hisoblash, keyin BOQ tuziladi.",
      },
      {
        question: "Tungi stol soni krovat soniga teng bo'lishi shartmi?",
        answer: "Yo'q, son krovatning yon tomonlari va joylashuviga bog'liq. Bitta keng krovatda ikkita tungi stol, ikkita alohida krovatda esa oraliq masofaga qarab ikkita yoki uchta stol qo'yiladi. Krovat devorga yaqin bo'lsa, bir tomondagi stol olib tashlanadi va bu chizmada ko'rsatiladi.",
      },
      {
        question: "Harakatlanishi cheklangan mehmon uchun xonada mebel soni qanday hisoblanadi?",
        answer: "Bunday xonada krovat atrofidagi bo'sh joy kattaroq, shkaf eshigi va ish stoli oldidagi masofa ham oshiriladi. Ba'zi hollarda tungi stol o'rniga devorga mahkamlangan tokcha ishlatiladi, bu sonni kamaytiradi. Shu sababli turkum alohida hisoblanadi.",
      },
      {
        question: "Lobbi uchun qancha o'rindiq kerakligini qanday aniqlash mumkin?",
        answer: "Avval lobbida bir vaqtda bo'ladigan mehmonlar sonini baholang, so'ng kutish, qabul va dam olish zonalarini belgilang. Har bir zonada o'rindiq joylashuvini chizib, o'tish yo'llarini hisobga oling. Zal maydonini bo'lish bilan chiqarilgan son haqiqiy joylashuvga mos kelmaydi, shuning uchun panjara usuli ishonchliroq.",
      },
      {
        question: "Zaxira mebel uchun qancha foiz qo'yish kerak?",
        answer: "Tayyor foiz yo'q, chunki zaxira ochilish bosqichi, o'rnatish sharti, saqlash maydoni va almashtirish rejasiga bog'liq. Uni o'rnatish va foydalanish qismlariga ajratib, har birini sababi va saqlash joyi bilan alohida satrda yozing. Shunda miqdor asoslangan bo'ladi.",
      },
      {
        question: "Hisoblangan miqdor BOQ dagi miqdordan farq qilsa nima qilish kerak?",
        answer: "Farqni satr bo'yicha yozib, sababini aniqlang: takroriy sanash, o'lchov birligi nomuvofiqligi, burchak xona hisobga olinmagani yoki zaxira asosiy miqdorga qo'shilgani. Har bir tuzatishdan keyin yangi versiya saqlanadi. Yakuniy qaror chizma va tasdiqlangan xona ro'yxatiga asoslanadi, oddiy qo'shish bilan tenglashtirilmaydi.",
      },
    ],
  },
  {
    id: "hotel-room-furniture-budget-structure-russia",
    market: "ru",
    title: "Из чего складывается бюджет мебели для гостиничного номера",
    tag: "Гостиницы",
    excerpt: "Почему у мебели для номера нет единой цены, из каких статей складывается бюджет и как сформулировать запрос для сравнения предложений.",
    date: "2026-10-19",
    readingMin: 9,
    image: "/images/blog/moq-pricing-guide.webp",
    imageAlt: "Статьи затрат в бюджете мебели для номера",
    definition: "Бюджет мебели для гостиничного номера — это сумма затрат вокруг обстановки: корпус и обивка, фурнитура, обработка кромок, упаковка, доставка, подъём, сборка, крепление к стенам и сервисное обслуживание.",
    takeaways: [
      "Бюджет номера складывается из спецификации, материалов, фурнитуры, логистики, монтажа и сервиса, а не из цены за предмет.",
      "Сравнивать предложения можно только при одинаковой спецификации, одинаковых материалах и одинаковом объёме работ по монтажу.",
      "Чем подробнее описан материал корпуса, кромки и фурнитуры, тем меньше скрытых допущений остаётся в цене.",
      "Логистика, подъём, сборка и вывоз упаковки должны быть отдельными строками, а не растворяться в цене мебели.",
      "Изменения после согласования спецификации почти всегда увеличивают бюджет, поэтому все правки лучше собрать до отправки запроса.",
      "Резерв на образцы и на замену повреждённых позиций закладывается на этапе планирования, а не после поставки.",
    ],
    sections: [
      {
        heading: "Почему нельзя назвать единую цену за номер?",
        paragraphs: [
          "Единой цены за гостиничный номер не существует, потому что номер — это не набор одинаковых предметов, а сумма решений, которые принимаются под конкретный проект. Два номера одной площади могут отличаться породой шпона, плотностью обивки, классом фурнитуры, способом крепления и требованиями к безопасности. Каждое такое решение меняет состав материалов и трудозатраты, поэтому корректная цена всегда привязана к спецификации и условиям поставки, а не к площади помещения. Именно поэтому вопрос о цене за номер корректно задавать только вместе с описанием того, что в этот номер входит.",
          "Играет роль и структура самого заказа. Отель может закупать мебель одним пакетом на весь номерной фонд или дробить её по этапам, по типам номеров и по зонам. В первом случае выше доля постоянных затрат на подготовку производства, во втором — больше логистических и монтажных операций. Кроме того, повторяемость позиций влияет на раскрой и количество отходов, а значит, и на себестоимость каждой единицы. Поэтому вопрос о стоимости номера без описания состава, материалов и размера партии не имеет однозначного ответа.",
        ],
      },
      {
        heading: "Из каких статей складывается стоимость мебели для номера?",
        paragraphs: [
          "Первая и самая заметная статья — корпус и фасадные элементы: шкаф, тумбы, письменный стол, изголовье, мини-бар и багажная полка. Здесь стоимость определяют материал, толщина плиты, вид кромки и точность обработки. Замена ЛДСП на MDF с фрезеровкой или на HPL меняет не только внешний вид, но и весь технологический маршрут, включая раскрой, кромление, сборку и упаковку. Отдельно считается обработка торцов и защита поверхности: лак, шпон, плёнка или декоративная панель.",
          "Вторая группа — мягкие элементы: изголовье, кресло, пуф, банкетка. Для них важны каркас, наполнитель, плотность обивки и класс износостойкости ткани. Третья группа — фурнитура и механизмы: петли, направляющие, доводчики, замки, колёса и крепёж. Именно она чаще всего объясняет разницу между предложениями, которые на визуализации выглядят совершенно одинаково. Разница в классе этих деталей обычно не видна на расстоянии, но проявляется через год эксплуатации.",
          "Четвёртая группа — операции, которых нет в спецификации, но без них мебель не заработает: упаковка, маркировка по номерам, доставка, подъём на этаж, сборка, крепление к стенам и вывоз упаковки. В коммерческих предложениях эти строки иногда объединены в одну, и тогда сопоставить их между поставщиками практически невозможно. Их удобно выделить в отдельный блок бюджета, чтобы не сравнивать мебель с её доставкой. При планировании эти строки часто округляют, и именно там возникает основной перерасход.",
        ],
      },
      {
        heading: "Как спецификация влияет на цену?",
        paragraphs: [
          "Спецификация — единственный документ, который переводит пожелания в измеримые параметры. Пока в ней указано только «шкаф двухдверный, дуб», поставщик вынужден домысливать глубину, толщину полок, тип кромки, направление открывания и способ крепления. Каждое домысливание становится либо допущением в цене, либо поводом для доплаты уже после подписания договора. В результате один поставщик считает цену за предполагаемую конструкцию, а другой — за фактическую.",
          "Чем детальнее описаны материалы и узлы, тем стабильнее предложение. Если для каждой позиции указаны габариты, материал корпуса и фасада, кромка, фурнитура и требования к обивке, спорных ситуаций при приёмке становится меньше. Одновременно такая спецификация ограничивает возможности для скрытого упрощения конструкции, которое обычно обнаруживается только при сборке. Например, указание класса износостойкости обивки и типа кромки сразу снимает два самых частых вопроса при согласовании. Для гостиничного номера это особенно важно: одна и та же позиция повторяется десятки раз, и любое упрощение тиражируется на весь фонд.",
        ],
      },
      {
        heading: "Почему предложения на одинаковый перечень отличаются?",
        paragraphs: [
          "Даже при одинаковом перечне позиций предложения расходятся, потому что за одинаковыми словами стоят разные решения. Один поставщик берёт плиту стандартной толщины с кромкой ПВХ, другой — плиту большей толщины с кромкой в цвет и усиленным крепежом. Один считает индивидуальную упаковку для каждой позиции, другой — общую тару на комплект. Перечень совпадает, состав затрат — нет. Разница может накапливаться по каждой позиции и в сумме давать заметное расхождение.",
          "Вторая причина — разный объём работ. Кто-то включает доставку до объекта, подъём и сборку, кто-то ограничивается доставкой до склада. Третья причина — разная глубина проработки: наличие прототипа, порядок согласования образцов, шеф-монтаж и обслуживание в период гарантии. Пока эти пункты не вынесены в отдельные строки, сравнивать итоговые суммы не имеет смысла. Единая форма ответа решает эту проблему лучше, чем переговоры об итоговой сумме.",
        ],
      },
      {
        heading: "Что должно входить в запрос, чтобы получить сопоставимые цены?",
        paragraphs: [
          "Запрос должен содержать не только перечень, но и правила сравнения. Полезно указать тип объекта и назначение зон, требования к материалам и износостойкости, допустимость аналогов, порядок согласования образцов и формат отчётности. Отдельно фиксируется, какие работы входят в предложение: доставка, подъём, сборка, крепление к стенам и вывоз упаковки. Если этого не сделать, поставщики отвечают на разные вопросы, и сравнение теряет смысл. Формулировки должны быть однозначными, чтобы разные поставщики не трактовали одно и то же требование по-своему и не закладывали разный запас.",
          "Имеет смысл задать единую форму ответа — таблицу с одинаковыми колонками, где напротив каждой позиции поставщик указывает материал, фурнитуру, срок действия предложения и условия пересмотра цены. Тогда сравнение идёт построчно, а не по итоговой сумме, и сразу видно, какая статья вызвала расхождение. Это экономит время и снимает большую часть спорных вопросов. Такой формат удобен и для внутреннего согласования бюджета.",
        ],
      },
      {
        heading: "Какие статьи затрат часто не учитывают при планировании?",
        paragraphs: [
          "Чаще всего забывают про образцы и прототипы. Изготовление выставочного образца, его доставка и согласование — отдельная работа, которая при небольшой партии заметно влияет на бюджет. Также редко закладывают резерв на замену позиций, повреждённых при монтаже, и на хранение мебели на складе до начала работ в номерах. Эти затраты не видны в перечне позиций, но они реально влияют на итог. Кроме того, хранение мебели на объекте требует места, которое не всегда предусмотрено.",
          "Ещё одна недооценённая статья — изменения. Любая правка после согласования спецификации запускает пересчёт материалов, а иногда и переделку уже готовых изделий. Наконец, обслуживание: замена крепежа, ремонт механизмов, обновление обивки в номерах с высокой нагрузкой. Эти расходы удобнее планировать заранее, чем закрывать внепланово посреди сезона. Их проще включить в план обслуживания, чем каждый раз согласовывать внеплановые работы.",
        ],
      },
    ],
    faqs: [
      {
        question: "Сколько стоит мебель для гостиницы?",
        answer: "Единой суммы нет: стоимость зависит от состава позиций, материалов, фурнитуры, объёма партии и включённых работ. Ответ возможен после изучения спецификации.",
      },
      {
        question: "Из чего складывается цена мебели для гостиничного номера?",
        answer: "Из корпуса и фасадов, мягких элементов, фурнитуры, кромок, упаковки, логистики, монтажа и сервиса. Каждая статья считается отдельно.",
      },
      {
        question: "Почему предложения на одинаковый перечень так сильно отличаются?",
        answer: "За одинаковыми названиями скрываются разные материалы, толщина плиты, класс фурнитуры и объём работ. Пока они не выровнены, разница отражает разные решения.",
      },
      {
        question: "Что дешевле для гостиничного номера — ЛДСП или MDF?",
        answer: "Сравнивать конструкцию целиком. ЛДСП проще в обработке, MDF точнее держит форму, но требует другой кромки и отделки. Итог зависит от нагрузки.",
      },
      {
        question: "Входят ли доставка и монтаж в цену мебели?",
        answer: "Зависит от условий. Доставка до склада, до объекта, подъём, сборка и вывоз упаковки — разные операции. Их стоит перечислить отдельно.",
      },
      {
        question: "Нужно ли платить за образцы перед заказом?",
        answer: "Изготовление образца — самостоятельная работа с материалами и трудом. Наличие в предложении влияет на бюджет, поэтому пункт обсуждают до договора.",
      },
      {
        question: "Как сравнить предложения, если перечни разные?",
        answer: "Сначала привести позиции к единой базе: габариты, материалы, фурнитура и объём работ. Затем сравнить построчно и оценить лишние статьи.",
      },
    ],
  },
  {
    id: "hotel-room-furniture-budget-structure-mongolia",
    market: "mn",
    title: "Зочид буудлын тавилгын төсөв: өрөөний зардал юунаас бүрддэг вэ",
    tag: "Зочид буудал",
    excerpt: "Нэг өрөөний тавилгын үнийг яагаад нэг тоогоор хэлж болохгүй, зардал ямар давхаргуудаас бүрддэг, ижил жагсаалтад ирсэн саналууд яагаад зөрдөг, харьцуулах боломжтой үнэ авахын тулд ямар мэдээлэл өгөх ёстойг тайлбарлав.",
    date: "2026-10-19",
    readingMin: 9,
    image: "/images/blog/guestroom-checklist.webp",
    imageAlt: "Зочид буудлын өрөөний тавилгын шалгах хуудас",
    definition: "Зочид буудлын өрөөний тавилгын төсөв гэдэг нь нэг өрөөнд байрлах тавилга бүрийн тоо ширхэг, хэмжээ, материал, өнгөлгөө, тоноглол, тээвэрлэлт, угсралт болон ашиглалтын дараах зардлыг нэг бүтэцтэйгээр нэгтгэсэн тооцоо юм. Энэ бүтэц нь нийлүүлэгчдийн саналыг ижил суурь дээр тавьж харьцуулах, аль зардал хаанаас үүсч байгааг харах боломжийг олгодог.",
    takeaways: [
      "Нэг өрөөний тавилгын үнэ гэдэг нь олон мөрийн нийлбэр бөгөөд аль нэг мөр өөрчлөгдвөл нийт дүн өөрчлөгдөнө.",
      "Зардлыг бүтээгдэхүүн, үйлчилгээ, ашиглалтын гэсэн гурван давхаргаар ялгаж бичих нь төсвийн бүтцийг ойлгох эхлэл болдог.",
      "Материалын дотоод бүтэц, өнгөлгөөний зузаан, тоноглолын чанар нь гаднаа ижил харагдах хоёр тавилгын ялгааг үүсгэдэг.",
      "Ижил жагсаалтад ирсэн саналуудын зөрүү нь ихэвчлэн дутуу орсон ажил, ойролцоо материал, өөр хүлээлгэн өгөх нөхцөлөөс үүсдэг.",
      "Харьцуулах боломжтой үнэ авахын тулд өрөөний төрөл, хэмжээ, материал, угсралт, тээврийн хариуцлагыг бичгээр өгөх шаардлагатай.",
      "Тээвэр, гааль, агуулах, угсралт, нөөц эд анги зэрэг төсвийн гадна үлддэг зардлыг урьдчилан жагсаалтад оруулах нь зүйтэй.",
    ],
    sections: [
      {
        heading: "Нэг өрөөний тавилгын үнийг яагаад нэг тоогоор хэлэх боломжгүй вэ?",
        paragraphs: [
          "Зочид буудлын тавилгын үнийг асуухад нэг тодорхой тоо сонсохыг хүсэх нь ойлгомжтой. Гэвч нэг өрөөний тавилга гэдэг нь ор, шүүгээ, бичгийн ширээ, сандал, шөнийн тавиур, толин тусгал зэрэг олон зүйлийн нэгдэл юм. Эдгээр зүйл бүр өөрийн хэмжээ, материал, өнгөлгөө, тоноглолтой тул аль нэг нь өөрчлөгдөхөд нийт дүн дагаж өөрчлөгдөнө.",
          "Мөн үнэ нь зөвхөн бүтээгдэхүүний үнэ биш. Баглаа боодол, тээвэр, гаалийн бүрдүүлэлт, талбай дээрх угсралт, суурилуулалтын дараах үйлчилгээний нөхцөл зэрэг нь нийлүүлэгч бүрт өөр өөрөөр тооцогддог. Тиймээс нэг тоо гэдэг нь ямар нэг таамаглал дээр тогтсон тооцоо гэж ойлгох нь зөв.",
          "Практикт нэг өрөөний үнийг асуухын оронд өрөөний төрөл тус бүрийн жагсаалт, хэмжээ, материалын шаардлагыг өгч, мөр тус бүрээр үнэ авдаг. Ингэснээр аль зүйл нийт дүнг бүрдүүлж байгааг харж, шаардлагагүй хэсгийг хасаж, дутуу хэсгийг нэмэх боломж нээгддэг. Энэ нь зөвхөн төсөв төлөвлөхөд төдийгүй, дараагийн шатанд өөрчлөлт орох үед ямар нөлөө гарахыг тооцоход тусална.",
        ],
      },
      {
        heading: "Тавилгын зардал ямар зүйлсээс бүрддэг вэ?",
        paragraphs: [
          "Эхний давхарга нь бүтээгдэхүүний үндсэн өртөг юм. Үүнд модон хавтан, фанер, металл хүрээ, зөөлөн эдлэлийн хөөс, даавуу, арьс, өнгөлгөөний материал, ирмэгийн хальс, тотгозуур, гүйлгээ, түгжээ зэрэг орно. Эдгээрийн чанар, зузаан, гарал үүсэл нь өртгийн хамгийн том хэсгийг бүрдүүлдэг.",
          "Хоёр дахь давхарга нь үйлчилгээний зардал. Зургийн дагуу хэмжээ тохируулах, өнгөний дээж бэлтгэх, үйлдвэрийн угсралтын шалгалт, баглаа боодол, ачилт, тээвэр, даатгал, гаалийн бичиг баримт, талбай дээрх угсралт, ажлын талбайн цэвэрлэгээ зэрэг багтана. Эдгээр нь зарим саналд тусдаа мөрөөр, заримд нь нэг багц үнэ дотор нуугдсан байдаг.",
          "Гурав дахь давхарга нь ашиглалтын зардал. Зочид буудал өдөр бүр ажилладаг тул тавилга байнга ачаалалд ордог. Нөөц эд анги, бариулын бэхэлгээ, гүйлгээний тохируулга, зөөлөн эдлэлийн дахин бүрэлт, гадаргуугийн засвар зэрэг нь төсөвт шууд ороогүй ч жилийн туршид зарлага болдог. Төсөв бүрдүүлэхдээ энэ давхаргыг орхигдуулах нь хожим гэнэтийн зардал үүсгэдэг.",
        ],
      },
      {
        heading: "Материал, өнгөлгөө, тоноглол үнэд хэрхэн нөлөөлдөг вэ?",
        paragraphs: [
          "Материалын хувьд зөвхөн ерөнхий нэр биш, дотоод бүтэц чухал. Бүтэн мод, фанер, MDF, чипсэн хавтан, хуудас металл нь өөр өөр боловсруулалт, өөр бат бэх, өөр жинтэй. Гаднаа ижил харагдах хоёр шүүгээний нэг нь зузаан хавтантай, нөгөө нь нимгэн хавтантай байж болно. Хэмжээ, зузаан, холболтын аргыг тодорхой бичихгүй бол үнийн зөрүүг тайлбарлахад хэцүү болдог.",
          "Өнгөлгөөний төрөл ч мөн адил нөлөөтэй. HPL хуудас, меламины хальс, будсан гадаргуу, байгалийн фурнир нь өөр өөр үйлдвэрлэлийн шат шаарддаг. Ирмэгийн боловсруулалт, булангийн бэхэлгээ, гадаргуугийн усалгаа зэрэг нарийн ширийн ажил нь ашиглалтын хугацаанд шууд мэдрэгддэг. Зөвхөн өнгө сонгоод, гадаргуугийн төрлийг тодорхойлохгүй өнгөрөх нь дараа нь саналын зөрүүг үүсгэдэг нийтлэг шалтгаан.",
          "Тоноглолын хувьд тотгозуур, гүйлгээ, түгжээ, зөөлөн хаалтын механизм, кабель суваг, өлгөгч систем зэрэг жижиг эд анги үнэд мэдэгдэхүйц нөлөөлдөг. Эдгээр нь өрөөний ашиглалтын тав тух, дуу чимээ, эдэлгээтэй шууд холбоотой. Тиймээс тоноглолыг брэнд эсвэл техникийн үзүүлэлтээр нь тодорхойлж, солих боломжтой эсэхийг урьдчилан асуух нь зүйтэй.",
        ],
      },
      {
        heading: "Ижил жагсаалтад өгсөн саналууд яагаад өөр өөр байдаг вэ?",
        paragraphs: [
          "Нэг жагсаалт илгээсэн ч хариу саналууд зөрөх нь түгээмэл. Шалтгааны нэг нь тайлбар юм. Зарим нийлүүлэгч хэмжээг ойролцоогоор дугуйруулж, зарим нь материалыг ойролцоо нэрээр сольж, зарим нь дотоод бүтцийг нимгэн болгож тооцдог. Гаднаас харахад ижил мөр боловч дотор нь өөр ажил орсон байдаг.",
          "Хоёр дахь шалтгаан нь үйлдвэрлэлийн зохион байгуулалт. Нэг багц доторх тоо ширхэг, хэмжээний давталт, өнгөний тоо, угсралтын хүндрэл зэрэг нь бэлтгэл ажлын хэмжээг өөрчилдөг. Мөн тээврийн чиглэл, ачилтын нөхцөл, баглаа боодлын шаардлага нь санал бүрт өөр өөрөөр тусдаг.",
          "Гурав дахь шалтгаан нь үнийн бүтэц. Зарим санал зөвхөн бүтээгдэхүүнийг, зарим нь тээвэр, гааль, угсралтыг оролцуулсан багцыг санал болгодог. Эдгээрийг нийт дүнгээр шууд харьцуулах нь буруу дүгнэлтэд хүргэдэг. Тиймээс санал бүрийг ижил мөр, ижил нөхцөл, ижил хариуцлагын хуваалт дээр тавьж үзэх шаардлагатай.",
        ],
      },
      {
        heading: "Харьцуулах боломжтой үнэ авахын тулд ямар мэдээлэл өгөх хэрэгтэй вэ?",
        paragraphs: [
          "Хамгийн эхэнд өрөөний төрөл, төрөл бүрийн өрөөний тоо, өрөөний ерөнхий хэмжээ, тавилга байрлуулах байршлыг тодорхой өгнө. Шалны тоо, лифтийн хэмжээ, агуулахын зай, ачих буух боломж зэрэг нь угсралтын ажлын хүндрэлд нөлөөлдөг тул эдгээрийг ч хамт бичих нь зүйтэй. Боломжтой бол архитектурын зураг, өрөөний планировкийг хавсаргана.",
          "Дараа нь материал, өнгөлгөө, тоноглолын шаардлагыг тодорхойлно. Гадаргуугийн төрөл, ирмэгийн боловсруулалт, өнгөний код, даавууны ангилал, тотгозуурын төрөл зэргийг бичиж, дээж эсвэл зургийн лавлагаа хавсаргах нь саналын зөрүүг багасгана. Мөн ямар стандарт, ямар хэмжилтийн нэгж ашиглахыг урьдчилан тохирно.",
          "Эцэст нь худалдан авалтын нөхцөлийг тодорхой өгнө. Тээвэр, даатгал, гааль, талбай хүртэлх хүргэлт, угсралт, баглаа боодол, хог зайлуулах ажлыг хэн хариуцах вэ гэдгийг мөр бүрт тусгана. Саналын хүчинтэй хугацаа, хувилбарын дугаар, хариуцагчийн нэр, огноог баримтад тэмдэглэснээр хожуу үеийн маргаан багасна.",
        ],
      },
      {
        heading: "Төсөвлөхдөө ямар зардлыг орхигдуулдаг вэ?",
        paragraphs: [
          "Хамгийн түгээмэл орхигддог зардал бол тээвэр, гааль, татвар, даатгал, боомт дахь агуулах юм. Эдгээр нь бүтээгдэхүүний үнээс тусдаа гардаг ч нийт төсвийн мэдэгдэхүйц хэсгийг бүрдүүлдэг. Тээврийн чиглэл, ачилтын хэмжээ, баглаа боодлын шаардлага өөрчлөгдөхөд энэ хэсэг бас өөрчлөгддөг.",
          "Дараагийн орхигддог зүйл бол талбай дээрх ажил. Угсралт, өргөх төхөөрөмж, цахилгаан, гэрэлтүүлэг, ажлын талбайн хамгаалалт, хуучин тавилгыг буулгах, хог зайлуулах зэрэг нь тусдаа зардал болдог. Зочид буудал ажиллаж байгаа үед өрөөг ээлжлэн гаргах, ажлын цагийг тохируулах шаардлага гардаг нь ч нэмэлт зохион байгуулалт шаарддаг.",
          "Мөн нөөц эд анги, засварын багц, зөөлөн эдлэлийн нөөц даавуу, ирээдүйн өөрчлөлтөд зориулсан нөөцийг урьдчилан тооцох нь зүйтэй. Эдгээрийг төсөвт оруулаагүй тохиолдолд ашиглалтын эхний үед гэнэтийн зардал гарч, нийт төсөв хэт бага мэт харагдсан ч бодит зарлага өндөр болдог. Тиймээс төсвийг зөвхөн худалдан авалтын дүнгээр бус, бүрэн ашиглалтын мөчлөгөөр нь харьцуулах нь илүү бодитой.",
        ],
      },
    ],
    faqs: [
      {
        question: "Зочид буудлын нэг өрөөний тавилгын үнийг хэрхэн тооцох вэ?",
        answer: "Өрөөний тавилгыг мөр тус бүрээр задалж, хэмжээ, материал, өнгөлгөө, тоноглолыг тодорхой бичсэний дараа мөр бүрийн үнийг нэгтгэх замаар тооцно. Нийт дүнгийн хажууд тээвэр, угсралт, баглаа боодол зэрэг нэмэлт зардлыг тусад нь харуулах нь бодит өртгийг харахад тусална.",
      },
      {
        question: "Тавилгын үнэд угсралт багтсан уу?",
        answer: "Саналаас хамаарна. Зарим нийлүүлэгч зөвхөн бүтээгдэхүүний үнийг, зарим нь талбай дээрх угсралтыг оролцуулсан багцыг санал болгодог. Тиймээс санал авахдаа угсралт, өргөх төхөөрөмж, хог зайлуулалт аль талд хамаарахыг бичгээр тодруулах шаардлагатай.",
      },
      {
        question: "MDF ба бүтэн модны ялгаа үнэд хэрхэн нөлөөлдөг вэ?",
        answer: "MDF нь нэгэн төрлийн нягт хавтан бөгөөд тогтвортой хэмжээ, жигд гадаргуутай тул будсан өнгөлгөөнд тохиромжтой. Бүтэн мод нь өөр боловсруулалт, өөр холболт шаарддаг ба чийг, халууны нөлөөнд өөрөөр ажилладаг. Аль нь тохирохыг байршил, ачаалал, өнгөлгөөний шаардлагаар шийдэх нь зүйтэй.",
      },
      {
        question: "HPL өнгөлгөө гэж юу вэ, яагаад үнэ өөр байдаг вэ?",
        answer: "HPL нь өндөр даралтаар хэвлэсэн хуудаслаг материал бөгөөд гадаргуугийн эдэлгээ, өнгөний тогтвортой байдал, цэвэрлэхэд хялбар байдлаараа зочид буудлын орчинд түгээмэл хэрэглэгддэг. Зузаан, гадаргуугийн боловсруулалт, ирмэгийн холболтын арга өөр байх тусам үйлдвэрлэлийн зардал өөрчлөгддөг.",
      },
      {
        question: "BOQ-гүйгээр үнийн санал авах боломжтой юу?",
        answer: "Боломжтой боловч харьцуулалт хийхэд хэцүү. Жагсаалтгүй тохиолдолд нийлүүлэгч бүр өөрийн таамаглалаар хэмжээ, материал, тоо ширхэгийг тодорхойлдог тул саналууд өөр өөр суурь дээр гардаг. Наад зах нь өрөөний төрөл, хэмжээ, тавилгын нэр, тоо ширхэг бүхий энгийн жагсаалт бэлтгэх нь илүү үр дүнтэй.",
      },
      {
        question: "Тээвэр, гаалийн зардлыг хэн хариуцах вэ?",
        answer: "Энэ нь худалдан авалтын нөхцөлөөр тодорхойлогдоно. Хүргэлтийн хариуцлага хаана шилжих, гаалийн бичиг баримтыг хэн бэлтгэх, татвар, даатгал, боомт дахь агуулахыг хэн төлөх зэргийг гэрээнд тодорхой бичих шаардлагатай. Эдгээрийг тодруулаагүй тохиолдолд нийт төсөв хожим нэмэгдэх эрсдэлтэй.",
      },
      {
        question: "Зочид буудлын тавилгын төсөвт урьдчилан тооцоогүй зардлын нөөцийг хэрхэн төлөвлөх вэ?",
        answer: "Төслийн эрсдэлийн түвшин, өрөөний тоо, материал солих магадлалыг харгалзан тусдаа нөөцийн мөр гаргах нь зүйтэй. Нөөцийг үндсэн төсвөөс тусдаа хөтөлж, ямар зардалд зарцуулсныг бүртгэх нь дараагийн төслийн тооцоог илүү бодитой болгодог.",
      },
    ],
  },
,

{
  "id": "hotel-room-furniture-inclusions-russia",
  "market": "ru",
  "title": "Что входит в комплект мебели гостиничного номера",
  "tag": "Гостиницы",
  "excerpt": "Что входит в комплект мебели гостиничного номера, как распределить позиции по зонам и зафиксировать границы поставки в ведомости объёмов работ, чтобы не было пропусков и дублирования.",
  "date": "2026-10-22",
  "readingMin": 9,
  "image": "/images/blog/guestroom-checklist.webp",
  "imageAlt": "Чек-лист комплектации мебели для гостиничного номера по зонам: спальная, рабочая, зона хранения и санузел",
  "definition": "Комплект мебели гостиничного номера — это набор позиций, распределённых по зонам: спальная зона включает кровать с изголовьем и прикроватные тумбы, рабочая — письменный стол с креслом, багажная — полку или скамью, зона хранения — шкаф и комод, прихожая — зеркало и вешалку. Мебель санузла — тумба под раковину, зеркальная группа и аксессуары — выделяется отдельным блоком. Границы комплекта фиксируются в ведомости объёмов работ, чтобы ни одна позиция не была пропущена или продублирована между зонами.",
  "takeaways": [
    "Комплект номера описывают по зонам — спальная, рабочая, багажная, хранение, прихожая, санузел — а не единым списком предметов.",
    "Каждой позиции присваивают номер зоны и закрепляют за одним участком работ, чтобы исключить дублирование между пакетами закупки.",
    "Мебель санузла выделяют в отдельный блок с учётом влагостойких материалов, даже если её делает тот же производитель.",
    "Габариты и глубина позиций задаются от планировки номера: проходы, открывание дверей и доступ к розеткам проверяют до согласования спецификации.",
    "В ведомости объёмов работ указывают не только перечень, но и материал корпуса, кромку, фурнитуру и объём монтажа по каждой позиции.",
    "Перед отправкой запроса перечень сверяют с планом электрики и сантехники — большинство пропусков возникает на стыке зон."
  ],
  "sections": [
    {
      "heading": "Почему комплект мебели удобно разделять по зонам номера?",
      "paragraphs": [
        "Гостиничный номер редко закупают одним пакетом: мебель распределяется между разными участками работ, поставщиками и этапами монтажа. Если описывать комплект общим перечнем предметов, легко пропустить позицию, которая формально относится к другой зоне, или наоборот — заказать её дважды. Разделение по зонам переводит комплект в структуру, которую понимают все участники проекта: проектировщик видит привязку к планировке, снабженец — границы своего пакета, монтажная бригада — очерёдность установки. Именно поэтому ведомость объёмов работ для номера почти всегда строится по зонному принципу.",
        "Зонирование также помогает управлять качеством. Нагрузка на мебель в разных зонах различается: спальная зона эксплуатируется интенсивнее всего, рабочая требует устойчивости столешницы, прихожая — стойкости к влажной уборке. Когда зоны выделены явно, к каждой можно применить свои материалы и фурнитуру — например, кромку повышенной износостойкости в прихожей или усиленные направляющие в зоне хранения. Единый обезличенный список таких решений не подсказывает, и требования размываются."
      ]
    },
    {
      "heading": "Что входит в спальную зону гостиничного номера?",
      "paragraphs": [
        "Ядро спальной зоны — кроватная группа: каркас кровати, изголовье, тумбы или полки по бокам. В гостиничном формате изголовье часто выполняет несколько задач одновременно: служит опорой, объединяет освещение и розетки, иногда содержит нишу для мелочей или откидную столешницу. Поэтому его описывают не как декоративный элемент, а как узел с материалом обивки или шпона, закладными под электрику и схемой крепления к стене. Прикроватные тумбы задают глубину и высоту относительно матраса, а также вместимость: ящик на направляющих с доводчиками или открытая ниша с полкой.",
        "Дополнительно в спальную зону обычно входят банкетка или пуф у изножья кровати, ночное освещение и места размещения розеток, согласованное с корпусной мебелью. Здесь важна координация с электрикой: высота тумб и изголовья определяет положение выключателей и USB-розеток, и исправлять это после монтажа дорого. В спецификации на спальную зону фиксируют материал каркаса, обивку с классом износостойкости, тип кромки ЛДСП или шпон, класс петель и направляющих. Каждая из этих строк при тиражировании на весь номерной фонд превращается в заметную часть бюджета."
      ]
    },
    {
      "heading": "Что входит в рабочую и багажную зону номера?",
      "paragraphs": [
        "Рабочая зона — это письменный стол с столешницей, кресло или стул, а также примыкающие розетки и освещение. Для столешницы ключевые параметры — глубина, высота, вылет и материал поверхности: ЛДСП с кромкой, шпон или ламинат повышенной стойкости, потому что именно столешница принимает основную эксплуатационную нагрузку — от чашек и ноутбуков до чемоданов, которые гости иногда ставят на неё вместо багажной полки. Кресло для гостиницы выбирают с учётом частой перестановки: устойчивое основание, износостойкая обивка, отсутствие колёс или их специальный тип.",
        "Багажная зона решает задачу, которую гости решают по-разному: куда положить чемодан. Стандартный набор — багажная скамья или полка с бортиком, иногда с выдвижной секцией или мягкой подушкой сверху. Её габариты рассчитывают от размера чемодана, а не от свободной площади, и обязательно проверяют проходы: багажная скамья не должна конфликтовать с открыванием шкафа или двери санузла. В перечне рабочая и багажная зоны часто идут единым блоком, потому что их предметы соседствуют по планировке, но в ведомости их лучше разделять — нагрузка, материалы и требования к износостойкости у них разные."
      ]
    },
    {
      "heading": "Как разграничить шкаф, комод и багажную полку в комплекте?",
      "paragraphs": [
        "Зона хранения — самый конфликтный участок при описании комплекта, потому что шкаф, комод и открытые полки выполняют пересекающиеся функции. Практическое правило: шкаф отвечает за длинную одежду и чемоданы на хранении, комод — за бельё и мелкие вещи в постоянном доступе, багажная полка — за чемодан на время проживания. Когда границы функций определены, легче определить и границы поставки: если шкаф отдан одному производителю, а прихожая группа — другому, это должно быть видно прямо в ведомости, иначе на объекте возникнет зона, за которую никто не отвечает.",
        "В спецификации на хранение фиксируют габариты и глубину, количество и тип полок, штанги, выдвижные ящики с направляющими и доводчиками, внутреннее наполнение — обувные полки, сейфовая ниша, гладильная доска, если она встроенная. Отдельно описывают фасады: распашные двери с петлями или купе, кромка, наличие зеркала на двери. Глубина шкафа согласовывается с планировкой: слишком глубокий корпус съедает проход, слишком мелкий не принимает чемодан. Все эти параметры проверяют до согласования, потому что после запуска в производство правки затрагивают не одну позицию, а весь фонд."
      ]
    },
    {
      "heading": "Что входит в комплект мебели санузла и как его отделять?",
      "paragraphs": [
        "Мебель санузла — тумба под раковину с столешницей или чашей, зеркальная группа с полкой или шкафчиком, иногда ниша для полотенец и аксессуары. Её выделяют отдельным блоком не потому, что это другой предметный мир, а из-за условий эксплуатации: постоянная влажность, перепады температуры и уборка с агрессивными средствами требуют влагостойких материалов — плиты с повышенной стойкостью, кромки без открытых торцов, фурнитуры в исполнении для влажных помещений. Если тумбу под раковину посчитать по общим правилам корпусной мебели, срок её службы в номере окажется заметно короче.",
        "Практически раздел оформляют так: в ведомости объёмов работ мебель санузла идёт самостоятельным разделом со своими материалами и фурнитурой, даже если корпус её делает тот же производитель, что и остальную мебель номера. Привязка идёт к сантехническому оборудованию: высота тумбы согласуется с чашей и сифоном, вылет столешницы — с бортами раковины, зеркало — с положением освещения и розеток. Эти стыки с сантехникой и электрикой — типичное место пропусков, поэтому перед согласованием перечня его сверяют с планом санузла построчно."
      ]
    },
    {
      "heading": "Как зафиксировать состав комплекта в BOQ, чтобы ничего не пропустить?",
      "paragraphs": [
        "Ведомость объёмов работ по мебели номера строится по простому правилу: каждая позиция имеет номер зоны, наименование, габариты, материал корпуса и фасада, кромку, фурнитуру и объём работ по монтажу. Состав комплекта сверяют с тремя планами — расстановкой мебели, электрикой и сантехникой: каждая розетка, выключатель и осветительный прибор должны иметь рядом корпусную опору, а каждая тумба и шкаф — подводку или розетку, с которыми они не конфликтуют. Стыки зон — прихожая со шкафом, спальня с санузлом, рабочая зона с мини-баром — проверяют в первую очередь, именно там возникают пропуски и задвоения.",
        "Полезно провести обратную проверку: пройти по номеру мысленно, от двери до окна, и записать, чем гость пользуется на каждом шаге — вешалка у входа, зеркало, выключатель, тумба, стол, багажная полка, шкаф, санузел. Каждому использованному предмету должна соответствовать строка в ведомости; если предмет есть в номере, а строки нет, комплект описан не полностью. Такой обход занимает меньше часа, но снимает большинство вопросов на приёмке. Финальный шаг — убедиться, что у каждой строки определён ответственный пакет поставки, и ни одна позиция не осталась без владельца."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Что входит в стандартный комплект мебели гостиничного номера?",
      "answer": "Базовый набор: кровать с изголовьем, прикроватные тумбы, письменный стол с креслом, багажная полка или скамья, шкаф или комод, зеркало и вешалка в прихожей. Для санузла отдельно — тумба под раковину и зеркальная группа. Конкретный состав зависит от категории объекта и планировки."
    },
    {
      "question": "Сколько позиций обычно входит в комплект номера?",
      "answer": "В типовом номере — от восьми до пятнадцати позиций корпусной и мягкой мебели в зависимости от площади и категории. Считать позиции имеет смысл не по количеству, а по зонам: спальная, рабочая, багажная, хранение, прихожая, санузел."
    },
    {
      "question": "Входит ли мебель санузла в общий комплект или заказывается отдельно?",
      "answer": "Её выделяют отдельным блоком в ведомости объёмов работ из-за требований к влагостойкости материалов и фурнитуры. Производитель может быть тем же, но материалы, кромки и условия эксплуатации описываются в самостоятельном разделе."
    },
    {
      "question": "Чем отличается багажная полка от комода и нужен ли в номере и тот, и другой?",
      "answer": "Багажная полка или скамья служит для чемодана на время проживания, комод — для хранения вещей в постоянном доступе. В номерах среднего формата часто оставляют оба элемента, в компактных — совмещают: скамью с ящиками или полку над комодом."
    },
    {
      "question": "Как проверить, что в ведомости объёмов работ ничего не пропущено?",
      "answer": "Мысленно пройти по номеру от двери до окна и записать все предметы, которыми пользуется гость, затем сверить со строками ведомости. Дополнительно список проверяют по планам электрики и сантехники: у каждой розетки и подводки должна быть соседняя позиция мебели."
    },
    {
      "question": "Что указывать по каждой позиции комплекта в BOQ?",
      "answer": "Номер зоны, наименование, габариты, материал корпуса и фасада, тип кромки, класс фурнитуры, обивку с классом износостойкости и объём монтажных работ. Чем подробнее строка, тем меньше допущений остаётся у поставщика и тем меньше спорных вопросов при приёмке."
    },
    {
      "question": "Чем комплектация номера отличается для разных категорий гостиниц?",
      "answer": "Меняется состав и требования, а не принцип зонирования: в более высокой категории добавляются банкетка, рабочая зона большего размера и встроенные функции в изголовье, при этом усиливаются требования к износостойкости обивки и столешниц. Перечень всегда собирается от планировки и профиля гостя."
    }
  ]
},

{
  "id": "hotel-furniture-delivery-inspection-mongolia",
  "market": "mn",
  "title": "Зочид буудлын тавилгыг хүргэлтийн дараа хэрхэн хүлээн авах вэ",
  "tag": "Зочид буудал",
  "excerpt": "Хүргэлт ирсний дараа баглыг ямар дарааллаар хагалж шалгах, хэмжээ, хэвтээ байрлал, гадаргуу, тоноглолыг хэрхэн харьцуулах, асуудлыг бүртгэх хуудас хэрхэн бичих, засвар болон дахин шалгалтыг хэрхэн тохирохыг тайлбарлав.",
  "date": "2026-10-22",
  "readingMin": 9,
  "image": "/images/fabrica/assembly.webp",
  "imageAlt": "Үйлдвэрийн угсралтын шугам дээр тавилгын эд анги угсарч, чанарын шалгалт хийж буй ажилтнууд",
  "definition": "Зочид буудлын тавилгыг хүргэлтийн дараа багц бүрийг дугаарлалтын дагуу нэг нэгээр хагалж, гадна баглаанд хагарал, нуралт, чийгийн шинж тэмдэг байгаа эсэхийг эхэлж шалгаад, угсарсны дараа зураглалын хэмжээ, хэвтээ босоо байрлал, гадаргуугийн нөхцөл, тоноглолын ажиллагааг жагсаалтаар харьцуулж хүлээн авна. Илрүүлсэн зөрчил бүрийг дугаар, зураг, тайлбартай нь хамт бичмэл бүртгэлд тэмдэглэж, нийлүүлэгчтэй засварлах, солих, дахин шалгах төлөвлөгөөг тохиролцсоноор асуудал эхний шатандаа шийдэгдэж, ашиглалтад шилжих нөхцөл тодорхой болдог.",
  "takeaways": [
    "Хүлээн авалтыг хүргэлтийн өдөртэй нь эхлүүлэх нь баглын гэмтлийг тээвэртэй холбох боломжийг хадгалдаг.",
    "Баглыг хагалах дараалал, дугаарлалт, зураг авалт нь маргаан гарах үед бодит нотлох баримт болдог.",
    "Хэмжээ, хэвтээ босоо байрлал нь зөвхөн нүдээр биш, багаж хэрэгсэл болон зураглалын тоогоор шалгагддаг.",
    "Гадаргуу, тоноглолын шалгалтыг гэрэлтүүлэг сайтай нөхцөлд, хаалт тогтволт бүрийг ажиллуулж хийдэг.",
    "Асуудлын бүртгэл нь байршил, тавилгын дугаар, зөрчлийн тодорхойлолт, зургийн дугаартай байх ёстой.",
    "Засвар, солих, дахин шалгах ажлыг хугацаа, хариуцагч, хүлээн зөвшөөрөх нөхцөлтэй нь хамт бичгээр тохирч, хүлээн авалтын баримтад тэмдэглэнэ."
  ],
  "sections": [
    {
      "heading": "Яагаад хүлээн авалтыг хүргэлтийн өдөртэй нь эхлэх ёстой вэ?",
      "paragraphs": [
        "Хүргэлтийн өдөр нь тавилга байршилдаа очсон цорын ганц мөч юм. Энэ өдөр баглааны гадна байдал, ачаалах буулгах үеийн нөхцөл, тээврийн баримтыг хамт харж болно. Хожуу үед илэрсэн гэмтэл нь тээвэрт үүссэн эсэхийг нотлоход хэцүү болдог тул баглын гэмтлийг өдөр нь тэмдэглэсэн нь хариуцлагыг тодорхойлоход шийдвэрлэх ач холбогдолтой.",
        "Мөн эрт шалгалт хийх нь ажлын хуваарьт зай үлдээдэг. Зарим буруу эд анги, дутуу тоноглол, тохирохгүй хэмжээ солилтоос хамааран цаашдын ажил зогсдог. Хүргэлтийн өдөр л дутуу зүйлсийг илрүүлбэл нийлүүлэгч ажил хөдөлмөрийг дахин зохион байгуулах, орлуулах эд ангиа урьдчилан бэлтгэх боломжтой болдог. Ашиглалтанд орох огноо ойртох тусам энэ хугацааны ач холбогдол нэмэгддэг."
      ]
    },
    {
      "heading": "Баглыг ямар дарааллаар хагалж шалгах вэ?",
      "paragraphs": [
        "Эхлээд тээврийн баримт, багцын тоо, дугаарлалтыг хоорондоо нь тулгана. Багц бүр дээр ямар өрөө, ямар тавилга багтсаныг тэмдэглэсэн байдаг тул энэ тэмдэглэлийг жагсаалттай харьцуулж, дутуу эсвэл илүү багц байгаа эсэхийг олно. Баглааны гадаргуу дээр хагарал, шахагдсан булан, ус, чийгийн мөр байгаа эсэхийг бүр дээр нь зураг авч тэмдэглэдэг. Гэмтсэн багцыг хагахаасаа өмнө гадна байдлыг нь бичих нь дараагийн маргаанд чухал үүрэгтэй.",
        "Дараа нь багц бүрийг өрөө тус бүрээр нь нээж, доторх хамгаалалт, хөөс, хальсыг аажмаар тайлна. Эд анги бүрийн тоог багцын хуудастай тулгаж, бэхэлгээ, тоноглолын хайрцаг орсон эсэхийг шалгана. Шилэн хэсэг, толин тусгал, зөөлөн эдлэлтэй хэсгийг тусад нь авч, гадаргуу дээр хагарал, толбо, хэв гажилт байгаа эсэхийг хардаг. Нээсэн багц бүрийн дүнг бүртгэлийн хуудас дээр шууд тэмдэглэж, ажлын багийнхан ижил дэвтэр ашиглах нь бүртгэлийг цэгцтэй байлгадаг."
      ]
    },
    {
      "heading": "Хэмжээ, хэвтээ босоо байдлыг хэрхэн шалгах вэ?",
      "paragraphs": [
        "Хэмжээний шалгалтыг зураглалын дугаартай тавилга тус бүр дээр тусдаа хийнэ. Өргөн, өндөр, гүн, шүүгээний тавиурын зай, орны хүрээний дотоод хэмжээ, ширээний өндөр зэрэг гол тоог хэмжүүрээр авч, зураглалын тоотой харьцуулна. Дэлгэмэл зөрүү бүрийг хэмжээтэй нь бичих нь ямар хэсэг засах эсэхийг шийдэхэд тусалдаг. Мөн хана, шал, цонхны хэмжээтэй тавилгын байрлах хэсгийг тулгаж, багтаж байгаа эсэхийг бодитоор үзнэ.",
        "Угсарсны дараа хэвтээ босоо байдлыг түвшин хэмжүүрээр шалгана. Шал нь жигдгүй өрөөнд тавилгын хөл тохируулагчийг ашиглаж, хаалт онгойх чиглэл, тавиурын налуу, толгойн байрлалыг тэнцвэржүүлдэг. Хэвтээ зөрсөн шүүгээний хаалт өөрөө онгойх, хаалга шүргэлцэх зэрэг асуудал ашиглалтын эхнээсээ гарч ирдэг тул угсралтын багаас шууд засуулж, тохируулсны дараа дахин хэмжих нь зөв. Эцсийн утгуудыг бүртгэлд хамт хавсаргах нь хожим ялгаатай нөхцөлд дахин шалгах суурь болдог."
      ]
    },
    {
      "heading": "Гадаргуу, тоноглолд юуг анхаарах вэ?",
      "paragraphs": [
        "Гадаргуугийн шалгалтыг гэрэлтүүлэг сайтай нөхцөлд, өнцгөөс харж хийнэ. Өнгөлгөөнд зусмал, хусуулт, хөөсөрсөн ирмэг, өнгөний зөрүү, хагарал, бөмбөлөг байгаа эсэхийг хавтан тус бүрээр үздэг. Нэг өрөөний тавилгын өнгө хоорондоо нийцэж байгаа эсэхийг хажуугаар нь байрлуулж харьцуулна. Дээжтэй харьцуулах шаардлагатай үед дээжийг тусгайлан авчирч, гэрэлтүүлгийн доор тал бүрээр нь тулгах нь маргааныг багасгадаг.",
        "Тоноглолын хувьд тогтозуур, гүйлгээ, түгжээ, зөөлөн хаалтын механизм бүрийг бодитоор ажиллуулж үздэг. Хаалгыг олон дахин нээж хааж, шүүгээг бүрэн дүүргэсэн ачааллаар турших, сандал, бамбайны бэхэлгээг шалгах нь далд согогийг эрт илрүүлдэг. Тоноглолын марк, загварын тэмдэглэл зураглалтай нийцэж байгаа эсэх, солих нөөц эд анги байгаа эсэхийг хамт бүртгэнэ. Ажиллахгүй байгаа механизм бүрийг яг байршлын хамт тэмдэглэснээр засварын хүсэлтийг ойлгомжтой өгөх боломжтой болдог."
      ]
    },
    {
      "heading": "Асуудлын бүртгэлийг хэрхэн бичих вэ?",
      "paragraphs": [
        "Хүлээн авалтын бүртгэл нь тодорхой бүтэцтэй хүснэгт хэлбэртэй байвал ажиллана. Мөр бүрт өрөөний дугаар, тавилгын нэр, багцын дугаар, зөрчлийн товч тодорхойлолт, хэмжилтийн утга, зургийн дугаарыг бичнэ. Зөрчлийг нэрлэхдээ сэтгэгдэл биш баримт дээр суурилна. Ийм байх ёстой байсан, ийм байгаа гэсэн хоёр баганатай бичих нь ялгааг шууд харуулдаг. Жишээ нь шүүгээний хаалт нэг см налуу, ирмэгийн хальс хагарсан гэх мэт хэмжээчилсэн бичилт нийлүүлэгчид яг юу засахыг ойлгодог.",
        "Бүртгэлд зөвхөн зөрчил биш, илэрсэн байдал, шалгасан аргыг хамт тэмдэглэх нь чухал. Хэзээ, хэн шалгасан, ямар гэрэлтүүлэгт, ямар багажаар хэмжсэн гэдэг нь бүртгэлийн жинг өгдөг. Мөн багцын гадна гэмтэлтэй байсан тухай анхны тэмдэглэл, тээврийн баримт, зургийг холбож хавсаргах нь гэмтлийн гарал үүслийг тогтооход тусална. Бүртгэлийг хоёр талаас нь гарын үсэг зурсан хувилбараар нэг удаа баталж, дараагийн харилцааг энэ баталсан хувилбар дээр үргэлжлүүлдэг."
      ]
    },
    {
      "heading": "Засвар, дахин шалгалтыг хэрхэн зохион байгуулах вэ?",
      "paragraphs": [
        "Бүртгэлд орсон зөрчил бүрийг шийдвэрийн төрлөөр нь ялгана. Талбай дээр шууд засагдах асуудал, эд анги солих шаардлагатай асуудал, бүхэлд нь дахин бэлтгэх шаардлагатай асуудал гэсэн гурван бүлэгт хуваах нь ажлын дарааллыг тодорхой болгодог. Талбай дээр засагдах ажлыг угсралтын багт шууд өгч, солих эд ангийн жагсаалтыг нийлүүлэгчид нэгтгэж илгээнэ. Зөрчил бүрт хариуцагч, ажиллах огноо, дуусгах нөхцөлийг бичгээр тогтоож, хүлээн авалтын баримтад хавсаргана.",
        "Засвар дууссаны дараа дахин шалгалтыг анхны шалгалтын арга, багаж, бүртгэлийн маягтаар хийнэ. Засварласан хэсгийг зөвхөн хараадаар бус, хэмжилт, ажиллагааны туршилтаар дахин баталгаажуулдаг. Дахин шалгалтад тэнцсэн мөр бүрийг тэмдэглэж, хүлээн зөвшөөрсөн огноогоор нь бүртгэл хаагддаг. Ингэснээр төслийн хүлээн авалтын баримт бүрэн бөгөөд дараагийн өрөө эсвэл ирээдүйн төсөлд тулгуур баримт болно. Хэрэв засвар хожимдсон бол шалтгааныг бүртгэлд тэмдэглэснээр цаашдын хугацааны яриа бодит суурин дээр явагдана."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Хүргэлтийн дараа тавилгын хүлээн авалтыг хэзээ эхлэх вэ?",
      "answer": "Баглаа буусан даруйд эхлүүлэх нь зөв. Багцын гадна байдал, тоо ширхэг, тээврийн баримтыг өдөр нь шалгаж тэмдэглэснээр тээврийн үеийн гэмтлийг цагтай нь холбох нотлох баримт хадгалагддаг. Дараа нь угсралт, хэмжээ, тоноглолын нарийвчилсан шалгалтыг үргэлжлүүлнэ."
    },
    {
      "question": "Тавилгын баглааг хагалахдаа юуг анх шалгах вэ?",
      "answer": "Баглааны гадаргуу дээрх хагарал, шахагдсан булан, ус, чийгийн мөрийг багц бүр дээр нь шалгаж, зураг авч тэмдэглэнэ. Дараа нь багцын дугаарлалт, доторх эд ангийн тоог тээврийн баримт, багцын хуудастай тулгаж, дутуу илүү зүйлийг тэмдэглэнэ."
    },
    {
      "question": "Хэмжээний зөрүүг хэрхэн тогтоох вэ?",
      "answer": "Зураглалын дугаартай тавилга бүрийн өргөн, өндөр, гүн, дотоод хэмжээг хэмжүүрээр авч, зураглалын тоотой харьцуулна. Зөрүүгээр нь бичиж, зурагтай хамт бүртгэлд тэмдэглэнэ. Мөн өрөөний хана, шал, хаалганы хэмжээтэй тавилгын байрлалыг тулгах нь чухал."
    },
    {
      "question": "Гадаргуугийн гэмтлийг яаж илрүүлэх вэ?",
      "answer": "Гэрэлтүүлэг сайтай нөхцөлд гадаргууг янз бүрийн өнцгөөс харч, зусмал, хусуулт, өнгөний зөрүү, ирмэгийн хальсны хагарал, бөмбөлөг байгаа эсэхийг хавтан тус бүрээр шалгана. Өнгийн дээжтэй харьцуулбал нэг өрөөний тавилгын өнгөний нийцлийг баталгаажуулж болно."
    },
    {
      "question": "Тоноглолын шалгалтад юуг туршиж үзэх вэ?",
      "answer": "Тогтозуур, гүйлгээ, түгжээ, зөөлөн хаалтын механизм бүрийг бодитоор ажиллуулж үзнэ. Хаалгыг олон дахин нээж хааж, шүүгээг ачаалалтай турших, сандал, бамбайны бэхэлгээг шалгах нь далд согогийг эрт илрүүлдэг. Ажиллахгүй механизм бүрийг байршлын хамт бүртгэнэ."
    },
    {
      "question": "Асуудлын бүртгэлийн хуудсанд юу оруулах вэ?",
      "answer": "Өрөөний дугаар, тавилгын нэр, багцын дугаар, зөрчлийн хэмжээчилсэн тодорхойлолт, зургийн дугаар, шалгасан огноо, хүн, багажийг мөр бүрт бичнэ. Хүлээн авалтын нөхцөл, тээврийн баримт, анхны тэмдэглэлийг хавсаргаж, хоёр талын гарын үсэгтэй баталсан хувилбартай болгоно."
    },
    {
      "question": "Засварт орсон тавилгыг дахин хэрхэн шалгах вэ?",
      "answer": "Дахин шалгалтыг анхны арга, багаж, бүртгэлийн маягтаар хийнэ. Засварласан хэсгийг хараадаар бус, хэмжилт, ажиллагааны туршилтаар баталгаажуулж, тэнцсэн мөр бүрийг огноотой нь тэмдэглэж бүртгэлийг хаана. Тэнцээгүй тохиолдолд шалтгааныг бүртгэлд нэмж тэмдэглэнэ."
    }
  ]
},
  {
    id: "canton-fair-2026-post-fair-follow-up-mongolia",
    market: "mn",
    title: "Кантоны үзэсгэлэнгийн дараа: саналуудыг харьцуулж, нийлүүлэгчээ хэрхэн шалгах вэ",
    tag: "Төсөл",
    excerpt:
      "Үзэсгэлэн дууссанаар ажил дуусахгүй, харин жинхэнэ харьцуулалт эхэлдэг. Энэ нийтлэлд буцаж ирсний дараах 48 цагийн эрэмблэлт, саналуудыг ижил суурь дээр харьцуулах арга, эталоны дээж, үйлдвэрийн аудит, хүргэлтээс өмнөх шалгалтын дарааллыг тайлбарлав.",
    date: "2026-10-26",
    readingMin: 7,
    image: "/images/blog/canton-fair-2026-hotels-transport.webp",
    imageAlt: "Кантоны үзэсгэлэнгийн дараах дагалдах ажлын төлөвлөгөө боловсруулж буй ажлын ширээ",
    definition:
      "Үзэсгэлэнгийн дараах дагалдах систем гэдэг нь үзэсгэлэн дээр цуглуулсан холбоо барих мэдээлэл, дээж, зураг, аман тохиролцоог бүтэцтэй баримт болгон хувиргаж, нийлүүлэгч бүрийг ижил суурь дээр үнэлж, гэрээ болон хүргэлтээс өмнөх шалгалт хүртэлх шийдвэрүүдийг баримтад үндэслэн гаргах ажлын дараалал юм.",
    takeaways: [
      "Буцаж ирсний дараах 48 цагт холбоо барих хүмүүсийг А/Б/В гэсэн гурван ангилалд эрэмблэнэ.",
      "Бүх А ангилалын нийлүүлэгчид ижил худалдан авах багц илгээвэл саналуудыг мөр тус бүрээр харьцуулах боломжтой болно.",
      "Эталоны дээжийг гэрээнд зааж, гарын үсэгтэй баталбал чанарын маргаан ихээхэн багасна.",
      "Үйлдвэрийн аудит нь дээж биш, тухайн дээжийг олон дахин үйлдвэрлэх процесст нь хамаатай.",
      "Хүргэлтээс өмнөх шалгалтыг гэрээнд тогтоосон дээжтэй харьцуулан хийнэ.",
      "Ердийн үйлдвэрлэлийн хугацаа захиалга баталгаажсанаас хойш 30-45 хоног, тээвэр нь тусдаа тооцогдоно.",
    ],
    sections: [
      {
        heading: "Яагаад үзэсгэлэн дууссаны дараах хоёр хоног шийдвэрлэх ач холбогдолтой вэ?",
        paragraphs: [
          "Кантоны үзэсгэлэнгийн хоёрдугаар үе 2026 оны аравдугаар сарын 27-нд хаагдлаар, худалдан авагч бүр ижил төрлийн өв хөрөнгөтэй үлддэг: каталог, унасан зураг, хаягийн цуглуулга. Энэ материалын ихэнх нь дараагийн долоо хоногтоо эрэмблэгдэхгүй бол утгаараа хэрэглэгдэхгүй орхигддог. Тиймээс буцаж ирсний дараах хоёр хоногийг гурван ангилалд хуваах ажилд зориулна: А бол таны техникийн шаардлага, төсөвт нийцсэн нийлүүлэгч, Б бол зарим хэсгээрээ нийцсэн, В бол тохирохгүй нийлүүлэгч.",
          "А ангилалын нийлүүлэгч бүрт төслийн товчоог хавсаргаж, баяр хүргэх мессеж илгээнэ. Товчоонд өрөөний тоо, тавилгын ангилал, нээлтийн огноо, чанарын түвшинг нэг хуудсанд багтаан бичих нь нийлүүлэгчид таамаглалаар бус, баримтад үндэслэн хариулах боломж олгодог. Үзэсгэлэн дээрх аман үнийг quotation гэж үзэхгүй байх нь чухал: бичгээр ирсэн санал л харьцуулах эхлэл болно.",
        ],
      },
      {
        heading: "Саналуудыг хэрхэн ижил суурь дээр харьцуулах вэ?",
        paragraphs: [
          "Харьцуулалтын түлхүүр нь бүх нийлүүлэгчид ижил багц илгээх явдал юм. Багцад өрөөний төрөл тус бүрийн тавилгын жагсаалт, материалын дээжийн дугаар, зураглал, тээврийн нөхцөл, хүлээгдэж буй хугацааг нэгтгэнэ. Нэг нийлүүлэгч толгойн хавтанг, нөгөө нь ТВ самбарыг үнэд оруулаагүй байх зэрэг зөрүү нь нийт дүнг шууд харьцуулах боломжгүй болгодог. Иймээс багцад багтаагүй зүйлийг жагсаалтад тусад нь тэмдэглэхийг шаардана.",
          "Хариултыг үнэлэхдээ нийт дүнгээр бус, хариултын бүтцээр үнэлэх нь зүй ёсны арга юм. Мөр тус бүрээр бүтэцтэй, дутуу зүйлээ тодорхой илэрхийлсэн, хугацааны тооцоог дээж баталгаажсан өдрөөс тусад нь тоолсон санал нь үйлдвэрлэлийн үеийн харилцааны чанарыг урьдчилан харуулдаг. Нэг хуудсан дээрх ерөнхий дүнгээр хариулсан нийлүүлэгч өөр асуултад хариулсан байна.",
        ],
      },
      {
        heading: "Эталоны дээжийг яагаад гэрээнд зааж бичих вэ?",
        paragraphs: [
          "Эталоны дээж гэдэг нь тухайн бүтээгдэхүүнийг баталгаажуулсан бодит дээж бөгөөд хоёр ижил хувилбарыг хийнэ: нэг нь үйлдвэрт үлдэж, нөгөө нь худалдан авагчийн талд үлддэг. Бүх чанарын шалгалтыг энэ дээжтэй харьцуулан хийдэг тул хүргэлтийн үеийн маргаан ихэнх нь эхлэхээсээ өмнө шийдэгддэг. Отель төслийн хувьд эталоны дээжийг бүрэн дүрсэлсэн төгсгөлийн өрөөнд байрлуулж, ажиллуулах эзэд нь бүтээгдэхүүнийг тусгаарлагдсан биш, бодит орчинд хүлээн авдаг.",
          "Гэрээнд төлбөрийн шатлал, хоцрогдлын хариуцлага, өөрчлөлтийн журмыг хамт тогтоох нь зүйтэй. Төлбөрийг огноо бус, баримтад холбож байхаар бичих нь хоёр талын эрсдэлийг тэнцвэржүүлнэ: жишээ нь хүргэлтээс өмнөх шалгалтын тайлан төлбөрийн үндэс болж байгааг гэрээнд тодорхой бичнэ. 30-45 хоногийн үйлдвэрлэлийн хугацааг дээж баталгаажсанаас эхэлж тооцохыг тусад нь зааж өгвөл хугацааны маргаан багасна.",
        ],
      },
      {
        heading: "Үйлдвэрийн аудитад юуг шалгах вэ?",
        paragraphs: [
          "Аудит нь үзэсгэлэн дээрх сэтгэгдлийг баримт болгон хувиргана. Дэлгүүрийн танхимд танд танилцуулсан дээжийг 180 толгойн хавтанг үйлдвэрлэх процесстэй харьцуулж үзэх хэрэгтэй. Ажлын шатанд яг таны чанарын түвшинд ажиллаж буй экспортын захиалгыг бодитоор харахыг хүснэ. Мөн хуудас материалын чийгшилийн уншилтыг өнөөдрийн байдлаар асуух нь ховил, наалдамхай зэрэг алдагдлын урьдчилсан шинж тэмдэг илрүүлдэг.",
          "Будлагын шугам ба зуурах зууралдын сахилга бат, баглаа боодлын шугамыг онцгой анхааралтай үзнэ. Отель төслийн гомдлын ихэнх нь гадаргуугийн боловсруулалт, ирмэгийн өнгөний зөрүүтэй холбогддог. Солилцооны завсарлага буюу үе шат хоорондын хоногууд нь үзэсгэлэнтэй холбоотой аяллын зардалд аж үйлдвэрийн айлчлалыг нэмэх нөхцөл юм.",
        ],
      },
      {
        heading: "Хүргэлтээс өмнөх шалгалт хэрхэн эрсдэлийг бууруулах вэ?",
        paragraphs: [
          "Хүргэлтээс өмнөх шалгалт нь чингэлэг хаагдахаас өмнөх сүүлчийн шалгагдах цэг юм. Шалгалтыг эталоны дээж болон бичгээр тогтоосон төлөвлөгөөний дагуу хийнэ: гол согогийн дээжлэх стандарт, чийгшилийн уншилт, зураглалын хэмжилт, гадаргуугийн өнгөний харьцуулалтыг хоёр гэрлийн нөхцөлд, баглаа боодлын бүртгэл зургийн хамт хийнэ. Шалгалтын журам, хүлээж авах тоог гэрээнд урьдчилан тогтоосон байвал үйлдвэрийн хаалганд хэлэлцэх зүйл үлддэггүй.",
          "Шалгалт амжилттай болсон цагт ачааг хааж, зураг бүхий бүртгэл хоёр талын гарын үсэгтэй хадгалагдана. Хэрэв төсөл нь бүрэн өрөөний багц шаарддаг бол үзэсгэлэнгийн дараах энэ дараалал нь байр бүрээр суурилуулалт хүртэл нэг хариуцагчтай ажиллах замыг нээдэг. Дараагийн алхам бүр баримт дээр суурилсан тул шийдвэр гаргах хурд, итгэлцэл хоёулаа нэмэгддэг.",
        ],
      },
    ],
    faqs: [
      {
        question: "Үзэсгэлэн дууссаны дараа нийлүүлэгчидтэй хэзээ холбогдох вэ?",
        answer:
          "Эрэмблэлтийг 48 цагийн дотор, бүрэн худалдан авах багцыг долоо хоногийн дотор илгээх нь зүйтэй. Нийлүүлэгчид өөрсдийн үзэсгэлэнгийн холбоо барих хүмүүсийг ирсэн захиасын дарааллаар ажиллуулдаг тул эхний бүтэцтэй захиас ихэвчлэн анхны ноцтой саналыг авдаг.",
      },
      {
        question: "Үзэсгэлэн дээрх үнэ сайн байсан, яагаад бичгээр ирсэн санал өндөр байдаг вэ?",
        answer:
          "Үзэсгэлэн дээрх үнэ нь тодорхойгүй бүтээгдэхүүн дээрх аман тооцоо байдаг. Бичгээр ирсэн санал нь жагсаалт, баглаа боодол, тээврийн нөхцөл, хүчин төгөлдөр байдлын хугацааг үнэлдэг тул харьцуулах обьект нь санал байх ёстой, дурсамж биш.",
      },
      {
        question: "Отель тавилгын төлбөрийн ердийн бүтэц ямар байдаг вэ?",
        answer:
          "Түгээмэл нь захиалгаар 30%, хүргэлтээс өмнөх шалгалтын тайлангаар 60-70%, суурилуулалтын дараа үлдэгдэл байдаг. Гол нь төлбөр бүрийг огноо бус, баримтад холбох явдал юм.",
      },
      {
        question: "Үзэсгэлэн дээр дээжийг харсан бол үйлдвэрийн аудит заавал хэрэгтэй юу?",
        answer:
          "Тийм. Үзэсгэлэн нь сонгосон дээжийг харуулдаг бол аудит нь тэдгээрийг олон дахин давтан үйлдвэрлэх процессыг харуулдаг. Аялал боломжгүй бол таны бүтээгдэхүүн шатаж буй шугамын бодит видео айлчлал хангалттай орлуулалт байж болно.",
      },
      {
        question: "Эталоны дээж гэж юу вэ, хэн хадгалдаг вэ?",
        answer:
          "Энэ бол тухайн бүтээгдэхүүний баталгаажсан бодит дээж бөгөөд гарын үсэг, огноотой хоёр ижил хувилбартай байдаг: нэг нь үйлдвэрт үлдэж, нөгөө нь худалдан авагчийн талд үлддэг.",
      },
      {
        question: "Хүргэлтээс өмнөх шалгалтыг хэзээ захиалах вэ?",
        answer:
          "Үйлдвэрлэл 90-95 хувьтай болоход, чингэлэг хаагдахаас өмнө. Шалгалтын хугацааг гэрээнд тогтоосон байвал уг цагийг хэлэлцээрээс гаргах боломжгүй болдог.",
      },
      {
        question: "Үзэсгэлэнгийн дараа отель тавилгын үйлдвэрлэл хэр хугацаа авдаг вэ?",
        answer:
          "Ердийн үйлдвэрлэл захиалга баталгаажсанаас хойш 30-45 хоног үргэлжилж, тээвэр нь түүн дээр нэмэгддэг. Дээжийг захиалга өгөхөөс өмнө баталгаажуулсан байх нь уг хугацааг бодитой байлгадаг.",
      },
    ],
  },

  {
    id: "canton-fair-2026-post-fair-follow-up-russia",
    market: "ru",
    title: "После Кантонской выставки: как сравнить предложения и проверить поставщика",
    tag: "Проект",
    excerpt:
      "Выставка закрывается, но решение ещё не принято. Разбираем послевыставочную систему: сортировка контактов за 48 часов, сопоставимые запросы, эталонный образец в договоре, аудит производства и инспекция перед отгрузкой.",
    date: "2026-10-26",
    readingMin: 7,
    image: "/images/blog/ffe-timeline.webp",
    imageAlt: "График работы с поставщиками после Кантонской выставки",
    definition:
      "Послевыставочная система работы — это последовательность действий после ярмарки: сортировка контактов, рассылка одинаковых запросов всем шорт-листерам, сравнение предложений построчно, фиксация эталонного образца и условий в договоре, аудит производства и инспекция перед отгрузкой, — при которой каждое решение опирается на документ, а не на впечатление от стенда.",
    takeaways: [
      "Первые 48 часов после выставки уходят на сортировку контактов по группам A/B/C.",
      "Одинаковый запрос всем поставщикам шорт-листа делает предложения сопоставимыми построчно.",
      "Эталонный образец, подписанный и скреплённый в договоре, снимает большинство споров о качестве.",
      "Аудит производства показывает не образцы, а процесс, который их воспроизведёт.",
      "Инспекция перед отгрузкой проводится против эталонного образца по согласованному плану.",
      "Стандартное производство занимает 30-45 дней с момента подтверждения заказа, плюс доставка.",
    ],
    sections: [
      {
        heading: "Почему первые 48 часов после выставки решают результат?",
        paragraphs: [
          "Вторая фаза 140-й Кантонской выставки закрылась 27 октября 2026 года, и у каждого закупщика остался один и тот же материал: каталоги, сотни фотографий и стопка визиток. Без сортировки этот материал не превращается в решение. Первые два дня уходят на разделение контактов на три группы: A — поставщики, совпавшие с техническим заданием и бюджетом, B — частичное совпадение, C — без совпадения.",
          "Каждому поставщику группы A отправляется короткое письмо с проектным брифом: количество номеров, категории мебели, целевая дата открытия, уровень качества. Конкретный бриф получает предметный ответ; запрос «пришлите лучшую цену» получает буклет. Устная цена со стенда предложением не является — сравнение начинается с письменных ответов.",
        ],
      },
      {
        heading: "Как сделать предложения поставщиков сопоставимыми?",
        paragraphs: [
          "Ключ — одинаковый пакет запроса для всех. В него входят построчный перечень мебели по типам номеров, ссылки на образцы отделки, чертежи, базис поставки (FOB, CIF или DDP) и целевой график. Без общей базы одно предложение включает изголовье, другое — нет, третье считает доставку по другой схеме, и итоговые суммы описывают разные товары.",
          "Оценивайте не только сумму, но и структуру ответа. Предложение с построчной разбивкой, объявленными исключениями, раздельным отсчётом сроков (от заказа и от одобрения образцов) и сроком действия демонстрирует поведение, которое понадобится в производстве. Одностраничная сумма — ответ на другой вопрос. Отдельный проход стоит посвятить ценовой инженерии: поставщики нередко экономят на невидимых узлах — ящичных системах, основаниях, крепеже, не трогая гостевые поверхности и сертификаты горючести.",
        ],
      },
      {
        heading: "Что зафиксировать в договоре до размещения заказа?",
        paragraphs: [
          "Три блока условий снимают большинство будущих споров. Первый — эталонный образец (golden sample): подписанная и скреплённая физическая ссылка на качество по каждой позиции; для отельных проектов он обычно живёт в согласованном демонстрационном номере. Второй — этапность оплаты: распространена схема 30% при заказе, 60-70% против отчёта инспекции перед отгрузкой, остаток после монтажа; каждый платёж привязывается к документу, а не к календарю. Третий — ответственность за сроки: дата поставки, льготное окно и порядок компенсации при его превышении, потому что отели открываются на объявленные даты.",
          "Стоит зафиксировать и процедуру изменений: каждая доработка оценивается письменно против эталонного образца до исполнения. FF&E-проекты смещаются от бюджета мелкими устными одобрениями — письменная процедура изменений удерживает смету. Базис поставки и валюту указывают в теле договора, а также стандарт экспортной упаковки, способной выдержать две перегрузки.",
        ],
      },
      {
        heading: "Что проверить на аудите производства?",
        paragraphs: [
          "Аудит превращает впечатление от стенда в доказательства. Просите показать живой экспортный заказ вашего уровня качества, работающий на линии в день визита. Спрашивайте текущее показание влажности плитного материала: повышенная влажность сегодня превращается в поведённые изголовья через полгода в климате отеля. Смотрите на шлифовальные посты и дисциплину партий на лакировочной линии — большинство рекламаций по мебели связаны именно с отделкой.",
          "Отдельное внимание — упаковочной линии: обрешётка, угловая защита, разделение изделий внутри ящика. Дни смены экспозиции между фазами выставки — естественное окно для таких визитов: павильоны закрыты, заводы работают, и уже оплаченная поездка получает вторую цель.",
        ],
      },
      {
        heading: "Зачем нужна инспекция перед отгрузкой?",
        paragraphs: [
          "Инспекция перед отгрузкой — последний рубеж до затарки контейнера, когда у покупателя ещё есть реальный рычаг. План согласуется заранее и привязывается к эталонному образцу: выборочный контроль основных дефектов по уровню AQL 2.5, замеры влажности, проверка размеров против согласованных чертежей, сравнение отделки и цвета под двумя источниками света, фотографический учёт упаковки по каждому ящику.",
          "Пройденная инспекция закрывается отчётом с фотографиями, после чего контейнер загружается и пломбируется. Стандартное производство занимает 30-45 дней от подтверждения заказа, плюс доставка; инспекционный рубеж не сокращает срок, но защищает от ситуации, когда заказ опаздывает и при этом едет с дефектами. Готовая гостиничная комната — собранная, проверенная, отгруженная и установленная — и есть результат, который защищает вся эта система.",
        ],
      },
    ],
    faqs: [
      {
        question: "Как быстро после выставки связываться с поставщиками?",
        answer:
          "Сортировка — в течение 48 часов, полный пакет запроса — в течение недели. Поставщики обрабатывают выставочные контакты в порядке поступления писем; первый структурированный запрос обычно получает первое серьёзное предложение.",
      },
      {
        question: "На стенде цена была хорошей. Почему письменное предложение выше?",
        answer:
          "Стендовая цена — впечатление от неописанного товара. Письменное предложение оценивает конкретный перечень, упаковку, базис поставки и срок действия. Сравнивать нужно предложения, а не воспоминания.",
      },
      {
        question: "Какая структура оплаты типична для отельной мебели из Китая?",
        answer:
          "Обычно 30% при заказе, 60-70% против отчёта инспекции перед отгрузкой, остаток после монтажа или короткого периода удержания. Каждый платёж привязывается к документу, а не к дате.",
      },
      {
        question: "Нужен ли аудит производства, если я видел образцы на выставке?",
        answer:
          "Да. Выставка показывает отобранные образцы, аудит — процесс, который воспроизведёт их в сотнях экземпляров. Если поездка невозможна, живой видеопроход по линии с вашей позицией в работе — приемлемая замена.",
      },
      {
        question: "Что такое эталонный образец и кто его хранит?",
        answer:
          "Это согласованная физическая ссылка на качество каждой позиции — подписанная и датированная. Делаются два одинаковых комплекта: один остаётся на заводе как производственный эталон, второй — у покупателя или инспектора как контрольный.",
      },
      {
        question: "Когда заказывать инспекцию перед отгрузкой?",
        answer:
          "Когда производство завершено на 90-95% и продукция готова к финальной проверке перед затаркой. Если инспекция прописана в договоре с уровнем AQL и чек-листом, её сроки невозможно «переговорить» на заводе.",
      },
      {
        question: "Сколько занимает производство отельной мебели после выставки?",
        answer:
          "Стандартное производство — 30-45 дней от подтверждения заказа, плюс доставка. Одобренный демонстрационный номер и подписанный эталонный образец до размещения заказа удерживают этот срок реалистичным.",
      },
    ],
  },
];

export const marketPostsFor = (market: MarketCode) =>
  marketPosts.filter((post) => post.market === market);

export const marketPostById = (market: MarketCode, id: string) =>
  marketPosts.find((post) => post.market === market && post.id === id);

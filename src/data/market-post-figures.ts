// In-body figures for market-native posts (R3: >=3 body images). Keyed by MarketPost id.
// Captions are written in the post's own market language — never auto-translated.
export type MarketFigure = {
  src: string;
  alt: string;
  caption: string;
  /** insert after sections[afterSection] */
  afterSection: number;
};

export const marketPostFigures: Record<string, MarketFigure[]> = {
  "mehmonxona-mebeli-parvarishi": [
    {
      src: "/images/blog/hotel-maintenance-fig1.webp",
      afterSection: 1,
      alt: "Chapa qirrasi va mato yuzasining yonma-yon ko'rinishi, chang qatlami bilan",
      caption: "Chang qirrada va mato tolasida to'planadi: quruq latta uni yuzaga yoyadi, changyutgich olib tashlaydi.",
    },
    {
      src: "/images/blog/hotel-maintenance-fig2.webp",
      afterSection: 2,
      alt: "Chapa yuzani tozalash uchun mikrofiber latta, changyutgich va neytral sovun",
      caption: "Uch qadam: quruq chang, siqilgan nam latta, quruq latta. Suv yuzada qolmasligi kerak.",
    },
    {
      src: "/images/blog/hotel-maintenance-fig3.webp",
      afterSection: 3,
      alt: "Mehmonxona xonasida choyshab va yostiqlarni tuzatayotgan xodim: mato yuzalar har kuni ko'zdan kechiriladi",
      caption: "Mato va teri yuzalar har kuni ko'zdan kechiriladi: dog' paydo bo'lsa, mahalliy tozalash darhol boshlanadi.",
    },
    {
      src: "/images/blog/hotel-maintenance-fig4.webp",
      afterSection: 4,
      alt: "Lobbi va restoran mebellari: chang chastotasi yuqori bo'lgan hudud",
      caption: "Lobbi va restoranda chastota yuqori, vosita bir xil qoladi: neytral, spirtsiz, quritish bilan.",
    },
    {
      src: "/images/blog/hotel-maintenance-fig5.webp",
      afterSection: 5,
      alt: "Xodim uchun bir varaqli parvarish ko'rsatmasi va tozalash qaydnomasi",
      caption: "Ko'rsatma bir varaqda: material, vosita, suyultirish, davriylik va taqiqlangan vositalar.",
    },
  ],
  "hotel-furniture-technical-brief-uzbekistan": [
    {
      src: "/images/blog/tech-brief-fig1.webp",
      afterSection: 1,
      alt: "Mehmonxonadagi to'liq xona to'plami: yumshoq tagkarali krovat, ikki tumba, yozuv stoli va stul, kiyim shkafi va bagaj skamyasi",
      caption:
        "1-rasm. Xona to'plami — texnik topshiriqning asosiy birligi: bir xonadagi barcha buyumlar bir qatorda, bir uslubda va bir joyda yetkaziladigan bo'lak sifatida yoziladi.",
    },
    {
      src: "/images/blog/tech-brief-fig2.webp",
      afterSection: 2,
      alt: "Mehmonxona devorida o'lchash lentesi: tumba va devorga osilgan tagkaraning o'rnatish balandligi o'lchanmoqda",
      caption:
        "2-rasm. O'lchamlar uch o'qda va o'rnatish balandligi bilan yoziladi: devorga mahkamlanadigan buyumlar uchun balandlik topshiriqda alohida qator bo'ladi.",
    },
    {
      src: "/images/blog/tech-brief-fig3.webp",
      afterSection: 3,
      alt: "Mebel materiallari namunalari: mato namunasi, teri namunasi, yong'oq plitalari va latun plita, bo'sh namuna yorliqlari hamda kattalashtirgich bilan",
      caption:
        "3-rasm. Material va namuna mezoni: har bir material uchun tasdiqlangan namuna saqlanadi, qabul paytida aynan shu namuna bilan solishtiriladi.",
    },
  ],
  "mehmonxona-mebeli-kafolati": [
    {
      src: "/images/blog/warranty-fig1.webp",
      afterSection: 1,
      alt: "Mebel nuqsonini suratga olish va dalolatnoma tuzish",
      caption: "Nuqson yaqin planda o'lchov bilan birga suratga olinadi.",
    },
    {
      src: "/images/blog/warranty-fig2.webp",
      afterSection: 2,
      alt: "Almashtirish talab qilinadigan mebel nuqsonini baholash",
      caption: "Karkas va xavfsizlikka ta'sir qiluvchi nuqson almashtirish uchun asos bo'ladi.",
    },
    {
      src: "/images/blog/warranty-fig3.webp",
      afterSection: 3,
      alt: "Mehmonxona mebeli furniturasini joyida tuzatish",
      caption: "Almashtiriladigan qismlar joyida tuzatiladi, karkas nuqsoni esa boshqacha baholanadi.",
    },
    {
      src: "/images/blog/warranty-fig4.webp",
      afterSection: 4,
      alt: "Kafolat da'vosi ro'yxati va javob muddatlarini nazorat qilish",
      caption: "Har bir da'vo xona va partiya raqami bilan yagona ro'yxatda yuritiladi.",
    },
    {
      src: "/images/blog/warranty-fig5.webp",
      afterSection: 5,
      alt: "Kafolat shartlari va muvofiqlik hujjatlarini tekshirish",
      caption: "Shartnoma shartlari va muvofiqlik hujjatlari birgalikda tekshiriladi.",
    },
  ],
};

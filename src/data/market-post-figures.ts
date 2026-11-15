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
};

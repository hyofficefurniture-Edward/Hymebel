// Per-article in-body figures (R3: ≥3 body images). Keyed by post id from blog.ts.
import type { Lang } from "../i18n/ui";

export type BlogFigure = {
  src: string;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
  /** insert after sections[afterSection] */
  afterSection: number;
};

export const blogFigures: Record<string, BlogFigure[]> = {
  "lobby-furniture-budget-before-rfq": [
    {
      src: "/images/blog/lobby-budget-fig1.webp",
      afterSection: 1,
      alt: {
        kk: "Үлкен лобби жоспары: кіру, күту және қабылдау аймақтары түрлі-түсті маркерлермен белгіленген",
        uz: "Mehmonxona lobby rejasiga ko'rish: kirish, kutish va qabulxonaga ajratilgan rangli belgilar",
        en: "Top view of a hotel lobby plan with entry, waiting and reception zones marked in colour",
      },
      caption: {
        kk: "1-сурет. Бюджетті әр аймаққа бөлу — жоспардағы түрлі-түсті маркерлер әр аймаққа жиһаз тобын сәйкестендіреді.",
        uz: "1-rasm. Byudjetni zonalarga bo'lish — rejadagi rangli belgilar har bir zonaga mebel guruhini moslashtiradi.",
        en: "Figure 1. Splitting the budget by zone — colour markers on the plan tie each zone to a furniture family.",
      },
    },
    {
      src: "/images/blog/lobby-budget-fig2.webp",
      afterSection: 2,
      alt: {
        kk: "Бір мата мен жаңғақ аяқтарымен орындалған банкетка, екі қолтық орындық және екі дөңгелек оттоманка бір қатарда",
        uz: "Bir xil mato va yong'oq oyoqli divan, ikki yengil stul va ikki dumaloq ottomanka bir qatorda",
        en: "A sofa, two armchairs and two round ottomans in the same oatmeal fabric with walnut legs, lined up",
      },
      caption: {
        kk: "2-сурет. Ең үлкен үлес әдетте жұмсақ жиһаз тобына тиесілі: заттар бірге бағаланады (қаңқа + толтырғыш + мата).",
        uz: "2-rasm. Eng katta ulush odatda yumshoq mebel guruhiga to'g'ri keladi: ramka, to'ldirgich va mato birga baholanadi.",
        en: "Figure 2. Upholstered seating usually takes the largest share: frame, filling and fabric are priced together.",
      },
    },
    {
      src: "/images/blog/lobby-budget-fig3.webp",
      afterSection: 3,
      alt: {
        kk: "Теңшелім деңгейінің үш таңдауы: тігілген жиекті ағаш қолтық үлгісі, үш ағаш түрінің қаптамасы және үш металдау үлгісі",
        uz: "Moslashtirish darajasining uch tanlovi: tikiilgan chetli yog'och arm-sample, uch daraxt turi qoplamasi va uch metall namunasi",
        en: "Three customisation choices: a stitched timber arm sample, three veneer species and three metal finish plates",
      },
      caption: {
        kk: "3-сурет. Әр теңшелім қабаты (өлшем, мата тігісі, ағаш түрі, метал өңдеу) бюджетке өз үлесін қосады.",
        uz: "3-rasm. Har bir moslashtirish qatlami (o'lcham, mato tikiishi, daraxt turi, metal qoplama) byudjetga o'z ulushini qo'shadi.",
        en: "Figure 3. Each customisation layer — size, stitching, timber species, metal finish — adds its own cost step.",
      },
    },
  ],
};

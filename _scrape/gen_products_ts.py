# -*- coding: utf-8 -*-
"""从 _scrape JSON 生成 src/data/products.ts（60 款 × kk/uz/en 三语）。
名称为人工校对的本地化短名；描述用类目级模板 + 材质/尺寸槽位组合（待母语校审）。"""
import json, os, re

REPO = r"C:\Users\admin\WorkBuddy\hongye-content-core\2026-05-12-task-1\hymebel-repo"
SCRAPE = os.path.join(REPO, "_scrape")
OUT = os.path.join(REPO, "src", "data", "products.ts")

CAT_MAP = {"hotel": "hotel-furniture", "home": "villa-residential",
           "office": "office-furniture", "education": "education-furniture",
           "medical": "healthcare-furniture"}

# {id: (kk, uz, en)} 人工校对三语短名
NAMES = {
 # ── hotel ──
 "hotel-ca-01": ("Тиек ағашынан жасалған дөңгелек ашық ауа асхана жиынтығы (6-8 орын)", "Tiak yog'ochidan dumaloq ochiq havo ovqat to'plami (6-8 o'rin)", "Round Teak Outdoor Dining Set (6-8 Seats)"),
 "hotel-ca-02": ("Жиналатын банкеттік орындықтар", "Yig'iladigan banket stullari", "Stackable Banquet Chairs"),
 "hotel-ca-03": ("Қонақүй нөмір жиһазы — жеке жоба", "Mehmonxona yotoqxona mebeli (buyurtma bo'yicha)", "Bespoke Hotel Guestroom Furniture"),
 "hotel-ca-04": ("Бар үстелдері (ағаш-металл, биік)", "Bar stollari (yog'och-metall, baland)", "Bar Height Tables (Wood & Metal)"),
 "hotel-ca-05": ("Ресторан орындықтары (биік арқалы, кафелі)", "Restoran o'rindiqlari (baland orqali)", "High-Back Restaurant Booth Seating"),
 "hotel-ca-06": ("Мейрамхана диван-орындықтары (кафелі)", "Mehmonxona divan-o'rindiqlari", "Commercial Dining Booth Seating"),
 "hotel-ca-07": ("Бар орындықтары (айналмалы, биік арқалы)", "Bar stullari (aylanuvchi, baland orqali)", "High-Back Swivel Barstools"),
 "hotel-ca-08": ("Мейрамхана асхана үстелдері (дөңгелек/шаршы)", "Restoran ovqat stollari (dumaloq/kvadrat)", "Restaurant Dining Tables (Round & Square)"),
 "hotel-ca-09": ("Буфет және дисплей шкафтар (қонақүй)", "Bufet va vitrina shkaflari (mehmonxona)", "Hotel Buffet Sideboards & Display Tops"),
 "hotel-ca-10": ("FF&E толық жабдықтау шешімі", "To'liq FF&E yechimlari", "Comprehensive FF&E Solutions"),
 "hotel-ca-11": ("Бүктелетін банкет үстелдері", "Katlanadigan banket stollari", "Folding Banquet Tables"),
 "hotel-ca-12": ("Кеңес бөлмесі орындықтары (айналмалы)", "Kengash xonasi stullari (aylanuvchi)", "High-Back Swivel Conference Chairs"),
 # ── home ──
 "home-ca-01": ("Вилла жиһазы — жеке жоба шешімі", "Villa mebeli — individual loyiha yechimi", "Bespoke Villa Furniture Solutions"),
 "home-ca-02": ("Ванна бөлмесі жиһазы (вилла жобалары)", "Hammom mebeli (villa loyihalari)", "Custom Villa Bathroom Furniture"),
 "home-ca-03": ("Толық үй жиһазы — жеке жобалау", "Butun uy mebeli — individual loyihalash", "Whole-Home Custom Furniture"),
 "home-ca-04": ("Заманауи вилла жиынтықтары", "Zamonaviy villa to'plamlari", "Modern Villa Furniture Sets"),
 "home-ca-05": ("Үйді толық жобалау бойынша жиһаз", "Uy interyeri bo'yicha buyurtma mebel", "Whole-House Custom Furniture"),
 "home-ca-06": ("Премиум қонақ бөлме жиһазы (вилла)", "Premium mehmonxona mebeli (villa)", "Luxury Living Room Furniture for Villas"),
 "home-ca-07": ("Жатын, қонақ және асхана жиынтықтары", "Yotoqxona, mehmonxona va ovqatxona to'plamlari", "Residential Bedroom, Living & Dining Sets"),
 "home-ca-08": ("Вилла қонақ бөлмесі — кілтті тапсыру", "Villa mehmonxonasi — turnkey yechim", "Turnkey Villa Lounge Suite"),
 "home-ca-09": ("Виллаға арналған толық жеке жиһаз", "Villa uchun to'liq buyurtma mebel", "Villa Whole-House Bespoke Solutions"),
 "home-ca-10": ("Пентхаус жиһазы (FF&E)", "Penthaus mebeli (FF&E)", "High-End Penthouse Furniture (FF&E)"),
 "home-ca-11": ("Ас үй аралы (вилла жобалары)", "Oshxona oroli (villa loyihalari)", "Kitchen Island for Luxury Residences"),
 "home-ca-12": ("Тұрғын үй жиһазы — көтерме жобалар", "Turar-joy mebeli — ulgurji loyihalar", "Residential Furniture for Bulk Projects"),
 # ── office ──
 "office-ca-01": ("L-пішінді жетекші үстел (ағаш)", "L-shaklidagi rahbar stoli (yog'och)", "L-Shape Executive Desk"),
 "office-ca-02": ("Жетекші үстел (ағаш, тумбалы)", "Rahbar stoli (yog'och, shkafli)", "Wooden Executive Desk with Storage"),
 "office-ca-03": ("Тері үстелді жетекші үстел", "Teri qoplamali rahbar stoli", "Leather-Top Executive Desk"),
 "office-ca-04": ("Тері кірістірмелі жетекші үстел", "Teri qadalgan rahbar stoli", "Executive Desk with Leather Inlay"),
 "office-ca-05": ("Кеңес үстелі (10 орын)", "Kengash stoli (10 o'rin)", "10-Person Conference Table"),
 "office-ca-06": ("Кеңес үстелі (12 орын)", "Kengash stoli (12 o'rin)", "12-Person Conference Table"),
 "office-ca-07": ("Кеңес үстелі (4200×1600 мм, ағаш)", "Kengash stoli (4200×1600 mm, yog'och)", "Meeting Table 4200×1600 mm (Wood)"),
 "office-ca-08": ("Кеңес үстелі (3800×1400 мм, ағаш)", "Kengash stoli (3800×1400 mm, yog'och)", "Meeting Table 3800×1400 mm (Wood)"),
 "office-ca-09": ("Қабылдау күзеті (корпоративтік лобби)", "Qabul shcheti (korporativ lobbi)", "Corporate Lobby Reception Desk"),
 "office-ca-10": ("Премиум қабылдау күзеті (іскерлік орталық)", "Premium qabul shcheti (biznes markaz)", "Luxury Reception Front Desk"),
 "office-ca-11": ("Төрт орындықты жұмыс станциясы (бамбук үстел үсті)", "To'rt o'rinli ish stansiyasi (bambuk stol usti)", "Four-Person Workstation (Bamboo Desktop)"),
 "office-ca-12": ("Модульдік файл шкафы мен кітап сөресі", "Modulli arxiv shkafi va kitob javoni", "Modular Filing Cabinet & Bookshelf"),
 # ── education ──
 "edu-ca-01": ("Университет партасы мен орындығы (ағаш әрлеу)", "Universitet partasi va stuli (yog'och qoplama)", "University Student Desk & Chair (Wood Finish)"),
 "edu-ca-02": ("Мұғалім үстелі мен кафедрасы", "O'qituvchi stoli va kafedra", "Teacher Desk & Podium"),
 "edu-ca-03": ("Кітапхана сөресі (ашық жүйе)", "Kutubxona javoni (ochiq tizim)", "Open-Concept Library Shelving"),
 "edu-ca-04": ("Екі қабатты жатаған (жатақхана)", "Ikki qavatli yotoq (yotoqxona)", "Dormitory Bunk Bed"),
 "edu-ca-05": ("Оқушы партасы мен орындығы (биіктігі реттелетін)", "O'quvchi partasi va stuli (balandligi sozlanadigan)", "Adjustable Student Desk & Chair"),
 "edu-ca-06": ("Дәрісхана үстелі (университет)", "Ma'ruza zali stoli (universitet)", "Lecture Hall Desk"),
 "edu-ca-07": ("Кітапхана сөресі (көп функциялы)", "Kutubxona javoni (ko'p funksiyali)", "Multi-Functional Library Bookshelf"),
 "edu-ca-08": ("Екі қабатты жатаған (студенттік жатақхана)", "Talabalar yotoqxona yotog'i", "Student Dormitory Bunk Bed"),
 "edu-ca-09": ("Зертхана үстелі (K-12, қышқылға төзімді)", "Laboratoriya stoli (K-12, korroziyaga chidamli)", "K-12 Science Lab Workstation"),
 "edu-ca-10": ("Зертхананың орталық аралы", "Markaziy laboratoriya oroli", "Central Science Lab Island"),
 "edu-ca-11": ("Сынып партасы мен орындығы (жиынтық)", "Sinf partasi va stuli (to'plam)", "Classroom Desk & Chair Set"),
 "edu-ca-12": ("Қос парта (эргономикалық)", "Ikkilik parta (ergonomik)", "Double Student Desk (Ergonomic)"),
 # ── medical ──
 "med-ca-01": ("Бөлме тумбасы (ABS пластик)", "Krovat tumbasi (ABS plastik)", "ABS Bedside Cabinet"),
 "med-ca-02": ("Зертхана үстелі (раковина мен тумбамен)", "Laboratoriya stoli (rakovina va shkaflar bilan)", "Lab Bench with Sink & Drawers"),
 "med-ca-03": ("Қалпына келтіру кушеті (биіктігі реттелетін)", "Tiklanish kushetkasi (sozlanadigan)", "Adjustable Recovery Couch"),
 "med-ca-04": ("Гидравликалық емдеу үстелі", "Gidravlik davolash stoli", "Hydraulic Treatment Table"),
 "med-ca-05": ("Гинекологиялық тексеру үстелі", "Ginekologik tekshiruv stoli", "Gynecological Examination Table"),
 "med-ca-06": ("Инъекция/инфузия орындығы (тамшы штангасымен)", "In'ektsiya/infuziya stuli (sistemaga mo'ljallangan)", "Recovery Injection Chair with IV Pole"),
 "med-ca-07": ("Күту орындығы (3 орынды)", "Kutish o'rindig'i (3 o'rinli)", "3-Seater Waiting Room Bench"),
 "med-ca-08": ("Медбике станциясы (арка пішінді, жобалық)", "Hamshira stansiyasi (arka shaklida)", "Custom Nurse Station Counter"),
 "med-ca-09": ("Аурухана шкафы (3 есік, болаттан)", "Shifoxona shkafi (3 eshik, po'latdan)", "Hospital 3-Door Steel Wardrobe"),
 "med-ca-10": ("Дәрі шкафы (болаттан, шыны есікті)", "Dori shkafi (po'latdan, shisha eshikli)", "Stainless Steel Medication Cabinet"),
 "med-ca-11": ("Дәрігер кабинеті үстелі (раковинамен)", "Shifokor kabineti shkafi (rakovina bilan)", "Exam Room Cabinet with Sink"),
 "med-ca-12": ("Медициналық процедуралық арба (орталық құлыпты)", "Tibbiy protsedura aravachasi (markaziy qulfli)", "Medical Treatment Cart"),
 # ── S2 新增（2026-10-02，60→75）──
 "hotel-ca-13": ("Қонақүй қабылдау күзеті (3600 мм, тастан жасалған үстел)", "Mehmonxona qabul shcheti (3600 mm, tosh ustali)", "Hotel Reception Desk 3600 mm (Sintered Stone Top)"),
 "hotel-ca-14": ("Мини-бар шкафы (жаңғақ, мәрмәр үстелі, тоңазытқышпен)", "Mini-bar shkafi (yong'oq, marmar ustali, muzlatkich bilan)", "Hotel Mini-bar Cabinet (Walnut & Marble, Fridge)"),
 "hotel-ca-15": ("Қонақүй лоббиіне арналған доғал демалыс орындығы (бұғалы/былғары)", "Mehmonxona lobbiysiga mo'ljallangan egilgan dam olish stuli (baxmal/teri)", "Curved Velvet & Leather Lounge Chair for Hotel Lobbies"),
 "home-ca-13": ("Ағаш есіктері бар киім шкафы (жарық диодты жарықпен)", "Yog'och eshikli kiyim shkafi (LED yorug'lik bilan)", "Solid Wood Wardrobe with LED Lighting"),
 "home-ca-14": ("Доғал модульді диван (ағаш бүйір тумбаларымен)", "Egilgan modul divan (yog'och yon shkaflari bilan)", "Curved Modular Sectional Sofa"),
 "home-ca-15": ("Телевизор қабырғасы (мәрмәр үстелді консольмен)", "TV devori (marmar ustali konsol bilan)", "Floating TV Media Wall with Marble Console"),
 "office-ca-13": ("Екі орындықты жұмыс станциясы (мата бөлгішпен, арқа-арқаға)", "Ikki o'rinli ish stansiyasi (matoli to'siq bilan, orqa-orqaga)", "Two-Person Back-to-Back Workstation"),
 "office-ca-14": ("Кеңес орындығы (жұмсақ, алюминий аяқты)", "Kengash stuli (yumshoq, alyuminiy oyoqli)", "High-Back Conference Chair (Aluminum Base)"),
 "office-ca-15": ("Күту аймағына арналған былғары диван", "Kutish zonasi uchun teri divan", "Leather Office Sofa for Reception Lounge"),
 "edu-ca-13": ("Дәрісхана орындықтары (жазу партасымен, баспалдақты)", "Ma'ruza zali stullari (yozuv partasi bilan, pog'onali)", "Tiered Lecture Hall Seating with Writing Tablet"),
 "edu-ca-14": ("Жатақхана киім шкафы (құлыпты, E1)", "Yotoqxona kiyim shkafi (qulflangan, E1)", "Dormitory Wardrobe Cabinet with Lock (E1)"),
 "edu-ca-15": ("Кітапхана оқу үстелі (8 орын, емен)", "Kutubxona o'quv stoli (8 o'rin, eman)", "Library Group Reading Table (8 Seats)"),
 "med-ca-13": ("Душ орындығы (алюминий, арқалық пен тұтқалы)", "Dush stuli (alyuminiy, orqaliq va tutqichli)", "Aluminum Shower Chair with Backrest"),
 "med-ca-14": ("Тасымалдау сөресі (дөңгелекті, жедел жәрдемге)", "Tashish karavoti (g'ildirakli, tez yordam uchun)", "Hospital Stretcher Trolley Bed (Wheeled)"),
 "med-ca-15": ("Төсек үсті үстелі (биіктігі реттелетін, дөңгелекті)", "Krovat usti stoli (balandligi sozlanadigan, g'ildirakli)", "Height-Adjustable Overbed Table"),
}

# 材质关键词表（EN→kk/uz），命中则生成材质句
MATS = [
 ("stainless steel", "тот баспайтын болаттан жасалған", "zanglamaydigan po'latdan"),
 ("abs", "ABS пластиктен жасалған", "ABS plastikdan"),
 ("teak", "тиек ағашынан жасалған", "tiak yog'ochidan"),
 ("walnut", "жаңғақ ағашынан жасалған", "yong'oq yog'ochidan"),
 ("marble", "мәрмәрмен әрленген", "marmar bilan"),
 ("leather", "табиғи терімен әрленген", "tabiiy teri bilan"),
 ("solid wood", "тұтас ағаштан жасалған", "massiv yog'ochdan"),
 ("wood", "ағаштан жасалған", "yog'ochdan"),
 ("steel", "болаттан жасалған", "po'latdan"),
 ("metal", "металдан жасалған", "metaldan"),
 ("fabric", "матаға оралған", "mato bilan"),
]

# 类目级应用场景句 + 自定义句轮换（kk/uz）
APP = {
 "hotel": ("Қонақүй мен мейрамхана жобаларына арналған.", "Mehmonxona va restoran loyihalari uchun mo'ljallangan."),
 "home": ("Вилла және тұрғын үй жобаларына арналған.", "Villa va turar-joy loyihalari uchun mo'ljallangan."),
 "office": ("Кеңсе және корпоративтік кеңістіктерге арналған.", "Ofis va korporativ makonlar uchun mo'ljallangan."),
 "education": ("Мектеп және университет нысандарына арналған.", "Maktab va universitet binolari uchun mo'ljallangan."),
 "medical": ("Емдеу мекемелері мен клиникаларға арналған.", "Davolash muassasalari va klinikalar uchun mo'ljallangan."),
}
CUSTOM = [
 (("Сызба немесе 3D модель бойынша тапсырыс беріледі.", "Жоба көлеміне қарай 30-45 күнде өндіріледі."),
  ("Chizma yoki 3D model bo'yicha buyurtma qilinadi.", "Loyiha hajmiga qarab 30-45 kunda ishlab chiqariladi.")),
 (("Жоба көлеміне қарай 30-45 күнде өндіріледі.", "Жөнелту алдында толық фотоесеп дайындалады."),
  ("Loyiha hajmiga qarab 30-45 kunda ishlab chiqariladi.", "Yuborishdan oldin to'liq foto-hisobot tayyorlanadi.")),
 (("Толық фотоесеп пен материалдық сертификатпен жеткізіледі.", "EAC TR CU 025/2011 талаптарына сәйкес өндіріледі."),
  ("To'liq foto-hisobot va material sertifikatlari bilan yetkaziladi.", "EAC TR CU 025/2011 talablariga muvofiq ishlab chiqariladi.")),
]

def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)

def mat_clause(mat: str):
    if not mat:
        return None
    low = mat.lower()
    for key, kk, uz in MATS:
        if key in low:
            return (kk, uz)
    return None

def main():
    products = []
    rot_i = 0
    for fname in ["hotel_home_products.json", "office_edu_products.json", "medical_products.json",
                  "more_hotel.json", "more_home.json", "more_home_fix.json", "more_office.json", "more_edu.json", "more_med.json"]:
        data = json.load(open(os.path.join(SCRAPE, fname), encoding="utf-8"))
        for cat, items in data.items():
            if cat.startswith("_"):
                continue
            for it in items:
                pid = it["id"]
                if pid not in NAMES:
                    raise SystemExit(f"missing name for {pid}")
                kk_n, uz_n, en_n = NAMES[pid]
                specs = it.get("specs") or {}
                mat_raw = (specs.get("material") or "").strip()
                dims = (specs.get("dimensions") or "").strip()
                finish = (specs.get("finish") or "").strip()
                sp = it.get("selling_points") or []

                mc = mat_clause(mat_raw)
                a_kk, a_uz = APP[cat]
                c_kk, c_uz = CUSTOM[rot_i % len(CUSTOM)]
                rot_i += 1
                kk_cust = " ".join(c_kk)
                uz_cust = " ".join(c_uz)

                kk_d = f"{kk_n} — {a_kk} "
                if mc: kk_d += f"Үлгі {mc[0]}. "
                if dims: kk_d += f"Өлшемі: {dims}. "
                kk_d += kk_cust
                uz_d = f"{uz_n} — {a_uz} "
                if mc: uz_d += f"Namuna {mc[1]}. "
                if dims: uz_d += f"O'lchamlari: {dims}. "
                uz_d += uz_cust
                en_feat = sp[0] if sp else f"{en_n} manufactured in our own 300,000 m² factory."
                en_d = f"{en_n} — {en_feat} "
                if mat_raw: en_d += f"Material: {mat_raw}. "
                if dims: en_d += f"Dimensions: {dims}. "
                en_d += "Custom sizes available; production 30-45 days with photo report before shipment."

                img_dir = os.path.join(REPO, "public", "images", "products", pid)
                gallery = []
                for suf in ("main", "scene", "g3", "g4"):
                    for ext in (".webp", ".jpg", ".png"):
                        p = os.path.join(img_dir, pid + "-" + suf + ext)
                        if os.path.exists(p) and os.path.getsize(p) > 12000:
                            gallery.append("/images/products/" + pid + "/" + pid + "-" + suf + ext)
                            break
                if not gallery:
                    raise SystemExit(f"no image for {pid}")
                img = gallery[0]

                products.append({
                    "id": pid, "cat": CAT_MAP[cat], "name": {"kk": kk_n, "uz": uz_n, "en": en_n},
                    "desc": {"kk": kk_d.strip(), "uz": uz_d.strip(), "en": en_d.strip()},
                    "material": mat_raw, "dimensions": dims, "finish": finish,
                    "features": sp, "image": img, "gallery": gallery,
                })

    lines = ["// AUTO-GENERATED by _scrape/gen_products_ts.py — 75 products × kk/uz/en. Do not edit by hand.",
             "import type { Lang } from \"../i18n/ui\";",
             "export type Localized3 = Record<Lang, string>;",
             "export type Product = { id: string; cat: string; name: Localized3; desc: Localized3;",
             "  material: string; dimensions: string; finish: string; features: string[];",
             "  image: string; gallery: string[]; };",
             "export const products: Product[] = ["]
    for p in products:
        lines.append("  {")
        lines.append(f"    id: {ts_str(p['id'])}, cat: {ts_str(p['cat'])},")
        lines.append(f"    name: {{ kk: {ts_str(p['name']['kk'])}, uz: {ts_str(p['name']['uz'])}, en: {ts_str(p['name']['en'])} }},")
        lines.append(f"    desc: {{ kk: {ts_str(p['desc']['kk'])}, uz: {ts_str(p['desc']['uz'])}, en: {ts_str(p['desc']['en'])} }},")
        lines.append(f"    material: {ts_str(p['material'])}, dimensions: {ts_str(p['dimensions'])}, finish: {ts_str(p['finish'])},")
        lines.append(f"    features: {json.dumps(p['features'], ensure_ascii=False)},")
        lines.append(f"    image: {ts_str(p['image'])},")
        lines.append(f"    gallery: {json.dumps(p['gallery'], ensure_ascii=False)},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("export function productsOf(cat: string): Product[] {")
    lines.append("  return products.filter((p) => p.cat === cat);")
    lines.append("}")
    lines.append("")
    lines.append("export function productById(id: string): Product | undefined {")
    lines.append("  return products.find((p) => p.id === id);")
    lines.append("}")
    lines.append("")
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))
    print(f"written {OUT}: {len(products)} products")

if __name__ == "__main__":
    main()

# -*- coding: utf-8 -*-
"""给 blog JSON 补 image/imageAlt 字段（封面图三语 Alt）"""
import json, os, glob

BLOG = os.path.join(os.path.dirname(__file__), "blog")

ALTS = {
    "uz-hotels-2026": {
        "kk": "Ішкі нарықтың өсуіне арналған Hymebel жабдықтаған қонақүй банкет залы",
        "uz": "Hymebel jihozlagan mehmonxona banket zali — O'zbekiston mehmonxona bozorining o'sishi",
        "en": "Hotel banquet hall furnished by Hymebel — Uzbekistan hotel market growth",
    },
    "guestroom-checklist": {
        "kk": "Панорамалық терезесі бар бес жұлдызды қонақүй бөлмесінің интерьері",
        "uz": "Panoramik oynali besh yulduzli mehmonxona xonasi interyeri",
        "en": "Five-star hotel guestroom interior with panoramic window",
    },
    "ffe-timeline": {
        "kk": "FF&E жобасы бойынша жиһаздалған қонақүй қабылдау залы",
        "uz": "FF&E loyihasi bo'yicha jihozlangan mehmonxona lobbi zonasi",
        "en": "Hotel lobby lounge zone furnished under an FF&E project",
    },
    "eac-guide": {
        "kk": "EAC сапа бақылауы бойынша жиһаз өндірісіндегі жұмысшы",
        "uz": "EAC sifat nazorati bo'yicha mebel ishlab chiqarishdagi ishchi",
        "en": "Worker performing furniture quality control for EAC compliance",
    },
    "custom-wardrobes-almaty": {
        "kk": "Киім шкафын қоса алғанда, теңшелетін жиһазы бар жатақ бөлме",
        "uz": "Shkaf bilan birga buyurtma asosida tayyorlangan yotoqxona interyeri",
        "en": "Bedroom interior with built-in custom wardrobe furniture",
    },
    "marble-dining-tables-tashkent": {
        "kk": "Табиғи мәрмәр үстелі бар ас ішу бөлмесі",
        "uz": "Tabiiy marmar stolli ovqat xonasi",
        "en": "Dining room with natural marble dining table",
    },
    "logistics-tashkent-9days": {
        "kk": "Орталық Азияға экспортқа арналған орау цехы",
        "uz": "Markaziy Osiyoga eksport uchun qadoq sexi",
        "en": "Packing workshop preparing furniture for Central Asia export",
    },
}

n = 0
for f in sorted(glob.glob(os.path.join(BLOG, "*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    pid = d["id"]
    if pid not in ALTS:
        print("SKIP (no alt):", pid); continue
    d["image"] = f"/images/blog/{pid}.webp"
    d["imageAlt"] = ALTS[pid]
    with open(f, "w", encoding="utf-8") as fh:
        json.dump(d, fh, ensure_ascii=False, indent=1)
    n += 1
print("patched", n, "posts")

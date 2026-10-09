# -*- coding: utf-8 -*-
"""
fix_ui_claims2.py — 非 blog 层 SSOT 回改 第二批（补齐 audit 剩余命中）

覆盖：
  src/data/categories.ts          hotel 品类 intro（30-45 / 9-10）
  src/data/products.ts            features 内 "cuts lead times up to 25%"
  src/pages/[lang]/products/[id].astro  产品页模板（answer 直答块 / points / pFaqs / 对比表）

用法：python _scrape/fix_ui_claims2.py [--dry]
"""
import io, os, sys, shutil, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY = "--dry" in sys.argv
STAMP = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
BACKUP = os.path.join(os.path.dirname(ROOT), "_backup_hymebel_ssot_20261009", STAMP)

EDITS = {
    "src/data/categories.ts": [
        ('      kk: "Нөмірлер, лобби, мейрамхана және конференц-залдарға арналған жиһаз. Жоба бойынша өндіріс, 30-45 күн, теміржолмен Орталық Азияға 9-10 күн.",\n'
         '      uz: "Xonalar, lobbi, restoran va konferents-zallar uchun mebel. Loyiha bo\'yicha ishlab chiqarish: 30-45 kun, temiryo\'l orqali Markaziy Osiyoga 9-10 kun.",\n'
         '      en: "Furniture for guest rooms, lobbies, restaurants and conference halls. Built to your drawings in 30-45 days, then 9-10 days by rail to Central Asia.",',
         '      kk: "Нөмірлер, лобби, мейрамхана және конференц-залдарға арналған жиһаз. Жоба сызбасы бойынша өндіріс; мерзім мен жеткізу жолы тапсырыс расталғанда келісіледі.",\n'
         '      uz: "Xonalar, lobbi, restoran va konferents-zallar uchun mebel. Loyiha chizmasi bo\'yicha ishlab chiqarish; muddat va yetkazib berish yo\'li buyurtma tasdiqlanganda kelishiladi.",\n'
         '      en: "Furniture for guest rooms, lobbies, restaurants and conference halls. Built to your drawings; the schedule and shipping route are agreed when the order is confirmed.",'),
    ],

    "src/data/products.ts": [
        ('"Centralized sourcing cuts lead times up to 25%"',
         '"Centralized sourcing from a single point of responsibility"'),
    ],

    "src/pages/[lang]/products/[id].astro": [

        # ── answer 直答块 ──
        ('Тапсырыс бойынша өндіріледі: өндіріс мерзімі 30-45 күн, ең аз тапсырыс көлемі 20-30 дана (жоба түріне қарай).',
         'Тапсырыс бойынша өндіріледі: өндіріс мерзімі мен көлемі жоба бойынша келісіледі.'),
        ('Buyurtma asosida ishlab chiqariladi: ishlab chiqarish muddati 30-45 kun, minimal buyurtma 20-30 dona (loyiha turiga qarab).',
         'Buyurtma asosida ishlab chiqariladi: ishlab chiqarish muddati va hajmi loyiha bo\'yicha kelishiladi.'),
        ('It is made to order: production takes 30-45 days and minimum order is typically 20-30 units depending on project scope.',
         'It is made to order: the production schedule and order volume are agreed per project.'),

        # ── points 要点 ──
        ('    "EAC TR CU 025/2011 сәйкестігі және 8 халықаралық сертификат",',
         '    "EAC TR CU 025/2011 сәйкестігі және толық құжаттама",'),
        ('    "Өндіріс 30-45 күн, Орталық Азияға теміржолмен 9-10 күн",',
         '    "Өндіріс мерзімі мен жеткізу жолы тапсырыс расталғанда келісіледі",'),
        ('    "EAC TR CU 025/2011 muvofiqligi va 8 xalqaro sertifikat",',
         '    "EAC TR CU 025/2011 muvofiqligi va to\'liq hujjatlar",'),
        ('    "Ishlab chiqarish 30-45 kun, Markaziy Osiyoga temir yo\'l orqali 9-10 kun",',
         '    "Ishlab chiqarish muddati va yetkazib berish yo\'li buyurtma tasdiqlanganda kelishiladi",'),
        ('    "EAC TR CU 025/2011 compliant, backed by 8 international certifications",',
         '    "EAC TR CU 025/2011 compliant, with full documentation",'),
        ('    "30-45 day production; 9-10 days by rail to Central Asia",',
         '    "Production and shipping schedules agreed when the order is confirmed",'),

        # ── pFaqs 产品 FAQ ──
        ('{ q: `Ең аз тапсырыс көлемі қанша?`, a: `Жоба түріне қарай 20-30 данадан басталады; көтерме жобалар үшін көлемдік жеңілдік қарастырылады.` },',
         '{ q: `Ең аз көлем қалай анықталады?`, a: `Жоба түрі мен көлеміне қарай анықталады; нақты шарттар тапсырыс кезінде келісіледі.` },'),
        ('{ q: `Жеткізу мерзімі қанша?`, a: `Өндіріс 30-45 күн, теміржолмен Орталық Азияға 9-10 күн (TIR көлігімен 5-7 күн). Құжаттама жүкпен бірге жүреді.` },',
         '{ q: `Жеткізу мерзімі қалай келісіледі?`, a: `Өндіріс мерзімі мен жеткізу жолы тапсырыс расталғанда келісіледі. Құжаттама жүкпен бірге жүреді.` },'),
        ('{ q: `Minimal buyurtma hajmi qancha?`, a: `Loyiha turiga qarab 20-30 donadan boshlanadi; ulgurji loyihalarda hajmli chegirma qo\'llaniladi.` },',
         '{ q: `Minimal hajm qanday belgilanadi?`, a: `Loyiha turi va hajmiga qarab belgilanadi; aniq shartlar buyurtma paytida kelishiladi.` },'),
        ('{ q: `Yetkazib berish muddati qancha?`, a: `Ishlab chiqarish 30-45 kun, Markaziy Osiyoga temir yo\'l orqali 9-10 kun (TIR bilan 5-7 kun). Hujjatlar yuk bilan birga keladi.` },',
         '{ q: `Yetkazib berish muddati qanday kelishiladi?`, a: `Ishlab chiqarish muddati va yetkazib berish yo\'li buyurtma tasdiqlanganda kelishiladi. Hujjatlar yuk bilan birga keladi.` },'),
        ('{ q: `What is the minimum order quantity?`, a: `Typically 20-30 units depending on project type, with volume pricing applied on wholesale projects.` },',
         '{ q: `How is the minimum volume determined?`, a: `It depends on the project type and scope; the specific terms are agreed at the time of order.` },'),
        ('{ q: `What are your lead times?`, a: `30-45 days production, then 9-10 days by rail to Central Asia (5-7 days by TIR truck). Documentation travels with the shipment.` },',
         '{ q: `How are production and shipping schedules set?`, a: `Both are agreed when the order is confirmed. Documentation travels with the shipment.` },'),

        # ── 同品类对比表：交期行 + 最小起订行 ──
        ('    label: lang === "kk" ? "Өндіріс мерзімі" : lang === "uz" ? "Ishlab chiqarish muddati" : "Production lead time",\n'
         '    values: cmp.map(() => (lang === "kk" ? "30-45 күн" : lang === "uz" ? "30-45 kun" : "30-45 days")),',
         '    label: lang === "kk" ? "Өндіріс" : lang === "uz" ? "Ishlab chiqarish" : "Production",\n'
         '    values: cmp.map(() => (lang === "kk" ? "Тапсырыс бойынша" : lang === "uz" ? "Buyurtma asosida" : "Made to order")),'),
        ('    label: lang === "kk" ? "Ең аз тапсырыс" : lang === "uz" ? "Minimal buyurtma" : "Minimum order",\n'
         '    values: cmp.map(() => (lang === "kk" ? "20-30 дана" : lang === "uz" ? "20-30 dona" : "20-30 units")),',
         '    label: lang === "kk" ? "Ең аз көлем" : lang === "uz" ? "Minimal hajm" : "Minimum volume",\n'
         '    values: cmp.map(() => (lang === "kk" ? "Жоба бойынша" : lang === "uz" ? "Loyiha bo\'yicha" : "Project-based")),'),
    ],
}


def read(p):
    return io.open(p, encoding="utf-8", newline="").read()


def write(p, s):
    io.open(p, "w", encoding="utf-8", newline="").write(s)


ok_total = miss_total = 0
for rel, pairs in EDITS.items():
    path = os.path.join(ROOT, rel.replace("/", os.sep))
    src = read(path)
    orig = src
    ok = miss = 0
    for old, new in pairs:
        n = src.count(old)
        if n == 0:
            miss += 1
            print(f"  SKIP {rel} :: {old[:90]!r}")
            continue
        src = src.replace(old, new)
        ok += n
    if src != orig and not DRY:
        bp = os.path.join(BACKUP, rel.replace("/", os.sep))
        os.makedirs(os.path.dirname(bp), exist_ok=True)
        shutil.copy2(path, bp)
        write(path, src)
    print(f"{rel}: {ok} replaced, {miss} not-found")
    ok_total += ok
    miss_total += miss

print(f"\nTOTAL replaced={ok_total} not_found={miss_total} dry={DRY}")
if not DRY:
    print(f"backup -> {BACKUP}")

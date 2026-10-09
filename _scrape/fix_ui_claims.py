# -*- coding: utf-8 -*-
"""
fix_ui_claims.py — 非 blog 层 SSOT 口径收紧（2026-10-09 授权）

范围（Codex market-native 层，kk/uz/en 三语）：
  src/i18n/ui.ts
  src/pages/[lang]/index.astro
  src/pages/[lang]/cases.astro
  src/pages/[lang]/[slug].astro
  src/data/categories.ts
  src/data/products.ts
  src/data/cases.ts（仅代码注释）

清除：固定交期(30-45/9-10/5-7)、产能规模(300 000 m²/1000+ 工人/1000+ 项目/50+ 国)、
      认证数量(8 项)、商业承诺(48 小时/最低 30-50 间)
保留：EAC / TR CU 025/2011 法规名、Hilton Tashkent 白名单案例

统计卡片改为站内可自证的三个事实：1996（成立年）· 5（产品方向）· 4（工作阶段）

用法：python _scrape/fix_ui_claims.py [--dry]
"""
import io, os, sys, shutil, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY = "--dry" in sys.argv
STAMP = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
BACKUP = os.path.join(os.path.dirname(ROOT), "_backup_hymebel_ssot_20261009", STAMP)

STAT3 = {
    8: (  # cases.astro
        '        <div class="stat"><div class="stat__value">1000+</div><div class="stat__label">{t("stat.projects")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">300 000 m²</div><div class="stat__label">{t("stat.factory")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">50+</div><div class="stat__label">{t("stat.countries")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">30-45</div><div class="stat__label">{t("stat.leadtime")}</div></div>',
        '        <div class="stat"><div class="stat__value">1996</div><div class="stat__label">{t("stat.since")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">5</div><div class="stat__label">{t("stat.lines")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">4</div><div class="stat__label">{t("stat.steps")}</div></div>',
    ),
    12: (  # [slug].astro
        '            <div class="stat"><div class="stat__value">1996</div><div class="stat__label">{t("stat.since")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">300 000 m²</div><div class="stat__label">{t("stat.factory")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">1000+</div><div class="stat__label">{t("stat.workers")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">1000+</div><div class="stat__label">{t("stat.projects")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">50+</div><div class="stat__label">{t("stat.countries")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">30-45</div><div class="stat__label">{t("stat.leadtime")}</div></div>',
        '            <div class="stat"><div class="stat__value">1996</div><div class="stat__label">{t("stat.since")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">5</div><div class="stat__label">{t("stat.lines")}</div></div>\n'
        '            <div class="stat"><div class="stat__value">4</div><div class="stat__label">{t("stat.steps")}</div></div>',
    ),
    "index": (
        '        <div class="stat"><div class="stat__value">{company.projects}</div><div class="stat__label">{t("stat.projects")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">{company.factory} m²</div><div class="stat__label">{t("stat.factory")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">{company.countries}</div><div class="stat__label">{t("stat.countries")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">{company.certs}</div><div class="stat__label">{t("stat.certs")}</div></div>',
        '        <div class="stat"><div class="stat__value">{company.founded}</div><div class="stat__label">{t("stat.since")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">5</div><div class="stat__label">{t("stat.lines")}</div></div>\n'
        '        <div class="stat"><div class="stat__value">4</div><div class="stat__label">{t("stat.steps")}</div></div>',
    ),
}

EDITS = {
    "src/i18n/ui.ts": [

# ══════════════ kk ══════════════
('    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды. Төменде — Орталық Азиядағы жобалардың таңдамалысы: қонақүйлер, кеңселер, білім беру мекемелері және тұрғын үйлер.",',
 '    "Халықаралық нарықтардағы жоба тәжірибемізге сүйенеміз. Төменде — Орталық Азиядағы жобалардың таңдамалысы: қонақүйлер, кеңселер, білім беру мекемелері және тұрғын үйлер.",'),

('  "stat.leadtime": "күн өндіріс (жөнелтуге дейін)",\n', ''),

('    "1996 жылдан бері · 1000+ жоба · 300 000 м² өндіріс алаңы · 50+ ел · 8 халықаралық сертификат. Қонақүй, кеңсе және вилла жобаларын жобалаудан монтажға дейін толық қамтимыз.",',
 '    "1996 жылдан бері · қонақүй, кеңсе, вилла, медициналық және білім беру жобалары. Жобалаудан өндіруге, жеткізуге және монтаждауға дейін толық цикл — өз өндірісімізде.",'),

('  "stat.projects": "жоба",\n'
 '  "stat.factory": "м² өндіріс алаңы",\n'
 '  "stat.since": "жылдан бері нарықта",\n'
 '  "stat.workers": "жұмысшы өндірісте",\n'
 '  "stat.countries": "ел",\n'
 '  "stat.certs": "халықаралық сертификат",',
 '  "stat.since": "құрылған жыл",\n'
 '  "stat.lines": "өнім бағыты",\n'
 '  "stat.steps": "жұмыс кезеңі",'),

('  "why.1": "300 000 м² өз өндіріс алаңы — делдалсыз баға және тұрақты сапа",',
 '  "why.1": "Өз өндіріс алаңымыз — делдалсыз баға және тұрақты сапа",'),
('  "why.2": "EAC TR CU 025/2011 талаптарына сәйкестік және 8 халықаралық сертификат",',
 '  "why.2": "EAC TR CU 025/2011 талаптарына сәйкестік; құжаттама әр жобамен беріледі",'),
('  "why.3": "Өндіріс 30-45 күн, теміржолмен Орталық Азияға 9-10 күн",',
 '  "why.3": "Өндіріс мерзімі мен жеткізу жолы тапсырыс расталғанда келісіледі",'),

('    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды — оның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы. Әр жоба үшін фотоесеп және материалдық сертификаттар беріледі.",',
 '    "Халықаралық жоба тәжірибеміз бар — оның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы. Әр жоба үшін фотоесеп және материалдық сертификаттар беріледі.",'),

('    "Өндіріс 30-45 күн, теміржолмен Орталық Азияға 9-10 күн (TIR көлігімен 5-7 күн).",',
 '    "Өндіріс мерзімі тапсырыс көлемі мен жоба кестесіне қарай анықталады; жеткізу жолы мен уақыты тапсырыс расталғанда келісіледі.",'),
('    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес, 8 халықаралық сертификатымыз бар. Құжаттама жобамен бірге беріледі.",',
 '    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес. Құжаттама жобамен бірге беріледі.",'),
('    "Жоба түріне байланысты: қонақүй жобалары әдетте 30-50 бөлме жиһазынан басталады, вилла жобалары бөлме бойынша есептеледі.",',
 '    "Ең аз көлем жоба түрі мен кестесіне қарай анықталады; нақты шарттар тапсырыс кезінде келісіледі.",'),
('  "cta.body": "Жоспар, өлшем немесе сурет жіберіңіз — 48 сағат ішінде коммерциялық ұсыныс дайындаймыз.",',
 '  "cta.body": "Жоспар, өлшем немесе сурет жіберіңіз — коммерциялық ұсыныс дайындаймыз.",'),

('    "Қонақүй, кеңсе, вилла, медициналық және білім беру жобаларына арналған жиһаз: 300 000 м² өндіріс, EAC сәйкестігі, 30-45 күн өндіріс. Тегін смета алыңыз.",',
 '    "Қонақүй, кеңсе, вилла, медициналық және білім беру жобаларына арналған жиһаз: өз өндірісіміз, EAC TR CU 025/2011 сәйкестігі. Тегін смета алыңыз.",'),

('    "Өзіміздің 300 000 м² өндіріс алаңы және 1000-нан астам жұмысшы. Барлық өнім өз зауытымызда шығарылады — делдалсыз баға және тұрақты сапа.",',
 '    "Өзіміздің өндіріс алаңымыз бар. Барлық өнім өз зауытымызда шығарылады — делдалсыз баға және тұрақты сапа.",'),
('    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес, қосымша 8 халықаралық сертификатымыз бар. Толық құжаттама әр жобамен бірге беріледі.",',
 '    "Иә — өндіріс EAC TR CU 025/2011 талаптарына сәйкес. Толық құжаттама әр жобамен бірге беріледі.",'),
('    "Тапсырыс көлеміне байланысты өндіріс әдетте 30-45 күн. Теміржолмен Орталық Азияға 9-10 күн, TIR көлігімен 5-7 күн жетеді.",',
 '    "Өндіріс мерзімі тапсырыс көлеміне қарай анықталады. Жеткізу жолы мен уақыты тапсырыс расталғанда келісіледі.",'),
('    "Жоба түріне байланысты: қонақүй жобалары әдетте 30-50 нөмірлік жиһаздан басталады, вилла жобалары бөлме бойынша есептеледі.",',
 '    "Ең аз көлем жоба түрі мен кестесіне қарай анықталады; нақты шарттар тапсырыс кезінде келісіледі.",'),
('    "WhatsApp, Telegram немесе сайттағы форма арқылы жоспар, өлшем немесе сызба жіберіңіз — 48 сағат ішінде коммерциялық ұсыныс дайындаймыз.",',
 '    "WhatsApp, Telegram немесе сайттағы форма арқылы жоспар, өлшем немесе сызба жіберіңіз — коммерциялық ұсыныс дайындаймыз.",'),

('    "Бір алаңда толық цикл: 300 000 м² зауыт, 1000-нан астам жұмысшы, автоматтандырылған кесу және CNC желілері, плита, металл және тігіні цехтары, сапа бақылауы және экспорттық орау. Мұндай масштаб жобалық тапсырыстарды 30-45 күнде орындауға және әр партияның сапасын бірдей ұстауға мүмкіндік береді.",',
 '    "Бір алаңда толық цикл: өз зауытымыз, автоматтандырылған кесу және CNC желілері, плита, металл және тігіні цехтары, сапа бақылауы және экспорттық орау. Бір алаңдағы толық цикл жобалық тапсырыстарды бір кестеде орындауға және әр партияның сапасын бірдей ұстауға мүмкіндік береді.",'),
('    "8 халықаралық сертификат, EAC TR CU 025/2011 сәйкестігі. Әр жобалық жөнелту фотоесеппен және материалдық сертификаттармен толықтырылады.",',
 '    "EAC TR CU 025/2011 сәйкестігі. Әр жобалық жөнелту фотоесеппен және материалдық сертификаттармен толықтырылады.",'),
('    "50-ден астам елде 1000-нан астам жоба жүзеге асырылды, соның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы.",',
 '    "Халықаралық жоба тәжірибеміз бар, соның ішінде Hilton Tashkent (Өзбекстан) қонақүй жобасы.",'),

# ══════════════ uz ══════════════
('    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi. Quyida Markaziy Osiyodagi loyihalarning tanlamasi: mehmonxonalar, ofislar, ta\'lim muassasalari va turar-joy obyektlari.",',
 '    "Xalqaro bozorlardagi loyiha tajribamizga tayanamiz. Quyida Markaziy Osiyodagi loyihalarning tanlamasi: mehmonxonalar, ofislar, ta\'lim muassasalari va turar-joy obyektlari.",'),

('  "stat.leadtime": "kun ishlab chiqarish (yuborishgacha)",\n', ''),

('    "1996-yildan beri · 1000+ loyiha · 300 000 m² ishlab chiqarish maydoni · 50+ davlat · 8 xalqaro sertifikat. Mehmonxona, ofis va villa loyihalarini loyihalashdan o\'rnatishgacha to\'liq ta\'minlaymiz.",',
 '    "1996-yildan beri · mehmonxona, ofis, villa, tibbiyot va ta\'lim loyihalari. Loyihalashdan ishlab chiqarish, yetkazib berish va o\'rnatishgacha to\'liq tsikl — o\'z ishlab chiqarishimizda.",'),

('  "stat.projects": "loyiha",\n'
 '  "stat.factory": "m² ishlab chiqarish maydoni",\n'
 '  "stat.since": "yildan beri bozorda",\n'
 '  "stat.workers": "ishchi ishlab chiqarishda",\n'
 '  "stat.countries": "davlat",\n'
 '  "stat.certs": "xalqaro sertifikat",',
 '  "stat.since": "tashkil etilgan yil",\n'
 '  "stat.lines": "mahsulot yo\'nalishi",\n'
 '  "stat.steps": "ish bosqichi",'),

('  "why.1": "300 000 m² o\'z ishlab chiqarish maydonimiz — vositachisiz narx va barqaror sifat",',
 '  "why.1": "O\'z ishlab chiqarish maydonimiz — vositachisiz narx va barqaror sifat",'),
('  "why.2": "EAC TR CU 025/2011 talablariga muvofiqlik va 8 xalqaro sertifikat",',
 '  "why.2": "EAC TR CU 025/2011 talablariga muvofiqlik; hujjatlar har bir loyiha bilan beriladi",'),
('  "why.3": "Ishlab chiqarish 30-45 kun, temiryo\'l orqali Markaziy Osiyoga 9-10 kun",',
 '  "why.3": "Ishlab chiqarish muddati va yetkazib berish yo\'li buyurtma tasdiqlanganda kelishiladi",'),

('    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi — jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi. Har bir loyiha uchun foto-hisobot va material sertifikatlari taqdim etiladi.",',
 '    "Xalqaro loyiha tajribamiz bor — jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi. Har bir loyiha uchun foto-hisobot va material sertifikatlari taqdim etiladi.",'),

('    "Ishlab chiqarish 30-45 kun, temiryo\'l orqali Markaziy Osiyoga 9-10 kun (TIR transportida 5-7 kun).",',
 '    "Ishlab chiqarish muddati buyurtma hajmi va loyiha jadvaliga qarab belgilanadi; yetkazib berish yo\'li va muddati buyurtma tasdiqlanganda kelishiladi.",'),
('    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi, 8 ta xalqaro sertifikatimiz bor. Hujjatlar loyiha bilan birga taqdim etiladi.",',
 '    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi. Hujjatlar loyiha bilan birga taqdim etiladi.",'),
('    "Loyiha turiga bog\'liq: mehmonxona loyihalari odatda 30-50 xona mebelidan boshlanadi, villa loyihalari xona bo\'yicha hisoblanadi.",',
 '    "Eng kam hajm loyiha turi va jadvaliga qarab belgilanadi; aniq shartlar buyurtma paytida kelishiladi.",'),
('  "cta.body": "Reja, o\'lchov yoki rasm yuboring — 48 soat ichida tijorat taklifini tayyorlaymiz.",',
 '  "cta.body": "Reja, o\'lchov yoki rasm yuboring — tijorat taklifini tayyorlaymiz.",'),

('    "Mehmonxona, ofis, villa, tibbiyot va ta\'lim loyihalari uchun mebel: 300 000 m² ishlab chiqarish, EAC muvofiqligi, 30-45 kun ishlab chiqarish. Bepul hisob-kitob oling.",',
 '    "Mehmonxona, ofis, villa, tibbiyot va ta\'lim loyihalari uchun mebel: o\'z ishlab chiqarishimiz, EAC TR CU 025/2011 muvofiqligi. Bepul hisob-kitob oling.",'),

('    "O\'zimizning 300 000 m² ishlab chiqarish maydoni va 1000 dan ortiq ishchi. Barcha mahsulot o\'z zavodimizda ishlab chiqariladi — vositachisiz narx va barqaror sifat.",',
 '    "O\'zimizning ishlab chiqarish maydonimiz bor. Barcha mahsulot o\'z zavodimizda ishlab chiqariladi — vositachisiz narx va barqaror sifat.",'),
('    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi, qo\'shimcha 8 ta xalqaro sertifikatimiz bor. To\'liq hujjatlar har bir loyiha bilan beriladi.",',
 '    "Ha — ishlab chiqarish EAC TR CU 025/2011 talablariga javob beradi. To\'liq hujjatlar har bir loyiha bilan beriladi.",'),
('    "Buyurtma hajmiga qarab ishlab chiqarish odatda 30-45 kun. Temiryo\'l orqali Markaziy Osiyoga 9-10 kun, TIR transportida 5-7 kun.",',
 '    "Ishlab chiqarish muddati buyurtma hajmiga qarab belgilanadi. Yetkazib berish yo\'li va muddati buyurtma tasdiqlanganda kelishiladi.",'),
('    "Loyiha turiga bog\'liq: mehmonxona loyihalari odatda 30-50 xonalik mebildan boshlanadi, villa loyihalari xona bo\'yicha hisoblanadi.",',
 '    "Eng kam hajm loyiha turi va jadvaliga qarab belgilanadi; aniq shartlar buyurtma paytida kelishiladi.",'),
('    "WhatsApp, Telegram yoki saytdagi forma orqali reja, o\'lchov yoki chizma yuboring — 48 soat ichida tijorat taklifini tayyorlaymiz.",',
 '    "WhatsApp, Telegram yoki saytdagi forma orqali reja, o\'lchov yoki chizma yuboring — tijorat taklifini tayyorlaymiz.",'),

('    "Bitta maydonda to\'liq tsikl: 300 000 m² zavod, 1000 dan ortiq ishchi, avtomatlashtirilgan kesish va CNC liniyalari, plita, metall va tikuv sexlari, sifat nazorati va eksport qadoqlash. Bunday masshtab loyiha buyurtmalarini 30-45 kunda bajarish va har bir partiya sifatini bir xil darajada saqlash imkonini beradi.",',
 '    "Bitta maydonda to\'liq tsikl: o\'z zavodimiz, avtomatlashtirilgan kesish va CNC liniyalari, plita, metall va tikuv sexlari, sifat nazorati va eksport qadoqlash. Bitta maydondagi to\'liq tsikl loyiha buyurtmalarini bir jadvalda bajarish va har bir partiya sifatini bir xil darajada saqlash imkonini beradi.",'),
('    "8 ta xalqaro sertifikat, EAC TR CU 025/2011 muvofiqligi. Har bir loyihaviy yuborish foto-hisobot va material sertifikatlari bilan to\'ldiriladi.",',
 '    "EAC TR CU 025/2011 muvofiqligi. Har bir loyihaviy yuborish foto-hisobot va material sertifikatlari bilan to\'ldiriladi.",'),
('    "50 dan ortiq davlatda 1000 dan ortiq loyiha amalga oshirildi, jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi.",',
 '    "Xalqaro loyiha tajribamiz bor, jumladan Hilton Tashkent (Oʻzbekiston) mehmonxona loyihasi.",'),

# ══════════════ en ══════════════
('    "1,000+ projects delivered across 50+ countries. Below is a selection of Central Asian projects: hotels, offices, educational institutions and residential developments.",',
 '    "We draw on international project experience. Below is a selection of Central Asian projects: hotels, offices, educational institutions and residential developments.",'),

('  "stat.leadtime": "days production (to dispatch)",\n', ''),

('    "Since 1996 · 1,000+ projects · 300,000 m² factory · 50+ countries · 8 international certifications. Full-cycle FF&E — from design and production to delivery and installation.",',
 '    "Since 1996 · furniture for hotel, office, villa, healthcare and education projects. Full-cycle FF&E — from design and production to delivery and installation.",'),

('  "stat.projects": "projects",\n'
 '  "stat.factory": "m² factory area",\n'
 '  "stat.since": "years in the market",\n'
 '  "stat.workers": "workers in production",\n'
 '  "stat.countries": "countries",\n'
 '  "stat.certs": "international certifications",',
 '  "stat.since": "year founded",\n'
 '  "stat.lines": "product lines",\n'
 '  "stat.steps": "project steps",'),

('  "why.1": "300,000 m² own factory — direct pricing and consistent quality",',
 '  "why.1": "Our own factory — direct pricing and consistent quality",'),
('  "why.2": "EAC TR CU 025/2011 compliance and 8 international certifications",',
 '  "why.2": "EAC TR CU 025/2011 compliance; documentation delivered with every project",'),
('  "why.3": "Production in 30-45 days, plus 9-10 days by rail to Central Asia",',
 '  "why.3": "Production and transit schedules are agreed when the order is confirmed",'),

('    "1,000+ projects delivered across 50+ countries, including the Hilton Tashkent hotel project in Uzbekistan. Every project comes with a photo report and material certificates.",',
 '    "We bring international project experience, including the Hilton Tashkent hotel project in Uzbekistan. Every project comes with a photo report and material certificates.",'),

('  "faq.2.q": "What are your production and delivery lead times?",',
 '  "faq.2.q": "How are production and delivery schedules agreed?",'),
('    "Production takes 30-45 days, plus 9-10 days by rail to Central Asia (5-7 days by TIR truck).",',
 '    "The production schedule depends on order volume and project timeline; the shipping route and transit time are agreed when the order is confirmed.",'),
('    "Yes — our production meets EAC TR CU 025/2011 and we hold 8 international certifications. Documentation is delivered with the project.",',
 '    "Yes — our production meets EAC TR CU 025/2011. Documentation is delivered with the project.",'),
('    "It depends on the project type: hotel projects usually start from furniture for 30-50 rooms, while villa projects are quoted room by room.",',
 '    "The minimum volume depends on the project type and timeline; the specific terms are agreed at the time of order.",'),
('    "Send your plans, measurements or drawings — we prepare a commercial proposal within 48 hours.",',
 '    "Send your plans, measurements or drawings — we prepare a commercial proposal.",'),

('    "Furniture for hotel, office, villa, healthcare and education projects: 300,000 m² factory, EAC compliance, 30-45 day production. Request a free quote.",',
 '    "Furniture for hotel, office, villa, healthcare and education projects: our own factory, EAC TR CU 025/2011 compliance. Request a free quote.",'),

('    "Our own 300,000 m² factory with 1,000+ workers. All products are manufactured in-house — direct pricing with no middlemen and consistent quality.",',
 '    "We operate our own factory. All products are manufactured in-house — direct pricing with no middlemen and consistent quality.",'),
('    "Yes — production meets EAC TR CU 025/2011, and we hold 8 additional international certifications. Full documentation is delivered with every project.",',
 '    "Yes — production meets EAC TR CU 025/2011. Full documentation is delivered with every project.",'),
('  "cf.4.q": "What are your production and delivery lead times?",',
 '  "cf.4.q": "How are production and delivery schedules agreed?",'),
('    "Production typically takes 30-45 days depending on order size. Rail delivery to Central Asia takes 9-10 days, TIR trucking 5-7 days.",',
 '    "Production time depends on order size. The shipping route and transit time are agreed when the order is confirmed.",'),
('    "It depends on the project type: hotel projects usually start from furniture for 30-50 rooms, while villa projects are quoted room by room.",',
 '    "The minimum volume depends on the project type and timeline; the specific terms are agreed at the time of order.",'),
('    "Send your plan, measurements or drawings via WhatsApp, Telegram or the website form — we prepare a commercial proposal within 48 hours.",',
 '    "Send your plan, measurements or drawings via WhatsApp, Telegram or the website form — we prepare a commercial proposal.",'),

('    "A full cycle on one site: a 300,000 m² factory with 1,000+ workers, automated cutting and CNC lines, panel, metal and upholstery shops, quality control and export packing. This scale is what allows project orders to be completed in 30-45 days with consistent quality across every batch.",',
 '    "A full cycle on one site: our own factory, automated cutting and CNC lines, panel, metal and upholstery shops, quality control and export packing. Keeping the full cycle on one site lets project orders run to a single schedule with consistent quality across every batch.",'),
('    "8 international certifications and EAC TR CU 025/2011 compliance. Every project shipment is backed by a photo report and material certificates.",',
 '    "EAC TR CU 025/2011 compliance. Every project shipment is backed by a photo report and material certificates.",'),
('    "1,000+ projects delivered across 50+ countries, including the Hilton Tashkent hotel project in Uzbekistan.",',
 '    "We bring international project experience, including the Hilton Tashkent hotel project in Uzbekistan.",'),

# ── company 对象：移除不可核验的数字（消除 SSOT 数字源）──
('  founded: "1996",\n'
 '  projects: "1,000+",\n'
 '  factory: "300,000",\n'
 '  workers: "1,000+",\n'
 '  countries: "50+",\n'
 '  certs: "8",',
 '  founded: "1996",\n'
 '  /** 产品方向数（hotel/office/villa/healthcare/education）与工作阶段数，均可在站内自证 */\n'
 '  productLines: "5",\n'
 '  processSteps: "4",'),
    ],

    "src/pages/[lang]/index.astro": [STAT3["index"]],

    "src/pages/[lang]/cases.astro": [STAT3[8]],

    "src/pages/[lang]/[slug].astro": [
        STAT3[12],
        ('            alt={lang === "kk" ? "Hongye Furniture Group зауытының әуе көрінісі — 300 000 м² өндіріс алаңы" : lang === "uz" ? "Hongye Furniture Group zavodining havo ko\'rinishi — 300 000 m2 ishlab chiqarish maydoni" : "Aerial view of the Hongye Furniture Group factory campus — 300,000 m² of production space"}',
         '            alt={lang === "kk" ? "Hongye Furniture Group зауытының әуе көрінісі" : lang === "uz" ? "Hongye Furniture Group zavodining havo ko\'rinishi" : "Aerial view of the Hongye Furniture Group factory campus"}'),
        ('kk: "Зауыт алаңы — 300 000 м² (әуеден түсірілген)", uz: "Zavod maydoni — 300 000 m2 (havodan suratga olingan)", en: "Factory campus — 300,000 m² (aerial view)"',
         'kk: "Зауыт алаңы (әуеден түсірілген)", uz: "Zavod maydoni (havodan suratga olingan)", en: "Factory campus (aerial view)"'),
    ],

    "src/data/categories.ts": [
        ('      kk: "Жұмыс орындары, жиналыс бөлмелері және қабылдау аймақтары. 300 000 м² өндіріс алаңы көлемді жобаларды қамтиды.",\n'
         '      uz: "Ish joylari, majlislar zallari va qabulxonalar. 300 000 m² ishlab chiqarish maydoni yirik loyihalarni qamrab oladi.",\n'
         '      en: "Workstations, meeting rooms and reception areas. Our 300,000 m² factory covers large-scale rollouts.",',
         '      kk: "Жұмыс орындары, жиналыс бөлмелері және қабылдау аймақтары. Ірі жобаларды кезең-кезеңімен жабдықтау тәжірибеміз бар.",\n'
         '      uz: "Ish joylari, majlislar zallari va qabulxonalar. Yirik loyihalarni bosqichma-bosqich jihozlash tajribamiz bor.",\n'
         '      en: "Workstations, meeting rooms and reception areas. We deliver large-scale rollouts in stages.",'),
        ('    kk: "Hymebel — Hongye Furniture Group (1996 жылдан бері) бренді. 1000+ жоба, 50+ ел, 300 000 м² өндіріс алаңы және 8 халықаралық сертификат.",\n'
         '    uz: "Hymebel — Hongye Furniture Group (1996-yildan beri) brendi. 1000+ loyiha, 50+ davlat, 300 000 m² ishlab chiqarish maydoni va 8 xalqaro sertifikat.",\n'
         '    en: "Hymebel is the Central Asia brand of Hongye Furniture Group (founded 1996): 1,000+ projects, 50+ countries, a 300,000 m² factory and 8 international certifications.",',
         '    kk: "Hymebel — Hongye Furniture Group (1996 жылдан бері) бренді. Қонақүй, кеңсе, вилла, медициналық және білім беру жобаларына арналған жиһазды жобалаудан монтажға дейін толық циклмен жеткіземіз.",\n'
         '    uz: "Hymebel — Hongye Furniture Group (1996-yildan beri) brendi. Mehmonxona, ofis, villa, tibbiyot va ta\'lim loyihalari uchun mebelni loyihalashdan o\'rnatishgacha to\'liq tsiklda yetkazib beramiz.",\n'
         '    en: "Hymebel is the Central Asia brand of Hongye Furniture Group (founded 1996), delivering furniture for hotel, office, villa, healthcare and education projects on a full-cycle basis.",'),
        ('      "8 халықаралық сертификат және EAC TR CU 025/2011 сәйкестігі",',
         '      "EAC TR CU 025/2011 сәйкестігі және толық құжаттама",'),
        ('      "8 xalqaro sertifikat va EAC TR CU 025/2011 muvofiqligi",',
         '      "EAC TR CU 025/2011 muvofiqligi va to\'liq hujjatlar",'),
        ('      "8 international certifications and EAC TR CU 025/2011 compliance",',
         '      "EAC TR CU 025/2011 compliance and full documentation",'),
    ],

    "src/data/products.ts": [
        ('Жоба көлеміне қарай 30-45 күнде өндіріледі.', 'Өндіріс мерзімі жоба көлеміне қарай келісіледі.'),
        ("Loyiha hajmiga qarab 30-45 kunda ishlab chiqariladi.", "Ishlab chiqarish muddati loyiha hajmiga qarab kelishiladi."),
        ('production 30-45 days with photo report before shipment.', 'production schedule agreed per project, with photo report before shipment.'),
    ],

    "src/data/cases.ts": [
        (' * 数据只用 SSOT：1000+ 项目 / 50+ 国 / 交期 30-45 天 / 铁路 9-10 天）',
         ' * 口径收紧：不写产能规模、认证数量、固定交期与商业承诺；案例仅 Hilton Tashkent 可具名）'),
    ],
}


def read(p):
    return io.open(p, encoding="utf-8", newline="").read()


def write(p, s):
    io.open(p, "w", encoding="utf-8", newline="").write(s)


total_ok = total_miss = 0
report = []
for rel, pairs in EDITS.items():
    path = os.path.join(ROOT, rel.replace("/", os.sep))
    if not os.path.exists(path):
        report.append(f"!! MISSING FILE {rel}")
        continue
    src = read(path)
    orig = src
    ok = miss = 0
    for old, new in pairs:
        n = src.count(old)
        if n == 0:
            miss += 1
            report.append(f"  SKIP (not found) {rel}\n    {old[:100]!r}")
            continue
        if n > 1:
            report.append(f"  WARN x{n} {rel} :: {old[:80]!r}")
        src = src.replace(old, new)
        ok += n
    if src != orig:
        if not DRY:
            bp = os.path.join(BACKUP, rel.replace("/", os.sep))
            os.makedirs(os.path.dirname(bp), exist_ok=True)
            shutil.copy2(path, bp)
            write(path, src)
    total_ok += ok
    total_miss += miss
    report.append(f"{rel}: {ok} replaced, {miss} not-found")

print("\n".join(report))
print(f"\nTOTAL replaced={total_ok}  not_found={total_miss}  dry={DRY}")
if not DRY:
    print(f"backup -> {BACKUP}")

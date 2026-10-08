# -*- coding: utf-8 -*-
"""Inventory claim-risk wording in _scrape/blog/*.json (the KK/UZ/EN source of truth).

Read-only. Mirrors the regexes in scripts/audit-claim-risk.mjs so the numbers
match the release gate, then breaks them down per article and per language.
"""
import glob
import json
import os
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding='utf-8')

PATTERNS = [
    ('delivery / logistics', re.compile(r'30\s*[–-]\s*45|9\s*[–-]\s*10\s*(?:days|күн|kun)|5\s*[–-]\s*7\s*(?:days|күн|kun)|lead time|production takes', re.I)),
    ('certification / compliance', re.compile(r'\bEAC\b|certificat|сертификат|sertifikat|compliance', re.I)),
    ('scale / project count', re.compile(r'300[,.\s]?000|1[,.\s]?000\+|50\+\s*(?:countries|ел|davlat)|8\s+(?:international\s+)?cert', re.I)),
    ('named reference', re.compile(r'Hilton|five-star|5-star|бес жұлдыз|besh yulduz', re.I)),
    ('commercial promise', re.compile(r'48\s*(?:hours|сағат|soat)|\bInStock\b|MOQ|minimum order|минимал.*(?:заказ|buyurtma)', re.I)),
]

BLOG = '_scrape/blog'
files = sorted(glob.glob(os.path.join(BLOG, '*.json')))
print('source files: %d' % len(files))

per_file = Counter()
per_type = Counter()
per_lang = defaultdict(Counter)
details = []


def walk(obj, path, hits):
    if isinstance(obj, str):
        for tname, rx in PATTERNS:
            if rx.search(obj):
                hits.append((tname, path, obj))
        return
    if isinstance(obj, dict):
        for k, v in obj.items():
            walk(v, path + '.' + str(k) if path else str(k), hits)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, '%s[%d]' % (path, i), hits)


for f in files:
    d = json.load(open(f, encoding='utf-8'))
    hits = []
    walk(d, '', hits)
    if not hits:
        continue
    pid = d.get('id', os.path.basename(f))
    per_file[pid] = len(hits)
    for tname, path, txt in hits:
        per_type[tname] += 1
        m = re.search(r'\.([a-z]{2})[\.\[]', path)
        per_lang[pid][m.group(1) if m else 'shared'] += 1
    details.append((pid, len(hits)))

print('\n=== risk wording per article ===')
for pid, n in sorted(per_file.items(), key=lambda x: -x[1]):
    langs = dict(per_lang[pid])
    print('  %-46s %4d   %s' % (pid, n, langs))
print('\n  articles affected: %d / %d   total hits: %d'
      % (len(per_file), len(files), sum(per_file.values())))
print('\n=== by risk type ===')
for t, n in per_type.most_common():
    print('  %-30s %4d' % (t, n))

clean = [os.path.basename(f)[:-5] for f in files
         if json.load(open(f, encoding='utf-8')).get('id') not in per_file]
print('\n=== clean (no risk wording): %d ===' % len(clean))
for c in clean:
    print('  ', c)

out = '_scrape/_blog_claim_inventory.json'
json.dump({'per_article': dict(per_file), 'by_type': dict(per_type),
           'clean': clean},
          open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('\n-> %s' % out)

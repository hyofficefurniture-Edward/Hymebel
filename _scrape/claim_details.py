# -*- coding: utf-8 -*-
"""Per-occurrence detail of claim-risk wording in _scrape/blog/*.json.

Read-only. Same regexes as scripts/audit-claim-risk.mjs. Emits:
  - _scrape/_claim_details.json  (machine readable, full strings)
  - _scrape/_claim_details.txt   (human readable, keyword +/- context)
"""
import glob
import json
import os
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

PATTERNS = [
    ('delivery', re.compile(r'30\s*[–-]\s*45|9\s*[–-]\s*10\s*(?:days|күн|kun)|5\s*[–-]\s*7\s*(?:days|күн|kun)|lead time|production takes', re.I)),
    ('cert', re.compile(r'\bEAC\b|certificat|сертификат|sertifikat|compliance', re.I)),
    ('scale', re.compile(r'300[,.\s]?000|1[,.\s]?000\+|50\+\s*(?:countries|ел|davlat)|8\s+(?:international\s+)?cert', re.I)),
    ('named', re.compile(r'Hilton|five-star|5-star|бес жұлдыз|besh yulduz', re.I)),
    ('commercial', re.compile(r'48\s*(?:hours|сағат|soat)|\bInStock\b|MOQ|minimum order|минимал.*(?:заказ|buyurtma)', re.I)),
]

BLOG = '_scrape/blog'
LANGS = ('kk', 'uz', 'en')


def lang_of(path):
    m = re.search(r'\.(kk|uz|en)(?:\[|$)', path)
    return m.group(1) if m else 'shared'


def leaf_paths(obj, path=''):
    """Yield (path, text) for every string leaf."""
    if isinstance(obj, str):
        yield path, obj
        return
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from leaf_paths(v, '%s.%s' % (path, k) if path else str(k))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from leaf_paths(v, '%s[%d]' % (path, i))


def get_by_path(obj, path):
    cur = obj
    for part in re.findall(r'\.?([^.\[]+)|\[(\d+)\]', path):
        key, idx = part
        cur = cur[key] if key else cur[int(idx)]
    return cur


def set_by_path(obj, path, value):
    parts = re.findall(r'\.?([^.\[]+)|\[(\d+)\]', path)
    cur = obj
    for key, idx in parts[:-1]:
        cur = cur[key] if key else cur[int(idx)]
    key, idx = parts[-1]
    if key:
        cur[key] = value
    else:
        cur[int(idx)] = value


details = []
files = sorted(glob.glob(os.path.join(BLOG, '*.json')))
for f in files:
    d = json.load(open(f, encoding='utf-8'))
    pid = d.get('id', os.path.basename(f)[:-5])
    for path, txt in leaf_paths(d):
        for tname, rx in PATTERNS:
            for m in rx.finditer(txt):
                s, e = m.span()
                details.append({
                    'file': os.path.basename(f),
                    'id': pid,
                    'path': path,
                    'lang': lang_of(path),
                    'type': tname,
                    'match': m.group(0),
                    'ctx': txt[max(0, s - 70):e + 70].replace('\n', ' '),
                    'full': txt,
                })

json.dump(details, open('_scrape/_claim_details.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)


def sort_key(r):
    return (r['id'], r['path'], r['type'])


lines = []
cur = None
for r in sorted(details, key=sort_key):
    if r['id'] != cur:
        cur = r['id']
        n = sum(1 for x in details if x['id'] == cur)
        lines.append('')
        lines.append('### %s   (%d hits)' % (cur, n))
    lines.append('  [%-10s][%s] %s' % (r['type'], r['lang'], r['path']))
    lines.append('      MATCH: %s' % r['match'])
    lines.append('      CTX  : %s' % r['ctx'][:220])
open('_scrape/_claim_details.txt', 'w', encoding='utf-8').write('\n'.join(lines) + '\n')

print('total occurrences: %d' % len(details))
print('by type  :', dict(Counter(r['type'] for r in details)))
print('by lang  :', dict(Counter(r['lang'] for r in details)))
print('by article:')
for pid, n in Counter(r['id'] for r in details).most_common():
    print('  %-38s %4d' % (pid, n))
print('-> _scrape/_claim_details.json')
print('-> _scrape/_claim_details.txt')

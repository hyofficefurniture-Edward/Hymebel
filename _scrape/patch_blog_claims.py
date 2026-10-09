# -*- coding: utf-8 -*-
"""Apply claim-wording rewrites to _scrape/blog/*.json.

Reads _fix_batch*.json (list of {file, path, new}) and writes each `new`
into the source JSON at `path`. Safety rules:

  * a backup of every touched file is written to _scrape/blog/_bak_claims/
  * before writing, the current value MUST still match a risk pattern
    (so a re-run, or a path drift, is reported instead of silently clobbering)
  * an old -> new report is written to _scrape/_claim_rewrite_report.md

Usage:  python _scrape/patch_blog_claims.py [_fix_batch1.json ...]
        python _scrape/patch_blog_claims.py --dry
"""
import glob
import json
import os
import re
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

BLOG = '_scrape/blog'
BAK = os.path.join(BLOG, '_bak_claims')

PATTERNS = [
    re.compile(r'30\s*[–-]\s*45|9\s*[–-]\s*10\s*(?:days|күн|kun)|5\s*[–-]\s*7\s*(?:days|күн|kun)|lead time|production takes', re.I),
    re.compile(r'\bEAC\b|certificat|сертификат|sertifikat|compliance', re.I),
    re.compile(r'300[,.\s]?000|1[,.\s]?000\+|50\+\s*(?:countries|ел|davlat)|8\s+(?:international\s+)?cert', re.I),
    re.compile(r'Hilton|five-star|5-star|бес жұлдыз|besh yulduz', re.I),
    re.compile(r'48\s*(?:hours|сағат|soat)|\bInStock\b|MOQ|minimum order|минимал.*(?:заказ|buyurtma)', re.I),
]
# wording that must NOT survive in a rewritten passage
FORBIDDEN = PATTERNS[0], PATTERNS[2], re.compile(r'8\s+(?:халықаралық|international|xalqaro)', re.I), \
            re.compile(r'\b1[ ,.]?000\b'), re.compile(r'\b50\+'), PATTERNS[4]


def get_by_path(obj, path):
    cur = obj
    for key, idx in re.findall(r'\.?([^.\[]+)|\[(\d+)\]', path):
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


args = [a for a in sys.argv[1:] if not a.startswith('--')]
dry = '--dry' in sys.argv
if not args:
    args = sorted(glob.glob('_scrape/_fix_batch*.json'))

entries = []
for a in args:
    entries += json.load(open(a, encoding='utf-8'))
print('fix entries: %d  from %s' % (len(entries), [os.path.basename(a) for a in args]))

docs = {}
report = []
applied = skipped = 0
for e in entries:
    f = os.path.join(BLOG, e['file'])
    if f not in docs:
        docs[f] = json.load(open(f, encoding='utf-8'))
    doc = docs[f]
    old = get_by_path(doc, e['path'])
    risky = any(p.search(old) for p in PATTERNS)
    if not risky:
        skipped += 1
        report.append('SKIP  %-34s %-28s (no risk wording left)' % (e['file'], e['path']))
        continue
    bad = [p.pattern for p in FORBIDDEN if p.search(e['new'])]
    set_by_path(doc, e['path'], e['new'])
    applied += 1
    report.append('OK    %-34s %-28s%s' % (e['file'], e['path'], '  WARN new still matches: %s' % bad if bad else ''))
    report.append('      OLD: %s' % old[:150].replace('\n', ' '))
    report.append('      NEW: %s' % e['new'][:150].replace('\n', ' '))

print('applied: %d   skipped: %d' % (applied, skipped))
print()
print('\n'.join(report[:60]))
if len(report) > 60:
    print('... (%d more lines)' % (len(report) - 60))

if dry:
    print('\n[dry] nothing written')
    sys.exit(0)

os.makedirs(BAK, exist_ok=True)
for f, doc in docs.items():
    base = os.path.basename(f)
    b = os.path.join(BAK, base)
    if not os.path.exists(b):
        shutil.copy2(f, b)
    with open(f, 'w', encoding='utf-8', newline='\n') as fh:
        json.dump(doc, fh, ensure_ascii=False, indent=1)
        fh.write('\n')
print('\nwritten %d file(s); backup in %s' % (len(docs), BAK))

open('_scrape/_claim_rewrite_report.md', 'w', encoding='utf-8').write(
    '# claim rewrite report\n\n```\n' + '\n'.join(report) + '\n```\n')
print('-> _scrape/_claim_rewrite_report.md')

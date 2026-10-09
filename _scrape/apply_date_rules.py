# -*- coding: utf-8 -*-
"""Apply the delivery-time rewrite rules to _scrape/blog/*.json.

Rules live in _date_rules_en.json / _date_rules_kkuz.json as
{pat, rep} pairs; `pat` is a Python regex applied to every string leaf.

Safety:
  * `[–-]` is normalised to `[-–]` so the en-dash never opens a char range
  * a backup of every touched file goes to _scrape/blog/_bak_dates/
  * every rule reports how many substitutions it made; zero-hit rules are listed
"""
import glob
import json
import os
import re
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

BLOG = '_scrape/blog'
BAK = os.path.join(BLOG, '_bak_dates')


def norm(p):
    return p.replace('[–-]', '[-–]').replace('[—–-]', '[—–-]')


rules = []
for f in sorted(glob.glob('_scrape/_date_rules*.json')):
    for r in json.load(open(f, encoding='utf-8')):
        rules.append((norm(r['pat']), r['rep']))
print('rules: %d' % len(rules))

compiled = []
for pat, rep in rules:
    try:
        compiled.append((re.compile(pat), rep, pat))
    except re.error as e:
        print('BAD PATTERN: %s -> %s' % (pat[:70], e))
        sys.exit(1)


def leaves(o, path=''):
    if isinstance(o, str):
        yield path, o
        return
    if isinstance(o, dict):
        for k, v in o.items():
            yield from leaves(v, '%s.%s' % (path, k) if path else str(k))
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from leaves(v, '%s[%d]' % (path, i))


def rebuild(o, path, value):
    parts = re.findall(r'\.?([^.\[]+)|\[(\d+)\]', path)
    cur = o
    for key, idx in parts[:-1]:
        cur = cur[key] if key else cur[int(idx)]
    key, idx = parts[-1]
    if key:
        cur[key] = value
    else:
        cur[int(idx)] = value


hits = {}
total = 0
files_touched = {}
for f in sorted(glob.glob(os.path.join(BLOG, '*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    changed = False
    for path, txt in list(leaves(d)):
        new = txt
        for rx, rep, pat in compiled:
            new, n = rx.subn(rep, new)
            if n:
                hits[pat] = hits.get(pat, 0) + n
                total += n
        if new != txt:
            rebuild(d, path, new)
            changed = True
    if changed:
        files_touched[f] = 1
        if '--dry' not in sys.argv:
            os.makedirs(BAK, exist_ok=True)
            b = os.path.join(BAK, os.path.basename(f))
            if not os.path.exists(b):
                shutil.copy2(f, b)
            with open(f, 'w', encoding='utf-8', newline='\n') as fh:
                json.dump(d, fh, ensure_ascii=False, indent=1)
                fh.write('\n')

print('substitutions: %d across %d files%s'
      % (total, len(files_touched), '  [dry]' if '--dry' in sys.argv else ''))
print()
print('--- rules with hits ---')
for _rx, _rep, pats in sorted(compiled, key=lambda x: -hits.get(x[2], 0)):
    n = hits.get(pats, 0)
    if n:
        print('  %3d  %s' % (n, pats[:95]))
zero = [x[2] for x in compiled if hits.get(x[2], 0) == 0]
print()
print('--- rules with zero hits: %d ---' % len(zero))
for p in zero:
    print('   0  %s' % p[:95])

if '--dry' not in sys.argv:
    print()
    print('-> backup in %s' % BAK)

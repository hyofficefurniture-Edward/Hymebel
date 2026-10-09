# -*- coding: utf-8 -*-
"""Export the self-claim passages (full text) to a work list for rewriting."""
import json
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

rows = json.load(open('_scrape/_claim_classified.json', encoding='utf-8'))

# one entry per (file, path, type) -> collapse to one per (file, path)
best = {}
for r in rows:
    if not r['self_claim']:
        continue
    k = (r['file'], r['path'])
    if k not in best:
        best[k] = r
    else:
        best[k]['type'] = best[k]['type'] + '+' + r['type'] if r['type'] not in best[k]['type'] else best[k]['type']

by_art = defaultdict(lambda: defaultdict(list))
for (f, p), r in best.items():
    by_art[r['id']][r['lang']].append((p, r['type'], r['full']))

order = sorted(by_art, key=lambda x: -sum(len(v) for v in by_art[x].values()))

out = []
for aid in order:
    n = sum(len(v) for v in by_art[aid].values())
    out.append('')
    out.append('=' * 78)
    out.append('## %s   (%d passages)' % (aid, n))
    out.append('=' * 78)
    for lang in ('kk', 'uz', 'en'):
        for p, t, full in by_art[aid].get(lang, []):
            out.append('')
            out.append('--- [%s][%s] %s' % (lang, t, p))
            out.append(full)

open('_scrape/_rewrite_work.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('passages: %d   articles: %d' % (len(best), len(by_art)))
print('-> _scrape/_rewrite_work.md')

# also a machine-readable version for the patcher
pairs = [{'file': f, 'id': r['id'], 'path': p, 'lang': r['lang'], 'types': r['type'], 'old': r['full']}
         for (f, p), r in best.items()]
json.dump(pairs, open('_scrape/_rewrite_targets.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print('-> _scrape/_rewrite_targets.json')

for aid in order:
    n = sum(len(v) for v in by_art[aid].values())
    langs = {k: len(v) for k, v in by_art[aid].items()}
    print('  %-38s %3d  %s' % (aid, n, langs))

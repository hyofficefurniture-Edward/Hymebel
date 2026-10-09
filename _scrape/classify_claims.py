# -*- coding: utf-8 -*-
"""Classify each claim-risk occurrence as a first-party self-claim or a
general industry/regulatory statement.

Self-claim  = the sentence asserts something about *this company* (we/our/
              Hymebel/Hongye/біз/біздің/biz/bizning/компания/зауыт...).
General     = the wording appears in buyer-education context only.

Read-only. Writes _scrape/_claim_classified.json.
"""
import json
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

SELF = re.compile(
    r'\b(we|our|us|ours)\b|Hymebel|Hongye|Хунъе|біз|біздің|бізде|компания|зауыт(?:ымыз|ымз)?'
    r'|компаниямыз|өндіріс(?:іміз)?|бiz|bizning|bizda|kompaniya|zavod(?:imiz)?'
    r'|ishlab chiqarish quvvat|зауыттық|фабрика|factory|fabrika|иемденеді|ega\b',
    re.I)

rows = json.load(open('_scrape/_claim_details.json', encoding='utf-8'))
# collapse to one entry per (file, path, type) - finditer produced duplicates
seen = {}
for r in rows:
    k = (r['file'], r['path'], r['type'])
    if k not in seen:
        seen[k] = r
uniq = list(seen.values())

for r in uniq:
    r['self_claim'] = bool(SELF.search(r['ctx']))

out = uniq
json.dump(out, open('_scrape/_claim_classified.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)

print('unique (file,path,type) records: %d  (raw occurrences %d)' % (len(uniq), len(rows)))
print()
print('=== per article: total / self-claim ===')
per = Counter()
selfp = Counter()
for r in uniq:
    per[r['id']] += 1
    if r['self_claim']:
        selfp[r['id']] += 1
for pid, n in per.most_common():
    print('  %-38s %4d   self=%-4d gen=%d' % (pid, n, selfp[pid], n - selfp[pid]))
print()
print('=== by type: total / self-claim ===')
tp = Counter(r['type'] for r in uniq)
ts = Counter(r['type'] for r in uniq if r['self_claim'])
for t, n in tp.most_common():
    print('  %-11s %4d   self=%-4d gen=%d' % (t, n, ts[t], n - ts[t]))
print()
print('=== self-claim samples (first 30) ===')
for r in [x for x in uniq if x['self_claim']][:30]:
    print('  [%s][%s] %s' % (r['id'], r['lang'], r['path']))
    print('     >', r['ctx'][:200])

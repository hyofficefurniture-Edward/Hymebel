# -*- coding: utf-8 -*-
"""Inspect src/data/market-posts.ts: per-post stats for QC."""
import re
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

P = 'src/data/market-posts.ts'
s = open(P, encoding='utf-8').read()

# split on top-level record openings
entries = []
idx = 0
pos = 0
while True:
    m = re.compile(r'\n  \{\n').search(s, pos)
    if not m:
        break
    start = m.start()
    # find the matching closing "\n  },\n" (records are indented by 2)
    end = s.find('\n  },\n', m.end())
    if end == -1:
        end = s.find('\n  }\n', m.end())
        if end == -1:
            break
    entries.append(s[start:end])
    pos = end + 1

print('records: %d' % len(entries))
rows = []
for b in entries:
    def g(pat):
        m = re.search(pat, b, re.S)
        return m.group(1).strip() if m else ''
    pid = g(r'id:\s*"([^"]+)"')
    market = g(r'market:\s*"([^"]+)"')
    title = g(r'title:\s*"([^"]+)"')
    excerpt = g(r'excerpt:\s*"([^"]+)"')
    definition = g(r'definition:\s*"([^"]+)"')
    date = g(r'date:\s*"([^"]+)"')
    image = g(r'image:\s*"([^"]+)"')
    rmin = g(r'readingMin:\s*(\d+)')
    # sections: count "heading:" inside sections array
    sec_start = b.find('sections: [')
    faq_start = b.find('faqs: [')
    sec_blk = b[sec_start:faq_start] if sec_start != -1 and faq_start != -1 else ''
    faq_blk = b[faq_start:] if faq_start != -1 else ''
    n_sec = len(re.findall(r'heading:\s*"', sec_blk))
    n_faq = len(re.findall(r'question:\s*"', faq_blk))
    # words: count latin/mongolian/cyrillic words across the whole record
    words = len(re.findall(r'[0-9A-Za-z\u0400-\u04FF\u0600-\u06FF\u1800-\u18AF]+', b))
    take_start = b.find('takeaways: [')
    take_blk = b[take_start:sec_start] if take_start != -1 and sec_start != -1 else ''
    n_take = len(re.findall(r'^\s*"', take_blk, re.M))
    rows.append(dict(id=pid, market=market, title=title, date=date, image=image,
                     readingMin=rmin, sec=n_sec, faq=n_faq, take=n_take,
                     words=words, excerpt_len=len(excerpt), def_len=len(definition)))

for r in rows:
    print('%-26s %-3s sec=%d faq=%d take=%d words=%5d exc=%3d def=%3d  %s'
          % (r['id'], r['market'], r['sec'], r['faq'], r['take'], r['words'],
             r['excerpt_len'], r['def_len'], r['title'][:44]))

print()
from collections import Counter
print('by market:', dict(Counter(r['market'] for r in rows)))
print('total words:', sum(r['words'] for r in rows))
json.dump(rows, open('_scrape/_marketposts_stats.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print('-> _scrape/_marketposts_stats.json')

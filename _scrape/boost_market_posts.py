# -*- coding: utf-8 -*-
"""Merge the PAA boost pack into src/data/market-posts.ts.

Adds, per market post: 1 extra question-form section (2 paragraphs),
1 extra FAQ, 1 extra takeaway. Result: 6 sections / 7 FAQs / 6 takeaways.

Idempotent: refuses to run twice (checks for a sentinel section heading).
Usage: python _scrape/boost_market_posts.py [--dry]
"""
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

TS = 'src/data/market-posts.ts'
BOOST = '_scrape/_marketposts_paa_boost.json'
SENTINEL = 'PAA-BOOST-2026-10-08'

boost = json.load(open(BOOST, encoding='utf-8'))
s = open(TS, encoding='utf-8').read()

if 'PAA-BOOST' in s:
    print('already boosted — aborting (idempotent guard)')
    sys.exit(0)

starts = [m.start() for m in re.finditer(r'\n  \{\n', s)]
records = []
for st in starts:
    en = s.find('\n  },\n', st)
    if en == -1:
        raise SystemExit('unterminated record at %d' % st)
    records.append((st + 1, en))

print('records: %d' % len(records))

out = []
cursor = 0
report = []

for st, en in records:
    block = s[st:en]  # starts with "  {\n", ends with "\n    ],"
    m = re.search(r'id:\s*"([^"]+)"', block)
    pid = m.group(1) if m else '?'
    b = boost.get(pid)
    if not b:
        report.append((pid, 'NO-BOOST', 0, 0, 0))
        out.append(s[cursor:st])
        out.append(block)
        out.append('\n  },\n')
        cursor = en + len('\n  },\n')
        continue

    before = block

    # 1) extra takeaway — anchor: close of takeaways array, start of sections
    a_take = '\n    ],\n    sections: ['
    if before.count(a_take) != 1:
        raise SystemExit('%s: takeaway anchor count=%d' % (pid, before.count(a_take)))
    before = before.replace(
        a_take,
        '\n      "%s",\n    ],\n    sections: [' % b['takeaway'],
        1)

    # 2) extra section — anchor: close of sections array, start of faqs
    a_sec = '\n    ],\n    faqs: ['
    if before.count(a_sec) != 1:
        raise SystemExit('%s: section anchor count=%d' % (pid, before.count(a_sec)))
    sec_txt = (
        '\n      {\n'
        '        heading: "%s",\n'
        '        paragraphs: [\n'
        '          "%s",\n'
        '          "%s",\n'
        '        ],\n'
        '      },\n'
        '    ],\n    faqs: ['
    ) % (b['section']['heading'], b['section']['paragraphs'][0],
         b['section']['paragraphs'][1])
    before = before.replace(a_sec, sec_txt, 1)

    # 3) extra FAQ — anchor: trailing close of faqs array (end of block)
    tail = '\n    ],'
    if not before.endswith(tail):
        raise SystemExit('%s: block does not end with faqs close' % pid)
    faq_txt = (
        '\n      {\n'
        '        question: "%s",\n'
        '        answer:\n'
        '          "%s",\n'
        '      },\n'
        '    ],'
    ) % (b['faq']['question'], b['faq']['answer'])
    before = before[: -len(tail)] + faq_txt

    n_sec = len(re.findall(r'heading:\s*"', before))
    n_faq = len(re.findall(r'question:\s*"', before))
    n_take = len(re.findall(r'^\s{6}"', before, re.M))
    report.append((pid, 'OK', n_sec, n_faq, n_take))

    out.append(s[cursor:st])
    out.append(before)
    out.append('\n  },\n')
    cursor = en + len('\n  },\n')

out.append(s[cursor:])
new = ''.join(out)

# sentinel in the doc comment so re-runs are refused
new = new.replace(
    ' * MN/RU market-native posts — first batch, 2026-10-08 (6 MN + 4 RU).',
    ' * MN/RU market-native posts — first batch, 2026-10-08 (6 MN + 4 RU).\n'
    ' * PAA-BOOST-2026-10-08: each entry carries 6 question-form sections,\n'
    ' * 7 FAQs and 6 takeaways (People-Also-Ask / GEO shape).')

for r in report:
    print('  %-56s %-8s sec=%d faq=%d take=%d' % r)

if '--dry' in sys.argv:
    print('\nDRY RUN — not written')
else:
    with open(TS, 'w', encoding='utf-8', newline='\n') as f:
        f.write(new)
    print('\nwritten: %s (%d -> %d chars)' % (TS, len(s), len(new)))

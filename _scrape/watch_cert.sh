#!/usr/bin/env bash
# Watch GitHub Pages TLS certificate for hymebel.com; enable Enforce HTTPS once approved.
REPO=hyofficefurniture-Edward/Hymebel
TOK=$(grep '^password=' /tmp/.gcred | cut -d= -f2)
API=https://api.github.com/repos/$REPO/pages

state_of() {
  curl -s -m 20 -H "Authorization: token $TOK" "$API" | python -c "
import json,sys
try:
    d=json.load(sys.stdin); c=d.get('https_certificate') or {}
    print(c.get('state') or 'none')
except Exception:
    print('err')
"
}

for i in $(seq 1 45); do
  S=$(state_of)
  echo "$(date +%H:%M:%S) attempt=$i cert=$S"
  if [ "$S" = "approved" ] || [ "$S" = "issued" ]; then
    echo "--- enabling Enforce HTTPS ---"
    curl -s -X PUT -H "Authorization: token $TOK" -H "Accept: application/vnd.github+json" "$API" \
      -d '{"cname":"hymebel.com","https_enforced":true}' | python -c "
import json,sys
d=json.load(sys.stdin); c=d.get('https_certificate') or {}
print('https_enforced:',d.get('https_enforced'),'| cert:',c.get('state'),'| msg:',d.get('message',''))
"
    sleep 45
    echo "--- https probe ---"
    for U in /kk/ /uz/ /en/cases/ /sitemap.xml; do
      curl -s -m 25 -o /dev/null -w "  %{http_code}  https://hymebel.com$U\n" "https://hymebel.com$U"
    done
    echo "CERT-READY"
    exit 0
  fi
  sleep 60
done
echo "TIMEOUT: cert still not approved after ~45 min"

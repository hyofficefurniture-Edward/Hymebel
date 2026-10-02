# -*- coding: utf-8 -*-
"""下载 S2 新增产品图（more_*.json）：每款 3-4 张，落 public/images/products/<id>/<id>-{main,scene,g3,g4}.<ext>"""
import json, os, sys, urllib.request

REPO = r"C:\Users\admin\WorkBuddy\hongye-content-core\2026-05-12-task-1\hymebel-repo"
OUT = os.path.join(REPO, "public", "images", "products")
SCRAPE = os.path.join(REPO, "_scrape")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
SUF = ["main", "scene", "g3", "g4"]


def dl(url, dest_base):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
        ct = r.headers.get("Content-Type", "")
    if len(data) < 30000:
        return None, "too-small"
    ext = ".jpg"
    if "png" in ct or url.lower().split("?")[0].endswith(".png"):
        ext = ".png"
    elif "webp" in ct or url.lower().split("?")[0].endswith(".webp"):
        ext = ".webp"
    dest = dest_base + ext
    with open(dest, "wb") as f:
        f.write(data)
    return dest, len(data)


def main():
    reports = {}
    for fname in ["more_hotel.json", "more_home.json", "more_home_fix.json", "more_office.json", "more_edu.json", "more_med.json"]:
        p = os.path.join(SCRAPE, fname)
        if not os.path.exists(p):
            continue
        data = json.load(open(p, encoding="utf-8"))
        for cat, items in data.items():
            if cat.startswith("_"):
                continue
            for it in items:
                pid = it["id"]
                d = os.path.join(OUT, pid)
                os.makedirs(d, exist_ok=True)
                imgs = it.get("images") or []
                got = []
                for i, url in enumerate(imgs[:4]):
                    base = os.path.join(d, f"{pid}-{SUF[i]}")
                    try:
                        dest, info = dl(url, base)
                    except Exception as e:
                        print(f"  FAIL {pid} #{i} {e}")
                        continue
                    if dest:
                        got.append((SUF[i], info))
                    else:
                        print(f"  SKIP {pid} #{i} {info}")
                reports[pid] = got
                print(pid, "->", got)
    print("\nsummary:", {k: len(v) for k, v in reports.items()})


if __name__ == "__main__":
    main()

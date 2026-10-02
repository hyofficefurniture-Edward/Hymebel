# -*- coding: utf-8 -*-
"""下载 hymebel 产品主图：每款取第 1 张（主图），部分取第 2 张场景图，控制体积。"""
import json, os, sys, urllib.request, urllib.parse

REPO = r"C:\Users\admin\WorkBuddy\hongye-content-core\2026-05-12-task-1\hymebel-repo"
OUT = os.path.join(REPO, "public", "images", "products")
SCRAPE = os.path.join(REPO, "_scrape")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

def dl(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 3000:
        return "skip"
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        data = r.read()
    if len(data) < 3000:
        return "too-small"
    ext = ".jpg"
    ct = r.headers.get("Content-Type", "")
    if "png" in ct or url.lower().endswith(".png"):
        ext = ".png"
    elif "webp" in ct or url.lower().endswith(".webp"):
        ext = ".webp"
    dest = os.path.splitext(dest)[0] + ext
    with open(dest, "wb") as f:
        f.write(data)
    return dest

def main():
    os.makedirs(OUT, exist_ok=True)
    total, ok, fail = 0, 0, []
    for fname in ["hotel_home_products.json", "office_edu_products.json", "medical_products.json"]:
        data = json.load(open(os.path.join(SCRAPE, fname), encoding="utf-8"))
        for cat, items in data.items():
            if cat.startswith("_"):
                continue
            for it in items:
                pid = it["id"]
                imgs = it.get("images") or []
                if not imgs:
                    fail.append((pid, "no-image"))
                    continue
                pdir = os.path.join(OUT, pid)
                os.makedirs(pdir, exist_ok=True)
                n = 0
                for i, url in enumerate(imgs[:2]):  # 每款最多 2 张
                    try:
                        safe = urllib.parse.quote(url, safe=":/?&=%")
                        dest = os.path.join(pdir, f"{pid}-{'main' if i == 0 else 'scene'}")
                        res = dl(safe, dest)
                        if isinstance(res, str) and res in ("too-small", "skip"):
                            if res == "skip":
                                n += 1
                                continue
                            continue
                        if isinstance(res, str) and res != "skip":
                            n += 1
                    except Exception as e:
                        fail.append((pid, f"img{i}: {str(e)[:60]}"))
                total += 1
                ok += 1 if n else 0
                print(f"{pid}: {n} img(s)")
    print(f"\nTOTAL {total}, with-img {ok}, failures {len(fail)}")
    for f in fail:
        print("FAIL", f)

if __name__ == "__main__":
    main()

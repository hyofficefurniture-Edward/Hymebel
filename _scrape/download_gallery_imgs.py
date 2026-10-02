# -*- coding: utf-8 -*-
"""补下 hymebel 产品第 3/4 张图（图集用）：{pid}-g3 / {pid}-g4。
已有 main / scene 不动；失败或过小的跳过，不阻断。"""
import json, os, urllib.request, urllib.parse

REPO = r"C:\Users\admin\WorkBuddy\hongye-content-core\2026-05-12-task-1\hymebel-repo"
OUT = os.path.join(REPO, "public", "images", "products")
SCRAPE = os.path.join(REPO, "_scrape")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
SUFFIX = {2: "g3", 3: "g4"}
MIN_BYTES = 12000  # 图集图剔除小图标 / 缩略图


def dl(url, dest_base):
    for ext in (".jpg", ".webp", ".png"):
        if os.path.exists(dest_base + ext) and os.path.getsize(dest_base + ext) > MIN_BYTES:
            return "skip"
    req = urllib.request.Request(urllib.parse.quote(url, safe=":/?&=%"), headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        data = r.read()
    if len(data) < MIN_BYTES:
        return "too-small"
    ct = r.headers.get("Content-Type", "")
    ext = ".png" if ("png" in ct or url.lower().endswith(".png")) else (
        ".webp" if ("webp" in ct or url.lower().endswith(".webp")) else ".jpg")
    with open(dest_base + ext, "wb") as f:
        f.write(data)
    return dest_base + ext


def main():
    total = ok = 0
    fail = []
    for fname in ["hotel_home_products.json", "office_edu_products.json", "medical_products.json"]:
        data = json.load(open(os.path.join(SCRAPE, fname), encoding="utf-8"))
        for cat, items in data.items():
            if cat.startswith("_"):
                continue
            for it in items:
                pid = it["id"]
                urls = it.get("images") or []
                pdir = os.path.join(OUT, pid)
                os.makedirs(pdir, exist_ok=True)
                total += 1
                n = 0
                for i, suf in SUFFIX.items():
                    if len(urls) <= i:
                        continue
                    try:
                        res = dl(urls[i], os.path.join(pdir, f"{pid}-{suf}"))
                        if res == "skip" or res.endswith((".jpg", ".webp", ".png")):
                            n += 1
                    except Exception as e:
                        fail.append((pid, suf, str(e)[:60]))
                ok += 1 if n else 0
                print(f"{pid}: +{n}")
    print(f"\nTOTAL {total}, gained {ok}, failures {len(fail)}")
    for f in fail:
        print("FAIL", f)


if __name__ == "__main__":
    main()

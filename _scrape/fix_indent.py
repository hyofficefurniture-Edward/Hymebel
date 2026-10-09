# -*- coding: utf-8 -*-
"""
fix_indent.py — 把 _scrape/blog/*.json 的序列化缩进恢复成 git HEAD 版本的原样，
只保留内容改动，消除「全文件逐行重排」的格式噪声。

用法：
  python _scrape/fix_indent.py            # 实际写回
  python _scrape/fix_indent.py --dry      # 只报告
"""
import io, os, re, sys, json, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(ROOT, "_scrape", "blog")
DRY = "--dry" in sys.argv


def head_text(rel):
    r = subprocess.run(["git", "show", "HEAD:" + rel], cwd=ROOT,
                       capture_output=True)
    if r.returncode != 0:
        return None
    return r.stdout.decode("utf-8")


def detect_indent(text):
    """从 HEAD 文本探测缩进：看第一个以空格开头的行有多少个前导空格。"""
    for line in text.splitlines():
        if line.startswith(" "):
            n = len(line) - len(line.lstrip(" "))
            if n > 0:
                return n
    return 1


changed = []
for name in sorted(os.listdir(BLOG)):
    if not name.endswith(".json"):
        continue
    rel = "_scrape/blog/" + name
    path = os.path.join(BLOG, name)
    ht = head_text(rel)
    if ht is None:
        continue
    want = detect_indent(ht)
    cur = io.open(path, encoding="utf-8").read()
    have = detect_indent(cur)
    if want == have:
        continue
    data = json.loads(cur)
    out = json.dumps(data, ensure_ascii=False, indent=want)
    if ht.endswith("\n"):
        out += "\n"
    if out == cur:
        continue
    changed.append((name, have, want))
    if not DRY:
        io.open(path, "w", encoding="utf-8", newline="\n").write(out)

print("--- indent normalized ---")
for n, a, b in changed:
    print(f"  {n}: indent {a} -> {b}")
if not changed:
    print("  (nothing to do)")

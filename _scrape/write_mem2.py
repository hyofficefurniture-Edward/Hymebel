# -*- coding: utf-8 -*-
"""Append today's log + refresh MEMORY.md hymebel section."""
import io, os, sys
sys.stdout.reconfigure(encoding="utf-8")

MEM_DIR = r"C:\Users\admin\WorkBuddy\2026-09-20-19-47-27\.workbuddy\memory"
LOG = os.path.join(MEM_DIR, "2026-10-02.md")
MEM = os.path.join(MEM_DIR, "MEMORY.md")

block = """
### 2026-10-02 · hymebel.com 正式域名上线（DNS 已解析）
- Edward 在新网完成解析：A @ ×4 → 185.199.108/109/110/111.153，www → hyofficefurniture-Edward.github.io；`nslookup 8.8.8.8` 已返回 4 个 GitHub IP
- 踩坑：切 Pages 源到 gh-pages 后**不会自动构建**（`pages.status=null`），自定义域名报 `Site not found · GitHub Pages`，而 github.io/Hymebel/ 却 301 跳正式域名 → 必须 `POST /repos/{o}/{r}/pages/builds` 手动触发首次构建（34s 完成）
- 构建后 `http://hymebel.com/` 全绿：`/` `/kk/` `/uz/` `/en/` `/kk/blog/` 文章页 产品页 `/uz/cases/` `/en/about/` `/ru/`(跳转桩) `/sitemap.xml` `/robots.txt` `/rss-kk.xml` `/llms.txt` 全部 200
- 域名层核查通过：canonical= https://hymebel.com/kk/ 、hreflang 4 条（kk-KZ/uz-UZ/en/x-default）、robots 指向 hymebel.com 的 3 语 sitemap + RSS + llms.txt
- HTTPS 待证书：`PUT /pages -d {cname, https_enforced:true}` 报 `The certificate does not exist yet`；当前 443 仍在用兜底证书 CN=*.github.io，HTTPS 请求 000、HTTP 正常 → 已起后台守望脚本 `_scrape/watch_cert.sh`（轮询 45×60s，cert=approved 即自动开 Enforce HTTPS 并探活）
- **PAT 仍只 repo 权限**：不仅 git push 被拒，**REST API 创建 .github/workflows/ 文件也返回 404（不是 403）**——Actions 模式需用户网页手动建文件或换带 workflow 权限的 token；当前用分支部署已完全可用（与 Hymuebles/hymobiliario.com 同为 legacy 分支模式）
- 技能 `github-pages-site-provisioning` 已补 3 个坑（B 切源需触发构建 / C 证书签发时序 / D API 写 workflow 返回 404）
"""

with io.open(LOG, "a", encoding="utf-8") as f:
    f.write(block)
print("log appended:", LOG)

with io.open(MEM, "r", encoding="utf-8") as f:
    s = f.read()

old_key = "## hymebel.com 上线配置（2026-10-02）"
idx = s.find(old_key)
new_sec = """## hymebel.com 上线配置（2026-10-02 已上线）
- 仓库 hyofficefurniture-Edward/Hymebel：main=Astro 源码，gh-pages=构建产物，Pages 源=gh-pages 分支（legacy 模式，与 Hymuebles/hymobiliario.com 同类）
- **正式域名 http://hymebel.com 已通**（DNS 4×A + www CNAME 已配，Pages 首次构建需手动 `POST /pages/builds` 触发）
- HTTPS 证书由 GitHub 自动签发中（cert approved 后自动/手动开 Enforce HTTPS）
- 推送 github 必须走 SOCKS5（10808），直连被沙箱代理 502
- PAT 仅 repo 权限：既不能 push 也不能用 API 写 .github/workflows/*（API 返回 404）；若要 Actions 自动构建需网页手建文件或换 token
"""
if idx >= 0:
    s = s[:idx] + new_sec
else:
    s += "\n" + new_sec
with io.open(MEM, "w", encoding="utf-8") as f:
    f.write(s)
print("MEMORY.md updated")

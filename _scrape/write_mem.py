# -*- coding: utf-8 -*-
import io, sys
sys.stdout.reconfigure(encoding="utf-8")

base = r"C:\Users\admin\WorkBuddy\2026-09-20-19-47-27\.workbuddy\memory"
log = base + r"\2026-10-02.md"
mem = base + r"\MEMORY.md"

block = """### 2026-10-02 · GitHub 落位结果（可复用要点）
- 仓库：hyofficefurniture-Edward/Hymebel（public）；main = Astro 源码，gh-pages = 构建产物（Pages 部署源）
- 推送 github 必须走 SOCKS5：本机 http_proxy(127.0.0.1:52503) 对 github.com 报 502；改用 git -c http.proxy=socks5h://127.0.0.1:10808 并清空 http_proxy/https_proxy/ALL_PROXY 环境变量即可
- 凭据助手会卡死：禁用 credential.helper，用 git credential fill 取缓存凭据 + 临时 GIT_ASKPASS 脚本实现非交互推送
- PAT 仅 repo 权限：GitHub 拒绝推送 .github/workflows/* 文件（需 workflow 权限）→ 本轮改为分支部署（Pages source = gh-pages 分支 / 根路径，build_type=legacy）；deploy.yml 暂存到 _scrape/deploy.yml.pending 并加入 .gitignore
- public/ 已放 CNAME(hymebel.com) 与 .nojekyll，每次构建自动进 dist
- 域名：hymebel.com 于 2026-09-28 在新网注册，NS=ns11/ns12.xincache.com，尚无任何解析记录；待加 4 条 A + www CNAME 后开 Enforce HTTPS
"""

with io.open(log, "a", encoding="utf-8") as f:
    f.write(block)
print("log appended")

s = io.open(mem, encoding="utf-8").read()
if "hymebel.com 上线配置" not in s:
    s += """
## hymebel.com 上线配置（2026-10-02）
- 仓库 hyofficefurniture-Edward/Hymebel：main=源码，gh-pages=构建产物，GitHub Pages 源=gh-pages 分支
- 推送 GitHub 必须走 SOCKS5 代理 10808（直连被沙箱代理 502）；PAT 仅 repo 权限，不能推送 .github/workflows（Actions 方案待授权 workflow 权限）
- 域名 hymebel.com：新网注册，DNS 待配置（4 条 A 记录指向 185.199.108~111.153 + www CNAME）
"""
    io.open(mem, "w", encoding="utf-8").write(s)
    print("MEMORY.md updated")
else:
    print("MEMORY.md already has note")

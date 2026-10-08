# 2026-10-08 中亚语言按钮与 MN/RU 页面扩充交接

## 本次内容底座

- 中亚 KK/UZ/EN 可见按钮统一保留，手机页头常驻；点击进入各语言首页。
- KK/UZ 的搜索 alternate 保持各自独立，可见切换不等于互认翻译。
- MN/RU 保持三个地区独立入口，不跨地区导流。
- 每个 MN/RU 市场：5个品类、15个产品详情（本地语+本地区英文）、案例参考、服务、工厂介绍、FAQ、项目准备页和博客。
- 产品基础来源为已有 products.ts 的选定条目与图片，文案新写；未搬运旧数据中的性能百分比、认证、固定交期或保修承诺。
- 案例为既有公司库的海外/场景参考，不写为蒙古或俄罗斯本地已交付项目。

## WorkBuddy 开始文章前

1. 先 fetch 并合并远程 main 最新版本。旧工作副本有未提交改动时应先保存并逐项合并，尤其不要覆盖本次 Header/Footer、market-catalog、各 Regional 布局、market-pages、sitemap 和 QA脚本。
2. MN/RU 的文章只加入 src/data/market-posts.ts 的 marketPosts 数组，保持一篇归属一个市场。src/data/blog.ts 为既有KK/UZ/EN档案，不覆盖。
3. market 字段为 mn 或 ru。id 使用稳定英文短横线 slug，标题、摘要、definition、takeaways、sections、faqs、imageAlt 均使用目标市场本地语言。
4. 字段严格按同文件 MarketPost 接口：id、market、title、tag、excerpt、date、readingMin、image、imageAlt、definition、takeaways、sections[{heading,paragraphs}]、faqs[{question,answer}]。
5. image 指向 public 下真实存在的图片；无新增素材时选择已有相关图片并标注来源用途。文章不自动生成英文全文；本地区英文博客入口承接咨询。已调整 QA 支持仅本地语文章，不要求不存在的英文文章页。
6. 文章相关内链请用本地区的产品、品类、services、cases、project-starter、contact；不写另一地区 URL。
7. 文章模板已有 Article/FAQ 结构化数据、单市场标题、canonical、GA4归因、询盘CTA；勿重复塞入额外JSON-LD或伪造作者/日期。
8. 发布前执行 npm run check、npm run build、npm run qa:hreflang、npm run qa:markets。现有GitHub Pages工作流继续使用。

## 首批差异化选题

MN：酒店按房型准备家具BOQ；乌兰巴托设计团队如何核对尺寸与材料；办公室工位与储物数量清单；私人住宅房间清单与颜色样本准备。
RU：酒店改造分批采购与样板确认；办公BOQ如何比较同规格报价；餐厅座位布局与储存安排；图纸定制家具的接口和安装责任澄清。

每篇至少有一项可追溯的一手输入（规格/图片/真实问题/流程资料），不要只互译KK或其他地区文章。涉及项目客户名、性能、认证、物流、安装、交期时按现有可核验证据与项目条件写。

页面扩充让内容可承接搜索和询盘，不构成SEO排名或AI引用提升的保证。

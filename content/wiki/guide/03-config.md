+++
title = "03 · 配置详解"
date = 2026-03-03
weight = 3
description = "逐项讲解 zola.toml 的 base、taxonomies、markdown、extra、languages 与 slugify。"
+++

本章以根目录 `zola.toml` 为主（`themes/elysia/zola.toml` 为示例），按区块拆解。

## 基础与 Taxonomies

```toml
base_url = "https://example.com"
title = "诗酒趁年华"
description = "A modern, minimalist Zola theme — Reading is enjoyment."
default_language = "zh"
compile_sass = false
build_search_index = false
generate_feeds = true
feed_filenames = ["atom.xml"]

taxonomies = [
  {name = "categories", feed = true, paginate_by = 12},
  {name = "tags", feed = true, paginate_by = 12},
]
theme = "elysia"

[slugify]
paths = "on"
taxonomies = "off"   # 保留中文分类/标签原文，不过度转写
anchors = "on"
```

> `taxonomies="off"` 为中文站关键，否则 `技术加油站` 会被转写导致 404 与统计丢失。

## Markdown

```toml
[markdown]
render_emoji = true
github_alerts = true      # > [!NOTE] 等
bottom_footnotes = true

[markdown.highlighting]
theme = "catppuccin-mocha"
style = "class"           # 生成 giallo.css 的 class 模式，配合 style.css 覆写字符串色等
```

`style="class"` 会在 `public/giallo.css` 生成 `.z-*` 语法色，主题再按亮/暗覆写（见 05 章）。

## Extra — 站点身份

```toml
[extra]
avatar = "/avatar.jpeg"
avatar_alt = "Elysia"
site_motto = "不修来世不修仙 且留大道在人间"
welcome = """
> **你好，欢迎来到 Elysia！**
>
> 这里记录思考、分享知识，愿阅读成为一种享受。
"""
footer = "© 2026 Elysia · 由 [Zola](https://www.getzola.org) 驱动"
```

`welcome` 支持完整 Markdown，会渲染在侧边栏“年度进度条”下方。

## 导航与社交

```toml
# 仅维护一套菜单，显示名称通过 Zola translations 翻译（无需按 lang 复制两份）
[[extra.menus]]
name_key = "menu_blog"
url = "/"
icon = "✍️"

[[extra.menus]]
name_key = "menu_resume"
url = "/resume/"
icon = "📄"

# 默认语言文案
[translations]
menu_blog = "博客"
menu_resume = "简历"

# 其他语言
[languages.en.translations]
menu_blog = "Blog"
menu_resume = "Resume"

[[extra.socials]]
name = "GitHub"
url = "https://github.com"
icon = "github"   # 内置 github/rss/mail，其他可直接用 emoji/字符
```

- `menus` 仅一套 `[[extra.menus]]`（`name_key` 为翻译 key，`url` 保持与语言无关如 `/wiki/`，模板自动按当前语言加前缀）
- `name_key` 对应 `[translations]`（默认语言）与 `[languages.<code>.translations]` 中的键；增删菜单只需改一处并同步两处翻译
- 模板通过 `trans(key=item.name_key, lang=cur_lang)` 渲染
- `socials` 仅 `github/rss/mail` 有内置 SVG，其余会按 `icon` 原样渲染

## 注入与样式

```toml
[extra.inject]
head = [
  { rel = "stylesheet", href = "https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css" },
  { rel = "stylesheet", href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" },
]

[extra.style]
default_theme = "auto"          # auto | light | dark
default_palette = "default"     # default | lime | orange | violet

[extra.style.fonts]
root_size = "16px"
body_size = "16px"
code_block_size = "16px"
body_family = ["LXGW WenKai Screen", "Inter", "system-ui", "sans-serif"]
code_block_family = ["JetBrains Mono", "ui-monospace", "monospace"]
```

`body_family` 会注入 `:root --font-body`，代码块同理。留空则回退系统栈。

## 搜索 Algolia

```toml
[extra.algolia]
enable = true
app_id = "CCI6NCGAK0"
api_key = "b2aa1cb7c425b70cd34bac3137a2156f"  # search-only
index_name = "jhlzloveio"
hits_per_page = 8
placeholder = "搜索文章..."
show_powered_by = true
```

两种同步方式：

| 方式 | 操作 |
| --- | --- |
| 手动 | Algolia Dashboard → 手动推送 `public` 的索引 JSON |
| 自动 | 配置爬虫每周抓取 `sitemap.xml`（推荐） |

侧边栏 `/` 快捷聚焦，`search/_index.md` 为独立搜索页。

## 评论统一开关

```toml
[extra.comments]
enable = true
provider = "giscus"   # giscus | artalk | waline | none
comment_title = "欢迎评论 — 留下你的想法"

[extra.giscus]
repo = "user/repo"
repo_id = ""
category = "General"
category_id = ""
mapping = "pathname"
# ... 其他 giscus 官方字段

[extra.artalk]
server = "https://artalk.example.com"

[extra.waline]
serverURL = "https://waline.example.com"
```

`provider` 为唯一开关，`enable=false` 全站关闭；单篇可用 `extra.comments=false` 关闭。

## 功能开关

```toml
[extra.features]
year_progress = true
toc = true
code_copy = true
code_line_numbers = true
paginate_by = 5
show_reading_time = true
welcome = true
```

- `year_progress`：侧边栏年度进度条
- `toc`：文章右侧目录（`##` 起）
- `code_line_numbers`：全局行号开关，`data-code-line-numbers` 控制

## 文章过期提示

```toml
[extra.article_expiry]
enable = true
days = 90

# 文案通过 Zola translations 管理（key 为 article_expiry），支持占位符 {date} {days} {diff}
[translations]
article_expiry = "本文最后更新于 {date}，已超过 {days} 天未更新，内容可能已过时，请注意甄别。"

[languages.en.translations]
article_expiry = "This article was last updated on {date} and has not been updated for over {days} days. The content may be outdated, please verify the information."

# 单篇覆盖
# +++
# [extra]
# expiry = false
# expiry_days = 60
# expiry_text = "自定义文案 {date} {days} {diff}"
# +++
```

- 模板通过 `trans(key="article_expiry", lang=cur_lang)` 获取当前语言文案
- 占位符 `{date} {days} {diff}` 会在构建期与前端 `main.js` 分别渲染（前端动态计算 `diff`）

## KaTeX

```toml
[extra.katex]
enable = true
# css_url / js_url / auto_render_url 可自定义 CDN
```

正文即可使用 `$E=mc^2$` 与 `$$\\int_0^\\infty$$`。

## 多语言

```toml
default_language = "zh"

# 默认语言的菜单文案（与 extra.menus 的 name_key 对应）
[translations]
menu_blog = "博客"
menu_wiki = "Wiki"
menu_archive = "归档"
menu_categories = "分类"
menu_tags = "标签"
menu_heatmap = "热力图"
menu_resume = "简历"
menu_friends = "友链"
menu_links = "工具集"

[languages.en]
title = "Elysia EN"
taxonomies = [{name="categories",feed=true},{name="tags",feed=true}]

[languages.en.translations]
menu_blog = "Blog"
menu_wiki = "Wiki"
menu_archive = "Archive"
menu_categories = "Categories"
menu_tags = "Tags"
menu_heatmap = "Heatmap"
menu_resume = "Resume"
menu_friends = "Friends"
menu_links = "Tools"
```

- 模板通过 `trans(key=item.name_key, lang=cur_lang)` 取当前语言名称，无需 `i18n_map` 或 `lang` 字段过滤
- URL 自动按 `cur_lang != default_language` 加前缀（如 `/en/wiki/`），已带前缀不重复
- 侧边栏地球图标自动出现语言切换（基于 `config.languages`）
- 自定义 Section（如 `archive`/`heatmap`/`friends`/`links`/`search`/`resume`）需为每种语言创建对应的 `content/<section>/_index.<lang>.md`（或 `resume.<lang>.md`），否则对应语言下会 404（`archive` 已因此修复）

## Front Matter 速查

```toml
+++
title = "示例"
date = 2026-03-03
weight = 3
description = "摘要"
[taxonomies]
categories = ["技术加油站"]
tags = ["zola", "主题"]
[extra]
style = "blog"          # blog | wiki | resume
sticky = true           # 置顶（别名 top/pinned）
encrypted = true
password = "1234"
password_hint = "提示"
series = "elysia-guide" # 系列聚合
expiry = false
+++
```

> 特别注意：`categories/tags` 必须在 `[taxonomies]` 下，且字符串加引号，否则中文会被忽略导致统计为 0。

## 调色盘

| 值 | 含义 | 亮色 `--accent` | 暗色 |
| --- | --- | --- | --- |
| `default` | 素雅黑 | `#18181b` | `#fafafa` |
| `lime` | 鹅黄绿 | `#5a7f2a` | `#8ab64a` |
| `orange` | 活力橙 | `#ea580c` | `#fb923c` |
| `violet` | 梦幻紫 | `#7c3aed` | `#a78bfa` |

`data-palette` 会与 `data-theme` 组合，选中色与代码字符串色已按对比度优化。

> 下一章将把本站点推至 GitHub Pages，并演示如何新增 `resume/business` 等独立模板。

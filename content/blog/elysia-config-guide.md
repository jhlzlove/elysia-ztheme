+++
title = "Elysia 主题配置指南"
date = 2026-08-25
description = "从零开始配置 Elysia：站点信息、导航、字体、配色、评论与搜索一站式指南"
[taxonomies]
categories = ["GUIDE"]
tags = ["zola", "elysia", "config"]

[extra]
sticky = false
+++

> **阅读是一种享受** — 本文以 `zola.toml` 为线索，带你完整过一遍 Elysia 主题的各项配置，复制即用。

<!-- more -->

## 1. 前置准备

Elysia 是一个现代简洁的 [Zola](https://www.getzola.org) 主题，要求 Zola **0.23+**（使用 Components API）。将主题放入 `themes/elysia`，并在站点根目录的 `zola.toml` 中启用：

```toml
base_url = "https://example.com"
title = "诗酒趁年华"
default_language = "zh"

taxonomies = [
    {name = "categories", feed = true, paginate_by = 12, paginate_path = "page"},
    {name = "tags", feed = true, paginate_by = 12, paginate_path = "page"},
]

theme = "elysia"

[markdown]
render_emoji = true
github_alerts = true
bottom_footnotes = true
```

> [!TIP]
> 分类法（categories / tags）建议保留 `feed = true`，主题会自动为分类和标签页生成订阅源。

## 2. 站点身份

首页头像、格言与欢迎语都集中在 `[extra]` 下：

```toml,name=blog/zola.toml
[extra]
avatar = "/avatar.jpeg"          # 头像，放 static/ 目录
avatar_alt = "Elysia"
site_motto = "不修来世不修仙 且留大道在人间"

# 欢迎语，支持 Markdown
welcome = """
> **你好，欢迎来到 Elysia！**
>
> 这里记录思考、分享知识，愿阅读成为一种享受。
"""

# 页脚，支持 Markdown 与链接
footer = "© 2026 Elysia · 由 [Zola](https://www.getzola.org) 驱动 · 主题 [Elysia](https://github.com/)"
```

{% <note title="提示"> %}
`welcome` 与 `footer` 均支持完整的 Markdown 语法，可以放引用、链接甚至行内代码。
{% </note> %}

## 3. 导航菜单

顶部导航按钮通过 `[[extra.menus]]` 逐项添加，桌面端每行最多 4 个、超出自动换行；`icon` 可填 emoji、SVG 名称或图片 URL：

```toml
[[extra.menus]]
name = "博客"
url = "/"
icon = "✍️"

[[extra.menus]]
name = "Wiki"
url = "/wiki/"
icon = "📚"

[[extra.menus]]
name = "归档"
url = "/archive/"
icon = "🗂️"
```

底部社交图标同理，使用 `[[extra.socials]]`：

```toml
[[extra.socials]]
name = "GitHub"
url = "https://github.com"
icon = "github"

[[extra.socials]]
name = "RSS"
url = "/atom.xml"
icon = "rss"
```

内置图标名包括 `github`、`rss`、`mail` 等，也可以直接给 URL。

## 4. 字体

```toml
[extra.fonts]
body_name = "LXGW WenKai Screen"
body_url = "https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css"
body_size = "16px"
body_size_small = "15px"
code_name = "JetBrains Mono"
code_url = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
code_size = "16px"
article_size = "16px"
toc_size = "13.5px"
```

- `body_*` 控制全局正文字体，`url` 留空则使用系统字体
- `article_size` 单独控制文章页字号，`toc_size` 控制目录字号
- 尺寸支持任意 CSS 长度单位：`px`、`rem`、`em` 均可

## 5. 配色与模式

```toml
[extra.style]
default_theme = "auto"      # "auto" | "light" | "dark"
default_palette = "default" # "default" | "lime" | "orange" | "violet"
```

亮暗模式默认跟随系统并持久化到 `localStorage`；四套调色盘会联动强调色 `--accent`，贯穿按钮、目录高亮、note 组件等所有元素。

## 6. 评论系统

评论在 `[extra.comments]` 统一开关，`provider` 三选一：

```toml
[extra.comments]
enable = true
provider = "giscus"   # "giscus" | "artalk" | "waline" | "none"
comment_title = "欢迎评论 — 留下你的想法"
```

以 Giscus 为例，从 [giscus.app](https://giscus.app) 生成参数后填入：

```toml
[extra.giscus]
repo = "your-name/your-repo"
repo_id = "R_kgDOxxxxx"
category = "Announcements"
category_id = "DIC_kwDOxxxxx"
mapping = "pathname"
reactions_enabled = "1"
input_position = "top"
theme = "preferred_color_scheme"
lang = "zh-CN"
loading = "lazy"
```

自托管用户可选 Artalk 或 Waline，只需填好对应小节的 `server` / `serverURL` 即可切换。

## 7. Algolia 搜索

```toml
[extra.algolia]
enable = true
app_id = "你的 APP ID"
api_key = "search-only API key"   # 只读 key，勿放 admin key
index_name = "elysia"
hits_per_page = 8
placeholder = "搜索文章..."
show_powered_by = true
```

> [!WARNING]
> `api_key` 必须是 Algolia 后台的 **Search-only API Key**，它本身设计为公开，但绝不要把 Admin API Key 写进配置。

## 8. 功能开关

```toml
[extra.features]
year_progress = true        # 年度进度条
toc = true                  # 文章目录
code_copy = true            # 代码复制按钮
code_line_numbers = true    # 代码行号
paginate_by = 5             # 列表每页篇数
show_reading_time = true    # 显示阅读时长
```

## 9. 数学公式

```toml
[extra.katex]
enable = true   # 启用后 $...$ 与 $$...$$ 自动渲染
```

启用后主题按需加载 KaTeX CDN 资源，也支持 `css_url` / `js_url` 自定义镜像。

## 10. 多语言

为英文读者提供翻译时，声明语言并建立成对的内容文件：

```toml
[languages.en]
title = "Elysia EN"
generate_feeds = true
taxonomies = [
    {name = "categories", feed = true},
    {name = "tags", feed = true},
]

[slugify]
paths = "on"
taxonomies = "on"
anchors = "on"
```

内容约定：中文文章 `content/blog/foo.md`，英文版同名加 `.en` 后缀即 `content/blog/foo.en.md`。

---

## 结语

以上就是 Elysia 的全部核心配置：**身份 → 导航 → 字体 → 配色 → 评论 → 搜索 → 功能**。改完 `zola.toml` 后运行 `zola serve` 即可实时预览，愿 **阅读是一种享受**。

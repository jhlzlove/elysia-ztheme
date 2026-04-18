# Stellar for Zola

一个受 [Hexo Stellar](https://github.com/xaoxuu/hexo-theme-stellar) 启发的 [Zola](https://www.getzola.org/) 静态博客主题，简洁优雅，开箱即用。

---

## 功能特性

### 页面布局
- **侧边栏**：支持 Logo、站点标题、社交链接、自定义小部件，可设置居左或居右显示
- **顶部导航**：移动端汉堡菜单，自动收起
- **页脚**：支持自定义内容（Markdown / HTML），内置占位符 `{author}`、`{year}`、`{title}`
- **回到顶部**：滚动超过 300px 自动显示

### 内容类型
- **博客文章**：支持分类（categories）与标签（tags），支持分页、封面图、上一篇/下一篇导航
- **Wiki**：支持多项目的 Wiki 文档区块，层级结构清晰
- **关于页**：独立的个人介绍页面
- **友链页**：专属友情链接展示页面
- **归档页**：按年份归档所有文章

### 文章功能
- **封面图**：front matter 中设置 `extra.cover`，支持本地路径和外部 URL，首页/列表页展示
- **版权信息**：文章底部自动显示版权声明，可配置协议名称与链接
- **上一篇/下一篇**：版权信息下方自动渲染相邻文章导航
- **目录（TOC）**：侧边栏自动生成，支持滚动高亮，可配置显示层级
- **置顶**：front matter 设置 `extra.pinned = true`，列表页显示丝带角标
- **评论**：支持 Giscus 评论系统

### Shortcode 组件

| Shortcode | 说明 |
|-----------|------|
| `note` | 提示块，支持 `info`、`success`、`warning`、`danger`、`caution`、`important` 类型及自定义标题 |
| `link` | 链接卡片，支持图标、描述；未提供元数据时自动调用 API 获取 |
| `links` | 链接卡片网格，从 `data/links.yaml` 按分组读取数据 |
| `friends` | 友链卡片，从 `data/friends.yml` 按分组读取数据 |
| `image` | 图片展示，支持自定义宽度与内边距 |
| `poetry` | 诗词排版块，支持标题与作者字段 |
| `tabs` | 选项卡容器，支持多 tab 切换 |
| `video` | 视频嵌入，支持本地视频、Bilibili、YouTube |

### Markdown 增强
- **代码高亮**：基于 Zola 内置高亮（Giallo），支持亮色/暗色主题自动切换、行号、语言标签、一键复制
- **GitHub Alert 语法**：支持 `[!NOTE]`、`[!TIP]`、`[!WARNING]`、`[!CAUTION]`、`[!IMPORTANT]`、`[!DANGER]`、`[!SUCCESS]`
- **URL 自动链接**：正文中的纯文本 URL 自动转为可点击链接

### 个性化配置
- **字体**：可分别配置正文字体、代码字体及字号
- **社交链接**：支持 GitHub、Bilibili、Twitter/X、Email、RSS 及自定义图标
- **外部资源注入**：支持在 `<head>` 中注入自定义 `<link>` 标签（如字体、图标库）
- **链接元数据 API**：`link` shortcode 未提供 `title`/`icon`/`desc` 时，自动调用配置的 API 获取网页元数据
- **侧边栏小部件**：支持自定义 Markdown / HTML 内容，内置年度进度条

---

## 快速开始

### 1. 安装主题

将本仓库克隆或复制到你的 Zola 项目的 `themes/` 目录下：

```bash
git clone https://github.com/your-repo/zola-theme themes/elysia
```

在 `config.toml` 中指定主题：

```toml
theme = "elysia"
```

### 2. 基础配置

参考以下 `config.toml` 配置示例：

```toml
base_url = "https://example.com"
title = "我的博客"
description = "博客描述"
author = "作者名"
default_language = "zh"
compile_sass = false
generate_feeds = true
feed_filenames = ["atom.xml"]

taxonomies = [
    { name = "categories", feed = false, render = false },
    { name = "tags", feed = false, render = false },
]

[markdown]
render_emoji = true

[markdown.highlighting]
light_theme = "github-light"
dark_theme = "github-dark"
style = "class"
line_numbers = true
error_on_missing_language = false

[extra]
# 导航菜单
menu = [
    { name = "博客", url = "/post/" },
    { name = "关于", url = "/about/" },
]

# 社交链接（icon 支持：github / bilibili / twitter / x / email / mail / rss）
social = [
    { name = "GitHub", url = "https://github.com/yourname", icon = "github" },
    { name = "RSS", url = "/atom.xml", icon = "rss" },
]

# 侧边栏（position: "left" 或 "right"）
sidebar = { logo = "/avatar.png", position = "left" }

# 文章摘要字数
truncate_at = 100

# 目录显示层级（默认 4）
toc_depth = 4

# 注入外部链接（字体、图标库等）
[extra.inject]
links = [
    { rel = "stylesheet", href = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC" }
]

# 字体配置
[extra.font]
body = "Noto Sans SC"
code = "Fira Code"
body_size = "18px"
code_size = "16px"

# link shortcode 元数据 API
[extra.link]
meta_api = "https://your-api-endpoint?url={url}"

# 自定义 footer（支持 Markdown / HTML，占位符：{author} {year} {title}）
[extra.footer]
content = """
© {year} [{author}](/) · 本站由 Zola 驱动
"""

# 侧边栏自定义小部件（支持 Markdown / HTML）
[extra.sidebar_widget]
content = """
👋 欢迎来到 **{title}**！
"""

# 版权协议
[extra.copyright]
enable = true
license_name = "CC BY-NC-SA 4.0"
license_url = "https://creativecommons.org/licenses/by-nc-sa/4.0/"

# 评论系统（目前支持 giscus）
[extra.comment]
enable = true
type = "giscus"

[extra.comment.giscus]
repo = "yourname/yourrepo"
repo_id = "R_xxxxxxxx"
category = "General"
category_id = "DIC_xxxxxxxx"
mapping = "pathname"
strict = "0"
reactions_enabled = "1"
emit_metadata = "0"
input_position = "bottom"
theme = "preferred_color_scheme"
lang = "zh-CN"
```

### 3. 数据文件

**`data/links.yaml`** — `links` shortcode 数据：

```yaml
group_name:
  - title: 示例项目
    url: https://example.com
    icon: https://example.com/favicon.ico
    cover: /images/cover.png
    desc: 项目描述
```

**`data/friends.yml`** — `friends` shortcode 数据：

```yaml
group_name:
  - name: 朋友昵称
    url: https://friend.example.com
    icon: https://friend.example.com/avatar.png
    desc: 一句话介绍
```

**`data/default.yaml`** — 默认占位图配置：

```yaml
avatar:
  - /images/default_avatar.png
cover:
  - /images/default_cover.png
```

### 4. 文章 Front Matter

```toml
+++
title = "文章标题"
date = 2024-01-01

[extra]
cover = "https://example.com/cover.jpg"  # 封面图（URL 或本地路径）
pinned = true                             # 置顶

[taxonomies]
categories = ["技术"]
tags = ["Zola", "主题"]
+++
```

---

## Shortcode 用法示例

### note

```
{% note() %}
这是一条默认 info 类型的提示。
{% end %}

{% note(type="warning", title="注意") %}
请注意这里有一些需要留意的内容。
{% end %}

{% note(type="danger", title="危险") %}
此操作不可逆，请谨慎！
{% end %}
```

支持类型：`info` / `tip` / `success` / `warning` / `danger` / `caution` / `important`

---

### link

```
{{/* 完整参数 */}}
{{ link(href="https://www.getzola.org", title="Zola 官网", icon="https://www.getzola.org/favicon.ico", desc="A fast static site generator") }}

{{/* 仅提供 href，自动调用 API 获取元数据 */}}
{{ link(href="https://www.rust-lang.org") }}
```

---

### links

```
{{ links(group="github") }}
```

---

### friends

```
{{ friends(group="group_name") }}
```

---

### image

```
{{ image(src="/avatar.png") }}
{{ image(src="/avatar.png", width="120px", padding="16px") }}
```

---

### poetry

```
{% poetry(title="静夜思", author="李白") %}
床前明月光，疑是地上霜。

举头望明月，低头思故乡。
{% end %}
```

---

### tabs

```
{% tabs() %}
<!-- tab macOS -->
brew install zola
<!-- tab Linux -->
snap install zola --edge
<!-- tab Windows -->
scoop install zola
{% end %}
```

---

### video

```
{{/* Bilibili */}}
{{ video(bilibili="BV1GP4y1d729") }}

{{/* YouTube */}}
{{ video(youtube="LB8KwiiUGy0") }}

{{/* 本地视频 */}}
{{ video(src="/videos/demo.mp4", width="720px", caption="演示视频") }}
```

---

## 许可证

MIT License

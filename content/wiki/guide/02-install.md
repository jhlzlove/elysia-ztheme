+++
title = "02 · 快速安装"
date = 2026-03-02
weight = 2
description = "三步完成本地安装、目录解读与常见问题排查。"
+++

## 环境要求

| 依赖 | 版本 | 说明 |
| --- | --- | --- |
| Zola | `>=0.23.4` | 模板使用 `components` 语法，需 0.23+ |
| Git | 任意 | 用于克隆与子模块 |
| 现代浏览器 | - | 调色盘使用 `color-mix`，低版本回退至纯色 |

> 本仓库自带 `zola.exe` 参考路径 `D:\software\develop\tools\data\installs\zola\0.23.4\zola.exe`，你也可自行安装。

检查版本：

```bash
zola --version
# zola 0.23.4
```

## 三步启动

```bash
# 1. 克隆（含主题）
git clone https://github.com/yourname/elysia-ztheme.git
cd elysia-ztheme

# 2. 以主题方式运行（已配置 theme = "elysia"）
zola serve
# 浏览器打开 http://127.0.0.1:1111

# 构建产物
zola build
# 产物在 ./public

# 校验（可选）
zola check
```

{% <note title="作为 git 子模块使用" color="yellow"> %}
```bash
git init my-blog && cd my-blog
git submodule add https://github.com/yourname/elysia.git themes/elysia
cp themes/elysia/zola.toml ./zola.toml
# 修改 base_url、title 后
zola serve
```
`zola.toml` 中保持 `theme = "elysia"` 即可。
{% </note> %}

## 目录结构详解

```text
.
├── config.toml|zola.toml      # 站点配置（本项目为 zola.toml）
├── content/
│   ├── _index.md              # 首页：transparent=true，聚合 blog
│   ├── blog/
│   │   ├── _index.md          # transparent=true，blog 入口
│   │   ├── _index.en.md       # 英文首页（可选）
│   │   ├── content-components.md # 组件手册示例
│   │   └── skill/             # 任意子目录，无需手动建分类
│   ├── wiki/
│   │   ├── _index.md
│   │   └── guide/             # 本系列
│   ├── resume.md              # 简历独立页 template="resume.html"
│   ├── archive/_index.md      # 归档占位
│   ├── heatmap/_index.md
│   ├── search/_index.md
│   └── friends|links/_index.md
├── themes/elysia/
│   ├── templates/             # base/page/section/archive/taxonomy/resume
│   ├── static/css/style.css
│   ├── static/js/main.js
│   └── zola.toml              # 主题示例配置
├── static/                    # 站点级静态（avatar 等，会覆盖主题同名）
├── data/
│   ├── links.yaml
│   └── friends.yaml
└── public/                    # 构建产物，勿手工编辑
```

### `content/_index.md` 关键字段

```toml
+++
title = "诗酒趁年华"
transparent = true
paginate_by = 5            # 首页分页
+++
```

`transparent=true` 使 `blog/` 下文章直接出现在首页，无需在根目录建空列表。

### 主题覆盖优先级

`static/` 与 `content/` 均优先于 `themes/elysia/`。例如 `static/avatar.jpeg` 会覆盖主题默认头像。

## 校验与排错

| 命令 | 作用 |
| --- | --- |
| `zola check` | 校验内外链、模板语法 |
| `zola build --force` | 强制重建，清理 `public` 后再验证 |
| `zola serve --open` | 启动并自动打开浏览器 |
| `zola serve --port 1314 --interface 0.0.0.0` | 局域网预览 |

**常见问题**

| 现象 | 原因 | 解决 |
| --- | --- | --- |
| `Template not found: components.html` | Zola <0.23 | 升级至 0.23.4 |
| 分类/标签中文 404 | `slugify.taxonomies="on"` 会转写中文 | 已修正为 `"off"`，保持原字符 |
| `categories: [技术加油站]` 不生效 | YAML 需 `taxonomies.categories` | 见 03 章，统一用 `taxonomies:` 包裹并加引号 |
| `zola serve` 端口占用 | 1111 被占 | `zola serve --port 19191` |
| 中文文件名乱码 | Windows GBK | 保持 UTF-8，`zola.toml` 保存为 UTF-8 |

{% <tabs> %}
<!-- tab bash -->
```bash
zola check
zola build --force && ls public
zola serve --port 19191
```
<!-- tab powershell -->
```powershell
zola check
zola build --force; dir public
zola serve --port 19191
```
<!-- tab fish -->
```fish
zola check; and zola build
zola serve --port 19191
```
{% </tabs> %}

> 下一章将逐项拆解 `zola.toml` 的 `[extra]` 配置，含调色、字体、搜索、评论等。

{% <note title="下一步" color="green"> %}
`zola serve` 成功后，保持终端不关闭，直接编辑 `content/blog/_index.md` 或 `zola.toml`，浏览器会自动热重载。
{% </note> %}

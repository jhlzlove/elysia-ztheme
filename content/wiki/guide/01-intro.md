+++
title = "01 · 认识 Elysia"
date = 2026-03-01
weight = 1
description = "了解 Elysia 的设计哲学、核心能力与内容模型，为后续安装与配置打好基础。"
+++

欢迎来到 **Elysia 完全指南** 的第一章，本章不涉及命令，只帮你建立对主题的整体认知。

## 设计哲学

Elysia 追求三件事：**简洁、聚焦阅读、充分利用可视区**。

| 原则       | 落地                                                                                    |
| ---------- | --------------------------------------------------------------------------------------- |
| 内容优先   | 正文最大 720px 舒适行长，`1.75` 行高，侧边栏与目录为辅助，不抢主视觉                    |
| 克制装饰   | 无重阴影、无大面积色块，卡片仅在需要时出现（如收藏卡、好友卡），归档/列表为开放式分隔线 |
| 全端自适应 | `1600px → 360px` 流式栅格，平板保留侧边栏，手机抽屉折叠，不依赖任何 CSS 框架            |
| 可访问性   | 全键盘可达、`prefers-reduced-motion`、`forced-colors`、语义化标题与 `aria`              |

## 核心能力一览

| 模块                  | 说明                                                                       | 关键配置                                             |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------- |
| 博客 `blog`           | 列表/分页/无限滚动、`pinned` 置顶、加密文章、阅读时长                      | `extra.features.paginate_by`、`extra.article_expiry` |
| 知识库 `wiki`         | 目录即类型，自动系列导航与进度条，`extra.series` 聚合                      | `content/wiki/_index.md` 的 `extra.series`           |
| 归档/分类/标签/热力图 | 纯前端热力图（周一至周五），分类目录折叠，标签去重计数                     | `taxonomies`、` slugify.taxonomies="off"`            |
| 搜索                  | Algolia 双模式：手动推送 + 定时爬虫，`/search` 独立页                      | `extra.algolia`                                      |
| 评论                  | 三选一 `giscus/artalk/waline`，统一 `extra.comments.provider` 自动同步暗色 | `extra.giscus` 等                                    |
| 围栏代码              | 行号对齐、`hl_lines` 高亮、`linenos/name` 文件名、复制按钮                 | `markdown.highlighting`                              |
| 主题组件              | `note/video/audio/image/link/links/friends/poetry/tabs`                    | `templates/components.html`                          |
| 样式系统              | 亮/暗两档 + `default/lime/orange/violet` 四调色盘，`localStorage` 持久化   | `extra.style`                                        |
| 简历页                | 独立布局，无侧边栏/目录，`template="resume.html"`                          | `content/resume.md`                                  |

## 内容模型

```text
content/
  _index.md              # 站点首页（博客聚合）
  blog/                  # 博客：任意子目录，transparent=true 时自动归并
    _index.md
    skill/               # 技术、生活等可自由建目录
  wiki/
    _index.md
    guide/               # 本指南（系列）
    programming/         # 示例知识库，按目录即系列
  resume.md              # 简历独立页 template="resume.html" extra.style="resume"
  archive/_index.md      # 归档（自动聚合）
  categories/_index.md   # 分类（taxonomy）
  tags/_index.md
  heatmap/_index.md
  search/_index.md
  friends/_index.md      # 友链
  links/_index.md
```

> `transparent = true` 的 section 不生成自身列表页，其下文章自动归入父级，用于 `blog/skill` 这类细分却不想产生空目录页的场景。

## 多风格开关 `style`

Elysia 通过 `front matter` 实现多风格共存，未来可扩展商业主页等：

```toml
# 博客文章
[extra]
style = "blog"      # 默认

# 知识库
[extra]
style = "wiki"

# 简历（独立模板）
+++
title = "简历"
template = "resume.html"
[extra]
style = "resume"
+++

# 预留商业化
+++
title = "产品主页"
template = "business.html"
[extra]
style = "business"
+++
```

> [!NOTE]
> `style` 仅是约定字段，真正决定版式的仍是 `template`。`business` 需配合你自建的 `templates/business.html`。

## 本系列导航

| 章  | 主题                | 产出                           |
| --- | ------------------- | ------------------------------ |
| 01  | 认识 Elysia（本章） | 知道能做什么、不能做什么       |
| 02  | 快速安装            | 本地 `zola serve` 跑起来       |
| 03  | 配置详解            | `zola.toml` 每一项讲透         |
| 04  | 部署与进阶          | GitHub Pages 一键发布 + 自定义 |
| 05  | Markdown 与组件     | 可复制的写作手册               |

> 下一步建议直接打开 `02 · 快速安装`，3 条命令完成本地预览。

{% <note title="提示" color="blue"> %}

- 阅读时可随时切换顶栏调色盘与暗色，配置会实时保存。
- 若从 Hexo/Hugo 迁移，注意 `categories/tags` 需放在 `taxonomies.categories/tags` 下（见 03 章）。
  {% </note> %}

+++
title = "Wiki 入门 — 风格扩展示例"
date = 2026-02-20
[taxonomies]
categories = ["WIKI"]
tags = ["wiki", "style"]

[extra]
series = "wiki"
+++

演示 Wiki 风格如何通过 front matter 切换

<!--more-->

这是一篇使用 `extra.style = "wiki"` 的示例文章，展示未来支持多风格的扩展点。

> [!NOTE]
> `style` 字段可用于在 `page.html` 中切换不同的布局或配色，当前演示中仅添加一个 `data-page-style` 属性，供 CSS 扩展。

## Wiki 布局要点

- 左侧可扩展为文档目录树
- 右侧 TOC 依然可用
- 正文宽度可略宽，适合长文档

```md
+++
title = "我的 Wiki"
[extra]
style = "wiki"
+++
```

## 后续规划

- 商业主页风格：基于不同的模板文件（如 `templates/business.html`）
- 通过 front matter 的 `template` 字段或 `extra.style` 进行切换

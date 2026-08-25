+++
title = "03 · 配置详解"
date = 2026-03-03
weight = 3
[taxonomies]
categories = ["WIKI"]
tags = ["wiki", "series", "config"]

[extra]
series = "elysia-guide"
series_title = "Elysia 完全指南"
style = "wiki"
+++

## 核心配置

| 配置 | 说明 |
| --- | --- |
| `extra.menus` | 顶部横向按钮，自动换行 |
| `extra.fonts` | `body` / `code` 分别配置 `name` + `url` |
| `extra.algolia` | Algolia 搜索（支持手动推送与周更爬虫） |
| `extra.giscus` | 评论系统 |

## 示例

```toml
[extra.algolia]
enable = true
app_id = "YOUR_APP_ID"
api_key = "SEARCH_ONLY_KEY"
index_name = "elysia"

[[extra.menus]]
name = "博客"
url = "/"
icon = "✍️"
```

## 调色盘

支持 `default`（素雅黑）、`lime`（鹅黄绿）、`orange`（活力橙）、`violet`（梦幻紫），`data-palette` 切换。

> 最后一章将完成 GitHub Pages 部署与自定义扩展。

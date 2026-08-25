+++
title = "04 · 部署与进阶"
date = 2026-03-04
weight = 4
[taxonomies]
categories = ["WIKI"]
tags = ["wiki", "series", "deploy"]

[extra]
series = "elysia-guide"
series_title = "Elysia 完全指南"
style = "wiki"
+++

## 部署

已提供 `/.github/workflows/deploy.yml`，基于 `shalzz/zola-deploy-action`，推送 `main` 自动发布至 `pages` 分支。

## 进阶：多风格

通过 `front matter` 切换：

```md
+++
title = "产品主页"
template = "business.html"
[extra]
style = "business"
+++
```

`business` 模板可独立实现商业化落地页，与 `blog`/`wiki` 共存。

## 系列回顾

- 01 认识 → 02 安装 → 03 配置 → 04 部署
- 已掌握 Algolia 双模式、`links` 封面卡 vs `friends` 头像卡、热力图、围栏代码块等。

{% <poetry title="结语" author="Elysia"> %}
愿阅读成为享受，
愿记录成为习惯。
{% </poetry> %}

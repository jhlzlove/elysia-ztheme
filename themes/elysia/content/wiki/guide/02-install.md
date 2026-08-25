+++
title = "02 · 快速安装"
date = 2026-03-02
weight = 2
[taxonomies]
categories = ["WIKI"]
tags = ["wiki", "series", "install"]

[extra]
series = "elysia-guide"
series_title = "Elysia 完全指南"
style = "wiki"
+++

## 环境要求

- Zola `0.23.4`（`D:\software\develop\tools\data\installs\zola\0.23.4\zola.exe`）
- 原生 CSS/JS，无 SCSS/Tailwind

## 三步启动

```bash
# 1. 克隆
git clone https://example.com/elysia.git

# 2. 安装 Zola 0.23.4
# 3. 本地预览
zola serve
# 或校验
zola check
```

## 目录结构

```text
content/
  _index.md          # 首页
  blog/              # 博客
  wiki/guide/        # 本系列
  search/            # 搜索页
```

{% <tabs> %}
<!-- tab bash -->
```bash
zola check
zola build
```
<!-- tab powershell -->
```powershell
zola check
zola build
```
{% </tabs> %}

> 下一章将深入 `zola.toml` 的 `extra` 配置。

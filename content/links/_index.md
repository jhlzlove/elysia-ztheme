+++
title = "友链"
description = "朋友们"
template = "section.html"
+++

## 友链

下面展示通过 `data/links.yaml` 与 `{% raw %}{{ <friends /> }}{% endraw %}` 组件渲染的卡片。

### 来自 data/links.yaml 的 GitHub 组

{{ <links group="github" /> }}

### 来自 data/friends.yaml 的开发者组

{{ <friends group="developer" /> }}

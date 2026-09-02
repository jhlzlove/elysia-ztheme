+++
title = "05 · Markdown 与组件"
date = 2026-09-02
weight = 5
description = "掌握文章 Front Matter、Markdown 写法和 Elysia 内置组件（附写法与效果）。"
+++

本章示例可直接复制到文章中。组件使用 Zola 0.23+ 的 component 语法；每节先给写法，再给效果。

> [!tip]
> 在 md 文章中使用 {% raw %} `{{ ... }}` 或 `{% ... %}` {% endraw %} 时必须使用 `raw`、`endraw` 进行包裹，以避免被当前页执行，导致 zola 解析导致报错。

## 文章 Front Matter

最简文章：

```toml
+++
title = "我的第一篇文章"
date = 2026-03-10
description = "这是一段摘要"
+++
```

博客常用字段：

```toml
+++
title = "一篇文章"
date = 2026-03-10
updated = 2026-03-12
description = "列表页显示的摘要"
weight = 1

[taxonomies]
categories = ["技术"]
tags = ["zola", "博客"]

[extra]
sticky = true
+++
```

- `date`：排序与显示日期；`updated`：更新时间（用于过期提示）。
- `description`：列表摘要与页面描述；也可用正文 `<!-- more -->` 分隔。
- `weight`：Wiki 章节排序；`sticky` / `top` / `pinned` 置顶。
- 分类与标签必须写在 `[taxonomies]` 下。

加密文章：

```toml
+++
title = "私密文章"
[extra]
encrypted = true
password = "change-this-password"
password_hint = "请输入密码"
+++
```

不要把真实密码提交到公开仓库，前端加密仅作轻量保护。

## 基础 Markdown

**写法：**

```md
# 一级标题
## 二级标题

这是一段包含 **粗体**、*斜体*、~~删除线~~、`代码` 和 [链接](https://example.com) 的文字。

- 无序列表
- 另一项

1. 有序列表
2. 另一项

> 这是一段引用。

---

| 姓名 | 年龄 | 城市 |
| --- | --- | --- |
| Alice | 24 | 北京 |
| Bob | 30 | 上海 |
```

**效果：**

# 一级标题
## 二级标题

这是一段包含 **粗体**、*斜体*、~~删除线~~、`代码` 和 [链接](https://example.com) 的文字。

- 无序列表
- 另一项

1. 有序列表
2. 另一项

> 这是一段引用。

---

| 姓名 | 年龄 | 城市 |
| --- | --- | --- |
| Alice | 24 | 北京 |
| Bob | 30 | 上海 |

正文中的 Markdown 链接会自动显示链接图标，图片链接除外。

## 提示块、脚注和公式

**写法（GitHub Alerts）：**

```md
> [!NOTE]
> 这是普通提示。

> [!TIP]
> 这是一个技巧。

> [!WARNING]
> 这是警告。
```

**效果：**

> [!NOTE]
> 这是普通提示。

> [!TIP]
> 这是一个技巧。

> [!WARNING]
> 这是警告。

**写法（脚注）：**

```md
这句话有一个脚注[^source]。

[^source]: 脚注内容。
```

**效果：**

这句话有一个脚注[^source]。

[^source]: 脚注内容。

**写法（KaTeX，需 `extra.katex.enable = true`）：**

```md
行内公式：$E=mc^2$

$$
\int_0^\infty e^{-x}dx = 1
$$
```

**效果：**

行内公式：$E=mc^2$

$$
\int_0^\infty e^{-x}dx = 1
$$

配置：

```toml
[extra.katex]
enable = true
```

## 代码块

**写法：** 支持 `linenos` / `name` / `hl_lines`：

````md
```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
```
````

**效果：**

```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
```

行号由 `extra.features.code_line_numbers` 控制，复制按钮由脚本自动提供。

## 组件语法

行组件：

```jinja
{% raw %}{{ <component-name parameter="value" /> }}{% endraw %}
```

块组件：

```jinja
{% raw %}{% <component-name parameter="value"> %}{% endraw %}
内容
{% raw %}{% </component-name> %}{% endraw %}
```

参数均使用双引号。块组件内容支持完整 Markdown。

### note 提示块

**写法：**

{% raw %}
```jinja
{% <note title="提示" color="blue"> %}
这是一段提示内容。
{% </note> %}
{% <note title="成功" color="green"> %}...{% </note> %}
```
{% endraw %}

`color` 可选 `blue` / `green` / `yellow` / `orange` / `red` / `black`。

**效果：**

{% <note title="提示" color="blue"> %}
这是一段提示内容，`color="blue"` 为默认。
{% </note> %}

{% <note title="成功" color="green"> %}green{% </note> %}
{% <note title="警告" color="yellow"> %}yellow{% </note> %}
{% <note title="注意" color="orange"> %}orange{% </note> %}
{% <note title="危险" color="red"> %}red{% </note> %}
{% <note title="黑色" color="black"> %}black{% </note> %}

### video 视频

**写法：**

```jinja
{% raw %}{{ <video bilibili="BV1n8Q7B7Ekz" caption="B 站示例" /> }}{% endraw %}
{% raw %}{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}{% endraw %}
{% raw %}{{ <video src="/video/demo.mp4" caption="本地视频" /> }}{% endraw %}
```

参数：`bilibili` / `youtube` / `src` 三选一；`width` 宽度；`caption` 说明；`autoplay` 为 true 时自动播放。

**效果：**

{{ <video bilibili="BV1n8Q7B7Ekz" caption="B 站示例" autoplay="false" /> }}

### audio 音频

**写法：**

本地音频：

```jinja
{% raw %}{{ <audio src="/audio/demo.mp3" caption="远程音频" autoplay="true" /> }}{% endraw %}
```

网易云（`type` 支持 `single` / `album` / `playlist`）：

{% raw %}
```jinja
{{ <audio netease="1852892593" type="single" /> }}
{{ <audio netease="288635756" type="album" /> }}
{{ <audio netease="2246151876" type="playlist" /> }}
```
{% endraw %}

Spotify（`type` 支持 `single` / `album` / `playlist`，`single` 对应 `track`）：

{% raw %}
```jinja
{{ <audio spotify="3QQcmb87X6e10gdEXDx1ep" type="single" /> }}
{{ <audio spotify="3mlG9PR20AaeQQGA18PJ18" type="album" /> }}
{{ <audio spotify="6UEIDpoU9CJD0b0jg04kgP" type="playlist" /> }}
```
{% endraw %}

**效果（本地播放器）：**

{{ <audio src="https://www.kumeiwp.com/wj/531/2021/02/24/514624f352b5b765149dd19a279af7c6.mp3" caption="远程音频示例" autoplay="false" /> }}

**效果（网易云 single / album / playlist）：**

{{ <audio netease="1852892593" type="single" /> }}

{{ <audio netease="288635756" type="album" /> }}

{{ <audio netease="2246151876" type="playlist" /> }}

**效果（Spotify single / album / playlist）：**

{{ <audio spotify="3QQcmb87X6e10gdEXDx1ep" type="single" /> }}

{{ <audio spotify="3mlG9PR20AaeQQGA18PJ18" type="album" /> }}

{{ <audio spotify="6UEIDpoU9CJD0b0jg04kgP" type="playlist" /> }}

### image 图片

**写法：**

{% raw %}
```jinja
{{ <image src="https://picsum.photos/seed/elysia/800/300" alt="示例图片" width="100%" caption="图片说明" /> }}
```
{% endraw %}

图片文件建议放在站点的 `static/` 目录。

**效果：**

{{ <image src="https://picsum.photos/seed/elysia/800/300" alt="示例图片" width="100%" caption="图片说明" /> }}

### link 单个链接卡片

**写法：**

{% raw %}
```jinja
{{ <link href="https://www.getzola.org/" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Zola 官方网站" /> }}
```
{% endraw %}

**效果：**

{{ <link href="https://www.getzola.org/" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Zola 官方网站" /> }}

### links 链接集合

在 `data/links.yaml` 中准备数据：

```yaml
github:
  - title: Zola
    url: https://github.com/getzola/zola
    icon: https://www.getzola.org/icons/apple-touch-icon.png
    desc: Zola 官方仓库
```

**写法：**

{% raw %}
```jinja
{{ <links group="github" /> }}
```
{% endraw %}

**效果：**

{{ <links group="github" /> }}

### friends 友链

`friends` 默认读取 `data/friends.yaml`，也支持复用链接数据。

**写法：**

{% raw %}
```jinja
{{ <friends group="developer" /> }}
{{ <friends /> }}
```
{% endraw %}

**效果（developer 分组）：**

{{ <friends group="developer" /> }}

### poetry 诗词

**写法：**
{% raw %}
```jinja
{% <poetry title="春晓" author="孟浩然"> %}
春眠不觉晓，处处闻啼鸟。

夜来风雨声，花落知多少。
{% </poetry> %}
```
{% endraw %}

**效果：**

{% <poetry title="春晓" author="孟浩然"> %}
春眠不觉晓，处处闻啼鸟。

夜来风雨声，花落知多少。
{% </poetry> %}

### tabs 多标签页

**写法：**

{% raw %}
````jinja
{% <tabs> %}
<!-- tab bash -->

```bash
echo "hello"
```

<!-- tab powershell -->
```powershell
Write-Output "hello"
```

{% </tabs> %}
````
{% endraw %}

`<!-- tab 名称 -->` 为面板分隔符，标签名会自动小写显示。

**效果：**

{% <tabs> %}
<!-- tab bash -->
```bash
echo "hello"
```
<!-- tab powershell -->
```powershell
Write-Output "hello"
```
<!-- tab javascript -->
```javascript
console.log("hello")
```
{% </tabs> %}

## Wiki 章节

创建目录和 `_index.md`：

```text
content/wiki/my-guide/
├── _index.md
├── 01-start.md
└── 02-config.md
```

`_index.md`：

```toml
+++
title = "我的指南"
sort_by = "weight"
template = "section.html"
page_template = "page.html"
+++
```

章节文章使用 `weight` 排序；Wiki 导航来自目录结构。

## 自定义样式

在站点根目录创建 `static/css/custom.css`，然后注入：

```toml
[extra.inject]
head = [
  { rel = "stylesheet", href = "/css/custom.css" },
]
```

示例：

```css
:root {
  --accent: #0ea5e9;
}
```

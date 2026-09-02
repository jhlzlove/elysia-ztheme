+++
title = "05 · Markdown 与组件"
date = 2026-03-05
weight = 5
description = "可复制的 Markdown 写作手册与 Elysia 主题组件大全。"
+++

本章为**写作时直接复制**的手册，左侧为写法，右侧为效果。所有示例已在 `zola build` 下验证。

> 本章本身即为组件演示，右侧目录可快速跳转。

## 基础 Markdown

### 标题与段落

```md
# 一级
## 二级
### 三级
#### 四级

段落支持 **粗体**、*斜体*、~~删除线~~、`行内代码`、[链接](https://example.com)。
```

### 列表与任务

```md
- 无序一项
- 无序二项
  - 嵌套

1. 有序一
2. 有序二

- [x] 已完成
- [ ] 未完成
```

- [x] 已完成
- [ ] 未完成

### 引用与分割线

```md
> 引用：这里是一段引用。
> 第二行。

---

> [!NOTE]
> GitHub Alerts 也会渲染为提示块（见下）。
```

> 引用：这里是一段引用。
> 第二行。

---

### 表格

```md
| 姓名 | 年龄 | 城市 |
| --- | --- | --- |
| Alice | 24 | 北京 |
| Bob | 30 | 上海 |
```

| 姓名 | 年龄 | 城市 |
| --- | --- | --- |
| Alice | 24 | 北京 |
| Bob | 30 | 上海 |

### 脚注与 Emoji

```md
一句带脚注的话[^1]。

[^1]: 脚注内容，`bottom_footnotes=true` 会沉底。

:smile: :tada: 需 `render_emoji=true`
```

一句带脚注的话[^1]。

[^1]: 脚注内容，`bottom_footnotes=true` 会沉底。

### KaTeX 数学

`extra.katex.enable=true` 后：

```md
行内 $E=mc^2$ ，块级：

$$
\int_0^\infty e^{-x} dx = 1
$$

\[ a^2 + b^2 = c^2 \]
```

行内 $E=mc^2$ ，块级：

$$
\int_0^\infty e^{-x} dx = 1
$$

### GitHub Alerts

```md
> [!NOTE]
> 蓝色提示

> [!TIP]
> 绿色技巧

> [!IMPORTANT]
> 紫色重要

> [!WARNING]
> 黄色警告

> [!CAUTION]
> 红色危险
```

> [!NOTE]
> 蓝色提示

> [!TIP]
> 绿色技巧

> [!IMPORTANT]
> 紫色重要

> [!WARNING]
> 黄色警告

> [!CAUTION]
> 红色危险

## 围栏代码

支持 `linenos` / `name` / `hl_lines`，行号与高亮已对齐：

````md
```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
function greet(u: User): string {
  return `Hi, ${u.name}`;
}
```
````

```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
function greet(u: User): string {
  return `Hi, ${u.name}`;
}
```

> 字符串色已优化：亮色琥珀 `#a16207`、暗色麦黄 `#fbbf24`，其余 token 按对比度加深。

## 主题组件

组件均为 Zola 0.23 的 component 语法（`{% raw %}{% component %}{% endraw %}`），**主题目录内 `themes/elysia/content` 不需更新，仅根目录 `content` 示例如下**。

### note 提示块

{% raw %}
```jinja
{% <note title="提示" color="blue"> %}
默认 blue，可选 green/yellow/orange/red/black
{% </note> %}

{% <note title="成功" color="green"> %}green{% </note> %}
```
{% endraw %}

{% <note title="提示" color="blue"> %}
默认 blue，可选 green/yellow/orange/red/black
{% </note> %}

{% <note title="成功" color="green"> %}green{% </note> %}
{% <note title="警告" color="yellow"> %}yellow{% </note> %}
{% <note title="注意" color="orange"> %}orange{% </note> %}
{% <note title="危险" color="red"> %}red{% </note> %}
{% <note title="黑色" color="black"> %}black{% </note> %}

### video 视频

{% raw %}
```jinja
{{ <video bilibili="BV1n8Q7B7Ekz" caption="B站示例" /> }}
{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}
{{ <video src="/video/demo.mp4" caption="本地" /> }}
```
{% endraw %}

{{ <video bilibili="BV1n8Q7B7Ekz" caption="B站示例" /> }}

| 参数 | 说明 |
| --- | --- |
| `bilibili` | BV 号 |
| `youtube` | YouTube ID |
| `src` | 本地/外链 `mp4` |
| `width` | 容器宽度，默认 `100%` |
| `caption` | 底部说明 |
| `autoplay` | 非空即尝试自动播放（受浏览器限制） |

### audio 音频

本地极简播放器（进度条/音量/互斥）：

{% raw %}
```jinja
{{ <audio src="https://www.kumeiwp.com/wj/531/2021/02/24/514624f352b5b765149dd19a279af7c6.mp3" /> }}
{{ <audio src="/audio/demo.mp3" caption="我的录音" /> }}
```
{% endraw %}

网易云（`type=single/album/playlist`）：

{% raw %}
```jinja
{{ <audio netease="1852892593" type="single" /> }}
{{ <audio netease="6757065893" type="playlist" /> }}
```
{% endraw %}

Spotify（`type=single/album/playlist`，`single` 为 `track`）：

{% raw %}
```jinja
{{ <audio spotify="3QQcmb87X6e10gdEXDx1ep" type="single" /> }}
{{ <audio spotify="6UEIDpoU9CJD0b0jg04kgP" type="playlist" /> }}
```
{% endraw %}

> 单曲外框 `86×66` 已修正为 `height=66` 避免截半，歌单 `450×430`。

### image 图片

{% raw %}
```jinja
{{ <image src="https://picsum.photos/seed/elysia/800/300" width="100%" caption="占位图" /> }}
```
{% endraw %}

{{ <image src="https://picsum.photos/seed/elysia/800/300" width="100%" caption="占位图" /> }}

### link / links / friends

**单卡片**

{% raw %}
```jinja
{{ <link href="https://github.com/getzola/zola" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Zola 官方仓库" /> }}
```
{% endraw %}

{{ <link href="https://github.com/getzola/zola" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Zola 官方仓库" /> }}

**按组渲染**（`data/links.yaml`）：

```yaml
github:
  - title: Zola
    url: https://github.com/getzola/zola
    icon: https://www.getzola.org/icons/apple-touch-icon.png
    desc: Zola 官方仓库
    cover: https://picsum.photos/seed/zola/600/200
```

{% raw %}
```jinja
{{ <links group="github" /> }}
```
{% endraw %}

**好友**（`data/friends.yaml` 或复用 `links.yaml`）：

{% raw %}
```jinja
{{ <friends group="developer" /> }}
{{ <friends /> }}  {# 全部 #}
```
{% endraw %}

### poetry 诗词

{% raw %}
```jinja
{% <poetry title="春晓" author="孟浩然"> %}
**春眠不觉晓，处处闻啼鸟。**

夜来风雨声，花落知多少。
{% </poetry> %}
```
{% endraw %}

{% <poetry title="春晓" author="孟浩然"> %}
**春眠不觉晓，处处闻啼鸟。**

夜来风雨声，花落知多少。
{% </poetry> %}

### tabs 多标签页

{% raw %}
```jinja
{% <tabs> %}
<!-- tab python -->
```python
print("hello python")
```
<!-- tab javascript -->
```javascript
console.log("hello js")
```
<!-- tab rust -->
```rust
println!("hello rust");
```
{% </tabs> %}
```
{% endraw %}

{% <tabs> %}
<!-- tab python -->
```python
print("hello python")
```
<!-- tab javascript -->
```javascript
console.log("hello js")
```
<!-- tab rust -->
```rust
println!("hello rust");
```
{% </tabs> %}

> `tabs` 内代码块会自动套 `code-wrap`，切换时已做 `reflow` 对齐行号。

## Front Matter 模板

```toml
# 博客
+++
title = "我的第一篇"
date = 2026-03-05
[taxonomies]
categories = ["技术加油站"]
tags = ["zola", "主题"]
[extra]
style = "blog"
sticky = true
+++

# 加密
+++
title = "私密"
[extra]
encrypted = true
password = "1234"
password_hint = "提示"
+++

# 系列（wiki）
+++
title = "02 · 快速安装"
[extra]
series = "elysia-guide"
+++
# 或在 _index.md
[extra]
series = "elysia-guide"
series_title = "Elysia 完全指南"
```

## 写作建议

| 场景 | 推荐 |
| --- | --- |
| 中文阵地 | 开启 `extra.style.fonts.body_family` 的 `LXGW WenKai Screen`，正文 `16px` |
| 代码为主 | `code_block_size=13px`，`hl_lines` 突出关键行 |
| 需搜索 | 提前申请 Algolia，`zola build` 后手动推送首版 |
| 长文 | 每 `##` 即目录锚点，保持 `h2/h3` 层级清晰 |

> 完整可运行示例见 `content/blog/content-components.md` 与 `content/blog/markdown-showcase.md`，本章所有代码可直接复制使用.

+++
title = "Elysia 完整示例 — 中文"
date = 2026-04-10
description = "一文览遍 Elysia 的 Markdown 语法与全部组件"
[taxonomies]
categories = ["GUIDE"]
tags = ["markdown", "components", "elysia", "示例"]

[extra]
sticky = false
+++

> **阅读是一种享受** — 本页集中展示 Elysia 在 Zola 0.23+ 下的全部 Markdown 能力与组件，复制即用。

<!-- more -->

[11]: http://127.0.0.1:1111/blog/elysia-showcase/#fr-note-1/

# 1. 排版与基础语法

[官网][11]



## 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题

二级标题会自动收录到右侧目录（`[extra.features] toc = true`），并支持平滑滚动高亮。

## 段落与行内

常规段落、**粗体**、*斜体*、***粗斜体***、~~删除线~~、`行内代码`、[外链](https://www.getzola.org)（自动新标签）、[内链](/wiki/)。

> 块引用 — 可嵌套：
> > 嵌套引用
>
> 回到外层。

---

水平线由 `---` 生成，文间留白如上。

## 列表

### 无序

- 苹果
  - 富士
  - 嘎啦
- 香蕉
- 橙子

### 有序

1. 第一步
2. 第二步
   1. 2.1 子步骤
   2. 2.2 子步骤
3. 第三步

### 任务列表

- [x] 已完成
- [ ] 待办
- [x] 写作是享受

> 需 `render_emoji` 与 GFM 任务列表支持，Zola 默认已开启。

# 2. 代码

## 行号 + 文件名

```rust,linenos,name=main.rs
fn main() {
    println!("Hello, Elysia!");
    // 这一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长
}
```

```python,linenos,name=app.py
def hello(name: str) -> str:
    return f"Hello {name} from Elysia"
```

```bash,linenos
echo "无行号对比"
ls -la | grep ".md"
```

行内 `linenos` 开启左侧行号（`[extra.features] code_line_numbers` 控制），`name=` 显示居中文件名胶囊，语言标签左下，复制按钮右上均自动生成。

# 3. 表格（横向滚动）

| 功能 | 说明 | 状态 |
| --- | --- | --- |
| 亮/暗模式 | 仅两档，默认亮色，`localStorage` 持久化 | ✅ |
| 调色盘 | 素雅黑 / 鹅黄绿 / 活力橙 / 梦幻紫 (`--accent`) | ✅ |
| 无感分页 | 滚动到底自动加载下一页 | ✅ |
| 超长表格 | 本列故意写一段非常非常长的文本以触发横向滚动条，检验 `width:fit-content` + `overflow:auto` 是否生效 | ✅ |

# 4. 图片、链接、脚注、Emoji

图片：

{{ <image src="https://picsum.photos/seed/elysia-showcase/900/400" caption="picsum 占位图 — 支持 caption 与懒加载" /> }}

链接卡片：

{{ <link href="https://www.getzola.org" title="Zola 官网" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Rust 编写的高性能静态站点生成器，单二进制极速构建" /> }}

{{ <link href="/wiki/" title="站内 Wiki" icon="📚" desc="站内跳转不新标签，自动适配亮暗" /> }}

脚注示例：这里有一个脚注[^1]，这里还有一个[^note]。

[^1]: 这是脚注 1 的内容，会在文末集中展示，带编号与回跳。
[^note]: 具名脚注同样支持，`bottom_footnotes = true` 时沉底。

Emoji：:tada: :sparkles: :books: （`render_emoji = true`）

行内 `code` 与脚注中的 `code` 共存测试。

# 5. GitHub Alerts（`github_alerts = true`）

> [!NOTE]
> 这是 GitHub 风格的 NOTE 提示，与 `note` 组件蓝色配色一致。

> [!TIP]
> 使用 `> [!TIP]` 即可，不要写 HTML，自动带标题与图标，适配暗色。

> [!IMPORTANT]
> 重要信息，用于强调关键结论。

> [!WARNING]
> 警告样式会自动适配亮暗模式，左边框与图标高亮。

> [!CAUTION]
> 危险操作提醒，红色左边框。

# 5.5 数学公式（KaTeX，可开关）

> 默认关闭，按需在 `zola.toml` 中开启：
> ```toml
> [extra.katex]
> enable = true   # 启用 $...$ / $$...$$
> ```
> 启用后自动加载 `katex.min.css/js + auto-render`，支持 `$E=mc^2$`、`$$...$$`、`\(...\)`、`\[...\]`。

行内公式 $E=mc^2$ 与 $a^2 + b^2 = c^2$，块级公式：

$$
\frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

> 未启用时原样显示源码，不影响阅读。

# 6. 组件（Components API，Zola 0.23+）

## 6.1 note — 6 配色

{% <note title="默认蓝色" color="blue"> %}
蓝色为 `info`，`color="blue"` 或不写皆可。支持 **Markdown**：`code`、*斜体*。
{% </note> %}

{% <note title="绿色" color="green"> %}
`color="green"` — 柔和成功态。
{% </note> %}

{% <note title="黄色" color="yellow"> %}
`color="yellow"` — 提醒。
{% </note> %}

{% <note title="橙色" color="orange"> %}
`color="orange"` — 活力橙，与调色盘联动。
{% </note> %}

{% <note title="红色" color="red"> %}
`color="red"` — 危险 / 重要。
{% </note> %}

{% <note title="黑色" color="black"> %}
`color="black"` — 中性，跟随 `--accent`。
{% </note> %}

## 6.2 video

Bilibili：

{{ <video bilibili="BV1n8Q7B7Ekz" caption="Bilibili 示例 — 自动禁用 autoplay" /> }}

YouTube：

{{ <video youtube="GoxJ4H8Chz8" width="80%" caption="YouTube — 80% 宽度" /> }}

本地视频（`src`）：

{{ <video src="https://www.w3schools.com/html/mov_bbb.mp4" caption="本地 video 标签" /> }}

## 6.3 image

{{ <image src="https://picsum.photos/seed/elysia-image/800/300" width="80%" caption="可控宽度 80% 的图片" /> }}

## 6.4 link / links / friends

单卡片已在第 4 节展示，**分组卡片**：

{{ <links group="github" /> }}

{{ <friends group="github" /> }}

> 数据来源 `data/links.yaml`，`github/other` 两组已内置封面与描述。

## 6.5 poetry — 古风竖线居中

{% <poetry title="游山西村" author="陆游"> %}
莫笑农家腊酒浑，丰年留客足鸡豚。

山重水复疑无路，柳暗花明又一村。

箫鼓追随春社近，衣冠简朴古风存。

从今若许闲乘月，拄杖无时夜叩门。
{% </poetry> %}

> 左侧橙标 `var(--accent)` 随调色盘联动，内容居中，上下虚线如信笺。

## 6.6 tabs — 嵌套代码高亮

{% <tabs> %}
<!-- tab rust -->
```rust,linenos
fn add(a: i32, b: i32) -> i32 { a + b }
```
<!-- tab python -->
```python
def add(a, b):
    return a + b
```
<!-- tab javascript -->
```javascript
function add(a, b) { return a + b; }
```
{% </tabs> %}

> 标签名自动转小写，首个 `is-active`，切换时代码行号自动重绘。

---

## 尾声

以上即 Elysia 的全部书写能力：**Markdown 原生 + 7 大组件 + 5 种 Alert**，亮暗与四套调色盘全局联动，愿 **阅读是一种享受**。

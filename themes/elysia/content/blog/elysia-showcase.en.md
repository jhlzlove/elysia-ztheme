+++
title = "Elysia Showcase — English"
date = 2026-04-10
description = "All Markdown features & components in one page"
[taxonomies]
categories = ["GUIDE"]
tags = ["markdown", "components", "elysia", "showcase"]

[extra]
sticky = false
+++

> **Reading is enjoyment** — This page demonstrates every Markdown capability and component of Elysia on Zola 0.23+.

<!-- more -->

# 1. Typography & Basics

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

H2 entries are auto-collected into the right TOC (`[extra.features] toc = true`) with scroll spy.

## Inline

Paragraph, **bold**, *italic*, ***bold italic***, ~~strikethrough~~, `inline code`, [external link](https://www.getzola.org), [internal link](/wiki/).

> Blockquote — nested:
> > Nested quote
>
> Back to outer.

---

Horizontal rule from `---`.

## Lists

### Unordered

- Apple
  - Fuji
  - Gala
- Banana
- Orange

### Ordered

1. Step one
2. Step two
   1. Sub 2.1
   2. Sub 2.2
3. Step three

### Task list

- [x] Done
- [ ] Todo
- [x] Writing is enjoyment

# 2. Code

## With line numbers + filename

```rust,linenos,name=main.rs
fn main() {
    println!("Hello, Elysia!");
    // This is a very long line to test horizontal scrolling: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
}
```

```python,linenos,name=app.py
def hello(name: str) -> str:
    return f"Hello {name} from Elysia"
```

```bash,linenos
echo "without filename"
ls -la | grep ".md"
```

`linenos` enables gutter (`[extra.features] code_line_numbers`), `name=` shows centered pill, language at lower-left, copy button at upper-right.

# 3. Table (horizontal scroll)

| Feature | Description | Status |
| --- | --- | --- |
| Light/dark | Binary toggle, default light, persisted | ✅ |
| Palettes | Zinc / Lime / Orange / Violet (`--accent`) | ✅ |
| Infinite scroll | Auto-load next page | ✅ |
| Wide table | This column contains a very long sentence to force horizontal overflow and test `width:fit-content + overflow:auto` | ✅ |

# 4. Image, Link, Footnotes, Emoji

Image:

{{ <image src="https://picsum.photos/seed/elysia-showcase-en/900/400" caption="Picsum placeholder — lazy load with caption" /> }}

Link cards:

{{ <link href="https://www.getzola.org" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="A fast static site generator in Rust" /> }}

{{ <link href="/wiki/" title="Wiki" icon="📚" desc="Internal link stays in same tab, theme-aware" /> }}

Footnote: Here is a footnote[^1] and another[^note].

[^1]: Footnote 1 collected at the article end with back-reference.
[^note]: Named footnotes work too, `bottom_footnotes = true`.

Emoji: :tada: :sparkles: :books: (`render_emoji = true`)

# 5. GitHub Alerts (`github_alerts = true`)

> [!NOTE]
> GitHub-style NOTE, matches `note` blue.

> [!TIP]
> Use `> [!TIP]` — no HTML needed, auto title & icon, dark-aware.

> [!IMPORTANT]
> Key takeaway, highlighted.

> [!WARNING]
> Warning adapts to light/dark.

> [!CAUTION]
> Dangerous action, red border.

# 5.5 Math (KaTeX, toggleable)

> Disabled by default, enable in `zola.toml`:
> ```toml
> [extra.katex]
> enable = true   # for $...$ / $$...$$
> ```
> Loads `katex.min.css/js + auto-render`, supports `$E=mc^2$`, `$$...$$`, `\(...\)`, `\[...\]`.

Inline $E=mc^2$ and $a^2 + b^2 = c^2$, block:

$$
\frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

> When disabled, source is shown as-is.

# 6. Components (Components API, Zola 0.23+)

## 6.1 note — 6 colors

{% <note title="Default blue" color="blue"> %}
Blue is `info`, omit `color` or `blue`. Supports **Markdown**.
{% </note> %}

{% <note title="Green" color="green"> %}
`color="green"` — success.
{% </note> %}

{% <note title="Yellow" color="yellow"> %}
`color="yellow"` — reminder.
{% </note> %}

{% <note title="Orange" color="orange"> %}
`color="orange"` — energetic, palette-aware.
{% </note> %}

{% <note title="Red" color="red"> %}
`color="red"` — danger.
{% </note> %}

{% <note title="Black" color="black"> %}
`color="black"` — neutral, follows `--accent`.
{% </note> %}

## 6.2 video

Bilibili:

{{ <video bilibili="BV1n8Q7B7Ekz" caption="Bilibili — autoplay disabled" /> }}

YouTube:

{{ <video youtube="GoxJ4H8Chz8" width="80%" caption="YouTube — 80% width" /> }}

Local `src`:

{{ <video src="https://www.w3schools.com/html/mov_bbb.mp4" caption="Local video tag" /> }}

## 6.3 image

{{ <image src="https://picsum.photos/seed/elysia-image-en/800/300" width="80%" caption="Controlled 80% width" /> }}

## 6.4 link / links / friends

Single cards above, **grouped**:

{{ <links group="github" /> }}

{{ <friends group="github" /> }}

> Source `data/links.yaml`, groups `github/other` with covers.

## 6.5 poetry — centered with accent rule

{% <poetry title="You Shan Xi Cun" author="Lu You"> %}
Don't laugh at the farmer's cloudy wine, in harvest we have chicken and pork enough.

Mountains and rivers seem endless, then a village appears through willows and flowers.

Flutes and drums follow the spring festival, simple hats recall ancient customs.

If I may roam under the moon, I'll knock at doors with my cane at night.
{% </poetry> %}

> Left accent `var(--accent)` follows palette, centered, dashed caps like stationery.

## 6.6 tabs — nested code

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

> Labels lowercased, first `is-active`, code gutters reflow on switch.

---

## Coda

That is Elysia's full authoring surface: **native Markdown + 7 components + 5 alerts**, global light/dark & 4 palettes, *reading is enjoyment*.


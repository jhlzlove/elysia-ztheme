+++
title = "05 · Markdown and Components"
date = 2026-09-02
weight = 5
description = "Front Matter, Markdown, and Elysia components (syntax plus rendered output)."
+++

Examples in this chapter can be copied into posts. Components use the Zola 0.23+ component syntax. Each section shows the syntax first, then the rendered result.

> [!tip]
> When using {% raw %}`{{ ... }}` or `{% ... %}`{% endraw %} in Markdown, you must wrap the expression with `raw` / `endraw`, otherwise Zola will try to execute it and fail to parse.

## Article Front Matter

Minimal post:

```toml
+++
title = "My first post"
date = 2026-03-10
description = "A short summary"
+++
```

Common fields for blog posts:

```toml
+++
title = "A post"
date = 2026-03-10
updated = 2026-03-12
description = "Summary shown in lists"
weight = 1

[taxonomies]
categories = ["Technology"]
tags = ["zola", "blog"]

[extra]
sticky = true
+++
```

- `date` controls sorting and display; `updated` records a later update.
- `description` is used for summaries and page metadata; `<!-- more -->` also works.
- `weight` orders Wiki chapters.
- `sticky`, `top`, or `pinned` pins a post.
- Categories and tags belong under `[taxonomies]`.

Encrypted post:

```toml
+++
title = "Private post"
[extra]
encrypted = true
password = "change-this-password"
password_hint = "Enter the password"
+++
```

Do not commit a real password to a public repository; client-side encryption only provides basic protection.

## Basic Markdown

**Syntax:**

```md
# Heading 1
## Heading 2

This paragraph contains **bold**, *italic*, ~~strikethrough~~, `code`, and a [link](https://example.com).

- Unordered item
- Another item

1. Ordered item
2. Another item

> A quotation.

---

| Name | Age | City |
| --- | --- | --- |
| Alice | 24 | Beijing |
| Bob | 30 | Shanghai |
```

**Rendered:**

# Heading 1
## Heading 2

This paragraph contains **bold**, *italic*, ~~strikethrough~~, `code`, and a [link](https://example.com).

- Unordered item
- Another item

1. Ordered item
2. Another item

> A quotation.

---

| Name | Age | City |
| --- | --- | --- |
| Alice | 24 | Beijing |
| Bob | 30 | Shanghai |

Markdown links inside article content automatically receive a link icon; image links are excluded.

## Alerts, footnotes, and formulas

**Syntax (GitHub Alerts):**

```md
> [!NOTE]
> A regular note.

> [!TIP]
> A useful tip.

> [!WARNING]
> A warning.
```

**Rendered:**

> [!NOTE]
> A regular note.

> [!TIP]
> A useful tip.

> [!WARNING]
> A warning.

**Syntax (footnotes):**

```md
This sentence has a footnote[^source].

[^source]: The footnote text.
```

**Rendered:**

This sentence has a footnote[^source].

[^source]: The footnote text.

**Syntax (KaTeX, requires `extra.katex.enable = true`):**

```md
Inline formula: $E=mc^2$

$$
\int_0^\infty e^{-x}dx = 1
$$
```

**Rendered:**

Inline formula: $E=mc^2$

$$
\int_0^\infty e^{-x}dx = 1
$$

Configuration:

```toml
[extra.katex]
enable = true
```

## Code blocks

**Syntax:** language, line numbers, filename, and highlighted lines:

````md
```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
```
````

**Rendered:**

```ts,linenos,name=example.ts,hl_lines=2 3
interface User {
  name: string;
  age: number;
}
```

Line numbers are controlled by `extra.features.code_line_numbers`; the copy button is provided automatically by the script.

## Component syntax

Inline component:

```jinja
{% raw %}{{ <component-name parameter="value" /> }}{% endraw %}
```

Block component:

```jinja
{% raw %}{% <component-name parameter="value"> %}{% endraw %}
body
{% raw %}{% </component-name> %}{% endraw %}
```

Parameters normally use double quotes; body supports full Markdown.

### note

**Syntax:**

{% raw %}
```jinja
{% <note title="Note" color="blue"> %}
This is a note.
{% </note> %}
{% <note title="Success" color="green"> %}...{% </note> %}
```
{% endraw %}

Available colors are `blue`, `green`, `yellow`, `orange`, `red`, and `black`.

**Rendered:**

{% <note title="Note" color="blue"> %}
This is a note with `color="blue"` (default).
{% </note> %}

{% <note title="Success" color="green"> %}green{% </note> %}
{% <note title="Warning" color="yellow"> %}yellow{% </note> %}
{% <note title="Attention" color="orange"> %}orange{% </note> %}
{% <note title="Danger" color="red"> %}red{% </note> %}
{% <note title="Black" color="black"> %}black{% </note> %}

### video

**Syntax:**

{% raw %}
```jinja
{{ <video bilibili="BV1n8Q7B7Ekz" caption="Bilibili video" /> }}
{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}
{{ <video src="/video/demo.mp4" caption="Local video" /> }}
```
{% endraw %}

Use one of `bilibili`, `youtube`, or `src`. `width` sets the width, `caption` adds a caption, and `autoplay` will autoplay when set to `true`.

**Rendered:**

{{ <video bilibili="BV1n8Q7B7Ekz" caption="Bilibili video" autoplay="false" /> }}

### audio

**Syntax:**

Local audio:

{% raw %}
```jinja
{{ <audio src="/audio/demo.mp3" caption="Remote audio" autoplay="true" /> }}
```
{% endraw %}

NetEase (`type` supports `single` / `album` / `playlist`):

{% raw %}
```jinja
{{ <audio netease="1852892593" type="single" /> }}
{{ <audio netease="128938811" type="album" /> }}
{{ <audio netease="2246151876" type="playlist" /> }}
```
{% endraw %}

Spotify (`type` supports `single` / `album` / `playlist`, `single` maps to `track`):

{% raw %}
```jinja
{{ <audio spotify="3QQcmb87X6e10gdEXDx1ep" type="single" /> }}
{{ <audio spotify="3mlG9PR20AaeQQGA18PJ18" type="album" /> }}
{{ <audio spotify="6UEIDpoU9CJD0b0jg04kgP" type="playlist" /> }}
```
{% endraw %}

**Rendered (local player):**

{{ <audio src="/audio/demo.wav" caption="Local audio example" autoplay="false" /> }}

**Rendered (NetEase single / album / playlist):**

{{ <audio netease="1852892593" type="single" /> }}

{{ <audio netease="128938811" type="album" /> }}

{{ <audio netease="2246151876" type="playlist" /> }}

**Rendered (Spotify single / album / playlist):**

{{ <audio spotify="3QQcmb87X6e10gdEXDx1ep" type="single" /> }}

{{ <audio spotify="3mlG9PR20AaeQQGA18PJ18" type="album" /> }}

{{ <audio spotify="6UEIDpoU9CJD0b0jg04kgP" type="playlist" /> }}

### image

**Syntax:**

{% raw %}
```jinja
{{ <image src="https://picsum.photos/seed/elysia/800/300" alt="Example image" width="100%" caption="Image caption" /> }}
```
{% endraw %}

Put image files in the site's `static/` directory.

**Rendered:**

{{ <image src="https://picsum.photos/seed/elysia/800/300" alt="Example image" width="100%" caption="Image caption" /> }}

### link card

**Syntax:**

{% raw %}
```jinja
{{ <link href="https://www.getzola.org/" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="The official Zola website" /> }}
```
{% endraw %}

**Rendered:**

{{ <link href="https://www.getzola.org/" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="The official Zola website" /> }}

### links collection

Prepare `data/links.yaml`:

```yaml
github:
  - title: Zola
    url: https://github.com/getzola/zola
    icon: https://www.getzola.org/icons/apple-touch-icon.png
    desc: Official Zola repository
```

**Syntax:**

{% raw %}
```jinja
{{ <links group="github" /> }}
```
{% endraw %}

**Rendered:**

{{ <links group="github" /> }}

### friends

`friends` normally reads `data/friends.yaml` and can also reuse link data.

**Syntax:**

{% raw %}
```jinja
{{ <friends group="developer" /> }}
{{ <friends /> }}
```
{% endraw %}

**Rendered (developer group):**

{{ <friends group="developer" /> }}

### poetry

**Syntax:**

{% raw %}
```jinja
{% <poetry title="Spring Dawn" author="Meng Haoran"> %}
Spring sleep unaware of dawn,
Everywhere I hear birds.
{% </poetry> %}
```
{% endraw %}

**Rendered:**

{% <poetry title="Spring Dawn" author="Meng Haoran"> %}
Spring sleep unaware of dawn,
Everywhere I hear birds.
{% </poetry> %}

### tabs

**Syntax:**

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

Separate panels with `<!-- tab label -->` comments; labels are lowercased.

**Rendered:**

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

## Wiki sections

Create a directory and `_index.md`:

```text
content/wiki/my-guide/
├── _index.md
├── 01-start.md
└── 02-config.md
```

The `_index.md`:

```toml
+++
title = "My Guide"
sort_by = "weight"
template = "section.html"
page_template = "page.html"
+++
```

Use `weight` to order chapter pages. Do not add `extra.series`; Wiki navigation comes from the directory structure.

## Custom CSS

Create `static/css/custom.css` in the site root and inject it:

```toml
[extra.inject]
head = [
  { rel = "stylesheet", href = "/css/custom.css" },
]
```

Example:

```css
:root {
  --accent: #0ea5e9;
}
```

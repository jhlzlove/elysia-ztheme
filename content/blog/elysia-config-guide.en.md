+++
title = "Configuring the Elysia Theme"
date = 2026-08-25
description = "A complete walkthrough of Elysia configuration: identity, navigation, fonts, palettes, comments and search"
[taxonomies]
categories = ["GUIDE"]
tags = ["zola", "elysia", "config"]

[extra]
sticky = false
+++

> **Reading is enjoyment** — this guide walks through every section of `zola.toml` for the Elysia theme. Copy, paste, done.

<!-- more -->

## 1. Prerequisites

Elysia is a modern, minimalist [Zola](https://www.getzola.org) theme that requires Zola **0.23+** (Components API). Put the theme in `themes/elysia` and enable it in your root `zola.toml`:

```toml
base_url = "https://example.com"
title = "Elysia"
default_language = "en"

taxonomies = [
    {name = "categories", feed = true, paginate_by = 12, paginate_path = "page"},
    {name = "tags", feed = true, paginate_by = 12, paginate_path = "page"},
]

theme = "elysia"

[markdown]
render_emoji = true
github_alerts = true
bottom_footnotes = true
```

> [!TIP]
> Keep `feed = true` on both taxonomies — the theme automatically generates feeds for category and tag pages.

## 2. Site Identity

Avatar, motto and welcome message live under `[extra]`:

```toml
[extra]
avatar = "/avatar.jpeg"          # place the file in static/
avatar_alt = "Elysia"
site_motto = "Reading is enjoyment."

# Welcome card, Markdown supported
welcome = """
> **Hi, welcome to Elysia!**
>
> Thoughts, notes and knowledge — may reading be a pleasure.
"""

# Footer, Markdown and links supported
footer = "© 2026 Elysia · Powered by [Zola](https://www.getzola.org) · Theme [Elysia](https://github.com/)"
```

{% <note title="Tip"> %}
Both `welcome` and `footer` accept full Markdown: quotes, links, even inline code.
{% </note> %}

## 3. Navigation & Socials

Top navigation buttons are added one by one via `[[extra.menus]]`. Up to four fit per row on desktop and wrap automatically; `icon` accepts an emoji, an SVG name or an image URL:

```toml
[[extra.menus]]
name = "Blog"
url = "/"
icon = "✍️"

[[extra.menus]]
name = "Wiki"
url = "/wiki/"
icon = "📚"

[[extra.menus]]
name = "Archive"
url = "/archive/"
icon = "🗂️"
```

Bottom social icons work the same way with `[[extra.socials]]`:

```toml
[[extra.socials]]
name = "GitHub"
url = "https://github.com"
icon = "github"

[[extra.socials]]
name = "RSS"
url = "/atom.xml"
icon = "rss"
```

Built-in icon names include `github`, `rss`, `mail` and more — URLs work too.

## 4. Fonts

```toml
[extra.fonts]
body_name = "LXGW WenKai Screen"
body_url = "https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css"
body_size = "16px"
body_size_small = "15px"
code_name = "JetBrains Mono"
code_url = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
code_size = "16px"
article_size = "16px"
toc_size = "13.5px"
```

- `body_*` controls global body text; leave `url` empty to use system fonts
- `article_size` overrides font size on article pages only; `toc_size` styles the TOC
- Sizes accept any CSS length: `px`, `rem`, `em`

## 5. Mode & Palette

```toml
[extra.style]
default_theme = "auto"      # "auto" | "light" | "dark"
default_palette = "default" # "default" | "lime" | "orange" | "violet"
```

Light/dark defaults to the system preference and persists to `localStorage`. The four palettes drive the accent color `--accent`, which flows through buttons, TOC highlights, note components and everything else.

## 6. Comments

Comments are toggled centrally in `[extra.comments]`; pick one provider:

```toml
[extra.comments]
enable = true
provider = "giscus"   # "giscus" | "artalk" | "waline" | "none"
comment_title = "Leave a comment"
```

For Giscus, generate parameters at [giscus.app](https://giscus.app) and fill them in:

```toml
[extra.giscus]
repo = "your-name/your-repo"
repo_id = "R_kgDOxxxxx"
category = "Announcements"
category_id = "DIC_kwDOxxxxx"
mapping = "pathname"
reactions_enabled = "1"
input_position = "top"
theme = "preferred_color_scheme"
lang = "en"
loading = "lazy"
```

Self-hosting? Choose Artalk or Waline instead — just set `server` / `serverURL` in the matching section.

## 7. Algolia Search

```toml
[extra.algolia]
enable = true
app_id = "YOUR_APP_ID"
api_key = "search-only API key"   # read-only key, never the admin key
index_name = "elysia"
hits_per_page = 8
placeholder = "Search articles..."
show_powered_by = true
```

> [!WARNING]
> `api_key` must be the **Search-only API Key** from the Algolia dashboard. It is designed to be public; never put an Admin API Key in your config.

## 8. Feature Flags

```toml
[extra.features]
year_progress = true        # year progress bar
toc = true                  # table of contents on pages
code_copy = true            # copy button on code blocks
code_line_numbers = true    # line numbers
paginate_by = 5             # posts per page
show_reading_time = true    # reading time badge
```

## 9. Math with KaTeX

```toml
[extra.katex]
enable = true   # renders $...$ and $$...$$
```

When enabled, the theme lazy-loads KaTeX from CDN by default; custom mirrors are supported via `css_url` / `js_url`.

## 10. Multilingual

Declare the language and pair content files to serve translated posts:

```toml
[languages.en]
title = "Elysia EN"
generate_feeds = true
taxonomies = [
    {name = "categories", feed = true},
    {name = "tags", feed = true},
]

[slugify]
paths = "on"
taxonomies = "on"
anchors = "on"
```

The convention: a Chinese post lives at `content/blog/foo.md` and its English twin at `content/blog/foo.en.md`.

---

## Wrap-up

That's the complete Elysia configuration surface: **identity → navigation → fonts → palette → comments → search → features**. After editing `zola.toml`, run `zola serve` to preview instantly — happy reading!

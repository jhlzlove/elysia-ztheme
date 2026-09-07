+++
title = "02 · Quick Install"
date = 2026-09-02
weight = 2
description = "Install Zola, start a local preview, and understand where site files belong."
+++

## Requirements

- Zola `0.23.4` or newer. The theme uses the component syntax introduced in Zola 0.23+.
- Git, if you use the theme repository or a Git submodule.
- An editor that can save UTF-8 text.

Check the Zola version:

```bash
zola --version
```

## Use this repository directly

If the current directory is the site root:

```bash
zola serve --open
```

Pages reload automatically when you edit `content/` or `zola.toml`.

Build static files with:

```bash
zola build
```

The output is written to `public/`. You can upload that directory to any static web host.

## Use the theme as a Git submodule

Add the theme to a separate Zola site:

```bash
git init my-blog
cd my-blog
git submodule add https://github.com/yourname/elysia-ztheme.git themes/elysia
```

Copy or adapt the theme's `zola.toml`, and make sure the site configuration contains:

```toml
theme = "elysia"
```

At minimum, customize these values:

```toml
base_url = "https://example.com"
title = "My Blog"
description = "My personal website"
default_language = "en"
```

Theme files live in `themes/elysia/`; your content and configuration live in the site root. Root-level `templates/`, `static/`, and `content/` files can override the corresponding theme files.

## Minimal content layout

```text
my-blog/
├── zola.toml
├── content/
│   ├── _index.md
│   └── blog/
│       ├── _index.md
│       └── first-post.md
├── static/
└── themes/
    └── elysia/
```

Add Front Matter at the top of a post:

```toml
+++
title = "My first post"
date = 2026-03-10
description = "A short summary"
+++

The post starts here.
```

## Common issues

| Issue | Fix |
| --- | --- |
| `components.html` is not found | Upgrade to Zola 0.23 or newer |
| Styles are missing | Check `base_url`, the theme path, and the `theme` name |
| Chinese taxonomies behave incorrectly | Use `[taxonomies]` and keep `slugify.taxonomies = "off"` for the Chinese site |
| The port is already in use | Run `zola serve --port 19191` |
| Changes do not appear | Restart `zola serve`, or remove `public/` and build again |

The next chapter explains the most useful `zola.toml` settings.

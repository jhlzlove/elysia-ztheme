+++
title = "Hello, Elysia — A Modern Zola Theme"
date = 2026-01-15
description = "Introducing Elysia's design philosophy and core features"
[taxonomies]
categories = ["THEME", "zola"]
tags = ["zola", "elysia", "design"]

[extra]
sticky = true
+++

Welcome to **Elysia**! This is a pinned post (multiple pinned posts are sorted by date ascending).

| Name | Age |
|--|--|
| Alice | 18 |

## Design Philosophy

- Make the most of the viewport with comfortable spacing
- Reading is enjoyment: generous tracking, comfortable line height, soft palette
- Light/dark mode + 4 palettes (zinc / lime / orange / violet)

> GitHub Alerts work out of the box (`[markdown] github_alerts = true`).

> [!NOTE]
> This is a GitHub-style NOTE, matching the `note` component.

> [!TIP]
> Use `> [!TIP]` — no HTML needed.

> [!WARNING]
> Warning style adapts to light/dark automatically.

## Code Demo

Code uses **JetBrains Mono** with art lines, line numbers, filename centered, language lower-left and copy button:

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

## Horizontal Scroll Table

| Feature | Description | Status |
| --- | --- | --- |
| Light/dark | Follows system, manual toggle | ✅ |
| Palettes | 4 themes | ✅ |
| Infinite scroll | Auto load on scroll | ✅ |
| Encrypted | Lock icon, password | ✅ |
| Table | Long content scrolls horizontally: this is a very long text to force the table to overflow and test the scrollbar | ✅ |

## Poetry

{% <poetry title="Quiet Night Thought" author="Li Bai"> %}
Moonlight before my bed, like frost on the ground.

I lift my head to see the moon, then lower it, homesick.
{% </poetry> %}

## Note

{% <note title="Tip" color="green"> %}
This is a `note` card, supporting `red | green | yellow | orange | black`, default blue.
{% </note> %}

{% <note title="Attention" color="red"> %}
Red for important reminders.
{% </note> %}

## Tabs

{% <tabs> %}
<!-- tab bash -->
```bash
echo "Hello from bash"
ls -la
```
<!-- tab fish -->
```fish
echo "Hello from fish"
ls -la
```
<!-- tab powershell -->
```powershell
Write-Host "Hello from PowerShell"
Get-ChildItem
```
{% </tabs> %}

## Media

Bilibili:

{{ <video bilibili="BV1n8Q7B7Ekz" width="100%" caption="Demo" /> }}

YouTube:

{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}

Image:

{{ <image src="https://picsum.photos/800/400" caption="Random image" /> }}

Link:

{{ <link href="/about" title="About" icon="👋" desc="Learn more about Elysia" /> }}

{{ <link href="https://www.getzola.org" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="A fast static site generator in Rust" /> }}

## Friends

Friends configured in `data/links.yaml`, render with `{{ <links group="github" /> }}`.

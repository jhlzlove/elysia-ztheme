+++
title = "你好，Elysia — 现代化 Zola 主题初体验"
date = 2026-01-15
description = "介绍 Elysia 的设计理念与核心特性"
[taxonomies]
categories = ["THEME", "zola"]
tags = ["zola", "elysia", "design"]

[extra]
sticky = true
+++

欢迎使用 **Elysia**！这是一篇置顶文章（日期较早的置顶会排在前面，因为多置顶按日期正序）。

|名字|年龄|
|--|--|
|李逍遥|18|


## 设计理念

- 充分利用屏幕可见区域，间距适当
- 阅读就是享受：大字距、舒适行高、柔和配色
- 亮暗模式 + 调色盘（素雅黑 / 鹅黄绿 / 活力橙 / 梦幻紫）

> GitHub Alerts 在此主题中开箱即用（`[markdown] admonitions = true`）。

> [!NOTE]
> 这是 GitHub 风格的 NOTE 提示，与 `note` 组件配色一致。

> [!TIP]
> 使用 `> [!TIP]` 即可，不要写 HTML。

> [!WARNING]
> 警告样式会自动适配亮暗模式。

> [!IMPORTANT]
> 警告样式会自动适配亮暗模式。

## 代码块演示

代码块使用 **JetBrains Mono**，带艺术线条边框、行号、文件名居中、左下语言小写、右上复制按钮：

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

## 表格横向滚动

| 功能 | 说明 | 状态 |
| --- | --- | --- |
| 亮暗模式 | 跟随系统，可手动切换 | ✅ |
| 调色盘 | 4 种配色 | ✅ |
| 无感分页 | 滚动自动加载 | ✅ |
| 加密文章 | 带锁图标，需密码 | ✅ |
| 表格 | 内容过长自动横向滚动条，这个表格故意放一个很长的列来测试横向滚动是否正常：这是一段非常非常非常长的文本，用来撑开表格宽度，看看滚动条是否出现 | ✅ |

## Poetry

{% <poetry title="静夜思" author="李白"> %}
床前明月光，疑是地上霜。

举头望明月，低头思故乡。
{% </poetry> %}

## Note 组件

{% <note title="小贴士" color="green"> %}
这是通过 `note` 组件渲染的卡片，支持 `red | green | yellow | orange | black`，默认为蓝色（GitHub info）。
它与 GitHub Alert 共存，可按需选择。
{% </note> %}

{% <note title="注意" color="red"> %}
红色强调，用于重要提醒。
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

## 媒体组件

视频（B站）：

{{ <video bilibili="BV1n8Q7B7Ekz" width="100%" caption="演示视频" /> }}

视频（YouTube）：

{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}

图片：

{{ <image src="https://picsum.photos/800/400" caption="随机图片示例" /> }}

链接卡片：

{{ <link href="/about" title="关于本站" icon="👋" desc="了解 Elysia 的更多故事" /> }}

{{ <link href="https://www.getzola.org" title="Zola 官网" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="一款用 Rust 编写的高性能静态站点生成器" /> }}

## 友链预留

友链数据在 `data/links.yaml` 中配置，使用 `{% raw %}{{ <links group="github" /> }}{% endraw %}` 按组渲染。

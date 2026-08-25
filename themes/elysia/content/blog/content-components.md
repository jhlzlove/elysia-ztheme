+++
title = "组件手册 — 所有 Shortcode / Component 用法"
date = 2026-08-25
[taxonomies]
categories = ["GUIDE"]
tags = ["components", "shortcode"]
+++

本页展示所有组件在 Zola 0.23+ 下的 **component** 写法（已移除 shortcode）。

## note

{% <note title="默认蓝色" color="blue"> %}
默认 info 色，直接写 `color="blue"` 或不写。你说呢

换行试试
{% </note> %}

{% <note title="绿色" color="green"> %}green{% </note> %}
{% <note title="黄色" color="yellow"> %}yellow{% </note> %}
{% <note title="橙色" color="orange"> %}orange{% </note> %}
{% <note title="红色" color="red"> %}red{% </note> %}
{% <note title="黑色" color="black"> %}black{% </note> %}

## video

B站：

{{ <video bilibili="BV1n8Q7B7Ekz" caption="Bilibili 示例" /> }}

YouTube：

{{ <video youtube="GoxJ4H8Chz8" width="80%" /> }}

## image

{{ <image src="https://picsum.photos/seed/elysia/800/300" width="100%" caption="占位图" /> }}

## link 与 links

单卡片：

{{ <link href="https://github.com/getzola/zola" title="Zola" icon="https://www.getzola.org/icons/apple-touch-icon.png" desc="Zola 官方仓库" /> }}

按组渲染（需 `data/links.yaml`）：

{{ <links group="github" /> }}

## friends

{{ <friends group="developer" /> }}

## poetry

{% <poetry title="春晓" author="孟浩然"> %}
**春眠不觉晓，处处闻啼鸟。**

夜来风雨声，花落知多少。
{% </poetry> %}

## tabs

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

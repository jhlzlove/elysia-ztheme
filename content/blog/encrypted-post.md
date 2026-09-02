+++
title = "加密文章示例 — 需要密码才能阅读"
date = 2026-09-02
description = "演示文章加密功能"
[taxonomies]
categories = ["SECRET"]
tags = ["encrypt", "demo"]

[extra]
encrypted = true
password = "elysia"
password_hint = "主题名小写"
+++

这是加密的正文，只有输入正确密码（`elysia`）后才会显示。

## 隐藏内容

恭喜你解锁了！这里可以看到：

- 支持所有 Markdown 与组件
- 代码块：

```js,linenos,name=secret.js
const secret = "Elysia 🔐";
console.log(secret);
```

> [!IMPORTANT]
> 加密仅为静态站点的轻量混淆，不适合高度敏感信息。

{% <note title="提示" color="yellow"> %}
密码通过 front matter 的 `extra.password` 配置，并以 `data-password` 属性渲染，前端比对。适合简单的访问控制。
{% </note> %}

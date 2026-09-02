+++
title = "你好，Elysia — 现代化 Zola 主题初体验"
date = 2026-01-15
[taxonomies]
categories = ["THEME", "zola"]
tags = ["zola", "elysia", "design"]

[extra]
sticky = true
+++

欢迎使用 **Elysia**！这是一篇置顶文章（日期较早的置顶会排在前面，因为多置顶按日期正序）。

<!-- more -->

## 本主题不支持封面图

卡片式的布局使用封面图好看，不过本身也需要设计。之前自己使用过这 Hexo 主题 Stellar 和 Hugo 的主题 Reimu 设计的带图片的列表挺好的，喜欢的朋友可以去看看。

这个主题不打算使用图片封面，比较节省流量吧😄也不需要可以寻找图片，但是文章内部是支持图片组件的，目前没有引入 fancybox，后面有需要再说。

## zola 嵌套目录的局限性

目录嵌套较深时，子目录想要在父级列表中显示必须有 `_index.md` 文件，其中至少有一行内容 `transparent = true`，否则列表不会显示。这和 Hexo、Hugo 这些框架不太一样。

虽然不会被父级显示，但是 zola 是会编译该文章的，可以使用该文章的 url 直接访问，这样的页面官方称为“孤儿页”，访问孤儿页必须添加入口按钮才便于访问。

## 利用好分类

由于 zola 孤儿页的存在，所以文章源文件适合一个目录平铺。所以建议给每篇文章进行分类，利用 zola 提供分类聚合，方便找到同一分类的文章。

如果有多个子目录且文章具备关联性，可以使用主题提供的 wiki 布局。

## 使用 zola 写作的建议

### front matter

博客文章的 front matter 中包含以下几项。zola 的分类和标签虽然内置支持，但必须使用 `taxonomies` key 方能生效。 

```md
<!--toml-->
+++
title = "你好，Elysia — 现代化 Zola 主题初体验"
date = 2026-01-15
[taxonomies]
categories = ["THEME", "ZOLA"]
tags = ["zola", "elysia", "design"]
+++

<!--yaml-->
---
title: 你好，Elysia — 现代化 Zola 主题初体验
date: 2026-01-15
taxonomies:
  categories: ["THEME", "ZOLA"]
  tags: ["zola", "elysia", "design"]
---
```

wiki 文章的 front matter 推荐：

```md
title = "01 · 认识 Elysia"
date = 2026-03-01
weight = 1
```

wiki 布局中 `weight` 字段进行文章排序，属于必填字段之一

### 文章摘要

zola 的文章摘要支持不错，可以使用 `description` front matter 定义，也可以使用 `<!-- more -->`，不管中间有没有空格都支持，这点儿比 hugo 要好。之前从 hexo 迁移到 hugo 时必须要改这个。

## 主题限制

wiki 中的文章分类、标签不会出现在菜单中的分类、标签页面，wiki 相关文章自成一派。

简历页面也是单独的，不在博客列表里面。

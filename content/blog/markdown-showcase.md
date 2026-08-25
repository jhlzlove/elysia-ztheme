+++
title = "Markdown 全功能展示"
date = 2026-03-20
[taxonomies]
categories = ["GUIDE"]
tags = ["markdown", "typography", "demo"]

+++

## 标题

### 三级标题

#### 四级标题

段落文字，支持 **粗体**、*斜体*、`行内代码`、~~删除线~~、[链接](https://example.com) 等。

## 列表

- 无序列表项一
- 无序列表项二
  - 嵌套项
- 无序列表项三

1. 有序列表一
2. 有序列表二
3. 有序列表三

## 引用

> 这里是一段引用，支持多行。
> 引用的第二行。

## 分割线

---

## 任务列表

- [x] 已完成
- [ ] 未完成

## 表格（会横向滚动）

| 姓名 | 年龄 | 城市 | 备注 |
| --- | --- | --- | --- |
| Alice | 24 | 北京 | 这是一个超长备注，用来测试表格在内容过长时是否会出现横向滚动条，确保在窄屏下依然可读，且不会破坏布局：Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Bob | 30 | 上海 | 备注 |
| Carol | 28 | 广州 | 备注 |

## 代码

```ts,linenos,name=example.ts
interface User {
  name: string;
  age: number;
}

function greet(u: User): string {
  return `Hi, ${u.name}`;
}
```

## 脚注

这是一个带脚注的句子[^1]。

[^1]: 这是脚注内容。

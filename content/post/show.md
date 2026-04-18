---
title: 主题效果测试
date: 2026-04-17
extra:
  cover: /avatar.jpg
  pinned: true
---

主题效果测试

<!-- more -->

## 常规链接显示

- https://www.getzola.org/
- md 链接：[主题效果测试](https://jhlzlove.github.io/post/first-post/)

### 错误链接自动修复

{% tabs() %}
<!-- tab 效果 -->
- https://www.getzola.org/，
- https://www.getzola.org/。

> [!IMPORTANT]  
> 只有简单字符可以自动调整。强烈建议编写 md 时中英文之间添加空格，养成好习惯

<!-- tab 写法 -->
```markdown
https://www.getzola.org/，
https://www.getzola.org/。
```
{% end %}

## 表格测试

| 诗人  | 代表作 | 简介                                                                                                                                                                                                                                                                                                                                                                                                                               | 长表头怎么样 |长表头怎么样|长表头怎么样|
|-----|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|--|--|
| 李白  | 静夜思 | 李白此诗看似白话入诗，实则匠心独运。首句“床前明月光”以最朴素的语言描绘寻常夜景，次句“疑”字妙绝——月光皎洁如霜的错觉，既暗示了秋夜的清冷，又带出诗人从恍惚到清醒的瞬间状态。后两句“举头”“低头”两个动作，将无形的乡愁化为可见的肢体语言：举头寻月是望乡的替代，低头沉思则是归期无望的妥协。全诗在明暗（月光与阴影）、动静（举头与低头）、虚实（疑霜与真月）的转换中，完成了一场完整的心理活动。<br>尤为精妙的是“月光—霜—月光—故乡”的意象链条：月光触发了霜的联想，霜的寒意暗示了客居的孤独，再回到真实的月光时，这光已浸透了思乡的温度。二十字中无一生僻字，却让每个中国人在月夜自然吟诵——这种“无痕”之境，正是盛唐诗歌“清水出芙蓉”美学理念的完美体现。                                                                                           ||||
| 白居易 | 长恨歌 | 白居易以120句长诗重构李杨爱情悲剧，在历史真实与艺术想象间开辟了独特的叙事空间。全诗可分四大段落：极宠（“天生丽质难自弃”至“不重生男重生女”），铺陈华清池、霓裳舞的奢靡，以“春宵苦短日高起”暗示政治懈怠；惊变（“渔阳鼙鼓动地来”至“回看血泪相和流”），马嵬之变的惨烈与“君王掩面救不得”的无力感形成戏剧性转折；悲思（“黄埃散漫风萧索”至“魂魄不曾来入梦”），通过太液芙蓉、未央柳等物是人非的意象，层层渲染玄宗归京后的孤寂；幻境（“临邛道士鸿都客”至结尾），以“含情凝睇谢君王”的仙界重逢，将人间悲剧升华为超越生死的永恒遗憾。<br>白居易的高明在于：既用“不重生男重生女”讽刺政治昏聩，又以“但令心似金钿坚”歌颂至死不渝。这种双重立场使诗歌超越了一般讽喻诗——当历史批判让位于情感共鸣时，读者记住的不是“重色误国”的道德训诫，而是“此恨绵绵”的生命叹息。结尾“天长地久有时尽”的悖论式宣言，更将具体情事升华为人类共通的缺憾美学。 ||||

> 引用说明，表格没有测试完全 https://jhlzlove.github.io/post/first-post/。

## 主题 shortcode

### tabs 测试

{% tabs() %}
<!-- tab node -->
使用 node 安装：

```bash
npm install
```
<!-- tab deno -->
使用 deno 安装：

```bash
deno install
```

<!-- tab bun -->
使用 bun 安装：

```bash
bun install
```
{% end %}

### link 测试

#### 外链

{{ link(href="https://www.getzola.org", title="Zola 官网", icon="https://www.getzola.org/favicon.ico", desc="A fast static site generator in a single binary") }}

#### 内链

{{ link(href="/about", title="关于本站", icon="/avatar.jpg") }}

### note 测试

{% note(title="提示") %}
这是默认 info 类型的 note，type 可省略。
{% end %}

{% note(type="success", title="成功") %}
操作已成功完成！
{% end %}

{% note(type="warning", title="注意") %}
请注意这里有一些需要留意的内容。
{% end %}

{% note(type="danger", title="危险") %}
这是一个危险提示，请谨慎操作。
{% end %}

### GitHub Alert 测试

> [!NOTE]
> 这是 GitHub Alert 风格的 note。
> 
> 换行试试

> [!TIP]
> 这是一个小技巧提示。

> [!WARNING]
> 这是 GitHub Alert 风格的警告。

> [!CAUTION]
> 请谨慎操作！

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

### poetry 测试

{% poetry(title="静夜思", author="李白") %}
床前明月光，疑是地上霜。

举头望明月，低头思故乡。
{% end %}

### image 测试

{{ image(src="avatar.jpg",width="300px") }}

### video 测试

{{ video(bilibili="BV1Yy421a75p", max_width="100%", caption="演示视频") }}

### Links 测试

{{ links(group="github") }}

### Friends 测试

{{ friends(group="hahaha") }}

### 代码块测试

```java,name=/home/Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```java,name=Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

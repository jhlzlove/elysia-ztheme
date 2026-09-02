+++
title = "04 · 部署与进阶"
date = 2026-03-04
weight = 4
description = "一键发布至 GitHub Pages，及手动/Netlify 与多风格扩展。"
+++

## 一键部署 GitHub Pages

仓库已内置 `.github/workflows/deploy.yml`：

{% raw %}
```yaml
name: deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { submodules: true, fetch-depth: 0 }
      - uses: shalzz/zola-deploy-action@v0.19.2
        env:
          BUILD_ONLY: false
          BUILD_FLAGS: --force
          PAGES_BRANCH: pages
          REPOSITORY: ${{ github.repository }}
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

**步骤**

1. `Settings → Pages → Build and deployment → Branch: pages / root`
2. `base_url` 改为 `https://<user>.github.io/<repo>/`（若为 `<user>.github.io` 则为根域）
3. 推送 `main`，Actions 自动 `zola build` 并推送 `pages` 分支
4. 首次需在 Actions 中手动 Approve

```bash
git add . && git commit -m "feat: init elysia" && git push -u origin main
```

## 手动部署

```bash
zola build --force
# public/ 为纯静态，任意上传
rsync -avz --delete public/ user@server:/var/www/html/
# 或
npx serve public
```

`base_url` 必须与线上域名一致，否则 `sitemap.xml` 与 `canonical` 会错。

## Netlify / Vercel

| 平台 | 配置 |
| --- | --- |
| Netlify | `Build command: zola build` `Publish directory: public` `Env: ZOLA_VERSION=0.23.4` |
| Vercel | 导入后自动识别 `zola.toml`，同上 |
| Cloudflare Pages | 同 Netlify，构建镜像选 Rust |

## 自定义域名

`static/CNAME` 放入：

```
blog.example.com
```

`base_url` 同步改为 `https://blog.example.com`，DNS 添加 `CNAME` 指向 `user.github.io`。

## 进阶：多风格共存

通过 `template` + `extra.style` 实现同站多版式，典型为 `resume` 与预留的 `business`。

**简历独立页（已内置）**

```toml
# content/resume.md
+++
title = "简历"
template = "resume.html"
[extra]
style = "resume"
name = "小风"
role = "软件开发工程师"
# ... experience/skills/projects 见文件内
+++
```

`resume.html` 不继承 `base.html` 的侧边栏/目录，仅保留 `Toggle Dark` 与双栏卡片，内容由 `extra.*` 驱动，`page.content` 可选追加 Markdown。

**新增商业落地页示例**

```bash
cp themes/elysia/templates/resume.html themes/elysia/templates/business.html
```

```toml
# content/business.md
+++
title = "产品主页"
template = "business.html"
[extra]
style = "business"
+++
```

在 `business.html` 中自写首屏、定价、FAQ 等区块，与 `blog/wiki/resume` 共存互不干扰。

### 新增自定义组件

1. 在 `themes/elysia/templates/components.html` 追加：

{% raw %}
```jinja
{% component badge(text="NEW") -%}
<span class="badge">{{ text }}</span>
{% endcomponent badge -%}
```
{% endraw %}

2. 正文中使用：

{% raw %}
```md
{{ <badge text="Hi" /> }}
```
{% endraw %}

### 覆盖样式

`themes/elysia/static/css/style.css` 为主样式，站点级可新增 `static/css/custom.css` 并在 `extra.inject.head` 引入，优先级更高。

```toml
[extra.inject]
head = [
  { rel="stylesheet", href="/css/custom.css" },
]
```

```css
/* static/css/custom.css */
:root{ --accent:#0ea5e9; }
```

## 常见发布问题

| 现象 | 排查 |
| --- | --- |
| Pages 404 | `pages` 分支未发布或 `base_url` 末尾缺少 `/` |
| 样式丢失 | `base_url` 与实际域名不一致导致 `get_url` 失效 |
| 中文分类 404 | 已修复为 `slugify.taxonomies="off"`，勿改回 `"on"` |
| 搜索无结果 | `extra.algolia.enable` 未开或 `index_name` 错 |
| 评论不显示 | `extra.comments.provider` 与对应 `server/repo` 未配 |

{% <poetry title="结语" author="Elysia"> %}
愿阅读成为享受，
愿记录成为习惯。
{% </poetry> %}

> 全系列至此完成，下一篇 `05 · Markdown 与组件` 为可复制的写作手册，建议收藏。

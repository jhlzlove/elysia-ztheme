+++
title = "04 · 部署网站"
date = 2026-09-02
weight = 4
description = "构建静态文件，并部署到 GitHub Pages 或其他静态托管平台。"
+++

Zola 会把站点构建成纯静态文件。部署时只需要把 `public/` 发布到静态托管平台。

## GitHub Pages

在站点仓库中创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Zola site

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0
      - uses: shalzz/zola-deploy-action@master
        env:
          PAGES_BRANCH: 部署的分支
          REPOSITORY: 部署的仓库
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

然后：

1. 将 `base_url` 改成实际地址。项目站点通常是 `https://用户名.github.io/仓库名/`，用户站点则是 `https://用户名.github.io/`。
2. 推送到 `main` 分支。
3. 在 GitHub 的 **Settings → Pages** 中选择 Action 或构建输出分支。
4. 等待 Actions 完成后打开站点地址。

## 手动构建

```bash
zola build --force
```

把 `public/` 上传到 Nginx、Apache、对象存储或其他静态托管服务。例如使用 rsync：

```bash
rsync -avz --delete public/ user@example.com:/var/www/html/
```

本地检查构建结果：

```bash
npx serve public
```

## Netlify、Vercel 和 Cloudflare Pages

通用设置如下：

| 平台 | 构建命令 | 发布目录 |
| --- | --- | --- |
| Netlify | `zola build` | `public` |
| Vercel | `zola build` | `public` |
| Cloudflare Pages | `zola build` | `public` |

如果平台没有预装 Zola，请指定 `ZOLA_VERSION=0.23.4` 或使用对应的 Zola 构建镜像。

## 自定义域名

GitHub Pages 可以在 `static/CNAME` 中写入域名：

```text
blog.example.com
```

同时将配置改为：

```toml
base_url = "https://blog.example.com"
```

再按域名服务商要求添加 DNS 记录。

## 发布前检查

- `base_url` 是否为线上真实地址。
- 图片、字体和自定义 CSS 的路径是否以 `/` 开头并能被访问。
- Git 子模块是否随部署一起检出。
- 搜索索引是否已更新。
- 评论服务的域名、仓库或服务器配置是否正确。
- 自定义域名的 HTTPS 是否已生效。

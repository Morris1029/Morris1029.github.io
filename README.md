# Morris1029.github.io

莫东亮的个人主页与博客，展示教育经历、研究方向、行业实践、代表项目与荣誉认证，并记录信息检索、AI 智能体、数据治理与工程实践。

## 技术说明

- Astro 静态站点生成，不需要后端或数据库
- Markdown 内容集合，文章会自动生成列表页和详情页
- 响应式页面，支持桌面端与移动端
- GitHub Actions 构建并发布到 GitHub Pages
- 首页图片使用响应式 WebP 资源

## 本地预览

首次使用时安装依赖：

```powershell
pnpm install
```

启动本地开发服务器：

```powershell
pnpm dev
```

打开终端显示的本地地址（默认是 `http://localhost:4321/`）。

## 写一篇文章

在 `src/content/blog/` 中新建 `.md` 文件，例如 `my-new-post.md`：

```markdown
---
title: 文章标题
description: 用一两句话概括文章内容
pubDate: 2026-07-26
tags:
  - AI 智能体
  - 工程实践
draft: false
---

从这里开始写正文。
```

- 文件名会成为文章网址，如 `my-new-post.md` 对应 `/blog/my-new-post/`
- `draft: true` 的文章不会出现在构建结果中
- 修改后运行 `pnpm build`，确认构建成功再提交

## 发布

仓库名为 `Morris1029.github.io`。推送到 `main` 后，`.github/workflows/deploy.yml`
会自动安装依赖、生成静态文件并部署到 <https://morris1029.github.io/>。

如首次启用 GitHub Actions 部署，请在仓库 `Settings → Pages → Build and deployment`
中将 Source 设置为 `GitHub Actions`。

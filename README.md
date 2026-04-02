# Claude Code Book

一个基于 Claude Code 2.1.88 源码快照与 Anthropic 官方资料整理的在线书籍站点。

## 本地使用

```bash
npm install
npm run check
npm run build
python3 -m http.server 5501
```

然后访问 `http://localhost:5501/index.html`。

## 仓库内容

- `index.html`: 书籍封面页
- `book.html`: 在线阅读页
- `manuscript.md`: Markdown 书稿
- `assets/`: 样式、脚本与图示资源
- `src/`: 前端交互脚本源码

## 如何修改这本在线书的内容

- 改封面页与首页摘要：编辑 `index.html`
- 改在线阅读正文：编辑 `book.html`
- 改可下载的 Markdown 书稿：编辑 `manuscript.md`
- 改整体视觉样式：编辑 `assets/style.css`
- 改交互与动态效果：编辑 `src/app.ts`

注意：当前项目里，`manuscript.md` 不是自动生成网页的源文件。也就是说，只修改 `manuscript.md` 不会自动同步到 `book.html`。

如果你修改了 `src/app.ts`，需要重新构建前端脚本：

```bash
npm run build
```

本地预览：

```bash
python3 -m http.server 5501
```

然后访问 `http://localhost:5501/index.html`。

## 发布

这个项目适合直接托管在 GitHub Pages 项目页：

`https://<github-username>.github.io/claude-code-book/`

## License

MIT. See `LICENSE`.

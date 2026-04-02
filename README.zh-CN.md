[English](README.md)

# 《Claude Code：面向产品经理的深度拆解与产品白盒》

这个仓库承载的是一本围绕 Claude Code 展开的在线书。在CC 2.1.88被迫开源后，我使用了GPT 5.4 Pro神力进行了解读和归纳，本书面向产品经理，收集了2025-2026关键概念和内容，以及最近大火的Harness，让我们拆开看看这个当前版本最强的Harness工程是个什么亚子。

本书并不满足于解释“Claude Code 有哪些功能”，而是试图从产品、运行时与源码三个层面，系统拆解 Claude Code 为什么成立、为什么强，以及它对产品经理、技术负责人和 AI 产品设计者到底意味着什么。

本书基于 Claude Code 2.1.88 源码快照与 Anthropic 官方公开资料整理而成。目标不是做表面介绍，而是把 Claude Code 拆成一套可以被理解、被借鉴、被迁移的方法论。

## 这本书想回答的 3 个核心问题

1. Claude Code 作为产品，为什么成立？
2. Claude Code 作为运行时，为什么看起来比普通 CLI agent 更成熟？
3. Claude Code 作为源码系统，哪些地方值得产品经理直接学习与借鉴？

## 适合谁阅读

- 想系统理解 Claude Code 的产品经理
- 正在做 AI / Agent / 开发工具产品的人
- 希望把 Claude Code 引入团队流程的人
- 想从优秀源码中提炼产品方法与设计启发的人

## 你会在这本书里看到什么

- Claude Code 的产品定位与系统心智模型
- QueryEngine、工具循环、权限治理与记忆机制的白盒理解
- Claude Code 为什么能持续推进复杂任务，而不只是“回答一个问题”
- Claude Code 与其他 CLI agent 的关键差异、边界与限制
- 对产品经理真正有启发的设计原则、组织采用方式与落地路径

## 在线阅读

- 英文首页：[https://foxtailsss-andy.github.io/claude-code-book-4PM/](https://foxtailsss-andy.github.io/claude-code-book-4PM/)
- 英文正文：[https://foxtailsss-andy.github.io/claude-code-book-4PM/book.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/book.html)
- 中文首页：[https://foxtailsss-andy.github.io/claude-code-book-4PM/index.zh.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/index.zh.html)
- 中文正文：[https://foxtailsss-andy.github.io/claude-code-book-4PM/book.zh.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/book.zh.html)

## 书稿文件

- 英文书稿：[manuscript.en.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.en.md)
- 中文书稿：[manuscript.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.md)

## 仓库结构

- [index.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/index.html)：英文默认首页
- [book.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/book.html)：英文默认正文页
- [index.zh.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/index.zh.html)：中文首页镜像
- [book.zh.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/book.zh.html)：中文正文镜像
- [manuscript.en.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.en.md)：英文书稿源文件
- [manuscript.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.md)：中文书稿源文件
- [assets/style.css](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/assets/style.css)：共享样式系统
- [src/app.ts](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/src/app.ts)：交互与正文渲染逻辑

## License

MIT。见 [LICENSE](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/LICENSE)。

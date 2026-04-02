[简体中文](README.zh-CN.md)

# Claude Code: A Product Manager's White-Box Guide

This repository is home to a book I wrote after spending a lot of time reading through the Claude Code 2.1.88 snapshot and Anthropic's public materials. I wanted something more useful than a feature summary: a way to explain why Claude Code feels coherent as a product, sturdy as a runtime, and unusually worth studying if you build AI products yourself.

So this project became an online book: part product analysis, part runtime reading notebook, and part collection of design lessons for product managers, technical leads, and agent builders.

## What I Wrote It To Answer

1. Why does Claude Code work as a product?
2. Why does it feel more mature than a typical CLI agent at runtime?
3. Which parts of the source system are worth studying directly from a PM perspective?

## Who I Think Will Get the Most Out of It

- Product managers who want a structured understanding of Claude Code
- People building AI, agent, or developer-tool products
- Teams evaluating Claude Code for real workflows
- Readers extracting reusable product methods from strong source systems

## What You Will Find Inside

- A product and systems model for Claude Code
- White-box explanation of QueryEngine, tools, governance, memory, and context continuity
- A practical reading path from source structure to product lessons
- A full English edition covering 16 chapters and 4 appendices

## Why I Think It Is Worth Reading

Claude Code is interesting not just because it is good at coding, but because it shows what happens when model capability is packaged into a real working system: one that can act, keep context, stay governable, recover from interruptions, and still feel usable.

That is the layer I cared about while writing this book, and it is the layer I think product people can learn the most from.

## Read Online

- English homepage: [https://foxtailsss-andy.github.io/claude-code-book-4PM/](https://foxtailsss-andy.github.io/claude-code-book-4PM/)
- English reading page: [https://foxtailsss-andy.github.io/claude-code-book-4PM/book.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/book.html)
- Chinese homepage: [https://foxtailsss-andy.github.io/claude-code-book-4PM/index.zh.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/index.zh.html)
- Chinese reading page: [https://foxtailsss-andy.github.io/claude-code-book-4PM/book.zh.html](https://foxtailsss-andy.github.io/claude-code-book-4PM/book.zh.html)

## Manuscripts

- English manuscript: [manuscript.en.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.en.md)
- Chinese manuscript: [manuscript.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.md)

## Repository Structure

- [index.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/index.html): English default homepage
- [book.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/book.html): English default reading page
- [index.zh.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/index.zh.html): Chinese homepage mirror
- [book.zh.html](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/book.zh.html): Chinese reading page mirror
- [manuscript.en.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.en.md): English manuscript source
- [manuscript.md](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/manuscript.md): Chinese manuscript source
- [assets/style.css](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/assets/style.css): shared visual system
- [src/app.ts](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/src/app.ts): interaction and rendering logic

## License

MIT. See [LICENSE](/Users/foxtailsss/Desktop/Thats%20Claude%20Code/claude-code-book/LICENSE).

# Bilingual Site and README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an English-default bilingual website and bilingual GitHub homepage, including a full English edition of the 16 chapters and appendices with safe long-form layout.

**Architecture:** Keep the current static-site architecture, promote English into the default route files, and add Chinese mirror pages with explicit language-switch links. Use shared CSS and script assets, but add `lang="en"`-scoped layout rules so the English long-form reading page remains stable and does not overflow.

**Tech Stack:** HTML, CSS, TypeScript, esbuild, GitHub Pages, GitHub README Markdown

---

### Task 1: Define bilingual page targeting and tests

**Files:**
- Create: `src/pretext-targets.test.ts` or update existing selector tests
- Modify: `src/pretext-targets.ts`

- [ ] **Step 1: Write selector test expectations**

Define which text blocks should remain native in both English and Chinese long-form pages.

- [ ] **Step 2: Run the test to verify current selector assumptions**

Run: `node --test tests/pretext-targets.test.ts`
Expected: current behavior is captured before layout changes.

- [ ] **Step 3: Update selector targeting if needed**

Keep decorative pretext only on short content blocks that are safe in both languages.

- [ ] **Step 4: Re-run the test**

Run: `node --test tests/pretext-targets.test.ts`
Expected: PASS

### Task 2: Build the bilingual website pages

**Files:**
- Modify: `index.html`
- Modify: `book.html`
- Create: `index.zh.html`
- Create: `book.zh.html`

- [ ] **Step 1: Convert `index.html` into the English default homepage**

Replace Chinese homepage copy with English content and add a language switch link to `index.zh.html`.

- [ ] **Step 2: Convert `book.html` into the English default reading page**

Translate visible UI copy, sidebar labels, chapter headings, chapter summaries, and the full long-form content for all chapters and appendices.

- [ ] **Step 3: Create `index.zh.html`**

Mirror the current Chinese homepage and link back to the English homepage.

- [ ] **Step 4: Create `book.zh.html`**

Mirror the current Chinese reading page and adjust internal links from `index.html` / `book.html` to their Chinese variants.

- [ ] **Step 5: Verify all cross-language navigation**

Ensure both language trees link correctly between homepage, reading page, and Markdown manuscript entry points.

### Task 3: Add the English manuscript

**Files:**
- Create: `manuscript.en.md`

- [ ] **Step 1: Translate the Markdown manuscript into English**

Preserve structural headings, chapter ordering, and terminology consistency with the English website.

- [ ] **Step 2: Link the English manuscript from English pages**

Update English navigation and CTA buttons to point to `manuscript.en.md`.

### Task 4: Add English layout protection

**Files:**
- Modify: `assets/style.css`

- [ ] **Step 1: Add `html[lang="en"]` typography overrides**

Tune title sizing, line-height, sidebar layout, and card widths for English content.

- [ ] **Step 2: Add overflow protection**

Enable `overflow-wrap`, `word-break` only where needed, and `hyphens: auto` on English long-form text blocks.

- [ ] **Step 3: Rebuild the frontend bundle if script or cache versions change**

Run: `npm run build`
Expected: `assets/app.js` rebuilds successfully.

### Task 5: Build the bilingual GitHub homepage

**Files:**
- Modify: `README.md`
- Create: `README.zh-CN.md`

- [ ] **Step 1: Rewrite `README.md` as the default English repository homepage**

Include book introduction, audience, table-of-contents summary, reading links, and a top-level Chinese switch link.

- [ ] **Step 2: Create `README.zh-CN.md`**

Mirror the repository introduction in Chinese and add an English switch link back to `README.md`.

### Task 6: Validate the bilingual release

**Files:**
- Test: `tests/pretext-targets.test.ts`
- Test: `package.json`

- [ ] **Step 1: Run selector tests**

Run: `node --test tests/pretext-targets.test.ts`
Expected: PASS

- [ ] **Step 2: Run type check**

Run: `npm run check`
Expected: PASS

- [ ] **Step 3: Run build**

Run: `npm run build`
Expected: PASS and `assets/app.js` updated if required.

- [ ] **Step 4: Verify static links and language routes**

Confirm that `index.html`, `index.zh.html`, `book.html`, `book.zh.html`, `README.md`, and `README.zh-CN.md` all point to the correct counterparts.

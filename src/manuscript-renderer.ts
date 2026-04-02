import { marked } from 'marked'

type ManuscriptSection = {
  id: string
  label: string
  title: string
  section: HTMLElement
}

const EN_HEADING_RE = /^(Chapter\s+\d+|Appendix\s+[A-Z]|Preface|Contents)\s*:?\s*(.*)$/i
const ZH_HEADING_RE = /^(第\s*\d+\s*章|附录\s*[A-Z]|序|目录)\s*[：:]?\s*(.*)$/

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getSectionId(label: string, title: string, index: number): string {
  const enChapter = label.match(/^Chapter\s+(\d+)$/i)
  if (enChapter) return `chapter-${enChapter[1]}`

  const zhChapter = label.match(/^第\s*(\d+)\s*章$/)
  if (zhChapter) return `chapter-${zhChapter[1]}`

  const enAppendix = label.match(/^Appendix\s+([A-Z])$/i)
  if (enAppendix) return `appendix-${enAppendix[1].toLowerCase()}`

  const zhAppendix = label.match(/^附录\s*([A-Z])$/u)
  if (zhAppendix) return `appendix-${zhAppendix[1].toLowerCase()}`

  if (/^Preface$/i.test(label) || label === '序') return 'preface'

  const titleId = slugify(title)
  if (titleId) return titleId

  return `section-${index + 1}`
}

function getSectionHeadingParts(text: string): { label: string; title: string } {
  const match = text.match(EN_HEADING_RE) ?? text.match(ZH_HEADING_RE)
  if (!match) {
    return { label: '', title: text.trim() }
  }

  const [, rawLabel, rawTitle] = match
  return {
    label: rawLabel.trim(),
    title: (rawTitle || rawLabel).trim(),
  }
}

function assignInnerHeadingIds(root: HTMLElement, sectionId: string): void {
  const headings = Array.from(root.querySelectorAll<HTMLElement>('h3, h4'))
  headings.forEach((heading, index) => {
    if (heading.id) return
    const text = heading.textContent?.trim()
    if (!text) return
    heading.id = `${sectionId}-${slugify(text) || `sub-${index + 1}`}`
  })
}

function isParagraphCandidate(node: ChildNode | undefined): node is HTMLParagraphElement {
  return node instanceof HTMLParagraphElement
}

function buildStructuredSections(container: HTMLElement): ManuscriptSection[] {
  const nodes = Array.from(container.childNodes)
  const groups: Array<{ heading: HTMLHeadingElement; nodes: ChildNode[] }> = []
  let current: { heading: HTMLHeadingElement; nodes: ChildNode[] } | null = null

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && !(node.textContent || '').trim()) {
      return
    }

    if (node instanceof HTMLHeadingElement && node.tagName === 'H2') {
      if (current) groups.push(current)
      current = { heading: node, nodes: [] }
      return
    }

    if (current) current.nodes.push(node)
  })

  if (current) groups.push(current)

  return groups
    .filter(({ heading }) => {
      const value = heading.textContent?.trim().toLowerCase()
      return value !== 'contents' && value !== '目录'
    })
    .map(({ heading, nodes }, index) => {
      const headingText = heading.textContent?.trim() || `Section ${index + 1}`
      const { label, title } = getSectionHeadingParts(headingText)
      const idBase = getSectionId(label, title, index)

      const section = document.createElement('section')
      section.className = 'chapter reveal'
      section.dataset.reveal = ''
      section.id = idBase

      if (label.toLowerCase().startsWith('appendix') || label.startsWith('附录')) {
        section.classList.add('appendix')
      }

      const header = document.createElement('header')
      header.className = 'chapter-head'

      if (label) {
        const kicker = document.createElement('div')
        kicker.className = 'chapter-kicker'
        kicker.textContent = label
        header.append(kicker)
      }

      const titleNode = document.createElement('h2')
      titleNode.textContent = title
      header.append(titleNode)

      const body = document.createElement('div')
      body.className = 'chapter-body'

      let startIndex = 0
      const firstNode = nodes[0]
      if (isParagraphCandidate(firstNode)) {
        const summary = document.createElement('p')
        summary.className = 'chapter-summary'
        summary.innerHTML = firstNode.innerHTML
        header.append(summary)
        startIndex = 1
      }

      nodes.slice(startIndex).forEach((node) => {
        body.append(node.cloneNode(true))
      })

      assignInnerHeadingIds(body, idBase)

      section.append(header, body)

      return {
        id: idBase,
        label: label || `Section ${index + 1}`,
        title,
        section,
      }
    })
}

function updateSidebar(nav: HTMLElement, sections: ManuscriptSection[]): void {
  nav.replaceChildren()

  sections.forEach((entry, index) => {
    const link = document.createElement('a')
    link.href = `#${entry.id}`

    const label = document.createElement('span')
    label.className = 'chapter-no'

    if (/^Chapter\s+\d+$/i.test(entry.label)) {
      const number = entry.label.replace(/^Chapter\s+/i, '').padStart(2, '0')
      label.textContent = number
    } else if (/^第\s*\d+\s*章$/.test(entry.label)) {
      const number = entry.label.replace(/[^\d]/g, '').padStart(2, '0')
      label.textContent = number
    } else if (/^Appendix\s+/i.test(entry.label)) {
      label.textContent = entry.label.replace(/^Appendix\s+/i, '')
    } else if (/^附录\s*/.test(entry.label)) {
      label.textContent = entry.label.replace(/^附录\s*/u, '')
    } else if (/^Preface$/i.test(entry.label)) {
      label.textContent = 'Pre'
    } else if (entry.label === '序') {
      label.textContent = '序'
    } else {
      label.textContent = String(index + 1).padStart(2, '0')
    }

    const text = document.createElement('span')
    text.textContent = entry.title

    link.append(label, text)
    nav.append(link)
  })
}

export async function initManuscriptPage(): Promise<void> {
  const root = document.querySelector<HTMLElement>('[data-manuscript-root]')
  const manuscriptPath = root?.dataset.manuscriptPath

  if (!root || !manuscriptPath) return

  const response = await fetch(manuscriptPath)
  if (!response.ok) {
    throw new Error(`Failed to load manuscript: ${manuscriptPath}`)
  }

  const markdown = await response.text()
  const rendered = document.createElement('div')
  rendered.innerHTML = marked.parse(markdown, { async: false, gfm: true })

  const topTitle = rendered.querySelector('h1')
  topTitle?.remove()
  const topQuote = rendered.querySelector('blockquote')
  topQuote?.remove()

  const sections = buildStructuredSections(rendered)
  root.replaceChildren(...sections.map((entry) => entry.section))

  const nav = document.querySelector<HTMLElement>('[data-sidebar-nav]')
  if (nav) {
    updateSidebar(nav, sections)
  }
}

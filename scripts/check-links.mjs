import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const docsDir = path.join(root, 'docs')
const markdownFiles = []

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) await walk(full)
    if (entry.isFile() && entry.name.endsWith('.md')) markdownFiles.push(full)
  }
}

function stripAnchor(link) {
  return link.split('#')[0]
}

await walk(docsDir)

const missing = []
const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g

for (const file of markdownFiles) {
  const content = await fs.readFile(file, 'utf8')
  for (const match of content.matchAll(linkRegex)) {
    const raw = match[1]
    if (!raw || raw.startsWith('http') || raw.startsWith('mailto:')) continue
    const clean = stripAnchor(raw)
    if (!clean) continue
    const target = path.resolve(path.dirname(file), clean)
    try {
      await fs.access(target)
    } catch {
      missing.push({ file: path.relative(root, file), link: raw })
    }
  }
}

if (missing.length > 0) {
  console.error('Links locais quebrados encontrados:')
  for (const item of missing) console.error(`- ${item.file}: ${item.link}`)
  process.exit(1)
}

console.log(`OK: ${markdownFiles.length} arquivos Markdown verificados.`)

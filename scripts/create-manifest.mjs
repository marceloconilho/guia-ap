import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    if (entry.isFile()) files.push(path.relative(root, full))
  }
  return files.sort()
}

const files = await walk(root)
const manifest = {
  generatedAt: new Date().toISOString(),
  project: 'AP Turbo Engineering Manual',
  runtime: 'Node.js',
  staticDocsEngine: 'VitePress',
  files
}

await fs.writeFile(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8')
console.log(`Manifest criado com ${files.length} arquivos.`)

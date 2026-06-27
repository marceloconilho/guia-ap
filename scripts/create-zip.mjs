import { spawnSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()
const zipName = 'ap-turbo-engineering-manual-node.zip'
const parent = path.dirname(root)

const result = spawnSync('zip', ['-r', path.join(parent, zipName), path.basename(root), '-x', '*/node_modules/*', '*/.vitepress/dist/*', '*/.vitepress/cache/*'], {
  cwd: parent,
  stdio: 'inherit'
})

if (result.status !== 0) process.exit(result.status ?? 1)

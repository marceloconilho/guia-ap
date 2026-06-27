# AP Turbo Engineering Manual — Node/VitePress

Base em Markdown para um guia vivo sobre preparação turbo em motores AP, pronta para rodar com **Node.js + VitePress**.

Nada de Python, nada de MkDocs.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## Build estático

```bash
npm run build
npm run preview
```

O build final fica em:

```text
docs/.vitepress/dist
```

Esse diretório pode ir para GitHub Pages, Netlify, Vercel, Cloudflare Pages ou qualquer hospedagem estática.

## Estrutura

```text
docs/
  index.md
  .vitepress/
    config.mts
  volume-1/
    00-guia-vivo-do-leitor.md
    01-o-que-e-um-motor-turbo.md
    ...
  apendices/
    mapas-de-compressor.md
    glossario.md
    referencias.md
  assets/
    diagrams/
      *.svg

data/
  turbos.json
  sources.json

scripts/
  check-links.mjs
  create-manifest.mjs
  create-zip.mjs
```

## Scripts úteis

```bash
npm run dev          # roda a documentação local
npm run build        # gera site estático
npm run preview      # pré-visualiza o build
npm run check:links  # verifica links locais quebrados
npm run manifest     # gera manifest.json
npm run zip          # recria o zip do projeto
```

## Observação técnica

Os diagramas SVG são **didáticos**. Eles representam leitura conceitual de fluxo e perda provável, não CFD real de ANSYS/OpenFOAM/SimScale.

Os mapas de compressor oficiais ficam linkados nos apêndices. Quando não houver mapa público oficial, o material indica a limitação em vez de inventar dado.

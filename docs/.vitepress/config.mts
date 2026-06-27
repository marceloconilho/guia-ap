import { defineConfig } from "vitepress";

// GitHub Pages (project site): https://marceloconilho.github.io/guia-ap/
const repoBase = "/guia-ap/";

export default defineConfig({
  title: "AP Turbo Engineering Manual",
  description: "Da física dos gases ao acerto final.",
  lang: "pt-BR",
  base: repoBase,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `${repoBase}assets/diagrams/sistema_turbo_energia.svg`,
        type: "image/svg+xml",
      },
    ],
    [
      "script",
      {
        defer: "",
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token": "dbf953fcfb2b4bb8ad9e3ecbc583c72a"}',
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/diagrams/sistema_turbo_energia.svg",
    siteTitle: "AP Turbo Manual",
    nav: [
      { text: "Início", link: "/" },
      { text: "Volume 0", link: "/volume-0/01-preparacao-aspirada-ap" },
      { text: "Volume I", link: "/volume-1/00-guia-vivo-do-leitor" },
      { text: "Apêndices", link: "/apendices/glossario" },
    ],
    sidebar: [
      {
        text: "Comece aqui",
        collapsed: false,
        items: [
          { text: "Início", link: "/" },
          {
            text: "Guia vivo do leitor",
            link: "/volume-1/00-guia-vivo-do-leitor",
          },
        ],
      },
      {
        text: "Volume 0 — Antes do turbo",
        collapsed: false,
        items: [
          {
            text: "01 — Preparação aspirada do AP",
            link: "/volume-0/01-preparacao-aspirada-ap",
          },
          {
            text: "02 — Saúde mecânica",
            link: "/volume-0/02-saude-mecanica-ap-aspirado",
          },
          {
            text: "03 — Comando de válvulas",
            link: "/volume-0/03-comando-valvulas-ap",
          },
          {
            text: "04 — Cabeçote 8V",
            link: "/volume-0/04-cabecote-fluxo-ap-8v",
          },
          {
            text: "05 — Admissão",
            link: "/volume-0/05-admissao-borboleta-coletor-ap",
          },
          {
            text: "06 — Escape aspirado",
            link: "/volume-0/06-escape-aspirado-ap",
          },
          {
            text: "07 — Internos e compressão",
            link: "/volume-0/07-internos-compressao-forjado-ap",
          },
          {
            text: "08 — Acerto programável",
            link: "/volume-0/08-acerto-aspirado-injecao-programavel",
          },
          {
            text: "09 — Dyno e linha de base",
            link: "/volume-0/09-dinamometro-linha-base-pre-turbo",
          },
        ],
      },
      {
        text: "Volume I — Fundamentos",
        collapsed: false,
        items: [
          {
            text: "01 — O que é um motor turbo",
            link: "/volume-1/01-o-que-e-um-motor-turbo",
          },
          {
            text: "02 — Caminho dos gases",
            link: "/volume-1/02-caminho-dos-gases",
          },
          {
            text: "03 — Compressor e mapas",
            link: "/volume-1/03-compressor-e-mapas",
          },
          {
            text: "04 — Turbina e lado quente",
            link: "/volume-1/04-turbina-lado-quente",
          },
          { text: "05 — A/R e geometria", link: "/volume-1/05-ar-geometria" },
          { text: "06 — Spool", link: "/volume-1/06-spool" },
          { text: "07 — Backpressure", link: "/volume-1/07-backpressure" },
          {
            text: "08 — Wastegate",
            link: "/volume-1/08-wastegate-controle-boost",
          },
          {
            text: "09 — Intercooler",
            link: "/volume-1/09-intercooler-temperatura",
          },
          {
            text: "10 — Combustível e AFR",
            link: "/volume-1/10-combustivel-afr-ignicao",
          },
          {
            text: "11 — Coletores AP pulsativos",
            link: "/volume-1/11-coletores-ap-pulsativo",
          },
          {
            text: "12 — Turbinas para AP",
            link: "/volume-1/12-turbinas-para-ap",
          },
          {
            text: "13 — Projeto Marcelo",
            link: "/volume-1/13-projeto-marcelo-ap-20",
          },
          { text: "14 — Mitos", link: "/volume-1/14-mitos-erros-classicos" },
          { text: "15 — Roadmap", link: "/volume-1/15-roadmap-evolucao" },
          {
            text: "16 — CFD simplificado",
            link: "/volume-1/16-metodologia-cfd-simplificado",
          },
        ],
      },
      {
        text: "Apêndices",
        collapsed: false,
        items: [
          {
            text: "Mapas de compressor",
            link: "/apendices/mapas-de-compressor",
          },
          { text: "Glossário", link: "/apendices/glossario" },
          { text: "Referências", link: "/apendices/referencias" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "Nesta página",
    },
    docFooter: {
      prev: "Anterior",
      next: "Próximo",
    },
    lastUpdated: {
      text: "Atualizado em",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    footer: {
      message: "Guia vivo em Markdown. Diagramas didáticos, não CFD real.",
      copyright: "Criado por Marcelo Conilho + ChatGPT",
    },
  },
});

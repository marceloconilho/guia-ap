---
title: "Referências"
status: "base técnica"
ultima_atualizacao: "2026-06-27"
---

# Referências

Este apêndice centraliza as fontes usadas no manual. **Todo capítulo técnico deve citar aqui ou em `## Referências usadas neste capítulo`**, com a classificação de confiabilidade explícita.

## Como ler a confiabilidade das fontes

| Selo | Significado | Como usar no texto |
|---|---|---|
| 🔬 **Alta** | Fabricante, manual oficial, ficha técnica estruturada, dado medido do projeto | Pode sustentar número e afirmação técnica central |
| 📚 **Média** | Literatura secundária revisada, enciclopédia com citações, artigo técnico reconhecido | Boa para contexto histórico e conceitos gerais |
| 🟡 **Comercial** | Revenda, loja, blog especializado, ficha não oficial | Útil para part number e faixa declarada; confirmar antes de comprar |
| ⚠️ **Baixa / warning** | Wiki colaborativa, PDF espelhado, site pessoal, fórum | **Nunca** sustentar sozinha um número crítico; sempre marcar o limite da fonte |
| 📁 **Interna** | Capítulo ou dado do próprio manual / Projeto Marcelo | Medida documentada no projeto; indicar condição de teste |

Quando uma afirmação usar fonte ⚠️, o capítulo **deve** incluir bloco de aviso:

```md
> ⚠️ **Fonte de confiabilidade limitada**: esta informação vem de [nome]. Use como pista, não como especificação final. Confirme em manual de oficina, medição ou fabricante.
```

---

## Volume 0 — Preparação aspirada

### Motor AP — arquitetura e especificações de fábrica

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `ap-wikipedia-pt` | [Volkswagen AP — Wikipédia](https://pt.wikipedia.org/wiki/Volkswagen_AP) | 📚 | História, cilindradas, ordem de uso no Brasil, arquitetura OHC 8V |
| `ap-gol-2000-ficha` | [Volkswagen Gol 2.0 2000 — ficha técnica](https://www.fichacompleta.com.br/carros/volkswagen/gol-2-0-2000) | 🟡 | 111 cv a 5.250 rpm; 17,3 kgfm a 3.000 rpm; código AP-2000 |
| `ap-santana-glsi-ficha` | [Volkswagen Santana GLSi 2.0 1992 — ficha técnica](https://www.fichacompleta.com.br/carros/volkswagen/santana-glsi-2-0-1992-gasolina) | 🟡 | 112 cv; 17,5 kgfm — variante injetada AP 2.0 |
| `ap-mecawiki-ea827` | [Volkswagen EA-827 — Mecawiki](https://mecawiki.fandom.com/pt-br/wiki/Volkswagen_EA-827) | ⚠️ | Variantes carburada/injetada, CR, recordes aspirados citados na comunidade |
| `ap-wikimotorpedia` | [Volkswagen AP — Wikimotorpedia](https://wiki.nivel-teorico.com/index.php/Volkswagen_AP) | ⚠️ | Sistemas de injeção Bosch/Marelli por ano; ordem 1-3-4-2 |
| `ap-bremei-vw` | [Evolução motores VW — Bremei Street Car](https://bremeistreetcar.webnode.page/curiosidades/vw/) | ⚠️ | Tabela comparativa AP 2.0 8V por alimentação (109–121 cv) |
| `ap-pdfcoffee-torques` | [Medidas e torques motores AP — PDFCoffee](https://pdfcoffee.com/medidas-de-montagens-e-torques-de-aperto-dos-motores-ap-pdf-free.html) | ⚠️ | Folgas de válvula, compressão, ordem 1-3-4-2, torque cabeçote |
| `ap-coffeemotors-guia` | [Motor AP — guia CoffeeMotors](https://coffeemotors.com.br/motor-ap-guia-completo/) | 🟡 | Contexto de preparação no Brasil; especificações resumidas |

> ⚠️ **Regra do Volume 0**: números de potência/torque de fábrica devem cruzar **pelo menos duas fontes** quando uma delas for ⚠️ ou 🟡. Preferir combinação `ap-gol-2000-ficha` + `ap-wikipedia-pt` ou `ap-bremei-vw`.

> ⚠️ **Regra geral (todos os volumes)**: quanto mais crítico o número, mais alta deve ser a fonte. Fonte ⚠️ ou 🟡 isolada **sempre** exige bloco de warning no capítulo.

### Saúde mecânica, compressão e folgas

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `ap-pdfcoffee-torques` | (ver acima) | ⚠️ | Folgas admissão ~0,15–0,25 mm; escape ~0,35–0,45 mm |
| `ap-wikipedia-pt` | (ver acima) | 📚 | Arquitetura bloco/cabeçote; contexto mecânico |
| `sae-j1349` | [SAE J1349 — Engine Power Test Code](https://www.sae.org/standards/content/j1349_201408/) | 📚 | Diferença potência motor vs condições de medição (referência metodológica) |

### Comando de válvulas e distribuição

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `ap-pdfcoffee-torques` | (ver acima) | ⚠️ | Folgas pós-troca de comando |
| `garrett-engine-basics` | [Garrett — Knowledge Center OEM/Expert](https://www.garrettmotion.com/knowledge-center-category/oem/expert/) | 🔬 | Conceitos de fluxo, eficiência e sincronismo em motores turbo/aspirados |
| `garrett-ar-article` | [Garrett — diferença que o A/R faz](https://www.garrettmotion.com/news/newsroom/article/turbo-tech-how-to-turbo-and-the-difference-an-a-r-makes-for-optimizing-your-turbo-system/) | 🔬 | Relação escape/admissão, resposta e restrição |

> ⚠️ **Comandos 49G, 44i, SP etc.**: não há ficha dinamométrica pública padronizada do fabricante neste repositório. Tratar perfis como 🔧 prática de mercado brasileiro; confirmar lift/duração/LSA na ficha do preparador antes da compra.

### Cabeçote, admissão e escape aspirado

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `ap-mecawiki-ea827` | (ver acima) | ⚠️ | Taxas de compressão por versão (9:1 carburado; 10:1 injetado) |
| `ap-pdfcoffee-torques` | (ver acima) | ⚠️ | Altura mínima cabeçote; sequência aperto |
| `garrett-engine-basics` | (ver acima) | 🔬 | Fluxo, restrição, relação pressão/massa de ar |
| `manual-vol1-backpressure` | [Cap. 7 — Backpressure](../volume-1/07-backpressure.md) | 📁 | Backpressure aspirado vs pré-turbina |

### Internos, compressão e forjado

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `ap-wikipedia-pt` | (ver acima) | 📚 | Bielas 144 mm (AP 8V); bloco ferro fundido |
| `ap-bremei-vw` | (ver acima) | ⚠️ | Diâmetro 82,5 mm; curso 92,8 mm; CR por versão |
| `ap-mecawiki-ea827` | (ver acima) | ⚠️ | Variantes de pistão e compressão |

### Acerto, injeção e datalogger

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `fueltech-ft450-produto` | [FuelTech FT450 — produto oficial](https://www.fueltech.com.br/produtos/ft450) | 🔬 | Recursos de injeção sequencial, ignição, flex fuel, datalogger |
| `fueltech-manuais-pt` | [FuelTech — manuais em português](https://www.fueltech.com.br/pages/manuais-portugues) | 🔬 | Manual FT450/FT550/FT600 v2.9; guias de chicote |
| `fueltech-software-ftmanager` | [FuelTech — software FTManager](https://www.fueltech.com.br/pages/software) | 🔬 | Instalação, mapa, importação, datalogger |
| `manual-vol1-afr` | [Cap. 10 — Combustível, AFR e ignição](../volume-1/10-combustivel-afr-ignicao.md) | 📁 | Lambda, detonação, margem térmica |

### Dinamômetro e linha de base

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `projeto-marcelo-dyno` | [Cap. 13 — Projeto Marcelo](../volume-1/13-projeto-marcelo-ap-20.md) | 📁 | ~100 cv roda; ~15 kgfm — medidos em dinamômetro |
| `sae-j1349` | (ver acima) | 📚 | Correção e declaração de potência |
| `fueltech-software-ftmanager` | (ver acima) | 🔬 | Exportação e análise de logs |

---

## Volume I — Turbo e sistema de admissão pressurizada

> **Regra do Volume I**: faixa HP em catálogo 🔬 ou ficha 🟡 é **declaração do fabricante/revendedor**, não potência de roda no AP. Potência real depende de motor, combustível, coletor, pressão, IAT e acerto. Fichas 🟡 exigem cruzamento com fonte 🔬 quando possível.

### Fundamentos — o que é turbo, gases, compressor, turbina (Cap. 01–04)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `garrett-compressor-maps` | [Garrett — Compressor Maps / Knowledge Center](https://www.garrettmotion.com/knowledge-center-category/oem/expert/) | 🔬 | Mapa de compressor, eficiência, surge, choke, fluxo de massa |
| `garrett-engine-basics` | (mesmo URL acima) | 🔬 | Energia do escape, pressurização, temperatura, massa de ar |
| `garrett-g25-550` | [Garrett G25-550 48mm](https://www.garrettmotion.com/racing-and-performance/performance-catalog/turbo/g-series-g25-550/) | 🔬 | HP 300–550 declarados; rotor 48×60 mm; mapa oficial |
| `garrett-g25-660` | [Garrett G25-660 54mm](https://www.garrettmotion.com/racing-and-performance/performance-catalog/turbo/g-series-g25-660/) | 🔬 | HP 350–660 declarados; mapa e exhaust flow chart |
| `borgwarner-efr-6258` | [BorgWarner EFR 6258 PDF](https://www.borgwarner.com/docs/default-source/iam/boosting-technologies/efr-6258-a.pdf?sfvrsn=595bb03c_17) | 🔬 | 225–450 HP declarados; mapa compressor oficial |
| `garrett-ar-article` | [Garrett — diferença que o A/R faz](https://www.garrettmotion.com/news/newsroom/article/turbo-tech-how-to-turbo-and-the-difference-an-a-r-makes-for-optimizing-your-turbo-system/) | 🔬 | A/R, resposta, comparação em dinamômetro |

### A/R, spool e backpressure (Cap. 05–07)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `garrett-ar-article` | (ver acima) | 🔬 | Impacto do A/R na resposta e na restrição |
| `autoavionics-a50-236m` | [Auto Avionics A50-2.36M](https://autoavionics.com.br/produto/a50-2-36m/) | 🟡 | A/R .36 monofluxo; medidas de rotor — confirmar na ficha do fabricante |
| `autoavionics-a50-248p` | [Auto Avionics A50-2.48P](https://autoavionics.com.br/produto/a50-2-48p/) | 🟡 | A/R .48 pulsativa; medidas de rotor |
| `masterpower-r4449-regis` | [Master Power R4449-2 — Regis Racing](https://www.regisracing.com.br/turbinas/master-power-turbo-r4449-2-145-360-hp-44-05-x-49-5) | 🟡 | Faixa 145–360 hp **declarada**; ficha comercial de revenda |
| `manual-vol1-backpressure` | [Cap. 7 — Backpressure](../volume-1/07-backpressure.md) | 📁 | P3, restrição pré-turbina, conceito canônico do manual |

### Wastegate, intercooler e combustível (Cap. 08–10)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `garrett-engine-basics` | (ver acima) | 🔬 | Controle de boost, temperatura de admissão, eficiência do sistema |
| `garrett-g25-550` | (ver acima) | 🔬 | Eficiência máxima declarada; limite térmico do compressor |
| `fueltech-ft450-produto` | [FuelTech FT450](https://www.fueltech.com.br/produtos/ft450) | 🔬 | Acerto injeção/ignição; flex fuel; logs |
| `fueltech-manuais-pt` | [FuelTech — manuais PT](https://www.fueltech.com.br/pages/manuais-portugues) | 🔬 | Manual FT450 v2.9; tabelas de AFR e ignição |
| `fueltech-software-ftmanager` | [FuelTech — FTManager](https://www.fueltech.com.br/pages/software) | 🔬 | Mapa, datalogger, importação de configurações |
| `manual-vol1-afr` | [Cap. 10 — Combustível, AFR e ignição](../volume-1/10-combustivel-afr-ignicao.md) | 📁 | Lambda, detonação, margem térmica turbo |

### Coletores AP pulsativos (Cap. 11)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `autoavionics-a50-248p` | (ver acima) | 🟡 | Turbina pulsativa; exige coletor com separação real |
| `garrett-ar-article` | (ver acima) | 🔬 | Twin scroll / pulsativo vs monofluxo |
| `ap-pdfcoffee-torques` | [Medidas motores AP — PDFCoffee](https://pdfcoffee.com/medidas-de-montagens-e-torques-de-aperto-dos-motores-ap-pdf-free.html) | ⚠️ | Ordem de explosão 1-3-4-2 para pareamento de pulsos |

### Turbinas para AP e Projeto Marcelo (Cap. 12–13)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `garrett-g25-sell-sheet` | [Garrett G25 sell sheet PDF](https://www.garrettmotion.com/wp-content/uploads/2020/10/Garrett_Performance_G-25_Turbochargers_Sell_Sheet_10_21.pdf) | 🔬 | Tabela comparativa G25-550 / G25-660 |
| `masterpower-r4449-regis` | (ver acima) | 🟡 | Opção custo/benefício; faixa declarada |
| `autoavionics-a50-248p` | (ver acima) | 🟡 | A50-2.48P recomendada no Projeto Marcelo |
| `borgwarner-efr-6258` | (ver acima) | 🔬 | Referência premium EFR |
| `projeto-marcelo-dyno` | [Cap. 13 — Projeto Marcelo](../volume-1/13-projeto-marcelo-ap-20.md) | 📁 | Baseline aspirado; meta 300–450 cv; peças escolhidas |

### Roadmap, mitos e metodologia (Cap. 14–16)

| ID | Fonte | Confiabilidade | O que sustenta |
|---|---|---|---|
| `garrett-compressor-maps` | (ver acima) | 🔬 | Mitos de mapa, surge, eficiência |
| `garrett-ar-article` | (ver acima) | 🔬 | Mitos de A/R e resposta |
| `projeto-marcelo-dyno` | (ver acima) | 📁 | Fases 280–450 cv do roadmap |
| `manual-vol1-cfd` | [Cap. 16 — CFD simplificado](../volume-1/16-metodologia-cfd-simplificado.md) | 📁 | Metodologia de diagramas didáticos do manual |
| `sae-j1349` | [SAE J1349](https://www.sae.org/standards/content/j1349_201408/) | 📚 | Declaração/correção de potência em fases do roadmap |

---

## Observação final

Esta base mistura fonte oficial, ficha comercial, literatura secundária, dado interno do Projeto Marcelo e fontes ⚠️ de apoio. **Quanto mais crítico o número, mais alta deve ser a fonte.** Se só existir fonte ⚠️, escreva o limite explicitamente — não apague a incerteza.

Dados estruturados espelhados em `data/sources.json`.

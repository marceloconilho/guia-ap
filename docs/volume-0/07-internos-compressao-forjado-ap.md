---
title: "Capítulo 7 — Internos, compressão e bloco forjado"
volume: "Volume 0 — Antes do turbo"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenheiro"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 7 — Internos, compressão e bloco forjado

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.

## Pergunta de abertura

Vale forjar virabrequim e pistão no aspirado se o ganho imediato de potência é pequeno?

Depende do horizonte do projeto. Forjado no aspirado raramente entrega dezenas de cavalos sozinho — mas entrega **margem**: rpm, detonação, boost futuro e paz mecânica. No Projeto Marcelo, forjar no aspirado foi decisão de projeto turbo disfarçada de fase atual. Faz sentido. Forjar só "para ganhar NA" sem meta clara costuma frustrar.

## 🍻 Engenharia de boteco

Internos originais são sapato de caminhada. Internos forjados são bota de trilha. Para ir ao mercado, sapato serve. Para carregar mochila pesada (turbo), bota evita torcer tornozelo. NA moderado com sapato novo ainda funciona — desde que você saiba que a trilha vem depois.

## 🧠 Curiosidades

- Pistão forjado expande mais quente — folga diferente de fundido. 📚
- AP 2.0 usa biela ~144 mm — referência comum em kits AP. 🔧
- Taxa de compressão NA alta + turbo depois = retrabalho ou pistão novo. 📚
- Virabrequim forjado no aspirado **não** substitui balanceamento e alinhamento corretos. 🔧
- "Bloco forjado" é erro de linguagem — quem forja são virabrequim, biela e pistão. 📚

## 🟦 Essencial

### Componentes internos AP

| Peça | Função | NA leve | NA forte | Pré-turbo |
|---|---|---|---|---|
| Pistão | Transfere pressão, forma câmara | Fundido OK | Forjado/alto domo | Forjado câmara calculada |
| Biela | Liga pistão ao virabrequim | Original OK | Forjada | Forjada |
| Virabrequim | Converte linear → rotativo | Original | Forjado se alta rpm | Forjado recomendado |
| Anéis | Selagem | Padrão | Premium | Turbo-ready |
| Juntas | Selagem externa/interna | Padrão | MLS se boost futuro | MLS comum |

### Taxa de compressão (CR)

CR = volume total na PMH / volume de câmara.

🔬 **AP 2.0 série**: ~9:1 a 10:1 conforme versão.

Faixas orientativas 💡:

| Meta | CR aspirado | CR com turbo depois |
|---|---|---|
| Rua NA moderada | 10:1 – 10,5:1 | Evitar se turbo em breve |
| NA forte etanol | 10,5:1 – 11,5:1 | Só se ficar NA |
| Pré-turbo / transição | 9,5:1 – 10:1 | Pistão baixa comp depois |
| Turbo 1,0+ bar | — | 8:1 – 9,5:1 típico 🔧 |

Valores turbo variam com combustível, cabeçote, intercooler e objetivo — não são receita fixa.

## 🟧 Entusiasta: o porquê

### Por que CR muda potência NA

Mais compressão → mais expansão útil do gás → mais torque **se** não houver detonação. Limite vem de octanagem, temperatura, câmara quente e tempo de ignição.

### Forjado e detonação

Forjado aguenta pico de pressão melhor — mas não impede detonação de destruir anel ou válvula. Acerto e IAT ainda mandam.

### Pistão domo vs câmara

Pistão "alto" reduz câmara → sobe CR. Pistão "rebaixado" ou com câmara no domo desce CR — comum em turbo. Trocar pistão exige medir câmara final cilindro a cilindro.

### Balanceamento

Conjunto rotativo/balançante balanceado reduz vibração e fadiga — especialmente com comando agressivo e rpm alta.

## 🔴 Oficina: aplicação prática

### Quando abrir bloco no aspirado

- Meta turbo confirmada em 6–18 meses → forjar **agora** se motor já desmonta.
- Meta NA forte com CR alta → pistão, biela, parafusos ARP, retífica.
- Desgaste (anel, bloco oval) → retífica obrigatória.
- Histórico desconhecido de superaquecimento → inspecionar virabrequim e retentor.

### Kit típico "pré-turbo Marcelo-style"

- Virabrequim forjado;
- Bielas forjadas;
- Pistões forjados com CR **moderada** ou pistão turbo-ready se boost logo;
- Anéis adequados;
- Parafusos de biela e cabeçote upgrade;
- Retífica de bloco e virabrequim;
- Bomba óleo e retentores novos.

### Erro clássico

Montar pistão alta compressão NA agora e descobrir que 1,0 bar exige pistão baixa compressão depois — pagou duas vezes.

## ⚫ Engenharia: como pensar em números

Cálculo de CR (simplificado):

```text
Vcil = (π × (bore/2)² × stroke) / 1000   [cc por cilindro no AP 2.0 ≈ 496 cc]
CR = (Vcil + Vcâmara_total) / Vcâmara_total
```

Vcâmara_total inclui câmara cabeçote + depressão pistão + volume junta.

Validação:

1. Medir cc câmara com copo graduado (método tradicional).
2. Confirmar CR calculada vs compressão medida a frio.
3. Registrar por cilindro — AP também sofre desbalanceamento.

## ❌ Erros comuns

- Forjar e manter bomba d'água original cansada.
- Pistão turbo com CR baixa num motor que ficará NA 1 ano inteiro — driveability pode sofrer.
- Ignorar folga pistão-cilindro forjado.
- Não alinhar virabrequim após retífica.
- CR calculada "no papel" sem medir câmara real.
- Achar que forjado permite ponto agressivo sem sonda.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Este capítulo fala do **volume morto** e da **câmara de combustão** — o "saco" onde mistura comprime e explode. Forma da câmara influencia detonação, fluxo e quench.

> **Conceito geométrico, não simulação de combustão.**

Turbo depois multiplica densidade nesse mesmo saco — por isso CR inicial conservadora poupa retrabalho.

## 🧩 Aplicando ao Projeto Marcelo

AP **2.0 forjado** com ~100 cv roda aspirado: decisão correta para meta 300 cv turbo. Próximos passos internos:

- confirmar CR atual (pistão + cabeçote leve);
- se CR NA alta, planejar pistão turbo ou limitar boost inicial;
- manter logs sem detonação antes de spool;
- revisar bomba óleo e arrefecimento — forjado aguenta carga, óleo quente não perdoa.

## O que você deve lembrar daqui 10 anos

> Forjado no aspirado compra margem mecânica; compressão certa compra margem térmica.

## Referências usadas neste capítulo

- **Volkswagen EA-827 / AP 2.0**. Taxa de compressão, diâmetro 82,5 mm, curso 92,8 mm, bielas ~144 mm.  
  Fonte: https://mecawiki.fandom.com/pt-br/wiki/Volkswagen_EA-827
- **Medidas de montagem — motores AP**. Folgas, compressão, torque cabeçote.  
  Fonte: https://pdfcoffee.com/medidas-de-montagens-e-torques-de-aperto-dos-motores-ap-pdf-free.html

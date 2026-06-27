---
title: "Capítulo 5 — Admissão: borboleta, coletor e filtros"
volume: "Volume 0 — Antes do turbo"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenheiro"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 5 — Admissão: borboleta, coletor e filtros

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.

## Pergunta de abertura

Por que tanta gente troca borboleta primeiro — e só depois descobre que o gargalo estava no coletor, no filtro ou no acerto?

Porque borboleta é visível, barulhenta e fácil de fotografar. Coletor e integração com cabeçote são trabalhosos e menos instagramáveis. No AP aspirado, admissão é **sistema**: filtro → corpo de borboleta (TB) → plenum/coletor → garganta do cabeçote. Enfraquecer qualquer trecho limita o resto.

## 🍻 Engenharia de boteco

Admissão é canudo de tomar suco. Canudo fino no meio e boca larga na ponta não resolve sede. Borboleta gigante num coletor original estreito é exatamente isso — você comprou boca grande e manteve canudo.

## 🧠 Curiosidades

- Filtro esportivo "pod" quente dentro do cofre pode **perder** potência vs filtro original bem posicionado com ar frio. 📚
- Coletor de admissão original AP foi desenhado para elasticidade e emissão — não para pico NA. 📚
- Borboleta **MI original** do AP atende bem motor moderado; 60 mm guardada faz sentido quando fluxo acompanha. 🔧
- Coletor muito grande de plenum pode piorar resposta em baixa — volume não é virtude isolada. 📚
- MAP mal posicionado ou entrada de ar quente confunde acerto programável. 🔧

## 🟦 Essencial

### Componentes da admissão AP

| Peça | Função | Erro comum |
|---|---|---|
| Filtro / entrada de ar | Filtrar com mínima restrição | Sugerir ar quente do radiador |
| Borboleta (TB) | Controlar vazão do pedal | Oversize sem fluxo downstream |
| Coletor / plenum | Distribuir ar aos cilindros | Runner desigual entre cilindros |
| Flanges e mangueiras | Manter estanqueidade | Vazamento pós-TB |
| Sensor MAP/IAT | Informar carga e temperatura | IAT lendo calor do coletor |

### Borboletas comuns no AP

| TB | Contexto | Observação |
|---|---|---|
| MI original (~52 mm efetivo) | Série / prep leve | Coerente até ~120 cv roda 💡 |
| 60 mm | Prep média / transição turbo | Exige coletor e acerto |
| >60 mm | NA extremo / turbo | Raramente primeiro upgrade |

Diâmetros variam conforme medição interna vs externa — confirme **garganta efetiva**, não só marketing.

## 🟧 Entusiasta: o porquê

### Depressão e perda de carga

Motor aspirado puxa ar criando depressão downstream. Cada restrição consome parte dessa depressão antes do cilindro. Perda de carga é "imposto" sobre a EV.

### Ressonância do coletor

Runners de comprimento definido criam ondas de pressão que podem empurrar ar para o cilindro em certas rpm — efeito Helmholtz/ressonância. Coletor esportivo muda **onde** o torque aparece, não magicamente everywhere.

### Borboleta e driveability

TB maior exige mapa de marcha lenta e transição mais cuidadoso. Abertura mínima da lâmina pode ser grande demais para ar idle estável — ECU compensa até certo ponto.

### Transição para turbo

Quando turbo entrar, TB ainda limita fluxo **máximo** em alguns layouts, mas pressão pós-compressor muda o jogo. Escolher TB pensando em **vazão em alta** e **controle fino em baixa** evita trocar duas vezes.

## 🔴 Oficina: aplicação prática

### Ordem de upgrade admissão (aspirado AP)

1. Estanqueidade e filtro com ar relativamente frio.
2. Coletor esportivo compatível com comando e uso.
3. Borboleta dimensionada ao conjunto — não ao desejo.
4. Acerto de transição e marcha lenta.
5. Validar ganho em dyno e logs de IAT.

### Cold air vs pod quente

| Setup | Prós | Contras |
|---|---|---|
| CAi (cold air intake) | IAT menor, densidade melhor | Instalação, posição, água |
| Filtro esportivo original | Simples | Pode puxar ar quente |
| Pod aberto no cofre | Som | IAT alta parado/trânsito |

Para track day aspirado, IAT importa. Para rua stop-and-go, ar quente pode anular ganho de filtro "flow".

### Coletores no mercado AP

Opções variam por fabricante (SPA, MI, artesanal). 🔧 Prática recorrente:

- coletor curto → tende a favorecer alta;
- coletor com runner longo → tende a empurrar torque médio;
- qualidade de igualdade entre cilindros importa tanto quanto "marca".

Peça dyno comparativa pública específica AP 2.0 + coletor X vs Y é rara — desconfie de gráfico sem condição de teste.

### Sintomas de admissão errada

- Idle instável após TB maior.
- Backfire na desaceleração.
- Torque some em baixa e volta no topo.
- AFR pobre só acima de 4.000 rpm.
- IAT sobe rápido em estrada.

## ⚫ Engenharia: como pensar em números

Estimativa grossa de necessidade de TB 💡:

1. Estimar potência alvo no motor.
2. Converter para vazão volumétrica aproximada (cfm ou L/s).
3. Comparar velocidade na TB — muitos projetos aspirados NA moderado ficam confortáveis com TB que não excede ~55–65 mm **se** downstream fluxa.

Velocidade excessiva na TB (>~55 m/s sustained em pico aspirado moderado, ordem de grandeza) sugere TB pequena demais; TB enorme com velocidade baixa demais em idle sugere problema de controle.

Sem medição de fluxo ou dyno A-B, use método conservador: **upgrade TB um degrau por vez**.

## ❌ Erros comuns

- TB 60 mm + coletor original + cabeçote série → "furo" em baixa.
- Ignorar vazamento na flange TB-coletor.
- IAT sensor colado em coletor quente sem escudo.
- Filtro sujo tratado como "normal".
- Comprar coletor bonito sem verificar interferência com servofreio/cabo.
- Assumir que som de admissão = mais potência.

## 🧪 CFD simplificado: como ler os diagramas deste manual

![Fluxo aspirado — trecho admissão](../assets/diagrams/fluxo_aspirado_ap.svg)

No diagrama do manual, trechos azuis são admissão. Gargalos típicos marcados: TB/curva e EV limitada no cabeçote.

> **Diagrama conceitual. Não é CFD real.**

Leitura: siga a seta do filtro ao cilindro e pergunte onde a seção transversal encolhe mais — esse ponto manda no aspirado até prova contrária.

## 🧩 Aplicando ao Projeto Marcelo

Estado atual: **borboleta MI original**, **60 mm guardada**, comando **49G**, ~100 cv roda.

Roteiro sensato:

1. Consolidar coletor esportivo ou retrabalho leve de cabeçote **antes** de TB 60 mm.
2. Instalar TB 60 mm com mapa de transição refeito na FT450.
3. Logar IAT em pull WOT terceira/quarta.
4. Guardar comparação dyno antes/depois — evita upgrade placebo.

Para turbo futuro, TB 60 mm costuma ser ponto de partida honesto em AP 2.0 moderado — desde que intercooler e compressor não exijam redeimensionamento depois.

## O que você deve lembrar daqui 10 anos

> Admissão aspirada é corrente elétrica de ar: o elo mais fraco manda, não a borboleta mais cara.

## Referências usadas neste capítulo

- **FuelTech FT450**. Acerto de borboleta, MAP e transição em injeção programável.  
  Fonte: https://www.fueltech.com.br/produtos/ft450
- **Conceitos de ressonância de coletor de admissão**. Literatura clássica de preparação (Helmholtz/ram tuning).  
  Fonte: https://www.garrettmotion.com/knowledge-center-category/oem/expert/

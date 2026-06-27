---
title: "Capítulo 8 — Acerto aspirado com injeção programável"
volume: "Volume 0 — Antes do turbo"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenheiro"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 8 — Acerto aspirado com injeção programável

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.

## Pergunta de abertura

Por que instalar FuelTech (ou similar) no aspirado se o carburador "já funcionava" — ou a injeção original "já ligava"?

Porque preparação aspirada de verdade muda fluxo, comando e combustível. ECU original foi desenhada para motor de série. Carburador exige paciência e repetibilidade limitada. Injeção programável no aspirado cria **mapa base**, **logs** e **cultura de acerto** que o turbo exige depois — sem começar do zero no dia da turbina.

## 🍻 Engenharia de boteco

Acerto é receita — mas receita com termômetro, balança e caderno. ECU programável no aspirado é aprender a cozinhar antes de servir jantar para vinte pessoas (boost). Quem só "liga e anda" no NA frequentemente apaga incêndio no turbo.

## 🧠 Curiosidades

- Lambda 0,82–0,88 WOT em etanol aspirado é prática comum; gasolina pede faixa diferente. 🔧
- Mapa de injeção bonito no 3.000 rpm fixo não garante transição limpa na borboleta. 📚
- FT450 no aspirado já treina leitura de MAP, TPS, lambda e logs — skills transferíveis. 🔬
- Ignição avançada demais mata ganho NA antes da mistura ficar pobre. 📚
- Bico subdimensionado esconde ganho de admissão — motor parece "capado" no topo. 🔧

## 🟦 Essencial

### Variáveis principais do acerto aspirado

| Variável | O que faz | Sensor típico |
|---|---|---|
| Injeção (ms ou %) | Quantidade combustível | Lambda, EGT |
| Ignição (° APMS) | Quando queimar | Detonação, torque |
| Marcha lenta | Estabilidade parado | TPS, MAP |
| Transição | Resposta ao pedal | TPS rate, accel enrich |
| Correção temp | Compensa ar frio/quente | CLT, IAT |
| Correção bateria | Compensa voltage injectors | VBatt |

### AFR / Lambda aspirado (orientativo)

| Regime | Gasolina | Etanol 💡 |
|---|---|---|
| Marcha lenta | ~1,00 lambda | ~0,90–1,00 |
| Cruzeiro parcial | ~1,00–1,05 | ~0,90–1,00 |
| WOT NA | ~0,85–0,90 | ~0,75–0,85 |
| Transição | ligeiramente rico | ligeiramente rico |

Faixas dependem de comando, IAT, CR e objetivo — use como ponto de partida, não lei.

### FuelTech FT450 no AP aspirado

🔬 **Medido/documentado**: FT450 suporta injeção sequencial, ignição, flex fuel, logs — base usada no Projeto Marcelo.

Sensores mínimos recomendados aspirado → turbo:

- sonda lambda banda larga;
- MAP;
- TPS;
- CLT;
- IAT;
- pressão combustível (desejável);
- sensor rotação/fase.

## 🟧 Entusiasta: o porquê

### Injeção e massa de ar

Mais ar (comando, admissão, escape) exige mais combustível para manter lambda alvo. Sem ECU ajustável, peça de fluxo vira AFR pobre e detonação.

### Ignição e torque

Avanço ideal depende de rpm, carga e combustível. NA preparado com CR maior precisa monitorar detonação — especialmente com etanol borderline ou IAT alta.

### Transição

Maior borboleta e comando exigem tabelas de accel pump/enrichment melhores. Buraco no meio do pedal é mapa, não "falta de turbo".

### Herança turbo

Mapa NA WOT vira referência de eficiência volumétrica. Quando MAP mostrar pressão >100 kPa absolutos, você estende lógica — mas sensores, wiring e hábito de log já estarão prontos.

## 🔴 Oficina: aplicação prática

### Sequência de acerto aspirado FT450

1. **Hardware**: injetores, bomba, filtro, regulador, fiação, aterramento.
2. **Base**: mapa start, sincronismo, teste injetor/vela.
3. **Idle**: estabilizar marcha lenta frio/quente.
4. **Cruzeiro parcial**: lambda econômico estável.
5. **WOT por rpm**: dyno ou rua segura com acompanhante e lambda.
6. **Transição**: aceleração sem buraco ou backfire.
7. **Log**: salvar pull completo terceira/quarta.

### Dimensionamento básico bicos (etanol)

Regra grossa 💡:

```text
Potência motor ≈ (bicos lb/h × 0,45) / BSFC_etanol
```

Ou use calculadora do fabricante da ECU. Para AP 2.0 aspirado ~120 cv motor, bico modesto basta. Para projeto turbo 300 cv, dimensionar **já** bicos maiores evita segunda compra — desde que idle ainda seja controlável.

### Sinais de acerto ruim

- Lambda oscilando em steady state.
- Backfire desaceleração.
- Superaquecimento com lambda "rico".
- Potência cai após pull repetido (IAT ou combustível).
- Detonação audível antes do limite esperado.

### Carburador vs programável

| | Carburador | ECU programável |
|---|---|---|
| Custo inicial | Menor | Maior |
| Repetibilidade | Moderada | Alta |
| Logs | Não | Sim |
| Evolução turbo | Troca sistema | Estende mapa |
| Curva aprendizado | Mecânica | Software + sensores |

## ⚫ Engenharia: como pensar em números

Ordem de acerto orientada a dados:

1. Confirmar **fuel pressure** estável (ex.: 3 bar referenciada 💡).
2. Verificar **injector dead time** correto.
3. Ajustar **VE table** ou mapa ms até lambda WOT alvo.
4. Mapear **ignição** buscando torque máximo sem detonação.
5. Correlacionar **IAT** vs timing — retirar avanço quando IAT sobe.

Salve versão de mapa a cada marco — "mapa aspirado v3 dyno 100cv roda" vira ouro no dia do turbo.

## ❌ Erros comuns

- Copiar mapa de internet de AP desconhecido.
- Ignorar aterramento e ter ruído em sensor.
- Ajustar só WOT e esquecer transição.
- Bico gigante sem mapa idle decente.
- Confiar em sonda narrow band para acerto WOT.
- Não registrar modificação mecânica ao mudar mapa.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Acerto não tem fluxo de ar desenhado — mas pensa no mapa como **superposição** sobre o diagrama aspirado: onde admissão entrega ar, injeção deve entregar combustível; onde IAT sobe, ignição deve recuar.

> **Metáfora de fluxo energético, não CFD real.**

Buraco no mapa = buraco no diagrama de massa de ar.

## 🧩 Aplicando ao Projeto Marcelo

Setup: **FT450**, AP 2.0 forjado, comando **49G**, etanol provável, **~100 cv roda / 15 kgfm**.

Checklist aspirado antes turbo:

- [ ] Mapa WOT repetível em 3 pulls seguidos.
- [ ] IAT logged em estrada.
- [ ] Pressão combustível logged se possível.
- [ ] Transição borboleta limpa com TB original — refazer ao instalar 60 mm.
- [ ] Backup mapa + notas de modificação mecânica.
- [ ] Embreagem aguentando torque atual — preview do turbo.

Meta: mapa aspirado estável é **linha de base**, não fim do jogo.

## O que você deve lembrar daqui 10 anos

> ECU no aspirado não é luxo: é escola de mapa, log e disciplina antes da pressão.

## Referências usadas neste capítulo

Índice completo: [Referências — Volume 0](../apendices/referencias.md#volume-0--preparacao-aspirada)

- **`fueltech-ft450-produto`** — 🔬 Fabricante. Injeção sequencial, ignição, flex fuel, datalogger.  
  Fonte: https://www.fueltech.com.br/produtos/ft450
- **`fueltech-manuais-pt`** — 🔬 Manual oficial FT450 v2.9. Mapas, sensores, procedimentos de acerto.  
  Fonte: https://www.fueltech.com.br/pages/manuais-portugues
- **`fueltech-software-ftmanager`** — 🔬 Software oficial. Importação de mapa, logs, firmware.  
  Fonte: https://www.fueltech.com.br/pages/software
- **`manual-vol1-afr`** — 📁 Manual interno. Lambda, detonação, margem térmica (Cap. 10).  
  Fonte: [Cap. 10 — Combustível, AFR e ignição](../volume-1/10-combustivel-afr-ignicao.md)
- **`garrett-engine-basics`** — 🔬 Relação massa de ar, combustível e potência útil.  
  Fonte: https://www.garrettmotion.com/knowledge-center-category/oem/expert/

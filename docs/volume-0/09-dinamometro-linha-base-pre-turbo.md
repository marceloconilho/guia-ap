---
title: "Capítulo 9 — Dinamômetro, logs e linha de base pré-turbo"
volume: "Volume 0 — Antes do turbo"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenheiro"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 9 — Dinamômetro, logs e linha de base pré-turbo

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.

## Pergunta de abertura

Como saber que a fase aspirada terminou — e que o motor está pronto para receber turbo — sem adivinhar pelo ronco?

Com **linha de base documentada**: potência e torque x rpm, lambda, ignição, IAT, pressão de combustível, temperatura de óleo/água e lista do que foi modificado. Dinamômetro não é troféu; é raio-X. Log não é enfeite; é memória do motor. Quem pula isso costuma comparar turbo depois com número imaginário de quando "andava bem".

## 🍻 Engenharia de boteco

Turbinar sem linha de base aspirada é reformar casa sem foto do antes. Você acha que ganhou muito — ou reclama que "piorou" — sem prova do que mudou. Foto honesta do aspirado evita debate emocional depois.

## 🧠 Curiosidades

- Potência de roda no dyno de chassis varia com calibragem, pneu, temperatura e correção SAE. 🔬
- Dois pulls seguidos com IAT subindo mostram limite térmico aspirado — preview do turbo. 📚
- Ganho de 3 cv no dyno pode ser ruído; ganho de 3 kgfm na faixa 3.000–4.000 pode ser rua transformada. 🔧
- Marcelo: **~100 cv roda / 15 kgfm** é dado medido — tipo de referência que falta em 90% dos grupos. 🔬
- Log de estrada vale tanto quanto dyno para marcha lenta e transição. 🔧

## 🟦 Essencial

### O que registrar na linha de base aspirada

| Dado | Por quê |
|---|---|
| Potência/torque x rpm | Curva completa |
| Lambda x rpm/carga | Acerto |
| Ignição x rpm | Margem detonação |
| IAT início/fim pull | Limite térmico |
| Pressão combustível | Capacidade sistema |
| Temp óleo/água | Saúde térmica |
| Lista de peças | Reprodutibilidade |
| Combustível | Etanol/gasolina/octano |
| Correção dyno | SAE / STD / none |
| Pneu/marcha/rolo | Condição teste |

### Tipos de dyno

| Tipo | Mede | Uso AP aspirado |
|---|---|---|
| Chassis (roda) | Potência roda | Mais comum, inclui tracção |
| Motor (hub/engine) | Potência motor | Menos comum em AP de rua |
| Simulador estrada | Load control | Bom para consistência |

Sempre pergunte: **roda ou motor?** e **qual correção?**

## 🟧 Entusiasta: o porquê

### Por que curva importa mais que pico

Gol leve usa torque em 2.500–5.000 rpm na rua. Pico a 6.500 bonito no papel pode ser irrelevante com câmbio original.

### Comparabilidade

Só compare pulls com:

- mesmo combustível;
- IAT similar;
- pressão combustível estável;
- configuração mecânica idêntica;
- mesmo dyno (ideal) ou correção documentada.

### Logs ECU

FuelTech e similares gravam sensores em tempo real. Dyno dá snapshot; log dá filme. Turbo precisa dos dois hábitos.

### Critério "pronto para turbo"

Não é número mágico de cv. É checklist:

1. Curva aspirada repetível (3 pulls próximos).
2. Sem detonação, sem falha, sem overheating.
3. Acerto transição ok.
4. Mecânica validada (compressão, folga).
5. Plano turbo com peças definidas.
6. Embreagem/tração avaliadas.

## 🔴 Oficina: aplicação prática

### Protocolo de sessão dyno aspirado AP

**Antes**

- Verificar pneus, fixação, ventoinha.
- Motor em temperatura operacional.
- Tanque combustível conhecido.
- Salvar mapa ECU atual.

**Durante**

- Pull gradual se primeiro teste.
- Registrar marcha e relação (ex.: 3ª 1:1).
- Três pulls WOT se seguro.
- Anotar IAT início/fim cada pull.

**Depois**

- Exportar log ECU com timestamp.
- Foto/gráfico + lista peças.
- Arquivar "baseline aspirado FINAL".

### Interpretar ganho de upgrade

| Mudança | Ganho típico honesto 💡 | Onde aparece |
|---|---|---|
| Escape 2" | Pequeno | Média/alta |
| Comando 49G | Moderado | Faixa deslocada |
| Coletor adm | Moderado | Depende rpm |
| Cabeçote leve | Moderado | Topo |
| TB maior | Variável | Pode piorar baixa |
| Acerto só | Até moderado | Todo mapa |

Some peças não somam linearmente — interação existe.

### Quando **não** turbinar ainda

- IAT sobe rápido demais no aspirado.
- Pressão óleo cai em pull.
- Lambda instável WOT.
- Compressão inconsistente.
- "Só falta turbo" mas embreagem patina na aspirada.

## ⚫ Engenharia: como pensar em números

### Correção SAE (conceito)

Dyno corrige densidade do ar para comparar dias diferentes. 🔬 Potência corrigida SAE tende a ser referência quando documentada.

Sem correção declarada, número de pico é marketing frágil.

### Eficiência mecânica aproximada

Potência roda / potência motor estimada → ordem 0,85–0,90 FWD 💡.

Se aspirado mede 100 cv roda → motor ~115–118 cv estimado — coerente com AP 2.0 preparado leve.

### VE implícita

Com lambda e consumo conhecidos, estima-se VE efetiva. Turbo depois deve elevar VE acima de 100% na mesma rpm — se não, investigar gargalo.

## ❌ Erros comuns

- Um pull só, IAT quente, celebrar pico.
- Comparar dyno de ontem com dyno de hoje em outra oficina sem correção.
- Ignorar torque.
- Turbinar sem backup de mapa aspirado.
- Achar que dyno substitui log de estrada.
- Teste WOT repetido sem ventoinha — IAT mente.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Pense no gráfico torque x rpm como **integração** de todos os diagramas de fluxo aspirado: admissão, cabeçote, escape, comando, acerto. Pico estreito = sistema tuned numa nota; área larga = carro usável.

> **Interpretação conceitual, não simulação.**

Turbo deve **levantar** a curva inteira numa faixa escolhida — se só pico sobe, algo está errado.

## 🧩 Aplicando ao Projeto Marcelo

Baseline canônico:

- **~100 cv roda**
- **~15 kgfm**
- AP 2.0 forjado, FT450, comando 49G, borboleta MI

Antes do spool:

1. Repetir dyno documentado com logs FT450 anexos.
2. Salvar `baseline-aspirado-YYYY-MM` no repositório pessoal do projeto.
3. Listar próximo upgrade NA restante (TB 60? cabeçote?) vs ir direto turbo.
4. Se próximo ganho NA < custo coletor turbo parcial → **turbinar**.

Regra prática 💡: quando aspirado está **repetível, saudável e mapeado**, turbo vira engenharia de pressão — não remendão de motor mal acertado.

## O que você deve lembrar daqui 10 anos

> Linha de base aspirada é contrato consigo mesmo: depois do turbo, você saberá o que melhorou de verdade.

## Referências usadas neste capítulo

- **Projeto Marcelo — Capítulo 1 e 13**. Dados medidos ~100 cv roda / 15 kgfm.  
  Fonte: manual interno `/volume-0/01-preparacao-aspirada-ap`, `/volume-1/13-projeto-marcelo-ap-20`
- **FuelTech FT450 — datalogger**. Gravação de sensores para validação.  
  Fonte: https://www.fueltech.com.br/produtos/ft450

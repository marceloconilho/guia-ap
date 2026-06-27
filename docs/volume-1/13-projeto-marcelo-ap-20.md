---
title: "Capítulo 13 — Projeto Marcelo: AP 2.0 300–450 cv"
volume: "Volume I — Fundamentos"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenharia"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 13 — Projeto Marcelo: AP 2.0 300–450 cv

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.


## Pergunta de abertura

Como transformar um Gol AP 2.0 em um projeto forte, usável e evolutivo sem trocar metade do carro a cada fase?

A ideia central deste manual é simples, mas dá trabalho: **preparação não é decorar peça, é entender comportamento de energia**. Um AP turbo não anda porque tem uma turbina famosa. Ele anda porque o conjunto preserva, converte e controla energia de maneira eficiente.



## 🍻 Engenharia de boteco

Montar projeto turbo é montar cidade. Se você constrói ruas para bairro pequeno e depois quer virar metrópole, vai quebrar tudo. Planejar 300 cv pensando em 400 cv é fazer avenida antes do trânsito chegar.

Essa seção existe para transformar uma coisa abstrata em algo que cabe na cabeça antes de caber na fórmula. O leitor técnico pode pular? Pode. Mas quase sempre é aqui que a intuição nasce.

## 🧠 Curiosidades

O setup mais esperto nem sempre é o que dá maior pico agora. Às vezes é o que permite evoluir sem comprar duas vezes.

## 🟦 Essencial

Quando alguém fala em capítulo 13 — projeto marcelo: ap 2.0 300–450 cv, normalmente está apontando para uma consequência visível. O barulho, o número de pressão, a potência de pico e o gráfico bonito são sintomas. O trabalho real acontece antes: fluxo, temperatura, pressão, massa de ar e tempo.

## 🟧 Entusiasta: o porquê

Dados conhecidos: AP 2.0 forjado, FT450, 100 cv de roda aspirado, 15 kgfm, comando 49G, borboleta MI com 60 mm guardada, câmbio original Gol 1.6, diferencial sem blocante, roda 15 195/50, uso rua/track/arrancada. Isso define limites: tração, câmbio, temperatura e dirigibilidade são tão importantes quanto potência.

O ponto que separa um projeto bom de um projeto apenas caro é saber reconhecer **qual variável manda no resultado**. Às vezes o gargalo é a turbina. Às vezes é o coletor. Às vezes é o intercooler. Muitas vezes é o acerto.

## 🔴 Oficina: aplicação prática

Fase 1: 250-300 cv com pressão conservadora e foco em confiabilidade. Fase 2: 330-360 cv ajustando combustível, intercooler, embreagem e tração. Fase 3: 380-450 cv só com câmbio, blocante, semi-eixos, freios e arrefecimento tratados.

Em preparação real, a pergunta rara vez é “qual é a melhor peça?”. A pergunta honesta é: **melhor para qual motor, em qual faixa de rpm, com qual combustível, qual câmbio, qual pneu e qual orçamento?**

## ⚫ Engenharia: como pensar em números

Mesmo quando não temos todos os dados, dá para trabalhar com uma sequência lógica:

1. Definir meta de potência e rpm útil.
2. Estimar massa de ar necessária.
3. Estimar pressão de admissão e temperatura.
4. Estimar restrição no escape.
5. Verificar se a turbina trabalha dentro de uma região eficiente.
6. Validar com instrumentação: sonda, EGT, pressão antes da turbina, pressão de coletor, temperatura de admissão e, quando possível, rotação do turbo.

Não é necessário transformar todo carro de rua em laboratório, mas um projeto sério deve saber **o que gostaria de medir**.

## ❌ Erros comuns

Pular direto para pressão alta; manter câmbio como fusível sem aceitar risco; esquecer blocante; comprar turbo para 600 cv e sofrer na rua; negligenciar freio/suspensão.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Os desenhos deste manual **não são CFD real**. Eles são mapas conceituais de fluxo. Servem para indicar regiões prováveis de aceleração, recirculação, mistura de pulsos e perda de energia. CFD real exigiria CAD do coletor, malha, condições de contorno, temperatura, pulso por cilindro, rugosidade, material, rotação do motor e solver transiente.

Use os diagramas como bússola, não como dinamômetro.

## 🧩 Aplicando ao Projeto Marcelo

Minha recomendação base: A50-2.48P + coletor pulsativo bom, intercooler para 400 cv, escape 3", wastegate externa bem posicionada, bicos/bomba para etanol com folga, acerto conservador, pneus melhores e planejamento de câmbio. Se custo apertar, R4449 ainda é solução honesta para primeira fase.

## O que você deve lembrar daqui 10 anos

> Projeto bom é aquele em que cada fase prepara a próxima sem destruir a anterior.



## Referências usadas neste capítulo

Índice completo: [Referências — Volume I](../apendices/referencias.md#volume-i--turbo-e-sistema-de-admissao-pressurizada)

- **`projeto-marcelo-dyno`** — 📁 Dado medido do manual. ~100 cv roda / ~15 kgfm aspirado; baseline do projeto.  
  Fonte: [Cap. 13 — Projeto Marcelo](13-projeto-marcelo-ap-20.md)
- **`autoavionics-a50-248p`** — 🟡 Ficha comercial. Recomendação base A50-2.48P + coletor pulsativo.  
  Fonte: https://autoavionics.com.br/produto/a50-2-48p/
- **`masterpower-r4449-regis`** — 🟡 Ficha comercial. Alternativa custo/benefício fase 1 (~250–300 cv).  
  Fonte: https://www.regisracing.com.br/turbinas/master-power-turbo-r4449-2-145-360-hp-44-05-x-49-5
- **`garrett-g25-550`** — 🔬 Fabricante oficial. Referência premium G25-550 para evolução.  
  Fonte: https://www.garrettmotion.com/racing-and-performance/performance-catalog/turbo/g-series-g25-550/
- **`fueltech-ft450-produto`** — 🔬 Fabricante oficial. ECU do projeto; acerto e logs.  
  Fonte: https://www.fueltech.com.br/produtos/ft450

> ⚠️ Metas 300–450 cv neste capítulo são **objetivos de projeto**, não potência garantida. Fichas 🟡 sustentam escolha de turbina, não resultado final no dinamômetro.

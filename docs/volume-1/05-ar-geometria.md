---
title: "Capítulo 5 — A/R e geometria: o tamanho do corredor"
volume: "Volume I — Fundamentos"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenharia"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 5 — A/R e geometria: o tamanho do corredor

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.


## Pergunta de abertura

Por que trocar uma carcaça quente muda spool, torque e potência sem trocar o miolo da turbina?

A ideia central deste manual é simples, mas dá trabalho: **preparação não é decorar peça, é entender comportamento de energia**. Um AP turbo não anda porque tem uma turbina famosa. Ele anda porque o conjunto preserva, converte e controla energia de maneira eficiente.



## 🍻 Engenharia de boteco

Coloque a mesma quantidade de água passando por uma mangueira fina e por uma mangueira grossa. Na fina, o jato sai mais rápido, mas limita vazão. Na grossa, sobra vazão, mas o jato perde agressividade. A/R é uma parte dessa história no turbo.

Essa seção existe para transformar uma coisa abstrata em algo que cabe na cabeça antes de caber na fórmula. O leitor técnico pode pular? Pode. Mas quase sempre é aqui que a intuição nasce.

## 🧠 Curiosidades

Um A/R menor não é automaticamente melhor. Ele pode deixar o carro divertido em baixa e sufocado em alta. Um A/R maior pode parecer morto em baixa e brilhante no topo. A melhor escolha depende da faixa de uso.

## 🟦 Essencial

Quando alguém fala em capítulo 5 — a/r e geometria: o tamanho do corredor, normalmente está apontando para uma consequência visível. O barulho, o número de pressão, a potência de pico e o gráfico bonito são sintomas. O trabalho real acontece antes: fluxo, temperatura, pressão, massa de ar e tempo.

## 🟧 Entusiasta: o porquê

A/R é relação entre área de passagem e raio até o centro do rotor. Em termos práticos, influencia velocidade do gás e capacidade de vazão. Mas o número não conta tudo: desenho da voluta, garganta, rotor, flange, acabamento e wastegate mudam o comportamento.

O ponto que separa um projeto bom de um projeto apenas caro é saber reconhecer **qual variável manda no resultado**. Às vezes o gargalo é a turbina. Às vezes é o coletor. Às vezes é o intercooler. Muitas vezes é o acerto.

## 🔴 Oficina: aplicação prática

Em AP 2.0, .48 virou clássico por combinar resposta e potência moderada. .36 pode ser ótima para motor menor ou meta mais baixa. .63 tende a favorecer potência e menor backpressure. Em twin scroll, a leitura muda porque cada scroll recebe pulsos mais definidos.

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

Falar que .48 de uma marca equivale exatamente à .48 de outra; escolher A/R sem considerar rotor; ignorar coletor; tentar resolver lag com carcaça minúscula e depois reclamar de temperatura.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Os desenhos deste manual **não são CFD real**. Eles são mapas conceituais de fluxo. Servem para indicar regiões prováveis de aceleração, recirculação, mistura de pulsos e perda de energia. CFD real exigiria CAD do coletor, malha, condições de contorno, temperatura, pulso por cilindro, rugosidade, material, rotação do motor e solver transiente.

Use os diagramas como bússola, não como dinamômetro.

## 🧩 Aplicando ao Projeto Marcelo

Para a A50-2.48P no seu AP, .48 pulsativa parece mais equilibrada que .36 mono se a meta real for 300 cv agora e 350+ depois. A .63P só faria sentido se você aceitar mais threshold para preservar topo e evolução.

## O que você deve lembrar daqui 10 anos

> A/R é uma torneira energética: abrir demais perde velocidade, fechar demais cria gargalo.



## Referências usadas neste capítulo

- **Garrett: diferença que o A/R faz**. Explica o impacto do A/R na resposta e apresenta comparação em dinamômetro.  
  Fonte: https://www.garrettmotion.com/news/newsroom/article/turbo-tech-how-to-turbo-and-the-difference-an-a-r-makes-for-optimizing-your-turbo-system/
- **Auto Avionics A50-2.36M**. A/R fria .50, rotor frio 51x71, A/R quente .36, rotor quente 49,4x58, monofluxo.  
  Fonte: https://autoavionics.com.br/produto/a50-2-36m/
- **Auto Avionics A50-2.48P**. A/R fria .50, rotor frio 51x71, A/R quente .48, rotor quente 49,4x58, pulsativa.  
  Fonte: https://autoavionics.com.br/produto/a50-2-48p/

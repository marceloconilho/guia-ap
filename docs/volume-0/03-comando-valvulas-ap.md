---
title: "Capítulo 3 — Comando de válvulas no AP"
volume: "Volume 0 — Antes do turbo"
status: "base expandida"
nivel: "🔵 Iniciante + 🟠 Entusiasta + 🔴 Preparador + ⚫ Engenheiro"
ultima_atualizacao: "2026-06-27"
---

# Capítulo 3 — Comando de válvulas no AP

> **Como ler este capítulo**  
> 🔵 Leia os blocos essenciais para entender a ideia.  
> 🟠 Leia os blocos de entusiasta para entender o porquê.  
> 🔴 Leia as aplicações práticas para decidir peça e acerto.  
> ⚫ Leia a engenharia quando quiser ir até o porão físico da coisa.

## Pergunta de abertura

Por que trocar o comando virou o "upgrade mágico" do AP — e por que tantos carros ficam piores depois da troca?

Porque comando muda **quando** e **quanto** a admissão e o escape conversam com o cilindro. No AP 8V, isso altera torque em baixa, pico de potência, consumo, marcha lenta, exigência de molas e necessidade de acerto. Comando certo alinha fluxo e rpm. Comando errado — ou certo com folga errada — transforma motor elástico em motor rancoroso.

## 🍻 Engenharia de boteco

O comando é o maestro do motor. Se ele abrir a cortina cedo demais ou fechar tarde demais, a peça fica bonita, mas a peça perde o sentido. No AP, muita gente compra o maestro famoso sem ensaiar a orquestra — coletor, cabeçote, escape e acerto ficam desencontrados.

## 🧠 Curiosidades

- Comando "grande" sem molas adequadas pode flutuar válvula em alta rpm. 📚
- Overlap alto melhora scavenging em certas faixas — e piora marcha lenta e emissões. 📚
- O **49G** virou referência de rua no AP não por ser o maior, mas por ser **usável** com acerto decente. 🔧
- Comando aspirado agressivo nem sempre funciona igual quando entra pressão de turbo. ⚠️
- AP 8V usa um comando no bloco acionando válvulas por balancim — geometria diferente de DOHC moderno. 📚

## 🟦 Essencial

**Comando de válvulas** é o eixo com lobos que abrem admissão e escape. Especificações comuns:

- **lift** — quanto a válvula abre;
- **duração** — por quantos graus do virabrequim a válvula fica aberta (medida em @0,050" ou padrão local);
- **LSA (lobe separation angle)** — distância angular entre lobo de admissão e escape;
- **overlap** — intervalo em que admissão e escape abertos juntos.

No AP aspirado de rua, você busca **mais ar útil** numa faixa de rpm que você realmente usa — não só número grande no papel.

### Comandos frequentes no AP (referência de mercado)

| Perfil | Uso típico | Comportamento esperado | Classificação |
|---|---|---|---|
| Original / 044 | Original, restauração | Elasticidade, baixa exigência | 📚 |
| 44i / 049 leve | Rua esportiva leve | Ganho moderado, ainda dirigível | 🔧 |
| **49G** | Rua preparada | Bom meio-termo rua/pista | 🔧 |
| SP / similar | Aspirado forte | Mais rpm, menos baixa | 🔧 |
| Full race NA | Competição aspirada | Marcha lenta difícil, exige tudo | ⚠️ |

Não encontrei ficha dinamométrica pública padronizada comparando todos esses perfis no mesmo AP 2.0. Trate a tabela como **prática recorrente**, não como ranking absoluto.

## 🟧 Entusiasta: o porquê

### Lift e duração

Mais lift e duração tendem a permitir mais fluxo em alta rpm — **se** cabeçote e coletor acompanham. Sem fluxo, você só aumenta overlap e perde compressão efetiva.

### Overlap e marcha lenta

Overlap é quando admissão e escape abertos juntos. Ajuda a "limpar" cilindro em alta rotação (scavenging). Em baixa, mistura fresca pode sair pelo escape e gases podem voltar — marcha lenta instável, sonda oscilando.

### LSA

LSA mais **apertado** (menor número) aumenta overlap → mais "race". LSA mais **aberto** → motor mais manso em baixa.

### Comando e turbo futuro

Turbo empurra ar na admissão. Overlap alto demais pode fazer pressão de escape interferir na admissão — especialmente sem acerto fino. Por isso projetos que sabem que vão turbinar em breve evitam comando NA extremo, mesmo no aspirado.

## 🔴 Oficina: aplicação prática

### Instalação correta no AP

1. Conferir marcação de sincronismo (virabrequim + comando + distribuidor ou fase ECU).
2. Instalar **molas** recomendadas para o perfil — original pode ser insuficiente.
3. Ajustar **folga de válvula** a frio conforme especificação do preparador.
4. Verificar correia dentada reforçada e tensor.
5. Acertar marcha lenta, avanço e AFR — comando novo **sempre** exige acerto.

### Escolha por uso

| Uso | Perfil sugerido | Evitar |
|---|---|---|
| Rua diária + evolução turbo | 49G ou equivalente moderado | Full NA extremo |
| Track day aspirado | SP / perfil médio-alto | Comando de arrancada em carro de rua |
| Só etanol rua | 49G com acerto dedicado | Assumir que etanol "corrige" overlap excessivo |
| Meta turbo em <1 ano | Moderado, overlap controlado | Comando que exige 4.500 rpm+ para funcionar |

### Sintomas de comando mal escolhido ou mal montado

- Marcha lenta instável ou alta demais.
- "Buraco" até certa rpm, depois explosão de potência.
- Motor áspero parado no semáforo.
- Falha de válvula ou mola em alta.
- Potência no dyno ok, carro pior de dirigir.

## ⚫ Engenharia: como pensar em números

Para comparar comandos com método:

1. Obter lift e duração @ referência conhecida (0,050" ou padrão do fabricante).
2. Anotar LSA e overlap estimado.
3. Simular ou medir **linha de torque x rpm** — pico importa menos que área útil.
4. Medir vacuo em marcha lenta e AFR estabilidade.
5. Registrar ponto de ignição máximo seguro por cilindro.

Sem curva de torque, comparar comando só pelo nome é astrologia mecânica.

### Relação rpm útil

Regra grossa 💡: quanto mais duração/overlap, mais o motor "prefere" rpm alto para fazer torque. Gol leve com câmbio longo original sofre se o comando só acorda tarde.

## ❌ Erros comuns

- Comprar comando pelo hype do grupo de WhatsApp.
- Não trocar molas e achando que "original aguenta".
- Ignorar folga após assentamento das válvulas.
- Sincronizar distribuidor "no ouvido" em injeção programável sem conferir fase.
- Escolher perfil NA extremo meses antes do turbo.
- Medir ganho só no pico, ignorando driveability.

## 🧪 CFD simplificado: como ler os diagramas deste manual

Imagine o cilindro como sala com duas portas: admissão e escape. Comando define **quanto tempo cada porta fica aberta** e **se as duas ficam abertas juntas**.

> **Diagrama conceitual, não CFD real.**

- Overlap alto = portas abertas juntas → troca de gases agressiva.
- Duração longa = portas abertas mais tempo → favorece fluxo em alta, penaliza baixa.
- Lift alto = portão abre mais → só ajuda se o corredor (cabeçote) deixar passar.

## 🧩 Aplicando ao Projeto Marcelo

O Gol G2 usa **comando 49G** com ~100 cv de roda — combinação coerente para rua preparada. Antes do turbo:

- confirmar folga e assentamento;
- avaliar se overlap ainda é aceitável com pressão futura;
- manter logs de marcha lenta e transição;
- **não** trocar para comando NA agressivo "último upgrade aspirado" se turbo está a 6 meses de distância.

Se cabeçote for retrabalhado, revalidar folga — válvula assentada muda relação mecânica.

## O que você deve lembrar daqui 10 anos

> Comando não "dá potência": ele escolhe em qual rpm o motor concorda em trabalhar.

## Referências usadas neste capítulo

Índice completo: [Referências — Volume 0](../apendices/referencias.md#volume-0--preparacao-aspirada)

- **`ap-pdfcoffee-torques`** — ⚠️ PDF espelhado. Folgas de válvula e sincronismo pós-troca de comando.  
  Fonte: https://pdfcoffee.com/medidas-de-montagens-e-torques-de-aperto-dos-motores-ap-pdf-free.html
- **`garrett-engine-basics`** — 🔬 Literatura Garrett. Fluxo, sincronismo admissão/escape, eficiência.  
  Fonte: https://www.garrettmotion.com/knowledge-center-category/oem/expert/
- **`garrett-ar-article`** — 🔬 Artigo Garrett. Relação escape/admissão, resposta e restrição.  
  Fonte: https://www.garrettmotion.com/news/newsroom/article/turbo-tech-how-to-turbo-and-the-difference-an-a-r-makes-for-optimizing-your-turbo-system/
- **`ap-wikipedia-pt`** — 📚 Arquitetura OHC 8V AP; comando no cabeçote por correia dentada.  
  Fonte: https://pt.wikipedia.org/wiki/Volkswagen_AP

> ⚠️ **Comandos 49G, 44i, SP**: perfis citados neste capítulo vêm de 🔧 prática de mercado brasileiro. Não há ficha dinamométrica pública padronizada registrada neste repositório. Confirmar lift/duração/LSA com o fabricante antes da compra.

# Checklist da atividade

**Arquivo a corrigir:** `index.html`
**Unidade 3 — HTML Semântico: a Base da Acessibilidade**

Este é o guia de verificação. O passo a passo da entrega (fork, GitHub Pages, Pull Request) está
no [`README.md`](README.md).

## O cenário

A página da Harmonia Instrumentos Musicais **está no ar e parece funcionar**. Abra no navegador:
o layout está alinhado, as cores estão certas, os botões clicam. Nenhum cliente que enxerga
reclamou.

Mas a loja recebeu uma reclamação de um cliente que usa leitor de tela: ele não consegue
encontrar o conteúdo principal, não sabe para onde os links levam e desistiu do formulário de
contato.

**Sua tarefa:** corrigir a estrutura HTML da página sem mudar a aparência dela.

## Regras

As regras completas estão no [`README.md`](README.md). Em resumo: conserte a estrutura, mantenha
o layout, sem JavaScript, e ARIA só onde o HTML nativo não resolve.

## Checklist de verificação

Percorra a página procurando cada item. Anote **onde** encontrou o problema e **qual tag** deveria
estar no lugar. Não há resposta única para todos os itens — argumente sua escolha.

### 1. Aparência disfarçada de significado

- [X] Existe algum texto em negrito ou itálico que na verdade tem **importância** ou **ênfase**? Qual tag deveria estar ali?
- [X] Existe algum sublinhado que pode ser confundido com link?
- [X] Existe alguma tag obsoleta que só controla tamanho de fonte?

### 2. Hierarquia de cabeçalhos

- [X] Liste, na ordem, todos os cabeçalhos da página. Quantos `<h1>` existem?
- [X] Algum título "parece" título mas não usa tag de cabeçalho?
- [X] Existe algum nível pulado (h1 → h3, h2 → h6)?
- [X] Algum cabeçalho foi escolhido pelo **tamanho** que produz, e não pelo nível que representa?
- [X] Desenhe a hierarquia final como um índice de livro. Ela faz sentido?

### 3. Landmarks

- [ ] A página tem cabeçalho de site? Está em `<header>`?
- [ ] A navegação principal está em `<nav>`?
- [ ] Existe **mais de uma** área de navegação? Como um leitor de tela diferencia uma da outra?
- [ ] Onde começa e termina o conteúdo principal? Ele está em `<main>`?
- [ ] O conteúdo complementar da lateral está em `<aside>`?
- [ ] O rodapé está em `<footer>`?
- [ ] O idioma da página está declarado na tag `<html>`?

### 4. Tabelas

- [ ] Quantas tabelas existem no arquivo? Todas contêm **dados tabulares**?
- [ ] Alguma tabela está sendo usada só para **posicionar** elementos na tela? O que substitui isso hoje?
- [ ] A tabela de dados tem um título programático?
- [ ] As células de cabeçalho são `<th>` ou apenas `<td>` estilizadas?
- [ ] Existe indicação de qual cabeçalho pertence a qual linha/coluna?
- [ ] Se o leitor de tela anunciar só "R$ 7.150,00", o usuário sabe de que modelo se trata?

### 5. Links e botões

- [ ] Leia **só** os textos dos links, sem o parágrafo em volta. Dá para saber o destino de cada um?
- [ ] Quantos links diferentes têm o mesmo texto? Eles levam ao mesmo lugar?
- [ ] Algum link abre em nova aba? O usuário é avisado?
- [ ] O link do ícone do carrinho tem um nome acessível útil?
- [ ] Existe algum elemento que **parece** botão mas não é `<button>`? Teste: dá para chegar nele só com Tab e ativar com Enter?
- [ ] Existe algum `<a>` que **executa uma ação** em vez de navegar?
- [ ] Pergunta-guia para cada um: *isso navega ou isso executa uma ação?*

### 6. Listas

- [ ] O menu do topo é uma lista de verdade?
- [ ] Existe alguma sequência de itens separada por `<br>`?
- [ ] Os produtos formam uma lista? E os links da barra lateral?
- [ ] Em cada caso: a ordem importa? (`<ol>`) Ou não? (`<ul>`)

### 7. Formulário

- [ ] Cada campo tem um `<label>` de verdade?
- [ ] Algum campo é identificado **apenas** pelo placeholder? O que acontece quando o usuário começa a digitar?
- [ ] Algum `<label>` existe mas não está associado ao campo? Teste clicando no texto do rótulo: o foco vai para o input?
- [ ] A obrigatoriedade é comunicada só pelo asterisco visual?
- [ ] As mensagens de erro dizem **qual campo**, **o que está errado** e **como corrigir**?
- [ ] As mensagens de erro estão programaticamente ligadas aos seus campos?
- [ ] Os botões de rádio estão agrupados? Ao chegar neles, dá para saber **qual é a pergunta**?
- [ ] E as caixas de seleção?

## Como testar o que você corrigiu

1. **Só com o teclado:** percorra a página inteira usando Tab. Você consegue alcançar e ativar todos os controles? O foco fica visível?
2. **Leitor de tela (NVDA):**
   - `H` — pular de cabeçalho em cabeçalho
   - `Insert + F7` — lista de elementos (veja as abas Links, Cabeçalhos e Landmarks)
   - `T` — pular entre tabelas
   - `F` — pular entre campos de formulário
   Compare a lista de elementos **antes** e **depois** da sua correção.
3. **Validador do W3C:** <https://validator.w3.org/nu/>
4. **Comparação visual:** abra as duas versões em abas lado a lado. Elas devem parecer a mesma página.

## Entrega

A entrega é o **Pull Request**, não um arquivo solto. O corpo do PR já vem com um formulário
pedindo:

- o link do seu GitHub Pages;
- a lista dos problemas que você encontrou, agrupados pelos 7 blocos acima;
- para cada um: a tag errada, a tag correta e **por que** a troca melhora a experiência de quem
  usa tecnologia assistiva;
- os números da lista de elementos do NVDA antes e depois, se conseguir fazer o teste.

Veja o passo a passo no [`README.md`](README.md).

Não se preocupe em achar todos os problemas de primeira. Achar 15 com boa justificativa vale mais
do que listar 30 sem explicar nenhum.

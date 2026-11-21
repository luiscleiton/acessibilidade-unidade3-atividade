# Projeto Acessibilidade - Prof. Sandro Sá
# Aluno: Luís Cleiton

## 🎵 Harmonia Instrumentos Musicais

![Status](https://img.shields.io/badge/Status-Concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📌 Sobre o projeto

O **Harmonia Instrumentos Musicais** é um projeto acadêmico desenvolvido ao longo do semestre com o objetivo de criar uma loja virtual de instrumentos musicais, priorizando acessibilidade digital, usabilidade, inclusão e responsividade.

## 🎯 Objetivos

- Desenvolver uma página web semanticamente estruturada.
- Aplicar boas práticas de acessibilidade digital.
- Facilitar a navegação por teclado e leitores de tela.
- Implementar recursos de personalização visual.
- Criar formulários acessíveis com validação.
- Garantir uma experiência responsiva em diferentes dispositivos.

## ♿ Recursos de acessibilidade implementados

### 1. HTML semântico

- Utilização de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- Organização hierárquica dos títulos.
- Correção da estrutura de tabelas.
- Identificação adequada de links, botões e listas.
- Associação correta entre `<label>` e campos de formulário.

### 2. Skip Link

Implementação de um link que permite ao usuário pular diretamente para o conteúdo principal.

- Primeiro elemento focável da página.
- Oculto visualmente até receber foco.
- Operável pelo teclado.
- Facilita a navegação com leitores de tela.

### 3. Tema claro e escuro

- Variáveis CSS para gerenciamento de cores.
- Utilização de `prefers-color-scheme`.
- Contraste adequado entre textos e fundos.
- Opção de alternância manual de tema.

### 4. Movimento reduzido

- Animação de entrada do banner.
- Efeitos de interação nos cartões.
- Transições do carrossel.
- Utilização de `prefers-reduced-motion`.

### 5. Formulário de cadastro acessível

**Funcionalidades:**

- Nome completo.
- E-mail.
- CPF.
- Data de nascimento.
- Telefone.
- Senha e confirmação de senha.
- Seleção de gênero.
- Interesses.
- Como conheceu o site.
- Aceite dos termos.
- Campo anti-spam (honeypot).

**Recursos de acessibilidade:**

- Labels associados explicitamente aos campos.
- Utilização de `<fieldset>` e `<legend>`.
- Identificação de campos obrigatórios.
- Instruções de preenchimento.
- Navegação por teclado.
- Mensagens de erro acessíveis.
- Identificação de campos inválidos.
- Resumo de erros com links para os campos correspondentes.

### 6. Validação com JavaScript

- Validação ao perder o foco (`blur`).
- Mensagens de erro específicas.
- Utilização de `aria-describedby`.
- Atualização de `aria-invalid`.
- Resumo dos erros com `role="alert"`.
- Remoção das mensagens após a correção dos campos.

### 7. Responsividade

#### 🖥️ Desktop

- Aproveitamento do espaço horizontal.
- Organização dos conteúdos em colunas.
- Exibição dos cartões e elementos da loja.

#### 📱 Tablet

- Ajuste das colunas e espaçamentos.
- Adaptação dos componentes.
- Melhor aproveitamento da área disponível.

#### 📲 Celular

- Layout adaptado para telas menores.
- Conteúdo organizado verticalmente.
- Navegação facilitada.
- Campos e botões adequados para interação por toque.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura e semântica |
| CSS3 | Estilização e responsividade |
| JavaScript | Validação e interatividade |
| Git | Controle de versão |
| GitHub | Hospedagem do repositório |
| GitHub Pages | Publicação do projeto |

## 🎓 Conclusão

O projeto **Harmonia Instrumentos Musicais** representa a aplicação prática dos conhecimentos adquiridos ao longo do semestre, reunindo conceitos de desenvolvimento front-end, acessibilidade digital, inclusão e responsividade.

Durante o desenvolvimento, foram trabalhadas melhorias na estrutura HTML, na navegação, na apresentação visual e na interação com os usuários.

Mais do que criar uma loja virtual visualmente agradável, o projeto permitiu compreender a importância de desenvolver páginas acessíveis, intuitivas e funcionais para todas as pessoas, independentemente de suas necessidades ou dos dispositivos utilizados.

A acessibilidade não deve ser considerada um recurso adicional, mas uma parte essencial do desenvolvimento de qualquer aplicação web.

const botaoTema = document.getElementById("alternar-tema");
const elementoHtml = document.documentElement;

// Detecta a preferência de tema do Windows.
const preferenciaEscura = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

function atualizarBotao(tema) {
    const temaEscuro = tema === "escuro";

    botaoTema.textContent = temaEscuro
        ? "☀ Tema claro"
        : "☾ Tema escuro";

    botaoTema.setAttribute(
        "aria-label",
        temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"
    );

    botaoTema.setAttribute("aria-pressed", String(temaEscuro));
}

function aplicarTema(tema) {
    elementoHtml.dataset.tema = tema;
    atualizarBotao(tema);
}

// Inicializa conforme a preferência atual do Windows.
aplicarTema(preferenciaEscura.matches ? "escuro" : "claro");

// Alterna entre os temas ao clicar no botão.
botaoTema.addEventListener("click", () => {
    const temaAtual = elementoHtml.dataset.tema;

    const novoTema = temaAtual === "escuro"
        ? "claro"
        : "escuro";

    aplicarTema(novoTema);
});

// Acompanha as mudanças no tema do Windows.
preferenciaEscura.addEventListener("change", (evento) => {
    aplicarTema(evento.matches ? "escuro" : "claro");
});
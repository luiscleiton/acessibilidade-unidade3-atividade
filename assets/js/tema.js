
const botaoTema = document.getElementById("alternar-tema");
const elementoHtml = document.documentElement;

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

if (botaoTema) {
  aplicarTema(preferenciaEscura.matches ? "escuro" : "claro");

  botaoTema.addEventListener("click", () => {
    const temaAtual = elementoHtml.dataset.tema;

    aplicarTema(
      temaAtual === "escuro" ? "claro" : "escuro"
    );
  });
}
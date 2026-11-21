
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("nav.principal");
const linksMenu = menuPrincipal.querySelectorAll("a");

function alternarMenu(aberto) {
    menuPrincipal.classList.toggle("menu-aberto", aberto);

    botaoMenu.setAttribute("aria-expanded", String(aberto));

    botaoMenu.querySelector(".texto-menu").textContent =
        aberto ? "Fechar" : "Menu";

    botaoMenu.querySelector(".icone-menu").textContent =
        aberto ? "✕" : "☰";
}

// Abre ou fecha o menu ao clicar no botão.
botaoMenu.addEventListener("click", () => {
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";

    alternarMenu(!aberto);
});

// Fecha o menu depois de selecionar uma página.
linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        alternarMenu(false);
    });
});

// Fecha o menu ao pressionar a tecla ESC.
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        alternarMenu(false);
    }
});

// Fecha o menu ao voltar para a visualização desktop.
const larguraMobile = window.matchMedia("(max-width: 760px)");

larguraMobile.addEventListener("change", (evento) => {
    if (!evento.matches) {
        alternarMenu(false);
    }
});
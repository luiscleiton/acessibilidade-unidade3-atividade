
const banners = document.querySelectorAll(".banner-item");
const botaoAnterior = document.querySelector("#banner-anterior");
const botaoProximo = document.querySelector("#banner-proximo");

let bannerAtual = 0;

function mostrarBanner(indice) {
  if (banners.length === 0) {
    return;
  }

  banners[bannerAtual].classList.remove("ativo");
  banners[bannerAtual].setAttribute("aria-hidden", "true");

  bannerAtual = (indice + banners.length) % banners.length;

  banners[bannerAtual].classList.add("ativo");
  banners[bannerAtual].setAttribute("aria-hidden", "false");
}

if (banners.length > 0 && botaoAnterior && botaoProximo) {
  botaoAnterior.addEventListener("click", () => {
    mostrarBanner(bannerAtual - 1);
  });

  botaoProximo.addEventListener("click", () => {
    mostrarBanner(bannerAtual + 1);
  });
}
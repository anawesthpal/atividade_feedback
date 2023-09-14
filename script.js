// Função para verificar se um elemento está visível na viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para verificar elementos na viewport e adicionar a classe "in-view" quando estão visíveis
function checkElementsInView() {
  var elements = document.querySelectorAll(".animated");
  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("in-view");
    }
  });
}

// Verifique os elementos na viewport quando a página for carregada e quando o usuário rolar a página
document.addEventListener("DOMContentLoaded", checkElementsInView);
window.addEventListener("scroll", checkElementsInView);

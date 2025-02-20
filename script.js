// Criando o elemento do cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Atualiza a posição do cursor conforme o mouse se move
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


//Carrossel
/*const container = document.querySelector('.cardsCarrossel');
let cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 10; // Largura do card + gap
const visibleCards = 3; // Define quantos cards aparecem por vez
let index = visibleCards; // Começa no primeiro grupo de cards

// Clonar os primeiros e últimos 3 cards para efeito infinito
function clonarCards() {
    for (let i = 0; i < visibleCards; i++) {
        let cloneStart = cards[i].cloneNode(true);
        let cloneEnd = cards[cards.length - 1 - i].cloneNode(true);
        container.appendChild(cloneStart); // Clones no final
        container.insertBefore(cloneEnd, container.firstChild); // Clones no início
    }
    cards = document.querySelectorAll('.card'); // Atualizar lista após adicionar clones
    container.style.transform = `translateX(${-index * cardWidth}px)`; // Ajustar posição inicial
}

clonarCards();

function moverCarrossel(direcao) {
  container.style.transition = "transform 0.5s ease-in-out";
  index += direcao * visibleCards; // Avança ou retrocede 3 cards

  container.style.transform = `translateX(${-index * cardWidth}px)`;

  // Ajusta posição para manter o loop infinito
  setTimeout(() => {
    if (index <= 0) {
        container.style.transition = "none";
        index = cards.length - (2 * visibleCards);
        container.style.transform = `translateX(${-index * cardWidth}px)`;
    } else if (index >= cards.length - visibleCards) {
        container.style.transition = "none";
        index = visibleCards;
        container.style.transform = `translateX(${-index * cardWidth}px)`;
    }
  }, 500);



  // Ajuste para responsivo
  function ajustarVisibleCards() {
    if (window.innerWidth <= 768) {
        visibleCards = 1; // No responsivo, apenas 1 card visível
    } else {
        visibleCards = 3; // Para telas maiores, 3 cards visíveis
    }
  }

  // Atualiza a quantidade de cards visíveis quando a janela é redimensionada
  window.addEventListener('resize', () => {
    ajustarVisibleCards();
    cardWidth = cards[0].offsetWidth + 10; // Atualiza a largura do card
  });
}


//Parte da seta subindo
/*document.addEventListener("DOMContentLoaded", () => {
    const botaoTop = document.getElementById("botao-top");

    botaoTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});*/

// Criando o elemento do cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Atualiza a posição do cursor conforme o mouse se move
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


//Parte da seta subindo
document.addEventListener("DOMContentLoaded", () => {
    const botaoTop = document.getElementById("botao-top");

    botaoTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

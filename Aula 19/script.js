let item = 0
const noticias = document.querySelectorAll(".noticias");
const botaoEsq = document.getElementById("botao-esquerda");
const botaoDir = document.getElementById("botao-direita");


function getValue(element) {
    console.log(element.innerText)
}

botaoDir.addEventListener("click", () => {
    if (item < 3) {
        noticias[item].removeAttribute("active");
        noticias[item + 1].setAttribute("active", "true");
        noticias[item + 1].firstChild.innerText = `Minha Notícia ${item + 2}`
        item++;
        getValue(noticias[item]);
    }
    else if(item === 3) {
        getValue(botaoDir)
    }
});

botaoEsq.addEventListener("click", () => {
    if (item > 0) {
        noticias[item].removeAttribute("active");
        noticias[item - 1].setAttribute("active", "true");
        noticias[item - 1].firstChild.innerText = `Minha Notícia ${item}`
        item--;
        getValue(noticias[item]);
    }
    else if(item === 0) {
        getValue(botaoEsq);
    }
});


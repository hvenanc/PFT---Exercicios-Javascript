let item = 0
const noticias = document.querySelectorAll(".noticias");
const botaoEsq = document.getElementById("botao-esquerda");
const botaoDir = document.getElementById("botao-direita");


function getValue(element) {
    console.log(element.innerText)
}

noticias.forEach(getValue);
getValue(botaoDir);
getValue(botaoEsq);



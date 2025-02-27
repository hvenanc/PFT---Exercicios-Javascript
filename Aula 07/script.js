let tentativa = 0;
let palavra = "bola";
let acerto = false;

for (let i = 0; i < 3; i++) {
    tentativa++;

    let entrada = prompt(`Tentativa ${tentativa} de 3. Digite uma letra ou tente advinhar a palavra:`)

    if (entrada == palavra) {
        alert("Parabéns! Você acertou.");
        acerto = true
        break;
    }
    else {
        if (palavra.includes(entrada)) {
            alert(`Você acertou uma letra: ${entrada}`);
        }
        else if(tentativa == 3 && !acerto){
            alert("Você perdeu!")
        }
        else {
            alert("Tente novamente");
        }
    }
}
let tentativa = 0;
let pontoTuristico = "Porto de Galinhas";
let acerto = false;

for (let i = 0; i < 3; i++) {
    tentativa++;

    let entrada = prompt(`Tentativa ${tentativa} de 3. Descubra o ponto turístico pelo emoticom: 🐔⛱️`)

    if (entrada == pontoTuristico) {
        alert("Parabéns! Você acertou.");
        acerto = true
        break;
    }
    else {

        if(tentativa == 3 && !acerto){
            alert("Que pena! Você não resolveu o enigma.")
        }
        else {
            alert("Tente novamente");
        }
    }
}
const musicas = [
    { trecho: "Saiba que o meu grande amor\nHoje vai se casar", cantor: "Reginaldo Rossi" },
    { trecho: "Ontem eu sonhei que estava em Moscou\nDançando pagode russo na boate Kossacou", cantor: "Luiz Gonzaga" },
    { trecho: "Pintei o meu cabelo, me valorizei\nEntrei na academia, eu malhei, malhei", cantor: "Priscila Sena" },
    { trecho: "Eu te juro que perdi toda a razão\nPerdi a noção do tempo por engano", cantor: "Kelvis Duran" },
    { trecho: "Queria ter poder pra poder fazer\nVocê às vezes dizer sim ao invés do não", cantor: "Conde" }
]
let pontos = 0;
let queroJogar = true;

function sorteiaMusica() {

    let trecho = Math.floor(Math.random() * musicas.length);
    return musicas[trecho];
}

function jogar() {
    while (queroJogar) {

        let musica = sorteiaMusica();
        let cantor = prompt("Qual cantor(a) está cantando essa música?\n" + musica.trecho);

        if (cantor.toLowerCase() === musica.cantor.toLowerCase()) {
            pontos++;
            alert("Parábens, você acertou!");
        }
        else {
            alert("Eita! Você errou!")
        }

        let continua = parseInt(prompt("Deseja jogar novamente?\nSim - Digite qualquer tecla\nNão - Digite 2"))
        if (continua === 2) {
            queroJogar = false;
        }
    }
    console.log(`Fim de jogo! Você fez ${pontos} ponto(s).`)
}

jogar();

/* Também conhecidas como funções anônimas
    1º Criar Array com os jogos, explicar um pouco sobre objetos
    2º Criar o loop e a função base com o maior número de votos
    3º Criar a função vencedor com o loop for
*/

let jogos = [
    {nome: "Valorant", votos: 0},
    {nome: "FreeFire", votos: 0},
    {nome: "Bomba Patch", votos: 0},
]
let totalDeVotos = 0;

let vencedor = function(listaDejogos) {
    
    let maisVotado = 0
    for(let i = 0; i < listaDejogos.length; i++) {
        if(listaDejogos[i].votos > maisVotado) {
            maisVotado = listaDejogos[i]
        }
    }
    return `O Jogo mais votado foi ${maisVotado.nome} com ${(maisVotado.votos)/totalDeVotos * 100} % dos Votos`
};

while(true) {
    let voto = parseInt(prompt("Vote em um dos jogos:\n1 - Valorant\n2 - FreeFire\n3 - Bomba Patch\n4 - Exibir Resultado"))
    if(voto === 1) {
        jogos[0].votos++;
        totalDeVotos++;
    }
    else if(voto === 2) {
        jogos[1].votos++;
        totalDeVotos++;
    }
    else if(voto === 3) {
        jogos[2].votos++;
        totalDeVotos++;
    }
    else if(voto === 4) {
        alert(vencedor(jogos));
        break;
    }
    else {
        alert("Opção Inválida");
        break;
    }
}


const ranking = [
    { pais: "Estados Unidos", posicao: 1, ouro: 40, prata: 44, bronze: 42 },
    { pais: "China", posicao: 2, ouro: 40, prata: 27, bronze: 24 },
    { pais: "Japão", posicao: 3, ouro: 20, prata: 12, bronze: 13 },
    { pais: "Austrália", posicao: 4, ouro: 18, prata: 19, bronze: 14 },
    { pais: "França", posicao: 5, ouro: 16, prata: 26, bronze: 22 },
    { pais: "Países Baixos", posicao: 6, ouro: 15, prata: 7, bronze: 12 },
    { pais: "Grã-Bretanha", posicao: 7, ouro: 14, prata: 22, bronze: 29 },
    { pais: "Coreia do Sul", posicao: 8, ouro: 13, prata: 9, bronze: 10 },
    { pais: "Itália", posicao: 9, ouro: 12, prata: 13, bronze: 15 },
    { pais: "Alemanha", posicao: 10, ouro: 12, prata: 13, bronze: 8 },
    { pais: "Canadá", posicao: 11, ouro: 11, prata: 8, bronze: 10 },
    { pais: "Brasil", posicao: 12, ouro: 10, prata: 11, bronze: 15 },
    { pais: "Espanha", posicao: 13, ouro: 9, prata: 12, bronze: 14 },
    { pais: "Hungria", posicao: 14, ouro: 8, prata: 7, bronze: 10 },
    { pais: "Cuba", posicao: 15, ouro: 7, prata: 5, bronze: 8 }
];


function buscarPorPais(nome) {

    const pais = ranking.find(dados => dados.pais === nome);
    const posicao = ranking.indexOf(pais);
    exibirDados(posicao);
}

function buscarPorPosicao(posicaoRanking) {

    const pais = ranking.find(dados => dados.posicao === posicaoRanking);
    const posicao = ranking.indexOf(pais);
    exibirDados(posicao);
}

function exibirDados(posicao) {
    if (posicao > 15 || posicao < 1) {
        alert("Posição do Ranking Inválida");
    }
    else {
        console.log(`País : ${ranking[posicao].pais}\n🥇Medalhas de Ouro: ${ranking[posicao].ouro}\n🥈Medalhas de Prata: ${ranking[posicao].prata} \n🥉Medalhas de Bronze: ${ranking[posicao].bronze}`)
    }

}

function listarTodosDados() {

    console.log("Lista Completa Com os 15 Primeiros Países")
    for (const index in ranking) {
        exibirDados(index);
    }
}

function menu() {

    let opcao = parseInt(prompt("Escolha uma opção:\n1.Buscar por nome do País\n2.Buscar por posição no ranking\n3.Mostar Lista Completa\n0.Sair"));

    switch (opcao) {
        case 0:
            break;
        case 1:
            let pais = (prompt("Digite o nome do país: "))
            buscarPorPais(pais);
            break;
        case 2:
            let posicao = parseInt((prompt("Digite a posição do país no ranking: ")))
            buscarPorPosicao(posicao);
            break;
        case 3:
            listarTodosDados();
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
}

menu();
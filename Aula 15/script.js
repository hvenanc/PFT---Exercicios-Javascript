const tabela = [
    {nome : "Santa Cruz", pontos : 16, vitorias: 5, empates: 1, derrotas: 1},
    {nome : "Náutico", pontos : 13, vitorias: 4, empates: 1, derrotas: 2},
    {nome : "Maguary", pontos : 12, vitorias: 4, empates: 0, derrotas: 2},
    {nome : "Sport", pontos : 12, vitorias: 3, empates: 3, derrotas: 1},
    {nome : "Retrô", pontos : 11, vitorias: 3, empates: 2, derrotas: 2},
]

let exibirInfos = (time) => {
    let info = `
    Campeonato Pernambucano\n
    Estatísticas do ${time.nome}\n
    Time: ${time.nome}\n
    Pontos: ${time.pontos}\n
    Vitórias: ${time.vitorias}\n
    Empate: ${time.empates}\n
    Derrotas: ${time.derrotas}
    `
    console.log(info)
}

let buscarPorPosicao = (posicao) => {
    time = tabela[posicao - 1]
    exibirInfos(time) 
}

let exibirTabela = () => {
    for(let i = 0; i <= tabela.length; i++) {
        exibirInfos(tabela[i])
    }
}

let buscarPorNome = (nome) => {
    const time = tabela.find(time => time.nome === nome)
    exibirInfos(time);
}

while(true) {

    let opcao = parseInt(prompt("Digite a opção desejada:\n1. Buscar por nome do Time\n2. Buscar por posição na tabela\n3. Exibir Tabela completa"))

    switch(opcao) {
        case 1:
            let time = prompt("Digite o nome do time")
            buscarPorNome(time);
            break;
        case 2:
            let posicao = parseInt(prompt("Posição do time"))
            buscarPorPosicao(posicao)
            break;
        case 3:
            exibirTabela()
            break;
        default:
            alert('Opção Inválida')
            break;
    }
}
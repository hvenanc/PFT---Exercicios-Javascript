/*

1 - Criar o menu
2 - Criar um array com as respostas
3 - Criar a interação com o usuário

*/

const respostas = [
    "A poliomielite, ou paralisia infantil, é uma doença viral altamente contagiosa que pode causar paralisia permanente e, em casos graves, levar à morte. Ela afeta principalmente crianças e é transmitida por contato com água ou alimentos contaminados. A vacinação é fundamental para prevenir a doença, protegendo não apenas quem toma a vacina, mas também reduzindo a circulação do vírus na população. Graças à vacina, muitos países conseguiram erradicar a poliomielite. Tomar a vacina garante proteção coletiva e evita o retorno da doença.",
    "De 27/05/2025 à 14/06/2025",
    "Todas as Crianças Menores de 5 Anos devem ser vacinadas!\nMenores de 1 Ano devem atualizar a caderneta de vacinação\nAs crianças de 1 a 4 anos devem receber uma dose de vacina"
]
const unidadesDeSaude = [
    "Upa da Lagoa Encatada",
    "UPAE - Ibura de Baixo",
    "Policlínica Arnaldo Marque",
    "Imip",
    "Hospital da Restauração"
]

function exibir() {
    alert(respostas[0])
}

while(true) {

    let opcao = parseInt(prompt("Bem-Vindo ao ChatBot de Vacinação contra a Poliomielite\nEscolha uma das opções abaixo:\n1. Importância da Vacina contra a Poliomielite\n2. Data da Campanha\n3. Idade das Crianças\n4. Unidade Básica de Saúde\n5. Sair"))

    if(opcao === 1) {
        //exibir()
        setTimeout(exibir, 5000)
    }
    else if(opcao === 5 || opcao === null) {
        break;
    }
}

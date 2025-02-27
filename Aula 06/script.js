let nota = "Bem-vindo à Lanchonete Comunitária!\n"
let total = 0;

while(true) {

    let opcao = Number(prompt("Menu da Lanchonete Comunitária\n1.Sanduíche - R$ 5,00\n2.Fatia de Pizza - R$ 7,00\n3.Suco - R$ 2,00\n4.Encerrar Pedido"));

    if(opcao == 1) {
        nota += "Você escolheu: Sanduíche - R$5,00\n";
        total += 5;
    }
    else if(opcao == 2) {
        nota += "Você escolheu: Fatia de Pizza - R$ 7,00\n";
        total += 7;
    }
    else if(opcao == 3) {
        nota += "Você escolheu: Suco - R$ 2,00\n";
        total += 2;
    }
    else if(opcao == 4) {
        nota += `Total a Pagar R$ ${total}`
        alert(nota)
        break;
    }
    else {
        alert("Opção Inválida!")
    }
}
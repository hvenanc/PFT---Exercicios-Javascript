//Falta concluir
let nomeJogador = prompt("Digite seu nome: ");
let opcoes = ['🪨', '📄', '✂️'];
let totalJogador = 0;
let totalComputador = 0;
let totalJogadas = 0;

while(totalJogadas < 3) {
    let opcaoJogador = parseInt(prompt("1 - Pedra 🪨\n2 - Papel 📄\n3 - Tesoura ✂️"));
       
    opcaoJogador = opcaoJogador - 1;
    console.log(`Escolha do Jogador: ${opcoes[opcaoJogador]}`)
    let jogadaComputador = Math.floor(Math.random() * opcoes.length);
    console.log(`Escolha do Computador: ${opcoes[jogadaComputador]}`)

    totalJogadas++;

    if (
        (opcaoJogador === 0 && jogadaComputador === 2) ||
        (opcaoJogador === 2 && jogadaComputador === 1) ||
        (opcaoJogador === 1 && jogadaComputador === 0)
    ) {
        totalJogador++;
        console.log(`Placar ${nomeJogador} ${totalJogador} | Computador ${totalComputador}`);
    }
    else if (opcaoJogador === jogadaComputador) {
        console.log(`Placar ${nomeJogador} ${totalJogador} | Computador ${totalComputador}`);
    }
    else {
        totalComputador++
        console.log(`Placar ${nomeJogador} ${totalJogador} | Computador ${totalComputador}`);
    }
}

if(totalJogador > totalComputador) {
    alert(`${nomeJogador} venceu no placar de ${totalJogador} X ${totalComputador}.`)
}
else {
    alert(`O computador venceu no placar de ${totalComputador} X ${totalJogador}.`)
}
//Questão 1

// let idade = Number(prompt("Digite sua idade: "))
// let podeDirigir = (idade >= 18) ? "Pode Dirigir" : "Não pode dirigir";
// alert(podeDirigir)

//Questão 2

let idade = prompt("Digite sua idade: ");
let valor = prompt("Digite o valor do produto: ");
let desconto = 0.1;
let descontoIdade = (idade >= 60) ? alert(`Desconto idoso liberado. Total a pagar R$ ${valor - valor * desconto}`) : alert("Não qualifica para desconto de idoso.")


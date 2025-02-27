const pessoas = [
    { nome: "Ana Silva", email: "ana.silva@gmail.com" },
    { nome: "Bruno Oliveira", email: "bruno.oliveira@yahoo.com" },
    { nome: "Carlos Souza", email: "carlos.souza@hotmail.com" },
    { nome: "Daniela Pereira", email: "daniela.pereira@gmail.com" },
    { nome: "Eduardo Santos", email: "eduardo.santos@gmail.com" },
    { nome: "Fernanda Lima", email: "fernanda.lima@hotmail.com" },
    { nome: "Gustavo Almeida", email: "gustavo.almeida@gmail.com" },
    { nome: "Helena Costa", email: "helena.costa@outlook.com" },
    { nome: "Igor Ribeiro", email: "igor.ribeiro@yahoo.com" },
    { nome: "Juliana Fernandes", email: "juliana.fernandes@gmail.com" },
    { nome: "Lucas Rocha", email: "lucas.rocha@gmail.com" },
    { nome: "Mariana Cardoso", email: "mariana.cardoso@outlook.com" },
    { nome: "Nicolas Martins", email: "nicolas.martins@hotmail.com" },
    { nome: "Olivia Azevedo", email: "olivia.azevedo@gmail.com" },
    { nome: "Paulo Rodrigues", email: "paulo.rodrigues@yahoo.com" }
];


const tabela = document.getElementById("tabela");

// pessoas.forEach(pessoa => {

//     let novaLinha = document.createElement("tr");
//     let colunaNome = document.createElement("td");
//     colunaNome.textContent = pessoa.nome;
//     let colunaEmail = document.createElement("td");
//     colunaEmail.textContent = pessoa.email;

//     if(pessoa.email.includes("gmail")) {
//         colunaNome.style.background = "#0096FF";
//         colunaEmail.style.background = "#0096FF";
//     }

//     novaLinha.appendChild(colunaNome);
//     novaLinha.appendChild(colunaEmail);

//     tabela.appendChild(novaLinha);
// })

for (let index = 0; index < pessoas.length; index++) {
    
    let novaLinha = document.createElement("tr");
    let colunaNome = document.createElement("td");
    colunaNome.textContent = pessoas[index].nome;
    let colunaEmail = document.createElement("td");
    colunaEmail.textContent = pessoas[index].email;

    if(pessoas[index].email.includes("gmail")) {
        colunaNome.style.background = "#0096FF";
        colunaEmail.style.background = "#0096FF";
    }

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);

    tabela.appendChild(novaLinha);
}
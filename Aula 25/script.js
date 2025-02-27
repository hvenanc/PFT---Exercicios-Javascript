let id = 0;
const tabela = document.getElementsByTagName("table")[0];

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("email").value;
    let posicao = document.getElementById("position").value;
    
    console.log(nome, email, posicao)
    addLinha(nome, email, posicao, id)
    id++;
})


function addLinha(nome, email, posicao, id) {

    console.log(posicao);
    let novaLinha = document.createElement("tr");
    novaLinha.setAttribute("id", id)
    let colunaId = document.createElement("td");
    colunaId.innerText = id;
    let colunaNome = document.createElement("td");
    colunaNome.innerText = nome;
    let colunaEmail = document.createElement("td");
    colunaEmail.innerText = email;
    let colunaDeletar = document.createElement("td");
    let botao = document.createElement("button");
    botao.classList.add("delete");
    botao.innerText = "DELETE";
    let acao = `removerLinha('${id}')`
    botao.setAttribute("onclick", acao)
    colunaDeletar.appendChild(botao);

    novaLinha.appendChild(colunaId);
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);
    novaLinha.appendChild(colunaDeletar);

    if(posicao == 'baixo') {
        tabela.appendChild(novaLinha);
    }
    else {
        let linhaAnterior = document.querySelectorAll("tr")[1];
        if(linhaAnterior) {
            linhaAnterior.before(novaLinha);
        }
        else {
            tabela.appendChild(novaLinha);
        }
    }

}

function removerLinha(id) {
    
    const linha = document.getElementById(id);
    tabela.removeChild(linha);
    console.log(id);
}

function fnRemover(id) {

    const opcao = parseInt(prompt("Deseja excluir a notícia?\n1 - Sim\n2 - Não"))

    if(opcao === 1) {
        const noticia = document.getElementById(id);
        const container = document.getElementById("container");
        container.removeChild(noticia);
    }
    
}

function fnAdicionar() {
    const titulo = prompt("Insira o título", "")
    const mensagem = prompt("Insira a mensagem", "")
    criarNoticia(titulo, mensagem);
}

function criarNoticia(titulo, mensagem) {
    
    let noticia = document.createElement("div");
    noticia.setAttribute("id", titulo);
    noticia.setAttribute("class", "reportagens");

    let tituloNoticia = document.createElement("h2");
    tituloNoticia.innerText = titulo;
    noticia.appendChild(tituloNoticia);

    let conteudoNoticia = document.createElement("p");
    conteudoNoticia.innerHTML = mensagem;
    noticia.appendChild(conteudoNoticia);

    let linha = document.createElement("hr");
    noticia.appendChild(linha);

    let idNoticia = `fnRemover('${titulo}')`

    let botao = document.createElement("button");
    botao.setAttribute("onclick", idNoticia);
    botao.innerText = "Remover";
    noticia.appendChild(botao);

    const container = document.getElementById("container");
    container.appendChild(noticia);
}
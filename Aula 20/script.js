function verificarSenha() {
    const inputs = document.getElementsByTagName('input');
    if(inputs[0].value === inputs[1].value) {
        alterarImagem()
    }
    else {
        alert("As senhas devem ser iguais!")
        window.reload();
    }
}

function alterarImagem() {
    const imagem = document.querySelector('#container img');
    imagem.src = "https://i.gifer.com/origin/4c/4c4a770a19b5a07fe6db82ed87bcd351_w200.gif"
}
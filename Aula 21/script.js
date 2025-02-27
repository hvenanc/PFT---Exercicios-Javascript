function verificarValorInput(){
    const input = document.getElementById('input-text');
    const valorInput = document.getElementById('valor-input');
    valorInput.innerText = input.value;
    input.value = "Valor resetado"
    valorInput.removeAttribute("class");
  }

function alterarEstilo() {
    const div = document.getElementById("valor-input");
    div.style.cssText = 'background: black; color: white; padding: 30px; margin-top:20px;'
}

function alterarImagem() {
    const imagem = document.querySelector('#container img');
    imagem.src = "https://www.pe.gov.br/wp-content/uploads/2023/08/GovPERGB.png"
}

//Falta Concluir
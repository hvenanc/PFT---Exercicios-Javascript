# Trecho 1 - HTML

````
<div id="farol-traseiro"> </div>
````

* Insere uma div no elemento html, essa div será responsável pela representação da estrutura do farol traseiro no carro.

# Trecho 2 - CSS

````
#farol-traseiro{
  width: 40px;
  height: 30px;
  background-color: #b20521;
  position: absolute;
  right: 0px;
  top: 20px;
  border-radius: 50px 0 0 50px;
}

#farol-traseiro.farol-ligado{
   background-color: red;
}

````

* Insere o estilo do farol traseiro no primeiro conjunto de estilo e no segundo define como vai ficar a cor farol quando ele estiver ativo.

# Trecho 3 - JS

````
//Linha 3
const lanternaTraseira = document.getElementById("farol-traseiro") 
//Linha 8
lanternaTraseira.classList.toggle('farol-ligado');
````

* O trecho da linha 3 recupera o elemento com id igual a "farol-traseiro" e salva em uma variável do tipo const.
Após isso na linha 8 dentro da função handleClick() a variável lanternaTraseira vai chamar o objeto classList e o método toggle que irá  inserir a classe "farol-ligado" caso não exista e remover caso exista. Todos os elementos html que são utilizados no Javascript são recuperados a partir do DOM utilizando o método getElementById().


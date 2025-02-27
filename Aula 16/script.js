const carro = document.getElementById("carro") 
const farol = document.getElementById("farol") 
const lanternaTraseira = document.getElementById("farol-traseiro") 


function handleClick() { 
  farol.classList.toggle('farol-ligado');
  lanternaTraseira.classList.toggle('farol-ligado');
  
} 

carro.addEventListener('click', handleClick);
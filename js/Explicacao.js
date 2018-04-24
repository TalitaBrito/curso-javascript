alert(); //popup com msg
console.log(); //apresenta msg no console do desenvolvedor (f12)
var nomeVariavel; //declaração de variável
document;// representa o DOM (Document Object Model), que é a página HTML para o navegador
document.querySelection("elemento"); //seleciona um elemento html ou css
var pacientes = document.querySelectorAll(".paciente"); //retorna todos os elementos que estão sendo solicitados
variavel.textContent; //recupera o texto de uma variável
variavel.textContent = "msg"; //altera o texto de uma variável
variavel.toFixed(2); //fixa a quantidade de casas decimais que deseja que seja apresentada
paciente.style.color = "#fff"; //altera a cor da fonte através do javascript
paciente.style.backgroundColor = "lightcoral"; //altera a cor do fundo através do javascript
paciente.classList.add("paciente-invalido"); //cria uma classe (aplicando seus estilos) diretamente javascript (a classe deve estar criada no arquivo css)
titulo.addEventListener("click", mostraMsg); //escuta um evento. Passa como parametro o evento que deseja escutar. Pode-se passar uma função

function mostraMsg(){
  console.log("olá");
}//declaração de função

titulo.addEventListener("click", function(){
   console.log("olá");
}); //uma função anônima.

event.preventDefault(); //previne os comportamentos padrões de um determinado formulário

var form = document.querySelector("#form-adiciona"); //recupera o formulário com o id form-adiciona
var nome = form.nome; //recupera o elemento nome que está dentro do formulário, no caso, um input que tem como nome o valor nome
var nome = form.nome.value; //recupera o valor digitado no campo nome do formulário
var pacienteTr = document.createElement("tr"); //cria elementos html distintos através do javascript
pacienteTr.appendChild(nomeTd);//adiciona um elemento filho dentro do elemento pai

var paciente = {
  nome:  form.nome.value,
  peso: form.peso.value,
  altura: form.altura.value,
  gordura: form.gordura.value,
  imc: calculaImc(form.peso.value, form.altura.value)
} //criação de um objeto

botao.onClick(); //evento
form.reset(); //limpa os campos que foram preenchidos após executar detereminada parte do código

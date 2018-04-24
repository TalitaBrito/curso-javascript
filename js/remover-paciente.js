var paciente = document.querySelectorAll(".paciente"); // seleciona todos os elementos que possuem essa classe

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){ //segura o tempo para executar uma função 
    event.target.parentNode.remove(); //pega o evento de clique e análise em qual elemento foi realizado o duplo clique.
                                      //target: indica qual o elemento que está sendo clicados
                                      //parentNode: recupera o pai do elemento que está sendo clicado.
                                      //remove(); -> função que remove um elemento html
  },500);

});

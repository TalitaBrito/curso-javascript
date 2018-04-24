var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrindo conexão

  xhr.addEventListener("load", function(){

    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText; //recupera o texto
      var pacientes = JSON.parse(resposta); //recebe o texto em JSON e realiza o parse para objetos JavaScript

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    }

    else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      var erroAjax = document.querySelector("#erro-ajax");
      erroAjax.classList.remove("invisivel");
    }

  });

  xhr.send(); //envia a requisição

});

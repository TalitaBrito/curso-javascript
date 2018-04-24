//Aula 4 - Eventos, formulários e criando elementos

var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteForm(form);

  var erros = validaPaciente(paciente); //recebe a função validaPaciente que retorna um array de erros

  if (erros.length > 0){ // se o existir erros registrados no arrar, irá exibir as mensagens
    exibeMensagensDeErro(erros);
    return; //retorna vazio para não prosseguir com as outras funções
  }

  if (!validaPaciente(paciente)){
    console.log("Paciente inválido!");
    return;
  }
  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagem-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){ //função que retorna o array de erros para validação
  var ul = document.querySelector("#mensagem-erro"); //será criado uma lista com os erros
  ul.innerHTML = ""; //innerHTML --> altera o conteúdo HTML de um elemento

  erros.forEach(function(erro){ //para cada item do array, execute esssa funcção
    var li = document.createElement("li"); //se existir algum erro, criar uma lista com os erros, usando <li>
    li.textContent = erro; //adiciona os erros a <li>
    ul.appendChild(li); //adiciona a tag <li> a tag <ul>
  });
}

function obtemPacienteForm(form){

  var paciente = {
    nome:  form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

  function validaPaciente(paciente){ //função que realiza a validação do paciente
    var erros = []; //armazena todos os erros gerados em um array, para montar uma lista de erros

    if (paciente.nome.length == 0){ //se o paciente não tiver nome, não permite adicionar
      erros.push("O nome não pode ser em branco!") //função push adiciona a msg no array
    }

    if (paciente.peso.length == 0){
      erros.push("O peso não pode ficar em branco");
    }

    if (!validaPeso(paciente.peso)){ //realiza a validação para saber se o peso é válido
      erros.push("Peso é inválido!")
    }

    if (!validaAltura(paciente.altura)){
      erros.push("Altura é inválida!")
    }

    if (paciente.altura.length == 0){
      erros.push("A altura não pode ficar em branco");
    }

    if (paciente.gordura.length == 0){
      erros.push("A gordura não pode ser em branco!");
    }

    return erros;
    //retorna o array de erros, com as mensagens
  }

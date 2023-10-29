function somenteNumeros(evento) {
  campoAltura = document.getElementById("altura");
  var codigo = evento.keyCode;

  if (codigo < 48 || codigo > 57) return false;

  mascaraAltura(campoAltura);
}

function somenteNum(evento) {
  campoPeso = document.getElementById("peso");
  var codigo = evento.keyCode;

  if (codigo < 48 || codigo > 57) return false;

  mascaraPeso(campoPeso);
}

function mascaraAltura(elemento) {
  var conteudo = elemento.value;

  if (conteudo.length == 1) {
    var texto = conteudo.charAt(0) + "." + conteudo.substring(1);
    elemento.value = texto;
  }
}

function mascaraPeso(elemento) {
  var conteudo = elemento.value;

  if (conteudo.length == 2) {
    var texto =
      conteudo.charAt(0) + conteudo.charAt(1) + "." + conteudo.substring(2);
    elemento.value = texto;
  }
}

function calcularIMC() {
  var resultImc,
    texto,
    linkImg,
    textoFim = "";
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var imc = (peso / (altura * altura)).toFixed(1);

  if (imc <= 18.5) {
    texto = "Abaixo de 18.5";
    resultImc = "Abaixo do peso";
    linkImg = "./img/abaixo.png";
    textoFim =
      "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
  } else if (imc > 18.5 && imc <= 24.9) {
    texto = "Entre 18.5 e 24.9";
    resultImc = "Peso normal";
    linkImg = "./img/normal.png";
    textoFim =
      "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
  } else if (imc > 24.9 && imc <= 29.9) {
    texto = "Entre 24.9 e 29.9";
    resultImc = "Sobrepeso";
    linkImg = "./img/sobrepeso.png";
    textoFim =
      "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
  } else if (imc > 29.9 && imc <= 34.9) {
    texto = "Entre 29.9 e 34.9";
    resultImc = "Obesidade grau I";
    linkImg = "./img/obesidade1.png";
    textoFim =
      "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
  } else if (imc > 34.9 && imc <= 39.9) {
    texto = "Entre 34.9 e 39.9";
    resultImc = "Obesidade grau II";
    linkImg = "./img/obesidade2.png";
    textoFim =
      "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
  } else if (imc > 39.9) {
    texto = "Acima de 39.9";
    resultImc = "Obesidade grau III";
    linkImg = "img/obesidade3.png";
    textoFim =
      "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
  }

  document.getElementById("texto").innerHTML = `
  <div class="row justify-content-center pt-2">
        <div class="col-12 col-md-8 pt-2">
            <p class= "text-center">Seu IMC é: <strong>${imc}</strong></p>
            <p class= "text-center">IMC ${texto} <br> <strong>${resultImc}</strong></p>
            <p class= "text-center">${textoFim}</p>
        </div>

        <div>
            <img src="${linkImg}" style="max-width: 50px;" class="rounded mx-auto d-block mb-2">
        </div>
    </div>
  `;
  alert("Resultado: " + resultImc);
}

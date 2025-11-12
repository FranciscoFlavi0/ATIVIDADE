// Função auxiliar para pegar elementos
function getById(id) {
    return document.getElementById(id);
  }
  
  // ==================== QUESTÃO 1 ====================
  getById("botaoCalcular").addEventListener("click", function () {
    const peso = parseFloat(getById('peso').value);
    const altura = parseFloat(getById('altura').value);
    const resultado = getById('resultado');
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      resultado.textContent = "Por favor, insira valores válidos.";
      resultado.style.color = "red";
      return;
    }
  
    const imc = peso / (altura * altura);
    let mensagem = "";
  
    if (imc < 18.5) {
      mensagem = "Abaixo do peso";
    } else if (imc < 25) {
      mensagem = "Peso normal";
    } else if (imc < 30) {
      mensagem = "Sobrepeso";
    } else {
      mensagem = "Obesidade";
    }
  
    resultado.style.color = "black";
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}: ${mensagem}`;
  });
  
  
  // ==================== QUESTÃO 2 ====================
  // Array com votos
  let votos = [0, 0, 0];
  const nomes = ["Candidato A", "Candidato B", "Candidato C"];
  
  function votar() {
    const escolhido = parseInt(getById("candidato").value);
    votos[escolhido]++;
    mostrarVotos();
  }
  
  function apurar() {
    let maior = votos[0];
    let vencedor = nomes[0];
  
    for (let i = 1; i < votos.length; i++) {
      if (votos[i] > maior) {
        maior = votos[i];
        vencedor = nomes[i];
      }
    }
  
    getById("resultado2").innerHTML = `${vencedor} está na frente com ${maior} voto(s)!`;
  }
  
  function zerar() {
    for (let i = 0; i < votos.length; i++) {
      votos[i] = 0;
    }
    getById("resultado2").innerHTML = "Contadores zerados!";
  }
  
  function mostrarVotos() {
    let texto = "Resultado parcial:<br>";
    for (let i = 0; i < nomes.length; i++) {
      texto += `${nomes[i]}: ${votos[i]} voto(s)<br>`;
    }
    getById("resultado2").innerHTML = texto;
  }
  
  
  // ==================== QUESTÃO 3 ====================
  function convertTemperatura() {
    const temperatureInput = getById("temperature");
    const conversionType = getById("conversion-type").value;
    const resultDisplay = getById("resultado3");
  
    const temp = parseFloat(temperatureInput.value);
  
    if (isNaN(temp)) {
      resultDisplay.textContent = "Por favor, insira uma temperatura válida.";
      return;
    }
  
    let convertedTemp;
  
    if (conversionType === "celsius-to-fahrenheit") {
      convertedTemp = (9 / 5) * temp + 32;
      resultDisplay.textContent = `${temp}°C é igual a ${convertedTemp.toFixed(2)}°F`;
    } else {
      convertedTemp = (5 / 9) * (temp - 32);
      resultDisplay.textContent = `${temp}°F é igual a ${convertedTemp.toFixed(2)}°C`;
    }
  }
  
  
  // ==================== QUESTÃO 4 ====================
  let total = 0;
  
  function adicionarGasto() {
    const valor = Number(getById('valor').value);
  
    if (valor > 0) {
      total += valor;
      getById('valor').value = '';
      alert(`Valor adicionado! Total atual: R$ ${total.toFixed(2)}`);
    } else {
      alert('Digite um valor válido.');
    }
  }
  
  function exibirResumo() {
    let mensagem = '';
  
    if (total < 50) {
      mensagem = 'Gasto leve';
    } else if (total <= 200) {
      mensagem = 'Gasto moderado';
    } else {
      mensagem = 'Cuidado com as despesas!';
    }
  
    getById('resultado4').innerHTML =
      `Total gasto: R$ ${total.toFixed(2)} <br> ${mensagem}`;
  }
  
  
  // ==================== QUESTÃO 5 ====================
  function verificarNumero() {
    const numeroEscolhido = 7;
    const numeroUsuario = parseInt(getById('numero').value);
    let resultado = '';

    if (numeroUsuario > numeroEscolhido) {
        resultado = 'Maior que o número!';
    } else if (numeroUsuario < numeroEscolhido) {
        resultado = 'Menor que o número!';
    } else if (numeroUsuario === numeroEscolhido) {
        resultado = 'Acertou!';
    } else {
        resultado = 'Por favor, insira um número válido entre 1 e 10.';
    }

    getById('resultado5').innerText = resultado;
}

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}
function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
function fahrenheitParaKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}
function kelvinParaCelsius(kelvin) {
  return kelvin - 273.15;
}
function kelvinParaFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}
function converterTemperatura(valor, de, para) {
  if (de === para) {
    return valor; 
  }
  if (de === 'celsius') {
    if (para === 'fahrenheit') return celsiusParaFahrenheit(valor);
    if (para === 'kelvin') return celsiusParaKelvin(valor);
  }
  if (de === 'fahrenheit') {
    if (para === 'celsius') return fahrenheitParaCelsius(valor);
    if (para === 'kelvin') return fahrenheitParaKelvin(valor);
  }
  if (de === 'kelvin') {
    if (para === 'celsius') return kelvinParaCelsius(valor);
    if (para === 'fahrenheit') return kelvinParaFahrenheit(valor);
  }
}

// Lógica do formulário
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Pegando os valores do formulário
  const valor = parseFloat(document.getElementById('valor').value);
  const de = document.getElementById('de').value;
  const para = document.getElementById('para').value;

  // Calculando a conversão
  const resultado = converterTemperatura(valor, de, para);

  // Exibindo o resultado
  document.getElementById('resultado').textContent = resultado.toFixed(2);
});

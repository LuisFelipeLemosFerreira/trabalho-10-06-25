function runUnitTests() {
  
  testar("UNIT - Celsius para Fahrenheit", () => {
    const resultado1 = celsiusParaFahrenheit(0);
    if (resultado1 !== 32) throw new Error(`Esperado 32, mas recebeu ${resultado1}`);

    const resultado2 = celsiusParaFahrenheit(100);
    if (resultado2 !== 212) throw new Error(`Esperado 212, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Fahrenheit para Celsius", () => {
    const resultado1 = fahrenheitParaCelsius(32);
    if (resultado1 !== 0) throw new Error(`Esperado 0, mas recebeu ${resultado1}`);

    const resultado2 = fahrenheitParaCelsius(212);
    if (resultado2 !== 100) throw new Error(`Esperado 100, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Celsius para Kelvin", () => {
    const resultado1 = celsiusParaKelvin(0);
    if (resultado1 !== 273.15) throw new Error(`Esperado 273.15, mas recebeu ${resultado1}`);

    const resultado2 = celsiusParaKelvin(100);
    if (resultado2 !== 373.15) throw new Error(`Esperado 373.15, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Kelvin para Celsius", () => {
    const resultado1 = kelvinParaCelsius(273.15);
    if (resultado1 !== 0) throw new Error(`Esperado 0, mas recebeu ${resultado1}`);

    const resultado2 = kelvinParaCelsius(373.15);
    if (resultado2 !== 100) throw new Error(`Esperado 100, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Fahrenheit para Kelvin", () => {
    const resultado1 = fahrenheitParaKelvin(32);
    if (resultado1 !== 273.15) throw new Error(`Esperado 273.15, mas recebeu ${resultado1}`);

    const resultado2 = fahrenheitParaKelvin(212);
    if (resultado2 !== 373.15) throw new Error(`Esperado 373.15, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Kelvin para Fahrenheit", () => {
    const resultado1 = kelvinParaFahrenheit(273.15);
    if (resultado1 !== 32) throw new Error(`Esperado 32, mas recebeu ${resultado1}`);

    const resultado2 = kelvinParaFahrenheit(373.15);
    if (resultado2 !== 212) throw new Error(`Esperado 212, mas recebeu ${resultado2}`);
  });
  testar("UNIT - Função converterTemperatura", () => {
    const r1 = converterTemperatura(0, 'celsius', 'kelvin');
    if (r1 !== 273.15) throw new Error(`Esperado 273.15, mas recebeu ${r1}`);

    const r2 = converterTemperatura(32, 'fahrenheit', 'celsius');
    if (r2 !== 0) throw new Error(`Esperado 0, mas recebeu ${r2}`);

    const r3 = converterTemperatura(273.15, 'kelvin', 'kelvin');
    if (r3 !== 273.15) throw new Error(`Esperado 273.15 (sem conversão), mas recebeu ${r3}`);
  });
}

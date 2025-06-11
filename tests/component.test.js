function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });
  testar("COMPONENT - Inputs devem receber valores corretamente", () => {
    const inputValor = document.getElementById("valor");
    const selectDe = document.getElementById("de");
    const selectPara = document.getElementById("para");

    inputValor.value = "100"; 
    selectDe.value = "celsius";
    selectPara.value = "fahrenheit";

    if (inputValor.value !== "100" || selectDe.value !== "celsius" || selectPara.value !== "fahrenheit") {
      throw new Error("Inputs não aceitaram valores corretamente");
    }
  });
  testar("COMPONENT - Formulário dispara evento de submit", () => {
    const form = document.getElementById("form");
    let chamado = false;

    const listener = (e) => {
      chamado = true;
      e.preventDefault(); 
      form.removeEventListener("submit", listener); 
    };

    form.addEventListener("submit", listener);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado");
  });
  testar("COMPONENT - Conversão de Celsius para Fahrenheit deve funcionar", () => {
    const inputValor = document.getElementById("valor");
    const selectDe = document.getElementById("de");
    const selectPara = document.getElementById("para");

    inputValor.value = "100";
    selectDe.value = "celsius";
    selectPara.value = "fahrenheit";

    const form = document.getElementById("form");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    const resultado = document.getElementById("resultado").textContent;
    if (Number(resultado) !== 212) throw new Error("Conversão de Celsius para Fahrenheit falhou");
  });
  testar("COMPONENT - Conversão de Fahrenheit para Celsius deve funcionar", () => {
    const inputValor = document.getElementById("valor");
    const selectDe = document.getElementById("de");
    const selectPara = document.getElementById("para");

    inputValor.value = "32";
    selectDe.value = "fahrenheit";
    selectPara.value = "celsius";

    const form = document.getElementById("form");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    const resultado = document.getElementById("resultado").textContent;
    if (Number(resultado) !== 0) throw new Error("Conversão de Fahrenheit para Celsius falhou");
  });
  testar("COMPONENT - Conversão de Celsius para Kelvin deve funcionar", () => {
    const inputValor = document.getElementById("valor");
    const selectDe = document.getElementById("de");
    const selectPara = document.getElementById("para");

    inputValor.value = "0";
    selectDe.value = "celsius";
    selectPara.value = "kelvin";

    const form = document.getElementById("form");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    const resultado = document.getElementById("resultado").textContent;
    if (Number(resultado) !== 273.15) throw new Error("Conversão de Celsius para Kelvin falhou");
  });
  testar("COMPONENT - Conversão de Kelvin para Celsius deve funcionar", () => {
    const inputValor = document.getElementById("valor");
    const selectDe = document.getElementById("de");
    const selectPara = document.getElementById("para");

    inputValor.value = "273.15";
    selectDe.value = "kelvin";
    selectPara.value = "celsius";

    const form = document.getElementById("form");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    const resultado = document.getElementById("resultado").textContent;
    if (Number(resultado) !== 0) throw new Error("Conversão de Kelvin para Celsius falhou");
  });
}

calcular = function () {
  let cmpValor;
  let valorCaja;
  let valorEntero;
  const valorConst1 = 1.8;
  const valorConst2 = 32;
  let resultado;
  let resultadoTexto;
  // 1. Recuperar el valor de la caja de texto.
  cmpValor = document.getElementById("valorCelsius");
  valorCaja = cmpValor.value;
  // 2. Convertir el valor recuperado en entero.
  valorEntero = parseInt(valorCaja);
  // 3. Calcular cuantos Farenheit representa los celsius ingresados.
  resultado = (valorEntero * valorConst1) + valorConst2;
  // 4. Mostrar el resultado.
  resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerText = resultado + "° Farenheit";
};

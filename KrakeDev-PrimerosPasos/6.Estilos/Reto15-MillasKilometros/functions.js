calcular = function () {
  let cmpValor;
  let valorCaja;
  let valorEntero;
  const kilometro = 1.609;
  let resultado;
  let resultadoTexto;
  // 1. Recuperar el valor de la caja de texto.
  cmpValor = document.getElementById("valorMillas");
  valorCaja = cmpValor.value;
  // 2. Convertir el valor recuperado en entero.
  valorEntero = parseInt(valorCaja);
  // 3. Calcular cuantos kilimetros representa las millas ingresadas.
  resultado = valorEntero * kilometro;
  // 4. Mostrar el resultado.
  resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerText = resultado + " Kilometros";
};

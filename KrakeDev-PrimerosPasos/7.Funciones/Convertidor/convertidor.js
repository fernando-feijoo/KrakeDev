//Crear una funcion llamada convertirEnPesosMx
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Mexicanos
convertirEnPesosMx = function (dolares) {
  let pesosMexicanos;
  pesosMexicanos = dolares * 17.99;
  return pesosMexicanos;
};

convertirEnEuros = function (dolares) {
  let euros;
  euros = dolares * 0.91;
  return euros;
};

convertirEnPesosColombianos = function (dolares) {
  let pesosColombianos;
  pesosColombianos = dolares * 3963.73;
  return pesosColombianos;
};

mostrarPesosMx = function () {
  let cmpValor;
  let valor;
  let valorFloat;
  let valorPesosMexicanos;
  let cmpResultado;
  let resultadoFormateado;
  let cmpMoneda;
  let cmpImagenBandera;

  cmpValor = document.getElementById("txtValor");
  valor = cmpValor.value;
  valorFloat = parseFloat(valor);
  valorPesosMexicanos = convertirEnPesosMx(valorFloat);

  resultadoFormateado = valorPesosMexicanos.toFixed(2);

  cmpResultado = document.getElementById("lblValor");
  cmpResultado.innerText = resultadoFormateado;

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "PESOS MEXICANOS";

  cmpImagenBandera = document.getElementById("imgBandera");
  cmpImagenBandera.src = "banderaMx.png";
};

mostrarEuros = function () {
  let cmpValor;
  let valor;
  let valorFloat;
  let valorEuros;
  let cmpResultado;
  let resultadoFormateado;
  let cmpMoneda;
  let cmpImagenBandera;

  cmpValor = document.getElementById("txtValor");
  valor = cmpValor.value;
  valorFloat = parseFloat(valor);
  valorEuros = convertirEnEuros(valorFloat);

  resultadoFormateado = valorEuros.toFixed(2);

  cmpResultado = document.getElementById("lblValor");
  cmpResultado.innerText = resultadoFormateado;

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "EUROS";

  cmpImagenBandera = document.getElementById("imgBandera");
  cmpImagenBandera.src = "unionEuropea.jpg";
};

mostrarPesosColombianos = function () {
  let cmpValor;
  let valor;
  let valorFloat;
  let valorPesosColombianos;
  let cmpResultado;
  let resultadoFormateado;
  let cmpMoneda;
  let cmpImagenBandera;

  cmpValor = document.getElementById("txtValor");
  valor = cmpValor.value;
  valorFloat = parseFloat(valor);
  valorPesosColombianos = convertirEnPesosColombianos(valorFloat);

  resultadoFormateado = valorPesosColombianos.toFixed(2);

  cmpResultado = document.getElementById("lblValor");
  cmpResultado.innerText = resultadoFormateado;

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "PESOS COLOMBIANOS";

  cmpImagenBandera = document.getElementById("imgBandera");
  cmpImagenBandera.src = "banderaColombia.png";
};

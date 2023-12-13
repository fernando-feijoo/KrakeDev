calcularUtilidad = function (ingresos, gastos) {
  let resultadoUtilidad;
  resultadoUtilidad = ingresos - gastos;
  return resultadoUtilidad;
};

ejecutarUtilidad = function () {
  let cmpIngresos;
  let ingresos;
  let ingresosEntero;
  let cmpGastos;
  let gastos;
  let gastosEntero;
  let utilidad;
  let cmpUtilidad;
  cmpIngresos = document.getElementById("txtIngresos");
  ingresos = cmpIngresos.value;
  ingresosEntero = parseInt(ingresos);

  cmpGastos = document.getElementById("txtGastos");
  gastos = cmpGastos.value;
  gastosEntero = parseInt(gastos);

  utilidad = calcularUtilidad(ingresosEntero, gastosEntero);

  cmpUtilidad = document.getElementById("lblUtilidad");
  cmpUtilidad.innerText = utilidad;
};

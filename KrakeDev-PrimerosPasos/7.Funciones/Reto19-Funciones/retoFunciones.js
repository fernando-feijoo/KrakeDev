sumar = function (num1, num2, num3) {
  let suma;
  suma = num1 + num2 + num3;
  return suma;
};

obtenerInfo = function (nombre, apellido, profesion) {
  let resultado;
  resultado = nombre + " " + apellido + " - " + profesion;
  return resultado;
};

mostrarResultado = function (sumando1, sumando2, resultado) {
  console.log(
    "El resultado de sumar " + sumando1 + " + " + sumando2 + " es " + resultado
  );
};

hackearNasaEnPelicula = function () {
  console.log("Hackeando nasa 0%");
  console.log("Hackeando nasa 20%");
  console.log("Hackeando nasa 40%");
  console.log("Hackeando nasa 60%");
  console.log("Hackeando nasa 80%");
  console.log("Hackeando nasa 90%");
  console.log("Hackeando nasa 99%");
  console.log("La nasa ha sido hackeada");
};

calcularEdad = function (anio) {
  let anioActual;
  let resultado;
  anioActual = new Date().getFullYear();
  resultado = anioActual - anio;
  return resultado;
};

calcularIVA = function (precioSinIva) {
  let calculo;
  calculo = precioSinIva * 1.12;
  return calculo;
};

repasar = function () {
  console.log(
    "Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada"
  );
};

repasarMas = function () {
  return "En este punto debemos estar super claros en crear funciones";
};

llamarAtencion = function (nombre, mensaje) {
  let alerta;
  alerta = nombre + " " + mensaje + " !!";
  alert(nombre + " " + mensaje + " !!");
  return alerta;
};

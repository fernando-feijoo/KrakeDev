// Declarar la variable puntaje
let puntaje;
puntaje = 0;

iniciar = function () {
  console.log("Llamando a la función.");
  puntaje = 0;
  console.log("El valor ha sido cambiado.");
};

cambiar = function () {
  puntaje = 1000;
};

mostrar = function () {
  alert("El puntaje es: " + puntaje);
};

incrementarUno = function () {
  puntaje = puntaje + 1;
};

decrementarUno = function () {
  puntaje = puntaje - 1;
};

incrementarDiez = function () {
  puntaje = puntaje + 10;
};

decrementarDiez= function () {
  puntaje = puntaje - 10;
};

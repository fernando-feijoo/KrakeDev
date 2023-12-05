// Declarar la variable puntaje
let puntaje;
puntaje = 0;

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

// Declarar la variable puntaje
let puntaje;

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

probarFunciones = function () {
  saludar();
  saludarPersona("Fernando");
  saludarJugador("Fernando", "SrF4");
};

probarSaludarPersona = function () {
  let cmpNombre;
  let nombre;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;

  saludarPersona(nombre);
};

probarSaludarJugador = function () {
  let cmpNombre;
  let nombre;
  let cmpApodo;
  let apodo;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;
  cmpApodo = document.getElementById("txtApodo");
  apodo = cmpApodo.value;

  saludarJugador(nombre, apodo);
};

saludar = function () {
  console.log("Hola ");
};

saludarPersona = function (nombre) {
  console.log("Hola " + nombre);
};

saludarJugador = function (nombre, alias) {
  console.log("Hola " + nombre + ", " + alias);
};

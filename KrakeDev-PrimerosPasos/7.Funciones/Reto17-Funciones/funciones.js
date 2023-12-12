testSaludarAmigo  = function () {
  let cmpNombre;
  let nombre;
  let cmpApellido;
  let apellido;
  let cmpApodo;
  let apodo;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;
  cmpApellido = document.getElementById("txtApellido");
  apellido = cmpApellido.value;
  cmpApodo = document.getElementById("txtApodo");
  apodo = cmpApodo.value;

  saludarAmigo(nombre, apellido, apodo);
};

saludarAmigo = function (nombre, apellido, apodo) {
  console.log("Hola " + nombre + " " + apellido + " " + apodo);
};

// La correccion fue cambiar el src por la propiedad de texto innerText, ademas del nombre de variable en la parte inferior al correcto que es cmpMensaje.
cambiarFeliz=function(){
    let cmpMensaje;
    cmpMensaje=document.getElementById("txtEmoji");
    cmpMensaje.innerText="FELIZ";
}

cambiarCansado=function(){
    let cmpMensaje;
    cmpMensaje=document.getElementById("txtEmoji");
    cmpMensaje.innerText="CANSADO";
}
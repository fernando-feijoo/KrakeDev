cambiarFeliz=function(){
    // La correccion fue modificar el nombre de Element porque estaba en minuscula y el nombre de id de imgEmoji.
    let cmpImagen;
    cmpImagen=document.getElementById("imgEmoji");
    cmpImagen.src="feliz.jpg";
}

cambiarCansado=function(){
    let cmpImagen;
    cmpImagen=document.getElementById("imgEmoji");
    cmpImagen.src="cansado.png";
}
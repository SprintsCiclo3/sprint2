console.log("aaaaaaaaaaaaaaaaaaaaaa");

function validar_nombre_usuario(string){

}

function validar_edad_usuario(edad){
    if (Number.isInteger(edad) && edad>=13 && edad<110){
        return "verdadero";
    }else{
        return "falso";
    }
}


// =========== Validar Contraseña ===========

function validar_contraseña(string){
    // var contraseña = document.getElementById("dato_contrasena").value;

    var caracteres = /^[a-z0-9]+$/i;
    var validar = caracteres.test(string);

    if (!validar){
        alert("solo se permiten caracteres alfanumericos");
        return validar;
    }
    else if (string.length > 6 ){
        alert("solo se permiten maximo 6 caracteres");
        return !validar;
    }
    else{
        alert("contraseña correcta");
        return validar;
    }
 
}

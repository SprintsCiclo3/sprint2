function validar_nombre_usuario(string){

    let caracteresUsuario = /^[a-zA-Z\s]+$/;

    if (!caracteresUsuario.test(string)){
        alert("el usuarios solo puede contener letras de la A a la Z");
        return false
    }

    if (string != string.trim()) {
        alert("el usuario no debe incluir espacios al comienzo ni final");
        return false;
    }
    
    if (string != capitalize(string)) {
        alert("Usuario debe ingresar en modo capital");
        return false;
    }

    alert("ingreso usuario correcto");
        return true;

    function capitalize(string) {
    return string.split(" ").map((item) => 
    item.charAt(0).toUpperCase() 
    + item.substring(1).toLowerCase()).join(" ");
}
}

function validar_edad_usuario(edad){
    if (Number.isInteger(edad) && edad>=13 && edad<110){
        return true;
    }else{
        return false;
    }
}

// =========== Validar Contraseña ===========

function validar_contrasena(string){
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

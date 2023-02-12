function validarNombre(nombre) {
    var patron = /^[a-zA-Z]+$/;

    return patron.test(nombre);
}

function validarEmail(email) {
    var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return patron.test(email);
}

function esCampoVacio(str){
    return str === null || str.match(/^ *$/) !== null;
}

function esCampoCorrecto(campo, correcto, mensaje = ""){
    if (correcto){
        document.getElementById(campo).style.borderColor = "limegreen";
        document.getElementById(campo).style.background = "url('images/success-icon.svg') no-repeat right";
        document.getElementById(campo).style.backgroundPosition = "right 10px top 50%";
        document.getElementById(campo).style.backgroundColor = "white";
        document.getElementById("error_" + campo).textContent = "";
    } else {
        document.getElementById(campo).style.borderColor = "red";
        document.getElementById("error_" + campo).textContent = mensaje;
        document.getElementById(campo).style.background = "url('images/error-icon.svg') no-repeat";
        document.getElementById(campo).style.backgroundPosition = "right 10px top 50%";
        document.getElementById(campo).style.backgroundColor = "white";
    }
}


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;
    var confirmaClave = document.getElementById("confirma_clave").value;

    var valido = true;

    // Validamos el nombre: comprobamos que no lleve solo espacios en blanco o este vacío
    if (!esCampoVacio(nombre)){
        // Comprobamos que no lleve carácteres numéricos
        if (!validarNombre(nombre)) {
            valido = false;
            esCampoCorrecto("nombre", false, "El nombre contiene caracteres númericos");
        } else {
            esCampoCorrecto("nombre", true);
        }
    } else {
        esCampoCorrecto("nombre", false, "Rellene este campo");
        valido = false;
    }


    if (!esCampoVacio(email)){
        // Válidamos el email con el pattern de w3resource
        if (!validarEmail(email)) {
            valido = false;
            esCampoCorrecto("email", false, "El email es incorrecto");
        } else {
            esCampoCorrecto("email", true);
        }
    } else {
        esCampoCorrecto("email", false, "Rellene este campo");
        valido = false;
    }

    if (!esCampoVacio(clave)){
        // Válidamos el email con el pattern de w3resource
        if (clave.length < 8){
            valido = false;
            esCampoCorrecto("clave", false, "La clave debe tener al menos 8 caracteres");
        } else {
            esCampoCorrecto("clave", true);
        }
    } else {
        esCampoCorrecto("clave", false, "Rellene este campo");
        valido = false;
    }

    if (!esCampoVacio(confirmaClave)){
        // Válidamos el email con el pattern de w3resource
        if (confirmaClave.length < 8){
            valido = false;
            esCampoCorrecto("confirma_clave", false, "La clave confirmada debe tener al menos 8 caracteres");
        } else {
            esCampoCorrecto("confirma_clave", true);
        }
    } else {
        esCampoCorrecto("confirma_clave", false, "Rellene este campo");
        valido = false;
    }

    if(clave != confirmaClave){
        esCampoCorrecto("confirma_clave", false, "Las claves no coinciden");
        valido = false;
    }

    if(valido){
        alert("La inscripción ha sido correcta.");
    }
}

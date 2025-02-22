/*
/* JS Para la comprobación de datos del formulario de entrada
* 
*/

//Inizializacion de var, objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

//Funciones de evento
function comprobarForm(event) {
    //Comprobar cambios
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo de nick no puede comenzar por un número";
        return false;
    }else if (tamanoInput.value=="0") {
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="Debe seleecionar un tamaño de panel";
        return false;        
    }
    return true;
}

//Inicio carga de eventos
formEntrada.addEventListener('submit',comprobarForm);

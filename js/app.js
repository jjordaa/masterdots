/*
/* JS Para la comprobación de datos del formulario de entrada
* 
*/

//Inizializacion de var, objetos, DOM
const nickInput=document.getElementById("nick");    //Obtenemos el input del nick
const tamanoInput=document.getElementById("tamano");    //Obtenemos el input del tamaño del panel
const formEntrada=document.getElementById("formEntrada");   //Obtenemos el formulario de entrada
const error=document.getElementById("error");   //Obtenemos el div de error

//Comprobar si hay algún error de juego
if (sessionStorage.getItem('error')!=null) {  //Si hay un error
    error.innerText=sessionStorage.getItem('error');    //Mostramos
    sessionStorage.removeItem('error'); 
}

//Funciones de evento
function comprobarForm(event) { //Función para comprobar los datos del formulario de entrada
    //Comprobar cambios
    if (nickInput.value.match(/(?<!\S)[0-9]/)) { //Comprobamos si el nick comienza por un número
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
    //Comprobación correcta
    datosUsuario(nickInput); //Guardamos el nick en el sessionStorage
    return true;
}

//Inicio carga de eventos
formEntrada.addEventListener('submit',comprobarForm); //Evento para comprobar los datos del formulario de entrada

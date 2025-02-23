/*
* JS Para la gestión de los datos de usuario
*
*/

function datosUsuario(nick){                //Función para guardar el nick en el sessionStorage
    sessionStorage.setItem('nick',nick.value);
}

function getDatosUsuario(){                 //Función para obtener el nick del sessionStorage
    let nick = sessionStorage.getItem('nick');
    console.log(nick);    
}
//Funcion para comprobar de los datos de usuario no está vacio antes de ir a jugar 
function comprobacionDatosUsuario(){
    let nick = getDatosUsuario();
    if (nick==null) {
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;        
        } 
    return true;    
}
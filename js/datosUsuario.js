/*
* JS Para la gestión de los datos de usuario
*
*/

function datosUsuario(nick){                //Función para guardar el nick en el sessionStorage
    sessionStorage.setItem('nick',nick.value);
}

function mostrarDatosUsuario(){                 //Función para mostrar el nick guardado en el sessionStorage
    let nick = sessionStorage.getItem('nick');
    console.log(nick);    
}
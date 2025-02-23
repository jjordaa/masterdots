/*
* JS Para el juego Masterdots
*
*/

//CApturamos datos de usuario
getDatosUsuario(); //Obtenemos el nick del usuario
//Comprobamos los datos
if (!comprobacionDatosUsuario())  //Si no hay datos de usuario volvemos a la página de entrada
    location="index.html";

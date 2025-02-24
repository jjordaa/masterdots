/*
* JS Para la gestión de los datos de usuario
*
*/
var nick;
var tamano = "";
var email = "";
var geolocalizacionTxt;

//sessionStorage
function datosUsuario(nick,tamano,email){
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('tamano',tamano.value);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('geolocalizacionTxt',geolocalizacionTxt);
}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    tamano = sessionStorage.getItem('tamano');
    email = sessionStorage.getItem('email');
    console.log(nick);
}
function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}
//Funcion de localozacion
function datoGeolocalizacion(){
    if (!navigator.geolocation){
        geolocalizacionTxt = 'Geolocalización no soportada por el navegador';
    }else{
        navigator.geolocation.getCurrentPosition(
            //Éxito
            (position)=>{geolocalizacionTxt = 'Latitud: '+position.coords.latitude+'<br>Longitud: '+position.coords.longitude+''},
            //Error
            ()=>{geolocalizacionTxt = "No se ha podido obtener la geolocalización";}
        )
    }
}

//localStorage
function historicoUsuarios(nick){
    let historicoStorage=localStorage.getItem('historico');
    let historico;
    if(historicoStorage==null){
        historico=[];
    }else{
        historico=JSON.parse(historicoStorage);
    }
        
    let registroUsuario = {
        usuario:nick.value,
        fecha: new Date().toISOString()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico',JSON.stringify(historico));
}
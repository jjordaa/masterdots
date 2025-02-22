/*
/* JS Para la comprobación de datos del formulario de entrada
* 
*/

//Capturar el valor del input nick
const nickInput=document.getElementById('nick');
console.log(nickInput.value);
nickInput.value="Jorge";
const emailInput=document.getElementById('email');
//Capturar el valor del select
const tamanotInput=document.getElementById('tamano');
console.log(tamanotInput.value);
console.log(tamanotInput.options[tamanotInput.selectedIndex].text);
for (const option of tamanotInput.options) {
    if (option.text==="5x5") {
        console.log(option.value);
    }else{
        console.log("Que te den")
    }
}
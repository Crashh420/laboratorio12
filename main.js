
function sumarNumeros(){
    const entrada = document.getElementById('promedio').value;
    const numeros = entrada.split(',').map(num => parseFloat(num.trim()));
let i = 0, suma = 0;
for(i=0; i<numeros.length; i++){
    if(!isNaN(numeros[i])) {
        suma = suma + numeros[i];
    }
}
const promedio = suma / numeros.length;
document.getElementById('salidaPromedio').innerText = `Suma total: ${suma.toFixed(1)}, Promedio: ${promedio.toFixed(1)}`;


}
function ingresarNumeros(){
    let numeroIngresado = [];
    let suma = 0;
    let numero =1;
    while(numero>=0){
        numero=parseInt(prompt("ingrese un numero (si es negativo se saldra)"));
        if(numero<0){
            continue
             }
             suma = suma + numero;
    }
        document.getElementById('salidaNumeros').innerText=`la suma fue: ${suma}`;
}
function validarContrasena(){
    let contraS = "Aa201MA", contra, cont = 0;
        do{
            contra = prompt("Ingrese la contraseña: ")
            cont++;
        }while(contraS != contra);
        document.getElementById('salidaContrasena').innerText=`Contraseña Correcta: ${contraS}\nIntentos: ${cont}`;

    }
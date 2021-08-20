'use strict';
const button = document.querySelector('.button');
// si lo pones así, lo único que la hacer en consolelog de saludo te sale también el párrafo
// button.addEventListener('click', function saludo (){
//     const saludo = document.querySelector('.parrafo');
//     saludo.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
//     return saludo;
// } );
// Si lo pones así, consolelog de saludo final te saca solo el innet HTML (sin el parrafo como en el caso anterior)
button.addEventListener('click', function saludo (){
    const saludo = document.querySelector('.parrafo');
    saludo.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
    const saludofinal = saludo.innerHTML;
    console.log(saludofinal)
    return saludofinal;
} );

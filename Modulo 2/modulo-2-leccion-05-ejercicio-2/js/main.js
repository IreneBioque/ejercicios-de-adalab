'use strict';
const myName = document.querySelector('.js_name');
const button = document.querySelector('.js_button');
button.addEventListener('click', function printName (){
console.log( `Hola ${myName.value} :)`)
})

'use strict';

const button = document.querySelectorAll('.js_button');
const div = document.querySelector ('.js_body');
function change (){
    div.classList.add('alarm');
};
// No funciona porque dice que no es una funcion
button.addEventListener('click', change);
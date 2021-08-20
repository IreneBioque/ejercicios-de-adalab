'use strict';

const button = document.querySelector('.js_button');
function listen(event){
    button.innerHTML;
    console.log(event);
}
button.addEventListener('click', listen);

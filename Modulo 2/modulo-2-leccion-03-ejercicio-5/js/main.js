'use strict'
const notification = document.querySelector('.js_div');
const message = document.querySelector('.js_p');
const title = document.querySelector('.js_title');

function change(){
if (notification.classList.contains('success')) {
    message.innerHTML = 'Los datos son correctos';
    title.innerHTML = 'CORRECTO'
    
} else if (notification.classList.contains('warning')) {
    message.innerHTML = 'Tenga cuidado';
    title.innerHTML = 'AVISO'
} else if (notification.classList.contains('error')) {
    message.innerHTML = 'Ha surgido un error';
    title.innerHTML = 'ERROR'
};
}
change();
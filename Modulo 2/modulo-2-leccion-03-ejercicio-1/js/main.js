'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';



// userAvatar = '';
let user = document.querySelector('.user__avatar');
const newAvatar = userAvatar || DEFAULT_AVATAR; 
// user.innerHTML += `<img src="${newAvatar}" alt="profile image" class="user__avatar " />`; No se puede poner esto porque estoy añadiendo una etiqueta img dentro de otra img, por eso hay que poner el src.
user.src =  newAvatar; 
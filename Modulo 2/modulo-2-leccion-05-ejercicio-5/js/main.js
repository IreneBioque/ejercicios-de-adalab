'use strict';
const body = document.querySelector('.js_body');

function press (event){
 if (event.keyCode === 78){
body.classList.add ('red');
} else if (event.keyCode === 77) {
  body.classList.add ('purple');
} else 
console.log('Hi')
 return

};

body.addEventListener('keydown', press);
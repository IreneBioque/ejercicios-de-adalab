'use strict';

function getEl(selector) {
    const const1 = document.querySelector(selector);
    return const1;
}
const title = getEl('.js_h1');
console.log(title);
if (title === null){
    console.error('No existe ningún elemento con clase, id o tag llamado {.js_h1}');
} else 
console.log ('Hay un elemento llamado title');

const div = getEl ('.js_div');
console.log(div);
const parrafo = getEl ('.parrafo');
console.log(parrafo);

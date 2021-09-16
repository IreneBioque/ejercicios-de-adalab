'use strict'
// const items = document.querySelector('.ul');
// const numbers = [1, 2, 3];
// const longitud = numbers.length;
// console.log(longitud);
// console.log(numbers);
// let newItem = document.createElement('li');

// function handleList() {
//     for (let number = 0; number < longitud; number++) {
//       const newContent = document.createTextNode(numbers[number]);
//       newItem.appendChild(newContent);
//       items.appendChild(newItem);
//     }

//  return items

// }

// handleList();


const items = document.querySelector('.ul');
const numbers = [1, 2, 3];
const longitud = numbers.length;
console.log(longitud);
console.log(numbers);

for (const number of numbers){
let newItem = document.createElement('li');
const newContent = document.createTextNode(number);
newItem.appendChild(newContent);
items.appendChild(newItem);
}

// repaso entrevista

for (const number of numbers){
    // creo el li
    let newItem = document.createElement('li');
    // le añado una clase
    newItem.classList.add('liclass');
    // añado id a todos los li
    newItem.id = 'Hola';
    // creo una img
    let newImage = document.createElement('img');
    // la pongo dentro del li
    newItem.appendChild(newImage);
    // contenido del li
    const newContent = document.createTextNode(number);
    // se lo añado al li
    newItem.appendChild(newContent);
    // añado el li al ul
    items.appendChild(newItem);
    }

// Me crea repetidos los Li por el bucle for

// for (const number of numbers){
// let newItem = document.createElement('li');
// const newContent = document.createTextNode(number);
// newItem.appendChild(newContent);
// items.appendChild(newItem);
// newItem = document.createElement('li');
// const newContent2 = document.createTextNode(number);
// newItem.appendChild(newContent2);
// items.appendChild(newItem);
// newItem = document.createElement('li');
// const newContent3 = document.createTextNode(number);
// newItem.appendChild(newContent3);
// items.appendChild(newItem)}




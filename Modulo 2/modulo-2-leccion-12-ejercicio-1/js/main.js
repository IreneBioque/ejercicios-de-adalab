'use strict'

const numbers = [1, 2, 3];
const longitud = numbers.length;
console.log(longitud);
const newItem = document.createElement('li');
const newContent = document.createTextNode(numbers[0]);


newItem.appendChild(newContent);

const items = document.querySelector('.ul');
items.appendChild(newItem);



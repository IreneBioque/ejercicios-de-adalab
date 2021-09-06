'use strict'
const items = document.querySelector('.ul');
const numbers = [1, 2, 3];
const longitud = numbers.length;
console.log(longitud);
console.log(numbers);
const newItem = document.createElement('li');

function handleList() {
    for (let number = 0; number < longitud; number++) {
      const newContent = document.createTextNode(numbers[number]);
        newItem.appendChild(newContent);
    }
    items.appendChild(newItem);
}

handleList();









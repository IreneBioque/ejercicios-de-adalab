'use strict'

const button = document.querySelector('.button')

const arrayNumbers = [];

function get100Numbers() {
    for (let number = 0; number < 100; number++) {
        arrayNumbers.push(number);
    }

};

get100Numbers();

console.log(arrayNumbers);

arrayNumbers.reverse();

console.log(arrayNumbers);
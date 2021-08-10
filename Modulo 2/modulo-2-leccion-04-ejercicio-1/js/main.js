'use strict';

function multiply(a,b) {

    return a * b;
}

const multiplyResult = multiply(4,5);
const result = document.querySelector('.js_h1')
result.innerHTML = multiplyResult;
console.log(multiplyResult);

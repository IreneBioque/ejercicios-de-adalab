'use strict';

function price (precio, IVA){
    const taskIVA = 0.21;
    return (`Precio sin IVA: ${precio}, IVA: ${IVA * taskIVA} y Total ${precio + IVA * taskIVA}`)
}

const totalPrice = price(5,4);
const paintPrice = document.querySelector('.js_h1')
paintPrice.innerHTML = totalPrice;
console.log(totalPrice);
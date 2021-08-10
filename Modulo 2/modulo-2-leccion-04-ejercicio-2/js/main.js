'use strict';

function media(a,b,c,d){
    return (a + b + c + d)/4;
}
const mediaResult = media(5,5,5,5);
const result = document.querySelector('.js_h1')
result.innerHTML = mediaResult;
console.log(mediaResult);

// function media(a,b,c,d) {

//     return (a/2) + (b/2) + (c/2) + (d/2) ;
// }

// const mediaResult = media(1,1,1,1);
// const result = document.querySelector('.js_h1')
// result.innerHTML = mediaResult;
// console.log(mediaResult);
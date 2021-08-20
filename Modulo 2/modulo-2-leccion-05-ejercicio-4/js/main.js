'use strict';
const div = document.querySelector('.js_div');

// function scroll (){
//   if (window.scrollY > 250){
//     div.classList.add('tablet')
//   }
//   else {
//     div.classList.add('mobile')
//   }
// };

div.addEventListener('scroll', function scroll (){
  if (window.scrollY > 250){
    div.classList.add('tablet')
  }
  else {
    div.classList.add('mobile')
  }
  return console.log('Hi')
});
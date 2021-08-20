'use strict';
 const parrafo = document.querySelector('.parrafo');
 const adalaber1 = {
   nameAda:  'Susana',
   age: ' 31 años',
   job: ' periodista',
 };
 const adalaber2 = {
   nameAda:  ' Rocio',
   age: ' 25 años',
   job: ' actriz',
 };
 function showBio (text, text2, text3){
   const parrafo = `<p>Hola soy ${text} tengo ${text2} y trabajo como ${text3}</p>`;
   return parrafo;
 }
 const nombre1 = showBio(adalaber1.nameAda, adalaber1.age, adalaber1.job);
 const nombre2 =showBio(adalaber2.nameAda, adalaber2.age, adalaber2.job)
 parrafo.innerHTML = nombre1 + nombre2;



// const adalaber1 = {}
// adalaber1.nameAda=  ' Susana',
// adalaber1.age = ' 31 años',
// adalaber1.job =' periodista';
// adalaber1.sayHello = function() {
//   return 'Hola, me llamo' + this.nameAda + ' tengo' + this.age + ' trabajo como' + this.job;
// }

// console.log (adalaber1.sayHello());

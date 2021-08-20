'use strict';

const adalaber1 = {
  nameAda:  'Susana',
  age: ' 31 años',
  job: ' Periodista',
};
const adalaber2 = {
  nameAda:  ' Rocio',
  age: ' 25 años',
  job: ' Actriz',
};
function printName (text){
  const parrafo = document.querySelector('.parrafo');
  parrafo.innerHTML = text;
}
printName(adalaber1.nameAda + adalaber1.age + adalaber1.job);
// printName(adalaber2.nameAda + adalaber2.age + adalaber2.job);



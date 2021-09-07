'use strict'

const marks = [5, 4, 6, 7, 9];
const sumaNotas = marks.map(mark => mark + 1);

console.log(sumaNotas);

const sumaNotasAdalaber = mark => mark + 1;
const sumaTotal = marks.map(sumaNotasAdalaber);
console.log(sumaTotal);
'use strict'

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 }
];
console.log(runners)
const ganador = runners.reduce((acc, number) => acc.time = number);
console.log(ganador);



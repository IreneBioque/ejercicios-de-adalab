'use strict'

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

const validacion = users.map(user => user.isPremium);
const names = users.map(user => user.name)


// debugger;
// for (const valida of validacion) {
//   for (const name of names) {
//     if (valida === true) {
//       console.log(`Hola ${name}. Gracias por tu apoyo`)
//     } else {
//       console.log(`Hola ${name}`)
//     }
//   }
// }

console.log(validacion)
console.log(names);
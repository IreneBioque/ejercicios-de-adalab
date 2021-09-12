'use strict'

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

console.log(users)

//Para poder usar un if , usar función anónima, no una arrow

const validacion = users.map(function (valida) {
   if (valida.isPremium === true) {
      console.log(`Hola ${valida.name}. Gracias por tu apoyo`)
    } else {
      console.log(`Hola ${valida.name}`)
}
});




   
    
console.log(validacion)

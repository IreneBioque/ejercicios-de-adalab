'use strict';
const parrafo = document.querySelector('.parrafo');

const parrafoNuevo = document.querySelector('.parrafo2');

parrafo.addEventListener('mouseover', function addParrafo(){
  parrafoNuevo.classList.remove('hidden');
});
parrafo.addEventListener('mouseout', function deleteParrafo (){
    parrafoNuevo.classList.add('hidden');
});

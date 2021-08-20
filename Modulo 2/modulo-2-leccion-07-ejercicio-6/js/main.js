'use strict';

const pelicula1 = document.querySelector ('.js_input');
const pelicula2 = document.querySelector ('.js_input2');
const button = document.querySelector ('.button');
const result = document.querySelector ('.result');
const favouriteMovie = [pelicula1, pelicula2];
function printName() {
    for (const movie of favouriteMovie){
        result.innerHTML +=(`¡A mi tambien me encanto ${movie.value}! Tenemos mucho en común humana`)
        console.log(`¡A mi tambien me encanto ${movie.value}! Tenemos mucho en común humana`)
    }
};
button.addEventListener('click', printName);
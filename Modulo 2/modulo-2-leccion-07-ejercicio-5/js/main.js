'use strict';

const numbers = [5, 5, 5, 5, 5,5 ];

function media (){
    let media = 0;
    for (let i= 0; i< numbers.length; i++){
        media += numbers[i];}
        return console.log('La media es ' + media / 6);
};
media ();
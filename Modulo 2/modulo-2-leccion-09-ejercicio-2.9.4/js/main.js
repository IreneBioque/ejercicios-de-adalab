'use strict';

const main = document.querySelector('.js-main');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];


function renderTask() {
  main.innerHTML = '';
  for( const data of tasks ) {
  if( data.completed ) {
    const html = `<li class="completed">${data.name}</li><input type="checkbox" class="js-check">`;
    main.innerHTML += html;
  }
  else {
    const html = `<li>${data.name}</li><input type="checkbox" class="js-check">`;
    main.innerHTML += html;
  }
 
  }
  const button = document.querySelectorAll(".js-check");
  console.log(button);

}

renderTask();

function checked() {
  tasks.completed = true;
  renderTask();

};


button.addEventListener('change', checked());
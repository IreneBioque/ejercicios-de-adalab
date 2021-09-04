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
    const html = `<li ><input checked type="checkbox" class="js-check"><label class="completed">${data.name}</label></li>`;
    main.innerHTML += html;
  }
  else {
    const html = `<li><input type="checkbox" class="js-check"><label>${data.name}</label></li>`;
    main.innerHTML += html;
  }
 
  }
  const inputs = document.querySelectorAll(".js-check");
  for (const input of inputs) {
      input.addEventListener('change', handleChecked());
  }

}

function handleChecked(ev) {
  const labelSister = ev.target.parentNode.querySelector('label');
  labelSister.classList.toggle('completed');

};



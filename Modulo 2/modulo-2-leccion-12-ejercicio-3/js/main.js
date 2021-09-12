'use strict'
const options = document.querySelectorAll('.option');
const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastname');
const inputPhone = document.querySelector('#phone');
const select = document.querySelector('.js_select')
console.log(options[0].value)

const datos = [
   {
      name: 'María',
      lastname: 'Gonzalez',
      phone: '555555555',
  },
   {
      name: 'Irene',
      lastname: 'Perez',
      phone: '666666666',
  },
    {
      name: 'Pepa',
      lastname: 'Martinez',
      phone: '777777777',
    },
]
console.log(datos[0].name);
const longitud = datos.length;
console.log(longitud)

function handleForm() {
  debugger;
  for (const option of options) {
  for (let number = 0; number < longitud; number++){
  if (option.value === 'Maria') {
  inputName.value = datos[number].name;
  inputLastName.value = datos[number].lastname;
  inputPhone.value = datos[number].phone;
} else if (option.value === 'Irene') {
  inputName.value = datos[number].name;
  inputLastName.value = datos[number].lastname;
  inputPhone.value = datos[number].phone;
} else if (option.value === 'Pepa') {
  inputName.value = datos[number].name;
  inputLastName.value = datos[number].lastname;
  inputPhone.value = datos[number].phone;
} else {
  inputName.value = '';
  inputLastName.value = '';
  inputPhone.value = '';
}

    }
    }
}
select.addEventListener('change', handleForm);


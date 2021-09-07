'use strict'
const select = document.querySelector('.js_select');
const image = document.querySelector('.js_div');
const options = document.querySelectorAll('.js_option');
// console.log(options.value)
// function handleImage() {
//   // for (option of options){
//   if (options.value === 'Madrid') {
//     image1.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
//     image2.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
//     image3.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
//   } else if (options.value === 'Paris') {
//     image1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
//     image2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
//     image3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
//   } else if (options.value === 'NuevaYork') {
//     image1.src = 'https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/times-square-grid-m.jpg'
//     image2.src = 'https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/times-square-grid-m.jpg'
//     image3.src = 'https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/times-square-grid-m.jpg'
//   } else {
//      image1.src = 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'
//     image2.src = 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'
//     image3.src = 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'
//   }
// //  }
// }

// handleImage();

const ciudades = [
  { name: 'Madrid',  src: ' https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg',  number: ' 1' },
  { name: 'Paris',   src: ' https://cdn2.civitatis.com/estados-unidos/nueva-york/guia/times-square-grid-m.jpg',  number: ' 2' },
  { name: 'NewYork',src: ' https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg', number: ' 3'},
  
];
for (const option of ciudades) {
  let newOption = document.createElement('option');
  newOption.value = option.number;
  const contentOption = document.createTextNode(option.name);
  newOption.appendChild(contentOption);
  select.appendChild(newOption);
}
function handleSelect(){

}

select.addEventListener('change', handleSelect())

console.log(ciudades)

 for (const ciudad of ciudades){
 // Imagen 1
  let newImage = document.createElement('img');
  newImage.src = ciudad.src;
  newImage.alt = ciudad.name;
  image.appendChild(newImage);

// // // Imagen 2
//    newImage = document.createElement('img');
//    newImage.src = ciudades[1].src;
//    newImage.alt = ciudades[1].name;
//    image.appendChild(newImage);
  
//  // Imagen 3
//    newImage = document.createElement('img');
//    newImage.src = ciudades[2].src;
//    newImage.alt = ciudades[2].name;
//    image.appendChild(newImage);
 }
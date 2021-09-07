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

 // Imagen 1
  let newImage = document.createElement('img');
  newImage.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
  newImage.alt = 'Madrid'
  image.appendChild(newImage);

// Imagen 2
  newImage = document.createElement('img');
  newImage.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
  newImage.alt = 'Madrid'
  image.appendChild(newImage);
  
// Imagen 3
  newImage = document.createElement('img');
  newImage.src = 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg'
  newImage.alt = 'Madrid'
  image.appendChild(newImage);
const button = document.querySelector('.js_button')
const paragraph = document.querySelector('.js_paragraph');
const img = document.querySelector('.js_img');

 function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 }
    
 function getPerretes() {
   fetch('https://dog.ceo/api/breeds/list')
     .then(breedsResponse => breedsResponse.json())
     .then(breedsData => {
       let randomNumber = getRandomNumber(50);
        console.log(randomNumber);
       const breeds = breedsData.message;
       return fetch('https://dog.ceo/api/breed/' + breeds[randomNumber] + '/images/random');
     })
     .then(imageResponse => imageResponse.json())
     .then(imageData => {
       img.src = imageData.message;
       img.alt = 'Un perrete';
   })
 }

button.addEventListener('click', getPerretes);





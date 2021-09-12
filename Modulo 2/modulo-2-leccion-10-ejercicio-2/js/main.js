
function getDogImage() {
  fetch("https://dog.ceo/api/breed/chow/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector(".js_img1");
      img.src = data.message;
      img.alt = "Un perro";
    });
   fetch("https://dog.ceo/api/breed/chow/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector(".js_img2");
      img.src = data.message;
      img.alt = "Otro perro";
    });
  
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);


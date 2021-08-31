'use estrict';
// Estas constantes son globales, por lo que la cogen todas las funciones, por lo que tienen que tener nombres distintos

const update = document.querySelector(".js_button");
const container = document.querySelector(".container");
const selectElement = document.querySelector(".js_select");
const faceElement = document.querySelector(".js_face");

// Codigo sin mejorar

// function updateBackground() {
//     const randomNumber = Math.round(Math.random() * 100) ;
//     console.log(randomNumber);
//      const restNumber = randomNumber % 2;
//     if (restNumber === 0) {
//         container.classList.add("background-Y");
//         container.classList.remove("background-X");
//     }
//     else {
//         container.classList.add("background-X");
//         container.classList.remove("background-Y");
//     }
// };

// Codigo mejorado

function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
};

function updateBackground() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
     const restNumber = randomNumber % 2;
    if (restNumber === 0) {
        container.classList.add("background-Y");
        container.classList.remove("background-X");
    }
    else {
        container.classList.add("background-X");
        container.classList.remove("background-Y");
    }
};

function updateFace() {
    faceElement.innerHTML = selectElement.value;
};

function handleUpdateBtn() {
    updateBackground();
    updateFace();
};

update.addEventListener("click", handleUpdateBtn);
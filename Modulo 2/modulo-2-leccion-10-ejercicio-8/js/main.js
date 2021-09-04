function getNumber() {
  fetch("https://api.rand.fun/number/integer")
    .then(response => response.html())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}

document.querySelector('.js-emoji').addEventListener("click", getNumber);

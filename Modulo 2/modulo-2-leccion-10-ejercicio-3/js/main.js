const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const nameGit = document.querySelector('.js_name');
const photo = document.querySelector('.js_img');
const repo = document.querySelector('.js_repo');



function nameRepository() {
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
      .then(data => {
        photo.src = '';
        nameGit.innetHTML = '';
        repo.innerHTML = '';
        photo.src = data.avatar_url;
        photo.alt = "Foto";
        nameGit.innetHTML += data.name;
        repo.innerHTML += data.public_repos;
    });
}


button.addEventListener('click', nameRepository);
const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const list = document.querySelector('.js_ul');


function nameRepository () {
  fetch(`https://api.github.com/orgs/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const repos = data.repos_url;
      return fetch(`https://api.github.com/orgs/${input.value}/repos`) + repos[0];
    })
      // .then(response => response.json())
      .then(repoData => {
       let ulContent = '';

      for (const repo of repoData) {
        // debugger;
        const reposContent = `<li>${repo.name}</li>`;
        ulContent += reposContent;
      }
      list.innerHTML = ulContent;
    });
    };

button.addEventListener('click', nameRepository);
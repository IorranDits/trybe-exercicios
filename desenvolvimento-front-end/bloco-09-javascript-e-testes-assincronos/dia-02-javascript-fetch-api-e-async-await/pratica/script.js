const fetch = require('node-fetch');

async function getGitHubUser(user){
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  const {login, id, name} = data;
  const usuario = {
    login,
    id,
    name,
  }
  console.log(usuario);
}
getGitHubUser('IorranDits');

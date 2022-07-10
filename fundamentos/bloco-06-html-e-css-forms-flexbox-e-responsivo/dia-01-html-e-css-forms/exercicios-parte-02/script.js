let button = document.getElementById('submit');
let nome = document.getElementById('nome')

function stopInvite(event){
  event.preventDefault();
  console.log(nome.value);
}

// button.addEventListener('click', stopInvite);

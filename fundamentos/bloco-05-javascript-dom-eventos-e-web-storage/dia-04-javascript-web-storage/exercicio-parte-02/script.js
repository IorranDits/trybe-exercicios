
let backgroundColor = 'green';
function background (){
  let body = document.querySelector('body');
  let backgroundButtom = document.getElementsByClassName('button')[0];
  
  backgroundButtom.addEventListener('click', function(){
    body.style.backgroundColor = backgroundColor;
    localStorage.setItem('background', JSON.stringify(backgroundColor)); 
  })
}

background();
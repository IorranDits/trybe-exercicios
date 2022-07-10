//console.log(document.getElementById('elementoOndeVoceEsta'));

elementoPai = document.getElementById('elementoOndeVoceEsta').parentNode;

elementoPai.style.color = 'red';

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

primeiroFilhoDoFilho.innerText = 'Texto no primeiro filho do filho';

//console.log(document.getElementById('pai').firstElementChild);

//console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

//console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

//console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

//console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

let pai = document.getElementById('pai');

let irmao = document.createElement('div');

irmao.innerText = 'Elemento irmão';

pai.appendChild(irmao);



let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let filhoOnde = document.createElement('p');

filhoOnde.innerText = 'Filho do elementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoOnde);


let filhoDoPrimeiro = document.createElement('h2');

 filhoDoPrimeiro.innerText = 'Título do primeiro filho do filho';

 primeiroFilhoDoFilho.appendChild(filhoDoPrimeiro);


 //console.log(document.getElementsByTagName('h2')[0].parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling);

 filhoDoPrimeiro.id = 'filhoDoPrimeiro'; //adiciona id

 pai.removeChild(primeiroFilho);
 pai.removeChild(terceiroFilho);
 pai.removeChild(quartoEUltimoFilho);
 pai.removeChild(irmao);
 


 







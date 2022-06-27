
//Parte 01 - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem-vinda ' + info.personagem);

info.recorrente = 'Sim';

//console.log(info);

for (let chave in info) {
  //console.log(chave);
}

for (let chave in info) {
  //.log(info[chave]);
}

// Exercício 05: 

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
   // console.log('Ambos recorrentes');
  } else {
    //console.log(info[properties] + ' e ' + info2[properties]);
  }
}

//revisar esse exercício acima!!!

//Exercício 06:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

//console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')

// parte 2 - Funções:

//let palavra = 'arara';

function palindromo(palavra) {
  let inverso = palavra.split("").reverse().join("");
  if(palavra === inverso) {
    return true;
  }else {
    return false;
  }
}

//console.log(palindromo('trybe'));

//Exercício 02:

function indiceMaior(numeros) {
  let maior = 0;
  for(let indice in numeros) {
    if (numeros[maior] < numeros[indice]) {
      maior = indice;
    }
  }
  return maior;
}

//console.log(maiorMaior([4, 5, 2, 3, 15, 20, 6]));

function menorIndice(numeros) {
  menor = 0;
  for (let index in numeros){
    if (numeros[menor] > numeros[index]) {
      menor = index;
    }
  }
  return menor;
}

//console.log(menorIndice([20, 30, 4, 40, 50, 30, 10]));

//Exercício 04  -Fazer!

// Exercíco 05

function maisRepete (numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]){
        contNumero += 1;
      }
    }
if (contNumero > contRepetido) {
  contRepetido = contNumero;
  indexNumeroRepetido = index;
}
contNumero = 0;
  }

  return numeros[indexNumeroRepetido];

}
console.log(maisRepete([1,2,3,4,5,6,7,7,8,9,7]));



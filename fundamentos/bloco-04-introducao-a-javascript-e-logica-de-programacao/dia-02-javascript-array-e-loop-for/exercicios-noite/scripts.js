// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let resultado = 0;

for (let index = 1; index <= 50; index+=1){
  resultado += index;
}
//console.log(resultado);


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
let numero = 0;

for (let index = 2;index <= 150;index +=1) {
  if (index % 3 === 0)  {
    numero += 1;
  }
}
  console.log(numero);

// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

if (numero === 50) {
  console.log('Você descobriu nosso segredo!');
} 

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let pessoa1 = 'papel';
let pessoa2 = 'tesoura';

if (pessoa1 === 'papel' && pessoa2 === 'tesoura') {
  console.log('player 2 won')
}else if (pessoa1 === 'tesoura' && pessoa2 === 'tesoura') {
  console.log('A ties');
}else if(pessoa1 === 'pedra' && pessoa2 === 'tesoura') {
  console.log('player 2 won')

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
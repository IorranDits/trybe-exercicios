let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01:
for (let index = 0; index < numbers.length; index += 1){
  //console.log(numbers[index]);
}

// Exercíico 02 : 
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  //console.log(numbers[index]);
  soma += numbers[index];
}
 //console.log(soma);

 //Exercíico 03  e 04:
 let soma1 = 0;
 let mediaArit = 0;
 let count = 0;
 for (let index = 0; index < numbers.length; index += 1){
  soma1 += numbers[index];
  count += 1;
}
mediaArit = soma1 / count;
if (mediaArit > 20) {
 // console.log('Valor maior que 20');
} else {
 // console.log('Valor menor ou igual a 20'); 
}
//console.log(mediaArit);

//exercíico 05 :
let number = 0;
for (let index = 0; index < numbers.length; index += 1){
if (number < numbers[index]){
  number = numbers[index];
}
}
//console.log(number);

//Exercício 06:
let count1 = 0;
for (let index = 0; index < numbers.length; index += 1){
  if((numbers[index] % 2) === 0){
    count1 += 0;
  }else {
    count1 += 1;
  }
}
if (count1 > 0) {
 // console.log(count1);
}else {
  //console.log('nenhum valor ímpar encontrado')
}

//Exercício 07 :
let menor = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
  if (menor > numbers[index]){
    menor = numbers[index];
  }
}
//console.log(menor);

//Exercício 08:
let numeros = [];
for(let contador = 1; contador <= 25; contador += 1){
  numeros.push(contador);
  //console.log(numeros);
}

//Exercício 09:
for(let index = 0; index < numeros.length; index += 1){
  console.log(numeros[index] / 2);
}

// 1- Determinar fatorial de 10:

fatorial = 1;
for (let index = 10; index > 0; index -= 1){
  fatorial = fatorial * index;
}
//console.log(fatorial);

// 2 - Alfgoritmo que inverrta a ordem das palavras:

function reverseString(s) {
  return s.split("").reverse().join("");
}
//console.log(reverseString("iorran"));

//3 - Maior e menor palavras de um Array:
let array = ['java', 'javascript', 'Otorrinolaringologista', 'python', 'html', 'css', 'ab'];
let stringMaior = array[0];
let stringMenor = array[0];

for (let index = 0; index < array.length; index += 1) {
   if (stringMaior.length < array[index].length) {
    stringMaior = array[index];
  }
  if (stringMenor.length > array[index].length) {
    stringMenor = array[index];
  }
}
// console.log('A palavra maior é: ' + stringMaior);
// console.log('A palavra menor é: ' + stringMenor);

// 4 - Retornar o maior primo entre 2 e 50;
let numero = 2;
let primo = true;
let maiorPrimo = 2;

//for (let index = 2; index <= 50; index +=1) {
  for(let index2 = 2; index2 <=50 && primo === true; index2 += 1){
  if (numero % index2 > 0) {
    primo = true;
  }
  if (primo === true) {
    maiorPrimo = numero;
  }
  numero +=1;
  
  }

  //TERMINAR ESSE EXERCICIO!!!!




  


  




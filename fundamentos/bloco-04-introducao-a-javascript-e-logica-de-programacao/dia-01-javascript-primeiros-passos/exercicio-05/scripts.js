
//  1- operadores aritméticos
const a = 4;
const b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2 - Retornar maior de dois números
const num1 = 5;
const num2 = 10;

if (num1 > num2) {
  console.log(num1);

} else {
  console.log(num2);
}

// 3 -Retornar maior de 3 números
const n1 = 30;
const n2 = 25;
const n3 = 10;

if (n1 > n2 && n1 > n3) {
  console.log(n1);

} else if (n2 > n3) {
  console.log(n2);

} else {
  console.log(n3);
}

// 4 - Retornnar se é positivo ou negativo
const number = -5;

if (number < 0) {
  console.log('negative');

} else if (number === 0) {
  console.log('zero');

} else {
  console.log('positive');
}

// 5 - ângulos de um triângulo
const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;
let soma = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {

  if (soma === 180) {
    console.log(true);

  } else {
    console.log(false);
  }
}else {
  console.log('Error');
}

// 6 - Peça de xadrez
let piece = 'peão';

switch (piece.toLocaleLowerCase()) {
  case 'peã':
    console.log('Primeiro movimento: Uma ou duas casa a frente;Próximos movimentos: uma casa a frente; Come peça a uma casa em diagonal a frente.');
    break;
  case 'torre':
    console.log('Movimento horizontal.');
    break;
  case 'bispo':
    console.log('Movimento em diagonal.');
    break
  case 'cavalo':
    console.log('Movimento em "L".');
    break;
  case 'rainha':
    console.log('Movimento em diagonal ou horizontal.');
    break;
  case 'rei':
    console.log('1 casa em qualquer direção.');
    break;
  default:
    console.log('Erro: peça inválida.')
}

// 7 - Notas convertidas
let nota = 100;

if (nota < 0 || nota > 100) {
  console.log('Erro, nota inválida');

}else if (nota < 50) {
  console.log('Conceito F');

}else if (nota < 60) {
  console.log('Conceito E');

}else if (nota < 70) {
  console.log('Conceito D');

}else if (nota < 80) {
  console.log('Conceito C');

}else if (nota < 90) {
  console.log('Conteito B');

}else {
  console.log('Conceito A');

}

// 8 -Verificar se ao menos um número é par
const number1 = 2;
const number2 = 3;
const number3 = 7;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log(true);

}else {
  console.log(false);

}


// 9 - Verificar se ao menor um número é impar 
const numb1 = 300;
const numb2 = 3;
const numb3 = 8;

if (numb1 % 2 === 0 && numb2 % 2 === 0 && numb3 % 2 === 0) {
  console.log(false);

}else {
  console.log(true);

}

// 10 - Custo e valor de venda
const custo = 300;
const venda = 150;

const custoTotal = custo + (custo * 0.2);
const lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
  console.log("Erro: valor inválido");
  
}else {
  console.log(lucro);
}

// 11 - Descontos do salário
const salario = 3000; // Salário Bruto
let inss; // Alícota do INSS

if (salario <= 1556.94) {
  inss = (salario * 0.08);

}else if (salario <= 2594.92) {
  inss = (salario * 0.09);

}else if (salario <= 5189.82) {
  inss = (salario * 0.11);

}else {
  inss = 570.88;

}

let salarioBase = salario - inss;
let ir; //Imposto d Renda
let salarioLiquido;

if (salarioBase <= 1903.98) {
  ir = 0;

}else if (salarioBase <= 2826.65) {
  salarioLiquido = (salarioBase - (salarioBase * 0.075)) + 142.80; 

}else if (salarioBase <= 3751.05) {
  salarioLiquido = (salarioBase - (salarioBase * 0.15)) + 354.80; 

}else if (salarioBase <= 4664.68) {
  salarioLiquido = (salarioBase - (salarioBase * 0.225)) + 636.13;

}else {
  salarioLiquido = (salarioBase - (salarioBase * 0.275)) + 869.36;

}

console.log('Salário líquido: R$ ' + salarioLiquido);






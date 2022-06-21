const a = 4;
const b = 7;

// operadores aritméticos
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Retornar maior de dois números
const num1 = 5;
const num2 = 10;

if (num1 > num2) {
  console.log(num1);

} else {
  console.log(num2);
}

//Retornar maior de 3 números
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

// Retornnar se é positivo ou negativo
const number = -5;

if (number < 0) {
  console.log('negative');

} else if (number === 0) {
  console.log('zero');

} else {
  console.log('positive');
}

//ângulos de um triângulo
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






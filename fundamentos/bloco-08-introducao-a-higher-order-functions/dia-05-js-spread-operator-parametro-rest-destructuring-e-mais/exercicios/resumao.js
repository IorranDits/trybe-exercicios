// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// Adicione seu código aqui

// emailListInData.forEach(showEmailList);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const maiorQue25 = (numbers) => {
//   return numbers.find((number) => {
//     return number > 25;
//   });
// };

// console.log(maiorQue25(numbers));

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (numbers) => {
//   // Adiciona seu código aqui
//   return numbers.find((numero) => {
//     return numero % 3 === 0 && numero % 5 === 0;
//   });
// };

// console.log(findDivisibleBy3And5(numbers));

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verificaLetraInicial = (names, letter) => {
//   return names.some((name) => {
//   return name[0] === letter;
//   });
// };

// console.log(verificaLetraInicial(listNames, 'R'));


// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verificaAprovacao = (disciplinas) => {
// return Object.values(disciplinas).every((disciplina) => {
//   return disciplina === 'Aprovado';
//   });
// };

// console.log(verificaAprovacao(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((nome) => {
//    return name === nome;
//   })
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// // Adicione se código aqui
// people.sort((ageA, ageB) => ageA.age - ageB.age);

// console.log(people);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const divisiveisPor3e5 = (numeros) => {
//   return numeros.filter((numero) => {
//     return numero % 3 === 0 && numero % 5 === 0;
//   });
// };


// console.log(divisiveisPor3e5(numbers).sort((numberA, numberB) => numberA - numberB));

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const list = (produtos, precos) => {
//   return produtos.map((produto, index) => {
//     return { [produto] : precos[index]};
//   });
// }

// const produtos = list(products, prices);
// console.log(produtos);

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: '59' },
//       { name: 'Português', nota: '80' },
//       { name: 'Química', nota: '78' },
//       { name: 'Biologia', nota: '92' },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '76' },
//       { name: 'Português', nota: '90' },
//       { name: 'Química', nota: '70' },
//       { name: 'Biologia', nota: '80' },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '91' },
//       { name: 'Português', nota: '85' },
//       { name: 'Química', nota: '92' },
//       { name: 'Biologia', nota: '90' },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '70' },
//       { name: 'Português', nota: '70' },
//       { name: 'Química', nota: '60' },
//       { name: 'Biologia', nota: '50' },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '80' },
//       { name: 'Português', nota: '82' },
//       { name: 'Química', nota: '79' },
//       { name: 'Biologia', nota: '75' },
//     ],
//   },
// ];

// const estudantesManha = (estudantes) => {
//   return estudantes.filter((estudante) => {
//     return estudante.turno === 'Manhã';
//   }).map((estudante) => {
//     return `${estudante.nome} ${estudante.sobrenome}`;
//   });
// };

// console.log(estudantesManha(estudantes));

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const sum = (numeros) => {
//   return numeros.reduce((acumulador, primeiroValor) => {
//     return acumulador + primeiroValor;
//   }, 0);
// };

// console.log(sum(numbers));

// const numbers = [50, 85, -30, 3, 15];
// let maior = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maior) {
//     maior = numbers[index];
//   };
// };

// console.log(maior);

// const maior = (numeros) => {
//   return numeros.reduce((acumulador, primeiroValor) => (acumulador > primeiroValor ? acumulador : primeiroValor));
//     // if (acumulador > primeiroValor){
//     //   return acumulador;
//     // }
//     // return primeiroValor;
// };

// console.log(maior(numbers));

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const somaPares = (numeros) => {
//   return numeros.reduce((acumulador, primeiroValor) => {
//     if (primeiroValor %2 === 0){
//       return acumulador + primeiroValor;
//     }
//     return acumulador;
//   }, 0);
// };

// console.log(somaPares(numbers));

// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];

// console.log(newArray);

// const imc = (peso, altura) => {
//   return (peso / (altura **2)).toFixed(2);
// };

// const paciente1 = [94, 1.73];

// console.log(imc(...paciente1));

// spread pode ser usado em funções tb!




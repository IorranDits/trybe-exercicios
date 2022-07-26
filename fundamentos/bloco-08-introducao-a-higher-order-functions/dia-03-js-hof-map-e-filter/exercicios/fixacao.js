const numbers = [19, 21, 30, 3, 45, 22, 15];

const isEven = numbers.filter((number) => number % 2 ===0);

// console.log(isEven);

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verigyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

// console.log(verigyAgeDrive(objPeople));

//map:

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];


const fullName = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullName);


const numeros = [1, 2, 3, 4, -5];

const numerosNegativos = numeros.map((number) => ((number > 0)? number * (-1) : number));

// console.log(numeros);
// console.log(numerosNegativos);


const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map(product, index) => ( { [product]: listPrices[index]})







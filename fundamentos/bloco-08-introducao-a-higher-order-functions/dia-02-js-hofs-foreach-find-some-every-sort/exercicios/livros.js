const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


//nome do autor
//autora nascida em 1947
// find


  // escreva aqui o seu código
  const book1 = books.find((book) => {
  let year = book.author.birthYear;
  return year === 1947;
  });

  const author1 = book1.author.name;

  // console.log(author1);
  
  // gabarito:

  function authorBornIn1947() {
    return books.find((book) => book.author.birthYear === 1947).author.name;
  }

  // console.log(authorBornIn1947(books));

//Exercicio 2

function smallerName() {
  let menor;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!menor || book.name.length < menor.length) {
      menor = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return menor;
}

// console.log(smallerName(books));

//Exercício 03

function getNamedBook() {
  // escreva seu código aqui
 return books.find((book) => {
    return book.name.length === 26; 
  });
}

// console.log(getNamedBook(books));


//Exercicio 04

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
};

// console.log(booksOrderedByReleaseYearDesc(books));

//Exercicio 05 

//const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}

// console.log(everyoneWasBornOnSecXX(books));

//Exercício 06
//expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s(books));


//Exercício 07

// const expectedResult = false;

let birthYear = 0;
let verifyBirthYear = false;

function authorUnique() {
  // escreva seu código aqui
  return books.some((book) =>  );
}

console.log(authorUnique(books));










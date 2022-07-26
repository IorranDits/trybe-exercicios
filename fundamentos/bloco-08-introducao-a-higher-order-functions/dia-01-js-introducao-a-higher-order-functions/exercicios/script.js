const toWakeUp = () => 'Acordando';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

function doingThings (func) {
   const message = func();
   return message;
}

// console.log(doingThings(breakfast));

const fullName = (firstName, secondName) => `${firstName} ${secondName}`; 

function correspondence(firstName, secondName) {
 let text = `${firstName}_${secondName}@trybe.com`;
 let result = text.toLowerCase();
 return result;
}

const newEmployees = (name, email) => {
  const employees = {
    id1:{
      name: name('Pedro', 'Guerra'),
      email: email('Pedro', 'Guerra')
    },
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: name('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: name('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(fullName, correspondence));

const callback = (number, random) => {
  if (number === random) {
    message =  `Número escolhido: ${number}, número sorteado: ${random}.Parabéns você ganhou!`;
  }else {
   message = `Número escolhido: ${number}, número sorteado: ${random}.Tente novamente.`;
  }
  return message;
};

const hof = (numero, callback) => {
  let random = Math.floor(Math.random() * 5) + 1;
  let number = numero;
  let result = callback(number, random);
  return result;
};



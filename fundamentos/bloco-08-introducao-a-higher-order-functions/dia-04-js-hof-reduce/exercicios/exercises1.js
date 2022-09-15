const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  // escreva seu código aqui
  return arrays.reduce((arrayAtual, proximoArray) => {
    return arrayAtual.concat(proximoArray);
    
  }, []);
}

console.log(flatten(arrays));
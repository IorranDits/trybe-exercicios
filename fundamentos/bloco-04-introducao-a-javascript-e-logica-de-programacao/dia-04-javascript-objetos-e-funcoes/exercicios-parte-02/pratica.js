// Número que mais se repete

function maisRepete(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (index in numeros){
    let verificaNumero = numeros[index];
    for (index2 in numeros){
      if(verificaNumero === numeros[index2]){
        contNumero += 1;
      }
    }
    if(contNumero > contRepetido){
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepete([7,6,8,8,8,9,4,6,7,]));
//FUNCION QUE GENERA NUMEROS ALEATORIOS ENTRE 1 Y EL 5
function generarNumeroEntre1y5() {
  return Math.floor(Math.random() * 5) + 1;
}

// Función que utiliza la función anterior para generar números entre 1 y 7
function generarNumeroEntre1y7() {
  const num = generarNumeroEntre1y5() + generarNumeroEntre1y5();
    if (num > 7){
      return generarNumeroEntre1y5();
    }else{
      return num;
    }

}

// Ejemplo de uso
const randomInt = generarNumeroEntre1y7();
console.log(randomInt);
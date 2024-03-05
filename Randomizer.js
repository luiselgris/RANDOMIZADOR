const fs = require('fs');
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

// Función para lanzar el código 15000 veces y almacenar los resultados en un array
function lanzarCodigoMuchasVeces() {
  const resultados = [];

  for (let i = 0; i < 15000; i++) {
    const resultado = generarNumeroEntre1y7();
    resultados.push(resultado);
  }

  return resultados;
}

// Lanzar el código 15000 veces
const resultados = lanzarCodigoMuchasVeces();

// Convertir los resultados a texto
const resultadosTexto = resultados.join('\n');

// Escribir los resultados en un archivo de texto
fs.writeFileSync('resultados.txt', resultadosTexto);

console.log('Resultados guardados en el archivo resultados.txt');

// Calcular la frecuencia de cada número
const frecuenciaNumeros = resultados.reduce((frecuencia, numero) => {
  frecuencia[numero] = (frecuencia[numero] || 0) + 1;
  return frecuencia;
}, {});

// Mostrar las estadísticas
console.log('Estadísticas de frecuencia:');
for (const numero in frecuenciaNumeros) {
  console.log(`${numero}: ${frecuenciaNumeros[numero]} veces`);
}

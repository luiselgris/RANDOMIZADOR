const crypto = require('crypto');

// Función para obtener un valor no determinista utilizando crypto
function getNonDeterministicValue() {
  const buffer = crypto.randomBytes(4);
  return buffer.readUInt32LE(0) / 0xFFFFFFFF;
}

// Función para validar que los valores en el array sean números enteros
function validarArrayEnteros(array, nombre) {
  if (!array.every(value => Number.isInteger(value) && value === Math.floor(value))) {
    throw new Error(`Error: ${nombre} contiene valores no enteros.`);
  }
}

// Primera función que baraja el array del 1 al 5 con valores enteros
function barajarArray1to5() {
  // Crear un array con 5 posiciones (1, 2, 3, 4, 5)
  let array1to5 = [1, 2, 3, 4, 5];

  // Validar que todos los valores son enteros
  validarArrayEnteros(array1to5, "array1to5");

  // Barajar el array del 1 al 5 utilizando valores no deterministas
  array1to5.sort(() => getNonDeterministicValue() - 0.5);

  // Mostrar el array del 1 al 5 "barajado" en la consola
  console.log("Array del 1 al 5 pseudo-barajado:", array1to5);

  // Devolver el array barajado
  return array1to5;
}

// Segunda función que crea el array del 0 al 2 con valores enteros, lo baraja y devuelve la suma
function obtenerSumaPrimeraPosicion() {
  // Llamar a la primera función para obtener el array barajado del 1 al 5
  const array1to5 = barajarArray1to5();

  // Crear otro array con 3 posiciones (0, 1, 2)
  let array0to2 = [0, 1, 2];

  // Validar que todos los valores son enteros
  validarArrayEnteros(array0to2, "array0to2");

  // Barajar el array del 0 al 2 utilizando valores no deterministas
  array0to2.sort(() => getNonDeterministicValue() - 0.5);

  // Mostrar el array del 0 al 2 "barajado" en la consola
  console.log("Array del 0 al 2 pseudo-barajado:", array0to2);

  // Obtener la suma de la primera posición de ambos arrays
  let sumaPrimeraPosicion = array1to5[0] + array0to2[0];

  // Mostrar la suma en la consola
  console.log("Suma de la primera posición de ambos arrays:", sumaPrimeraPosicion);

  // Devolver la suma
  return sumaPrimeraPosicion;
}

// Llamar a la segunda función y obtener la suma
const resultado = obtenerSumaPrimeraPosicion();

// Mostrar el resultado final por consola
console.log("Resultado final:", resultado);
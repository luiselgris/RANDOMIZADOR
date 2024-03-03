//FUNCION QUE GENERA NUMEROS ALEATORIOS ENTRE 1 Y EL 5
function generarNumeroEntre1y5() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  // Función que utiliza la función anterior para generar números entre 1 y 7
  function generarNumeroEntre1y7(min,max) {
     // Comprobar que el rango es valido 
     if (!Number.isInteger(min) || !Number.isInteger(max)) {  
        throw new Error('El rango debe de ser un numero entero');  
      }  
      if (min > max) {  
        throw new Error('El valor minimo debe de ser menor o igual que el maximo al menos');  
      }  
      
      //Obtener el rango deseado  
      const range = (max - min) + 1;  
     
    // Escalar el resultado de la funcion anterior para obtener un número entre 1 y 7
    return Math.floor((generarNumeroEntre1y5() / 8) * range)+(Math.floor((Math.random() * 3)) + 1);
  }
  
  // Ejemplo de uso
  const randomInt = generarNumeroEntre1y7(1,7);
  console.log(randomInt);
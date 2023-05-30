// Ejercicio 11
// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
// La función debe tener dos parámetros:
// El primer parámetro es el array entero que se quiere dividir.
// El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
// Ejemplo de uso de la función:
// const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

const splitArrayIntoChunks = (arr, num) => {
    if (arr.length >= num) {
      const longArr = Math.floor(arr.length / num); // Calculate the size of each chunk
      const remainder = arr.length % num; // Calculate the remainder for the last chunk
      let i = 0;
      const finalArray = [];
  
      for (let j = 0; j < num; j++) {
        let subarraySize = longArr;
        if (j < remainder) {
          subarraySize++;
        }
        finalArray.push(arr.slice(i, i + subarraySize)); // Push a subarray to the final array
        i += subarraySize; // update the position already updated
      }
      return finalArray;
    } else {
      console.log("The array is not long enough");
      return null;
    }
  };
  const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);
  console.log(result); // Output the result: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10, 11, 12 ] ]
// const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7,8,9,10,11], 5);
const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
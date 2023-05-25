// Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La fundación debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
// Ejemplo de uso de la función:
// const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
// console.log(result); // {a: 1, c: 3}
const returnFalsyValues = (obj, conditionFn) => {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (!conditionFn(value)) {
          result[key] = value;
        }
      }
    }
    return result;
  };
  
  const obj = { a: -1, b: '2', c: 0 };
//   const result = returnFalsyValues(obj, x => typeof x === 'string');
const result = returnFalsyValues(obj, x => x <= 0);
  console.log(result); // {a: 1, c: 3}


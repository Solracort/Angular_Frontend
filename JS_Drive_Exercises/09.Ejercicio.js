// Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función:
// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
const toLowercaseKeys = (myObject) => {
    const resultedObject = {};
  
    for (let item in myObject) {
      const lowercasedKey = item.toLowerCase();
      resultedObject[lowercasedKey] = myObject[item];
    }
  
    return resultedObject;
  };
  
  const tryObject = { NamE: 'Charles', ADDress: 'Home Street' };
  const myObjLowercase = toLowercaseKeys(tryObject);
  console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
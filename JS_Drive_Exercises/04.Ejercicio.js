// Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const myArray = arrNumber1.filter((number)=>{
    return arrNumber2.includes(number) && arrNumber3.includes(number);
});

console.log(myArray);
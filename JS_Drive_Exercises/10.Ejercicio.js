// Ejercicio 10
// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.
// Ejemplo de uso de la función:
const removeHTMLTags= (string)=>{
    let result = '';
    let insideTag = false;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '<') {
        insideTag = true;
      } else if (string[i] === '>') {
        insideTag = false;
      } else if (!insideTag) {
        result += string[i];
      }
    }
  
    return result;

};

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>')
console.log(result); // lorem ipsum


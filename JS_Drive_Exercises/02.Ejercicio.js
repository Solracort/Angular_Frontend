const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
const arrClean = arrDirty.filter((value) => {
    return !!value; // Filtra solo los valores que son truthy
  });
  
console.log(arrClean);
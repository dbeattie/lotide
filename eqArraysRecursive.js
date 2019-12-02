const eqArraysRecursive = function(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  } 
  if ((arrA === undefined || arrA.length === 0) && (arrB === undefined || arrB.length === 0)) {
    return true;
  } 

  for (let el in arrA) {
    //console.log(arrA[el], arrB[el]);
    if (!eqArraysRecursive(arrA[el], arrB[el])) {
      return false;
    }
  }
  return true;
};

console.log(eqArraysRec([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArraysRec(([[2, 3], [4]]), ([[2, 3], [4, 5]]))); // => false
console.log(eqArraysRec([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = eqArraysRecursive;
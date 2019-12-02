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

module.exports = eqArraysRecursive;
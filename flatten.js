//logic taken from eqArrays
const eqArrays = function(a, b) {
  let output;
  if (a.length !== b.length) {
    output = false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        output = false;
      } else output = true;
    }
    return output;
  }
};
//logic taken from assertArraysEqual.js
const assertArraysEqual = function(actual, expected) {
  let output;
  if (actual.length !== expected.length) {
    output = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        output = false;
      } else output = true;
    }
  }
  if (output) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};
//NEW WITHOUT FUNCTION
const flatten = function(arrInput) {
  let newArr = [];
  for (let i = 0; i < arrInput.length; i++) {
    if (Array.isArray(arrInput[i]) === true) {
      for (let x = 0; x < arrInput[i].length; x++) {
        newArr.push(arrInput[i][x]);
      }
    } else {
      newArr.push(arrInput[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(['a', 'b', ['c', 'd', 'e'], 'f', ['g']]));

// WILL RETURN ALL THE ARRAYS FROM WITHIN THE ARRAY
// const flatten = function(arrInput) {
//   let newArr = [];
//   //if (Array.isArray) {
//     for (let i = 0; i < arrInput.length; i++) {
//       if (Array.isArray(arrInput[i]) === true) {
//         newArr.push(arrInput[i]);
//       }
//     }
//   //}
//   return newArr;
// }
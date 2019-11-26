// TEST/ASSERTION FUNCTIONS
const eqArrays = function(a, b) {
  let output;
  if ((a === undefined || a.length === 0) && (b === undefined || b.length === 0)) {
   output = true;
  } 
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        output = false;
      } else {
        output = true;
      }
    }
  return output;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.\n`);
  }
};

// ACTUAL FUNCTION
const middle = function(arr) {
  let returnArr = []
  let arrValue;
  if (arr.length < 3) {
    returnArr = [];
  } else if (arr.length % 2 === 0) {
    arrValue = arr.length / 2;
    returnArr.push(arr[arrValue - 1], arr[arrValue]);  
  } else {
    arrValue = Math.floor((arr.length) / 2);
    returnArr.push(arr[arrValue])
  }
  return returnArr;
 }

// TEST CODE
// console.log(middle([1])); // => 
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); // => 
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

module.exports = middle;

// // ACTUAL FUNCTION FOR AFTER INEVITABLE REFACTOR BEFORE HANDING LOTIDE IN
// const middle = function(arr) {
//   let returnArr = []
//   if (arr.length < 3) {
//     return [];
//   }
//   if (arr.length % 2 === 0) {
//     arrValue = arr.length / 2;
//     returnArr.push(arr[arrValue - 1], arr[arrValue]);
//     return returnArr;
//   } else {
//     arrValue = Math.floor((arr.length) / 2);
//     returnArr.push(arr[arrValue])
//     return returnArr;
//   }
//  }
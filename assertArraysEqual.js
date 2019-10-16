// const eqArrays = function(a, b) {
//   let output;
//   if (a.length !== b.length) {
//     output = false;
//   } else {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         output = false;
//       } else output = true;
//     }
//     return output;
//   }
// };
//copied over from assertEqual.js
//logic taken from eqArrays.js
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
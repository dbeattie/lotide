//Refactored over from assertEqual.js with logic taken from assertArraysEqual.js
const assertArraysEqual = function(actual, expected) {
  let output;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      output = false;
    } else {
      output = true;
    }
  }
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.\n`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


module.exports = assertArraysEqual;

//FIRST PART OF THE FUNCTION PULLED FROM eqArrays.js
//SECOND PART PULLED FROM assertEqual.js
//SEE THOSE FOR PREVIOUS IDEAS, THIS IS A SHORTER IMPROVED VERSION
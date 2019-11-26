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

//NEW FLATTEN FUNCTION
const flatten = function(arrInput) {
  let newArr = [];
  for (let i = 0; i < arrInput.length; i++) {
    if (Array.isArray(arrInput[i])) {
      for (let x = 0; x < arrInput[i].length; x++) {
        newArr.push(arrInput[i][x]);
      }
    } else {
      newArr.push(arrInput[i]);
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), ([ 1, 2, 3, 4, 5, 6 ]));
assertArraysEqual(flatten(['a', 'b', ['c', 'd', 'e'], 'f', ['g']]), ([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]));

module.exports = flatten;
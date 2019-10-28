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
const without = function(source, itemsToRemove) {
  //console.log(source);
  //console.log(itemsToRemove);
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (itemsToRemove[x] !== source[i]) {
        newArr.push(source[i]);
      }
    }
  }
  return newArr;
};

module.exports = without;

console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
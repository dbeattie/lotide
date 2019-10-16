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
// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length < 3) {
    return []; 
   }
  if (array.length % 2 === 0) {
    let half = array.length / 2;
    return array.splice(half-1, 2);
  } else {
    let half = array.length / 2;
    return array[Math.floor(half)];
  }
};

console.log(middle(["Yo Yo", "Lighthouse", "Labs"]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2]));
console.log(middle(["One Thing"]));
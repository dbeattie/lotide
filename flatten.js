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
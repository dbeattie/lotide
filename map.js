//Refactored over from assertEqual.js with logic taken from assertArraysEqual.js
const eqArrays = function(a, b) {
  let output;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      output = false;
    } else {
      output = true;
    }
  }
  return output;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.\n`);
  }
};

const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[3]);


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => true
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]); // => true
assertArraysEqual(results3, [ 'u', 't', , 'o', ]); // => true

module.exports = map;

const eqArrays = function(a, b) {
  let output;
  if (a.length !== b.length) {
    return false;
  }
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

const eqObjects = function(object1, object2) {
  if (
    (Object.keys(object1)).length !== (Object.keys(object2)).length
    || typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (!object2[key]) {
      return false;
    }
    if (Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.\n`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => PASS
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }); // => FAIL
assertObjectsEqual({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] }); // => PASS
assertObjectsEqual({ c: "1", d: ["2", 3, 4] }, { c: "1", d: ["2", 3] }); // => FAIL
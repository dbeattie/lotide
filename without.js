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
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.\n`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    if (itemsToRemove.includes(newArr[i])) {
      newArr.splice(i, 1);
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3, 4], [1, 4]), [2, 3]);
assertArraysEqual(without(["1", "2", "3", "4"], [1, 2, "3"]), ["1", "2", "4"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

module.exports = without;

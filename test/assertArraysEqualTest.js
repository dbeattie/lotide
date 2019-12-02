const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe("#assertArraysEqual", () => {
  
  it("[1, 2, 3] equals [1, 2, 3] -> Should be TRUE", () => {
    assert.deepStrictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  
  it("[1, 2, 3] does not equals [3, 2, 1] -> Should be FALSE", () => {
    assert.deepStrictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

  it("['1', '2', '3'] and ['1', '2', '3'] are equal -> TRUE", () => {
    assert.deepStrictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });

  it("['1', '2', '3'] and ['1', '2', 3] are not equal -> FALSE", () => {
    assert.deepStrictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });

  it("['2', 3] and ['2', 3, 4] are not equal -> FALSE", () => {
    assert.deepStrictEqual(eqArrays(["2", 3], ["2", 3, 4]), false); 
  });

});


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
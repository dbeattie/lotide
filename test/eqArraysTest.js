const assert = require('chai').assert;
const _ = require('../index');

describe("#eqArrays", () => {
  
  it("[1, 2, 3] equals [1, 2, 3] -> Should be TRUE", () => {
    assert.deepStrictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  
  it("[1, 2, 3] does not equals [3, 2, 1] -> Should be FALSE", () => {
    assert.deepStrictEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

  it("['1', '2', '3'] and ['1', '2', '3'] are equal -> TRUE", () => {
    assert.deepStrictEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });

  it("['1', '2', '3'] and ['1', '2', 3] are not equal -> FALSE", () => {
    assert.deepStrictEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });

  it("['2', 3] and ['2', 3, 4] are not equal -> FALSE", () => {
    assert.deepStrictEqual(_.eqArrays(["2", 3], ["2", 3, 4]), false); 
  });

});

describe("#eqArraysRecursive", () => {
  
  it("[2, 3], [4]], equals [2, 3], [4]] -> Should be TRUE", () => {
    assert.deepStrictEqual(_.eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  
  it("([[2, 3], [4]]) does not equal ([[2, 3], [4, 5]]) -> Should be FALSE", () => {
    assert.deepStrictEqual(_.eqArraysRecursive(([[2, 3], [4]]), ([[2, 3], [4, 5]])), false); 
  });

  it("[[2, 3], [4]] does not equal [[2, 3], 4]  -> Should be FALSE", () => {
    assert.deepStrictEqual(_.eqArraysRecursive(([[2, 3], [4]]), ([[2, 3], 4])), false); 
  });

});
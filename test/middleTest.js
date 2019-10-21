const middle = require ('../middle');
const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("The middle of ['Yo Yo', 'Lighthouse', 'Labs'] is ['Lighthouse']", () => {
    assert.deepEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it("The middle of [1, 2, 3, 4, 5, 6, 7, 8] is [4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), ([4, 5]));
  });
  it("The middle of a two element array [1, 2], is an empty array []", () => {
    assert.deepEqual(middle([1, 2]), ([]));
  });
  it("The middle of one element 'One Thing' array, is an empty array []", () => {
    assert.deepEqual(middle(["One Thing"]), ([]));
  });
});

// OLD TEST CODE

// assertArraysEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), ([4, 5]));
// assertArraysEqual(middle([1, 2]), ([]));
// assertArraysEqual(middle(["One Thing"]), ([]));
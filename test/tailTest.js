const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Check the original array, test.js
const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words, ["Lighthouse", "Labs"]));
  });
  it("the number of elements in the array is 3", () => {
    assert.strictEqual(words.length, 3); 
  });
});
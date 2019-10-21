const assert = require('chai').assert;
const tail = require('../tail');
//MISCELLANEOUS CONST WORDS FOR TESTING PURPOSES DIRECTLY BELOW
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words, ["Lighthouse", "Labs"]));
  });
  it("the number of elements in the array is 3", () => {
    assert.strictEqual(words.length, 3); 
  });
});
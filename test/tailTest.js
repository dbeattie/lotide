const assert = require('chai').assert;
const tail = require('../tail');

//MISCELLANEOUS CONST WORDS FOR TESTING PURPOSES DIRECTLY BELOW
const words = ["Yo Yo", "Lighthouse", "Labs"];
const oneElementArr = ['LHL'];
const empArr = [];

describe("#tail", () => {
  
  it("The tail of ['Yo Yo', 'Lighthouse', 'Labs'] is ['Lighthouse', 'Labs']", () => {
    assert.deepStrictEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("the number of elements in the original array is still 3", () => {
    assert.strictEqual(words.length, 3); 
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepStrictEqual(tail(oneElementArr), []); 
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepStrictEqual(tail(empArr), []); 
  });

});
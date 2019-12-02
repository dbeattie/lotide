const assert = require('chai').assert;
const tail = require('../tail');
// const _ = require('./index')

describe("#tail", () => {
  
  it("The tail of ['Yo Yo', 'Lighthouse', 'Labs'] is ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("the number of elements in the original array is still 3", () => {
    assert.strictEqual(words.length, 3); 
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepEqual(tail(oneElementArr), []); 
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepEqual(tail(empArr), []); 
  });

});

//MISCELLANEOUS CONST WORDS FOR TESTING PURPOSES DIRECTLY BELOW
const words = ["Yo Yo", "Lighthouse", "Labs"];
const oneElementArr = ['LHL'];
const empArr = [];
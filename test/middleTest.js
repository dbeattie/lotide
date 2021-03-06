//const middle = require('../middle');
const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {

  it("The middle of one element 'One Thing' array, is an empty array []", () => {
    assert.deepEqual(_.middle(["One Thing"]), ([]));
  });

  it("The middle of a two element array [1, 2], is an empty array []", () => {
    assert.deepEqual(_.middle([1, 2]), ([]));
  });

  it("The middle of ['Yo Yo', 'Lighthouse', 'Labs'] is ['Lighthouse']", () => {
    assert.deepEqual(_.middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("The middle of [1, 2, 3, 4, 5], is [3]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), ([3]));
  });
  
  it("The middle of [1, 2, 3, 4, 5, 6, 7, 8] is [4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6, 7, 8]), ([4, 5]));
  });

});
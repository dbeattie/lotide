const assert = require('chai').assert;
const _ = require('../index');

describe("#findKeyByValue", () => {
    
  it("'The Wire' is the best 'drama' (genre) key value", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it("'Brooklyn Nine-Nine' the best 'comedy' (genre) key value", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); 
  });
  
  it("'That 70s Show' does not have a key value (genre) associated with it", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });

});

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
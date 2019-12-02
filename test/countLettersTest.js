const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {
    
  it("There are no 'z's in 'lighthouse in the house' -> UNDEFINED", () => {
    assert.deepEqual(result1["z"], undefined);
  });
  
  it("There are 3 'e's in 'lighthouse in the house'", () => {
    assert.deepEqual(result1["e"], 3); 
  });
  
  it("There are 4 'h's in 'lighthouse in the house'", () => {
    assert.deepEqual(result1["h"], 4); 
  });

});

//TEST DATA:
var str = "lighthouse in the house";
const result1 = _.countLetters(str);
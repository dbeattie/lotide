const assert = require('chai').assert;
const _ = require('../index');

describe("#letterPositions", () => {
    
  it("The 'e' in 'hello' is at index [1]", () => {
    assert.deepEqual(_.letterPositions("hello").e, [1]);
  });
  
  it("The 'l' in 'hello' is at index [2, 3]", () => {
    assert.deepEqual(_.letterPositions("hello").l, [2, 3]); 
  });
  
  it("The 's' in 'scissors' is at index [0, 3, 4, 7]", () => {
    assert.deepEqual(_.letterPositions("scissors").s, [0, 3, 4, 7]); 
  });

});
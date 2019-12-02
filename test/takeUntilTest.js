const assert = require('chai').assert;
const _ = require('../index');

describe("#takeUntil", () => {
    
  it("Take until you get a value less than 0", () => {
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  
  it("Take until you get to a ',' value", () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); 
  });

});

//TEST DATA:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
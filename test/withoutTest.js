const assert = require('chai').assert;
const _ = require('../index');

describe("#without", () => {
    
  it("Removed [1, 4] from [1, 2, 3, 4] and resulted in: [2, 3]", () => {
    assert.deepEqual(_.without([1, 2, 3, 4], [1, 4]), [2, 3]);
  });
  
  it('Removed [1, 2, "3"] from ["1", "2", "3", "4"] and resulted in: ["1", "2", "4"]', () => {
    assert.deepEqual(_.without(["1", "2", "3", "4"], [1, 2, "3"]), ["1", "2", "4"]); 
  });

  it('Removed ["lighthouse"] from ["hello", "world", "lighthouse"] and resulted in ["hello", "world"]', () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]); 
  });

});
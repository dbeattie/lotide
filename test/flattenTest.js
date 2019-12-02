const assert = require('chai').assert;
const _ = require('../index');

describe("#flatten", () => {
  
  it("returns [ 1, 2, 3, 4, 5, 6 ] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);
  });
  
  it("returns [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ] for ['a', 'b', ['c', 'd', 'e'], 'f', ['g']]", () => {
    assert.deepEqual(_.flatten(['a', 'b', ['c', 'd', 'e'], 'f', ['g']]), [ 'a', 'b', 'c', 'd', 'e', 'f', 'g']); 
  });
  
  it("recursively returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, 3, [4, 5, [6, 7], 8, 9]]", () => {
    assert.deepEqual(_.flatten([1, 2, 3, [4, 5, [6, 7], 8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]); 
  });
  
});

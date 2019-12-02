const assert = require('chai').assert;
const _ = require('../index');

describe("#eqObjects", () => {
    
  it('{ c: "1", d: ["2", 3] } is equal to { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(_.eqObjects(cd, dc), true);
  });
  
  it('{ c: "1", d: ["2", 3] } is not equal to { c: "1", d: ["2", 3, 4] }', () => {
    assert.deepEqual(_.eqObjects(cd, cd2), false); 
  });
  
  it('{ a: "1", b: "2" } is equal to { b: "2", a: "1" }', () => {
    assert.deepEqual(_.eqObjects(ab, ba), true); 
  });

  it('{ a: "1", b: "2" } is not equal to object { a: "1", b: "2", c: "3" }', () => {
    assert.deepEqual(_.eqObjects(ab, abc), false); 
  });

});

//TEST DATA:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#eqObjectsRecursive", () => {
    
  it('Should be true', () => {
    assert.deepEqual(_.eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  
  it('Should be false', () => {
    assert.deepEqual(_.eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); 
  });
  
  it('Should be false', () => {
    assert.deepEqual(_.eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); 
  });

});

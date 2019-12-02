const assert = require('chai').assert;
const _ = require('../index');

describe("#countOnly", () => {
    
  it("Counts Jason once from firstNames object", () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  
  it("Doesn't find 'Karima' in the firstNames object -> Returns UNDEFINED", () => {
    assert.deepEqual(result1["Karima"], undefined); 
  });
  
  it("Counts Fang twice from firstNames object", () => {
    assert.deepEqual(result1["Fang"], 2); 
  });

});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
const assert = require('chai').assert;
const _ = require('../index');

describe("#findKey", () => {
    
  it('First 2 star restaurant is either "Noma" or "Ora"', () => {
    assert.deepEqual(_.findKey(data1, x => x.stars === 2), ("Noma" || "Ora"));
  });
  
  it('There are an undefined number of restaurants with 4 stars', () => {
    assert.deepEqual(_.findKey(data2, x => x.stars === 4), undefined); 
  });

});


//TEST DATA:
let data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "Noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

let data2 = {
  "Pujol":        { stars: 1 },
  "Gaggan":       { stars: 3 },
  "Geranium":     { stars: 2 },
  "Central":      { stars: 3 },
  "White Rabbit": { stars: 2 },
  "Arpege":       { stars: 3 }
}
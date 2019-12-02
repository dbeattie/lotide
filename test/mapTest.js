const _ = require('../index');
const assert = require('chai').assert;

describe("#map", () => {

  it("[ 'g', 'c', 't', 'm', 't' ] are the letters at character index[0]", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("[ 'r', 'o', 'o', 'a', 'o' ] are the letters at character index[1]", () => {
    assert.deepEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
  });

});

//TEST DATA:
const words = ["ground", "control", "to", "major", "tom"];
const results1 = _.map(words, word => word[0]);
const results2 = _.map(words, word => word[1]);
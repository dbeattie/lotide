const eqArrays = function(a, b) {
  let output;
  if (a.length !== b.length) {
    output = false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        output = false;
      } else output = true;
    }
    return output;
  }
};

module.exports = eqArrays;
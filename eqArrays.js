const eqArrays = function(a, b) {
  let output;
  if (a.length !== b.length) {
    return false;
  } 
  if ((a === undefined || a.length === 0) && (b === undefined || b.length === 0)) {
    output = true;
  } 
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      output = false;
    } else {
      output = true;
    }
  }
  return output;
}

module.exports = eqArrays;
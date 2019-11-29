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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.\n`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.\n`);
  }
};


//NEW FUNCTION TAKE UNTIL CALLBACK RECEIVED
const takeUntil = function(arr, cb) {
  let outputArr = [];
  for (let el of arr) {
    if (cb(el) === false) {
      outputArr.push(el);
    } else {
      break;
    }
  }
  return outputArr
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// **EXPECTED RESULTS**
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // => true
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => true

//module.exports = takeUntil;

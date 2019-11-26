const eqArrays = function(a, b) {
  let output;
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

const letterPositions = function(sentence) {
  const results = {};
  
  for(let i = 0; i < sentence.length; i++){
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } 
    results[sentence[i]].push(i);
  }
  return results;
};

//TEST CASES
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("scissors").s, [0, 3, 4, 7]);
const assertArraysEqual = function(actual, expected) {
  let output;
  if (actual.length !== expected.length) {
    output = false;
  } else {
    for (let char = 0; char < actual.length; char++) {
      if (actual[char] !== expected[char]) {
        output = false;
      } else output = true;
    }
  }
  if (output) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for(let i = 0; i < sentence.length; i++){
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } 
    console.log(results[sentence[i]].push(i));
  }
  console.log(results);
  return results;
};
//TEST CASES
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
const tail = function(words) {
  let output = words.slice(1);
  return output;
  //console.log(output);
};

//WON'T WORK FOR ARRAYS, but you can check the length of the array.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


// //WILL WORK FOR ARRAYS
// const assertArraysEqual = function(actual, expected) {
//   let output;
//   if (actual.length !== expected.length) {
//     output = false;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         output = false;
//       } else output = true;
//     }
//   }
//   if (output) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };


module.exports = tail;
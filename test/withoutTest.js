// STARTED REPLACING ALL MY TEST CASES BUT THAT WAS NEVER EXPLICITLY ASKED
// const without = require ('../without');
// const assert = require('chai').assert;
// //MISCELLANEOUS CONST WORDS FOR TESTING PURPOSES DIRECTLY BELOW
// const words = ["hello", "world", "lighthouse"];

// describe("#without", () => {
//   // it("If ['hello', 'world', 'lighthouse'] without ['Lighthouse'] is ", () => {
//   //   assert.deepEqual(without(words, ["lighthouse"]), (["hello", "world"));
//   // });
//   it("If [1, 2, 3] is without [1, 2, '3'] you get ['1', '2']", () => {
//     assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
//   }); 
//   it("If [1, 2, 3] is without [1] you get [2, 3]", () => {
//     assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
//   }); 
//   it("The number of words is the same", () => {
//     assert.deepEqual(words, ["hello", "world", "lighthouse"]);
//   });
// });

// //console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// //assertArraysEqual(words, ["hello", "world", "lighthouse"]);
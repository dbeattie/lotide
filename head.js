//copied over function from assertEqual.js
const head = function(array) {
  let output = array[0]
  return output
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} === ${expected}.`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//if (actual === expected) {
      //console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
    //} else {
      //console.log(`🔴 Assertion Failed: ${actual} === ${expected}.`);
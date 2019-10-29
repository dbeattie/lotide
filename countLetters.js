// taken from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countLetters = function(str) {
  let counts = {}
  let newStr = str.replace(/ /g,"");
  let count;
  for (let i = 0; i < newStr.length; ++i) {
    count = counts[newStr.charAt(i)];
    counts[newStr.charAt(i)] = count ? count + 1 : 1;
  }
  return counts
};

// TEST CODE
var str = "lighthouse in the house";
console.log(countLetters(str));
console.log({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
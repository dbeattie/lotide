const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countLetters = function(str) {
  let resultObj = {};
  let newStr = str.replace(/ /g,""); //regex to remove any spaces in the string
  for (let char of newStr) {
    if (resultObj[char]) {
      resultObj[char] += 1;
    } else {
      resultObj[char] = 1;
    }
  }
  return resultObj
};

// TEST CODE
var str = "lighthouse in the house";
const result1 = countLetters(str);

assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["z"], undefined)

// //WORKS AS OLDER i loop
// const countLetters = function(str) {
//   let resultObj = {};
//   let newStr = str.replace(/ /g,""); //regex to remove any spaces in the string
//   let count;
//   for (let i = 0; i < newStr.length; ++i) {
//     count = resultObj[newStr.charAt(i)];
//     resultObj[newStr.charAt(i)] = count ? count + 1 : 1;
//   }
//   return resultObj;
// };
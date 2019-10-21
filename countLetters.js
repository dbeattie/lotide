// taken from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// TEST CODE for assertEqual.js
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

//ONE METHOD I'M PLAYING WITH

const countLetters = function(str) {
  let counts = {}
  let newStr = str.replace(/ /g,"");
  let charOutput;
  let count;
  for (let i = 0; i < newStr.length; ++i) {
    charOutput = newStr.charAt(i);
    count = counts[charOutput];
    counts[charOutput] = count ? count + 1 : 1;
  }
  return counts
};

var str = "lighthouse in the house";
console.log(countLetters(str));

//Line 39: an empty object
//Line 39 through 42 shouldn't need this many variables but ??
//Line 40: replace any white spaces before running the function with regex
//Line 43: loop through the string, I should be able to use a for...of or for...in?
//Line 44: loop through and grab the character at each index
//Line 45: get a count for each character, if we have one (a space is undefined if we didn't create the newStr)
//Line 46: if we have a char, store it plus one in counts with an iteration

// THIS BIT OF CODE ALSO WORKS AND WAS PULLED FROM THE INTERNET:
// const countLetters = function(letters) {
//   var chars = {};
//   letters.replace(/\S/g, function(x){chars[x] = (isNaN(chars[x]) ? 1 : 
//   chars[x] + 1);});
//   return chars;
// }
// // AND THIS
// var myString = "lighthouse in the house";
// console.log(countLetters(myString));

// const countLetters = function(letters) {
//   let charOutput = {};
//   letters.replace(/\S/g, function(x){chars[x] = (isNaN(charsOuput[x]) ? 1 : 
//   charsOutput[x] + 1);});
//   return charsOutput;
// }

// var myString = "lighthouse in the house";
// console.log(countLetters(myString));
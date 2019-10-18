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


// THIS BIT OF CODE WORKS:
// const countLetters = function(letters) {
//   var chars = {};
//   letters.replace(/\S/g, function(x){chars[x] = (isNaN(chars[x]) ? 1 : 
//   chars[x] + 1);});
//   return chars;
// }
// AND THIS
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

//SECOND METHOD I'M PLAYING WITH

// The string
var str = "lighthouse in the house";

// A map (in JavaScript, an object) for the character=>count mappings
let counts = {};

// Misc vars?? Shouldn't need this many...
let charOutput;
let count;

// Loop through the string...but this is a complicated way to do it...
for (i = 0; i < str.length; ++i) {
    // Get this character
    charOutput = str.charAt(i); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[charOutput];

    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[charOutput] = count ? count + 1 : 1;
}
console.log(counts);
// Copied assertEqual.js function here:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// TEST CODE for AssertEqual.js
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

let allItems = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


let itemsToCount = { 
  "Jason": true, 
  "Karima": true,  
  "Fang": true 
};

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let outputObj = {}; 
  for (let key in itemsToCount) {
    outputObj[key] = 0;
  }
  for(let key of allItems) {
    if (outputObj[key] !== undefined) {
      outputObj[key]++;
    }
  }
return outputObj
}

console.log(countOnly(allItems, itemsToCount));

//Not exactly sure what this will yield:
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { 
//   "Jason": true, 
//   "Karima": true, 
//   "Fang": true 
// });

// const results = {}
// return results;

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
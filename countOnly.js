//I DIDN'T NEED ANY ADDITIONAL CHECKS PER THE ASSIGNMENT???
//Once I had countOnly constructed and checked, I moved in to the rest
//of the assignment but when I added the first bit of test code it worked?
//DON'T KNOW WHERE I WENT WRONG or if I even did??


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

//allItems for countOnly function
const firstNames = [
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

//telling countOnly to look at firstnames and passing a new array into itemsToCount
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// COMMENTED OUT because I didn't need any of these checks to get mine to work
// const results = {}
// return results;

//running the assertEqual function on result1
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}; //create return object
  for (const item of allItems) { //loop through allItems
    if (itemsToCount[item]) { //if itemsToCount has name [item] represents key value
      if (results[item]) { //if results has item, increment the number
        results[item] += 1;
      } else {
        results[item] = 1; //if results doesn't have item, make number 1
      }
    }
  }
  return results;
};

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

//telling countOnly to compare firstnames to itemsToCount object
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

//running the assertEqual function on result1
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
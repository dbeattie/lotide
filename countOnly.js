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

module.exports = countOnly;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const findKey = function (object, cb) {
  let valueArr = Object.values(object);
  for (let item of valueArr) {
    if (cb(item)) {
      return Object.keys(object)[item.stars];
    }
  }
  return undefined;
};

/* I'D REALLY LIKE TO USE FILTER OR MAP OR FIND HERE BUT HAD TO BRUTE FORCE IT REALLY. */

let data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

let data2 = {
  "Pujol":        { stars: 1 },
  "Gaggan":       { stars: 3 },
  "Geranium":     { stars: 2 },
  "Central":      { stars: 3 },
  "White Rabbit": { stars: 2 },
  "Arpege":       { stars: 3 }
}

assertEqual(findKey(data1, x => x.stars === 2), ("noma" || "Ora"));
assertEqual(findKey(data2, x => x.stars === 4), undefined);

//module.exports = findKey;
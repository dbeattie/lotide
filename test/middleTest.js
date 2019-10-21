const middle = require ('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// ...

// console.log(middle(["Yo Yo", "Lighthouse", "Labs"]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([1, 2]));
// console.log(middle(["One"]));

assertArraysEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), ([4, 5]));
assertArraysEqual(middle([1, 2]), ([]));
assertArraysEqual(middle(["One Thing"]), ([]));
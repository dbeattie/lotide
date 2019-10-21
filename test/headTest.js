const assertEqual = require('../assertEqual');
const head = require('../head');

// copied over function from assertEqual.js
// const assertEqual = function(...) { ... }

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
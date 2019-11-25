const eqArrays = function(a, b) {
  let output;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      output = false;
    } else {
      output = true;
    }
  }
  return output;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

module.exports = eqArrays;

//INITIAL OLD FUNCTION
// const eqArrays = function(a, b) {
//   let output;
//   if (a.length !== b.length) {
//     output = false;
//   } else {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         output = false;
//       } else output = true;
//     }
//     return output;
//   }
// };

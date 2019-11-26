const eqArrays = function(a, b) {
  let output;
  if ((a === undefined || a.length === 0) && (b === undefined || b.length === 0)) {
    output = true;
   } 
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


//SIMPLIEST VERSION I COULD COME UP WITH
// const eqArrays = function(a, b) {
//   let output;
//   if (JSON.stringify(a) === JSON.stringify(b)) {
//     output = true;
//   } else {
//     output = false;
//   }
//   return output;
// };


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

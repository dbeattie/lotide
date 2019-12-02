//UPDATED FLATTEN USING RECURSION
const flatten = function(arr) {
  const result = []

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })
  
  return result
}


//OLD INITIAL FLATTEN FUNCTION
// const flatten = function(arrInput) {
//   let newArr = [];
//   for (let i = 0; i < arrInput.length; i++) {
//     if (Array.isArray(arrInput[i])) {
//       for (let x = 0; x < arrInput[i].length; x++) {
//         newArr.push(arrInput[i][x]);
//       }
//     } else {
//       newArr.push(arrInput[i]);
//     }
//   }
//   return newArr;
// };

module.exports = flatten;

// 2019 ECMA Script Is making several FLATTEN functions native!!
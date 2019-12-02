const countLetters = function(str) {
  let resultObj = {};
  let newStr = str.replace(/ /g,""); //regex to remove any spaces in the string
  for (let char of newStr) {
    if (resultObj[char]) {
      resultObj[char] += 1;
    } else {
      resultObj[char] = 1;
    }
  }
  return resultObj;
};

module.exports = countLetters;

// //WORKS AS OLDER i loop
// const countLetters = function(str) {
//   let resultObj = {};
//   let newStr = str.replace(/ /g,""); //regex to remove any spaces in the string
//   let count;
//   for (let i = 0; i < newStr.length; ++i) {
//     count = resultObj[newStr.charAt(i)];
//     resultObj[newStr.charAt(i)] = count ? count + 1 : 1;
//   }
//   return resultObj;
// };
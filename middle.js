const middle = function(arr) {
  let returnArr = []
  let arrValue;
  if (arr.length < 3) {
    returnArr = [];
  } else if (arr.length % 2 === 0) {
    arrValue = arr.length / 2;
    returnArr.push(arr[arrValue - 1], arr[arrValue]);  
  } else {
    arrValue = Math.floor((arr.length) / 2);
    returnArr.push(arr[arrValue])
  }
  return returnArr;
 }

module.exports = middle;
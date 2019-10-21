// ACTUAL FUNCTION
const middle = function(arr) {
  let returnarray = []
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    returnvalue = arr.length / 2;
    returnarray.push(arr[returnvalue - 1], arr[returnvalue]);
    return returnarray;
  } else {
    returnvalue = Math.floor((arr.length) / 2);
    returnarray.push(arr[returnvalue])
    return returnarray;
  }
 }

module.exports = middle;
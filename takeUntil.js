const takeUntil = function(arr, cb) {
  let outputArr = [];
  for (let el of arr) {
    if (cb(el) === false) {
      outputArr.push(el);
    } else {
      break;
    }
  }
  return outputArr;
};

module.exports = takeUntil;
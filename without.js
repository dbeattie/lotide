const without = function(source, itemsToRemove) {
  let newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    if (itemsToRemove.includes(newArr[i])) {
      newArr.splice(i, 1);
    }
  }
  return newArr;
};

module.exports = without;

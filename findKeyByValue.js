const findKeyByValue = function(object, value) {
  let returnValue;
  let objKeys = Object.keys(object);
  
  for (let objKey of objKeys) {
    if (object[objKey] === value) {
      returnValue = objKey;
    }
  }
  return returnValue;
};

module.exports = findKeyByValue;
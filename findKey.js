const findKey = function (object, cb) {
  let valueArr = Object.values(object);
  for (let item of valueArr) {
    if (cb(item)) {
      return Object.keys(object)[item.stars];
    }
  }
  return undefined;
};

module.exports = findKey;
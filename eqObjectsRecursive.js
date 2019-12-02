const eqObjectsRecursive = function(object1, object2) {
  let obj1Length = Object.keys(object1).length;
  let obj2Length = Object.keys(object2).length;
  
  if (obj1Length !== obj2Length || typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (typeof (object1[key]) === 'object') {
      if (!eqObjectsRecursive(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjectsRecursive;

// //FOUND THIS HANDY LITTLE CONDENSED VERSION WHILE ATTEMPTING TO REFACTOR BUT IT'S HARD TO READ
// const eqObjects = function(object1, object2) {
//   return (object1 && object2 && typeof object1 === 'object' && typeof object2 === 'object') ?
//   (Object.keys(object1).length === Object.keys(object2).length) &&
//     Object.keys(object1).reduce(function(isEqual, key) {
//       return isEqual && eqObjects(object1[key], object2[key]);
//     }, true) : (object1 === object2);
//   }
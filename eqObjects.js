const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = function(a, b) {
  let output;
  if (a.length !== b.length) {
    return false;
  } 
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

const eqObjects = function(object1, object2) {
  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false;
  } 
  for (let key of Object.keys(object1)) {
    if (!object2[key]) {
      return false;
    } 
    if (Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      } 
    }    
  } 
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// //FOUND THIS HANDY LITTLE CONDENSED VERSION WHILE ATTEMPTING TO REFACTOR
// const eqObjects = function(object1, object2) {
//   return (object1 && object2 && typeof object1 === 'object' && typeof object2 === 'object') ?
//   (Object.keys(object1).length === Object.keys(object2).length) &&
//     Object.keys(object1).reduce(function(isEqual, key) {
//       return isEqual && eqObjects(object1[key], object2[key]);
//     }, true) : (object1 === object2);
//   }
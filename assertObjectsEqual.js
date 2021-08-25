const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // need to check both var are array
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
  
          return false;
        }
      }
    } else {
  
      return false;
    }
  
    return true;
  };

const eqObjects = function(object1, object2) {
  const obj1KeyArray = Object.keys(object1);
  const obj2KeyArray = Object.keys(object2);

  if (obj1KeyArray.length !== obj2KeyArray.length) {
    return false;
  }

  for (let obj1Key of obj1KeyArray) {
    if (!Object.prototype.hasOwnProperty.call(object2, obj1Key)) {
      return false;
    } else {
      let obj1Val = object1[obj1Key];
      let obj2Val = object2[obj1Key];

      let isObj1Array = Array.isArray(obj1Val);
      let isObj2Array = Array.isArray(obj2Val);

      if (isObj1Array !== isObj2Array) {
        return false;
      }

      if (isObj1Array) {
        if (!eqArrays(obj1Val, obj2Val)){
          return false;
        }
      } else {
        if (object1[obj1Key] !== object2[obj1Key]) {
          return false;
        }
      }
    }
  }
  return true;
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

module.exports = assertObjectsEqual;
const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
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

const middle = function(array) {

  let resultArray = [];
  let arrayLength = array.length;

  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      resultArray.push(array[(arrayLength / 2) - 1]);
      resultArray.push(array[arrayLength / 2]);
    } else {
      resultArray.push(array[(arrayLength + 1) / 2 - 1]);
    }
  }

  return resultArray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
assertArraysEqual(middle([1,2,3,4,'middle',6,7,8,9]), ['middle']);
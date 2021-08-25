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

const flatten = function(array, result) {
  let resultArray = [];

  if (result) {
    resultArray = result;
  }

  for (let obj of array) {
    if (Array.isArray(obj)) {
      let sendingArr = resultArray;
      resultArray = flatten(obj, sendingArr);
    } else {
      resultArray.push(obj);
    }
  }

  return resultArray;
};

assertArraysEqual(flatten([1, 2, [3, [4, 7]], 5,[6], [7,8,9,10,[11,12,13,14]]]), [1, 2, 3, 4, 7, 5,6,7,8,9,10,11,12,13,14]);

module.exports = flatten;
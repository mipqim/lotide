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

const without = function(srcArry, rmArry) {

  let rsltArry = [];

  for (let srcVal of srcArry) {
    
    let isFnd = false;
    
    for (let rmVal of rmArry) {
      if (srcVal === rmVal) {
        isFnd = true;
        break;
      }
    }

    if (!isFnd) {
      rsltArry.push(srcVal);
    }
  }

  return rsltArry;
}

assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(['1', 2, 3], [2, 3, 8, 'rm']), ['1']);
assertArraysEqual(without(['betty', 'beacon', 3], [3, 'rm', 'beacon']), ['betty']);

module.exports = without;
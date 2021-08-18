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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([], [1, 2, 3]);
assertArraysEqual([3, 6], []);
assertArraysEqual('ww', 'ww');
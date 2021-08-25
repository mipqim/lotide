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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item)); 
  }

  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word); //just copy
assertArraysEqual(results2, ["ground", "control", "to", "major", "tom"]);

const results3 = map(words, word => word+'_'+word.length);
assertArraysEqual(results3, ["ground_6", "control_7", "to_2", "major_5", "tom_3"]);

const results4 = map(words, word => word.toUpperCase());
assertArraysEqual(results4, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

module.exports = map;

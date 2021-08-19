const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {

  let returnObj = {};

  for (let ltr of str) {
    if (returnObj[ltr]) {
      returnObj[ltr]++;
    } else {
      returnObj[ltr] = 1;
    }
  }

  return returnObj;
};

const testResult = countLetters('LHL');
assertEqual(testResult['L'], 2);
assertEqual(testResult['H'], 1);

const testResult2 = countLetters('How much wood would a woodchuck chuck');
assertEqual(testResult2[' '], 6);
assertEqual(testResult2['w'], 4);
assertEqual(testResult2['H'], 1);
assertEqual(testResult2['h'], 3);
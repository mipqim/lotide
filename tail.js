const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array !== undefined && array !== null && array.length > 1) {
    let tailResult = array.slice(1,array.length);
    return tailResult;
  } else {
    return [];
  }
};

const testResult1 = tail([5, 6, 7]);
assertEqual(testResult1.length, 2);
assertEqual(testResult1[0], 6);
assertEqual(testResult1[1], 7);
console.log('----');

const testResult2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(testResult2.length, 2);
assertEqual(testResult2[0], "Lighthouse");
assertEqual(testResult2[1], "Labs");
console.log('----');

const testResult3 = tail(["one"]);
assertEqual(testResult3.length, 0);
console.log('----');

const testResult4 = tail([]);
assertEqual(testResult4.length, 0);
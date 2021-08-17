const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head("ddd1"), "d");
assertEqual(head(100), undefined);
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);
assertEqual(head(), undefined);
assertEqual(head(null), undefined);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(items, val) {
  let resultKey;
/*
  for (let itemKey in items) {
    if (items[itemKey] === val) {
      resultKey = itemKey;
      break;
    }
  }
*/
  let itemKeyArray = Object.keys(items);
  console.log(itemKeyArray);

  for (let itemKey of itemKeyArray) {
    if (items[itemKey] === val) {
      resultKey = itemKey;
      break;
    }    
  }

  return resultKey;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
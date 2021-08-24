const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([3, 6], []), false);
assertEqual(eqArrays('ww', 'ww'), true);
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle.js');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
assertArraysEqual(middle([1,2,3,4,'middle',6,7,8,9]), ['middle']);
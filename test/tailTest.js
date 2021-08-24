const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');


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
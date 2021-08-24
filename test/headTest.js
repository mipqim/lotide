const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head("ddd1"), "d");
assertEqual(head(100), undefined);
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);
assertEqual(head(), undefined);
assertEqual(head(null), undefined);
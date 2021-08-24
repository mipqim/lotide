const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {

  const testResult1 = tail([5, 6, 7]);
  it("returns 2 for tail([5, 6, 7]).length", () => {
    assert.strictEqual(testResult1.length, 2);
  });
  it("returns 6 for tail([5, 6, 7])[0]]", () => {
    assert.strictEqual(testResult1[0], 6);
  });
  it("returns 7 for tail([5, 6, 7])[1]]", () => {
    assert.strictEqual(testResult1[1], 7);
  });  

  const testResult2 = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns 2 for tail(['Hello', 'Lighthouse', 'Labs']).length", () => {
    assert.strictEqual(testResult2.length, 2);
  });
  it("returns 'Lighthouse' for tail(['Hello', 'Lighthouse', 'Labs'])[0]]", () => {
    assert.strictEqual(testResult2[0], 'Lighthouse');
  });
  it("returns 'Labs' for tail(['Hello', 'Lighthouse', 'Labs'])[1]]", () => {
    assert.strictEqual(testResult2[1], 'Labs');
  });  


  it("returns 0 for tail(['one']).length", () => {
    assert.strictEqual(tail(['one']).length, 0);
  }); 

  it("returns 0 for tail([]).length", () => {
    assert.strictEqual(tail([]).length, 0);
  }); 

});

/*

const testResult2 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(testResult2.length, 2);
assertEqual(testResult2[0], "Lighthouse");
assertEqual(testResult2[1], "Labs");
console.log('----');

const testResult3 = tail(["one"]);
assertEqual(testResult3.length, 0);
console.log('----');

const testResult4 = tail([]);
assertEqual(testResult4.length, 0);*/
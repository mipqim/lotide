const middle = function(array) {

  let resultArray = [];
  let arrayLength = array.length;

  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      resultArray.push(array[(arrayLength / 2) - 1]);
      resultArray.push(array[arrayLength / 2]);
    } else {
      resultArray.push(array[(arrayLength + 1) / 2 - 1]);
    }
  }

  return resultArray;
};

module.exports = middle;
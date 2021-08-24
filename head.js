const head = function(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
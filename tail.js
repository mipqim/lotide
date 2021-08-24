const tail = function(array) {
  if (array !== undefined && array !== null && array.length > 1) {
    let tailResult = array.slice(1,array.length);
    return tailResult;
  } else {
    return [];
  }
};

module.exports = tail;
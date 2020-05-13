var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.pop = function () {
    if (lastIndex > 0) {
      let poped = storage[lastIndex - 1];
      lastIndex -= 1;
      return poped;
    }
  };

  someInstance.size = function () {
    return lastIndex;
  };

  return someInstance;
};

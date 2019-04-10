var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastIndex] = value
    lastIndex++
    return storage
  };

  someInstance.pop = function() {
    if(lastIndex === 0) {
      return
    }
    let popItem = storage[lastIndex-1]
    delete storage[lastIndex-1]
    lastIndex--
    return popItem
  };

  someInstance.size = function() {
    return lastIndex
  };

  return someInstance;
};

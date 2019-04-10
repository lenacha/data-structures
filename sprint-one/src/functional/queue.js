var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0
  var lastIndex = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++
  };

  someInstance.dequeue = function() {
    let dequeuedValue;
    if(storage[firstIndex] !== undefined) {
      dequeuedValue = storage[firstIndex]
      delete storage[firstIndex]
      firstIndex++
      return dequeuedValue      
    }
    return 
  };

  someInstance.size = function() {
    return lastIndex - firstIndex
  };

  return someInstance;
};



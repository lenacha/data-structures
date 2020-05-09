var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function() {
    if(storage[firstIndex] !== undefined) {
      let dequeued = storage[firstIndex];
      firstIndex++;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return lastIndex - firstIndex;
  };

  return someInstance;
};

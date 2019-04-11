var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['firstIndex'] = 0
  someInstance['lastIndex'] = 0

  _.extend(someInstance, queueMethods)

  return someInstance
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex++
  },

  dequeue: function() {
    let dequeuedValue;
    if(this.storage[this.firstIndex] !== undefined) {
      dequeuedValue = this.storage[this.firstIndex]
      delete this.storage[this.firstIndex]
      this.firstIndex++
      return dequeuedValue      
    }
    return 
  },

  size: function() {
    return this.lastIndex - this.firstIndex
  }
};



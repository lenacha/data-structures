var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['lastIndex'] = 0
  _.extend(someInstance, stackMethods)

  return someInstance
};


var stackMethods = {
  push: function (val) {
    this.storage[this.lastIndex] = val
    this.lastIndex++
    return this.storage

  },
  pop: function () {
    if(this.lastIndex === 0) {
      return
    }
    let popItem = this.storage[this.lastIndex-1]
    delete this.storage[this.lastIndex-1]
    this.lastIndex--
    return popItem
  },
  size: function() {
    return this.lastIndex
  }
};



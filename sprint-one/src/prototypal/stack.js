var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(stackMethods);
  someInstances.storage = {};
  someInstances.lastIndex = 0;

  return someInstances;
};

var stackMethods = {
  pop: function(){
    var deleted;
    if(this.lastIndex === 0) {
      return
    } else {
      deleted = this.storage[this.lastIndex-1]
      delete this.storage[this.lastIndex-1]
      this.lastIndex--
      return deleted
    }
  },
  push: function(val){
    this.storage[this.lastIndex] = val;
    this.lastIndex++
    return 
  },
  size: function(){
    return this.lastIndex
  }
};

stackMethods.push = function (value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex += 1;
};

stackMethods.pop = function () {
  if (this.lastIndex > 0) {
    let poped = this.storage[this.lastIndex - 1];
    this.lastIndex -= 1;
    return poped;
  }
};

stackMethods.size = function () {
  return this.lastIndex;
};


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
  someInstance['lastIndex'] = 0
  someInstance['storage'] = {}

  return someInstance
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



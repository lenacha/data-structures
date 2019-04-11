var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.lastIndex = 0;

};


Stack.prototype.push = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
  return; 
}

Stack.prototype.pop = function() {
  var deleted;
  if(this.lastIndex === 0) {
    return
  } else {
    deleted = this.storage[this.lastIndex-1]
    delete this.storage[this.lastIndex-1]
    this.lastIndex--
    return deleted
  }
}

Stack.prototype.size = function() {
  return this.lastIndex
}
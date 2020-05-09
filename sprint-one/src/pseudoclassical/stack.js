var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};


Stack.prototype.push = function (value) {
 this.storage[this.lastIndex] = value;
 this.lastIndex += 1;
};

Stack.prototype.pop = function () {
  if (this.lastIndex > 0) {
    let poped = this.storage[this.lastIndex - 1];
    this.lastIndex -= 1;
    return poped;
  }
};

Stack.prototype.size = function () {
  return this.lastIndex;
}
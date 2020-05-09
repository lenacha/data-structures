var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex += 1;
};

Queue.prototype.dequeue = function () {
  if (this.storage[this.firstIndex] !== undefined) {
    let dequeued = this.storage[this.firstIndex];
    this.firstIndex += 1;
    return dequeued;
  }
};

Queue.prototype.size = function () {
  return this.lastIndex - this.firstIndex;
}


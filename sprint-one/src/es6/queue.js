class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }


  enqueue (value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex += 1;
  };  

  dequeue () {
    if(this.storage[this.firstIndex] !== undefined) {
      let dequeued = this.storage[this.firstIndex];
      this.firstIndex += 1;
      return dequeued;
    }
  };

  size () {
    return this.lastIndex - this.firstIndex;
  };

}

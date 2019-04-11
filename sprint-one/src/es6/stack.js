class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, lastIndex) {
    this.storage = {};
    this.lastIndex = 0;
  }
  push(value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
    return; 
  };
  pop() {
    var deleted;
    if(this.lastIndex === 0) {
      return
    } else {
      deleted = this.storage[this.lastIndex-1]
      delete this.storage[this.lastIndex-1]
      this.lastIndex--
      return deleted
    }
  };
  size() {
    return this.lastIndex
  }

}
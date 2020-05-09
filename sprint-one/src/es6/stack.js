class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lastIndex = 0;
  }

  push (value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex += 1;
  };

  pop () {
    if (this.lastIndex > 0) {
      let poped = this.storage[this.lastIndex - 1];
      this.lastIndex -= 1;
      return poped;
    }
  };

  size () {
    return this.lastIndex;
  };

}
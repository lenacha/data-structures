class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, firstIndex, lastIndex) {
    this.storage = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }
  enqueue(value){
    this.storage[this.lastIndex] = value;
    this.lastIndex++
    return 
  };

  dequeue(){
    let deleted;
    if(this.storage[this.firstIndex] === undefined) {
      return
    } else {
      deleted = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++
      return deleted;
    }
  };
  size() {
    return this.lastIndex - this.firstIndex
  };
}

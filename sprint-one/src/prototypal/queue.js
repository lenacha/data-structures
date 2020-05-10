var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(queueMethods);
  someInstances.storage = {};
  someInstances.firstIndex = 0;
  someInstances.lastIndex = 0;

  return someInstances;
};


queueMethods.enqueue = function (value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex += 1;
};

queueMethods.dequeue = function () {
  if(this.storage[this.firstIndex] !== undefined) {
    let dequeued = this.storage[this.firstIndex];
    this.firstIndex += 1;
    return dequeued;
  }
};

queueMethods.size = function () {
  return this.lastIndex - this.firstIndex;
};


 var queueMethods = {
   
   enqueue: function (val) {
      this.storage[this.lastIndex] = val;
      this.lastIndex += 1
      return
     },
   dequeue: function() {
    let deleted;
    if(this.storage[this.firstIndex] !== undefined) {
        deleted = this.storage[this.firstIndex];
        delete this.storage[this.firstIndex];
        this.firstIndex += 1;
        return deleted;  
      }
    return
   },
   size: function(){
     return this.lastIndex - this.firstIndex
   }
 };

 

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods)
  someInstance['storage'] = {};
  someInstance['firstIndex'] = 0
  someInstance['lastIndex'] = 0
  
  
  return someInstance
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

 

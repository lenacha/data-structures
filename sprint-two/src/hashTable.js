
var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupple = [k, v];
  var bucket = this._storage.get(index);

  if (this._storage.get(index) !== undefined) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
    this._storage.get(index).push(tupple);
  } else {
    this._storage.set(index, []);
    this._storage.get(index).push(tupple);
  }


};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



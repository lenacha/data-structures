var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    let obj = this._storage.get(index);
    obj[k] = v;
  } else {
    let newObj = {};
    newObj[k] = v;
    this._storage.set(index, newObj);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  delete obj[k];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

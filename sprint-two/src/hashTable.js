var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._load = 0;
  this._loadIndex = 0;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage.get(index));
  if (this._storage.get(index) !== undefined) {
    let obj = this._storage.get(index);
    obj[k] = [k, v];
  } else {
    let newObj = {};
    newObj[k] = [k, v];
    this._storage.set(index, newObj);
  }
  this._load += 1;
  this._loadIndex = this._load / this._limit;
  if (this._loadIndex > 0.75) {
    let retrived = this.retrieveAll();
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this._load = 0;
    this.insertAll(retrived);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    return this._storage.get(index)[k][1];
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  delete obj[k];
  this._load -= 1;
  this._loadIndex = this._load / this._limit;

  if (this._loadIndex < 0.25) {
    let retrived = this.retrieveAll();
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    this._load = 0;
    this.insertAll(retrived);
  }
};

HashTable.prototype.retrieveAll = function () {
  let retrived = [];
  this._storage.each((tuple) => {
    for (let key in tuple) {
      retrived.push(tuple[key]);
    }
  });

  return retrived;
};

HashTable.prototype.insertAll = function (array) {
  for (let i = 0; i < array.length; i++) {
    this.insert(array[i][0], array[i][1]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

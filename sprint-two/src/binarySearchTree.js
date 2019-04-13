var BinarySearchTree = function (value) {
  this[value] = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var bsTree = new BinarySearchTree(value);
  var root = this.value;
  if (value < root) {
    if (this.left === null) {
      this.left = bsTree;
    }
    //recursion!!
  } else {
    this.right = bsTree;
  }

};

BinarySearchTree.prototype.contains = function (target) {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

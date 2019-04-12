/*
.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
.contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
What is the time complexity of the above functions?
*/

var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  //add array
  //if newTree has no children (null)
  //assign children property of new Tree to an empty array
  //takes any value, sets that as the target of a node
  //create a new node
  //assign value property = input val
  //assign children property = null;
  //return

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  console.log(newTree, newTree.value);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var tree = new Tree(value);
  this.children.push(tree);

};

treeMethods.contains = function (target) {

  var searching = function (tree) {
    if (this.value === target) {
      return true;
    } else if (this.children.length === 0) {
      return false;
    }
    else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        searching(this.children[i])
      }
    } else {
      return false;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

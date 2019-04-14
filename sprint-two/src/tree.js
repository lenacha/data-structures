var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var tree = Tree(value);
  this.children.push(tree);

};

treeMethods.contains = function (target) {

  var searching = function (node) {
    if (node.value === target) {
      return true;
    } else if (node.children.length === 0) {
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      if (searching(node.children[i]) === true) {
        return true;
      }
    }
    return false;
  };

  return searching(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var tree = Tree(value);
  this.children.push(tree);
  tree.parent = this;
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

treeMethods.removeFromParent = function () {
  if(this.parent) {
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent = null;
  }
}

treeMethods.traverse = function (callback) {
  let dfs = (node) => {
    if(node.children.length === 0) {
      return;
    }
    for(let i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
      let newValue = callback(node.children[i].value);
      node.children[i].value = newValue;
    }
  }
  dfs(this);
  return;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

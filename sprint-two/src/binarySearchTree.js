var BinarySearchTree = function (value) {
  this['value'] = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var bsTree = new BinarySearchTree(value);

  var positioning = function (parent) {
    if (parent.value > value) {
      if (parent.left === null) {
        parent.left = bsTree;
      } else {
        return positioning(parent.left);
      }
    } else if (parent.value < value) {
      if (parent.right === null) {
        parent.right = bsTree;
      } else {
        return positioning(parent.right);
      }
    }
  };

  positioning(this);
};

BinarySearchTree.prototype.contains = function (target) {

  var searching = function (parent) {
    if (parent.value > target) {
      if (parent.left === null) {
        return false;
      } else if (parent.left.value === target) {
        return true;
      } else {
        return searching(parent.left);
      }
    } else if (parent.value < target) {
      if (parent.right === null) {
        return false;
      } else if (parent.right.value === target) {
        return true;
      } else {
        return searching(parent.right);
      }
    }
  };
  return searching(this);
};

//accepts a callback and executes it on every value contained in the tree

BinarySearchTree.prototype.depthFirstLog = function (func) {

  var searchDepth = function (parent) {
    func(parent.value)

    if (parent.left !== null) {
      searchDepth(parent.left);
    }

    if (parent.right !== null) {
      searchDepth(parent.right);
    }

    return;
  };

  return searchDepth(this);
};

BinarySearchTree.prototype.breadthFirstLog = function (func) {
  let queue = [this];
  while(queue.length > 0) {
    let node = queue.shift();
    if(node) {
      func(node.value);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

 
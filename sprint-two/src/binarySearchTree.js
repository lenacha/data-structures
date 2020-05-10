var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function (value) {
  var bsTree = new BinarySearchTree(value)

  var insertion = function (bsNode) {
    if(bsNode.value > value) {
      if(bsNode.left === null) {
        bsNode.left = bsTree;
        return;
      } else {
        insertion(bsNode.left);
      }
    } else if (bsNode.value < value) {
      if(bsNode.right === null) {
        bsNode.right = bsTree;
        return
      } else {
        insertion(bsNode.right);
      }     
    }
  }

  insertion(this);
};

BinarySearchTree.prototype.contains = function (target) {

  var searching = function (bsNode) {
    if(bsNode.value === target) {
      return true
    } 
    if (bsNode.left) {
      if(searching(bsNode.left)) {
        return true;
      }
    } 
    if (bsNode.right) {
      if(searching(bsNode.right)) {
        return true
      }
    }
    return false;
  }
  return searching(this)
}

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  
  var traverse = function (tree) {
    cb(tree.value);
    if(tree.left) {
      traverse(tree.left);
    }
    if(tree.right)
      traverse(tree.right);
  }
  
  return traverse(this)
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


const findLargestLevel = function(node) {
  var sumForLevel = {}
   
  function findSum (firstNode, level) {
    
    if(level === 0) {
      sumForLevel[level] = firstNode.value
    } else if(sumForLevel[level]===undefined){
      if(firstNode.left !== null && firstNode.right !== null){
        sumForLevel[level] = firstNode.left.value + firstNode.right.value
      } else if(firstNode.left === null && firstNode.right !== null) {
        sumForLevel[level] = firstNode.right.value
      } else if(firstNode.right === null && firstNode.left !== null) {
        sumForLevel[level] = firstNode.left.value
      }
      
    } else {
      if(firstNode.left !== null && firstNode.right !== null){
        sumForLevel[level] += firstNode.left.value + firstNode.right.value
      } else if(firstNode.left === null && firstNode.right !== null) {
        sumForLevel[level] += firstNode.right.value
      } else if(firstNode.right === null && firstNode.left !== null) {
        sumForLevel[level] += firstNode.left.value
      }
    }

    if(firstNode.left !== null){
      findSum(firstNode.left, level+1);
    }
    if(firstNode.right !== null){
      findSum(firstNode.right, level+1);
    }
     return;
  }

  findSum(node, 0)

  var largestLevel = 0
  var largestSum = Number.MIN_SAFE_INTEGER

  for(var key in sumForLevel) {
    if(sumForLevel[key] > largestSum){
      largestSum = sumForLevel[key]
      largestLevel = key
    }
  }

  return largestLevel
};

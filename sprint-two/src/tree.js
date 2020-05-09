var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value)
  this.children.push(newTree)
};

treeMethods.contains = function(target) {
  
  var searching = function(tree) {
  	if(tree.value === target) {
  		return true;
  	} else if (tree.children.length > 0) {
	  for (var i = 0 ; i < tree.children.length; i++) {
	    if(searching(tree.children[i])) {
	    	return true;
	    }
	  }
  	} 
  	return false;
  }

  return searching(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
  //  console.log(Graph)
};


//create a new node
//assign node input to the value property
//where is the node being added?
//will it have edges?
Graph.prototype.addNode = function (node) {
  this.nodes[node] = [];
  return;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (var key in this.nodes) {
    if (key === String(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var key in this.nodes) {
    if (key === node.toString()) {

    }
  }
};

// Returns a boolean indicating whether two specified  are connected.  Pass in the values contained in each of the two .
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (var key in this.nodes) {
    var edges = this.nodes[key];
    for (var i = 0; i < edges.length; i++) {
      if (edges[i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two  in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  for (var key in this.nodes) {
    if (key === fromNode.toString()) {
      this.nodes[key].push(toNode);
    }
    if (key === toNode.toString()) {
      this.nodes[key].push(fromNode);
    }
  }
  return;
};

// Remove an edge between any two specified (by value) .
Graph.prototype.removeEdge = function (fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



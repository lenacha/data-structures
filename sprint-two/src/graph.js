

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
  if (this.nodes[node]) {
    var edges = this.nodes[node];
    for (var i = 0; i < edges.length; i++) {
      for (var j = 0; j < this.nodes[edges[i]].length; j++) {
        if (this.nodes[edges[i]][j] === node) {
          this.nodes[edges[i]].splice(j, 1)
        }
      }
    }
    delete this.nodes[node]
  }
  return;
};

// Returns a boolean indicating whether two specified  are connected.  Pass in the values contained in each of the two .
Graph.prototype.hasEdge = function (fromNode, toNode) {

  var edges = this.nodes[fromNode];
  for (var i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      return true;
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

  var fromEdges = this.nodes[fromNode];
  for (var i = 0; i < fromEdges.length; i++) {
    if (fromEdges[i] === toNode) {
      this.nodes[fromNode].splice(i, 1)
    }
  }
  var toEdges = this.nodes[toNode];
  for (var i = 0; i < toEdges.length; i++) {
    if (toEdges[i] === fromNode) {
      this.nodes[toNode].splice(i, 1)
    }
  }
  return;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.nodes) {
    cb(key)
  }
  return
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



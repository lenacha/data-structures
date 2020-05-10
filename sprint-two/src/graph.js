// Instantiate a new graph
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.storage[node];
  for (let key in this.storage) {
    if (this.storage[key].includes(node)) {
      this.storage[key].splice(this.storage[key].indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  console.log(this.storage[fromNode]);
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (let i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      this.storage[fromNode].splice(i, 1);
      break;
    }
  }
  for (let j = 0; j < this.storage[toNode].length; j++) {
    if (this.storage[toNode][j] === fromNode) {
      this.storage[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

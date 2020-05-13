var DoubledLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (list.head === null) {
      var newNode = new Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head.next === null) {
      var newNode = new Node(value);
      list.head.next = newNode;
      newNode.previous = list.head;
      list.tail = newNode;
    } else {
      var newNode = new Node(value);
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }
    return;
  };

  list.removeHead = function () {
    var removed = list.head;

    if (list.head) {
      list.head = list.head.next;
      if(list.head) {
        list.head.previous = null;
      } else {
        list.tail = null;
      }
      return removed.value;
    }
    return;
  };

  list.contains = function (target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.addToHead = function (value) {
    if (list.head === null) {
      var newNode = new Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else if (list.tail.previous === null) {
      var newNode = new Node(value);
      list.tail.previous = newNode;
      newNode.next = list.tail;
      list.head = newNode;
    } else {
      var newNode = new Node(value);
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
    return;
  };

  list.removeTail = function () {
    var removed;
    if (list.tail && list.tail.previous) {
      removed = list.tail;
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
      return removed.value;
    } else if (list.tail) {
      removed = list.tail;
      list.head = null;
      list.tail = null;
      return removed.value;
    }
    return removed;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

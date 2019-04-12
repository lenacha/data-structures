/*Bare Minimum Reqs:
.head property, a linkedListNode instance
.tail property, a linkedListNode instance
[x].addToTail() method, takes a value and adds it to the end of the list
[x].removeHead() method, removes the first node from the list and returns its value
[].contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
*/

//define a function that creates a node

//addToTail:
//define a function thats adds a value to the end of the list
//create a new node with value and with reference to next (another node)
//check if the list has any nodes, check if head is defined (not null)
//if head is null, set head equal to the value
//if head exists
//check value of head (null vs. exists)
//if head node equals to tail node
//assign reference from first node to next node
//assign reference from new last node to null (tail) (done by new Node()function)
//assign tail to last node
//if there are more than 1 nodes
//assign reference from tail node to new last node
//assign reference from new last node to null (tail)
//assign tail to last node

//remove head
//check if head exists
//if not, return null
//if yes, head reference = position 2 node
//reassign head to current head node.next


//contains
//output: boolean
//starting at head
//if head is null
//return false
//if head, iterate over list
//if node.value === target
//return true
//else
//return false


var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = new Node();
    newNode.value = value;
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head.next === null) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return;
  };

  list.removeHead = function () {
    var removed = list.head;
    list.head = list.head.next;
    return removed.value;
  };
  //last node has a link reference to null
  //head is not a node, but a reference to the first node
  //if empty, head reference is null

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

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

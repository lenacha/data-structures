describe("doubledlinkedList", function () {
  var doubledLinkedList;

  beforeEach(function () {
    doubledLinkedList = DoubledLinkedList();
  });

  it("should have a head and tail", function () {
    expect(doubledLinkedList).to.have.property("head");
    expect(doubledLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function () {
    expect(doubledLinkedList.addToTail).to.be.a("function");
    expect(doubledLinkedList.removeHead).to.be.a("function");
    expect(doubledLinkedList.contains).to.be.a("function");
    expect(doubledLinkedList.addToHead).to.be.a("function");
    expect(doubledLinkedList.removeTail).to.be.a("function");

  });

  it("should designate a new tail or a new head when new nodes are added", function () {
    doubledLinkedList.addToTail(4);
    expect(doubledLinkedList.tail.value).to.equal(4);
    doubledLinkedList.addToTail(5);
    expect(doubledLinkedList.tail.value).to.equal(5);
    doubledLinkedList.addToHead(1);
    expect(doubledLinkedList.head.value).to.equal(1);
    doubledLinkedList.addToHead(2);
    expect(doubledLinkedList.head.value).to.equal(2);
  });

  it("should remove the head from the list when removeHead is called", function () {
    doubledLinkedList.addToTail(4);
    doubledLinkedList.addToTail(5);
    expect(doubledLinkedList.head.value).to.equal(4);
    doubledLinkedList.removeHead();
    expect(doubledLinkedList.head.value).to.equal(5);
  });

  it("should remove the tail from the list when removeTail is called", function () {
    doubledLinkedList.addToHead(1);
    doubledLinkedList.addToHead(2);
    expect(doubledLinkedList.tail.value).to.equal(1);
    expect(doubledLinkedList.tail.previous.value).to.equal(2);
    doubledLinkedList.removeTail();
    expect(doubledLinkedList.tail.value).to.equal(2);
  });

  it("should return the value of the former head when removeHead is called", function () {
    doubledLinkedList.addToTail(4);
    expect(doubledLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function () {
    doubledLinkedList.addToTail(4);
    doubledLinkedList.addToTail(5);
    expect(doubledLinkedList.contains(4)).to.equal(true);
    expect(doubledLinkedList.contains(5)).to.equal(true);
    expect(doubledLinkedList.contains(6)).to.equal(false);
  });

  it("should not contain a value that was removed", function () {
    doubledLinkedList.addToTail(4);
    doubledLinkedList.addToTail(5);
    doubledLinkedList.removeHead();
    expect(doubledLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doubledLinkedList
  it("should return null value for head and tail if list is empty after addToTail and removeTail are called", function () {
    doubledLinkedList.addToTail(4);
    doubledLinkedList.addToTail(5);
    expect(doubledLinkedList.head.value).to.equal(4);
    expect(doubledLinkedList.tail.value).to.equal(5);    
    doubledLinkedList.removeTail();
    doubledLinkedList.removeTail();
    expect(doubledLinkedList.head).to.equal(null);
    expect(doubledLinkedList.tail).to.equal(null);
  });


  it("should return null value for head if list is empty after addToHead and removeHead are called", function () {
    doubledLinkedList.addToHead(4);
    doubledLinkedList.addToHead(5);
    expect(doubledLinkedList.head.value).to.equal(5);
    expect(doubledLinkedList.tail.value).to.equal(4); 
    doubledLinkedList.removeHead();
    doubledLinkedList.removeHead();
    expect(doubledLinkedList.head).to.equal(null);
    expect(doubledLinkedList.tail).to.equal(null);
  });

  it("should return null value for head if list is empty after addToTail and removeHead are called", function () {
    doubledLinkedList.addToTail(4);
    doubledLinkedList.addToTail(5);
    expect(doubledLinkedList.head.value).to.equal(4);
    expect(doubledLinkedList.tail.value).to.equal(5); 
    doubledLinkedList.removeHead();
    doubledLinkedList.removeHead();
    expect(doubledLinkedList.head).to.equal(null);
    expect(doubledLinkedList.tail).to.equal(null);
  });

  it("should return null value for head if list is empty after addToHead and removeTail are called", function () {
    doubledLinkedList.addToHead(4);
    doubledLinkedList.addToHead(5);
    expect(doubledLinkedList.head.value).to.equal(5);
    expect(doubledLinkedList.tail.value).to.equal(4); 
    doubledLinkedList.removeTail();
    doubledLinkedList.removeTail();
    expect(doubledLinkedList.head).to.equal(null);
    expect(doubledLinkedList.tail).to.equal(null);
  });
});

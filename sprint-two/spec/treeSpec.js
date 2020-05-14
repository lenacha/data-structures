describe('tree', function () {
  var tree;

  beforeEach(function () {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function () {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function () {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function () {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function () {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should be able to read parent from a tree\'s child", function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it("should be able to remove parent from the node and remove node from parent\'s children", function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].children[0].addChild(7);
    expect(tree.children[0].children[0].children[0].parent.value).to.equal(6);
    var child = tree.children[0].children[0].children[0];
    tree.children[0].children[0].children[0].removeFromParent();
    expect(child.value).to.equal(7);
    expect(child.parent).to.equal(null);
    expect(tree.children[0].children[0].children.includes(child)).to.equal(false);
  });

  it('should correctly detect nested children', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  it('should expect no children for new tree', function () {
    tree.addChild(5);
    expect(tree.children[0].children).to.eql([]);
  });

  it("should correctly traverse all the nodes", function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.children[0].addChild(8);
    tree.children[1].addChild(9);
    var result = [];
    tree.traverse((value) => {
      if(!Number.isNaN(value)) {
        value += 1;
        result.push(value);
      }
      return value;
    })

    expect(tree.contains(10)).to.equal(true);
    expect(JSON.stringify(result)).to.equal(JSON.stringify([9, 6, 10, 7, 8]));
  });
});

var Nightmare = require('nightmare');
var expect = require('chai').expect; 
var server = require("./server");
console.log(server.port);

describe('loadBoxDiv', function() {
  it('should create a div to format the page', function() {
    expect(loadBoxDiv).to.equal($("<div class='loader'>"));
  });
});

describe('newDiv1', function() {
  it('should create a new div to display truckload details', function() {
    expect(newDiv).to.equal(loadBoxDiv.prepend(".loadbox"));
  });

  it("should throw when no div is created", function() {
    expect(function() {
      newDiv(loadBoxDiv);
    }).to.throw(Error);
  });
});

describe('newDiv2', function() {
  it('should create a new div to display truckload details', function() {
    expect(server).to.equal();
  });

  it("should throw when no div is created", function() {
    expect(function() {
      newDiv(loadBoxDiv);
    }).to.throw(Error);
  });
});

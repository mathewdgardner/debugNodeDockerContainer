var expect = require('chai').expect;

describe('should attach debugger within docker container', function() {
  it('should pass', function() {
    var temp = 1337;
    console.log('hello test');
    expect(2 + 2).to.equal(4);
  });
});

const assert = require('chai').assert;

describe('retries', function() {
    // Retry all tests in this suite up to 4 times
    this.retries(4);
    console.log(`go a head repeat`)
  
    beforeEach(function() {
      
    });
  
    it('should succeed on the 3rd try', function() {
      // Specify this test to only retry up to 2 times
      this.retries(2);
      console.log(`go a head repeat`)
      assert.equal(2,1);
    });
  });
var greaterthan = require('../assets/greaterthan.js');
var chai = require('chai');
var expect = chai.expect;

describe('greaterthan()', function() {
    context('when  1 and 2 are evaluated', function() {
      it('returns false ', function() {
        var answer = greaterthan(1, 2);
        expect(answer).to.equal(false);
      });
    });
  });


//Write a function called sum that takes two parameters
//and returns the sum of those 2 numbers.

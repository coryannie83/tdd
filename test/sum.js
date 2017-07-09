var add = require('../assets/sum.js');
var chai = require('chai');
var expect = chai.expect;

describe('sum()', function() {
    context('when  1 and 2 are added', function() {
      it('returns 3 ', function() {
        var answer = add(1, 2);
        expect(answer).to.equal(3);
      });
    });
  });


//Write a function called sum that takes two parameters
//and returns the sum of those 2 numbers.

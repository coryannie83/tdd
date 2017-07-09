var counter = require('../assets/cherokee.js');
var chai = require('chai');
var expect = chai.expect;

describe('count()', function() {
    context('for a given dollar amount', function() {
      it('list number of 20 10 5 and 1 bills', function() {
        var answer = counter(77);
        expect(answer).to.equal([3, 1, 1, 2]);
      });
    });
  });

//i am getting a funky naN error. assume it has to
//do with array? I tried contains and it didn't work.

// 1) count() for a given dollar amount list number of 20 10 5 and 1 bills:
//     AssertionError: expected NaN to equal [ 3, 1, 1, 2 ]
//      at Context.<anonymous> (test/counter.js:9:27)

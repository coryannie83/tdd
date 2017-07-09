var average = require('../assets/average.js');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');


describe('average()', function() {
    context('when parameters are set to (1, 5, 9)', function() {
      it('function will return 5', function() {
        var answer = average([1, 5, 9]);
        expect(answer).to.equal(5);
      });
    });
  });

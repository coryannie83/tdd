var increase = require('../assets/cherokee.js');
var chai = require('chai');
var expect = chai.expect;

describe('increase()', function() {
    context('when parameters are set to (100, .22, 5)', function() {
      it('', function() {

        var answer = increase(100, .22, 5);
        expect(answer).to.equal(210);
      });
    });
  });

var longestword = require('../assets/longestword.js');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');

describe('longestword()', function() {
    context(' array of words', function() {
      it('returns longest word in array ', function() {
        var answer = longestword('what a lovely day to be coding away and drinking java');
        expect(answer).to.equal('drinking');
      });
    });
  });

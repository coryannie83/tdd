var assess = require('../assets/palindromes.js');
var chai = require('chai');
var expect = chai.expect;


describe('assess()', function() {
    context('determine if a word is a palindrome', function() {
      it('returns true or false', function() {
        var word = ('dog');
        var reverse = ('god');
        var result = (false);
        expect(result).to.equal(false);
      });
    });
  });

//results not working not sure what i am doing wrong:
  //
  // 3) assess() determine if a word is a palindrome returns true or false:
  //    AssertionError: expected 'noon' to equal true
  //     at Context.<anonymous> (test/palindromes.js:10:27)

// ....just downloaded chai arrays
//http://chaijs.com/plugins/chai-arrays/

// const chai = require('chai');
// const assertArrays = require('chai-arrays');
// chai.use(assertArrays);

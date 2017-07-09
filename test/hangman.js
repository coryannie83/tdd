var hangman = require('../assets/hangman.js');
var chai = require('chai');
var expect = chai.expect;


describe('hangman()', function() {
    context('count num times letter in word', function() {
      it('returns a number if letter in word', function() {
        var answer = hangman('Yoda', 'd');
        expect(answer).to.equal(1);
      });
    });
  });

//having issues with test results. not sure what to do to fix

// 2) hangman() count num times letter in word returns a number if letter in word:
//     TypeError: hangman is not a function
//      at Context.<anonymous> (test/hangman.js:9:22)

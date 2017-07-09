var getMatch = require('../assets/containsvowel.js');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');

describe('getMatch()', function() {
    context(' array and word are compared', function() {
      it('returns true if vowel present ', function() {
        var answer = getMatch(["y","o","d","a"], ["a","e","i","o","u"]);
        expect(answer).to.equal(["o","a"]);
      });
    });
  });

//  Struggling with this one...here's what i am getting in console
//1) getMatch()  array and word are compared returns true if vowel present :

      // AssertionError: expected [] to equal [ 'o', 'a' ]
      // + expected - actual
      //
      // -[]
      // +[
      // +  "o"
      // +  "a"
      // +]
      //
      // at Context.<anonymous> (test/containsvowel.js:10:27)

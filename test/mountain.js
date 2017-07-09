var tallestMountain = require('../assets/mountain.js');
var chai = require('chai');
var expect = chai.expect;

describe('tallestMountain()', function() {
    context('when mount heights are [1,2,3]', function() {
      it('returns 3 as highest mountain', function() {

        var mountain = tallestMountain([1,2,3]);
        expect(mountain).to.equal(3);
      });
    });
  });

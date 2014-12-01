'use strict';

var expect = require('chai').expect;
var mmm = require('../lib/mean_median_mode.js');

describe('Mean', function() {
  it('gets an accurate mean', function() {
    expect(mmm.mean([2,4,6])).to.eql(4);
  });
  it('gets an accurate mean for when negative numbers are included', function(){
    expect(mmm.mean([8,-4,5])).to.eql(3);
  })
});

describe('Median', function() {
  it('gets an accurate median for odd number of sorted entries', function() {
    expect(mmm.median([4,5,6])).to.eql(5);
  });
  it('gets an accurate median for even number of sorted entries', function() {
    expect(mmm.median([4,5,6,7])).to.eql(5.5);
  });
  it('gets an accurate median for odd number of unsorted entries', function() {
    expect(mmm.median([2,7,4])).to.eql(4);
  });
  it('gets an accurate median for even number of unsorted entries', function() {
    expect(mmm.median([2,5,4,1])).to.eql(3);
  });

});

describe('Mode', function() {
  it('gets an accurate mode', function() {
    expect(mmm.mode([5,5,6,7])).to.eql(5);
  });

  it('gets an accurate mode when all values are unique', function(){
    expect(mmm.mode([5, 3,8,4,7,6])).to.eql([3,4,5,6,7,8]);
  })

  it('gets an accurate mode array when for unsorted bimodal values', function(){
    expect(mmm.mode([5,2,5,0,7,2])).to.eql([2,5]);
  })

  it('produces array for > 2 modes', function(){
    expect(mmm.mode([5,0,2,5,0,2,7,0,5,7,2,0,5,2])).to.eql([0,2,5]);
  })
})

// write code that takes edge cases into account



function increase(startpop, rate, weeks){
  this.startpop = startpop;
  this.rate = rate;
  this.weeks = weeks;
  this.increaseperweek = parseInt(startpop * rate);

  var total = parseInt((this.increaseperweek *(weeks)) + startpop);
  return total;

}

module.exports = increase;

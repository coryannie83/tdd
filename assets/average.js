function average(numberArray){
  this.numberArray = [];
  var total = 0;
  for(var i = 0; i < numberArray.length; i++) {
      total += numberArray[i];
  }
  var average = (total / numberArray.length);
  return average;

}

module.exports = average;

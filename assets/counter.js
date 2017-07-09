
function counter(amount){

  this.amount =77
  var twenty = 20;
  var ten = 10;
  var five = 5;
  var one = 1;

  var twentycount = parseInt(amount / twenty); //3
  var twentiesleftover = parseInt(amount % twenty); //17
  var tenscount = parseInt(twentiesleftover/ten);  //1
  var tensleftover = parseInt(twentiesleftover % ten); //7
  var fivescount = parseInt(tensleftover/five); //1
  var fivesleftover = parseInt(tensleftover % five); //2
  var onescount = parseInt(fivesleftover/one); //2
  var countArray = [twentycount, tenscount, fivescount, onescount];

  return countArray;


}

module.exports = counter;

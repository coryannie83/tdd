// Create a variable called word that stores a word we want to test as a palindrome.
// Write some code that prints out "true" if word is a palindrome, or "false" if its not.

function assess(word){
  this.word = word;
  var reverse = word.reverse();
  var result =  (word == reverse) ? "true":"false";
  return result;
}
//module.exports = assess;

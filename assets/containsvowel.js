

function getMatch(word, array) {
  var array = [];
  var word = [];
  var matches = [];

    for ( var i = 0; i < word.length; i++ ) {
        for ( var e = 0; e < array.length; e++ ) {
            if ( word[i] === array[e] ) matches.push( word[i] );
        }
    }
    return matches;
}




module.exports = getMatch;

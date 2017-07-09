//uses a substring

function hangman(word, letter) {
  return word.split(letter).length -1;
};

module.eports = hangman;

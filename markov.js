/** Textual markov chain generator. */

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    const chains = {};

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = (this.words[i + 1]) ? this.words[i + 1] : null; // || null

      if (Object.keys(chains).includes(word)) {
        chains[word].push(nextWord);
      } else {
        chains[word] = [nextWord];
      }
    }
    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    // - start at the first word in the input text

    // - find a random word from the following-words of that
    let currentWord = this.words[0];
    const answer = [];

    while (currentWord !== null) {
      answer.push(currentWord);
      const potentialWords = this.chains[currentWord];
      currentWord = getRandomChoice(potentialWords);
    }
    return answer.join(' ');
    // - repeat until reaching the terminal null
  }
}


/**
 * Given an array, choose random value and return it to user
 */
function getRandomChoice(arr) {
  return arr.at(arr.length * Math.random());
}

export { MarkovMachine };
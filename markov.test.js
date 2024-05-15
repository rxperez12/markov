import { describe, test, expect, beforeEach } from "vitest";
import { MarkovMachine } from "./markov.js";



describe("test markov chains", function () {
  let machine1;
  let machine2;
  beforeEach(function () {
    machine1 = new MarkovMachine('The cat in the hat.'); //have a couple of words that repeat.
    machine2 = new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.");
  });
  //The cat is a hat

  test("test MarkovMachine .getChains", function () { // split the two machines into different test function
    const chains = machine1.getChains();
    const chainAnswer = {
      "The": ["cat"],
      "cat": ["in"],
      "in": ["the"],
      "the": ["hat."],
      "hat.": [null],
    };
    const chainAnswer2 = {
      The: ['cat', 'cat', 'hat'],
      cat: ['is', 'is'],
      is: ['in', 'the', 'a'],
      in: ['the'],
      the: ['hat.', 'cat.'],
      'hat.': ['The'],
      'cat.': ['The', null],
      hat: ['is'],
      a: ['cat.']
    };
    // expect(chains["The"]).toEqual(["cat"]);
    // expect(chains['cat']).toEqual(['in']);
    // expect(chains['in']).toEqual(['the']);
    // expect(chains['the']).toEqual(['hat.']);
    // expect(chains['hat.']).toEqual([null]);
    expect(chains).toEqual(chainAnswer);
    expect(machine2.chains).toEqual(chainAnswer2);

  });

  test("test MarkovMachine .getText", function () {
    const text1 = machine1.getText();
    const text2 = machine2.getText();
    expect(text1).toEqual('The cat in the hat.');
    expect(text2).toContain('The');
    expect(text2.slice(0, 3)).toEqual('The');
    if (text2.includes('cat')) {
      expect(text2).toContain('is');
    }

  });
});



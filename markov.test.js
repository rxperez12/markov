import { describe, test, expect, beforeEach } from "vitest";
import { MarkovMachine } from "./markov.js";



describe("test markov chains", function () {
  let machine;
  beforeEach(function () {
    machine = new MarkovMachine('The cat in the hat.');
  });

  test("test MarkovMaching .getChains", function () {
    const chains = machine.getChains();
    const chainAnswer = {
      "The": ["cat"],
      "cat": ["in"],
      "in": ["the"],
      "the": ["hat."],
      "hat.": [null],
    };
    expect(chains["The"]).toEqual(["cat"]);
    expect(chains['cat']).toEqual(['in']);
    expect(chains['in']).toEqual(['the']);
    expect(chains['the']).toEqual(['hat.']);
    expect(chains['hat.']).toEqual([null]);
    expect(chains).toEqual(chainAnswer);

  });

});
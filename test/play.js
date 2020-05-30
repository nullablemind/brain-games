const { describe } = require('riteway');
const play = require('../src/play');

describe('play() - won case', async (assert) => {
  play({
    remainProblems: 2,
    generateProblem(remainProblems) {
      assert({
        given: 'generateProblem(): remainProblems',
        should: 'be one of',
        actual: [1, 2].includes(remainProblems),
        expected: true,
      });
      if (remainProblems === 2) {
        return { description: 'problem 1', solution: 'right answer 1' };
      }
      if (remainProblems === 1) {
        return { description: 'problem 2', solution: 'right answer 2' };
      }
      return { description: 'error desc', solution: 'error solution' };
    },
    getAnswer(description) {
      assert({
        given: 'getAnswer(): problem description',
        should: 'be one of',
        actual: ['problem 1', 'problem 2'].includes(description),
        expected: true,
      });

      if (description === 'problem 1') {
        return 'right answer 1';
      }
      if (description === 'problem 2') {
        return 'right answer 2';
      }
      return 'error else';
    },
    onCorrect(solution) {
      assert({
        given: 'onCorrect(): solution',
        should: 'be one of',
        actual: ['right answer 1', 'right answer 2'].includes(solution),
        expected: true,
      });
    },
    onWrong() {
      assert({
        given: 'onWrong():',
        should: 'not be called',
        actual: true,
        expected: false,
      });
    },
    onWon() {
      assert({
        given: 'onWon():',
        should: 'be called',
        actual: true,
        expected: true,
      });
    },
    onLost() {
      assert({
        given: 'onLost():',
        should: 'not be called',
        actual: true,
        expected: false,
      });
    },
  });
});


describe('play() - lost case', async (assert) => {
  play({
    remainProblems: 2,
    generateProblem(remainProblems) {
      assert({
        given: 'generateProblem(): remainProblems',
        should: 'be one of',
        actual: [1, 2].includes(remainProblems),
        expected: true,
      });
      if (remainProblems === 2) {
        return { description: 'problem 1', solution: 'right answer 1' };
      }
      if (remainProblems === 1) {
        return { description: 'problem 2', solution: 'right answer 2' };
      }
      return { description: 'error desc', solution: 'error solution' };
    },
    getAnswer(description) {
      assert({
        given: 'getAnswer(): problem description',
        should: 'be one of',
        actual: ['problem 1', 'problem 2'].includes(description),
        expected: true,
      });

      if (description === 'problem 1') {
        return 'right answer 1';
      }
      if (description === 'problem 2') {
        return 'wrong answer 2';
      }
      return 'error else';
    },
    onCorrect(solution) {
      assert({
        given: 'onCorrect(): solution',
        should: 'be called once',
        actual: solution,
        expected: 'right answer 1',
      });
    },
    onWrong() {
      assert({
        given: 'onWrong():',
        should: 'be called once',
        actual: true,
        expected: true,
      });
    },
    onWon() {
      assert({
        given: 'onWon():',
        should: 'not be called',
        actual: true,
        expected: false,
      });
    },
    onLost() {
      assert({
        given: 'onLost():',
        should: 'be called once',
        actual: true,
        expected: true,
      });
    },
  });
});

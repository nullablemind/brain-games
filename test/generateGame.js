const { describe } = require('riteway');
const generateGame = require('../src/generateGame');

describe('generateGame()', async (assert) => {
  const desc = 'Game description';
  const question = { desc: 'problem', solution: 'answer' };
  const catridge = {
    desc,
    generator: () => question,
  };

  const gameWithTwoQuestions = {
    desc,
    problems: [question, question],
  };

  assert({
    given: 'catridge and two amount of question',
    should: 'return game',
    actual: generateGame(catridge, 2),
    expected: gameWithTwoQuestions,
  });

  const gameWithDefaultConfig = {
    desc,
    problems: [question, question, question],
  };

  assert({
    given: 'catridge and default 3 problems',
    should: 'return game',
    actual: generateGame(catridge),
    expected: gameWithDefaultConfig,
  });
});

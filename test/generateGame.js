const { describe } = require('riteway');
const generateGame = require('../src/generateGame');

describe('generateGame()', async (assert) => {
  const description = 'Game description';
  const problem = { description: 'problem description', solution: 'answer' };
  const catridge = {
    description,
    generator: () => problem,
  };

  const gameWithTwoQuestions = {
    description,
    problems: [problem, problem],
  };

  assert({
    given: 'catridge and two amount of problem',
    should: 'return game',
    actual: generateGame(catridge, 2),
    expected: gameWithTwoQuestions,
  });

  const gameWithDefaultConfig = {
    description,
    problems: [problem, problem, problem],
  };

  assert({
    given: 'catridge and default 3 problems',
    should: 'return game',
    actual: generateGame(catridge),
    expected: gameWithDefaultConfig,
  });
});

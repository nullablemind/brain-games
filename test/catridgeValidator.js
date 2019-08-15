const { describe, Try } = require('riteway');
const catridgeValidator = require('../src/catridgeValidator');

describe('catridgeValidator()', async (assert) => {
  const desc = 'catridge description';
  const question = { problem: 'problem description', solution: 'solution' };
  const questionWithoutProblem = { solution: 'solution' };
  const questionWithoutSolution = { problem: 'problem description' };
  const generator = () => question;
  const emptyGenerator = () => undefined;

  assert({
    given: 'catridge',
    should: 'return is valid',
    actual: catridgeValidator({ desc, generator }),
    expected: true,
  });

  assert({
    given: 'catridge without desc',
    should: 'throw',
    actual: Try(catridgeValidator, { generator }),
    expected: new Error('desc must be define'),
  });

  assert({
    given: 'catridge without generator',
    should: 'throw',
    actual: Try(catridgeValidator, { desc }),
    expected: new Error('generator must be define'),
  });

  assert({
    given: 'catridge with empty generator',
    should: 'throw',
    actual: Try(catridgeValidator, { desc, generator: emptyGenerator }),
    expected: new Error('generator must return { problem: \'problem description\', solution: \'solution\' }'),
  });

  assert({
    given: 'catridge with generator without problem',
    should: 'throw',
    actual: Try(catridgeValidator, { desc, generator: () => questionWithoutProblem }),
    expected: new Error('generator must return question with property problem'),
  });

  assert({
    given: 'catridge with generator without solution',
    should: 'throw',
    actual: Try(catridgeValidator, { desc, generator: () => questionWithoutSolution }),
    expected: new Error('generator must return question with property solution'),
  });
});

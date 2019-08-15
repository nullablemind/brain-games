const { describe, Try } = require('riteway');
const catridgeValidator = require('../src/catridgeValidator');

describe('catridgeValidator()', async (assert) => {
  const description = 'catridge description';
  const problem = { description: 'problem description', solution: 'solution' };
  const problemWithoutDescription = { solution: 'solution' };
  const problemWithoutSolution = { problem: 'problem description' };
  const generator = () => problem;
  const emptyGenerator = () => undefined;

  assert({
    given: 'catridge',
    should: 'return is valid',
    actual: catridgeValidator({ description, generator }),
    expected: true,
  });

  assert({
    given: 'catridge without description',
    should: 'throw',
    actual: Try(catridgeValidator, { generator }),
    expected: new Error('description must be define'),
  });

  assert({
    given: 'catridge without generator',
    should: 'throw',
    actual: Try(catridgeValidator, { description }),
    expected: new Error('generator must be define'),
  });

  assert({
    given: 'catridge with empty generator',
    should: 'throw',
    actual: Try(catridgeValidator, { description, generator: emptyGenerator }),
    expected: new Error('generator must return { problem: \'problem description\', solution: \'solution\' }'),
  });

  assert({
    given: 'catridge with generator without problem',
    should: 'throw',
    actual: Try(catridgeValidator, { description, generator: () => problemWithoutDescription }),
    expected: new Error('generator must return problem with property problem'),
  });

  assert({
    given: 'catridge with generator without solution',
    should: 'throw',
    actual: Try(catridgeValidator, { description, generator: () => problemWithoutSolution }),
    expected: new Error('generator must return problem with property solution'),
  });
});

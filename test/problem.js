const { describe } = require('riteway');
const makeProblem = require('../src/problem');

describe('makeProblem()', async (assert) => {
  const description = 'problem description';
  const solution = 'secret';
  const problem = { description, solution };

  assert({
    given: 'description and solution',
    should: 'return problem',
    actual: makeProblem(problem),
    expected: problem,
  });

  assert({
    given: 'description and solution as number',
    should: 'return problem with solution as string',
    actual: makeProblem({ description, solution: 123 }),
    expected: { description, solution: '123' },
  });
});

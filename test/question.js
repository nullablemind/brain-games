const { describe } = require('riteway');
const makeQuestion = require('../src/question');

describe('makeQuestion()', async (assert) => {
  const problem = 'question description';
  const solution = 'secret';
  const question = { problem, solution };

  assert({
    given: 'problem and solution',
    should: 'return question',
    actual: makeQuestion(question),
    expected: question,
  });

  assert({
    given: 'problem and solution as number',
    should: 'return question with solution as string',
    actual: makeQuestion({ problem, solution: 123 }),
    expected: { problem, solution: '123' },
  });
});

const { describe } = require('riteway');
const makeQuestion = require('../src/question');

describe('makeQuestion()', async (assert) => {
  const desc = 'question description';
  const solution = 'secret';
  const question = { desc, solution };

  assert({
    given: 'desc and solution',
    should: 'return question',
    actual: makeQuestion(question),
    expected: question,
  });

  assert({
    given: 'desc and solution as number',
    should: 'return question with solution as string',
    actual: makeQuestion({ desc, solution: 123 }),
    expected: { desc, solution: '123' },
  });
});

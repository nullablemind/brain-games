const { describe } = require('riteway');
const { createTestPlatform } = require('../src');
const { catcherIO, speak, ask } = require('./helper');

describe('integration test', async (assert) => {
  const decoratedPlatform = catcherIO(createTestPlatform, { speak, ask });
  const playerWon = [
    speak('Welcome to the Brain Games!\n'),
    speak('Game description\n\n'),
    ask('May I have your name, please? '),
    speak('Hello, Petya!\n\n'),
    speak('Question: problem\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Question: problem\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Question: problem\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Congratulations, Petya!\n'),
  ];

  const answers = ['Petya', 'right answer', 'right answer', 'right answer'];

  const gameTemplate = {
    description: 'Game description',
    generator: () => ({ description: 'problem', solution: 'right answer' }),
  };
  assert({
    given: 'config core',
    should: 'return win scenario',
    actual: decoratedPlatform(gameTemplate, answers),
    expected: playerWon,
  });
});

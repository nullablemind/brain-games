const { describe } = require('riteway');
const core = require('../src/core');
const { catcherIO, speak, ask } = require('./helper');

describe('core()', async (assert) => {
  const decoratedCore = catcherIO(core, { speak, ask });
  const playerWon = [
    speak('Welcome to the Brain Games!\n'),
    speak('Game description 1\n\n'),
    ask('May I have your name, please? '),
    speak('Hello, Petya!\n\n'),
    speak('Question: problem 1\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Question: problem 2\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Question: problem 3\n'),
    ask('Your answer: '),
    speak('Correct!\n'),
    speak('Congratulations, Petya!'),
  ];

  const answers = ['Petya', 'right answer 1', 'right answer 2', 'right answer 3'];
  const game1 = {
    description: 'Game description 1',
    problems: [
      { description: 'problem 1', solution: 'right answer 1' },
      { description: 'problem 2', solution: 'right answer 2' },
      { description: 'problem 3', solution: 'right answer 3' },
    ],
  };
  assert({
    given: 'config core',
    should: 'return win scenario',
    actual: decoratedCore(game1, answers),
    expected: playerWon,
  });

  const playerLost = [
    speak('Welcome to the Brain Games!\n'),
    speak('Game description 2\n\n'),
    ask('May I have your name, please? '),
    speak('Hello, Vasya!\n\n'),
    speak('Question: problem 1\n'),
    ask('Your answer: '),
    speak('"wrong answer" is wrong answer ;(. Correct answer was "right answer 1".\n'),
    speak("Let's try again, Vasya!"),
  ];

  const game2 = {
    description: 'Game description 2',
    problems: [
      { description: 'problem 1', solution: 'right answer 1' },
      { description: 'problem 2', solution: 'right answer 2' },
      { description: 'problem 3', solution: 'right answer 3' },
    ],
  };

  assert({
    given: 'config core',
    should: 'return lost scenario',
    actual: decoratedCore(game2, ['Vasya', 'wrong answer']),
    expected: playerLost,
  });
});

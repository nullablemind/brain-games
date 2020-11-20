const { describe } = require('riteway');
const game = require('../src');

const speakLog = (text) => ({ method: 'speak', text });
const askLog = (question) => ({ method: 'ask', question });
const problem = (number) => ({ description: `problem desc ${number}`, solution: `prob solution ${number}` });
const catridge = {
  gameDescription: 'game desc',
  generateProblem: problem,
};
const playerName = 'Mike';

const logger = (getAnswer) => {
  const log = [];

  return {
    io: {
      speak: (text) => log.push(speakLog(text)),
      ask: (question, problemNumber) => {
        log.push(askLog(question));

        return getAnswer(question, problemNumber);
      },
    },
    getLog: () => [...log],
  };
};

describe('game() - won case', async (assert) => {
  const { io, getLog } = logger((question, problemNumber) => {
    if (question === 'May I have your name, please? ') {
      return playerName;
    }

    return problem(problemNumber).solution;
  });

  game(catridge, io);

  assert({
    given: 'all right answers',
    should: 'won',
    actual: getLog(),
    expected: [
      speakLog('Welcome to the Brain Games!\n'),
      speakLog(`${catridge.gameDescription}\n\n`),

      askLog('May I have your name, please? '),
      speakLog(`Hello, ${playerName}!\n\n`),

      ...[1, 2, 3].reduce((acc, number) => acc.concat([
        speakLog(`Question: ${problem(number).description}\n`),
        askLog('Your answer: '),
        speakLog('Correct!\n\n'),
      ]), []),

      speakLog(`Congratulations, ${playerName}!\n`),
    ],
  });
});

describe('game() - lost case', async (assert) => {
  const wrongPlayerAnswer = 'wrong answer';

  const { io, getLog } = logger((question, problemNumber) => {
    if (question === 'May I have your name, please? ') {
      return playerName;
    }
    if (problemNumber === 2) {
      return wrongPlayerAnswer;
    }

    return problem(problemNumber).solution;
  });

  game(catridge, io);

  const expected = [
    speakLog('Welcome to the Brain Games!\n'),
    speakLog(`${catridge.gameDescription}\n\n`),

    askLog('May I have your name, please? '),
    speakLog(`Hello, ${playerName}!\n\n`),

    speakLog(`Question: ${problem(1).description}\n`),
    askLog('Your answer: '),
    speakLog('Correct!\n\n'),

    speakLog(`Question: ${problem(2).description}\n`),
    askLog('Your answer: '),

    speakLog(`"${wrongPlayerAnswer}" is wrong answer ;(. Correct answer was "${problem(2).solution}".\n\n`),
    speakLog(`Let's try again, ${playerName}!\n`),
  ];

  assert({
    given: 'wrong answer',
    should: 'lost',
    actual: getLog(),
    expected,
  });
});

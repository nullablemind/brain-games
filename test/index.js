const { describe } = require('riteway');
const game = require('../src');

const speakLog = text => ({ method: 'speak', text });
const askLog = question => ({ method: 'ask', question });

describe('game() - won case', async (assert) => {
  const log = [];

  const problem = { description: 'prob desc', solution: 'prob solution' };
  const playerName = 'Mike';
  const catridge = {
    gameDescription: 'game desc',
    generateProblem: () => problem,
  };
  const speak = (text) => log.push({ method: 'speak', text });
  const ask = (question) => {
    log.push({ method: 'ask', question });
    if (question === 'May I have your name, please? ') {
      return playerName;
    }
    return problem.solution;
  };
  game(catridge, { speak, ask });

  const expected = [
    speakLog('Welcome to the Brain Games!\n'),
    speakLog(`${catridge.gameDescription}\n\n`),

    askLog('May I have your name, please? '),
    speakLog(`Hello, ${playerName}!\n\n`),

    speakLog(`Question: ${problem.description}\n`),
    askLog('Your answer: '),
    speakLog('Correct!\n\n'),

    speakLog(`Question: ${problem.description}\n`),
    askLog('Your answer: '),
    speakLog('Correct!\n\n'),

    speakLog(`Question: ${problem.description}\n`),
    askLog('Your answer: '),
    speakLog('Correct!\n\n'),

    speakLog(`Congratulations, ${playerName}!\n`),
  ];

  assert({
    given: 'game()',
    should: 'be right ordered methods call',
    actual: log,
    expected,
  });
});

describe('game() - lost case', async (assert) => {
  const log = [];

  const problem = { description: 'prob desc', solution: 'prob solution' };
  const playerName = 'Mike';
  const wrongPlayerAnswer = 'wrong answer';
  const catridge = {
    gameDescription: 'game desc',
    generateProblem: () => problem,
  };
  const speak = (text) => log.push({ method: 'speak', text });
  const ask = (question, problemNumber) => {
    log.push({ method: 'ask', question });
    if (question === 'May I have your name, please? ') {
      return playerName;
    }
    if (problemNumber === 2) {
      return wrongPlayerAnswer;
    }
    return problem.solution;
  };
  game(catridge, { speak, ask });

  const expected = [
    { method: 'speak', text: 'Welcome to the Brain Games!\n' },
    { method: 'speak', text: `${catridge.gameDescription}\n\n` },
    { method: 'ask', question: 'May I have your name, please? ' },
    { method: 'speak', text: `Hello, ${playerName}!\n\n` },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: 'Correct!\n\n' },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: `"${wrongPlayerAnswer}" is wrong answer ;(. Correct answer was "${problem.solution}".\n\n` },
    { method: 'speak', text: `Let's try again, ${playerName}!\n` },
  ];

  assert({
    given: 'game()',
    should: 'be right ordered methods call',
    actual: log,
    expected,
  });
});

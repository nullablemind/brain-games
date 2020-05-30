const { describe } = require('riteway');
const game = require('../src');

describe('game() - won case', async (assert) => {
  const log = [];

  const problem = { description: 'prob desc', solution: 'prob solution' };
  const playerName = 'Mike';
  const catridge = {
    describe: 'game desc',
    generator: () => problem,
  };
  const speak = text => log.push({ method: 'speak', text });
  const ask = (question) => {
    log.push({ method: 'ask', question });
    if (question === 'May I have your name, please? ') {
      return playerName;
    }
    return problem.solution;
  };
  game(catridge, { speak, ask });

  const expected = [
    { method: 'speak', text: 'Welcome to the Brain Games!\n' },
    { method: 'speak', text: `${catridge.description}\n\n` },
    { method: 'ask', question: 'May I have your name, please? ' },
    { method: 'speak', text: `Hello, ${playerName}!\n\n` },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: 'Correct!\n' },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: 'Correct!\n' },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: 'Correct!\n' },
    { method: 'speak', text: `Congratulations, ${playerName}!\n` },
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
    describe: 'game desc',
    generator: () => problem,
  };
  const speak = text => log.push({ method: 'speak', text });
  const ask = (question, remainProblems) => {
    log.push({ method: 'ask', question });
    if (question === 'May I have your name, please? ') {
      return playerName;
    }
    if (remainProblems === 2) {
      return wrongPlayerAnswer;
    }
    return problem.solution;
  };
  game(catridge, { speak, ask });

  const expected = [
    { method: 'speak', text: 'Welcome to the Brain Games!\n' },
    { method: 'speak', text: `${catridge.description}\n\n` },
    { method: 'ask', question: 'May I have your name, please? ' },
    { method: 'speak', text: `Hello, ${playerName}!\n\n` },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: 'Correct!\n' },
    { method: 'speak', text: `Question: ${problem.description}\n` },
    { method: 'ask', question: 'Your answer: ' },
    { method: 'speak', text: `"${wrongPlayerAnswer}" is wrong answer ;(. Correct answer was "${problem.solution}".\n` },
    { method: 'speak', text: `Let's try again, ${playerName}!\n` },
  ];

  assert({
    given: 'game()',
    should: 'be right ordered methods call',
    actual: log,
    expected,
  });
});

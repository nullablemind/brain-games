const readlineSync = require('readline-sync');
const play = require('./play');

const speak = msg => process.stdout.write(msg);
const ask = question => readlineSync.question(question);

module.exports = (catridge) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${catridge.description}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  play({
    generateProblem: catridge.generator,
    getAnswer(description) {
      speak(`Question: ${description}\n`);
      return ask('Your answer: ');
    },
    onCorrect() {
      speak('Correct!\n');
    },
    onWrong(playerAnswer, solution) {
      speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n`);
    },
    onWon() {
      speak(`Congratulations, ${playerName}!\n`);
    },
    onLost() {
      speak(`Let's try again, ${playerName}!\n`);
    },
  });
};

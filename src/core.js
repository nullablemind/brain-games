module.exports = ({ speak, ask }, { desc, problems }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${desc}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const isAllAnswersRight = problems.reduce((isLastAnswerWasRight, { question, solution }) => {
    if (!isLastAnswerWasRight) return false;

    speak(`Question: ${question}\n`);
    const playerAnswer = ask('Your answer: ');

    if (playerAnswer === solution) {
      speak('Correct!\n');
      return true;
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n`);
    return false;
  }, true);

  if (isAllAnswersRight) {
    speak('Congratulations, Petya! You win');
  } else {
    speak(`Let's try again, ${playerName}!`);
  }
};

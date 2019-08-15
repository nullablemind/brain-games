module.exports = ({ speak, ask }, { desc, problems }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${desc}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const isAllAnswersRight = problems.reduce((isLastAnswerWasRight, { question, rightAnswer }) => {
    if (!isLastAnswerWasRight) return false;

    speak(`Question: ${question}\n`);
    const playerAnswer = ask('Your answer: ');

    if (playerAnswer === rightAnswer) {
      speak('Correct!\n');
      return true;
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n`);
    return false;
  }, true);

  if (isAllAnswersRight) {
    speak('Congratulations, Petya! You win');
  } else {
    speak(`Let's try again, ${playerName}!`);
  }
};

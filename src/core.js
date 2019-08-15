module.exports = ({ speak, ask }, { desc, questions }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${desc}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const isAllAnswersRight = questions.reduce((isLastAnswerWasRight, { problem, solution }) => {
    if (!isLastAnswerWasRight) return false;

    speak(`Question: ${problem}\n`);
    const playerAnswer = ask('Your answer: ');

    if (playerAnswer === solution) {
      speak('Correct!\n');
      return true;
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n`);
    return false;
  }, true);

  if (isAllAnswersRight) {
    speak(`Congratulations, ${playerName}!`);
  } else {
    speak(`Let's try again, ${playerName}!`);
  }
};

module.exports = ({ speak, ask }) => ({ description: gameDesc, problems }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${gameDesc}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const isAllAnswersRight = problems.reduce((isLastAnswerWasRight, { description, solution }) => {
    if (!isLastAnswerWasRight) return false;

    speak(`Question: ${description}\n`);
    const playerAnswer = ask('Your answer: ');

    if (playerAnswer === solution) {
      speak('Correct!\n');
      return true;
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n`);
    return false;
  }, true);

  if (isAllAnswersRight) {
    speak(`Congratulations, ${playerName}!\n`);
  } else {
    speak(`Let's try again, ${playerName}!\n`);
  }
};

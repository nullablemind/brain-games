module.exports = ({ speak, ask }, { description: gameDesc, questions }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${gameDesc}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const isAllAnswersRight = questions.reduce((isLastAnswerWasRight, { description, solution }) => {
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
    speak(`Congratulations, ${playerName}!`);
  } else {
    speak(`Let's try again, ${playerName}!`);
  }
};

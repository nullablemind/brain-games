const nextLine = '\n';
const separator = '\n\n';

module.exports = ({ speak, ask, game: { desc, problems } }) => {
  speak(`Welcome to the Brain Games!${nextLine}`);
  speak(`${desc}${separator}`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!${separator}`);

  const isAllAnswersRight = problems.reduce((isLastAnswerWasRight, { question, rightAnswer }) => {
    if (!isLastAnswerWasRight) return false;

    speak(`Question: ${question}${nextLine}`);
    const playerAnswer = ask('Your answer: ');

    if (playerAnswer === rightAnswer) {
      speak(`Correct!${nextLine}`);
      return true;
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".${nextLine}`);
    return false;
  }, true);

  if (isAllAnswersRight) {
    speak('Congratulations, Petya! You win');
  } else {
    speak(`Let's try again, ${playerName}!`);
  }
};

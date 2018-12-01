import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

export default ({ write, read }) =>
  ({ description, generatorQuiz, attempts = 3 }) => {
    write('Welcome to the Brain Games!\n');
    write(`Quiz description: ${description}\n\n`);

    write('May I have your name? ');
    const playerName = read();
    write(`Hello, ${playerName}!\n\n`);

    createListOfQuiz(generatorQuiz, attempts).reduce((lastAnsweredCorrectly, quiz, index) => {
      if (lastAnsweredCorrectly === false) {
        return false;
      }

      write(`Question: ${quiz.question}\nYour answer: `);
      const playerAnswer = read();

      if (!isRightAnswer(quiz, playerAnswer)) {
        write(`\n"${playerAnswer}" is wrong answer ;(. Correct answer was "${quiz.solution}".\n`);
        write(`Let's try again, ${playerName}!\n`);
        return false;
      }

      write('Correct!\n\n');

      const attempt = index + 1;
      if (attempt === attempts) {
        write(`Congratulations, ${playerName}!\n`);
      }
      return true;
    }, null);
  };

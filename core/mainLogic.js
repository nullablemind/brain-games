import createListOfQuiz from './createListOfQuiz';

export default ({ write, read }) => ({ description, generatorQuiz, attempts = 3 }) => {
  const listOfQuiz = createListOfQuiz(generatorQuiz, attempts);

  write('Welcome to the Brain Games!\n');
  write(`Quiz description: ${description}\n\n`);

  write('May I have your name? ');
  const playerName = read();
  write(`Hello, ${playerName}!\n\n`);

  listOfQuiz.reduce((lastAnsweredCorrectly, { question, solution }, index) => {
    if (lastAnsweredCorrectly === false) {
      return false;
    }

    write(`Question: ${question}\nYour answer: `);
    const playerResponse = read();

    if (playerResponse !== solution) {
      write(`\n"${playerResponse}" is wrong answer ;(. Correct answer was "${solution}".\n`);
      write(`Let's try again, ${playerName}!`);
      return false;
    }

    write('Correct!\n\n');

    const attempt = index + 1;
    if (attempt === attempts) {
      write(`Congratulations, ${playerName}!\n`);
    }
    return true;
  }, true);
};

import createListOfQuiz from './createListOfQuiz';

export default ({ write, read }) => ({ description, generatorQuiz, attempts = 3 }) => {
  const listOfQuiz = createListOfQuiz(generatorQuiz, attempts);

  write('Welcome to the Brain Games!\n');
  write(`Quiz description: ${description}\n\n`);

  write('May I have your name? ');
  const playerName = read();
  write(`Hello, ${playerName}!\n\n`);

  for (let i = 1; i <= attempts; i++) {
    const { question, solution } = listOfQuiz[i - 1];

    write(`Question: ${question}\nYour answer: `);
    const playerResponse = read();

    if (playerResponse !== solution) {
      write(`\n"${playerResponse}" is wrong answer ;(. Correct answer was "${solution}".\n`);
      write(`Let's try again, ${playerName}!`);
      break;
    }

    write('Correct!\n\n');

    if (i === attempts) {
      write(`Congratulations, ${playerName}!\n`);
    }
  }
};

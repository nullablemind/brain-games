export default ({ response: write, request: read, description, listOfQuiz }) => {
  write('Welcome to the Brain Games!\n');
  write(`Quiz description: ${description}\n\n`);

  write('May I have your name? ');
  const playerName = read();
  write(`Hello, ${playerName}!\n\n`);

  const indexOfLastQuiz = listOfQuiz.length - 1;
  for (let i = 0; i < listOfQuiz.length; i++) {
    const { question, solution } = listOfQuiz[i];

    write(`Question: ${question}\nYour answer: `);
    const playerResponse = read();

    if (playerResponse !== solution) {
      write(`\n"${playerResponse}" is wrong answer ;(. Correct answer was "${solution}".\n`);
      write(`Let's try again, ${playerName}!`);
      break;
    }

    write('Correct!\n\n');

    if (i === indexOfLastQuiz) {
      write(`Congratulations, ${playerName}!\n`);
    }
  }
};

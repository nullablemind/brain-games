export default ({ response, request, description, listOfQuiz }) => {
  response('Welcome to the Brain Games!');
  response(`Quiz description: ${description}\n`);

  const playerName = request('May I have your name? ');
  response(`Hello, ${playerName}!\n`);

  const indexOfLastQuiz = listOfQuiz.length - 1;
  for (let i = 0; i < listOfQuiz.length; i++) {
    const { question, solution } = listOfQuiz[i];

    const playerResponse = request(`Question: ${question}\nYour answer: `);

    if (playerResponse !== solution) {
      response(`"${playerResponse}" is wrong answer ;(. Correct answer was "${solution}".\n`);
      response(`Let's try again, ${playerName}!`);
      break;
    }

    response('Correct!\n');

    if (i === indexOfLastQuiz) {
      response(`Congratulations, ${playerName}!`);
    }
  }
};

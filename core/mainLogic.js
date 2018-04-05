export default ({ response, request, description, listOfQuiz }) => {
  response('welcome');
  response('quizDescription', description);

  const playerName = request('playerNameRequest');
  response('greetingPlayer', playerName);

  const indexOfLastQuiz = listOfQuiz.length - 1;
  for (let i = 0; i < listOfQuiz.length; i++) {
    const { question, solution } = listOfQuiz[i];

    const playerResponse = request('quizQuestion', question);

    if (playerResponse !== solution) {
      response('wrongAnswer', playerResponse, solution);
      response('tryAgain', playerName);
      break;
    }

    response('correctAnswer');

    if (i === indexOfLastQuiz) {
      response('congratulateWithVictory', playerName);
    }
  }
};

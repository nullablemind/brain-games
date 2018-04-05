import createGamePlatform from '../core/mainLogic';

const playerName = 'brain';
const gameCardDescription = 'my description';
const listOfQuiz = [
  { question: 'question 1', solution: 'solution 1' },
  { question: 'question 2', solution: 'solution 2' },
  { question: 'question 3', solution: 'solution 3' },
];

const makeCounter = (number = 0) => () => number++; // eslint-disable-line

const checker = (funcCalls) => {
  const counter = makeCounter();
  return (...args) => expect(funcCalls[counter()]).toEqual(args);
};

describe('case victory', () => {
  const response = jest.fn();
  const request = jest.fn();

  const sendMsg = checker(response.mock.calls);
  const askMsg = checker(request.mock.calls);

  request
    .mockReturnValueOnce(playerName) // playerNameRequest
    .mockReturnValueOnce(listOfQuiz[0].solution) // quizQuestion 0
    .mockReturnValueOnce(listOfQuiz[1].solution) // quizQuestion 1
    .mockReturnValueOnce(listOfQuiz[2].solution) // quizQuestion 2
    .mockName('request mock');

  test('Victory game', () => {
    createGamePlatform({
      response,
      request,
      description: gameCardDescription,
      listOfQuiz,
    });

    sendMsg('welcome');
    sendMsg('quizDescription', gameCardDescription);

    askMsg('playerNameRequest');
    sendMsg('greetingPlayer', playerName);

    listOfQuiz.forEach((quiz) => {
      askMsg('quizQuestion', quiz.question);
      sendMsg('correctAnswer');
    });

    sendMsg('congratulateWithVictory', playerName);

    expect(response.mock.calls.length).toBe(7);
    expect(request.mock.calls.length).toBe(4);
  });
});

describe('case lose', () => {
  const response = jest.fn();
  const request = jest.fn();

  const sendMsg = checker(response.mock.calls);
  const askMsg = checker(request.mock.calls);

  const wrongPlayerAnswer = 'wrong answer';

  request
    .mockReturnValueOnce(playerName) // playerNameRequest
    .mockReturnValueOnce(listOfQuiz[0].solution) // quizQuestion 0
    .mockReturnValueOnce(wrongPlayerAnswer) // quizQuestion 1
    .mockReturnValueOnce(listOfQuiz[2].solution) // quizQuestion 2
    .mockName('request mock');

  test('Lose game', () => {
    createGamePlatform({
      response,
      request,
      description: gameCardDescription,
      listOfQuiz,
    });

    sendMsg('welcome');
    sendMsg('quizDescription', gameCardDescription);

    askMsg('playerNameRequest');
    sendMsg('greetingPlayer', playerName);

    askMsg('quizQuestion', listOfQuiz[0].question);
    sendMsg('correctAnswer');

    askMsg('quizQuestion', listOfQuiz[1].question);
    sendMsg('wrongAnswer', wrongPlayerAnswer, listOfQuiz[1].solution);

    sendMsg('tryAgain', playerName);

    expect(response.mock.calls.length).toBe(6);
    expect(request.mock.calls.length).toBe(3);
  });
});

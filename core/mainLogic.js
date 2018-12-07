import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

export default handlers => catridge => {
  const {
    onWelcome = () => {},
    onGetPlayerName = () => {},
    onNextQuestion = () => {},
    onWrongAnswer = () => {},
    onRightAnswer = () => {},
    onWinQuiz = () => {},
    onLoseQuiz = () => {},
  } = handlers;

  const {
    generatorQuiz,
    attempts = 3,
    description,
  } = catridge;

  onWelcome({ description });

  const playerName = onGetPlayerName();

  createListOfQuiz(generatorQuiz, attempts).reduce((lastAnsweredCorrectly, quiz, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    const answer = onNextQuestion(quiz);

    if (!isRightAnswer(quiz, answer)) {
      onWrongAnswer(quiz, answer);
      onLoseQuiz({ playerName });

      return false;
    }

    onRightAnswer(quiz);

    const attempt = index + 1;
    if (attempt === attempts) {
      onWinQuiz({ playerName });
    }
    return true;
  }, null);
};

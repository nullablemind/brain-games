import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

export default handlers => catridge => {
  const {
    onWelcome = () => {},
    onMeet = () => {},
    onShowProblem = () => {},
    onReplyToProblem = () => {},
    onWrongAnswer = () => {},
    onRightAnswer = () => {},
    onWonQuiz = () => {},
    onLoseQuiz = () => {},
  } = handlers;

  const {
    generatorQuiz,
    attempts = 3,
    description,
  } = catridge;

  onWelcome({ description });

  const playerName = onMeet();

  createListOfQuiz(generatorQuiz, attempts).reduce((lastAnsweredCorrectly, quiz, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    onShowProblem(quiz.question);
    const answer = onReplyToProblem();

    if (!isRightAnswer(quiz, answer)) {
      onWrongAnswer(quiz, answer);
      onLoseQuiz({ playerName });

      return false;
    }

    onRightAnswer(quiz);

    const attempt = index + 1;
    if (attempt === attempts) {
      onWonQuiz({ playerName });
    }
    return true;
  }, null);
};

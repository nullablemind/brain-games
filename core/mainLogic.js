import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

export default handlers => catridge => {
  const {
    onIntro = () => {},
    onMeet = () => {},
    onWelcomePlayer = () => {},
    onShowProblem = () => {},
    onReplyToProblem = () => {},
    onRightAnswer = () => {},
    onWrongAnswer = () => {},
    onWonQuiz = () => {},
    onLoseQuiz = () => {},
  } = handlers;

  const {
    generatorQuiz,
    attempts = 3,
  } = catridge;
  const problems = createListOfQuiz(generatorQuiz, attempts);

  onIntro(catridge.description);

  const playerName = onMeet();
  onWelcomePlayer(playerName);

  problems.reduce((lastAnsweredCorrectly, quiz, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    onShowProblem(quiz.question);
    const answer = onReplyToProblem();

    if (!isRightAnswer(quiz, answer)) {
      onWrongAnswer(answer, quiz.solution);
      onLoseQuiz(playerName);

      return false;
    }

    onRightAnswer();

    const attempt = index + 1;
    if (attempt === attempts) {
      onWonQuiz(playerName);
    }
    return true;
  }, null);
};

import { isEquals } from './lib';

export default ({ quizDescription, problems, handlers }) => {
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

  onIntro(quizDescription);

  const playerName = onMeet();
  onWelcomePlayer(playerName);

  const isWonQuiz = problems.reduce((lastAnswerWasRight, { solution, description }) => {
    if (!lastAnswerWasRight) return lastAnswerWasRight;

    onShowProblem(description);
    const playerAnswer = onReplyToProblem();

    const isRightAnswer = isEquals(playerAnswer, solution);

    isRightAnswer
      ? onRightAnswer(playerAnswer, solution)
      : onWrongAnswer(playerAnswer, solution);

    return isRightAnswer;
  }, true);

  isWonQuiz
    ? onWonQuiz(playerName)
    : onLoseQuiz(playerName);
};

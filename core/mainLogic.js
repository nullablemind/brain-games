import { generateProblems, isEquals } from './lib/problem';

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

  const problems = generateProblems(catridge);

  onIntro(catridge.description);

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

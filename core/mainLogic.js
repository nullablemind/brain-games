import { generateProblems, isRightAnswer } from './lib/problem';

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

    isRightAnswer(playerAnswer, solution)
      ? onRightAnswer()
      : onWrongAnswer(playerAnswer, solution);

    return isRightAnswer(playerAnswer, solution);
  }, null);

  isWonQuiz
    ? onWonQuiz(playerName)
    : onLoseQuiz(playerName);
};

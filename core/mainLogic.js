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

  const isWonQuiz = problems.reduce((lastAnswerWasRight, problem) => {
    if (lastAnswerWasRight === false) return lastAnswerWasRight;

    onShowProblem(problem.description);
    const answer = onReplyToProblem();

    isRightAnswer(problem, answer)
      ? onRightAnswer()
      : onWrongAnswer(answer, problem.solution);

    return isRightAnswer(problem, answer);
  }, null);

  isWonQuiz
    ? onWonQuiz(playerName)
    : onLoseQuiz(playerName);
};

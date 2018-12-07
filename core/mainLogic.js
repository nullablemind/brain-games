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

  const isWonQuiz = problems.reduce((lastAnswerWasRight, problem, index) => {
    if (lastAnswerWasRight === false) return lastAnswerWasRight;

    onShowProblem(problem.description);
    const answer = onReplyToProblem();

    if (!isRightAnswer(problem, answer)) {
      onWrongAnswer(answer, problem.solution);
      return false;
    }

    onRightAnswer();
    return true;
  }, null);

  isWonQuiz
    ? onWonQuiz(playerName)
    : onLoseQuiz(playerName);
};

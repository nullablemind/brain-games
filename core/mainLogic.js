import { generateProblems, isRightAnswer } from './createListOfQuiz';

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

  problems.reduce((lastAnsweredCorrectly, problem, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    onShowProblem(problem.question);
    const answer = onReplyToProblem();

    if (!isRightAnswer(problem, answer)) {
      onWrongAnswer(answer, problem.solution);
      onLoseQuiz(playerName);

      return false;
    }

    onRightAnswer();

    const attempt = index + 1;
    if (attempt === problems.length) {
      onWonQuiz(playerName);
    }
    return true;
  }, null);
};

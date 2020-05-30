const play = (args) => {
  const {
    generateProblem, remainProblems = 3,
    getAnswer, onCorrect, onWrong, onWon, onLost,
  } = args;

  if (remainProblems === 0) {
    onWon();
    return;
  }

  const { description, solution } = generateProblem(remainProblems);

  const playerAnswer = getAnswer(description);

  if (playerAnswer === solution) {
    onCorrect(solution);
    play({ ...args, remainProblems: remainProblems - 1 });
    return;
  }

  onWrong(playerAnswer, solution);
  onLost();
};

module.exports = play;

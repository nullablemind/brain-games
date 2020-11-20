module.exports = ({ gameDescription, generateProblem }, { speak, ask }) => {
  const PROBLEMS_TO_SOLVE = 3;
  let playerName = 'guest';

  intro();
  play();

  function intro() {
    speak('Welcome to the Brain Games!\n');
    speak(`${gameDescription}\n\n`);

    playerName = ask('May I have your name, please? ');
    speak(`Hello, ${playerName}!\n\n`);
  }

  function play(problemNumber = 1) {
    const problem = generateProblem(problemNumber);

    const playerAnswer = askAndAnswer(problem, problemNumber);

    if (isCorrectAnswer(playerAnswer, problem)) {
      onCorrectAnswer();

      if (isWin(problemNumber)) {
        onWon();
      } else {
        play(problemNumber + 1);
      }
    } else {
      onLost(playerAnswer, problem);
    }
  }

  function isWin(problemNumber) {
    return PROBLEMS_TO_SOLVE === problemNumber;
  }

  function isCorrectAnswer(playerAnswer, problem) {
    return playerAnswer === problem.solution;
  }

  function askAndAnswer(problem, problemNumber) {
    speak(`Question: ${problem.description}\n`);
    const playerAnswer = ask('Your answer: ', problemNumber);

    return playerAnswer;
  }

  function onCorrectAnswer() {
    speak('Correct!\n\n');
  }

  function onWon() {
    speak(`Congratulations, ${playerName}!\n`);
  }

  function onLost(playerAnswer, problem) {
    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${problem.solution}".\n\n`);
    speak(`Let's try again, ${playerName}!\n`);
  }
};

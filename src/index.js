module.exports = ({ gameDescription, generateProblem }, { speak, ask }) => {
  speak('Welcome to the Brain Games!\n');
  speak(`${gameDescription}\n\n`);

  const playerName = ask('May I have your name, please? ');
  speak(`Hello, ${playerName}!\n\n`);

  const play = (remainProblems) => {
    if (remainProblems === 0) return speak(`Congratulations, ${playerName}!\n`);

    const { description, solution } = generateProblem(remainProblems);

    speak(`Question: ${description}\n`);
    const playerAnswer = ask('Your answer: ', remainProblems);

    if (playerAnswer === solution) {
      speak('Correct!\n\n');
      return play(remainProblems - 1);
    }

    speak(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n\n`);
    return speak(`Let's try again, ${playerName}!\n`);
  };

  play(3);
};

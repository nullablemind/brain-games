import quiz from './mainLogic';

export default ({ write, read }) =>
  quiz({
    onIntro(description) {
      write('Welcome to the Brain Games!\n');
      write(`Quiz description: ${description}\n\n`);
    },
    onMeet() {
      write('May I have your name? ');
      return read();
    },
    onWelcomePlayer(playerName) {
      write(`Hello, ${playerName}!\n\n`);
    },
    onShowProblem(problem) {
      write(`Problem: ${problem}\nYour answer: `);
    },
    onReplyToProblem() {
      return read();
    },
    onRightAnswer() {
      write('Correct!\n\n');
    },
    onWrongAnswer(playerAnswer, solution) {
      write(`\n"${playerAnswer}" is wrong answer ;(. Correct answer was "${solution}".\n`);
    },
    onWonQuiz(playerName) {
      write(`Congratulations, ${playerName}! You won.\n`);
    },
    onLoseQuiz(playerName) {
      write(`Let's try again, ${playerName}!\n`);
    },
  });

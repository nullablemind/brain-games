import quiz from './mainLogic';
import createListOfQuiz from './createListOfQuiz';

export default ({ write, read }) =>
  quiz({
    onWelcome({ description }) {
      write('Welcome to the Brain Games!\n');
      write(`Quiz description: ${description}\n\n`);
    },
    onMeet() {
      write('May I have your name? ');
      const playerName = read();
      write(`Hello, ${playerName}!\n\n`);
      return playerName;
    },
    onShowProblem(question) {
      write(`Question: ${question}\nYour answer: `);
      return read();
    },
    onRightAnswer() {
      write('Correct!\n\n');
    },
    onWinQuiz({ playerName }) {
      write(`Congratulations, ${playerName}!\n`);
    },
    onWrongAnswer(quiz, playerAnswer) {
      write(`\n"${playerAnswer}" is wrong answer ;(. Correct answer was "${quiz.solution}".\n`);
    },
    onLoseQuiz({ playerName }) {
      write(`Let's try again, ${playerName}!\n`);
    },
  });

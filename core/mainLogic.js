import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

const quiz = args => {
  const {
    listOfQuiz = [],
    onNextQuestion = () => {},
    onWrongAnswer = () => {},
    onRightAnswer = () => {},
    onWinQuiz = () => {},
    onLoseQuiz = () => {},
  } = args;

  listOfQuiz.reduce((lastAnsweredCorrectly, quiz, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    const answer = onNextQuestion(quiz);

    if (!isRightAnswer(quiz, answer)) {
      onWrongAnswer(quiz, answer);
      onLoseQuiz();

      return false;
    }

    onRightAnswer(quiz);

    if (index === listOfQuiz.length) {
      onWinQuiz();
    }
    return true;
  }, null);
};

export default ({ write, read }) =>
  ({ description, generatorQuiz, attempts = 3 }) => {
    write('Welcome to the Brain Games!\n');
    write(`Quiz description: ${description}\n\n`);

    write('May I have your name? ');
    const playerName = read();
    write(`Hello, ${playerName}!\n\n`);

    quiz({
      listOfQuiz: createListOfQuiz(generatorQuiz, attempts),
      onNextQuestion(quiz) {
        write(`Question: ${quiz.question}\nYour answer: `);
        return read();
      },
      onRightAnswer() {
        write('Correct!\n\n');
      },
      onWinQuiz() {
        write(`Congratulations, ${playerName}!\n`);
      },
      onWrongAnswer(quiz, playerAnswer) {
        write(`\n"${playerAnswer}" is wrong answer ;(. Correct answer was "${quiz.solution}".\n`);
      },
      onLoseQuiz() {
        write(`Let's try again, ${playerName}!\n`);
      },
    });
  };

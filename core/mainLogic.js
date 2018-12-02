import { createListOfQuiz, isRightAnswer } from './createListOfQuiz';

const quiz = args => {
  const {
    generatorQuiz,
    attempts,
    description,
    onWelcome = () => {},
    onGetPlayerName = () => {},
    onNextQuestion = () => {},
    onWrongAnswer = () => {},
    onRightAnswer = () => {},
    onWinQuiz = () => {},
    onLoseQuiz = () => {},
  } = args;

  onWelcome({ description });

  const playerName = onGetPlayerName();

  createListOfQuiz(generatorQuiz, attempts).reduce((lastAnsweredCorrectly, quiz, index) => {
    if (lastAnsweredCorrectly === false) return lastAnsweredCorrectly;

    const answer = onNextQuestion(quiz);

    if (!isRightAnswer(quiz, answer)) {
      onWrongAnswer(quiz, answer);
      onLoseQuiz({ playerName });

      return false;
    }

    onRightAnswer(quiz);

    const attempt = index + 1;
    if (attempt === attempts) {
      onWinQuiz({ playerName });
    }
    return true;
  }, null);
};

export default ({ write, read }) =>
  ({ description, generatorQuiz, attempts = 3 }) => {
    quiz({
      generatorQuiz,
      attempts,
      description,
      onWelcome({ description }) {
        write('Welcome to the Brain Games!\n');
        write(`Quiz description: ${description}\n\n`);
      },
      onGetPlayerName() {
        write('May I have your name? ');
        const playerName = read();
        write(`Hello, ${playerName}!\n\n`);
        return playerName;
      },
      onNextQuestion(quiz) {
        write(`Question: ${quiz.question}\nYour answer: `);
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
  };

// @flow
import readlineSync from 'readline-sync';

const greetingGame = () =>
  console.log('Welcome to the Brain Games!');

const displayDescriptionGame = (desc: string) =>
  console.log(`${desc}\n`);

const getUserName = () =>
  readlineSync.question('May I have your name? ');

const greetingUser = (userName: string) =>
  console.log(`Hello, ${userName}!\n`);

const playing = ({
  quantityRepeat = 3,
  getRandomQuestion,
  toStringQuestion = (question: any) => question,
  getCorrectAnswer,
} : {
  quantityRepeat?: number,
  getRandomQuestion: Function,
  toStringQuestion?: Function,
  getCorrectAnswer: Function
}) => {
  for (let i = 0; i < quantityRepeat; i += 1) {
    const question = getRandomQuestion();
    console.log(`Question: ${toStringQuestion(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }

  return true;
};

const gameEnd = (isWin: boolean, userName: string) =>
  (isWin
      ? console.log(`Congratulations, ${userName}`)
      : console.log(`Let's try again, ${userName}!`)
  );

export { greetingGame, displayDescriptionGame, getUserName, greetingUser, playing, gameEnd };

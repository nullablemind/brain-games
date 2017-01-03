// @flow
import readlineSync from 'readline-sync';

export default ({
  descriptionGame, getRandomQuestion, toStringQuestion = q => q, getCorrectAnswer,
} : {
  descriptionGame: string,
  getRandomQuestion: Function,
  toStringQuestion?: Function,
  getCorrectAnswer: Function
}) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let isWin = false;
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomQuestion();
    console.log(`Question: ${toStringQuestion(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      isWin = true;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      isWin = false;
      break;
    }
  }

  if (isWin) {
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

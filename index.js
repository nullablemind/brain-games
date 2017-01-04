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

  let lostGame = false;
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomQuestion();
    console.log(`Question: ${toStringQuestion(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      lostGame = true;
      break;
    }
  }

  if (lostGame) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}`);
  }
};

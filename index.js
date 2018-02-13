// @flow
import readlineSync from 'readline-sync';

const print = (string: string, funcPrint?: Function) =>
  (funcPrint ? funcPrint(string) : console.log(string));

const ask = (question: string) => readlineSync.question(question);

function GameCycle({ attempts, generatorQuestion }) {
  let isLostGame = false;

  this.onWinStep = () => {};
  this.onWinGame = () => {};
  this.onLostStep = () => {};
  this.onLostGame = () => {};

  this.play = () => {
    for (let i = 0; i < attempts; i += 1) {
      const question = generatorQuestion();
      print(`Question: ${question.string}`);

      const userAnswer = ask('Your answer: ');
      const rightAnswer = question.answer;

      if (this._isEqualAnswers(rightAnswer, userAnswer)) {
        this.onWinStep({ userAnswer, rightAnswer });
      } else {
        this.onLostStep({ userAnswer, rightAnswer });
        isLostGame = true;
        break;
      }
    }

    if (isLostGame) {
      this.onLostGame();
    } else {
      this.onWinGame();
    }
  };

  this._isEqualAnswers = (answer1: *, answer2: *) =>
    answer1.toString() === answer2.toString();
}

export default ({
  description, generatorQuestion, attempts = 3,
} : {
  description: string,
  generatorQuestion: Function,
  attempts?: number,
}) => {
  print('Welcome to the Brain Games!');
  print(`${description}\n`);

  const userName = ask('May I have your name? ');
  print(`Hello, ${userName}!\n`);

  const gameCycle = new GameCycle({ attempts, generatorQuestion });

  gameCycle.onLostStep = ({ userAnswer, rightAnswer }) =>
    print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);

  gameCycle.onWinStep = () => print('Correct!');
  gameCycle.onLostGame = () => print(`Let's try again, ${userName}!`);
  gameCycle.onWinGame = () => print(`Congratulations, ${userName}`);

  gameCycle.play();
};

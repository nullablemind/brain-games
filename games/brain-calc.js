// @flow
import game from '../index';
import { getRandomNumber } from '../utils';

const getRandomArithmeticSign = (generatorRandomNumber: Function) => {
  switch (generatorRandomNumber(1, 4)) { // eslint-disable-line
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    case 4:
      return '/';
    default:
      throw Error('function generatorRandomNumber should return number from 1 to 4');
  }
};

const calc = (arithmeticSign: string, number1: number, number2: number) => {
  switch (arithmeticSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      throw Error(`don't know operations ${arithmeticSign}`);
  }
};

export default () =>
  game({
    descriptionGame: 'What is the result of the expression?',
    getRandomQuestion: () => {
      const arithmeticSign = getRandomArithmeticSign(getRandomNumber);
      const number1 = getRandomNumber(1, 100);
      const number2 = getRandomNumber(1, 100);

      return { arithmeticSign, number1, number2 };
    },
    toStringQuestion: ({ arithmeticSign, number1, number2 }) =>
      `${number1} ${arithmeticSign} ${number2}`,
    getCorrectAnswer: ({ arithmeticSign, number1, number2 }) =>
      String(calc(arithmeticSign, number1, number2)),
  });
